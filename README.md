# BrokeNoMore

Eine moderne Demo-Landingpage für das Finanz-Coaching "BrokeNoMore" inklusive React-Frontend mit Darkmode, Scroll-Animationen und einer kleinen Express-API für Mail- & Passwort-Registrierungen in einer SQLite-Datenbank.

## Inhalt

- React Single-Page-Experience mit animierten Komponenten
- Umschaltbarer Light/Dark-Mode (inkl. Speicherung der Nutzerpräferenz)
- Kontakt-/Onboarding-Formular mit Client-seitiger Validierung
- Node.js Backend mit Express, bcrypt & SQLite für sichere Registrierungen

## Voraussetzungen

- [Node.js 18+](https://nodejs.org/) inklusive npm

## Frontend starten

1. Öffne die `index.html` im Browser (z. B. per Live Server in VS Code) oder hoste den Ordner mit einem beliebigen Static-File-Server.
2. Stelle sicher, dass der Backend-Server (siehe unten) läuft, damit das Formular Anfragen senden kann.

## Backend starten

```bash
cd backend
npm install
npm run start
```

Der Server lauscht standardmäßig auf [http://localhost:4000](http://localhost:4000) und bietet zwei Endpunkte:

- `GET /api/health` – Healthcheck für Monitoring
- `POST /api/signup` – nimmt `name`, `email`, `password` und optional `message` entgegen und speichert den Eintrag in `backend/database.sqlite`

### Konfiguration

- `PORT`: Portnummer des Servers (Standard `4000`)
- `CORS_ORIGINS`: Komma-separierte Liste erlaubter Origins (Standard: `http://localhost:3000,http://localhost:5173,http://127.0.0.1:5500`)

## Datenbank

Die SQLite-Datei wird automatisch beim ersten Start unter `backend/database.sqlite` angelegt. Sie ist im Repository ausgeschlossen, damit keine Testdaten eingecheckt werden.

## Entwicklung

- `npm run dev` im Backend startet den Server mit automatischem Reload (via nodemon).
- Alle Frontend-Komponenten befinden sich in `main.jsx` und sind ohne Build-Tooling lauffähig (via Babel Standalone).

Viel Spaß beim Ausprobieren! ✨
