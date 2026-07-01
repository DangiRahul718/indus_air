'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import styles from './ProductsV3.module.css';
import { products as allProducts } from '@/lib/data';

/* ── Pick exactly the 9 required products by id ── */
const PRODUCT_IDS = [
    'screw-air-compressor',
    'diesel-compressor',
    'oil-free-compressor',
    'nitrogen-generator',
    'receiver-tank',
    '4-in-1-air-compressor',
    'air-dryer',
    'air-dryer-1-6m',
    'air-dryer-2-6m',
];

const showcaseProducts = PRODUCT_IDS.map(
    (id) => allProducts.find((p) => p.id === id)
).filter(Boolean) as typeof allProducts;

/* ── Inline SVG spec icons ── */
const PressureIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.specIcon}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
    </svg>
);
const CapacityIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.specIcon}>
        <path d="M13 18H3v-2h10v2zm6-4H3v-2h16v2zm3-4H3V8h19v2z" />
    </svg>
);
const PowerIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.specIcon}>
        <path d="M11.5 2L2 14h9v8l9.5-12h-9V2z" />
    </svg>
);
const CoolingIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.specIcon}>
        <path d="M19 12.92L21 15v1h-4.58l2.72 2.72-1.41 1.41L14.83 17H12v2.83l3.14 3.14-1.41 1.41L11 21.41v-4.58H6.41L9.13 19.5 7.72 21l-3.14-3.14v-2.83H1.73l2.73-2.73L3 11h4.58L4.86 8.27l1.41-1.41L9.17 10H12V7.17L8.86 4.03l1.41-1.41L13 5.41v4.58h4.58l-2.73-2.73 1.41-1.41 3.14 3.14v2.83h2.83l-2.73 2.73z" />
    </svg>
);
const AppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.specIcon}>
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z" />
    </svg>
);

/* ── Single product card ── */
function ProductCard({ product, index }: { product: (typeof allProducts)[0]; index: number }) {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const r = e.currentTarget.getBoundingClientRect();
        setMouse({
            x: ((e.clientX - r.left) / r.width) * 2 - 1,
            y: ((e.clientY - r.top) / r.height) * 2 - 1,
        });
    };

    const specs = product.specifications || {};
    const isVal = (v: any) => v && v !== 'N/A' && v !== 'n/a' && v !== '';

    const pressure = specs.pressure;
    const capacity = specs.capacity;
    const power = specs.power || specs.motor;
    const cooling = specs.cooling;
    const application = product.applications?.slice(0, 3).join(', ');

    const handleCheckDetails = () => {
        document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <motion.div
            className={styles.card}
            style={{ animationDelay: `${index * 0.08}s` }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMouse({ x: 0, y: 0 })}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -10, scale: 1.02 }}
        >
            {/* ─── TOP: specs (35%) + image (65%) ─── */}
            <div className={styles.cardTop}>

                {/* LEFT — Key Highlights */}
                <div className={styles.highlightsPanel}>
                    <h4 className={styles.overlayTitle}>Key Highlights</h4>
                    <div className={styles.overlayDivider} />
                    <ul className={styles.specList}>
                        {isVal(pressure) && (
                            <li className={styles.specItem}>
                                <div className={styles.specHeader}>
                                    <PressureIcon />
                                    <span className={styles.specLabel}>Working Pressure</span>
                                </div>
                                <span className={styles.specValue}>{pressure}</span>
                            </li>
                        )}
                        {isVal(capacity) && (
                            <li className={styles.specItem}>
                                <div className={styles.specHeader}>
                                    <CapacityIcon />
                                    <span className={styles.specLabel}>Capacity</span>
                                </div>
                                <span className={styles.specValue}>{capacity}</span>
                            </li>
                        )}
                        {isVal(power) && (
                            <li className={styles.specItem}>
                                <div className={styles.specHeader}>
                                    <PowerIcon />
                                    <span className={styles.specLabel}>Motor Power</span>
                                </div>
                                <span className={styles.specValue}>{power}</span>
                            </li>
                        )}
                        {isVal(cooling) && (
                            <li className={styles.specItem}>
                                <div className={styles.specHeader}>
                                    <CoolingIcon />
                                    <span className={styles.specLabel}>Cooling Type</span>
                                </div>
                                <span className={styles.specValue}>{cooling}</span>
                            </li>
                        )}
                        {isVal(application) && (
                            <li className={styles.specItem}>
                                <div className={styles.specHeader}>
                                    <AppIcon />
                                    <span className={styles.specLabel}>Application</span>
                                </div>
                                <span className={styles.specValue}>{application}</span>
                            </li>
                        )}
                    </ul>
                </div>

                {/* RIGHT — Product image with orange glow spotlight */}
                <div className={styles.imagePanel}>
                    {/* Parallax orange spotlight */}
                    <div
                        className={styles.spotlight}
                        style={{ transform: `translate(${mouse.x * -8}px, ${mouse.y * -8}px)` }}
                    />
                    <div
                        className={styles.imageParallaxWrapper}
                        style={{ transform: `translate(${mouse.x * 6}px, ${mouse.y * 6}px)` }}
                    >
                        <div className={styles.imageContainer}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 100vw, 33vw"
                                priority={index < 3}
                            />
                        </div>
                    </div>
                    <div className={styles.machineShadow} />
                </div>

                {/* Number badge */}
                <span className={styles.numBadge}>
                    {String(index + 1).padStart(2, '0')}
                </span>
            </div>

            {/* ─── BOTTOM: name + description + CTA ─── */}
            <div className={styles.cardContent}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDescription}>{product.description}</p>
                <div className={styles.ctaWrapper}>
                    <button className={styles.ctaButton} onClick={handleCheckDetails}>
                        Check Details →
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

/* ── Section ── */
export default function ProductsV3() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section ref={ref} className={styles.section}>
            {/* Background particles */}
            <div className={styles.bg} aria-hidden>
                <div className={styles.bgDots} />
                <div className={styles.bgGlow} />
            </div>

            <div className="container">
                {/* Section header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 28 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className={styles.title}>
                        Our Premium{' '}
                        <span className={styles.titleOrange}>Product Line</span>
                    </h2>
                    <div className={styles.titleUnderline} />
                    <p className={styles.subtitle}>
                        Compare technical specifications of all our industrial air compressor models and auxiliary equipment.
                    </p>
                </motion.div>

                {/* 3-col card grid */}
                <div className={styles.grid}>
                    {showcaseProducts.map((product, i) => (
                        <ProductCard key={product.id} product={product} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
