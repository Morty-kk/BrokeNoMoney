const { useMemo, useEffect, useState } = React;

const patientProfile = {
    name: "Sara Neumann",
    pronouns: "sie/ihr",
    birthdate: "1989-08-12",
    lastUpdated: "05. Mai 2024 um 21:45 Uhr",
    emergencyId: "DE-EP-4820",
    insurance: "Techniker Krankenkasse – 010987654",
    address: "Bergstraße 12, 50676 Köln",
    language: "Deutsch, Englisch",
    bloodType: "0 Rh+",
    organDonor: true,
    advancedDirective: "Patientenverfügung und Vollmachten in digitaler Mappe (Stand 02/2024)",
    chronicConditions: [
        { label: "Asthma bronchiale (mittelgradig)" },
        { label: "Autoimmunthyreoiditis (Hashimoto)" },
    ],
    allergies: [
        { label: "Erdnüsse", reaction: "Anaphylaxie – Adrenalin-Autoinjektor verfügbar" },
        { label: "Penicillin", reaction: "Schwere Atemnot" },
    ],
    precautions: [
        "Adrenalin-Autoinjektor immer in der Tasche (Innenfach links)",
        "Keine Betablocker verabreichen (Asthma)",
        "Sauerstoffgabe bei SpO₂ < 94 %"
    ],
    medications: [
        {
            name: "Salbutamol Inhalation",
            dosage: "2 Hübe bei Bedarf (max. 6/Tag)",
            schedule: ["08:00", "20:00"],
            critical: true,
            note: "Bei akuter Atemnot sofort einsetzen",
        },
        {
            name: "Levothyroxin",
            dosage: "75 µg morgens nüchtern",
            schedule: ["06:30"],
            critical: false,
            note: "Einnahme mindestens 30 Min vor dem Frühstück",
        },
        {
            name: "Cetirizin",
            dosage: "10 mg bei allergischer Reaktion",
            schedule: ["Bedarf"],
            critical: false,
            note: "Kann mit Autoinjektor kombiniert werden",
        },
    ],
    emergencyContacts: [
        {
            name: "Jonas Neumann",
            relation: "Partner",
            phone: "+49 162 1234567",
            availability: "24/7 erreichbar",
        },
        {
            name: "Miriam Falk",
            relation: "Mutter",
            phone: "+49 151 9876543",
            availability: "Ab 07:00 Uhr erreichbar",
        },
    ],
    medicalTeam: [
        {
            name: "Dr. Eva Kraus",
            specialty: "Hausärztin",
            phone: "+49 221 450120",
            institution: "Praxis am Stadtgarten, Köln",
        },
        {
            name: "Dr. Noah Langer",
            specialty: "Pulmologe",
            phone: "+49 221 334455",
            institution: "Lungenzentrum Köln Süd",
        },
    ],
    devices: [
        {
            label: "Adrenalin-Autoinjektor",
            detail: "Epinephrin 0,3 mg – gültig bis 11/2024",
        },
        {
            label: "Peak-Flow-Meter",
            detail: "Referenzbereich 420–470 L/min",
        },
        {
            label: "Smartwatch",
            detail: "Sendet Herzfrequenz & SpO₂ in Echtzeit",
        },
    ],
    vaccinations: [
        { label: "Influenza", status: "Aktuell (2023/24)" },
        { label: "COVID-19", status: "Auffrischung 10/2023" },
        { label: "Tetanus", status: "gültig bis 08/2028" },
    ],
    documents: [
        {
            type: "Medikamentenplan (PDF)",
            updated: "05.05.2024",
            url: "#medplan",
        },
        {
            type: "Patientenverfügung",
            updated: "14.02.2024",
            url: "#directive",
        },
        {
            type: "Allergiepass",
            updated: "18.04.2024",
            url: "#allergy",
        },
    ],
    vitalParameters: [
        { label: "Körpergröße", value: "170 cm" },
        { label: "Gewicht", value: "63 kg" },
        { label: "Blutdruck (Ruhe)", value: "118/76 mmHg" },
        { label: "Puls (Ruhe)", value: "68 bpm" },
        { label: "Sauerstoffsättigung", value: "97 %" },
    ],
    lastMeasurements: [
        { title: "Peak-Flow", value: "430 L/min", timestamp: "05.05.2024, 08:05" },
        { title: "SpO₂", value: "97 %", timestamp: "05.05.2024, 08:00" },
        { title: "Puls", value: "72 bpm", timestamp: "05.05.2024, 08:00" },
    ],
    timeline: [
        {
            icon: "🫁",
            date: "05.05.2024",
            title: "Asthma-Kontrolle",
            description: "Peak-Flow stabil, keine Auffälligkeiten. Inhalator neu bestellt.",
        },
        {
            icon: "⚠️",
            date: "12.04.2024",
            title: "Notaufnahme Köln Süd",
            description: "Schwere allergische Reaktion nach Thai-Essen. Adrenalin-Autoinjektor verabreicht.",
        },
        {
            icon: "💊",
            date: "02.03.2024",
            title: "Medikamentenplan aktualisiert",
            description: "Levothyroxin-Dosis auf 75 µg angepasst. Kontrolltermin in 6 Wochen.",
        },
    ],
    notes: [
        "Patientin reagiert sensibel auf stark parfümierte Aerosole.",
        "Bei Eingriffen Prämedikation gegen Übelkeit einplanen.",
        "Spricht gut auf ruhige, strukturierte Anweisungen an.",
    ],
};

