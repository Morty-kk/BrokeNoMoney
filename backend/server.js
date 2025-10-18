const express = require('express');
const cors = require('cors');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 4000;
const dbPath = path.join(__dirname, 'database.sqlite');
const allowedOrigins = (process.env.CORS_ORIGINS || 'http://localhost:3000,http://localhost:5173,http://127.0.0.1:5500').split(',');

const db = new sqlite3.Database(dbPath, (error) => {
    if (error) {
        console.error('❌ SQLite Verbindung fehlgeschlagen:', error.message);
    } else {
        console.log('✅ SQLite Verbindung hergestellt:', dbPath);
    }
});

db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            message TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`,
        (error) => {
            if (error) {
                console.error('❌ Tabelle konnte nicht erstellt werden:', error.message);
            } else {
                console.log('✅ Tabelle "contacts" ist bereit.');
            }
        }
    );
});

app.use(
    cors({
        origin(origin, callback) {
            if (!origin) {
                return callback(null, true);
            }

            if (allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            console.warn(`⚠️ Blockierte Anfrage von Ursprung: ${origin}`);
            return callback(new Error('Nicht erlaubter Ursprung.'), false);
        },
    })
);

app.use(express.json({ limit: '10kb' }));

const validatePayload = ({ name, email }) => {
    if (!name || !email) {
        return 'Bitte fülle alle Pflichtfelder aus.';
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        return 'Bitte gib eine gültige E-Mail-Adresse an.';
    }

    return null;
};

app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
});

app.post('/api/signup', (req, res) => {
    const { name, email, message = null } = req.body || {};

    const validationError = validatePayload({ name, email });
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    db.run(
        'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
        [name.trim(), email.toLowerCase().trim(), message],
        function handleInsert(error) {
            if (error) {
                console.error('❌ Fehler beim Speichern der Anfrage:', error.message);
                return res.status(500).json({ message: 'Beim Speichern ist ein Fehler passiert. Versuch es bitte später erneut.' });
            }

            return res.status(201).json({ id: this.lastID, name, email });
        }
    );
});

app.use((error, _req, res, _next) => {
    if (error && error.message === 'Nicht erlaubter Ursprung.') {
        return res.status(403).json({ message: error.message });
    }

    console.error('❌ Unerwarteter Fehler:', error);
    return res.status(500).json({ message: 'Unerwarteter Fehler im Server.' });
});

app.listen(PORT, () => {
    console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
});
