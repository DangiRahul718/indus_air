'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './WhyIndusV3.module.css';

const stats = [
    { value: '5+', label: 'Years Manufacturing', icon: '📅' },
    { value: '1000+', label: 'Units Delivered', icon: '📦' },
    { value: '3+', label: 'Countries Served', icon: '🌍' },
    { value: '24/7', label: 'Service Support', icon: '🔧' },
];

const reasons = [
    {
        icon: '🏭',
        title: 'Factory Direct',
        desc: 'No middlemen — buy directly from the manufacturer. Save 20–35% vs distributor pricing.',
    },
    {
        icon: '🎛️',
        title: 'Custom OEM Solutions',
        desc: 'We engineer to your exact specs: pressure, flow, footprint, voltage, and certifications.',
    },
    {
        icon: '✅',
        title: 'ISO 9001:2000 Certified',
        desc: 'Every unit is tested to international quality standards before leaving our facility.',
    },
    {
        icon: '⚡',
        title: 'Energy Efficient',
        desc: 'IE3 premium efficiency motors and inverter-driven VFD options — reduce energy bill by up to 35%.',
    },
    {
        icon: '🚀',
        title: 'Fast Delivery',
        desc: '2–4 week lead times for standard models. Nationwide installation and commissioning team.',
    },
    {
        icon: '🔒',
        title: '3-Year Warranty',
        desc: 'Industry-leading warranty backed by 100+ authorised service centres across India.',
    },
];

export default function WhyIndusV3() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section ref={ref} className={styles.section}>
            <div className={styles.bgAccent} aria-hidden />
            <div className="container">
                {/* Stats row */}
                <div className={styles.statsRow}>
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            className={styles.statBox}
                            initial={{ opacity: 0, y: 24 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className={styles.statIcon}>{s.icon}</span>
                            <span className={styles.statValue}>{s.value}</span>
                            <span className={styles.statLabel}>{s.label}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Heading */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className={styles.eyebrow}>Why Indus Air?</span>
                    <h2 className={styles.title}>
                        India&apos;s Most Trusted{' '}
                        <span className={styles.orange}>Compressor Manufacturer</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Combining cutting-edge engineering with 5+ years of industry expertise to
                        deliver compressors that maximise uptime and minimise cost.
                    </p>
                </motion.div>

                {/* Reasons grid */}
                <div className={styles.grid}>
                    {reasons.map((r, i) => (
                        <motion.div
                            key={r.title}
                            className={styles.card}
                            initial={{ opacity: 0, y: 28 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -5 }}
                        >
                            <div className={styles.cardIcon}>{r.icon}</div>
                            <h3 className={styles.cardTitle}>{r.title}</h3>
                            <p className={styles.cardDesc}>{r.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
