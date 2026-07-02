'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './PainPoints.module.css';

const painPoints = [
    {
        id: 1,
        title: 'Frequent Production Halts?',
        description:
            'Unscheduled breakdowns stop your entire assembly line, shattering delivery deadlines and destroying customer trust.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Skyrocketing Electricity Bills?',
        description:
            'Outdated, poorly optimized compressors bleed power, silently eating away your profit margins month after month.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Ghosted by Service Technicians?',
        description:
            'Waiting for days for local mechanics while your machinery sits idle and plant productivity plummets.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Rigid, Off-the-Shelf Models?',
        description:
            'Mass-market compressors that fail to adapt to your specific CFM, pressure, or industrial OEM requirements.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
            </svg>
        ),
    },
];

const rowVariants = {
    hidden: { opacity: 0, x: -32 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

export default function PainPoints() {
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
                    <span className={styles.eyebrow}>THE HIDDEN COST OF DOWNTIME</span>
                    <h2 className={styles.title}>
                        Is a Faulty Air Compressor Costing Your Factory{' '}
                        <span className={styles.titleOrange}>Lakhs?</span>
                    </h2>
                    <div className={styles.titleBar} />
                </motion.div>

                {/* ── Single premium container with horizontal rows ── */}
                <motion.div
                    className={styles.container}
                    initial={{ opacity: 0, y: 36 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                    {painPoints.map((point, i) => (
                        <motion.div
                            key={point.id}
                            className={`${styles.row} ${i < painPoints.length - 1 ? styles.rowDivider : ''}`}
                            variants={rowVariants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            custom={i}
                            whileHover="hover"
                        >
                            {/* LEFT — icon + vertical accent line */}
                            <div className={styles.rowLeft}>
                                <motion.div
                                    className={styles.iconCircle}
                                    whileHover={{ scale: 1.12 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                                >
                                    <span className={styles.iconSvg}>{point.icon}</span>
                                    <span className={styles.iconGlow} aria-hidden />
                                </motion.div>
                                {i < painPoints.length - 1 && (
                                    <span className={styles.verticalLine} aria-hidden />
                                )}
                            </div>

                            {/* RIGHT — title + description */}
                            <div className={styles.rowRight}>
                                <h3 className={styles.rowTitle}>{point.title}</h3>
                                <p className={styles.rowDesc}>{point.description}</p>
                            </div>

                            {/* Hover overlay glow */}
                            <span className={styles.rowHoverGlow} aria-hidden />
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── Bottom strip ── */}
                <motion.div
                    className={styles.bottomStrip}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p className={styles.bottomText}>
                        Stop losing lakhs to downtime, inefficiency, and the wrong equipment.
                        Choose reliability.{' '}
                        <span className={styles.bottomHighlight}>Choose Indus Air.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
