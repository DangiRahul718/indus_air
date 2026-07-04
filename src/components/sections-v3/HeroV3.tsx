'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './HeroV3.module.css';

const trustBadges = [
    { label: 'ISO 9001:2000', sub: 'Certified' },
    { label: '5+ Years Experience', sub: 'Manufacturing' },
    { label: '24/7 Support', sub: 'Available' },
    { label: '15000 m² Plant Area', sub: 'Factory Direct' },
];


const products = [
    'Screw Air Compressor',
    'Oil-Free Compressor',
    'Diesel Compressor',
    'Nitrogen Generator',
    'Air Dryer',
    'Piston Compressor',
    'Portable Compressor',
    'Other',
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

const slideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

export default function HeroV3() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const [form, setForm] = useState({
        name: '',
        phone: '',
        company: '',
        product: '',
        details: '',
        website: '', // Honeypot
    });

    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
    };

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Front-end honeypot check
        if (form.website) {
            setSubmitted(true);
            return;
        }

        if (!form.name || !form.phone || !form.company || !form.product) {
            setError('Please fill in all required fields.');
            return;
        }

        const phoneClean = form.phone.replace(/[\s\-\+\(\)]/g, '');
        if (phoneClean.length < 7 || phoneClean.length > 15 || !/^\d+$/.test(phoneClean)) {
            setError('Please enter a valid phone number.');
            return;
        }

        setSubmitting(true);
        try {
            const res = await fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setSubmitted(true);
            } else {
                const data = await res.json();
                setError(data.error || 'Something went wrong. Please try again.');
            }
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section ref={ref} className={styles.hero}>
            {/* ── Background ── */}
            <div className={styles.bg}>
                <div className={styles.bgDots} />
                <div className={styles.bgGradient} />
                {mounted && !isMobile && <Particles />}
            </div>

            <div className={`container ${styles.inner}`}>
                {/* ══════════════ LEFT — 40% ══════════════ */}
                <div className={styles.left}>
                    {/* Badge */}
                    <span className={styles.topBadge}>
                        <span className={styles.badgeDot} />
                        ISO 9001:2000 Certified Manufacturer
                    </span>

                    {/* Headline */}
                    <h1 className={styles.headline}>
                        <span className={styles.line1}>Industrial Air Compressors</span>
                        <span className={styles.line2}>Built to Last</span>
                    </h1>

                    {/* Subtext */}
                    <p className={styles.subtext}>
                        India&apos;s trusted manufacturer of screw, oil-free, diesel and nitrogen
                        compressors.&nbsp; Factory-direct pricing, custom OEM solutions, and 24/7
                        service support.
                    </p>

                    {/* CTA Buttons */}
                    <div className={styles.ctas}>
                        <a href="#quote-form" className={styles.btnPrimary}>
                            Get Free Quote
                            <span className={styles.btnArrow}>→</span>
                        </a>
                        <a href="tel:+919876543210" className={styles.btnSecondary}>
                            <span className={styles.phoneIcon}>📞</span>
                            Call Now
                        </a>
                    </div>

                    {/* Trust Badges */}
                    <div className={styles.trustBar}>
                        {trustBadges.map((badge) => (
                            <div
                                key={badge.label}
                                className={styles.trustCard}
                            >
                                <span className={styles.trustIcon}>✓</span>
                                <div>
                                    <span className={styles.trustLabel}>{badge.label}</span>
                                    <span className={styles.trustSub}>{badge.sub}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ══════════════ RIGHT — 60% ══════════════ */}
                <div className={styles.right}>
                    <div className={styles.heroForm} id="quote-form">
                        {/* Quote badge */}
                        <div className={styles.quoteBadge}>⚡ Quote in 30 minutes</div>

                        {submitted ? (
                            <div className={styles.successState}>
                                <div className={styles.successIcon}>✓</div>
                                <h3>Thank You!</h3>
                                <p>
                                    Our expert will call you within 30 minutes with a customised
                                    quote.
                                </p>
                            </div>
                        ) : (
                            <>
                                <h2 className={styles.formTitle}>Get a Free Quote</h2>
                                <p className={styles.formSubtitle}>
                                    Fill the form — our expert will call you shortly.
                                </p>

                                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                                    {/* Honeypot anti-spam hidden field */}
                                    <div style={{ display: 'none' }} aria-hidden="true">
                                        <label htmlFor="website">Website</label>
                                        <input
                                            type="text"
                                            id="website"
                                            name="website"
                                            value={form.website}
                                            onChange={handleChange}
                                            tabIndex={-1}
                                            autoComplete="off"
                                        />
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label className={styles.label} htmlFor="name">
                                                Full Name <span className={styles.req}>*</span>
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                className={styles.input}
                                                placeholder="Your full name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.label} htmlFor="phone">
                                                Phone Number <span className={styles.req}>*</span>
                                            </label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                className={styles.input}
                                                placeholder="+91 98765 43210"
                                                value={form.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.label} htmlFor="company">
                                            Company Name <span className={styles.req}>*</span>
                                        </label>
                                        <input
                                            id="company"
                                            name="company"
                                            type="text"
                                            className={styles.input}
                                            placeholder="Your company name"
                                            value={form.company}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.label} htmlFor="product">
                                            Product Required <span className={styles.req}>*</span>
                                        </label>
                                        <select
                                            id="product"
                                            name="product"
                                            className={styles.select}
                                            value={form.product}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select a product…</option>
                                            {products.map((p) => (
                                                <option key={p} value={p}>
                                                    {p}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.label} htmlFor="details">
                                            Requirement Details
                                        </label>
                                        <textarea
                                            id="details"
                                            name="details"
                                            className={styles.textarea}
                                            placeholder="Describe your requirement, quantity, specifications…"
                                            value={form.details}
                                            onChange={handleChange}
                                            rows={3}
                                        />
                                    </div>

                                    {error && <p className={styles.errorMsg}>{error}</p>}

                                    <motion.button
                                        type="submit"
                                        className={styles.submitBtn}
                                        disabled={submitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {submitting ? 'Sending…' : 'Get Free Quote'}
                                        {!submitting && <span className={styles.submitArrow}>→</span>}
                                    </motion.button>

                                    <p className={styles.privacy}>
                                        🔒 Your information is 100% confidential
                                    </p>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── Floating Particles — deterministic seeds to avoid hydration mismatch ── */
// Pre-seeded values so SSR and client render the same markup
const PARTICLE_DATA = [
    [8, 12, 7.2, 0.4, 4], [23, 78, 9.1, 1.2, 5], [45, 34, 6.5, 2.8, 3],
    [62, 55, 11.3, 0.9, 6], [78, 8, 8.7, 3.5, 4], [91, 44, 7.4, 1.7, 5],
    [15, 91, 10.2, 2.1, 3], [37, 67, 9.8, 0.3, 6], [54, 22, 6.9, 4.2, 4],
    [70, 83, 8.3, 1.5, 5], [83, 15, 11.7, 3.1, 3], [6, 48, 7.6, 0.8, 6],
    [29, 30, 9.4, 2.6, 4], [48, 72, 8.1, 1.9, 5], [65, 5, 10.8, 0.5, 3],
    [80, 61, 7.3, 3.8, 6], [12, 85, 9.2, 2.3, 4], [94, 27, 8.6, 1.1, 5],
];

function Particles() {
    return (
        <div className={styles.particles} aria-hidden>
            {PARTICLE_DATA.map(([left, top, duration, delay, size], i) => (
                <span
                    key={i}
                    className={styles.particle}
                    style={{
                        left: `${left}%`,
                        top: `${top}%`,
                        animationDuration: `${duration}s`,
                        animationDelay: `${delay}s`,
                        width: `${size}px`,
                        height: `${size}px`,
                    }}
                />
            ))}
        </div>
    );
}
