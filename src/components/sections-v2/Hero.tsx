'use client';

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import Button from '../ui/Button';
import CountingStat from '../ui/CountingStat';
import { productCategories } from '@/lib/data';

export default function Hero() {
    useEffect(() => {
        document.body.classList.add('landing-v2-page');

        // Select default layout header elements
        const quoteBtn = document.querySelector('ul[class*="navLinks"] li[class*="navCta"] a');
        const quoteBtnLi = document.querySelector('ul[class*="navLinks"] li[class*="navCta"]');

        let originalQuoteBtnText: string | null = null;
        let originalQuoteBtnHref: string | null = null;
        let callBtn: HTMLAnchorElement | null = null;

        if (quoteBtn) {
            originalQuoteBtnText = quoteBtn.innerHTML;
            originalQuoteBtnHref = quoteBtn.getAttribute('href');
            quoteBtn.innerHTML = 'Get Free Quote';
            quoteBtn.setAttribute('href', '#inquiry-form');
        }

        if (quoteBtnLi) {
            callBtn = document.createElement('a');
            callBtn.href = 'tel:+918401242943';
            callBtn.className = 'landing-v2-call-btn';
            callBtn.innerHTML = '📞 <span>Call Now</span>';
            
            // Add mouse hover styling via JavaScript
            callBtn.addEventListener('mouseenter', () => {
                callBtn!.style.backgroundColor = 'var(--color-bg-light)';
                callBtn!.style.borderColor = 'var(--color-text-light)';
            });
            callBtn.addEventListener('mouseleave', () => {
                callBtn!.style.backgroundColor = 'transparent';
                callBtn!.style.borderColor = 'var(--color-border)';
            });

            // Insert call button before Get Free Quote button inside navCta
            quoteBtnLi.insertBefore(callBtn, quoteBtnLi.firstChild);
        }

        return () => {
            document.body.classList.remove('landing-v2-page');
            
            if (quoteBtn) {
                if (originalQuoteBtnText !== null) quoteBtn.innerHTML = originalQuoteBtnText;
                if (originalQuoteBtnHref !== null) quoteBtn.setAttribute('href', originalQuoteBtnHref);
            }
            
            if (callBtn && quoteBtnLi) {
                try {
                    quoteBtnLi.removeChild(callBtn);
                } catch (e) {
                    // Ignore error on cleanup
                }
            }
        };
    }, []);

    const [formData, setFormData] = useState({
        yourName: '',
        phoneNumber: '',
        companyName: '',
        productNeeded: '',
        requirementDetails: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [honeypot, setHoneypot] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
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

        // Basic validation
        if (!formData.yourName || !formData.phoneNumber || !formData.companyName || !formData.productNeeded || !formData.requirementDetails) {
            setError('Please fill in all required fields.');
            return;
        }

        const phoneClean = formData.phoneNumber.replace(/[\s\-\+\(\)]/g, '');
        if (phoneClean.length < 7 || phoneClean.length > 15 || !/^\d+$/.test(phoneClean)) {
            setError('Please enter a valid phone number.');
            return;
        }

        setIsSubmitting(true);

        // Construct mailto link
        const subject = `New B2B Lead from ${formData.yourName}`;
        const body = `Name: ${formData.yourName}%0D%0APhone: ${formData.phoneNumber}%0D%0ACompany: ${formData.companyName}%0D%0AProduct: ${formData.productNeeded}%0D%0A%0D%0ARequirement Details:%0D%0A${formData.requirementDetails}`;

        window.location.href = `mailto:info@indusaircompressor.com?subject=${encodeURIComponent(subject)}&body=${body}`;

        // Simulate submission feedback
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <section className={`${styles.hero} hero-parallax`}>
            {/* Scoped CSS to customize the default header layout specifically for landing-v2 page */}
            <style dangerouslySetInnerHTML={{__html: `
                /* 1. Hide all navigation links in the header except the CTA */
                .landing-v2-page ul[class*="navLinks"] li:not([class*="navCta"]) {
                    display: none !important;
                }
                
                /* 2. Hide the mobile menu toggle */
                .landing-v2-page button[class*="menuToggle"] {
                    display: none !important;
                }
                
                /* 3. Prevent default mobile header collapse drawer for links */
                @media (max-width: 1024px) {
                    .landing-v2-page ul[class*="navLinks"] {
                        position: static !important;
                        transform: none !important;
                        background: none !important;
                        padding: 0 !important;
                        flex-direction: row !important;
                        box-shadow: none !important;
                        overflow: visible !important;
                        margin: 0 !important;
                        display: flex !important;
                        width: auto !important;
                    }
                    
                    .landing-v2-page li[class*="navCta"] {
                        margin: 0 !important;
                        display: flex !important;
                        align-items: center !important;
                        gap: 10px !important;
                    }
                }
                
                /* 4. Call button stylesheet rules */
                .landing-v2-call-btn {
                    font-size: 14px !important;
                    font-weight: 700 !important;
                    color: var(--color-text) !important;
                    text-decoration: none !important;
                    margin-right: 15px !important;
                    display: inline-flex !important;
                    align-items: center !important;
                    gap: 6px !important;
                    padding: 10px 16px !important;
                    border-radius: var(--radius-md) !important;
                    border: 1px solid var(--color-border) !important;
                    background-color: transparent !important;
                    transition: all var(--transition-base) !important;
                    white-space: nowrap !important;
                }
                
                @media (max-width: 600px) {
                    .landing-v2-page li[class*="navCta"] {
                        gap: 6px !important;
                    }
                    .landing-v2-call-btn {
                        padding: 8px 12px !important;
                        font-size: 12px !important;
                        margin-right: 5px !important;
                    }
                    .landing-v2-page li[class*="navCta"] a[class*="quoteButton"] {
                        padding: 8px 14px !important;
                        font-size: 12px !important;
                    }
                }
                
                @media (max-width: 480px) {
                    .landing-v2-call-btn span {
                        display: none !important;
                    }
                }

                @media (max-width: 360px) {
                    .landing-v2-page li[class*="navCta"] a[class*="quoteButton"] {
                        padding: 6px 10px !important;
                        font-size: 11px !important;
                    }
                    .landing-v2-call-btn {
                        padding: 6px 8px !important;
                        font-size: 11px !important;
                        margin-right: 2px !important;
                    }
                }
            `}} />

            <div className={styles.background}>
                <div className={styles.overlay}></div>
            </div>

            <div className={`container ${styles.content}`}>
                <div className={styles.textContent}>
                    <span className={`${styles.badge} hero-animate-badge`}>Professional Air Compressor Manufacturer</span>
                    <h1 className={`${styles.title} hero-animate-title`}>
                        <span className={styles.titleLine1}>
                            <span className={styles.outlineText}>Durable</span>{' '}
                            <span className={styles.ampersand}>&</span>{' '}
                            <span className={styles.outlineText}>Reliable</span>
                        </span>
                        <span className={styles.titleLine2}>
                            <span className={styles.highlight}>Air Compressor</span>
                        </span>
                        <span className={styles.titleLine3}>
                            <span className={styles.gradientText}>Manufacturer</span>
                        </span>
                    </h1>
                    <p className={`${styles.subtitle} hero-animate-subtitle`}>
                        With 5+ years of expertise, Indus Air delivers premium quality air compressors
                        to industrial clients worldwide. Energy-efficient, reliable, and built to last.
                    </p>
                    <div className={styles.ctas}>
                        <Button 
                            size="lg" 
                            className="hero-animate-cta"
                            onClick={() => {
                                document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Get Free Quote
                        </Button>
                        <Button 
                            href="tel:+918401242943" 
                            variant="outline" 
                            size="lg" 
                            className="hero-animate-cta"
                        >
                            <svg style={{ width: '16px', height: '16px', fill: 'currentColor', marginRight: '8px' }} viewBox="0 0 24 24">
                                <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            </svg>
                            Call Now
                        </Button>
                    </div>

                    <div className={styles.stats}>
                        <div className={`${styles.statItem} stat-animate`}>
                            <CountingStat value={5} suffix="+" className={styles.statNumber} />
                            <span className={styles.statLabel}>Years Experience</span>
                        </div>
                        <div className={`${styles.statItem} stat-animate`}>
                            <CountingStat value={1000} suffix="+" className={styles.statNumber} />
                            <span className={styles.statLabel}>Happy Clients</span>
                        </div>
                        <div className={`${styles.statItem} stat-animate`}>
                            <CountingStat value={3} suffix="+" className={styles.statNumber} />
                            <span className={styles.statLabel}>Countries Served</span>
                        </div>
                        <div className={`${styles.statItem} stat-animate`}>
                            <CountingStat value={24} suffix="/7" className={styles.statNumber} />
                            <span className={styles.statLabel}>Support</span>
                        </div>
                    </div>
                </div>

                <div className={styles.formContainer} id="inquiry-form">
                    <span className={styles.formBadge}>ISO 9001:2000 CERTIFIED</span>
                    <h3 className={styles.formTitle}>Get a Free Quote Today</h3>
                    <p className={styles.formSubtitle}>Our expert will call you within 30 minutes.</p>

                    {isSubmitted ? (
                        <div className={styles.successMessage}>
                            <span className={styles.successIcon}>✓</span>
                            <h4>Thank You!</h4>
                            <p>Your request has been submitted successfully. Our team will contact you shortly.</p>
                            <Button onClick={() => setIsSubmitted(false)} size="sm">Submit Another</Button>
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
                                    id="yourName"
                                    name="yourName"
                                    placeholder="Your Name *"
                                    value={formData.yourName}
                                    onChange={handleChange}
                                    required
                                    className={styles.input}
                                    aria-label="Your Full Name"
                                />
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        placeholder="Phone Number *"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        required
                                        className={styles.input}
                                        aria-label="Phone Number"
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        placeholder="Company / Business Name *"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required
                                        className={styles.input}
                                        aria-label="Company or Business Name"
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <select
                                    id="productNeeded"
                                    name="productNeeded"
                                    value={formData.productNeeded}
                                    onChange={handleChange}
                                    required
                                    className={styles.select}
                                    aria-label="Select Product Needed"
                                >
                                    <option value="" disabled>Select Product Needed *</option>
                                    {productCategories.map((cat) => (
                                        <option key={cat.id} value={cat.name}>
                                            {cat.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <textarea
                                    id="requirementDetails"
                                    name="requirementDetails"
                                    placeholder="Requirement Details (e.g. pressure, capacity, application) *"
                                    value={formData.requirementDetails}
                                    onChange={handleChange}
                                    required
                                    className={styles.textarea}
                                    rows={4}
                                    aria-label="Requirement Details"
                                />
                            </div>

                            <Button type="submit" fullWidth size="lg" className={styles.submitBtn}>
                                {isSubmitting ? 'Sending...' : 'Send My Requirement'}
                            </Button>
                            
                            <p className={styles.securityText}>
                                🔒 Your information is 100% secure. No spam.
                            </p>
                        </form>
                    )}
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <span>Scroll Down</span>
                <div className={styles.scrollArrow}></div>
            </div>
        </section>
    );
}
