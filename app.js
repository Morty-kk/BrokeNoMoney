const features = [
    {
        title: "Smarte Budgetplanung",
        description:
            "Verfolge deine Finanzen mit intuitiven Tools und hilfreichen Analysen, die auf deine Bedürfnisse zugeschnitten sind.",
    },
    {
        title: "Ziele visualisieren",
        description:
            "Setze Prioritäten, erstelle Sparziele und beobachte in Echtzeit, wie du ihnen Schritt für Schritt näher kommst.",
    },
    {
        title: "Community & Tipps",
        description:
            "Lerne von der Community, teile Erfahrungen und finde Inspiration für deinen nachhaltigen Lebensstil.",
    },
];

const contacts = [
    {
        icon: "📧",
        label: "E-Mail",
        href: "mailto:hallo@brokenomoney.de",
        text: "hallo@brokenomoney.de",
    },
    {
        icon: "💬",
        label: "Discord",
        href: "https://discord.gg/brokenomoney",
        text: "discord.gg/brokenomoney",
    },
    {
        icon: "📱",
        label: "Instagram",
        href: "https://instagram.com/brokenomoney",
        text: "@brokenomoney",
    },
];

const Navbar = () => (
    <header>
        <div className="navbar">
            <div className="logo">BrokeNoMoney</div>
            <nav>
                <ul>
                    <li>
                        <a href="#home">Start</a>
                    </li>
                    <li>
                        <a href="#about">Über uns</a>
                    </li>
                    <li>
                        <a href="#contact">Kontakt</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
);

const HomeSection = () => (
    <section id="home">
        <h2>Willkommen bei BrokeNoMoney</h2>
        <p>
            <span className="highlight">Finanzielle Freiheit</span> beginnt mit einem klaren Überblick. Mit BrokeNoMoney behältst du
            Ausgaben, Einnahmen und deine Ziele stets im Blick.
        </p>
        <div className="feature-grid">
            {features.map((feature) => (
                <div className="feature-card" key={feature.title}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
    </section>
);

const AboutSection = () => (
    <section id="about">
        <h2>Über uns</h2>
        <p>
            BrokeNoMoney ist ein Projekt von Studierenden, die eine zugängliche Finanzplattform für junge Menschen schaffen möchten.
            Wir kombinieren moderne Technologie mit alltagstauglichen Empfehlungen, damit Geldmanagement Spaß macht.
        </p>
        <p>
            Unser Ansatz ist <span className="highlight">transparent, inklusiv und datenbasiert</span>. Gemeinsam gestalten wir Tools,
            die dir helfen, clevere Entscheidungen zu treffen – ganz ohne komplizierte Fachsprache.
        </p>
    </section>
);

const ContactSection = () => (
    <section id="contact">
        <h2>Kontakt</h2>
        <p>Du möchtest mehr erfahren oder Teil der Community werden? Wir freuen uns auf deine Nachricht.</p>
        <ul className="contact-list">
            {contacts.map((contact) => (
                <li className="contact-item" key={contact.label}>
                    <span role="img" aria-hidden="true">
                        {contact.icon}
                    </span>
                    <strong>{contact.label}:</strong>{" "}
                    <a href={contact.href}>{contact.text}</a>
                </li>
            ))}
        </ul>
    </section>
);

const Footer = () => (
    <footer>
        <p>© 2025 BrokeNoMoney – Alle Rechte vorbehalten.</p>
    </footer>
);

const App = () => (
    <>
        <Navbar />
        <main>
            <HomeSection />
            <AboutSection />
            <ContactSection />
        </main>
        <Footer />
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
