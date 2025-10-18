const navigationLinks = [
    { href: "#home", label: "Start" },
    { href: "#about", label: "Über uns" },
    { href: "#contact", label: "Kontakt" },
];

const heroCards = [
    {
        title: "Live-Dashboard",
        description: "Automatisierte Reports für Einnahmen, Ausgaben und Sparquoten.",
    },
    {
        title: "Persönliche Roadmap",
        description: "Kleine Schritte mit großer Wirkung – passend zu deinem Lifestyle.",
    },
    {
        title: "Community Support",
        description: "Wissen und Motivation aus einer engagierten Spar-Community.",
    },
];

const featureCards = [
    {
        icon: "📊",
        title: "Smarte Budgetplanung",
        description:
            "Analyse deiner Kontobewegungen, automatische Kategorisierung und Warnungen, wenn das Budget aus dem Ruder läuft.",
        tags: ["Intuitiv", "Datensicher"],
    },
    {
        icon: "🎯",
        title: "Ziele visualisieren",
        description:
            "Von der ersten Reise bis zum Notgroschen: Visualisierungen zeigen dir in Echtzeit den Fortschritt deiner Ziele.",
        tags: ["Gamification", "Motivation"],
    },
    {
        icon: "🤝",
        title: "Community & Tipps",
        description:
            "Teile Hacks, lass dich inspirieren und finde Accountability-Partner:innen auf Augenhöhe.",
        tags: ["Gemeinsam", "Wachstum"],
    },
];

const timelineSteps = [
    {
        title: "1. Transparent",
        description:
            "Wir legen offen, wie wir arbeiten, welche Daten wir verwenden und welche Ziele wir verfolgen.",
    },
    {
        title: "2. Inklusiv",
        description:
            "Unsere Tools sind für alle Einkommensstufen gedacht – verständlich, barrierearm und wertschätzend.",
    },
    {
        title: "3. Impact-orientiert",
        description:
            "Jede neue Funktion wird mit der Community getestet und anhand echter Lebensrealitäten optimiert.",
    },
];

const contactOptions = [
    {
        pill: "Support",
        title: "E-Mail",
        link: { href: "mailto:hallo@brokenomoney.de", label: "hallo@brokenomoney.de" },
        description: "Wir antworten innerhalb von 24 Stunden auf deine Fragen.",
    },
    {
        pill: "Community",
        title: "Discord",
        link: { href: "https://discord.gg/brokenomoney", label: "discord.gg/brokenomoney" },
        description: "Tritt Kanälen für Challenges, Sparziele und Accountability bei.",
    },
    {
        pill: "Updates",
        title: "Instagram",
        link: { href: "https://instagram.com/brokenomoney", label: "@brokenomoney" },
        description: "Tägliche Impulse, Story-Formate und Einblicke hinter die Kulissen.",
    },
];

const NavBar = () => (
    <header>
        <div className="navbar">
            <a href="#home" className="logo">
                BrokeNoMoney
            </a>
            <nav>
                <ul>
                    {navigationLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </header>
);

const HeroSection = () => {
    const handleCtaClick = () => {
        window.location.hash = "#contact";
    };

    return (
        <section id="home" className="hero">
            <span className="pill">Finanzen neu gedacht</span>
            <div className="hero-content">
                <h1 className="hero-title">
                    Mehr Überblick. Mehr Gelassenheit. <span className="hero-highlight">Mehr Geld für dich.</span>
                </h1>
                <p>
                    Mit BrokeNoMoney bekommst du das moderne Toolset, das deine Finanzen in Echtzeit sichtbar macht. Budgetiere
                    smart, spüre Einsparpotenziale auf und steuere deine Ziele mit Klarheit.
                </p>
                <div className="hero-grid">
                    {heroCards.map((card) => (
                        <article key={card.title} className="hero-card">
                            <strong>{card.title}</strong>
                            <p>{card.description}</p>
                        </article>
                    ))}
                </div>
                <button className="cta-button" onClick={handleCtaClick}>
                    Jetzt loslegen
                </button>
            </div>
        </section>
    );
};

const FeatureSection = () => (
    <section id="about">
        <h2>Über uns</h2>
        <p>
            BrokeNoMoney ist eine Initiative von Studierenden, die die Sprache junger Menschen spricht. Wir bauen eine Plattform,
            die dich nicht nur informiert, sondern mitnimmt, motiviert und empowert. Finanzwissen darf nicht elitär sein.
        </p>
        <div className="about-grid">
            <div className="feature-grid">
                {featureCards.map((card) => (
                    <article key={card.title} className="feature-card">
                        <div className="feature-icon" aria-hidden="true">
                            {card.icon}
                        </div>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <div className="tag-list">
                            {card.tags.map((tag) => (
                                <span key={tag} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
            <div className="timeline">
                {timelineSteps.map((step) => (
                    <article key={step.title} className="timeline-step">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

const ContactSection = () => (
    <section id="contact">
        <h2>Kontakt</h2>
        <p>
            Du möchtest mehr erfahren oder Teil der Community werden? Schreib uns und sichere dir early access, exklusive Events
            und unseren monatlichen Newsletter.
        </p>
        <div className="contact-wrapper">
            {contactOptions.map((option) => (
                <article key={option.title} className="contact-card">
                    <span className="pill">{option.pill}</span>
                    <strong>{option.title}</strong>
                    <a href={option.link.href}>{option.link.label}</a>
                    <p>{option.description}</p>
                </article>
            ))}
        </div>
    </section>
);

const Footer = () => (
    <footer>
        <div className="footer-line" aria-hidden="true"></div>
        <p>© 2025 BrokeNoMoney – Gemeinsam Richtung finanzielle Freiheit.</p>
    </footer>
);

const App = () => (
    <>
        <NavBar />
        <main>
            <HeroSection />
            <FeatureSection />
            <ContactSection />
        </main>
        <Footer />
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
