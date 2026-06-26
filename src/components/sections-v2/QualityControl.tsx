'use client';

import styles from './QualityControl.module.css';

const qualityChecks = [
    { id: 1,  title: 'Vibration Test' },
    { id: 2,  title: 'Pressure Dew Point Detection' },
    { id: 3,  title: 'Temperature And Humidity Detection' },
    { id: 4,  title: 'Balance Test' },
    { id: 5,  title: 'Exhaust Pressure Test' },
    { id: 6,  title: 'Measure Exhaust Flow' },
    { id: 7,  title: 'Motor Type Test' },
    { id: 8,  title: 'Oil Content Detection' },
    { id: 9,  title: 'Inlet Flow Measurement' },
    { id: 10, title: 'Pipeline Flow Measurement' },
    { id: 11, title: 'Specific Power Measurement' },
    { id: 12, title: 'Air End Rotor Profile Measurement' },
    { id: 13, title: 'Dynamic Balance Test' },
    { id: 14, title: 'Total Power Measurement' },
    { id: 15, title: 'Shock Absorber Testing' },
    { id: 16, title: 'Voltage And Current Detection' },
];

const CheckIcon = () => (
    <svg
        className={styles.checkIcon}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <circle cx="12" cy="12" r="11" fill="rgba(16, 185, 129, 0.12)" />
        <path
            d="M7 12.5L10.5 16L17 9"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default function QualityControl() {
    return (
        <section className={`section ${styles.qualitySection}`} id="quality-control">
            <div className="container">

                {/* ── Section Header ── */}
                <div className={`section-header ${styles.sectionHeader}`}>
                    <h2 className={`section-header__title ${styles.sectionTitle} quality-animate-title`}>
                        Quality Control
                    </h2>
                    <div className={styles.titleAccent} />
                    <p className={`section-header__subtitle ${styles.sectionSubtitle} quality-animate-subtitle`}>
                        ISO 9001:2000 certified with comprehensive quality measures.
                    </p>
                </div>

                {/* ── Checks Grid ── */}
                <div className={styles.checksGrid}>
                    {qualityChecks.map((check, index) => (
                        <div
                            key={check.id}
                            className={`${styles.checkCard} quality-card-animate`}
                            style={{ animationDelay: `${index * 60}ms` }}
                        >
                            <div className={`${styles.iconWrapper} quality-check-icon`}>
                                <CheckIcon />
                            </div>
                            <p className={styles.checkTitle}>{check.title}</p>
                        </div>
                    ))}
                </div>

                {/* ── ISO Badge ── */}
                <div className={`${styles.isoBadge} quality-animate-badge`}>
                    <span className={styles.isoIcon}>🏅</span>
                    <div className={styles.isoText}>
                        <strong>ISO 9001:2000</strong>
                        <span>Certified Manufacturer</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
