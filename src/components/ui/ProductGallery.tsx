'use client';

import { useState } from 'react';
import styles from './ProductGallery.module.css';

interface ProductGalleryProps {
    mainImage: string;
    gallery: string[];
    productName: string;
}

export default function ProductGallery({ mainImage, gallery, productName }: ProductGalleryProps) {
    const allImages = gallery && gallery.length > 0 ? gallery : [mainImage];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className={styles.galleryContainer}>
            <div className={styles.mainImageWrapper}>
                {allImages.length > 1 && (
                    <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={handlePrev} aria-label="Previous image">
                        ‹
                    </button>
                )}
                <div className={styles.mainImage}>
                    <img src={allImages[currentIndex]} alt={productName} />
                </div>
                {allImages.length > 1 && (
                    <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={handleNext} aria-label="Next image">
                        ›
                    </button>
                )}
            </div>
            {allImages.length > 1 && (
                <div className={styles.thumbnails}>
                    {allImages.map((img, i) => (
                        <div
                            key={i}
                            className={`${styles.thumbnail} ${currentIndex === i ? styles.active : ''}`}
                            onClick={() => setCurrentIndex(i)}
                        >
                            <img src={img} alt={`${productName} - Image ${i + 1}`} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
