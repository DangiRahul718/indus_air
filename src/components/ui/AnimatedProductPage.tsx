'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AnimatedProductPage.module.css';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedProductPageProps {
    children: React.ReactNode;
}

export default function AnimatedProductPage({ children }: AnimatedProductPageProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // Hero banner animations
            gsap.fromTo(
                '.animate-hero-badge',
                { opacity: 0, y: 30, scale: 0.8 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)', delay: 0.1 }
            );

            gsap.fromTo(
                '.animate-hero-title',
                { opacity: 0, y: 50, rotateX: -15 },
                { opacity: 1, y: 0, rotateX: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
            );

            gsap.fromTo(
                '.animate-hero-desc',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.4 }
            );

            gsap.fromTo(
                '.animate-hero-cta',
                { opacity: 0, y: 30, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.5)', delay: 0.5 }
            );

            // Product gallery slide in
            gsap.fromTo(
                '.animate-gallery',
                { opacity: 0, x: -80, rotateY: 15 },
                {
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.animate-gallery',
                        start: 'top 85%',
                    },
                }
            );

            // Quick info slide in from right
            gsap.fromTo(
                '.animate-quick-info',
                { opacity: 0, x: 80, rotateY: -15 },
                {
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.animate-quick-info',
                        start: 'top 85%',
                    },
                }
            );

            // Specs items stagger animation
            gsap.fromTo(
                '.animate-spec-item',
                { opacity: 0, x: 20, scale: 0.9 },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'back.out(1.5)',
                    scrollTrigger: {
                        trigger: '.animate-spec-item',
                        start: 'top 90%',
                    },
                }
            );

            // Tabs section reveal
            gsap.fromTo(
                '.animate-tabs',
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.animate-tabs',
                        start: 'top 80%',
                    },
                }
            );

            // Section titles with split text effect
            gsap.utils.toArray<HTMLElement>('.animate-section-title').forEach((title) => {
                gsap.fromTo(
                    title,
                    { opacity: 0, y: 40, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: title,
                            start: 'top 85%',
                        },
                    }
                );
            });

            // Application cards with bounce
            gsap.fromTo(
                '.animate-app-card',
                { opacity: 0, y: 50, scale: 0.8, rotateZ: -5 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateZ: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: '.animate-app-card',
                        start: 'top 85%',
                    },
                }
            );

            // Related product cards with 3D flip
            gsap.fromTo(
                '.animate-related-card',
                { opacity: 0, y: 60, rotateX: -20, transformPerspective: 1000 },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.animate-related-card',
                        start: 'top 85%',
                    },
                }
            );

            // CTA section dramatic reveal
            gsap.fromTo(
                '.animate-cta-content',
                { opacity: 0, scale: 0.9, y: 50 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.animate-cta-content',
                        start: 'top 80%',
                    },
                }
            );

            // Trust badges pop in
            gsap.fromTo(
                '.animate-badge',
                { opacity: 0, scale: 0, rotateZ: -10 },
                {
                    opacity: 1,
                    scale: 1,
                    rotateZ: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'back.out(2)',
                    scrollTrigger: {
                        trigger: '.animate-badge',
                        start: 'top 90%',
                    },
                }
            );

            // Floating effect for icons
            gsap.utils.toArray<HTMLElement>('.animate-float').forEach((el, i) => {
                gsap.to(el, {
                    y: -10,
                    duration: 1.5 + i * 0.2,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                });
            });

            // Parallax scroll effect for hero
            gsap.to('.parallax-hero', {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.parallax-hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className={styles.animatedContainer}>
            {children}
        </div>
    );
}
