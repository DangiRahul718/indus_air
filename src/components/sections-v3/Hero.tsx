'use client';

import { useState } from 'react';
import styles from './Hero.module.css';
import Button from '../ui/Button';
import CountingStat from '../ui/CountingStat';
import { productCategories, products } from '@/lib/data';

export default function Hero() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={`${styles.hero} hero-parallax`}>
            <div className={styles.background}>
                <div className={styles.overlay}></div>
            </div>

            <div className={`container ${styles.content}`}>
                <div className={styles.textContent}>
                    <span className={`${styles.badge} hero-animate-badge`}>Professional Air Compressor Manufacturer</span>
                    <h1 className={`${styles.title} hero-animate-title`}>
                        <span className={styles.titleLine1}>
                            <span className={styles.outlineText}>Durable</span>{' '}
                            <span className={styles.ampersand}>&</span>{' '}
                            <span className={styles.outlineText}>Reliable</span>
                        </span>
                        <span className={styles.titleLine2}>
                            <span className={styles.highlight}>Air Compressor</span>
                        </span>
                        <span className={styles.titleLine3}>
                            <span className={styles.gradientText}>Manufacturer</span>
                        </span>
                    </h1>
                    <p className={`${styles.subtitle} hero-animate-subtitle`}>
                        With 5+ years of expertise, Indus Air delivers premium quality air compressors
                        to industrial clients worldwide. Energy-efficient, reliable, and built to last.
                    </p>
                    <div className={styles.ctas}>
                        <Button href="/contact" size="lg" className="hero-animate-cta">Contact Us For a Quote</Button>
                        <Button href="/products" variant="outline" size="lg" className="hero-animate-cta">View Products</Button>
                    </div>

                    <div className={styles.stats}>
                        <div className={`${styles.statItem} stat-animate`}>
                            <CountingStat value={5} suffix="+" className={styles.statNumber} />
                            <span className={styles.statLabel}>Years Experience</span>
                        </div>
                        <div className={`${styles.statItem} stat-animate`}>
                            <CountingStat value={3} suffix="+" className={styles.statNumber} />
                            <span className={styles.statLabel}>Countries Served</span>
                        </div>
                        <div className={`${styles.statItem} stat-animate`}>
                            <CountingStat value={1000} suffix="+" className={styles.statNumber} />
                            <span className={styles.statLabel}>Happy Clients</span>
                        </div>
                    </div>
                </div>

                <div className={styles.productTabs}>
                    <div className={styles.tabsHeader}>
                        {productCategories.map((cat, index) => (
                            <button
                                key={cat.id}
                                className={`${styles.tab} ${activeTab === index ? styles.tabActive : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                <span className={styles.tabIcon}>{cat.icon}</span>
                                <span className={styles.tabName}>{cat.name}</span>
                            </button>
                        ))}
                    </div>
                    <div className={styles.tabContent}>
                        <div className={styles.productPreview}>
                            <div className={styles.productImage}>
                                {products.find(p => p.id === productCategories[activeTab].id)?.image ? (
                                    <img
                                        src={products.find(p => p.id === productCategories[activeTab].id)?.image}
                                        alt={productCategories[activeTab].name}
                                        className={styles.heroProductImage}
                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    />
                                ) : (
                                    <div className={styles.imagePlaceholder}>
                                        <span>🔧</span>
                                    </div>
                                )}
                            </div>
                            <div className={styles.productInfo}>
                                <h3>{productCategories[activeTab].name}</h3>
                                <p>High-quality {productCategories[activeTab].name.toLowerCase()} compressors for industrial applications.</p>
                                <Button href={`/products?category=${productCategories[activeTab].id}`} size="sm">
                                    Explore →
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <span>Scroll Down</span>
                <div className={styles.scrollArrow}></div>
            </div>
        </section>
    );
}
