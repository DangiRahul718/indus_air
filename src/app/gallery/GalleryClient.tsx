'use client';

import { useState } from 'react';
import styles from './gallery.module.css';
import Button from '@/components/ui/Button';

interface GalleryClientProps {
    galleryItems: {
        id: number;
        title: string;
        category: string;
        image: string;
    }[];
}

export default function GalleryClient({ galleryItems }: GalleryClientProps) {
    const [activeFilter, setActiveFilter] = useState('All');

    // Extract unique categories from items
    const categories = ['All', ...Array.from(new Set(galleryItems.map(item => item.category)))];

    const filteredItems = activeFilter === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    return (
        <div className={styles.galleryPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>Project Gallery</span>
                        <h1>Our Successful Installations</h1>
                        <p>
                            Explore our portfolio of air compressor installations across
                            various industries and countries worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className={`section ${styles.gallery}`}>
                <div className="container">
                    <div className={styles.filters}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={activeFilter === category ? styles.filterActive : ''}
                                onClick={() => setActiveFilter(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className={styles.grid}>
                        {filteredItems.map((item) => (
                            <div key={item.id} className={styles.galleryItem}>
                                <div className={styles.imageWrapper}>
                                    <div className={styles.imagePlaceholder}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className={styles.galleryImage}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className={styles.overlay}>
                                        <h3>{item.title}</h3>
                                        <span className={styles.category}>{item.category}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Want to See Your Project Here?</h2>
                        <p>Partner with us and join our growing list of satisfied clients</p>
                        <Button href="/contact" size="lg">Start Your Project</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
