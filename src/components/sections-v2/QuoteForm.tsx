'use client';

import { useState } from 'react';
import styles from './QuoteForm.module.css';
import Button from '../ui/Button';
import { countries } from '@/lib/data';

export default function QuoteForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [honeypot, setHoneypot] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Honeypot check
        if (honeypot) {
            setIsSubmitted(true);
            return;
        }

        // Input validation
        if (!formData.name || !formData.email || !formData.phone || !formData.country) {
            setError('Please fill in all required fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address.');
            return;
        }

        const phoneClean = formData.phone.replace(/[\s\-\+\(\)]/g, '');
        if (phoneClean.length < 7 || phoneClean.length > 15 || !/^\d+$/.test(phoneClean)) {
            setError('Please enter a valid phone number.');
            return;
        }

        setIsSubmitting(true);

        // Construct mailto link
        const subject = `New Quote Request from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ACountry: ${formData.country}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

        window.location.href = `mailto:info@indusaircompressor.com?subject=${encodeURIComponent(subject)}&body=${body}`;

        // Simulate form submission for UI feedback
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <section className={`section ${styles.quoteSection}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <span className={styles.badge}>Get in Touch</span>
                        <h2 className={styles.title}>Request a Quick Quote Now</h2>
                        <p className={styles.subtitle}>
                            Order or No Order? We're here for you 24/7. Send us your requirements
                            and our team will get back to you within 24 hours.
                        </p>

                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <span className={styles.featureIcon}>⚡</span>
                                <div>
                                    <h4>Fast Response</h4>
                                    <p>Get a quote within 24 hours</p>
                                </div>
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.featureIcon}>💰</span>
                                <div>
                                    <h4>Competitive Pricing</h4>
                                    <p>Best factory-direct prices</p>
                                </div>
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.featureIcon}>🛠️</span>
                                <div>
                                    <h4>Technical Support</h4>
                                    <p>Free consultation included</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formWrapper}>
                        {isSubmitted ? (
                            <div className={styles.successMessage}>
                                <span className={styles.successIcon}>✓</span>
                                <h3>Thank You!</h3>
                                <p>Your request has been submitted successfully. Our team will contact you shortly.</p>
                                <Button onClick={() => setIsSubmitted(false)}>Submit Another</Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.form}>
                                {error && (
                                    <div style={{ color: 'var(--color-primary)', fontSize: '14px', marginBottom: '15px', fontWeight: 'bold' }} role="alert">
                                        ⚠️ {error}
                                    </div>
                                )}

                                {/* Honeypot hidden field for anti-spam */}
                                <div style={{ display: 'none' }} aria-hidden="true">
                                    <label htmlFor="website">Website</label>
                                    <input
                                        type="text"
                                        id="website"
                                        name="website"
                                        value={honeypot}
                                        onChange={(e) => setHoneypot(e.target.value)}
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name *"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={styles.input}
                                        aria-label="Full Name"
                                    />
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address *"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className={styles.input}
                                            aria-label="Email Address"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number *"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className={styles.input}
                                            aria-label="Phone Number"
                                        />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        required
                                        className={styles.select}
                                        aria-label="Select Country"
                                    >
                                        <option value="">Select Country *</option>
                                        {countries.map((country) => (
                                            <option key={country} value={country}>{country}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <textarea
                                        name="message"
                                        placeholder="Tell us about your requirements (Optional)"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={styles.textarea}
                                        rows={4}
                                        aria-label="Requirement details or message"
                                    />
                                </div>

                                <Button type="submit" fullWidth size="lg" className={styles.submitBtn}>
                                    {isSubmitting ? 'Submitting...' : 'Submit Your Requirements'}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
