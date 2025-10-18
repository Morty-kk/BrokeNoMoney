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

const inspirationImages = [
    {
        src: "https://images.unsplash.com/photo-1580894906472-4c9b1d3a7f88?auto=format&fit=crop&w=900&q=80",
        alt: "Junge Person, die mit Budget-Stickern ein Notizbuch gestaltet",
        caption: "Money Journaling & Weekly Reviews",
    },
    {
        src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
        alt: "Freunde feiern gemeinsam kleine finanzielle Erfolge",
        caption: "Micro-Celebrations mit deiner Crew",
    },
    {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
        alt: "Smartphone mit modernem Finanz-Dashboard",
        caption: "Live-Dashboards, die wirklich motivieren",
    },
];

const Logo = () => (
    <>
        <span className="logo-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64" role="img" aria-hidden="true" focusable="false">
                <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#27a243" />
                        <stop offset="100%" stopColor="#1d7f35" />
                    </linearGradient>
                </defs>
                <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#logoGradient)" />
                <path
                    d="M20 44.5c4.1 0 7.5-3.4 7.5-7.5S24.1 29.5 20 29.5 12.5 32.9 12.5 37 15.9 44.5 20 44.5Zm24 0c4.1 0 7.5-3.4 7.5-7.5S48.1 29.5 44 29.5 36.5 32.9 36.5 37s3.4 7.5 7.5 7.5Z"
                    fill="#f0fdf4"
                />
                <path d="M16 25h32" stroke="#f0fdf4" strokeWidth="6" strokeLinecap="round" />
                <path d="M24 18h16" stroke="#f0fdf4" strokeWidth="6" strokeLinecap="round" />
            </svg>
            <span className="logo-glow" aria-hidden="true"></span>
        </span>
        <span className="logo-wordmark">
            <span>Broke</span>
            <span className="logo-highlight">No</span>
            <span>Money</span>
        </span>
    </>
);

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
            <a href="#home" className="logo" aria-label="BrokeNoMoney Startseite">
                <Logo />
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

const HeroSection = () => {
    const [isCelebrating, setIsCelebrating] = useState(false);

    const handleCelebrate = (event) => {
        const { currentTarget, nativeEvent } = event;
        if (currentTarget && nativeEvent) {
            const rect = currentTarget.getBoundingClientRect();
            const x = ((nativeEvent.clientX - rect.left) / rect.width) * 100;
            const y = ((nativeEvent.clientY - rect.top) / rect.height) * 100;
            currentTarget.style.setProperty("--x", `${x}%`);
            currentTarget.style.setProperty("--y", `${y}%`);
        }

        setIsCelebrating(true);
        window.location.hash = "#about";
        window.setTimeout(() => {
            setIsCelebrating(false);
        }, 1400);
    };

    return (
        <section id="home" className="hero-section fade-in" data-animate>
            <div className="hero-inner">
                <div className="hero-text">
                    <span className="tagline">Finanzen, aber endlich verständlich</span>
                    <h1>
                        Schon wieder ist am Monatsende das Konto leer?
                        <span className="accent"> Wir ändern das – mit Tools, die wirklich zu deinem Leben passen.</span>
                    </h1>
                    <p>
                        Vergiss starre Tabellen und Motivation, die nach zwei Wochen verpufft. BrokeNoMoney zeigt dir, wie du dein Geld bewusst
                        planst, Dringendes und Wichtiges trennst und trotzdem Spaß im Leben hast.
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
                        <button className={`ghost-button animated-button ${isCelebrating ? "is-active" : ""}`} onClick={handleCelebrate}>
                            Mehr erfahren
                        </button>
                    </div>
                </div>
                <aside className={`hero-figure ${isCelebrating ? "hero-celebrate" : ""}`} aria-label="Feature Vorschau">
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
                    {isCelebrating && (
                        <div className="confetti-wrapper" aria-hidden="true">
                            {Array.from({ length: 14 }).map((_, index) => (
                                <span key={index} className={`confetti-piece confetti-${index}`}></span>
                            ))}
                        </div>
                    )}
                </aside>
            </div>
        </section>
    );
};

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

const MediaShowcase = () => {
    const defaultVideo = "https://cdn.coverr.co/videos/coverr-counting-bills-7852/1080p.mp4";
    const [videoSource, setVideoSource] = useState(defaultVideo);
    const [videoLabel, setVideoLabel] = useState("Finanz Flow Intro");
    const [videoType, setVideoType] = useState("video/mp4");
    const [uploadedUrl, setUploadedUrl] = useState(null);

    useEffect(() => {
        return () => {
            if (uploadedUrl) {
                URL.revokeObjectURL(uploadedUrl);
            }
        };
    }, [uploadedUrl]);

    const handleUpload = (event) => {
        const file = event.target.files && event.target.files[0];
        if (!file) {
            return;
        }

        if (uploadedUrl) {
            URL.revokeObjectURL(uploadedUrl);
        }

        const url = URL.createObjectURL(file);
        setUploadedUrl(url);
        setVideoSource(url);
        setVideoLabel(file.name || "Eigenes Video");
        setVideoType(file.type || "video/mp4");
        event.target.value = "";
    };

    return (
        <section className="media-section fade-in" data-animate>
            <div className="media-intro">
                <span className="tagline">Sieh, wie sich dein Mindset verändert</span>
                <h2>Animationen, Bilder & ein Videoplayer, der deine Story erzählt.</h2>
                <p>
                    Mach aus Zahlen Emotionen: Unsere Motion-Grafiken bringen dir jede Woche Mini-Wins. Ergänze das Ganze mit deinem eigenen
                    Video oder starte mit unserem Quick-Intro.
                </p>
            </div>
            <div className="media-content">
                <div className="media-player floating-card" role="region" aria-label="Video Vorschau">
                    <video key={videoSource} controls playsInline poster="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80">
                        <source src={videoSource} type={videoType || "video/mp4"} />
                        Dein Browser unterstützt keine eingebetteten Videos.
                    </video>
                    <div className="media-meta">
                        <div>
                            <span className="video-label">Gerade aktiv:</span>
                            <strong className="video-name">{videoLabel}</strong>
                        </div>
                        <label className="upload-button">
                            <input type="file" accept="video/mp4,video/webm,video/ogg" onChange={handleUpload} />
                            Eigenes Video laden
                        </label>
                    </div>
                </div>
                <div className="media-gallery">
                    {inspirationImages.map((image) => (
                        <figure key={image.src} className="media-card">
                            <img src={image.src} alt={image.alt} loading="lazy" />
                            <figcaption>{image.caption}</figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
            const apiBaseUrl =
                typeof window !== "undefined" && window.location.hostname === "localhost"
                    ? "http://localhost:4000"
                    : "";

            const response = await fetch(`${apiBaseUrl}/api/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorBody = await response.json().catch(() => ({}));
                throw new Error(errorBody.message || "Ups! Da ist etwas schief gegangen.");
            }

            setStatus({ type: "success", message: "Danke! Wir haben dir gerade eine Begrüßungs-Mail geschickt." });
            setFormData({ name: "", email: "", message: "" });
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
                <MediaShowcase />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
