# Media Tracker - Le Mie Opere

Applicazione web per tracciare videogiochi, anime, serie TV e film con voti, stati e note personali.

## 🚀 Funzionalità

- ✅ **Multi-tipo**: Videogiochi, Anime, Serie TV, Film
- ✅ **Ricerca Automatica**: Copertine e informazioni tramite API
- ✅ **Stati Personalizzati**: Completato, In Corso, Da Vedere, ecc.
- ✅ **Sistema di Voti**: Valutazione da 1 a 10 con stelle
- ✅ **Filtri Avanzati**: Per tipo, stato, voto
- ✅ **Backup/Export**: Esporta e importa i tuoi dati in JSON
- ✅ **Vista Compatta**: Modalità lista o griglia
- ✅ **Paginazione**: Gestione di grandi collezioni
- ✅ **Ricerca Veloce**: Trova rapidamente le tue opere

## 📦 Installazione

1. Clona il repository:
```bash
git clone https://bitbucket.org/USERNAME/media-tracker.git
cd media-tracker
```

2. Avvia il server locale:
```bash
# Windows
.\avvia-server.bat

# Linux/Mac
python3 -m http.server 8000
```

3. Apri il browser su: `http://localhost:8000`

## 🎮 Utilizzo

### Aggiungere un'Opera
1. Clicca "Aggiungi Opera"
2. Seleziona il tipo (Videogioco, Anime, Serie TV, Film)
3. Digita il titolo - la ricerca automatica troverà la copertina
4. Seleziona lo stato e aggiungi un voto
5. Salva!

### Backup dei Dati
- **Esporta**: Clicca "💾 Esporta Dati" per scaricare un file JSON
- **Importa**: Clicca "📥 Importa Dati" per caricare un backup

### Filtri e Ricerca
- Usa la barra di ricerca per trovare opere per titolo
- Filtra per tipo (Videogiochi, Anime, ecc.)
- Filtra per stato (Completato, In Corso, ecc.)
- Ordina per voto, data o titolo

## 🛠️ Tecnologie

- **HTML5** - Struttura
- **CSS3** - Stili moderni con variabili CSS
- **JavaScript (Vanilla)** - Logica applicazione
- **LocalStorage** - Salvataggio dati locale
- **API Esterne**:
  - RAWG API (videogiochi)
  - CheapShark API (videogiochi)
  - TMDB API (film e serie TV)
  - Jikan API (anime)

## 📊 Statistiche

L'app mostra automaticamente:
- Totale opere
- Opere completate
- Opere in corso
- Voto medio

## 🔄 Aggiornamenti Recenti

### v1.2.0 (2025-12-29)
- ✅ Aggiunto sistema export/import dati JSON
- ✅ Ottimizzata ricerca videogiochi (400% più veloce)
- ✅ Corrette proporzioni copertine (no più stretching)
- ✅ Ricerca parallela multi-API

### v1.1.0 (2025-12-25)
- ✅ Aggiunta paginazione
- ✅ Vista compatta
- ✅ Selettore items per pagina

## 📝 Licenza

Progetto personale - Uso libero

## 👤 Autore

Steven - [Bitbucket](https://bitbucket.org/USERNAME)

## 🤝 Contribuire

1. Fai un fork del progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit delle modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📞 Supporto

Per problemi o domande, apri un issue su Bitbucket.
