const { useEffect, useMemo, useState } = React;

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Packs", href: "#solutions" },
    { label: "About", href: "#about" },
    { label: "Kontakt", href: "#contact" },
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
    {
        title: "Mindful Money",
        description:
            "Finde heraus, wofür du wirklich Geld ausgeben möchtest und was nur Gewohnheit ist – ganz ohne Verbote.",
        points: ["Reflexions-Prompts", "Community-Vibes"],
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

const journeySteps = [
    {
        title: "Analyse",
        description:
            "Konto anbinden, Ziele auswählen und in wenigen Minuten verstehen, wohin dein Geld wirklich fließt.",
        icon: "🔍",
    },
    {
        title: "Coachings",
        description:
            "Kurze, snackbare Lernnuggets pushen dich mit konkreten Aufgaben durch deinen Monat.",
        icon: "🎯",
    },
    {
        title: "Celebrations",
        description:
            "Check-ins belohnen dich mit Animationen, Badges und realistischer Motivation statt Druck.",
        icon: "🎉",
    },
];

const DarkModeToggle = ({ theme, onToggle }) => (
    <button
        type="button"
        className="dark-mode-toggle"
        onClick={onToggle}
        aria-pressed={theme === "dark"}
        aria-label={theme === "dark" ? "Hellmodus aktivieren" : "Darkmode aktivieren"}
    >
        <span className="dark-mode-icon" aria-hidden="true">
            {theme === "dark" ? "☀️" : "🌙"}
        </span>
        <span className="dark-mode-label">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
);

const NavBar = ({ theme, onToggleTheme }) => (
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
                <DarkModeToggle theme={theme} onToggle={onToggleTheme} />
                <a className="contact-link" href="#contact">
                    Kontakt
                </a>
            </div>
        </div>
    </header>
);

const HeroSection = () => (
    <section id="home" className="hero-section fade-in" data-animate>
        <div className="hero-inner">
            <div className="hero-text">
                <span className="tagline">Finanzen, aber endlich verständlich</span>
                <h1>
                    Schon wieder ist am Monatsende das Konto leer?
                    <span className="accent"> Wir ändern das – mit Tools, die wirklich zu deinem Leben passen.</span>
                </h1>
                <p>
                    Vergiss starre Tabellen und Motivation, die nach zwei Wochen verpufft. BrokeNoMore zeigt dir, wie du dein Geld bewusst planst,
                    Dringendes und Wichtiges trennst und trotzdem Spaß im Leben hast.
                </p>
                <div className="hero-highlights">
                    {heroHighlights.map((item) => (
                        <div key={item} className="highlight-card">
                            <span className="dot" aria-hidden="true"></span>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
                <div className="hero-actions">
                    <a className="cta" href="#contact">
                        Ich will starten
                    </a>
                    <button className="ghost-button" onClick={() => (window.location.hash = "#about")}>
                        Mehr erfahren
                    </button>
                </div>
            </div>
            <aside className="hero-figure" aria-label="Feature Vorschau">
                <div className="glow-orb" aria-hidden="true"></div>
                <div className="hero-bubble floating-card">
                    <span className="hero-bubble-title">Kontostand im Blick</span>
                    <p>
                        Unser Dashboard bündelt Bankkonten, Cash und Sparziele – ohne dass du Tabellen wälzen musst.
                    </p>
                </div>
                <div className="hero-metric floating-card delay-1">
                    <p>Monatsbudget</p>
                    <strong>1.280 €</strong>
                    <span className="metric-pill positive">+ 140 € übrig</span>
                </div>
                <div className="hero-progress floating-card delay-2" role="img" aria-label="Sparfortschritt">
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
    <section id="about" className="promise-section fade-in" data-animate>
        <div className="promise-inner">
            <div className="promise-text">
                <span className="tagline">Lerne dein Geld zu lieben</span>
                <h2>Wir holen dich dort ab, wo dein Kontostand gerade ist.</h2>
                <p>
                    Egal ob Taschengeld, Nebenjob oder BAföG – wir helfen dir, mit Geld warm zu werden. Du bekommst Klarheit über Einnahmen und
                    Ausgaben, baust Puffer auf und kannst dir trotzdem Dinge gönnen, die dich glücklich machen.
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

const JourneySection = () => (
    <section className="journey-section fade-in" data-animate>
        <div className="journey-header">
            <span className="tagline">Vom Chaos zum Überblick</span>
            <h2>So läuft dein Start mit BrokeNoMore ab.</h2>
        </div>
        <div className="journey-grid">
            {journeySteps.map((step) => (
                <article key={step.title} className="journey-card floating-card">
                    <span className="journey-icon" aria-hidden="true">
                        {step.icon}
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                </article>
            ))}
        </div>
    </section>
);

const StatSection = () => (
    <section id="solutions" className="stats-section fade-in" data-animate>
        <div className="stats-intro">
            <h2>Hol dir den Überblick, der dich beruhigt.</h2>
            <p>
                Schon über 3.000 junge Menschen nutzen BrokeNoMore, um ihren eigenen Finanzcheck zu machen. Mit Live-Feedback, Community-Support
                und Challenges, die dich motivieren.
            </p>
        </div>
        <div className="stats-grid">
            {statCards.map((card) => (
                <article key={card.label} className="stat-card">
                    <strong>{card.value}</strong>
                    <span>{card.label}</span>
                </article>
            ))}
        </div>
        <div className="testimonial-grid">
            {testimonialList.map((item) => (
                <blockquote key={item.author} className="floating-card">
                    <p>“{item.quote}”</p>
                    <cite>{item.author}</cite>
                </blockquote>
            ))}
        </div>
    </section>
);

const ServicesSection = () => (
    <section id="services" className="services-section fade-in" data-animate>
        <div className="services-header">
            <span className="tagline">Mach dein Geld zum Gamechanger</span>
            <h2>Tools, die nicht nur Zahlen zeigen, sondern dich auch handeln lassen.</h2>
            <p>
                Egal ob du sparen, investieren oder Schulden abbauen willst: Wir geben dir die Struktur und die Motivation, dran zu bleiben.
            </p>
        </div>
        <div className="services-grid">
            {serviceCards.map((card) => (
                <article key={card.title} className="service-card floating-card">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <ul>
                        {card.points.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                    <a className="link" href="#contact">
                        Ich will das testen
                    </a>
                </article>
            ))}
        </div>
    </section>
);

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", message: "" });
    const [status, setStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);
        setStatus(null);

        try {
            const response = await fetch("http://localhost:4000/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorBody = await response.json().catch(() => ({}));
                throw new Error(errorBody.message || "Ups! Da ist etwas schief gegangen.");
            }

            setStatus({ type: "success", message: "Danke! Wir haben dir gerade eine Begrüßungs-Mail geschickt." });
            setFormData({ name: "", email: "", password: "", message: "" });
        } catch (error) {
            setStatus({ type: "error", message: error.message });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-section fade-in" data-animate>
            <div className="contact-inner">
                <h2>Lass uns gemeinsam durchstarten</h2>
                <p>
                    Du willst ein Onboarding, das so individuell ist wie dein Finanzleben? Schreib uns und wir setzen den ersten Termin mit dir –
                    komplett kostenlos.
                </p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <label>
                            <span>Name</span>
                            <input
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Wie dürfen wir dich nennen?"
                            />
                        </label>
                        <label>
                            <span>E-Mail</span>
                            <input
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="dein.name@mail.de"
                            />
                        </label>
                    </div>
                    <label>
                        <span>Passwort</span>
                        <input
                            name="password"
                            type="password"
                            required
                            minLength={8}
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Mindestens 8 Zeichen"
                        />
                    </label>
                    <label>
                        <span>Nachricht (optional)</span>
                        <textarea
                            name="message"
                            rows="3"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Erzähl uns kurz, was du dir wünschst."
                        ></textarea>
                    </label>
                    <button type="submit" className="cta" disabled={isSubmitting}>
                        {isSubmitting ? "Wird gesendet…" : "Kostenloses Onboarding sichern"}
                    </button>
                    {status && (
                        <p className={`form-status ${status.type === "success" ? "success" : "error"}`}>{status.message}</p>
                    )}
                </form>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="footer">
        <p>© {new Date().getFullYear()} BrokeNoMore. Finanzwissen für alle, die nicht reich geboren wurden.</p>
    </footer>
);

const useScrollAnimations = () => {
    useEffect(() => {
        const elements = document.querySelectorAll("[data-animate]");
        if (!elements.length) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        elements.forEach((element) => observer.observe(element));

        return () => {
            observer.disconnect();
        };
    }, []);
};

const App = () => {
    const getPreferredTheme = useMemo(
        () => () => {
            if (typeof window === "undefined") {
                return "light";
            }

            const stored = window.localStorage.getItem("bnm-theme");
            if (stored === "light" || stored === "dark") {
                return stored;
            }

            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        },
        []
    );

    const [theme, setTheme] = useState(getPreferredTheme);

    useEffect(() => {
        document.body.dataset.theme = theme;
        window.localStorage.setItem("bnm-theme", theme);
    }, [theme]);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = (event) => {
            const stored = window.localStorage.getItem("bnm-theme");
            if (!stored) {
                setTheme(event.matches ? "dark" : "light");
            }
        };

        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    useScrollAnimations();

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <>
            <NavBar theme={theme} onToggleTheme={toggleTheme} />
            <main>
                <HeroSection />
                <PromiseSection />
                <JourneySection />
                <StatSection />
                <ServicesSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
