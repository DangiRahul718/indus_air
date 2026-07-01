'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './TestimonialsV3.module.css';

const testimonials = [
    {
        id: 1,
        quote:
            'We replaced three imported compressors with Indus Air screw units. The energy savings alone paid back in 14 months. Excellent build quality.',
        name: 'Rajesh Sharma',
        title: 'Plant Head',
        company: 'Bharat Forge Components',
        rating: 5,
    },
    {
        id: 2,
        quote:
            'Indus Air understood our food-grade air requirements immediately. Their oil-free compressor passed all our audits without a single modification.',
        name: 'Priya Menon',
        title: 'Quality Manager',
        company: 'Heritage Foods Ltd.',
        rating: 5,
    },
    {
        id: 3,
        quote:
            'After-sales support is outstanding. Technician was on-site within 4 hours of our call. That level of response is rare in this industry.',
        name: 'Suresh Patel',
        title: 'Maintenance Engineer',
        company: 'Tata Chemicals',
        rating: 5,
    },
    {
        id: 4,
        quote:
            'Price was 25% better than competitors and the delivery was right on schedule. Will definitely order again for our new plant expansion.',
        name: 'Amit Verma',
        title: 'Procurement Director',
        company: 'Jindal Industries',
        rating: 5,
    },
    {
        id: 5,
        quote:
            'The nitrogen generator has eliminated our cylinder dependency. Running cost dropped from ₹45K/month to ₹8K/month. Remarkable ROI.',
        name: 'Kiran Nair',
        title: 'Operations Manager',
        company: 'Nippon Paint India',
        rating: 5,
    },
    {
        id: 6,
        quote:
            'Custom spec was handled professionally. The VFD-driven unit matches our variable demand perfectly — zero idle energy waste.',
        name: 'Deepak Singh',
        title: 'Chief Engineer',
        company: 'Lupin Pharmaceuticals',
        rating: 5,
    },
];

function Stars({ count }: { count: number }) {
    return (
        <div className={styles.stars}>
            {Array.from({ length: count }).map((_, i) => (
                <span key={i}>★</span>
            ))}
        </div>
    );
}

export default function TestimonialsV3() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section ref={ref} className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className={styles.eyebrow}>Client Stories</span>
                    <h2 className={styles.title}>
                        Trusted by <span className={styles.orange}>1000+ Industries</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Real results from real clients — factory owners, procurement managers and
                        engineers across India.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.5,
                                delay: 0.1 + i * 0.07,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(8,27,69,0.14)' }}
                        >
                            <Stars count={t.rating} />
                            <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <div className={styles.authorName}>{t.name}</div>
                                    <div className={styles.authorMeta}>
                                        {t.title} · {t.company}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
