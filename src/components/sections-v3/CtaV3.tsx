'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './CtaV3.module.css';

export default function CtaV3() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section ref={ref} className={styles.section}>
            <div className={styles.bg} aria-hidden>
                <div className={styles.bgDots} />
                <div className={styles.bgGlow} />
            </div>

            <div className={`container ${styles.inner}`}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className={styles.eyebrow}>Ready to Get Started?</span>
                    <h2 className={styles.title}>
                        Get Your Free Quote
                        <br />
                        <span className={styles.orange}>Within 30 Minutes</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Talk to our compressor expert today. No commitment, no pressure — just
                        honest advice and factory-direct pricing.
                    </p>

                    <div className={styles.actions}>
                        <motion.a
                            href="#quote-form"
                            className={styles.btnPrimary}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Request a Quote →
                        </motion.a>
                        <a href="tel:+919876543210" className={styles.btnSecondary}>
                            📞 Call: +91 98765 43210
                        </a>
                    </div>

                    <div className={styles.trustPills}>
                        {[
                            '✓ No Obligation',
                            '✓ Factory-Direct Price',
                            '✓ ISO Certified',
                            '✓ Pan-India Delivery',
                        ].map((pill) => (
                            <span key={pill} className={styles.pill}>
                                {pill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
