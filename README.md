AXXIN_Anwesenheit — lokale Entwicklung

Ziel
- Änderungen in der Weboberfläche direkt in `users.json` speichern, damit du im Terminal `git add users.json` machen kannst.

Sichere lokale Lösung (empfohlen)
1. Node.js installieren (>=14).
2. Abhängigkeiten installieren und Server starten:

```bash
cd AXXIN_Anwesenheit
npm install
# optional: setze ein Secret zur Absicherung, z.B. SAVE_SECRET=meinSecret
SAVE_SECRET=meinSecret npm start
# oder ohne Secret:
npm start
```

3. Öffne die Seite im Browser: http://localhost:3000
4. Klicke `✏️ Bearbeiten`, mach Änderungen und klicke `💾 Lokal speichern`.
	- Falls du beim Start `SAVE_SECRET` gesetzt hast, gib beim Speichern das Secret ein.
5. Nun ist `users.json` auf der Festplatte aktualisiert — du kannst `git add users.json && git commit -m "Update" && git push` ausführen.

Hinweise
- Diese Lösung speichert die Datei direkt auf der Festplatte des Rechners, auf dem der Server läuft. Teile das Secret nicht und betreibe den Server nur in sicherer Umgebung.
- Wenn du möchtest, kann ich statt des lokalen Server eine sichere zentrale Lösung mit Authentifizierung bauen.
