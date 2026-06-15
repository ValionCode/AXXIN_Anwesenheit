@echo off
REM Startet den lokalen AXXIN Anwesenheit Server unter Windows.
REM Aufruf ohne Secret:
REM   start-server.bat
REM Aufruf mit Secret:
REM   start-server.bat meinSecret

setlocal
if "%~1"=="" (
  node server.js
) else (
  set "SAVE_SECRET=%~1"
  node server.js
)
endlocal
