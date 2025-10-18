const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Inhalte", href: "#knowledge" },
    { label: "Über uns", href: "#about" },
];

const heroHighlights = [
    {
        title: "Dein Monatsplan",
        description: "Plane Einnahmen & Ausgaben mit realistischen Limits, die sich automatisch anpassen.",
    },
    {
        title: "Motivierende Routinen",
        description: "Tägliche Mini-Impulse und Challenges halten dich ohne Druck am Ball.",
    },
    {
        title: "Alles im Blick",
        description: "Cash, Konten und Sparziele landen in einer Übersicht – ohne Tabellen-Chaos.",
    },
];

const learnCards = [
    {
        title: "Finanzfallen",
        description:
            "Erkenne typische Ausgabenfallen und wie du sie vermeidest – von Lieferdiensten bis Abo-Fallen.",
        link: "Erkunde mehr",
        icon: "🛡️",
    },
    {
        title: "Tipps & Tricks",
        description: "Schnelle Hacks für den Alltag von Studis: smarter einkaufen, reisen, sparen.",
        link: "Hol dir Hacks",
        icon: "💡",
    },
];

const knowledgeTopics = [
    {
        title: "Mindestlohn & Netto",
        description:
            "Was unterm Strich bleibt: Gehaltsrechner, Freibeträge und Beispiele aus Nebenjobs & Praktika.",
        icon: "📊",
    },
    {
        title: "Budget-Power",
        description:
            "Baue Puffer für Fixkosten, plane Spaß-Budgets (50/30/20) und manage variable Kosten clever.",
        icon: "🧮",
    },
    {
        title: "Ziele sichtbar machen",
        description: "Sparziele, Reisen & Anschaffungen: mit Timeline, Fortschrittsleisten und Motivationsboosts.",
        icon: "🎯",
    },
];

const FooterLinks = [
    { label: "Kontakt", href: "mailto:hallo@brokenomore.de" },
    { label: "Impressum", href: "#" },
    { label: "Datenschutz", href: "#" },
];

const NavBar = () => (
    <header className="header">
        <div className="nav-container">
            <a href="#home" className="logo" aria-label="BrokeNoMore Startseite">
                <span aria-hidden="true" className="logo-icon">
                    💶
                </span>
                <span className="logo-wordmark">BrokeNoMore</span>
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
            <a className="contact-link" href="#contact">
                Kontakt
            </a>
        </div>
    </header>
);

