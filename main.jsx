const { useEffect, useState, useCallback } = React;

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Packs", href: "#solutions" },
    { label: "About", href: "#about" },
    { label: "Login", href: "#auth" },
];

const heroHighlights = [
    "Budgets, Sparziele und Kontostände an einem Ort.",
    "Visualisierte Fortschritte, die motivieren statt stressen.",
    "Persönliche Routinen, die du in deinen Alltag integrieren kannst.",
];

const serviceCards = [
    {
        title: "Budget-Check",
        description:
            "Erstelle realistische Budgets und bleib automatisch in deinem Rahmen – mit klaren Monats- und Wochenlimits.",
        points: ["Smartes Tracking", "Sofortige Benachrichtigungen"],
    },
    {
        title: "Sparziele",
        description:
            "Verwandele Ziele in Meilensteine. Wir erinnern dich, pushen dich sanft und zeigen, wie du schneller fertig wirst.",
        points: ["Fortschritts-Visuals", "Persönliche Hacks"],
    },
];

const statCards = [
    { value: "3.100+", label: "junge Leute haben ihren Finanzcheck gemacht" },
    { value: "92%", label: "bleiben über 6 Monate aktiv am Ball" },
    { value: "4.7/5", label: "Durchschnittliche Zufriedenheit" },
];

const testimonialList = [
    {
        quote:
            "Ich habe endlich das Gefühl, dass meine Finanzen nicht gegen mich arbeiten. Das Tool nimmt mir die Angst vor dem Monatsende.",
        author: "Jasmin, 22",
    },
    {
        quote:
            "Die täglichen Micro-Challenges machen Sparen irgendwie spielerisch. Und das Dashboard sieht einfach gut aus.",
        author: "Leon, 19",
    },
];

const authTabs = [
    { id: "register", label: "Registrieren", action: "register" },
    { id: "login", label: "Einloggen", action: "login" },
];

const useDarkMode = () => {
    const storageKey = "brokenomore-theme";

    const prefersDarkMode = () =>
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    const readPreference = () => {
        try {
            const stored = window.localStorage.getItem(storageKey);
            if (stored === "dark") return true;
            if (stored === "light") return false;
        } catch (error) {
            console.warn("Konnte gespeicherte Theme-Einstellung nicht lesen", error);
        }
        return prefersDarkMode();
    };

    const [darkMode, setDarkMode] = useState(() => readPreference());

    useEffect(() => {
        document.body.dataset.theme = darkMode ? "dark" : "light";
        try {
            window.localStorage.setItem(storageKey, darkMode ? "dark" : "light");
        } catch (error) {
            console.warn("Konnte Theme-Einstellung nicht speichern", error);
        }
    }, [darkMode]);

    const toggle = useCallback(() => {
        setDarkMode((prev) => !prev);
    }, []);

    return [darkMode, toggle];
};

const DarkModeToggle = ({ darkMode, onToggle }) => (
    <button
        type="button"
        className="dark-toggle"
        onClick={onToggle}
        aria-pressed={darkMode}
        aria-label="Dark-Mode umschalten"
    >
        <span className="dark-toggle-icon" aria-hidden="true">
            {darkMode ? "🌙" : "☀️"}
        </span>
        <span className="dark-toggle-label">{darkMode ? "Dark" : "Light"}</span>
    </button>
);

const NavBar = ({ darkMode, onToggleDarkMode }) => (
    <header className="header">
        <div className="nav-container">
            <a href="#home" className="logo">
                <span aria-hidden="true" className="logo-icon">
                    💶
                </span>
                BrokeNoMore
            </a>
            <nav aria-label="Hauptnavigation" className="nav-links">
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="nav-actions">
                <a className="contact-link" href="#contact">
                    Kontakt
                </a>
                <DarkModeToggle darkMode={darkMode} onToggle={onToggleDarkMode} />
            </div>
        </div>
    </header>
);

