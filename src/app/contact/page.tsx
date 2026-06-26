'use client';

import { useState } from 'react';
import styles from './contact.module.css';
import Button from '@/components/ui/Button';
import { countries } from '@/lib/data';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                country: '',
                message: '',
            });
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.contactPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>Contact Us</span>
                        <h1>Get in Touch with Indus Air</h1>
                        <p>Have questions? We're here to help. Reach out to our team.</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className={`section ${styles.contactSection}`}>
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Left Side - Info */}
                        <div className={styles.contactInfo}>
                            <h2>The Best Air Compressor Manufacturer</h2>
                            <p className={styles.infoSubtitle}>
                                Partner with Indus Air for premium quality air compressors at competitive prices.
                            </p>

                            <ul className={styles.valueList}>
                                <li>
                                    <span className={styles.checkIcon}>✓</span>
                                    Give you competitive factory-direct prices
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>✓</span>
                                    Show best pre-sale and after-sale service
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>✓</span>
                                    Provide 24/7 technical support
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>✓</span>
                                    Help you earn bigger market share
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>✓</span>
                                    Cooperate for long-term business growth
                                </li>
                            </ul>

                            <div className={styles.contactCards}>
                                <div className={styles.contactCard}>
                                    <span className={styles.cardIcon}>📧</span>
                                    <h4>Email Us</h4>
                                    <a href="mailto:info@indusaircompressor.com">info@indusaircompressor.com</a>
                                </div>
                                <div className={styles.contactCard}>
                                    <span className={styles.cardIcon}>📞</span>
                                    <h4>Call Us</h4>
                                    <a href="tel:+918401242943">+91 84012 42943</a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className={styles.formWrapper}>
                            <h3>Send Us Enquiry</h3>

                            {isSubmitted ? (
                                <div className={styles.successMessage}>
                                    <span className={styles.successIcon}>✓</span>
                                    <h4>Thank You!</h4>
                                    <p>Your message has been sent. We'll get back to you within 24 hours.</p>
                                    <Button onClick={() => setIsSubmitted(false)}>Send Another</Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    {error && (
                                        <div style={{
                                            padding: 'var(--space-md)',
                                            backgroundColor: '#fee',
                                            border: '1px solid #fcc',
                                            borderRadius: 'var(--radius-md)',
                                            color: '#c00',
                                            marginBottom: 'var(--space-md)'
                                        }}>
                                            {error}
                                        </div>
                                    )}
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name">Your Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="email">Your Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className={styles.input}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="phone">Your Phone *</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className={styles.input}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="country">Your Country *</label>
                                        <select
                                            id="country"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            required
                                            className={styles.select}
                                        >
                                            <option value="">Select your country</option>
                                            {countries.map((country) => (
                                                <option key={country} value={country}>{country}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="message">Your Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={styles.textarea}
                                            rows={5}
                                            placeholder="Tell us about your requirements..."
                                        />
                                    </div>

                                    <Button type="submit" fullWidth size="lg">
                                        {isSubmitting ? 'Sending...' : 'Submit Your Requirements'}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className={`section ${styles.locations}`}>
                <div className="container">
                    <h2 className={styles.locationsTitle}>Our Locations</h2>
                    <div className={styles.locationsGrid}>
                        <div className={styles.locationCard}>
                            <div className={styles.locationBadge}>Sales Office</div>
                            <h4>Ahmedabad, India</h4>
                            <p>
                                A-202, Elenza Greens,<br />
                                South bopal,<br />
                                Ahmedabad, Gujarat, India
                            </p>
                        </div>

                        <div className={styles.locationCard}>
                            <div className={styles.locationBadge}>Production Office</div>
                            <h4>Ahmedabad, India</h4>
                            <p>
                                E/17, Shayona Estate, Bansidhar Mill Compound,<br />
                                Naroda Rd, Cross Road, near Mamco, Laxmipura,<br />
                                D Colony. Ahmedabad,
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
