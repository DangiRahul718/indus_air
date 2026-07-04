'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ProductShowcase.module.css';
import Button from '../ui/Button';
import { products } from '@/lib/data';

// Helper to dynamically resolve certification or priority badges
const getProductBadge = (product: any) => {
    if (product.specifications?.certification) {
        return product.specifications.certification;
    }
    if (product.specifications?.purity) {
        return `Purity ${product.specifications.purity}`;
    }
    const priorityKeywords = ['class 0', 'efficient', 'purity', 'certified', 'energy saving', 'space saving'];
    if (product.features) {
        for (const keyword of priorityKeywords) {
            const found = product.features.find((f: string) => f.toLowerCase().includes(keyword));
            if (found) return found;
        }
        // Fallback to first feature if it exists and is relatively short
        if (product.features.length > 0 && product.features[0].length < 30) {
            return product.features[0];
        }
    }
    return null;
};

// SVG Icon Components for specs list
const PressureIcon = () => (
    <svg style={{ width: '12px', height: '12px', fill: 'currentColor' }} viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12.25c0-.41.34-.75.75-.75s.75.34.75.75V11h2.25c.41 0 .75.34.75.75s-.34.75-.75.75h-3V7.75z"/>
    </svg>
);

const CapacityIcon = () => (
    <svg style={{ width: '12px', height: '12px', fill: 'currentColor' }} viewBox="0 0 24 24">
        <path d="M13 18H3v-2h10v2zm6-4H3v-2h16v2zm3-4H3V8h19v2z"/>
    </svg>
);

const PowerIcon = () => (
    <svg style={{ width: '12px', height: '12px', fill: 'currentColor' }} viewBox="0 0 24 24">
        <path d="M11.5 2L2 14h9v8l9.5-12h-9V2z"/>
    </svg>
);

const CoolingIcon = () => (
    <svg style={{ width: '12px', height: '12px', fill: 'currentColor' }} viewBox="0 0 24 24">
        <path d="M19 12.92L21 15v1h-4.58l2.72 2.72-1.41 1.41L14.83 17H12v2.83l3.14 3.14-1.41 1.41L11 21.41v-4.58H6.41L9.13 19.5 7.72 21l-3.14-3.14v-2.83H1.73l2.73-2.73L3 11h4.58L4.86 8.27l1.41-1.41L9.17 10H12V7.17L8.86 4.03l1.41-1.41L13 5.41v4.58h4.58l-2.73-2.73 1.41-1.41 3.14 3.14v2.83h2.83l-2.73 2.73z"/>
    </svg>
);

const ApplicationIcon = () => (
    <svg style={{ width: '12px', height: '12px', fill: 'currentColor' }} viewBox="0 0 24 24">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm6 12h-2v-2h2v2zm0-4H4v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"/>
    </svg>
);

// High-performance single product card with local mouse parallax state
function ProductCard({ 
    product, 
    index, 
    onCheckDetails 
}: { 
    product: any; 
    index: number; 
    onCheckDetails: () => void; 
}) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        // Calculate offset relative to the center of the card
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // Range: -1 to 1
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // Range: -1 to 1
        setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
        setMousePos({ x: 0, y: 0 });
    };

    const badgeText = getProductBadge(product);
    const specs = product.specifications || {};
    
    const pressure = specs.pressure;
    const capacity = specs.capacity;
    const power = specs.power || specs.motor;
    const cooling = specs.cooling;
    const application = product.applications?.join(', ');

    const isAvailable = (val: any) => {
        return val && val !== 'N/A' && val !== 'n/a' && val !== '';
    };

    const hasPressure = isAvailable(pressure);
    const hasCapacity = isAvailable(capacity);
    const hasPower = isAvailable(power);
    const hasCooling = isAvailable(cooling);
    const hasApplication = isAvailable(application);

    // Subtle parallax transformations: max 6px image translate, max -8px spotlight translate (opposite directions)
    const imageTransform = {
        transform: `translate(${mousePos.x * 6}px, ${mousePos.y * 6}px)`,
    };
    
    const spotlightTransform = {
        transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)`,
    };

    return (
        <div 
            className={styles.card} 
            style={{ animationDelay: `${index * 0.1}s` }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.cardTop}>
                {/* Left Side (35%) - Highlights specifications */}
                <div className={styles.highlightsPanel}>
                    <h4 className={styles.overlayTitle}>Key Highlights</h4>
                    <div className={styles.overlayDivider} />
                    <ul className={styles.specList}>
                        {hasPressure && (
                            <li className={styles.specItem}>
                                <div className={styles.specHeader}>
                                    <PressureIcon />
                                    <span className={styles.specLabel}>Working Pressure</span>
                                </div>
                                <span className={styles.specValue}>{pressure}</span>
                            </li>
                        )}
                        {hasCapacity && (
                            <li className={styles.specItem}>
                                <div className={styles.specHeader}>
                                    <CapacityIcon />
                                    <span className={styles.specLabel}>Capacity</span>
                                </div>
                                <span className={styles.specValue}>{capacity}</span>
                            </li>
                        )}
                        {hasPower && (
                            <li className={styles.specItem}>
                                <div className={styles.specHeader}>
                                    <PowerIcon />
                                    <span className={styles.specLabel}>Motor Power</span>
                                </div>
                                <span className={styles.specValue}>{power}</span>
                            </li>
                        )}
                        {hasCooling && (
                            <li className={styles.specItem}>
                                <div className={styles.specHeader}>
                                    <CoolingIcon />
                                    <span className={styles.specLabel}>Cooling Type</span>
                                </div>
                                <span className={styles.specValue}>{cooling}</span>
                            </li>
                        )}
                        {hasApplication && (
                            <li className={styles.specItem}>
                                <div className={styles.specHeader}>
                                    <ApplicationIcon />
                                    <span className={styles.specLabel}>Application</span>
                                </div>
                                <span className={styles.specValue}>{application}</span>
                            </li>
                        )}
                    </ul>
                </div>

                {/* Right Side (65%) - Centered machinery image and parallax spotlight */}
                <div className={styles.imagePanel}>
                    <div className={styles.spotlight} style={spotlightTransform} />
                    <div className={styles.imageParallaxWrapper} style={imageTransform}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                priority={index < 3}
                                quality={75}
                            />
                        </div>
                    </div>
                    <div className={styles.machineShadow} />
                </div>

                {badgeText && (
                    <span className={styles.badge}>{badgeText}</span>
                )}
            </div>

            <div className={styles.cardContent}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDescription}>{product.description}</p>
                
                <div className={styles.ctaWrapper}>
                    <Button onClick={onCheckDetails} className={styles.ctaButton}>
                        Check Details
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default function ProductShowcase() {
    const handleCheckDetails = () => {
        const formEl = document.getElementById('quote-form');
        if (formEl) {
            const y = formEl.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section className={`section ${styles.showcase}`}>
            <div className="container">
                <div className={styles.sectionHeaderRow}>
                    <div className="section-header" style={{ marginBottom: 0 }}>
                        <h2 className="section-header__title products-animate-title">Our Premium Product Line</h2>
                        <p className="section-header__subtitle">
                            Compare technical specifications of all our air end compressor models and auxiliary equipment.
                        </p>
                    </div>
                </div>

                <div className={styles.gridContainer}>
                    {products.slice(0, 9).map((product, index) => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            index={index} 
                            onCheckDetails={handleCheckDetails} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
