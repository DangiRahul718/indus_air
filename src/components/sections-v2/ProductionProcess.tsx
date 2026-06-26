'use client';

import styles from './ProductionProcess.module.css';

const steps = [
    {
        number: 1,
        icon: '🛒',
        title: 'Purchase Accessories',
        description: 'Source high-quality components from certified suppliers worldwide.',
    },
    {
        number: 2,
        icon: '🔍',
        title: 'Re-inspect Accessories',
        description: 'Thorough quality inspection of all incoming materials and parts.',
    },
    {
        number: 3,
        icon: '⚙️',
        title: 'Assembly Equipment',
        description: 'Precision assembly by skilled technicians following strict protocols.',
    },
    {
        number: 4,
        icon: '🧪',
        title: 'Testing Before Shipment',
        description: 'Comprehensive performance and safety testing of every unit.',
    },
    {
        number: 5,
        icon: '📦',
        title: 'Packaging',
        description: 'Professional packaging to ensure safe transportation.',
    },
    {
        number: 6,
        icon: '🚢',
        title: 'Delivery and Shipment',
        description: 'Reliable logistics partners for timely worldwide delivery.',
    },
];

export default function ProductionProcess() {
    return (
        <section className={`section ${styles.processSection}`}>
            <div className="container">
                {/* Section Header */}
                <div className={`section-header ${styles.sectionHeader} process-animate-header`}>
                    <h2 className={`section-header__title ${styles.sectionTitle} process-animate-title`}>
                        Our Production Process
                    </h2>
                    <div className={styles.titleAccent} />
                    <p className={`section-header__subtitle ${styles.sectionSubtitle} process-animate-subtitle`}>
                        From raw materials to finished product – quality at every step.
                    </p>
                </div>

                {/* Process Timeline Container */}
                <div className={styles.timelineWrapper}>
                    {/* Connecting line behind all steps */}
                    <div className={styles.connectorTrack}>
                        <div className={`${styles.connectorFill} process-connector-fill`} />
                    </div>

                    {/* Steps Grid */}
                    <div className={styles.stepsGrid}>
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className={`${styles.stepCard} process-step-animate`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Step number circle */}
                                <div className={styles.stepNumberWrapper}>
                                    <div className={`${styles.stepNumber} process-step-number`}>
                                        <span className={styles.stepNum}>{step.number}</span>
                                    </div>
                                    {/* Arrow connector – hidden on last step */}
                                    {index < steps.length - 1 && (
                                        <div className={styles.arrowConnector}>
                                            <svg
                                                viewBox="0 0 40 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={styles.arrowSvg}
                                            >
                                                <path
                                                    d="M0 6 H34 M28 1 L34 6 L28 11"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                {/* Icon */}
                                <div className={styles.stepIconWrapper}>
                                    <span className={styles.stepIcon}>{step.icon}</span>
                                </div>

                                {/* Text */}
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>

                                {/* Bottom accent line */}
                                <div className={styles.stepAccentLine} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
