// ===== Data Management =====
class MediaTracker {
    constructor() {
        this.media = this.loadFromStorage();
        this.currentFilter = { type: 'all', status: 'all' };
        this.currentSort = 'ratingDesc'; // Default: highest rating first
        this.searchQuery = '';
        this.editingId = null;
        this.deletingId = null;
        this.suggestionTimeout = null;
        this.currentPage = 1;
        this.itemsPerPage = 20;
        this.compactView = false;
        this.init();
    }

    init() {
        this.bindEvents();
        this.render();
        this.updateStats();
    }

    // ===== Local Storage =====
    loadFromStorage() {
        try {
            const data = localStorage.getItem('mediaTracker');
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Error loading data:', error);
            return [];
        }
    }

    saveToStorage() {
        try {
            localStorage.setItem('mediaTracker', JSON.stringify(this.media));
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }

    // ===== Backup & Export =====
    exportData() {
        try {
            const exportData = {
                version: '1.0',
                exportDate: new Date().toISOString(),
                mediaCount: this.media.length,
                media: this.media
            };

            const jsonString = JSON.stringify(exportData, null, 2);
            const blob = new Blob([jsonString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
            a.download = `media-tracker-backup-${timestamp}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            console.log(`✅ Exported ${this.media.length} opere successfully`);
            alert(`✅ Backup creato con successo!\n\n${this.media.length} opere esportate.`);
        } catch (error) {
            console.error('Error exporting data:', error);
            alert('❌ Errore durante l\'esportazione dei dati.');
        }
    }

    importData(file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);

                // Validate data structure
                if (!importedData.media || !Array.isArray(importedData.media)) {
                    throw new Error('Formato file non valido');
                }

                const importCount = importedData.media.length;
                const currentCount = this.media.length;

                // Ask user if they want to replace or merge
                let action = 'merge';
                if (currentCount > 0) {
                    const userChoice = confirm(
                        `Hai già ${currentCount} opere salvate.\n\n` +
                        `Il file contiene ${importCount} opere.\n\n` +
                        `Clicca OK per UNIRE i dati (totale: ${currentCount + importCount})\n` +
                        `Clicca ANNULLA per SOSTITUIRE tutti i dati`
                    );
                    action = userChoice ? 'merge' : 'replace';
                }

                if (action === 'replace') {
                    this.media = importedData.media;
                } else {
                    // Merge: add imported items that don't exist
                    const existingTitles = new Set(this.media.map(m => m.title.toLowerCase()));
                    const newItems = importedData.media.filter(
                        item => !existingTitles.has(item.title.toLowerCase())
                    );
                    this.media = [...this.media, ...newItems];
                }

                this.saveToStorage();
                this.render();
                this.updateStats();

                const finalCount = this.media.length;
                const added = finalCount - currentCount;

                console.log(`✅ Import completed: ${finalCount} total opere`);
                alert(
                    `✅ Import completato!\n\n` +
                    `Opere totali: ${finalCount}\n` +
                    (action === 'merge' && added > 0 ? `Nuove opere aggiunte: ${added}` : '')
                );

                // Reset file input
                document.getElementById('importFileInput').value = '';
            } catch (error) {
                console.error('Error importing data:', error);
                alert(`❌ Errore durante l'importazione:\n${error.message}`);
                document.getElementById('importFileInput').value = '';
            }
        };

        reader.onerror = () => {
            alert('❌ Errore nella lettura del file.');
            document.getElementById('importFileInput').value = '';
        };

        reader.readAsText(file);
    }

    // ===== Event Binding =====
    bindEvents() {
        // Add media buttons
        document.getElementById('addMediaBtn').addEventListener('click', () => this.openModal());
        document.getElementById('addMediaBtnEmpty').addEventListener('click', () => this.openModal());

        // Modal controls
        document.getElementById('modalClose').addEventListener('click', () => this.closeModal());
        document.getElementById('modalOverlay').addEventListener('click', () => this.closeModal());
        document.getElementById('cancelBtn').addEventListener('click', () => this.closeModal());
        document.getElementById('mediaForm').addEventListener('submit', (e) => this.handleSubmit(e));

        // Delete modal
        document.getElementById('deleteModalClose').addEventListener('click', () => this.closeDeleteModal());
        document.getElementById('deleteOverlay').addEventListener('click', () => this.closeDeleteModal());
        document.getElementById('cancelDeleteBtn').addEventListener('click', () => this.closeDeleteModal());
        document.getElementById('confirmDeleteBtn').addEventListener('click', () => this.confirmDelete());

        // Filters
        document.querySelectorAll('#typeFilters .filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleTypeFilter(e));
        });

        document.querySelectorAll('#statusFilters .filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleStatusFilter(e));
        });

        // Search with autocomplete
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.searchQuery = e.target.value.toLowerCase();
            this.render();
            this.showSearchAutocomplete(e.target.value);
        });

        searchInput.addEventListener('focus', (e) => {
            if (e.target.value) {
                this.showSearchAutocomplete(e.target.value);
            }
        });

        // Close autocomplete when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-bar')) {
                this.hideSearchAutocomplete();
            }
        });

        // Sort
        document.getElementById('sortSelect').addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.render();
        });

        // Rating input (now supports decimals)
        document.getElementById('mediaRating').addEventListener('input', (e) => {
            const value = parseFloat(e.target.value);
            if (value >= 1 && value <= 10) {
                this.updateRatingDisplay(value);
            }
        });

        // Title input for suggestions and auto-fetch
        document.getElementById('mediaTitle').addEventListener('input', (e) => {
            this.handleTitleInput(e.target.value);
        });

        // Type change triggers auto-fetch if title exists
        document.getElementById('mediaType').addEventListener('change', (e) => {
            const title = document.getElementById('mediaTitle').value;
            if (title && title.length >= 3) {
                this.autoFetchCover(title, e.target.value);
            }
        });

        // Cover URL preview
        document.getElementById('mediaCover').addEventListener('input', (e) => {
            this.previewCover(e.target.value);
        });

        // Close suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.form-group')) {
                this.hideSuggestions();
            }
        });

        // Pagination controls
        document.getElementById('firstPage').addEventListener('click', () => this.goToPage(1));
        document.getElementById('prevPage').addEventListener('click', () => this.goToPage(this.currentPage - 1));
        document.getElementById('nextPage').addEventListener('click', () => this.goToPage(this.currentPage + 1));
        document.getElementById('lastPage').addEventListener('click', () => {
            const totalPages = this.getTotalPages();
            this.goToPage(totalPages);
        });

        // View toggle
        document.getElementById('viewToggle').addEventListener('click', () => this.toggleView());

        // Items per page
        document.getElementById('itemsPerPageSelect').addEventListener('change', (e) => {
            this.itemsPerPage = e.target.value === 'all' ? Infinity : parseInt(e.target.value);
            this.currentPage = 1;
            this.render();
        });

        // Status change - toggle rating field
        document.getElementById('mediaStatus').addEventListener('change', (e) => {
            this.toggleRatingField(e.target.value);
        });

        // Backup - Export data
        document.getElementById('exportDataBtn').addEventListener('click', () => this.exportData());

        // Backup - Import data
        document.getElementById('importDataBtn').addEventListener('click', () => {
            document.getElementById('importFileInput').click();
        });

        document.getElementById('importFileInput').addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                this.importData(file);
            }
        });
    }

    // ===== Modal Management =====
    openModal(mediaId = null) {
        this.editingId = mediaId;
        const modal = document.getElementById('mediaModal');
        const form = document.getElementById('mediaForm');
        const title = document.getElementById('modalTitle');
        const submitBtn = document.getElementById('submitBtnText');

        form.reset();
        this.hideSuggestions();
        document.getElementById('coverPreview').classList.remove('show');

        if (mediaId) {
            const media = this.media.find(m => m.id === mediaId);
            if (media) {
                title.textContent = 'Modifica Opera';
                submitBtn.textContent = 'Salva';
                document.getElementById('mediaId').value = media.id;
                document.getElementById('mediaTitle').value = media.title;
                document.getElementById('mediaType').value = media.type;
                document.getElementById('mediaStatus').value = media.status;
                document.getElementById('mediaRating').value = media.rating || 5;
                document.getElementById('mediaNotes').value = media.notes || '';
                document.getElementById('mediaCover').value = media.cover || '';
                this.updateRatingDisplay(media.rating || 5);
                if (media.cover) {
                    this.previewCover(media.cover);
                }
            }
        } else {
            title.textContent = 'Aggiungi Opera';
            submitBtn.textContent = 'Aggiungi';
            this.updateRatingDisplay(5);
            // Enable rating by default for new items
            this.toggleRatingField('');
        }

        // Trigger rating field state based on current status
        const currentStatus = document.getElementById('mediaStatus').value;
        this.toggleRatingField(currentStatus);

        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        document.getElementById('mediaModal').classList.remove('show');
        document.body.style.overflow = '';
        this.editingId = null;
        this.hideSuggestions();
        // Re-enable rating field when closing
        this.toggleRatingField('');
    }

    openDeleteModal(mediaId) {
        this.deletingId = mediaId;
        const media = this.media.find(m => m.id === mediaId);
        if (media) {
            document.getElementById('deleteMediaTitle').textContent = media.title;
            document.getElementById('deleteModal').classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    }

    closeDeleteModal() {
        document.getElementById('deleteModal').classList.remove('show');
        document.body.style.overflow = '';
        this.deletingId = null;
    }

    // ===== CRUD Operations =====
    handleSubmit(e) {
        e.preventDefault();

        const status = document.getElementById('mediaStatus').value;
        const ratingInput = document.getElementById('mediaRating');
        const rating = status === 'planned' ? null : parseFloat(ratingInput.value);

        const mediaData = {
            id: this.editingId || Date.now().toString(),
            title: document.getElementById('mediaTitle').value.trim(),
            type: document.getElementById('mediaType').value,
            status: status,
            rating: rating,
            notes: document.getElementById('mediaNotes').value.trim(),
            cover: document.getElementById('mediaCover').value.trim(),
            dateAdded: this.editingId ?
                this.media.find(m => m.id === this.editingId).dateAdded :
                new Date().toISOString()
        };

        if (this.editingId) {
            const index = this.media.findIndex(m => m.id === this.editingId);
            this.media[index] = mediaData;
        } else {
            this.media.push(mediaData);
        }

        this.saveToStorage();
        this.closeModal();
        this.render();
        this.updateStats();
    }

    deleteMedia(id) {
        this.openDeleteModal(id);
    }

    confirmDelete() {
        if (this.deletingId) {
            this.media = this.media.filter(m => m.id !== this.deletingId);
            this.saveToStorage();
            this.closeDeleteModal();
            this.render();
            this.updateStats();
        }
    }

    // ===== Filtering & Sorting =====
    handleTypeFilter(e) {
        document.querySelectorAll('#typeFilters .filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        this.currentFilter.type = e.target.dataset.type;
        this.render();
    }

    handleStatusFilter(e) {
        document.querySelectorAll('#statusFilters .filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        this.currentFilter.status = e.target.dataset.status;
        this.render();
    }

    getFilteredMedia() {
        let filtered = [...this.media];

        // Type filter
        if (this.currentFilter.type !== 'all') {
            filtered = filtered.filter(m => m.type === this.currentFilter.type);
        }

        // Status filter
        if (this.currentFilter.status !== 'all') {
            filtered = filtered.filter(m => m.status === this.currentFilter.status);
        }

        // Search filter
        if (this.searchQuery) {
            filtered = filtered.filter(m =>
                m.title.toLowerCase().includes(this.searchQuery) ||
                (m.notes && m.notes.toLowerCase().includes(this.searchQuery))
            );
        }

        // Sort
        filtered.sort((a, b) => {
            switch (this.currentSort) {
                case 'dateDesc':
                    return new Date(b.dateAdded) - new Date(a.dateAdded);
                case 'dateAsc':
                    return new Date(a.dateAdded) - new Date(b.dateAdded);
                case 'ratingDesc':
                    return b.rating - a.rating;
                case 'ratingAsc':
                    return a.rating - b.rating;
                case 'titleAsc':
                    return a.title.localeCompare(b.title);
                case 'titleDesc':
                    return b.title.localeCompare(a.title);
                default:
                    return 0;
            }
        });

        return filtered;
    }

    // ===== Rendering =====
    render() {
        const grid = document.getElementById('mediaGrid');
        const emptyState = document.getElementById('emptyState');
        const filtered = this.getFilteredMedia();

        // Apply compact view class
        if (this.compactView) {
            grid.classList.add('compact-view');
        } else {
            grid.classList.remove('compact-view');
        }

        if (filtered.length === 0) {
            grid.innerHTML = '';
            emptyState.classList.add('show');
            this.hidePagination();
        } else {
            emptyState.classList.remove('show');

            // Pagination logic
            const totalPages = Math.ceil(filtered.length / this.itemsPerPage);
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = Math.min(startIndex + this.itemsPerPage, filtered.length);
            const paginatedMedia = filtered.slice(startIndex, endIndex);

            grid.innerHTML = paginatedMedia.map(media => this.createMediaCard(media)).join('');

            // Bind action buttons
            paginatedMedia.forEach(media => {
                document.getElementById(`edit-${media.id}`).addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.openModal(media.id);
                });

                document.getElementById(`delete-${media.id}`).addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.deleteMedia(media.id);
                });
            });

            // Update pagination controls
            this.updatePaginationControls(totalPages, filtered.length);
        }
    }

    createMediaCard(media) {
        const typeEmojis = {
            game: '🎮',
            anime: '📺',
            series: '🎬',
            movie: '🎥'
        };

        const statusConfig = {
            completed: {
                label: media.type === 'game' ? '✅ Completato' : '✅ Visto',
                class: 'status-completed'
            },
            watching: {
                label: media.type === 'game' ? '▶️ In Corso' : '▶️ In Visione',
                class: 'status-watching'
            },
            'on-hold': {
                label: '⏸️ Riprendere',
                class: 'status-on-hold'
            },
            planned: {
                label: media.type === 'game' ? '📋 Da Giocare' : '📋 Da Vedere',
                class: 'status-planned'
            },
            replay: {
                label: media.type === 'game' ? '🔄 Da Rigiocare' : '🔄 Da Rivedere',
                class: 'status-replay'
            }
        };

        const status = statusConfig[media.status];
        const stars = this.generateStars(media.rating);
        const coverContent = media.cover ?
            `<img src="${media.cover}" alt="${media.title}" onerror="this.parentElement.innerHTML='<div class=\\'media-placeholder\\'>${this.getInitials(media.title)}</div>'">` :
            `<div class="media-placeholder">${this.getInitials(media.title)}</div>`;

        return `
            <div class="media-card">
                <div class="media-cover">
                    ${coverContent}
                </div>
                <div class="media-info">
                    <div class="media-header">
                        <h3 class="media-title">${this.escapeHtml(media.title)}</h3>
                        <span class="media-type-badge">${typeEmojis[media.type]}</span>
                    </div>
                    <div class="media-status ${status.class}">${status.label}</div>
                    <div class="media-rating">
                        ${media.rating ? `
                            <div class="stars">${stars}</div>
                            <span class="rating-number">${media.rating}/10</span>
                        ` : '<span class="rating-number" style="color: var(--text-muted);">Nessun voto</span>'}
                    </div>
                    ${media.notes ? `<p class="media-notes">${this.escapeHtml(media.notes)}</p>` : ''}
                    <div class="media-actions">
                        <button class="action-btn" id="edit-${media.id}">✏️ Modifica</button>
                        <button class="action-btn delete" id="delete-${media.id}">🗑️ Elimina</button>
                    </div>
                </div>
            </div>
        `;
    }

    generateStars(rating) {
        // Convert rating (1-10) to stars (0-5)
        const starRating = rating / 2;
        const fullStars = Math.floor(starRating);
        const hasHalfStar = (starRating % 1) >= 0.25 && (starRating % 1) < 0.75;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        let stars = '';
        for (let i = 0; i < fullStars; i++) {
            stars += '<span class="star">★</span>';
        }
        if (hasHalfStar) {
            stars += '<span class="star half">★</span>';
        }
        for (let i = 0; i < emptyStars; i++) {
            stars += '<span class="star empty">★</span>';
        }

        return stars;
    }

    getInitials(title) {
        return title
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .substring(0, 3);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ===== Stats =====
    updateStats() {
        const total = this.media.length;
        const completed = this.media.filter(m => m.status === 'completed').length;
        const watching = this.media.filter(m => m.status === 'watching').length;
        const avgRating = total > 0 ?
            (this.media.reduce((sum, m) => sum + m.rating, 0) / total).toFixed(1) :
            '-';

        document.getElementById('totalCount').textContent = total;
        document.getElementById('completedCount').textContent = completed;
        document.getElementById('watchingCount').textContent = watching;
        document.getElementById('avgRating').textContent = avgRating;
    }

    // ===== UI Helpers =====
    updateRatingDisplay(value) {
        const numValue = parseFloat(value);
        if (isNaN(numValue) || numValue < 1 || numValue > 10) return;

        const starsContainer = document.getElementById('ratingStars');
        starsContainer.innerHTML = this.generateStars(numValue);
    }

    previewCover(url) {
        const preview = document.getElementById('coverPreview');
        if (url) {
            preview.innerHTML = `<img src="${url}" alt="Preview" onerror="this.parentElement.classList.remove('show')">`;
            preview.classList.add('show');
        } else {
            preview.classList.remove('show');
        }
    }

    toggleRatingField(status) {
        const ratingInput = document.getElementById('mediaRating');
        const ratingGroup = document.getElementById('ratingGroup');
        const ratingOptional = document.getElementById('ratingOptional');

        if (status === 'planned') {
            // Disable rating for "Da Vedere" status
            ratingInput.disabled = true;
            ratingInput.value = '';
            ratingInput.removeAttribute('required');
            ratingGroup.style.opacity = '0.5';
            ratingOptional.textContent = '(Non disponibile per opere da vedere)';
            document.getElementById('ratingStars').innerHTML = '';
        } else {
            // Enable rating for all other statuses
            ratingInput.disabled = false;
            ratingInput.setAttribute('required', 'required');
            ratingGroup.style.opacity = '1';
            ratingOptional.textContent = '';
            if (!ratingInput.value) {
                ratingInput.value = 5;
                this.updateRatingDisplay(5);
            }
        }
    }

    // ===== Cover Image API Integration =====
    async handleTitleInput(title) {
        clearTimeout(this.suggestionTimeout);

        if (title.length < 3) {
            this.hideSuggestions();
            return;
        }

        this.suggestionTimeout = setTimeout(async () => {
            const type = document.getElementById('mediaType').value;
            if (!type) {
                this.hideSuggestions();
                return;
            }

            // Fetch suggestions
            await this.fetchSuggestions(title, type);

            // Auto-fetch cover if no manual URL is set
            const coverInput = document.getElementById('mediaCover');
            if (!coverInput.value) {
                console.log('Triggering auto-fetch for:', title, type);
                await this.autoFetchCover(title, type);
            }
        }, 800);
    }

    async autoFetchCover(title, type) {
        if (!title || !type || title.length < 3) return;

        const coverInput = document.getElementById('mediaCover');
        const originalPlaceholder = coverInput.placeholder;
        coverInput.placeholder = "🔄 Cercando copertina...";

        try {
            console.log('Fetching cover for:', title, 'Type:', type);
            let coverUrl = '';

            if (type === 'game') {
                const results = await this.searchGames(title);
                if (results.length > 0 && results[0].cover) {
                    coverUrl = results[0].cover;
                }
            } else if (type === 'anime' || type === 'series' || type === 'movie') {
                const results = await this.searchTMDB(title, type);
                if (results.length > 0 && results[0].cover) {
                    coverUrl = results[0].cover;
                }
            }

            if (coverUrl) {
                coverInput.value = coverUrl;
                this.previewCover(coverUrl);
                console.log('Cover found:', coverUrl);
            } else {
                console.log('No cover found');
                coverInput.placeholder = "Nessuna copertina trovata automaticamente";
            }
        } catch (error) {
            console.error('Error auto-fetching cover:', error);
            coverInput.placeholder = "Errore ricerca copertina";
        } finally {
            setTimeout(() => {
                if (!coverInput.value) {
                    coverInput.placeholder = originalPlaceholder;
                }
            }, 3000);
        }
    }

    async fetchSuggestions(title, type) {
        try {
            let results = [];

            if (type === 'game') {
                results = await this.searchGames(title);
            } else if (type === 'anime' || type === 'series' || type === 'movie') {
                results = await this.searchTMDB(title, type);
            }

            this.displaySuggestions(results);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
            this.hideSuggestions();
        }
    }

    async searchGames(query) {
        console.log('🎮 Searching games with query:', query);

        // Call all APIs in parallel and return the first successful result
        const searchPromises = [
            this.searchCheapShark(query).catch(err => ({ error: err.message, source: 'CheapShark' })),
            this.searchRAWG(query).catch(err => ({ error: err.message, source: 'RAWG' })),
            this.searchFreeToGame(query).catch(err => ({ error: err.message, source: 'FreeToGame' }))
        ];

        try {
            // Use Promise.race to get the first successful result
            const results = await Promise.all(searchPromises);

            // Find the first successful result (array with length > 0)
            for (const result of results) {
                if (Array.isArray(result) && result.length > 0) {
                    const source = result[0].type === 'game' ? 'API' : 'Unknown';
                    console.log(`✅ Found ${result.length} results from first successful API`);
                    return result;
                }
            }

            // If all failed, log errors
            results.forEach(result => {
                if (result.error) {
                    console.warn(`⚠️ ${result.source} failed:`, result.error);
                }
            });

            console.error('❌ All game search APIs failed for:', query);
            return [];
        } catch (error) {
            console.error('❌ Unexpected error in game search:', error);
            return [];
        }
    }

    async searchRAWG(query) {
        const apiKey = 'd0b3e8f5a8f44e0b8e5f5a8f44e0b8e5';
        const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&search=${encodeURIComponent(query)}&page_size=10`;

        // Add timeout to prevent hanging
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        try {
            // Try with CORS proxy
            const proxyUrl = 'https://api.allorigins.win/get?url=';
            const response = await fetch(proxyUrl + encodeURIComponent(apiUrl), {
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`RAWG HTTP ${response.status}`);
            }

            const proxyData = await response.json();
            const data = JSON.parse(proxyData.contents);

            if (!data.results || data.results.length === 0) {
                throw new Error('No results from RAWG');
            }

            return data.results.slice(0, 5).map(game => ({
                title: game.name,
                cover: game.background_image,
                year: game.released ? new Date(game.released).getFullYear() : '',
                type: 'game'
            }));
        } catch (error) {
            clearTimeout(timeoutId);
            throw error;
        }
    }

    async searchCheapShark(query) {
        // CheapShark has a deals API that includes game info
        const apiUrl = `https://www.cheapshark.com/api/1.0/games?title=${encodeURIComponent(query)}&limit=5`;

        // Add timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        try {
            const response = await fetch(apiUrl, { signal: controller.signal });
            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`CheapShark HTTP ${response.status}`);
            }

            const data = await response.json();

            if (!data || data.length === 0) {
                throw new Error('No results from CheapShark');
            }

            return data.map(game => ({
                title: game.external,
                cover: game.thumb,
                year: '',
                type: 'game'
            }));
        } catch (error) {
            clearTimeout(timeoutId);
            throw error;
        }
    }

    async searchFreeToGame(query) {
        // FreeToGame API - free games database
        const apiUrl = 'https://www.freetogame.com/api/games';

        // Add timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        try {
            const response = await fetch(apiUrl, { signal: controller.signal });
            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`FreeToGame HTTP ${response.status}`);
            }

            const data = await response.json();

            if (!data || data.length === 0) {
                throw new Error('No results from FreeToGame');
            }

            // Filter games by query
            const filtered = data.filter(game =>
                game.title.toLowerCase().includes(query.toLowerCase())
            ).slice(0, 5);

            if (filtered.length === 0) {
                throw new Error('No matching games in FreeToGame');
            }

            return filtered.map(game => ({
                title: game.title,
                cover: game.thumbnail,
                year: game.release_date ? new Date(game.release_date).getFullYear() : '',
                type: 'game'
            }));
        } catch (error) {
            clearTimeout(timeoutId);
            throw error;
        }
    }

    async searchTMDB(query, type) {
        try {
            // Determine the correct media type for TMDB API
            // anime and series -> tv, movie -> movie
            const mediaType = (type === 'anime' || type === 'series') ? 'tv' : 'movie';
            const apiKey = '8265bd1679663a7ea12ac168da84d2e8';

            // Build API URL with optimized parameters
            // For anime, also search in original language (Japanese)
            const language = type === 'anime' ? 'ja-JP' : 'it-IT';
            let apiUrl = `https://api.themoviedb.org/3/search/${mediaType}?api_key=${apiKey}&language=${language}&query=${encodeURIComponent(query)}&page=1&include_adult=false`;

            // Try direct API call first (CORS might work for TMDB)
            let response = await fetch(apiUrl).catch(() => null);

            // If direct call fails or returns no results for anime, try with Italian language
            if ((!response || !response.ok) && type === 'anime') {
                console.log('Trying anime search with Italian language...');
                apiUrl = `https://api.themoviedb.org/3/search/${mediaType}?api_key=${apiKey}&language=it-IT&query=${encodeURIComponent(query)}&page=1&include_adult=false`;
                response = await fetch(apiUrl).catch(() => null);
            }

            // If direct call still fails, use proxy
            if (!response || !response.ok) {
                console.log('Direct TMDB call failed, trying with proxy...');
                const proxyUrl = 'https://api.allorigins.win/raw?url=';
                response = await fetch(proxyUrl + encodeURIComponent(apiUrl)).catch(() => null);
            }

            // Try alternative proxy if first one fails
            if (!response || !response.ok) {
                console.log('First proxy failed, trying alternative...');
                const altProxyUrl = 'https://api.codetabs.com/v1/proxy?quest=';
                response = await fetch(altProxyUrl + encodeURIComponent(apiUrl)).catch(() => null);
            }

            if (!response || !response.ok) {
                console.warn('TMDB API failed with all methods:', response?.status);
                return [];
            }

            const data = await response.json();

            if (!data.results || data.results.length === 0) {
                console.log(`No ${mediaType} results found for:`, query);
                return [];
            }

            console.log(`Found ${data.results.length} results for ${query}`);

            return data.results.slice(0, 5).map(item => ({
                title: item.name || item.title,
                cover: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : '',
                year: (item.first_air_date || item.release_date) ? new Date(item.first_air_date || item.release_date).getFullYear() : '',
                type: type
            }));
        } catch (error) {
            console.error('Error searching TMDB:', error);
            return [];
        }
    }

    displaySuggestions(results) {
        const container = document.getElementById('suggestions');

        if (results.length === 0) {
            this.hideSuggestions();
            return;
        }

        container.innerHTML = results.map(item => `
            <div class="suggestion-item" data-title="${this.escapeHtml(item.title)}" data-cover="${item.cover || ''}">
                ${item.cover ?
                `<img src="${item.cover}" alt="${item.title}" class="suggestion-cover">` :
                `<div class="suggestion-cover" style="display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">N/A</div>`
            }
                <div class="suggestion-info">
                    <div class="suggestion-title">${this.escapeHtml(item.title)}</div>
                    ${item.year ? `<div class="suggestion-meta">${item.year}</div>` : ''}
                </div>
            </div>
        `).join('');

        container.classList.add('show');

        // Bind click events
        container.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                document.getElementById('mediaTitle').value = item.dataset.title;
                document.getElementById('mediaCover').value = item.dataset.cover;
                this.previewCover(item.dataset.cover);
                this.hideSuggestions();
            });
        });
    }

    hideSuggestions() {
        document.getElementById('suggestions').classList.remove('show');
    }

    // ===== Search Autocomplete =====
    showSearchAutocomplete(query) {
        if (!query || query.length < 2) {
            this.hideSearchAutocomplete();
            return;
        }

        // Get all unique titles from media that match the query
        const titles = this.media
            .map(m => m.title)
            .filter(title => title.toLowerCase().includes(query.toLowerCase()))
            .slice(0, 5);

        if (titles.length === 0) {
            this.hideSearchAutocomplete();
            return;
        }

        // Create autocomplete dropdown if it doesn't exist
        let autocomplete = document.getElementById('searchAutocomplete');
        if (!autocomplete) {
            autocomplete = document.createElement('div');
            autocomplete.id = 'searchAutocomplete';
            autocomplete.className = 'suggestions search-autocomplete';
            autocomplete.style.position = 'absolute';
            autocomplete.style.top = '100%';
            autocomplete.style.left = '0';
            autocomplete.style.right = '0';
            autocomplete.style.zIndex = '100';
            document.querySelector('.search-bar').appendChild(autocomplete);
        }

        autocomplete.innerHTML = titles.map(title => `
            <div class="autocomplete-item" data-title="${this.escapeHtml(title)}">
                <span>🔍</span>
                <span>${this.escapeHtml(title)}</span>
            </div>
        `).join('');

        autocomplete.classList.add('show');

        // Bind click events
        autocomplete.querySelectorAll('.autocomplete-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const searchInput = document.getElementById('searchInput');
                searchInput.value = item.dataset.title;
                this.searchQuery = item.dataset.title.toLowerCase();
                this.render();
                this.hideSearchAutocomplete();
            });
        });
    }

    hideSearchAutocomplete() {
        const autocomplete = document.getElementById('searchAutocomplete');
        if (autocomplete) {
            autocomplete.classList.remove('show');
        }
    }

    // ===== Pagination Helpers =====
    getTotalPages() {
        const filtered = this.getFilteredMedia();
        return Math.ceil(filtered.length / this.itemsPerPage);
    }

    goToPage(page) {
        const totalPages = this.getTotalPages();
        if (page >= 1 && page <= totalPages) {
            this.currentPage = page;
            this.render();
            // Scroll to top of grid
            document.getElementById('mediaGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    updatePaginationControls(totalPages, totalItems) {
        const paginationTop = document.getElementById('paginationTop');
        const pageInfo = document.getElementById('pageInfo');
        const firstBtn = document.getElementById('firstPage');
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');
        const lastBtn = document.getElementById('lastPage');

        // Show/hide pagination
        if (totalPages <= 1) {
            paginationTop.style.display = 'none';
        } else {
            paginationTop.style.display = 'flex';
        }

        // Update page info
        const startItem = (this.currentPage - 1) * this.itemsPerPage + 1;
        const endItem = Math.min(this.currentPage * this.itemsPerPage, totalItems);
        pageInfo.textContent = `${startItem}-${endItem} di ${totalItems}`;

        // Update button states
        firstBtn.disabled = this.currentPage === 1;
        prevBtn.disabled = this.currentPage === 1;
        nextBtn.disabled = this.currentPage === totalPages;
        lastBtn.disabled = this.currentPage === totalPages;
    }

    hidePagination() {
        document.getElementById('paginationTop').style.display = 'none';
    }

    // ===== View Toggle =====
    toggleView() {
        this.compactView = !this.compactView;
        const viewToggle = document.getElementById('viewToggle');
        const viewIcon = document.getElementById('viewIcon');
        const viewText = document.getElementById('viewText');

        if (this.compactView) {
            viewToggle.classList.add('active');
            viewIcon.textContent = '📋';
            viewText.textContent = 'Normale';
        } else {
            viewToggle.classList.remove('active');
            viewIcon.textContent = '📋';
            viewText.textContent = 'Compatta';
        }

        this.render();
    }
}

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    new MediaTracker();
});