const HeroSection = () => (
    <section id="home" className="hero-section">
            <div className="hero-inner">
                <div className="hero-text">
                    <span className="tagline">Finanzen, aber endlich verständlich</span>
                    <h1 className="reveal">
                        Schon wieder ist am Monatsende das Konto leer?
                        <span className="accent">
                            {" "}
                            Wir ändern das – mit Tools, die wirklich zu deinem Leben passen.
                        </span>
                    </h1>
                    <p className="reveal">
                        Vergiss starre Tabellen und Motivation, die nach zwei Wochen verpufft. BrokeNoMore zeigt dir,
                        wie du dein Geld bewusst planst, Dringendes und Wichtiges trennst und trotzdem Spaß im Leben
                        hast.
                    </p>
                    <div className="hero-highlights">
                        {heroHighlights.map((item) => (
                            <div key={item} className="highlight-card reveal">
                                <span className="dot" aria-hidden="true"></span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="hero-actions">
                        <a className="cta" href="#contact">
                            Ich will starten
                        </a>
                        <button
                            className="ghost-button"
                            onClick={() => (window.location.hash = "#about")}
                            type="button"
                        >
                            Mehr erfahren
                        </button>
                    </div>
                </div>
                <aside className="hero-figure reveal" aria-label="Feature Vorschau">
                    <div className="hero-bubble">
                        <span className="hero-bubble-title">Kontostand im Blick</span>
                        <p>
                            Unser Dashboard bündelt Bankkonten, Cash und Sparziele – ohne dass du Tabellen wälzen musst.
                        </p>
                    </div>
                    <div className="hero-metric">
                        <p>Monatsbudget</p>
                        <strong>1.280 €</strong>
                        <span className="metric-pill positive">+ 140 € übrig</span>
                    </div>
                    <div className="hero-progress" role="img" aria-label="Sparfortschritt">
                        <div className="hero-progress-info">
                            <span>Reise nach Porto</span>
                            <span>65%</span>
                        </div>
                        <div className="progress-bar">
                            <span className="progress-fill" style={{ width: "65%" }}></span>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
);

const PromiseSection = () => (
    <section id="about" className="promise-section">
        <div className="promise-inner reveal">
            <div className="promise-text">
                <span className="tagline">Lerne dein Geld zu lieben</span>
                <h2>Wir holen dich dort ab, wo dein Kontostand gerade ist.</h2>
                <p>
                    Egal ob Taschengeld, Nebenjob oder BAföG – wir helfen dir, mit Geld warm zu werden. Du bekommst
                        Klarheit über Einnahmen und Ausgaben, baust Puffer auf und kannst dir trotzdem Dinge gönnen, die
                        dich glücklich machen.
                    </p>
                </div>
                <div className="promise-card">
                    <h3>Was dich erwartet</h3>
                    <ul>
                        <li>Check-ins, die maximal 10 Minuten dauern</li>
                        <li>Pushs, wenn dein Budget kurz vor knapp ist</li>
                        <li>Guides für Sparziele, die wirklich erreichbar sind</li>
                    </ul>
                <a className="link" href="#solutions">
                    Zu den Features
                </a>
            </div>
        </div>
    </section>
);

const ServiceSection = () => (
    <section id="services" className="services-section">
        <div className="services-inner">
            <header className="section-header reveal">
                <span className="tagline">Das bekommst du</span>
                <h2>Deine Finanzen, aber mit Flow.</h2>
                <p>Wir kombinieren smarte Automation mit motivierenden Routinen – für mehr Leichtigkeit.</p>
            </header>
            <div className="service-grid">
                {serviceCards.map((card) => (
                    <article key={card.title} className="service-card reveal">
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <ul>
                            {card.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

const StatsSection = () => (
    <section id="solutions" className="stats-section">
        <div className="stats-intro reveal">
            <h2>Hol dir den Überblick, der dich beruhigt.</h2>
            <p>
                Schon über 3.000 junge Menschen nutzen BrokeNoMore, um ihren eigenen Finanzcheck zu machen. Mit
                Live-Feedback, Community-Support und Challenges, die dich motivieren.
            </p>
        </div>
        <div className="stats-cards">
            {statCards.map((stat) => (
                <article key={stat.value} className="stat-card reveal">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                </article>
            ))}
        </div>
    </section>
);

const TestimonialsSection = () => (
    <section className="testimonials-section">
        <div className="testimonials-inner">
            <header className="section-header reveal">
                <span className="tagline">Real Talk</span>
                <h2>Was unsere Community sagt.</h2>
            </header>
            <div className="testimonial-grid">
                {testimonialList.map((testimonial) => (
                    <figure key={testimonial.author} className="testimonial-card reveal">
                        <blockquote>“{testimonial.quote}”</blockquote>
                        <figcaption>— {testimonial.author}</figcaption>
                    </figure>
                ))}
            </div>
        </div>
    </section>
);

const StatusMessage = ({ status }) => {
    if (!status) return null;

    return (
        <div className={`status-message status-${status.type}`} role="status">
            {status.text}
        </div>
    );
};

const AuthForm = ({ activeAction }) => {
    const isRegister = activeAction === "register";
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [status, setStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        try {
            const response = await fetch(`http://localhost:4000/api/auth/${activeAction}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const payload = await response.json();
            if (!response.ok) {
                throw new Error(payload.message || "Unbekannter Fehler");
            }

            setStatus({ type: "success", text: payload.message || "Erfolg!" });
            if (isRegister) {
                setFormData({ email: "", password: "" });
            }
        } catch (error) {
            const fallbackMessage =
                error.message === "Failed to fetch"
                    ? "Server nicht erreichbar. Läuft das Backend auf Port 4000?"
                    : error.message;
            setStatus({ type: "error", text: fallbackMessage });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <label className="auth-label" htmlFor={`${activeAction}-email`}>
                E-Mail-Adresse
            </label>
            <input
                id={`${activeAction}-email`}
                name="email"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
            />
            <label className="auth-label" htmlFor={`${activeAction}-password`}>
                Passwort
            </label>
            <input
                id={`${activeAction}-password`}
                name="password"
                type="password"
                required
                minLength={8}
                autoComplete={isRegister ? "new-password" : "current-password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Mindestens 8 Zeichen"
            />
            <p className="auth-hint">
                Dein Passwort wird sicher verschlüsselt gespeichert. Wir unterstützen komplexe Passwörter und Sonderzeichen.
            </p>
            <button className="cta" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Wird gesendet…" : isRegister ? "Account anlegen" : "Einloggen"}
            </button>
            <StatusMessage status={status} />
        </form>
    );
};

const AuthSection = () => {
    const [activeTab, setActiveTab] = useState(authTabs[0]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section id="auth" className="auth-section">
            <div className="auth-inner reveal">
                <header className="section-header">
                    <span className="tagline">Los geht's</span>
                    <h2>Registriere dich oder logge dich ein.</h2>
                    <p>Erstelle deinen Account und sichere dir Zugang zu allen BrokeNoMore Tools.</p>
                </header>
                <div className="auth-tabs" role="tablist" aria-label="Authentifizierung">
                    {authTabs.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            role="tab"
                            aria-selected={activeTab.id === tab.id}
                            className={`auth-tab ${activeTab.id === tab.id ? "is-active" : ""}`}
                            onClick={() => handleTabChange(tab)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <AuthForm activeAction={activeTab.action} />
            </div>
        </section>
    );
};

const ContactSection = () => (
    <section id="contact" className="contact-section">
        <div className="contact-inner reveal">
            <h2>Fragen? Schreib uns!</h2>
            <p>
                Wir antworten innerhalb von 24 Stunden und helfen dir dabei, BrokeNoMore in deinen Alltag einzubauen.
            </p>
            <a className="ghost-button" href="mailto:hello@brokenomore.app">
                hello@brokenomore.app
            </a>
        </div>
    </section>
);

const Footer = () => (
    <footer className="footer">
        <div className="footer-inner">
            <p>&copy; {new Date().getFullYear()} BrokeNoMore. All rights reserved.</p>
            <div className="footer-links">
                <a href="#privacy">Datenschutz</a>
                <a href="#imprint">Impressum</a>
            </div>
        </div>
    </footer>
);

const App = () => {
    const [darkMode, toggleDarkMode] = useDarkMode();

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll(".reveal"));

        if (!("IntersectionObserver" in window)) {
            elements.forEach((el) => el.classList.add("reveal-visible"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
        );

        elements.forEach((el) => {
            el.classList.add("reveal-ready");
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <NavBar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
            <main>
                <HeroSection />
                <PromiseSection />
                <ServiceSection />
                <StatsSection />
                <TestimonialsSection />
                <AuthSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
