# BrokeNoMoney

Eine minimalistische Finanz-Landingpage mit React (CDN) und Dark-Mode-Animations sowie einem kleinen Node.js/SQLite-Backend für E-Mail/Passwort-Authentifizierung.

## Frontend starten

1. Öffne `index.html` direkt im Browser oder nutze einen simplen Static-Server (z. B. `npx serve`).
2. Die React-App ist bundlerfrei und wird über Babel im Browser kompiliert.
3. Aktiviere das Dark-Mode-Icon in der Navigation für den nächtlichen Modus.
4. Das Auth-Formular (Login/Registrierung) kommuniziert mit dem Backend unter `http://localhost:4000`.

## Backend starten

1. Abhängigkeiten installieren:
   ```bash
   npm install
   ```
2. Entwicklungsserver starten:
   ```bash
   npm run dev
   ```
   oder für Produktion:
   ```bash
   npm start
   ```
3. Standard-Port ist `4000`. Passe ihn über eine `.env` an (siehe `.env.example`).
4. SQLite-Datenbank wird automatisch unter `./data/users.db` angelegt.

## API-Endpunkte

- `POST /api/auth/register` – Legt einen neuen Benutzer an (`{ email, password }`).
- `POST /api/auth/login` – Prüft Zugangsdaten und liefert eine Erfolgsmeldung.
- `GET /api/health` – Gesundheitscheck für Monitoring/Smoke-Tests.

Alle Antworten erfolgen als JSON. Passwörter werden mit `bcrypt` (Cost-Faktor 12) gehasht.

## Dark-Mode & Animationen

- Sanfte Scroll-Reveals per `IntersectionObserver` und CSS-Transitions.
- Hero-Karte mit Floating-Animation, fallback-freundlich via `prefers-reduced-motion`.
- Theme-Persistenz per `localStorage` inkl. manueller Umschaltung (Light/Dark).

## Projektstruktur

```
.
├── index.html        # Einstiegspunkt mit React/CDN
├── main.jsx          # React-Komponenten & UI-Logik
├── style.css         # Design, Dark-Mode, Animationen
├── server.js         # Express/SQLite Auth-API
├── package.json      # Backend-Abhängigkeiten
├── .env.example      # Beispiel-Config
└── data/             # SQLite-Datenbank (leer, .gitkeep)
```

Viel Spaß beim Ausprobieren und Erweitern! 🎉
