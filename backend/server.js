const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
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
        `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password_hash TEXT NOT NULL,
            message TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`,
        (error) => {
            if (error) {
                console.error('❌ Tabelle konnte nicht erstellt werden:', error.message);
            } else {
                console.log('✅ Tabelle "users" ist bereit.');
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

const validatePayload = ({ name, email, password }) => {
    if (!name || !email || !password) {
        return 'Bitte fülle alle Pflichtfelder aus.';
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        return 'Bitte gib eine gültige E-Mail-Adresse an.';
    }

    if (password.length < 8) {
        return 'Das Passwort muss mindestens 8 Zeichen lang sein.';
    }

    return null;
};

app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
});

app.post('/api/signup', async (req, res) => {
    const { name, email, password, message = null } = req.body || {};

    const validationError = validatePayload({ name, email, password });
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    try {
        const passwordHash = await bcrypt.hash(password, 10);
        db.run(
            'INSERT INTO users (name, email, password_hash, message) VALUES (?, ?, ?, ?)',
            [name.trim(), email.toLowerCase().trim(), passwordHash, message],
            function handleInsert(error) {
                if (error) {
                    if (error.code === 'SQLITE_CONSTRAINT') {
                        return res.status(409).json({ message: 'Diese E-Mail ist bereits registriert.' });
                    }

                    console.error('❌ Fehler beim Speichern des Nutzers:', error.message);
                    return res.status(500).json({ message: 'Beim Speichern ist ein Fehler passiert. Versuch es bitte später erneut.' });
                }

                return res.status(201).json({ id: this.lastID, name, email });
            }
        );
    } catch (error) {
        console.error('❌ Fehler beim Hashen des Passworts:', error.message);
        res.status(500).json({ message: 'Das hat leider nicht geklappt. Bitte versuch es später noch einmal.' });
    }
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
