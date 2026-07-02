'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedHomePageProps {
    children: React.ReactNode;
}

export default function AnimatedHomePage({ children }: AnimatedHomePageProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

            if (isMobile) {
                // Instantly show everything on mobile to bypass transitions and save CPU
                gsap.set(
                    '.hero-animate-badge, .hero-animate-title, .hero-animate-subtitle, .hero-animate-cta, ' +
                    '.products-animate-title, .product-card-animate, .why-animate-badge, .why-animate-title, ' +
                    '.benefit-card-animate, .stat-animate, .app-animate-title, .app-card-animate, ' +
                    '.testimonial-animate-title, .testimonial-card-animate, .process-animate-title, ' +
                    '.process-animate-subtitle, .process-step-animate, .process-step-number, ' +
                    '.quality-animate-title, .quality-animate-subtitle, .quality-card-animate, ' +
                    '.quality-check-icon, .quality-animate-badge, .blog-animate-title, .blog-card-animate, ' +
                    '.quote-animate-content, .faq-animate-title, .faq-item-animate',
                    { opacity: 1, y: 0, x: 0, scale: 1, rotateX: 0, rotateY: 0, rotateZ: 0 }
                );
                return;
            }

            // ========== HERO SECTION ==========
            // Hero heading, subheading, badge, and CTA buttons render immediately
            gsap.set(
                '.hero-animate-badge, .hero-animate-title, .hero-animate-subtitle, .hero-animate-cta',
                { opacity: 1, y: 0, scale: 1, rotateX: 0 }
            );

            const safeFromTo = (selector: string, fromVars: gsap.TweenVars, toVars: gsap.TweenVars) => {
                if (document.querySelectorAll(selector).length > 0) {
                    gsap.fromTo(selector, fromVars, toVars);
                }
            };

            const safeTo = (selector: string, vars: gsap.TweenVars) => {
                if (document.querySelectorAll(selector).length > 0) {
                    gsap.to(selector, vars);
                }
            };

            // Hero parallax background
            safeTo('.hero-parallax', {
                yPercent: 25,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero-parallax',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            // ========== PRODUCT SHOWCASE ==========
            // Section title animation
            safeFromTo(
                '.products-animate-title',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.products-animate-title',
                        start: 'top 85%',
                    },
                }
            );

            // Product cards with 3D flip-in effect
            safeFromTo(
                '.product-card-animate',
                { opacity: 0, y: 80, rotateY: -15, transformPerspective: 1000 },
                {
                    opacity: 1,
                    y: 0,
                    rotateY: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.product-card-animate',
                        start: 'top 85%',
                    },
                }
            );

            // ========== WHY CHOOSE US ==========
            safeFromTo(
                '.why-animate-badge',
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.why-animate-badge',
                        start: 'top 85%',
                    },
                }
            );

            safeFromTo(
                '.why-animate-title',
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.why-animate-title',
                        start: 'top 85%',
                    },
                }
            );

            // Benefit cards with bounce
            safeFromTo(
                '.benefit-card-animate',
                { opacity: 0, y: 60, scale: 0.85 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'back.out(1.4)',
                    scrollTrigger: {
                        trigger: '.benefit-card-animate',
                        start: 'top 85%',
                    },
                }
            );

            // Stat counters
            safeFromTo(
                '.stat-animate',
                { opacity: 0, scale: 0.5 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'back.out(2)',
                    scrollTrigger: {
                        trigger: '.stat-animate',
                        start: 'top 85%',
                    },
                }
            );

            // ========== APPLICATIONS ==========
            safeFromTo(
                '.app-animate-title',
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.app-animate-title',
                        start: 'top 85%',
                    },
                }
            );

            safeFromTo(
                '.app-card-animate',
                { opacity: 0, y: 50, scale: 0.9, rotateZ: -3 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateZ: 0,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: 'back.out(1.5)',
                    scrollTrigger: {
                        trigger: '.app-card-animate',
                        start: 'top 85%',
                    },
                }
            );

            // ========== TESTIMONIALS ==========
            safeFromTo(
                '.testimonial-animate-title',
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.testimonial-animate-title',
                        start: 'top 85%',
                    },
                }
            );

            safeFromTo(
                '.testimonial-card-animate',
                { opacity: 0, x: -60 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.testimonial-card-animate',
                        start: 'top 85%',
                    },
                }
            );

            // ========== PRODUCTION PROCESS ==========
            safeFromTo(
                '.process-animate-title',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.process-animate-title',
                        start: 'top 85%',
                    },
                }
            );

            safeFromTo(
                '.process-animate-subtitle',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    delay: 0.15,
                    scrollTrigger: {
                        trigger: '.process-animate-subtitle',
                        start: 'top 85%',
                    },
                }
            );

            // Stagger each step card with fade-up
            safeFromTo(
                '.process-step-animate',
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.65,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.process-step-animate',
                        start: 'top 88%',
                    },
                }
            );

            // Scale-in number circles with bounce
            safeFromTo(
                '.process-step-number',
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'back.out(2)',
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: '.process-step-number',
                        start: 'top 88%',
                    },
                }
            );

            // Connector fill – animated red line reveal on scroll (scrub)
            safeTo('.process-connector-fill', {
                scaleX: 1,
                duration: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.process-connector-fill',
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: 1.2,
                },
            });

            // ========== QUALITY CONTROL ==========
            safeFromTo(
                '.quality-animate-title',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.quality-animate-title',
                        start: 'top 85%',
                    },
                }
            );

            safeFromTo(
                '.quality-animate-subtitle',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    delay: 0.1,
                    scrollTrigger: {
                        trigger: '.quality-animate-subtitle',
                        start: 'top 85%',
                    },
                }
            );

            // Staggered card fade-up reveal
            safeFromTo(
                '.quality-card-animate',
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.55,
                    stagger: 0.06,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.quality-card-animate',
                        start: 'top 88%',
                    },
                }
            );

            // Scale-in bounce for check icons
            safeFromTo(
                '.quality-check-icon',
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.4,
                    stagger: 0.05,
                    ease: 'back.out(2)',
                    delay: 0.15,
                    scrollTrigger: {
                        trigger: '.quality-check-icon',
                        start: 'top 88%',
                    },
                }
            );

            // ISO badge fade-up
            safeFromTo(
                '.quality-animate-badge',
                { opacity: 0, y: 20, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: 'back.out(1.5)',
                    scrollTrigger: {
                        trigger: '.quality-animate-badge',
                        start: 'top 90%',
                    },
                }
            );

            // ========== BLOG PREVIEW ==========
            safeFromTo(
                '.blog-animate-title',
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.blog-animate-title',
                        start: 'top 85%',
                    },
                }
            );

            safeFromTo(
                '.blog-card-animate',
                { opacity: 0, y: 50, rotateX: -10, transformPerspective: 800 },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    duration: 0.7,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.blog-card-animate',
                        start: 'top 85%',
                    },
                }
            );

            // ========== QUOTE FORM ==========
            safeFromTo(
                '.quote-animate-content',
                { opacity: 0, y: 60, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.quote-animate-content',
                        start: 'top 80%',
                    },
                }
            );

            // ========== FAQ ==========
            safeFromTo(
                '.faq-animate-title',
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.faq-animate-title',
                        start: 'top 85%',
                    },
                }
            );

            safeFromTo(
                '.faq-item-animate',
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.faq-item-animate',
                        start: 'top 85%',
                    },
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} style={{ overflowX: 'hidden' }}>
            {children}
        </div>
    );
}
