'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// Hero text animation - staggered fade in with slide
export function useHeroAnimation() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!heroRef.current) return;
        const hero = heroRef.current;

        const ctx = gsap.context(() => {
            // Animate hero elements with stagger
            const heroElements = hero.querySelectorAll('.animate-hero');
            if (heroElements.length > 0) {
                gsap.fromTo(
                    heroElements,
                    {
                        opacity: 0,
                        y: 60,
                        scale: 0.95,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        stagger: 0.15,
                        ease: 'power3.out',
                    }
                );
            }

            // Parallax effect on hero background
            gsap.to(heroRef.current, {
                backgroundPosition: '50% 30%',
                ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return heroRef;
}

// Scroll reveal animation for sections
export function useScrollReveal() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;
        const section = sectionRef.current;

        const ctx = gsap.context(() => {
            // Animate section title
            const titles = section.querySelectorAll('.reveal-title');
            if (titles.length > 0) {
                gsap.fromTo(
                    titles,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            }

            // Animate cards with stagger
            const cards = section.querySelectorAll('.reveal-card');
            if (cards.length > 0) {
                gsap.fromTo(
                    cards,
                    { opacity: 0, y: 50, scale: 0.9 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: 'back.out(1.2)',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 75%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return sectionRef;
}

// Product gallery hover effect
export function useProductHover() {
    const productRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!productRef.current) return;

        const product = productRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = product.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            gsap.to(product, {
                rotateY: x * 10,
                rotateX: -y * 10,
                transformPerspective: 1000,
                duration: 0.5,
                ease: 'power2.out',
            });
        };

        const handleMouseLeave = () => {
            gsap.to(product, {
                rotateY: 0,
                rotateX: 0,
                duration: 0.5,
                ease: 'power2.out',
            });
        };

        product.addEventListener('mousemove', handleMouseMove);
        product.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            product.removeEventListener('mousemove', handleMouseMove);
            product.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return productRef;
}

// Floating animation for elements
export function useFloatingAnimation() {
    const floatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!floatRef.current) return;

        const ctx = gsap.context(() => {
            gsap.to(floatRef.current, {
                y: -15,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });
        }, floatRef);

        return () => ctx.revert();
    }, []);

    return floatRef;
}

// Number counter animation
export function useCounterAnimation(targetValue: number, suffix: string = '') {
    const counterRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!counterRef.current) return;

        const ctx = gsap.context(() => {
            const counter = { value: 0 };

            ScrollTrigger.create({
                trigger: counterRef.current,
                start: 'top 85%',
                onEnter: () => {
                    gsap.to(counter, {
                        value: targetValue,
                        duration: 2,
                        ease: 'power2.out',
                        onUpdate: () => {
                            if (counterRef.current) {
                                counterRef.current.textContent = Math.round(counter.value) + suffix;
                            }
                        },
                    });
                },
            });
        }, counterRef);

        return () => ctx.revert();
    }, [targetValue, suffix]);

    return counterRef;
}

// Magnetic button effect
export function useMagneticButton() {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!buttonRef.current) return;

        const button = buttonRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(button, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        const handleMouseLeave = () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.5)',
            });
        };

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return buttonRef;
}
