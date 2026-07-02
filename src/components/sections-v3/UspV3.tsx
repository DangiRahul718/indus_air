'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './UspV3.module.css';

const usps = [
    {
        id: 1,
        title: 'ISO 9001:2000 Certified',
        description: 'Every compressor meets international quality standards — verified and certified.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                <path d="M9 8l2 2 4-4" />
            </svg>
        ),
        accent: '#FF7A00',
    },
    {
        id: 2,
        title: '24/7 Engineer Support',
        description: 'Our technical team is available round the clock for installation and servicing.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.007 1.2 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                <path d="M14.05 2a9 9 0 018 7.94" />
                <path d="M14.05 6A5 5 0 0118 10" />
            </svg>
        ),
        accent: '#FF7A00',
    },
    {
        id: 3,
        title: 'Factory-Direct Pricing',
        description: 'No middlemen. Buy directly from the manufacturer for best prices in Gujarat.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 010 7H6" />
            </svg>
        ),
        accent: '#FF7A00',
    },
    {
        id: 4,
        title: 'Custom OEM Solutions',
        description: 'We design compressors to your exact specifications — capacity, pressure & size.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
            </svg>
        ),
        accent: '#FF7A00',
    },
    {
        id: 5,
        title: '15,000 m² Production Plant',
        description: 'Large-scale manufacturing capacity — bulk orders fulfilled with fast turnaround.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <rect x="9" y="13" width="6" height="8" rx="1" />
                <path d="M3 9h18" />
                <line x1="9" y1="3" x2="9" y2="9" />
                <line x1="15" y1="3" x2="15" y2="9" />
            </svg>
        ),
        accent: '#FF7A00',
    },
    {
        id: 6,
        title: 'Fast Delivery in Ahmedabad',
        description: 'Quick dispatch from our Naroda Road production unit. Pan-India shipping available.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="1" />
                <path d="M16 8h4l3 3v5h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
        ),
        accent: '#FF7A00',
    },
];

const blockVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

export default function UspV3() {
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
                {/* ── Section header ── */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 28 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className={styles.eyebrow}>WHY INDUS AIR</span>
                    <h2 className={styles.title}>
                        The Smart Choice for{' '}
                        <span className={styles.titleOrange}>Ahmedabad Industries</span>
                    </h2>
                    <div className={styles.titleBar} />
                    <p className={styles.subtitle}>
                        Six reasons why 1,000+ factories across Gujarat trust Indus Air compressors for their critical operations.
                    </p>
                </motion.div>

                {/* ── 2×3 USP grid inside premium container ── */}
                <motion.div
                    className={styles.container}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className={styles.grid}>
                        {usps.map((usp, i) => (
                            <motion.div
                                key={usp.id}
                                className={styles.block}
                                variants={blockVariants}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                custom={i}
                                whileHover={{ y: -6, scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                            >
                                {/* Icon */}
                                <div className={styles.iconWrap}>
                                    <span className={styles.iconBg}>{usp.icon}</span>
                                    <span className={styles.iconGlow} aria-hidden />
                                </div>

                                {/* Orange accent line */}
                                <span className={styles.accentLine} aria-hidden />

                                {/* Text */}
                                <h3 className={styles.blockTitle}>{usp.title}</h3>
                                <p className={styles.blockDesc}>{usp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
