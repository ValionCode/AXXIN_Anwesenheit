AXXIN_Anwesenheit — lokale Entwicklung

Ziel
- Änderungen in der Weboberfläche direkt in `users.json` speichern, damit du im Terminal `git add users.json` machen kannst.

Sichere lokale Lösung (empfohlen)
1. Node.js installieren (>=14).
2. Abhängigkeiten installieren:

```powershell
cd AXXIN_Anwesenheit
npm install
```

3. Server starten:

- Empfohlen unter Windows (PowerShell-Execution-Policy wird nicht benötigt):

```powershell
start-node-server.bat
```

- Wenn du ein Secret verwenden möchtest:

```powershell
start-server.bat meinSecret
```

- Falls `npm start` nicht funktioniert, verwende stattdessen:

```powershell
npm.cmd start
```

4. Öffne die Seite im Browser: http://localhost:3000
5. Klicke `✏️ Bearbeiten`, mach Änderungen und klicke `💾 Lokal speichern`.
   - Falls du beim Start `SAVE_SECRET` gesetzt hast, gib beim Speichern das Secret ein.
6. Nun ist `users.json` auf der Festplatte aktualisiert — du kannst `git add users.json && git commit -m "Update" && git push` ausführen.

Hinweise
- Diese Lösung speichert die Datei direkt auf der Festplatte des Rechners, auf dem der Server läuft. Teile das Secret nicht und betreibe den Server nur in sicherer Umgebung.
- Wenn du möchtest, kann ich statt des lokalen Server eine sichere zentrale Lösung mit Authentifizierung bauen.
