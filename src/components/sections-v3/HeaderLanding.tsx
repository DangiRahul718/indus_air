'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeaderLanding.module.css';

export default function HeaderLanding() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.headerRoot} ${scrolled ? styles.scrolled : ''}`}>

            {/* ══════════════ TOP INFO BAR ══════════════ */}
            <div className={styles.topBar}>
                <div className={`container ${styles.topBarInner}`}>
                    {/* Left — contact info */}
                    <div className={styles.topBarLeft}>
                        <span className={styles.topBarItem}>
                            <svg className={styles.topBarIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" fill="currentColor" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" fill="currentColor" />
                            </svg>
                            info@indusaircompressor.com
                        </span>
                        <span className={styles.topBarDivider} aria-hidden="true">|</span>
                        <span className={styles.topBarItem}>
                            <svg className={styles.topBarIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" fill="currentColor" />
                            </svg>
                            +91 84012 42943
                        </span>
                    </div>

                    {/* Right — tagline */}
                    <div className={styles.topBarRight}>
                        <span className={styles.topBarTagline}>
                            Professional Air Compressor Manufacturer Since 2021
                        </span>
                    </div>
                </div>
            </div>

            {/* ══════════════ MAIN NAV BAR ══════════════ */}
            <nav className={styles.nav} role="navigation" aria-label="Landing page navigation">
                <div className={`container ${styles.navInner}`}>

                    {/* LEFT — Logo */}
                    <Link href="/" className={styles.logoLink} aria-label="Indus Air Compressor — Home">
                        <Image
                            src="/logo.jpeg"
                            alt="INDUS AIR Compressor"
                            width={180}
                            height={50}
                            className={styles.logoImage}
                        />
                    </Link>

                    {/* RIGHT — CTA Buttons */}
                    <div className={styles.ctaGroup}>
                        {/* Call Now */}
                        <a
                            href="tel:+918401242943"
                            className={styles.btnCallNow}
                            id="header-call-now"
                            aria-label="Call us now"
                        >
                            <svg className={styles.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" fill="currentColor" />
                            </svg>
                            <span className={styles.btnText}>Call Now</span>
                        </a>

                        {/* Quick Quote */}
                        <a
                            href="#quote-form"
                            className={styles.btnQuote}
                            id="header-quick-quote"
                        >
                            Quick Quote
                            <span className={styles.btnArrow} aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
