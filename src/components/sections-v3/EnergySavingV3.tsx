'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './EnergySavingV3.module.css';

// Simple counter component for stats
function Counter({ value, suffix = '', duration = 1.5 }: { value: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const end = value;
        if (start === end) return;

        const totalMiliseconds = duration * 1000;
        const stepTime = Math.abs(Math.floor(totalMiliseconds / end));
        
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) {
                clearInterval(timer);
            }
        }, Math.max(stepTime, 20));

        return () => clearInterval(timer);
    }, [inView, value, duration]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}

export default function EnergySavingV3() {
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
                {/* Main Content & Grid */}
                <div className={styles.mainGrid}>
                    {/* Left Column: Heading & Copy */}
                    <motion.div
                        className={styles.leftCol}
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className={styles.eyebrow}>ENERGY SAVING & ROI</span>
                        <h2 className={styles.title}>
                            Cut Energy Consumption by{' '}
                            <span className={styles.titleOrange}>Up to 30%</span>
                        </h2>
                        
                        <div className={styles.quoteBlock}>
                            <span className={styles.quoteLine} />
                            <p className={styles.quoteText}>
                                &ldquo;Your Compressor Should Be An Asset, Not An Expense.&rdquo;
                            </p>
                        </div>

                        <p className={styles.desc}>
                            Engineered with advanced internal dynamics, Indus Air compressors deliver higher CFM (airflow) per kilowatt of energy. By replacing aging and inefficient systems, customers can recover their investment within 12–18 months through power savings.
                        </p>

                        <button className={styles.ctaButton} onClick={handleScrollToForm}>
                            <span className={styles.ctaText}>Calculate My Savings</span>
                            <span className={styles.ctaShine} />
                        </button>
                    </motion.div>

                    {/* Right Column: 2x2 KPI Cards */}
                    <div className={styles.rightCol}>
                        <div className={styles.kpiGrid}>
                            {/* Card 1 */}
                            <motion.div
                                className={styles.kpiCard}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -6, scale: 1.04 }}
                            >
                                <div className={styles.kpiValue}>
                                    <Counter value={30} suffix="%" />
                                </div>
                                <div className={styles.kpiLabel}>LOWER ENERGY BILLS</div>
                                <span className={styles.cardGlow} aria-hidden />
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div
                                className={styles.kpiCard}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -6, scale: 1.04 }}
                            >
                                <div className={styles.kpiValue}>
                                    {inView ? '12–18' : '0'}
                                </div>
                                <div className={styles.kpiLabel}>MONTHS PAYBACK</div>
                                <span className={styles.cardGlow} aria-hidden />
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div
                                className={styles.kpiCard}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -6, scale: 1.04 }}
                            >
                                <div className={styles.kpiValue}>
                                    <span className={styles.arrowIcon}>↑</span> CFM
                                </div>
                                <div className={styles.kpiLabel}>PER KILOWATT</div>
                                <span className={styles.cardGlow} aria-hidden />
                            </motion.div>

                            {/* Card 4 */}
                            <motion.div
                                className={styles.kpiCard}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.55, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -6, scale: 1.04 }}
                            >
                                <div className={styles.kpiValue}>
                                    <Counter value={100} suffix="%" />
                                </div>
                                <div className={styles.kpiLabel}>TESTED QUALITY</div>
                                <span className={styles.cardGlow} aria-hidden />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Bottom Benefits Strip */}
                <motion.div
                    className={styles.benefitsStrip}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className={styles.benefitItem}>
                        <div className={styles.benefitMarker}>
                            <span className={styles.markerCircle} />
                        </div>
                        <div className={styles.benefitContent}>
                            <h4 className={styles.benefitTitle}>Optimized Performance</h4>
                            <p className={styles.benefitDesc}>Maximum output with minimum energy usage.</p>
                        </div>
                    </div>

                    <div className={styles.benefitItem}>
                        <div className={styles.benefitMarker}>
                            <span className={styles.markerCircle} />
                        </div>
                        <div className={styles.benefitContent}>
                            <h4 className={styles.benefitTitle}>Reduced Operational Cost</h4>
                            <p className={styles.benefitDesc}>Lower power consumption leads to higher profitability.</p>
                        </div>
                    </div>

                    <div className={styles.benefitItem}>
                        <div className={styles.benefitMarker}>
                            <span className={styles.markerCircle} />
                        </div>
                        <div className={styles.benefitContent}>
                            <h4 className={styles.benefitTitle}>Sustainable Solution</h4>
                            <p className={styles.benefitDesc}>Energy-efficient technology for a greener tomorrow.</p>
                        </div>
                    </div>

                    <div className={styles.benefitItem}>
                        <div className={styles.benefitMarker}>
                            <span className={styles.markerCircle} />
                        </div>
                        <div className={styles.benefitContent}>
                            <h4 className={styles.benefitTitle}>Measurable ROI</h4>
                            <p className={styles.benefitDesc}>Real savings you can track month after month.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
