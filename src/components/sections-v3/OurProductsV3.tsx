'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import styles from './OurProductsV3.module.css';

const products = [
    {
        id: 1,
        title: 'Screw Air Compressor',
        description: 'Energy-efficient rotary screw compressors for continuous industrial duty.',
        image: '/products/screw-air-compressor/1.png',
        cta: 'Request Quote',
    },
    {
        id: 2,
        title: 'Oil-Free Compressor',
        description: '100% clean, oil-free air for pharma, food and electronics applications.',
        image: '/products/oil-free-compressor/1.png',
        cta: 'Request Quote',
    },
    {
        id: 3,
        title: 'Diesel Air Compressor',
        description: 'Portable diesel-powered compressors for construction and mining sites.',
        image: '/products/diesel-compressor/1.png',
        cta: 'Request Quote',
    },
    {
        id: 4,
        title: '4-in-1 Compressor',
        description: 'Integrated compressor, dryer and tank solution.',
        image: '/products/4-in-1-air-compressor/1.png',
        cta: 'Request Quote',
    },
    {
        id: 5,
        title: 'Nitrogen Generator',
        description: 'PSA nitrogen generators for on-site high purity production.',
        image: '/products/nitrogen-generator/1.png',
        cta: 'Request Quote',
    },
    {
        id: 6,
        title: 'Refrigerated Air Dryer',
        description: 'Reliable air dryers for moisture-free compressed air.',
        image: '/products/air-dryer/1.6m3/1.6-1.png',
        cta: 'Request Quote',
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

export default function OurProductsV3() {
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
                    <span className={styles.eyebrow}>OUR PRODUCTS</span>
                    <h2 className={styles.title}>
                        Complete Compressed{' '}
                        <span className={styles.titleOrange}>Air Solutions</span>
                    </h2>
                    <div className={styles.titleBar} />
                    <p className={styles.subtitle}>
                        Choose from our wide range of industrial-grade air compressors and accessories engineered for Indian conditions.
                    </p>
                </motion.div>

                {/* 3x2 Grid */}
                <div className={styles.grid}>
                    {products.map((p, i) => (
                        <motion.div
                            key={p.id}
                            className={styles.card}
                            variants={cardVariants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            custom={i}
                            whileHover={{ y: -8, scale: 1.025 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        >
                            {/* Card Top: Image Container */}
                            <div className={styles.imageContainer}>
                                <div className={styles.spotlight} />
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={p.image}
                                        alt={p.title}
                                        fill
                                        className={styles.image}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                            </div>

                            {/* Card Middle & Bottom: Details */}
                            <div className={styles.cardBody}>
                                <h3 className={styles.cardTitle}>{p.title}</h3>
                                <p className={styles.cardDesc}>{p.description}</p>
                                
                                <div className={styles.cardFooter}>
                                    <button className={styles.ctaButton} onClick={handleScrollToForm}>
                                        {p.cta} <span className={styles.ctaArrow}>→</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
