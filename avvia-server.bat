@echo off
echo ========================================
echo   Avvio Server Locale - Media Tracker
echo ========================================
echo.
echo Il server sara' disponibile su:
echo http://localhost:8000
echo.
echo Premi CTRL+C per fermare il server
echo ========================================
echo.

cd /d "%~dp0"
python -m http.server 8000

pause
