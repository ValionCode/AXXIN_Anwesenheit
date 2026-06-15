@echo off
REM Startet den Server unter Windows, ohne PowerShell-Skript-Ausführungsprobleme.
cd /d "%~dp0"
node.exe server.js
