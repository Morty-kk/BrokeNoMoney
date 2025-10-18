const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;
const databasePath = process.env.DATABASE_PATH
    ? path.resolve(process.env.DATABASE_PATH)
    : path.join(__dirname, "data", "users.db");

fs.mkdirSync(path.dirname(databasePath), { recursive: true });

const database = new sqlite3.Database(databasePath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (error) => {
    if (error) {
        console.error("Konnte Datenbank nicht öffnen", error);
        process.exit(1);
    }
});

database.serialize(() => {
    database.run(
        `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`
    );
});

const dbGet = (sql, params = []) =>
    new Promise((resolve, reject) => {
        database.get(sql, params, (error, row) => {
            if (error) reject(error);
            else resolve(row);
        });
    });

const dbRun = (sql, params = []) =>
    new Promise((resolve, reject) => {
        database.run(sql, params, function (error) {
            if (error) reject(error);
            else resolve(this);
        });
    });

app.use(cors({ origin: true, credentials: false }));
app.use(express.json());
app.use(morgan("dev"));

const normalizeEmail = (email = "") => email.trim().toLowerCase();
const isValidEmail = (email) => /.+@.+\..+/.test(email);
const isValidPassword = (password = "") => password.length >= 8;

app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
});

app.post("/api/auth/register", async (req, res, next) => {
    try {
        const email = normalizeEmail(req.body.email || "");
        const password = req.body.password || "";

        if (!email || !isValidEmail(email)) {
            return res.status(400).json({ message: "Bitte gib eine gültige E-Mail-Adresse an." });
        }

        if (!isValidPassword(password)) {
            return res
                .status(400)
                .json({ message: "Das Passwort muss mindestens 8 Zeichen lang sein." });
        }

        const existingUser = await dbGet("SELECT id FROM users WHERE email = ?", [email]);
        if (existingUser) {
            return res.status(409).json({ message: "Für diese E-Mail existiert bereits ein Account." });
        }

        const passwordHash = await bcrypt.hash(password, 12);
        await dbRun("INSERT INTO users (email, password_hash) VALUES (?, ?)", [email, passwordHash]);

        return res.status(201).json({ message: "Account erfolgreich erstellt. Du kannst dich jetzt einloggen." });
    } catch (error) {
        return next(error);
    }
});

app.post("/api/auth/login", async (req, res, next) => {
    try {
        const email = normalizeEmail(req.body.email || "");
        const password = req.body.password || "";

        if (!email || !password) {
            return res.status(400).json({ message: "Bitte gib E-Mail und Passwort ein." });
        }

        const user = await dbGet("SELECT id, email, password_hash FROM users WHERE email = ?", [email]);
        if (!user) {
            return res.status(401).json({ message: "Diese Zugangsdaten sind uns nicht bekannt." });
        }

        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(401).json({ message: "Diese Zugangsdaten sind uns nicht bekannt." });
        }

        return res.json({ message: "Login erfolgreich. Willkommen zurück!", email: user.email });
    } catch (error) {
        return next(error);
    }
});

app.use((err, req, res, next) => {
    console.error("Unerwarteter Fehler", err);
    res.status(500).json({ message: "Da ist etwas schiefgelaufen. Bitte versuche es später erneut." });
});

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
