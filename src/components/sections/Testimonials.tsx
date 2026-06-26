'use client';

import { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // 5 seconds

        return () => clearInterval(interval);
    }, []);

    // Touch handling for swipe
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null); // Reset touch end to prevent "click then swipe" bug
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    };

    return (
        <section className={`section ${styles.testimonials}`}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-header__title testimonial-animate-title">What Clients Are Saying About Indus Air</h2>
                    <p className="section-header__subtitle">
                        Hear from our satisfied customers around the world
                    </p>
                </div>

                <div className={styles.carousel}>
                    <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevSlide} aria-label="Previous">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <div
                        className={styles.carouselTrack}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`${styles.testimonialCard} ${index === activeIndex ? styles.active : ''}`}
                                style={{
                                    transform: `translateX(${(index - activeIndex) * 100}%)`,
                                    opacity: index === activeIndex ? 1 : 0.3,
                                }}
                            >
                                <div className={styles.quoteIcon}>"</div>
                                <div className={styles.starRating}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span key={star} className={styles.star}>★</span>
                                    ))}
                                </div>
                                <p className={styles.testimonialText}>{testimonial.text}</p>
                                <div className={styles.authorInfo}>
                                    <div className={styles.authorAvatar}>
                                        <span>{testimonial.author.charAt(0)}</span>
                                    </div>
                                    <div>
                                        <h4 className={styles.authorName}>{testimonial.author}</h4>
                                        <p className={styles.authorRole}>{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextSlide} aria-label="Next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>

                <div className={styles.dots}>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
