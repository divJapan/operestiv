# Media Tracker - Come Avviare

## 🚨 Problema CORS Risolto

Le copertine automatiche non funzionano quando apri `index.html` direttamente dal file system a causa delle restrizioni CORS del browser.

## ✅ Soluzione: Usa il Server Locale

### Metodo 1: Script Automatico (Consigliato)

1. **Fai doppio click** su `avvia-server.bat`
2. Il server si avvierà automaticamente
3. Apri il browser e vai su: **http://localhost:8000**
4. Ora le copertine automatiche funzioneranno! 🎉

Per fermare il server, premi `CTRL+C` nella finestra del terminale.

---

### Metodo 2: Manuale (se preferisci)

Apri il terminale/PowerShell nella cartella `d:\Sito opere` ed esegui:

**Con Python:**
```bash
python -m http.server 8000
```

**Con Node.js (se installato):**
```bash
npx -y http-server -p 8000
```

Poi apri: **http://localhost:8000**

---

## 🎮 Ora Funziona Tutto!

Una volta avviato il server locale:

✅ **Copertine automatiche** funzionanti  
✅ **API RAWG** per videogiochi  
✅ **API TMDB** per anime e serie TV  
✅ **Suggerimenti** con anteprime  
✅ **Tutto il resto** già funzionante  

---

## 📝 Note Tecniche

**Perché serve un server?**

Le API esterne (RAWG, TMDB) richiedono che le richieste provengano da un'origine HTTP valida (`http://` o `https://`), non da `file:///`. Questo è un meccanismo di sicurezza del browser chiamato CORS (Cross-Origin Resource Sharing).

**Alternative:**

- Se hai **Visual Studio Code**, usa l'estensione "Live Server"
- Se hai **Node.js**, puoi usare `http-server` o `serve`
- Qualsiasi server web locale funzionerà

---

## 🔧 Risoluzione Problemi

**"python non è riconosciuto":**
- Installa Python da [python.org](https://www.python.org/downloads/)
- Durante l'installazione, seleziona "Add Python to PATH"

**Porta 8000 già in uso:**
- Cambia il numero della porta nello script (es. 8001, 8080, 3000)
- Oppure chiudi l'applicazione che sta usando la porta 8000

**Le copertine ancora non funzionano:**
- Verifica di accedere tramite `http://localhost:8000` e NON `file:///`
- Controlla la console del browser (F12) per eventuali errori
- Assicurati di avere una connessione internet attiva
