'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './ContactV3.module.css';

export default function ContactV3() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    // Form State
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        companyName: '',
        productRequired: '',
        details: '',
        website: '', // Honeypot
    });
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Honeypot check
        if (formData.website) {
            setSubmitted(true);
            return;
        }

        if (!formData.fullName || !formData.phoneNumber || !formData.companyName) {
            setError('Please fill in all required fields.');
            return;
        }

        const phoneClean = formData.phoneNumber.replace(/[\s\-\+\(\)]/g, '');
        if (phoneClean.length < 7 || phoneClean.length > 15 || !/^\d+$/.test(phoneClean)) {
            setError('Please enter a valid phone number.');
            return;
        }

        setSubmitting(true);
        setError('');

        try {
            const res = await fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.fullName,
                    phone: formData.phoneNumber,
                    company: formData.companyName,
                    product: formData.productRequired || 'General Inquiry',
                    details: formData.details,
                    website: formData.website,
                }),
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
        <section ref={ref} className={styles.section}>
            {/* Background */}
            <div className={styles.bg} aria-hidden>
                <div className={styles.bgDots} />
                <div className={styles.bgGlow} />
            </div>

            <div className={`container ${styles.inner}`}>
                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 28 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className={styles.eyebrow}>GET IN TOUCH</span>
                    <h2 className={styles.title}>
                        Visit Our <span className={styles.titleOrange}>Plant or Office</span>
                    </h2>
                    <div className={styles.titleBar} />
                    <p className={styles.subtitle}>
                        Our team is ready to discuss your compressed air requirements. Reach out via phone, email, or visit our Ahmedabad facility.
                    </p>
                </motion.div>

                {/* 2-Column Main Layout */}
                <div className={styles.mainGrid}>
                    {/* Left Column: Info Cards & CTA Buttons */}
                    <motion.div
                        className={styles.leftCol}
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Plant Card */}
                        <div className={styles.infoCard}>
                            <div className={styles.cardIndicator} />
                            <h3 className={styles.cardTitle}>Manufacturing Plant</h3>
                            <p className={styles.cardContent}>
                                Survey No. 123, GIDC Industrial Estate,<br />
                                Vatva Phase IV,<br />
                                Ahmedabad, Gujarat 382445, India
                            </p>
                        </div>

                        {/* Office Card */}
                        <div className={styles.infoCard}>
                            <div className={styles.cardIndicator} />
                            <h3 className={styles.cardTitle}>Corporate Office</h3>
                            <p className={styles.cardContent}>
                                4-B-01,<br />
                                Sun Avenue One,<br />
                                Makarba,<br />
                                Ahmedabad, Gujarat 380015, India
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className={styles.ctaWrapper}>
                            <a href="tel:+918401242943" className={`${styles.ctaButton} ${styles.ctaPhone}`}>
                                <span className={styles.ctaSub}>📞 CALL US</span>
                                <span className={styles.ctaVal}>+91 84012 42943</span>
                            </a>
                            <a href="mailto:info@indusaircompressor.com" className={`${styles.ctaButton} ${styles.ctaEmail}`}>
                                <span className={styles.ctaSub}>✉ EMAIL US</span>
                                <span className={styles.ctaVal}>info@indusaircompressor.com</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Premium Quote Form */}
                    <motion.div
                        className={styles.rightCol}
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    >
                        <div className={styles.formCard} id="quote-form">
                            {/* Form Header */}
                            <div className={styles.formHeader}>
                                <span className={styles.formBadge}>Quote in 30 Minutes</span>
                                <h3 className={styles.formTitle}>Get a Free Quote</h3>
                                <p className={styles.formSubtitle}>Fill the form — our expert will call you back shortly.</p>
                            </div>

                            {/* Success State */}
                            {submitted ? (
                                <div className={styles.successState}>
                                    <div className={styles.successIcon}>✓</div>
                                    <h4 className={styles.successTitle}>Request Submitted!</h4>
                                    <p className={styles.successDesc}>
                                        Thank you, <strong>{formData.fullName}</strong>. Our industrial experts will contact you at <strong>{formData.phoneNumber}</strong> within 30 minutes.
                                    </p>
                                    <button className={styles.resetButton} onClick={() => setSubmitted(false)}>
                                        Submit Another Request
                                    </button>
                                </div>
                            ) : (
                                /* Form Element */
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    {error && <div className={styles.errorAlert} style={{ color: 'var(--color-primary)', fontWeight: 'bold', marginBottom: '15px' }} role="alert">⚠️ {error}</div>}

                                    {/* Honeypot hidden input */}
                                    <div style={{ display: 'none' }} aria-hidden="true">
                                        <label htmlFor="website">Website</label>
                                        <input
                                            type="text"
                                            id="website"
                                            name="website"
                                            value={formData.website}
                                            onChange={handleChange}
                                            tabIndex={-1}
                                            autoComplete="off"
                                        />
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label className={styles.label} htmlFor="fullName">Full Name *</label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label className={styles.label} htmlFor="phoneNumber">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            required
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label className={styles.label} htmlFor="companyName">Company Name *</label>
                                        <input
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            required
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            placeholder="Your Factory/Company Ltd"
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label className={styles.label} htmlFor="productRequired">Product Required</label>
                                        <select
                                            id="productRequired"
                                            name="productRequired"
                                            value={formData.productRequired}
                                            onChange={handleChange}
                                            className={styles.select}
                                        >
                                            <option value="">Select a product...</option>
                                            <option value="screw">Screw Air Compressor</option>
                                            <option value="oil-free">Oil-Free Compressor</option>
                                            <option value="diesel">Diesel Air Compressor</option>
                                            <option value="4-in-1">4-in-1 Compressor</option>
                                            <option value="nitrogen">Nitrogen Generator</option>
                                            <option value="dryer">Refrigerated Air Dryer</option>
                                        </select>
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label className={styles.label} htmlFor="details">Requirement Details</label>
                                        <textarea
                                            id="details"
                                            name="details"
                                            rows={3}
                                            value={formData.details}
                                            onChange={handleChange}
                                            placeholder="Tell us about your CFM, pressure, or custom needs..."
                                            className={styles.textarea}
                                        />
                                    </div>

                                    <button type="submit" className={styles.submitButton} disabled={submitting}>
                                        <span>{submitting ? 'Submitting...' : 'Get Free Quote →'}</span>
                                        <span className={styles.submitShine} />
                                    </button>

                                    <p className={styles.terms}>
                                        By submitting, you agree to be contacted by Indus Air.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
