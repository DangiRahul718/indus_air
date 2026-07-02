'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './TrustV3.module.css';

const trustItems = [
    {
        id: 1,
        title: 'Massive Manufacturing Scale',
        description:
            'We are equipped with a 15,000 m² manufacturing facility featuring advanced production lines and precision engineering.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <rect x="9" y="13" width="6" height="8" rx="1" />
                <path d="M3 9h18" />
                <line x1="9" y1="3" x2="9" y2="9" />
                <line x1="15" y1="3" x2="15" y2="9" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'ISO 9001:2000 Certified Quality',
        description:
            'Every compressor undergoes rigorous quality testing and international certification standards.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                <path d="M9 8l2 2 4-4" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Unrivaled 24/7 Engineer Backup',
        description:
            'Our dedicated engineering support team remains available around the clock for installation and service.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0118 0v6" />
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Custom OEM & B2B Flexibility',
        description:
            'We manufacture customized compressor solutions based on your industrial requirements.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
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

export default function TrustV3() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

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
                    <span className={styles.eyebrow}>WHY SWITCH TO INDUS AIR</span>
                    <h2 className={styles.title}>
                        Engineered for Heavy Industries,{' '}
                        <span className={styles.titleOrange}>Trusted by B2B Leaders</span>
                    </h2>
                    <div className={styles.titleBar} />
                </motion.div>

                {/* 2x2 Grid Container */}
                <div className={styles.grid}>
                    {trustItems.map((item, i) => (
                        <motion.div
                            key={item.id}
                            className={styles.card}
                            variants={cardVariants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            custom={i}
                            whileHover={{ y: -8, scale: 1.025 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        >
                            {/* Left Side: Icon Container */}
                            <div className={styles.iconContainer}>
                                <div className={styles.iconCircle}>
                                    <span className={styles.iconSvg}>{item.icon}</span>
                                    <span className={styles.iconGlow} aria-hidden />
                                </div>
                            </div>

                            {/* Right Side: Text Contents */}
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