const HeroSection = () => (
    <section id="home" className="hero-section">
        <div className="hero-background" aria-hidden="true"></div>
        <div className="hero-inner">
            <div className="hero-text">
                <span className="tagline">Schon wieder Monatsende?</span>
                <h1>
                    Schon wieder ist am Monatsende das Konto leer?
                    <span className="accent"> Wir machen Schluss mit dem Gefühl, nie genug zu haben.</span>
                </h1>
                <p>
                    BrokeNoMore bringt Ordnung in dein Geldleben – klar, freundlich und komplett stressfrei. Du siehst, wo dein
                    Geld hinfließt, wie viel übrig bleibt und welche Schritte sich wirklich lohnen.
                </p>
                <div className="hero-actions">
                    <a className="cta" href="#contact">
                        Ich will starten
                    </a>
                    <button className="ghost-button" onClick={() => (window.location.hash = "#features")}>
                        Features entdecken
                    </button>
                </div>
                <div className="hero-highlight-grid">
                    {heroHighlights.map((item) => (
                        <article key={item.title} className="hero-highlight-card">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </div>
            <aside className="hero-visual" aria-label="Dashboard Vorschau">
                <div className="hero-card balance-card">
                    <span className="hero-card-label">Kontostand</span>
                    <strong>1.280 €</strong>
                    <span className="metric-pill positive">+ 140 € übrig</span>
                    <ul>
                        <li>
                            Miete <span>-520 €</span>
                        </li>
                        <li>
                            Food & Drinks <span>-210 €</span>
                        </li>
                        <li>
                            Freizeit <span>-95 €</span>
                        </li>
                    </ul>
                </div>
                <div className="hero-card goal-card">
                    <div className="goal-header">
                        <span>Reise nach Porto</span>
                        <span>65%</span>
                    </div>
                    <div className="progress-bar">
                        <span className="progress-fill" style={{ width: "65%" }}></span>
                    </div>
                    <p>
                        Noch 280 € bis zum Ziel. Mit automatischen Sparraten bist du in 3 Monaten durch.
                    </p>
                </div>
            </aside>
        </div>
    </section>
);

const LearnSection = () => (
    <section id="features" className="learn-section">
        <div className="section-shell">
            <div className="section-text">
                <span className="tagline">Lerne dein Geld kennen</span>
                <h2>Lerne dein 💰 selbst in die Hand zu nehmen.</h2>
                <p>
                    Egal ob Taschengeld, Nebenjob oder BAföG – wir zeigen dir, wie dein Überblick bleibt und Ziele erreichbar
                    werden. Schon über 1.000 junge Leute haben ihren Finanzcheck gemacht.
                </p>
            </div>
            <div className="learn-card-grid">
                {learnCards.map((card) => (
                    <article key={card.title} className="learn-card">
                        <span aria-hidden="true" className="learn-icon">
                            {card.icon}
                        </span>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <a className="link" href="#knowledge">
                            {card.link}
                        </a>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

const InsightSection = () => (
    <section id="about" className="insight-section">
        <div className="section-shell insight-shell">
            <div className="insight-text">
                <span className="tagline">Finanzen verstehen</span>
                <h2>Finanzen verstehen leicht gemacht.</h2>
                <p>
                    Wir erklären komplexe Finanzthemen mit klaren Worten, Illustrationen und Beispielen. Du siehst sofort, was
                    zu tun ist und wie du dich Schritt für Schritt sicher fühlst.
                </p>
                <div className="insight-actions">
                    <a className="cta ghost" href="#knowledge">
                        Inhalte ansehen
                    </a>
                    <a className="link" href="#contact">
                        Mehr erfahren
                    </a>
                </div>
            </div>
            <div className="insight-visual" role="img" aria-label="Video Vorschau">
                <div className="play-button" aria-hidden="true">
                    <span>▶</span>
                </div>
                <div className="insight-illustration">
                    <div className="calendar"></div>
                    <div className="piggy"></div>
                    <div className="coins"></div>
                    <div className="card"></div>
                </div>
            </div>
        </div>
    </section>
);

const KnowledgeSection = () => (
    <section id="knowledge" className="knowledge-section">
        <div className="section-shell">
            <span className="tagline">Finanzwissen, das im Alltag hilft</span>
            <h2>Mach dein Geld zum Gamechanger.</h2>
            <p className="knowledge-intro">
                Ob Mindestlohn, Steuerklasse, Minijob oder Sparplan – wir bereiten Wissen so auf, dass du es sofort anwenden
                kannst. Schritt für Schritt, ohne Fachchinesisch.
            </p>
            <div className="knowledge-grid">
                {knowledgeTopics.map((topic) => (
                    <article key={topic.title} className="knowledge-card">
                        <span aria-hidden="true" className="knowledge-icon">
                            {topic.icon}
                        </span>
                        <h3>{topic.title}</h3>
                        <p>{topic.description}</p>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

const ClosingSection = () => (
    <section id="contact" className="closing-section">
        <div className="section-shell closing-shell">
            <div className="closing-content">
                <h2>Mach Schluss mit dem Kontrollverlust-Gefühl.</h2>
                <p>
                    Wir begleiten dich persönlich durch deinen Finanzcheck – entspannt, strukturiert und mit Tools, die Spaß
                    machen. Schreib uns und wir starten gemeinsam.
                </p>
                <a className="cta" href="mailto:hallo@brokenomore.de">
                    hallo@brokenomore.de schreiben
                </a>
            </div>
            <div className="closing-visual" aria-hidden="true">
                <div className="closing-wallet"></div>
                <div className="closing-bills"></div>
                <div className="closing-coins"></div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="footer">
        <div className="footer-inner">
            <a href="#home" className="footer-logo">
                <span aria-hidden="true">💶</span>
                BrokeNoMore
            </a>
            <nav aria-label="Footer Navigation">
                <ul>
                    {FooterLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <p>© {new Date().getFullYear()} BrokeNoMore, GmbH.</p>
        </div>
    </footer>
);

const App = () => (
    <>
        <NavBar />
        <main>
            <HeroSection />
            <LearnSection />
            <InsightSection />
            <KnowledgeSection />
            <ClosingSection />
        </main>
        <Footer />
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
