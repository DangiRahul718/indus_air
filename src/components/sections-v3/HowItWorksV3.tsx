'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './HowItWorksV3.module.css';

const steps = [
    {
        number: 1,
        title: 'Requirement Mapping',
        description: 'Our experts analyze your factory load, CFM requirements, and pressure needs.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
    },
    {
        number: 2,
        title: 'Factory-Direct Quote',
        description: 'Receive a transparent and competitive quotation directly from our manufacturing team.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </svg>
        ),
    },
    {
        number: 3,
        title: 'Delivery & Installation',
        description: 'We dispatch directly from our production facility and provide seamless installation.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
        ),
    },
    {
        number: 4,
        title: 'Lifetime Support',
        description: 'Get access to preventive maintenance schedules and 24/7 technical support.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
        ),
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

export default function HowItWorksV3() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    const handleScrollToForm = () => {
        const formElement = document.getElementById('quote-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section ref={ref} className={styles.section}>
            {/* Background */}
            <div className={styles.bg} aria-hidden>
                <div className={styles.bgDots} />
                <div className={styles.bgGlow} />
            </div>

            <div className={`container ${styles.inner}`}>
                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 28 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className={styles.eyebrow}>HOW IT WORKS</span>
                    <h2 className={styles.title}>
                        Seamless Setup.{' '}
                        <span className={styles.titleOrange}>Zero Hassle.</span>
                    </h2>
                    <div className={styles.titleBar} />
                    <p className={styles.subtitle}>
                        A proven 4-step process from first call to lifetime support.
                    </p>
                </motion.div>

                {/* Horizontal Process Grid */}
                <div className={styles.grid}>
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            className={styles.card}
                            variants={cardVariants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            custom={i}
                            whileHover={{ y: -8, scale: 1.025 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        >
                            {/* Card Top: Circle Number */}
                            <div className={styles.cardTop}>
                                <div className={styles.numberBadge}>
                                    {step.number}
                                </div>
                                <div className={styles.iconCircle}>
                                    {step.icon}
                                </div>
                            </div>

                            {/* Card Details */}
                            <h3 className={styles.cardTitle}>{step.title}</h3>
                            <p className={styles.cardDesc}>{step.description}</p>
                            
                            <span className={styles.cardGlow} aria-hidden />
                        </motion.div>
                    ))}
                </div>

                {/* Centered CTA */}
                <motion.div
                    className={styles.ctaWrapper}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <button className={styles.ctaButton} onClick={handleScrollToForm}>
                        <span className={styles.ctaText}>Start with a Free Requirement Mapping</span>
                        <span className={styles.ctaArrow}>→</span>
                        <span className={styles.ctaShine} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