const calculateAge = (birthdate) => {
    const date = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    const monthDiff = today.getMonth() - date.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
        age -= 1;
    }
    return age;
};

const Panel = ({ id, title, icon, tone = "default", children, description }) => (
    <section className={`panel panel--${tone}`} aria-labelledby={id}>
        <header className="panel__header">
            <span className="panel__icon" aria-hidden="true">{icon}</span>
            <div className="panel__title-group">
                <h2 id={id}>{title}</h2>
                {description && <p className="panel__description">{description}</p>}
            </div>
        </header>
        <div className="panel__body">{children}</div>
    </section>
);

const InfoTag = ({ label, tone = "default" }) => (
    <span className={`info-tag info-tag--${tone}`}>{label}</span>
);

const Sensitive = ({ reveal, children }) => (
    <span className="sensitive-wrapper">
        <span className={`sensitive ${reveal ? "sensitive--visible" : ""}`} aria-hidden={!reveal}>
            {children}
        </span>
        {!reveal && <span className="sr-only">Vertrauliche Angaben verborgen</span>}
    </span>
);

const PatientSummary = ({ profile, showSensitive }) => {
    const age = useMemo(() => calculateAge(profile.birthdate), [profile.birthdate]);

    const formattedBirthdate = useMemo(() => {
        const date = new Date(profile.birthdate);
        return date.toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    }, [profile.birthdate]);

    return (
        <section className="patient-summary" aria-labelledby="patient-summary-heading">
            <div className="patient-summary__identity">
                <div className="patient-summary__avatar" aria-hidden="true">
                    {profile.name.charAt(0)}
                </div>
                <div>
                    <p className="patient-summary__eyebrow">Notfall-Pass</p>
                    <h2 id="patient-summary-heading">{profile.name}</h2>
                    <p className="patient-summary__meta">
                        {profile.pronouns} · {age} Jahre
                    </p>
                </div>
                <div className="patient-summary__id">
                    <span className="patient-summary__id-label">Notfall-ID</span>
                    <Sensitive reveal={showSensitive}>{profile.emergencyId}</Sensitive>
                </div>
            </div>
            <dl className="patient-summary__facts">
                <div>
                    <dt>Geburtsdatum</dt>
                    <dd>{formattedBirthdate}</dd>
                </div>
                <div>
                    <dt>Blutgruppe</dt>
                    <dd>{profile.bloodType}</dd>
                </div>
                <div>
                    <dt>Sprache</dt>
                    <dd>{profile.language}</dd>
                </div>
                <div>
                    <dt>Versicherung</dt>
                    <dd>
                        <Sensitive reveal={showSensitive}>{profile.insurance}</Sensitive>
                    </dd>
                </div>
                <div>
                    <dt>Adresse</dt>
                    <dd>
                        <Sensitive reveal={showSensitive}>{profile.address}</Sensitive>
                    </dd>
                </div>
                <div>
                    <dt>Organspende</dt>
                    <dd>{profile.organDonor ? "Ja" : "Nein"}</dd>
                </div>
                <div>
                    <dt>Patientenverfügung</dt>
                    <dd>{profile.advancedDirective}</dd>
                </div>
            </dl>
            <div className="patient-summary__actions" role="group" aria-label="Schnellaktionen">
                <a className="action-button action-button--primary" href="tel:112">
                    <span aria-hidden="true">🚑</span>
                    Notruf 112
                </a>
                <a className="action-button" href="tel:+491621234567">
                    <span aria-hidden="true">📞</span>
                    Partner anrufen
                </a>
                <button className="action-button" type="button">
                    <span aria-hidden="true">🖨️</span>
                    Pass drucken
                </button>
                <button className="action-button" type="button">
                    <span aria-hidden="true">🔗</span>
                    Sicher teilen
                </button>
            </div>
        </section>
    );
};

