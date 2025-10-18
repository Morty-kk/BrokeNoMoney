const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Packs", href: "#solutions" },
    { label: "About", href: "#about" },
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
        author: "Jasmin, 22"
    },
    {
        quote:
            "Die täglichen Micro-Challenges machen Sparen irgendwie spielerisch. Und das Dashboard sieht einfach gut aus.",
        author: "Leon, 19"
    },
];

const NavBar = () => (
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
            <a className="contact-link" href="#contact">
                Kontakt
            </a>
        </div>
    </header>
);

const HeroSection = () => (
    <section id="home" className="hero-section">
        <div className="hero-inner">
            <div className="hero-text">
                <span className="tagline">Finanzen, aber endlich verständlich</span>
                <h1>
                    Schon wieder ist am Monatsende das Konto leer?
                    <span className="accent"> Wir ändern das – mit Tools, die wirklich zu deinem Leben passen.</span>
                </h1>
                <p>
                    Vergiss starre Tabellen und Motivation, die nach zwei Wochen verpufft. BrokeNoMore zeigt dir, wie du dein Geld
                    bewusst planst, Dringendes und Wichtiges trennst und trotzdem Spaß im Leben hast.
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
                    <button className="ghost-button" onClick={() => window.location.hash = "#about"}>
                        Mehr erfahren
                    </button>
                </div>
            </div>
            <aside className="hero-figure" aria-label="Feature Vorschau">
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
        <div className="promise-inner">
            <div className="promise-text">
                <span className="tagline">Lerne dein Geld zu lieben</span>
                <h2>Wir holen dich dort ab, wo dein Kontostand gerade ist.</h2>
                <p>
                    Egal ob Taschengeld, Nebenjob oder BAföG – wir helfen dir, mit Geld warm zu werden. Du bekommst Klarheit über
                    Einnahmen und Ausgaben, baust Puffer auf und kannst dir trotzdem Dinge gönnen, die dich glücklich machen.
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

const StatSection = () => (
    <section id="solutions" className="stats-section">
        <div className="stats-intro">
            <h2>Hol dir den Überblick, der dich beruhigt.</h2>
            <p>
                Schon über 3.000 junge Menschen nutzen BrokeNoMore, um ihren eigenen Finanzcheck zu machen. Mit Live-Feedback,
                Community-Support und Challenges, die dich motivieren.
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
                <blockquote key={item.author}>
                    <p>“{item.quote}”</p>
                    <cite>{item.author}</cite>
                </blockquote>
            ))}
        </div>
    </section>
);

const ServicesSection = () => (
    <section id="services" className="services-section">
        <div className="services-header">
            <span className="tagline">Mach dein Geld zum Gamechanger</span>
            <h2>Tools, die nicht nur Zahlen zeigen, sondern dich auch handeln lassen.</h2>
            <p>
                Egal ob du sparen, investieren oder Schulden abbauen willst: Wir geben dir die Struktur und die Motivation, dran zu
                bleiben.
            </p>
        </div>
        <div className="services-grid">
            {serviceCards.map((card) => (
                <article key={card.title} className="service-card">
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

const ContactSection = () => (
    <section id="contact" className="contact-section">
        <div className="contact-inner">
            <h2>Lass uns gemeinsam durchstarten</h2>
            <p>
                Du willst ein Onboarding, das so individuell ist wie dein Finanzleben? Schreib uns und wir setzen den ersten Termin
                mit dir – komplett kostenlos.
            </p>
            <a className="cta" href="mailto:hallo@brokenomore.de">
                Schreib uns an hallo@brokenomore.de
            </a>
        </div>
    </section>
);

const Footer = () => (
    <footer className="footer">
        <p>© {new Date().getFullYear()} BrokeNoMore. Finanzwissen für alle, die nicht reich geboren wurden.</p>
    </footer>
);

const App = () => (
    <>
        <NavBar />
        <main>
            <HeroSection />
            <PromiseSection />
            <StatSection />
            <ServicesSection />
            <ContactSection />
        </main>
        <Footer />
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
