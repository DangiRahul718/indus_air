'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './IndustriesServedV3.module.css';

const industries = [
    {
        id: 1,
        name: 'Textile',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="industry-svg" style={{ width: '38px', height: '38px' }}>
                {/* Spool top and bottom flanges */}
                <rect x="10" y="6" width="28" height="4" rx="1.5" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
                <rect x="10" y="38" width="28" height="4" rx="1.5" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
                {/* Core spindle */}
                <rect x="22" y="10" width="4" height="28" fill="#94A3B8" />
                {/* Thread body */}
                <rect x="14" y="10" width="20" height="28" rx="2" fill="#FF7A00" stroke="#475569" strokeWidth="2" />
                {/* Thread winding patterns */}
                <line x1="14" y1="15" x2="34" y2="15" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="14" y1="20" x2="34" y2="20" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="14" y1="25" x2="34" y2="25" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="14" y1="30" x2="34" y2="30" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="14" y1="35" x2="34" y2="35" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />
            </svg>
        ),
    },
    {
        id: 2,
        name: 'Pharmaceutical',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="industry-svg" style={{ width: '38px', height: '38px' }}>
                <g transform="rotate(45 24 24)">
                    {/* Left half - Red capsule */}
                    <path d="M12 24v-6a6 6 0 0112 0v6H12z" fill="#EF4444" stroke="#475569" strokeWidth="2" />
                    {/* Right half - Yellow capsule */}
                    <path d="M12 24v6a6 6 0 0012 0v-6H12z" fill="#FBBF24" stroke="#475569" strokeWidth="2" />
                    {/* Inner highlight */}
                    <path d="M15 18a3 3 0 013-3" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                </g>
            </svg>
        ),
    },
    {
        id: 3,
        name: 'Construction',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="industry-svg" style={{ width: '38px', height: '38px' }}>
                {/* Ground */}
                <line x1="4" y1="42" x2="44" y2="42" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
                {/* Mast structure */}
                <line x1="14" y1="12" x2="14" y2="42" stroke="#F59E0B" strokeWidth="3" />
                <line x1="18" y1="12" x2="18" y2="42" stroke="#F59E0B" strokeWidth="3" />
                <line x1="14" y1="18" x2="18" y2="24" stroke="#F59E0B" strokeWidth="1.5" />
                <line x1="14" y1="30" x2="18" y2="36" stroke="#F59E0B" strokeWidth="1.5" />
                {/* Jib */}
                <line x1="4" y1="12" x2="40" y2="12" stroke="#F59E0B" strokeWidth="3" />
                {/* Counterweight */}
                <rect x="6" y="14" width="6" height="6" fill="#475569" stroke="#475569" strokeWidth="1.5" />
                {/* Trolley and Hook */}
                <rect x="28" y="12" width="4" height="2" fill="#475569" />
                <line x1="30" y1="14" x2="30" y2="26" stroke="#475569" strokeWidth="1.5" />
                <path d="M28 26c1.5 0 2 1.5 2 1.5s.5-1.5 2-1.5" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
                {/* Cabin */}
                <rect x="19" y="8" width="6" height="6" fill="#E2E8F0" stroke="#475569" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        id: 4,
        name: 'Automotive',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="industry-svg" style={{ width: '38px', height: '38px' }}>
                {/* Car shadow */}
                <ellipse cx="24" cy="38" rx="18" ry="3" fill="#E2E8F0" opacity="0.5" />
                {/* Car upper body */}
                <path d="M12 24l4-8h16l4 8H12z" fill="#3B82F6" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />
                {/* Car lower body */}
                <path d="M6 24h36v8H6v-8z" fill="#FF7A00" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />
                {/* Windows */}
                <path d="M15 23l2.5-5.5h13l2.5 5.5H15z" fill="#FFFFFF" stroke="#475569" strokeWidth="1.5" />
                {/* Wheels */}
                <circle cx="14" cy="34" r="5" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                <circle cx="14" cy="34" r="2" fill="#E2E8F0" />
                <circle cx="34" cy="34" r="5" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                <circle cx="34" cy="34" r="2" fill="#E2E8F0" />
                {/* Headlight */}
                <circle cx="39" cy="27" r="1.5" fill="#FBBF24" />
            </svg>
        ),
    },
    {
        id: 5,
        name: 'Food & Beverage',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="industry-svg" style={{ width: '38px', height: '38px' }}>
                {/* Plate */}
                <circle cx="24" cy="24" r="14" fill="#FFFFFF" stroke="#475569" strokeWidth="2" />
                <circle cx="24" cy="24" r="9" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                {/* Fork (Left) */}
                <path d="M8 14v10c0 2 1.5 3.5 3.5 3.5v6.5M10 14v6M12 14v6" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
                {/* Knife (Right) */}
                <path d="M37 14v12H35V14M37 26v14" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 6,
        name: 'Mining',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="industry-svg" style={{ width: '38px', height: '38px' }}>
                {/* Handle */}
                <line x1="12" y1="36" x2="32" y2="16" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
                {/* Pickaxe Head */}
                <path d="M18 12c4-4 12-6 18-6M36 6c-2 6-4 14-8 18" stroke="#FBBF24" strokeWidth="3.5" strokeLinecap="round" />
                {/* Connecting ring */}
                <circle cx="28" cy="12" r="3.5" fill="#475569" stroke="#475569" strokeWidth="1.5" />
                {/* Rocks/Gems */}
                <rect x="8" y="30" width="4" height="4" rx="1" fill="#94A3B8" />
                <rect x="36" y="28" width="6" height="6" rx="1.5" fill="#94A3B8" />
            </svg>
        ),
    },
    {
        id: 7,
        name: 'Electronics',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="industry-svg" style={{ width: '38px', height: '38px' }}>
                {/* Chip body */}
                <rect x="12" y="12" width="24" height="24" rx="2" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                {/* Inner center die */}
                <rect x="18" y="18" width="12" height="12" rx="1" fill="#FF7A00" stroke="#475569" strokeWidth="1.5" />
                {/* Circuit details */}
                <circle cx="24" cy="24" r="2.5" fill="#FFFFFF" />
                {/* Pins - Top */}
                <line x1="17" y1="6" x2="17" y2="12" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="24" y1="6" x2="24" y2="12" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="31" y1="6" x2="31" y2="12" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
                {/* Pins - Bottom */}
                <line x1="17" y1="36" x2="17" y2="42" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="24" y1="36" x2="24" y2="42" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="31" y1="36" x2="31" y2="42" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
                {/* Pins - Left */}
                <line x1="6" y1="17" x2="12" y2="17" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="6" y1="24" x2="12" y2="24" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="6" y1="31" x2="12" y2="31" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
                {/* Pins - Right */}
                <line x1="36" y1="17" x2="42" y2="17" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="36" y1="24" x2="42" y2="24" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="36" y1="31" x2="42" y2="31" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 8,
        name: 'General Manufacturing',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="industry-svg" style={{ width: '38px', height: '38px' }}>
                {/* Factory structure */}
                <path d="M6 38V22l10 6V22l10 6V18l16 8v12H6z" fill="#FF7A00" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />
                {/* Chimneys */}
                <rect x="34" y="10" width="4" height="10" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
                {/* Smoke */}
                <circle cx="36" cy="6" r="3" fill="#E2E8F0" opacity="0.7" />
                <circle cx="39" cy="4" r="2" fill="#E2E8F0" opacity="0.5" />
                {/* Windows */}
                <rect x="10" y="32" width="3" height="3" fill="#1E293B" />
                <rect x="18" y="32" width="3" height="3" fill="#1E293B" />
                <rect x="26" y="32" width="3" height="3" fill="#1E293B" />
            </svg>
        ),
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

export default function IndustriesServedV3() {
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
                    <span className={styles.eyebrow}>INDUSTRIES WE SERVE</span>
                    <h2 className={styles.title}>
                        Trusted Across{' '}
                        <span className={styles.titleOrange}>Every Major Industry</span>
                    </h2>
                    <div className={styles.titleBar} />
                    <p className={styles.subtitle}>
                        Our compressors power critical operations across India&apos;s leading industrial sectors.
                    </p>
                </motion.div>

                {/* Industries Grid */}
                <div className={styles.grid}>
                    {industries.map((ind, i) => (
                        <motion.div
                            key={ind.id}
                            className={styles.card}
                            variants={cardVariants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            custom={i}
                            whileHover={{ y: -8, scale: 1.03 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        >
                            {/* Icon Container */}
                            <div className={styles.iconCircle}>
                                <span className={styles.iconSvg}>{ind.icon}</span>
                                <span className={styles.iconGlow} aria-hidden />
                            </div>

                            {/* Divider Line */}
                            <div className={styles.accentLine} />

                            {/* Name */}
                            <h3 className={styles.cardTitle}>{ind.name}</h3>

                            <span className={styles.cardGlow} aria-hidden />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