const CriticalInfo = ({ profile }) => (
    <Panel
        id="critical-info"
        title="Akute Hinweise"
        icon="⚠️"
        tone="danger"
        description="Informationen mit höchster Priorität für Ersthelfende"
    >
        <div className="critical-grid">
            <div className="critical-card">
                <h3>Allergien</h3>
                <ul className="critical-list">
                    {profile.allergies.map((item) => (
                        <li key={item.label}>
                            <strong>{item.label}</strong>
                            <span>{item.reaction}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="critical-card">
                <h3>Diagnosen</h3>
                <ul className="critical-list">
                    {profile.chronicConditions.map((item) => (
                        <li key={item.label}>{item.label}</li>
                    ))}
                </ul>
            </div>
            <div className="critical-card">
                <h3>Besondere Hinweise</h3>
                <ul className="critical-list">
                    {profile.precautions.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    </Panel>
);

const UpcomingMedication = ({ upcoming }) => (
    <div className="medication-upcoming" role="status" aria-live="polite">
        <h3>Nächste Einnahmen</h3>
        <ul>
            {upcoming.map((entry) => (
                <li key={`${entry.medication.name}-${entry.timeLabel}`}>
                    <div>
                        <strong>{entry.medication.name}</strong>
                        <span>{entry.timeLabel} Uhr</span>
                    </div>
                    <span className="medication-upcoming__due">{entry.relative}</span>
                </li>
            ))}
        </ul>
    </div>
);

const MedicationSection = ({ medications, upcoming }) => (
    <Panel
        id="medication-plan"
        title="Medikamentenplan"
        icon="💊"
        description="Regelmäßige und Bedarfsmedikation mit Dosierung"
    >
        {upcoming.length > 0 && <UpcomingMedication upcoming={upcoming} />}
        <div className="medication-grid">
            {medications.map((medication) => (
                <article
                    key={medication.name}
                    className={`medication-card ${medication.critical ? "medication-card--critical" : ""}`}
                >
                    <header>
                        <h3>{medication.name}</h3>
                        {medication.critical && <InfoTag label="kritisch" tone="danger" />}
                    </header>
                    <p className="medication-card__dosage">{medication.dosage}</p>
                    <div className="medication-card__schedule">
                        <span>Einnahmezeiten:</span>
                        <div className="medication-card__chips">
                            {medication.schedule.map((time) => (
                                <span key={time} className="pill">
                                    {time}
                                </span>
                            ))}
                        </div>
                    </div>
                    {medication.note && <p className="medication-card__note">{medication.note}</p>}
                </article>
            ))}
        </div>
    </Panel>
);

const ContactSection = ({ contacts, showSensitive }) => (
    <Panel id="contacts" title="Notfallkontakte" icon="📞" description="Reihenfolge nach Priorität">
        <div className="contact-list">
            {contacts.map((contact) => (
                <article key={contact.name} className="contact-card">
                    <div className="contact-card__header">
                        <h3>{contact.name}</h3>
                        <InfoTag label={contact.relation} />
                    </div>
                    <p className="contact-card__availability">{contact.availability}</p>
                    <div className="contact-card__actions">
                        <a className="action-button action-button--subtle" href={`tel:${contact.phone}`}>
                            <span aria-hidden="true">📞</span>
                            Anrufen
                        </a>
                        <span className="contact-card__phone">
                            <Sensitive reveal={showSensitive}>{contact.phone}</Sensitive>
                        </span>
                    </div>
                </article>
            ))}
        </div>
    </Panel>
);

const CareTeamSection = ({ team, showSensitive }) => (
    <Panel id="care-team" title="Behandelndes Team" icon="👩‍⚕️">
        <ul className="care-team-list">
            {team.map((member) => (
                <li key={member.name}>
                    <div className="care-team-list__main">
                        <strong>{member.name}</strong>
                        <span>{member.specialty}</span>
                    </div>
                    <div className="care-team-list__meta">
                        <span>{member.institution}</span>
                        <span>
                            <Sensitive reveal={showSensitive}>{member.phone}</Sensitive>
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    </Panel>
);

const DeviceSection = ({ devices, vaccinations }) => (
    <Panel id="equipment" title="Ausrüstung & Impfstatus" icon="🧰">
        <div className="equipment-grid">
            <div>
                <h3>Hilfsmittel</h3>
                <ul className="equipment-list">
                    {devices.map((device) => (
                        <li key={device.label}>
                            <strong>{device.label}</strong>
                            <span>{device.detail}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Impfungen</h3>
                <ul className="equipment-list">
                    {vaccinations.map((shot) => (
                        <li key={shot.label}>
                            <strong>{shot.label}</strong>
                            <span>{shot.status}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </Panel>
);

const DocumentSection = ({ documents }) => (
    <Panel id="documents" title="Dokumente" icon="📂">
        <ul className="document-list">
            {documents.map((doc) => (
                <li key={doc.type}>
                    <div>
                        <strong>{doc.type}</strong>
                        <span>aktualisiert am {doc.updated}</span>
                    </div>
                    <a className="action-button action-button--subtle" href={doc.url}>
                        <span aria-hidden="true">🔍</span>
                        Anzeigen
                    </a>
                </li>
            ))}
        </ul>
    </Panel>
);

const BaselineSection = ({ vitals, lastMeasurements }) => (
    <Panel id="baseline" title="Basiswerte" icon="📈">
        <div className="baseline-grid">
            {vitals.map((item) => (
                <div key={item.label} className="baseline-card">
                    <span className="baseline-card__label">{item.label}</span>
                    <strong className="baseline-card__value">{item.value}</strong>
                </div>
            ))}
        </div>
        <div className="measurement-list">
            <h3>Letzte Messungen</h3>
            <ul>
                {lastMeasurements.map((entry) => (
                    <li key={entry.title}>
                        <strong>{entry.title}</strong>
                        <span>{entry.value}</span>
                        <span className="measurement-list__time">{entry.timestamp}</span>
                    </li>
                ))}
            </ul>
        </div>
    </Panel>
);

const TimelineSection = ({ events, notes }) => (
    <Panel id="timeline" title="Verlauf & Hinweise" icon="🗂️">
        <div className="timeline">
            {events.map((event) => (
                <article key={`${event.date}-${event.title}`} className="timeline-entry">
                    <div className="timeline-entry__icon" aria-hidden="true">
                        {event.icon}
                    </div>
                    <div>
                        <p className="timeline-entry__date">{event.date}</p>
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                    </div>
                </article>
            ))}
        </div>
        <div className="note-list">
            <h3>Kommunikationshinweise</h3>
            <ul>
                {notes.map((note) => (
                    <li key={note}>{note}</li>
                ))}
            </ul>
        </div>
    </Panel>
);

const computeUpcomingMedications = () => {
    const now = new Date();
    const entries = [];

    patientProfile.medications.forEach((medication) => {
        medication.schedule.forEach((timeLabel) => {
            if (!/^\d{2}:\d{2}$/.test(timeLabel)) {
                return;
            }
            const [hour, minute] = timeLabel.split(":").map(Number);
            const due = new Date();
            due.setHours(hour, minute, 0, 0);
            if (due.getTime() <= now.getTime()) {
                due.setDate(due.getDate() + 1);
            }
            const diffMinutes = Math.round((due.getTime() - now.getTime()) / 60000);
            const hours = Math.floor(diffMinutes / 60);
            const minutes = diffMinutes % 60;
            let relative = "in Kürze";
            if (diffMinutes <= 0) {
                relative = "jetzt";
            } else if (hours === 0) {
                relative = minutes <= 1 ? "in 1 Min" : `in ${minutes} Min`;
            } else if (minutes === 0) {
                relative = `in ${hours} Std`;
            } else {
                relative = `in ${hours} Std ${minutes} Min`;
            }
            entries.push({
                medication,
                timeLabel,
                due,
                relative,
            });
        });
    });

    entries.sort((a, b) => a.due.getTime() - b.due.getTime());

    return entries.slice(0, 3);
};

const App = () => {
    const [highContrast, setHighContrast] = useState(false);
    const [showSensitive, setShowSensitive] = useState(false);

    useEffect(() => {
        document.body.dataset.contrast = highContrast ? "high" : "standard";
    }, [highContrast]);

    const upcomingMedications = useMemo(() => computeUpcomingMedications(), []);

    return (
        <div className="app-shell">
            <div className="app-shell__inner">
                <header className="topbar" role="banner">
                    <div>
                        <p className="topbar__eyebrow">Digitaler Notfall-Pass</p>
                        <h1>Patientenansicht</h1>
                        <p className="topbar__meta">Zuletzt aktualisiert: {patientProfile.lastUpdated}</p>
                    </div>
                    <div className="topbar__actions">
                        <button
                            type="button"
                            className="btn btn--ghost"
                            onClick={() => setHighContrast((value) => !value)}
                        >
                            {highContrast ? "Standardkontrast" : "Hoher Kontrast"}
                        </button>
                        <button
                            type="button"
                            className="btn btn--ghost"
                            onClick={() => setShowSensitive((value) => !value)}
                        >
                            {showSensitive ? "Sensible Daten verbergen" : "Sensible Daten anzeigen"}
                        </button>
                        <button type="button" className="btn btn--primary">
                            Pass exportieren
                        </button>
                    </div>
                </header>
                <main className="layout-grid">
                    <div className="layout-grid__main">
                        <PatientSummary profile={patientProfile} showSensitive={showSensitive} />
                        <CriticalInfo profile={patientProfile} />
                        <MedicationSection medications={patientProfile.medications} upcoming={upcomingMedications} />
                        <TimelineSection events={patientProfile.timeline} notes={patientProfile.notes} />
                    </div>
                    <aside className="layout-grid__aside">
                        <ContactSection contacts={patientProfile.emergencyContacts} showSensitive={showSensitive} />
                        <CareTeamSection team={patientProfile.medicalTeam} showSensitive={showSensitive} />
                        <DeviceSection devices={patientProfile.devices} vaccinations={patientProfile.vaccinations} />
                        <DocumentSection documents={patientProfile.documents} />
                        <BaselineSection
                            vitals={patientProfile.vitalParameters}
                            lastMeasurements={patientProfile.lastMeasurements}
                        />
                    </aside>
                </main>
            </div>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
