'use client';

import { useState } from 'react';
import styles from './distributor.module.css';
import Button from '@/components/ui/Button';
import { countries } from '@/lib/data';

export default function DistributorPage() {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        country: '',
        website: '',
        currentBusiness: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const benefits = [
        { icon: '💰', title: 'Competitive Pricing', description: 'Factory-direct pricing with attractive margins' },
        { icon: '🚚', title: 'Fast Delivery', description: 'Quick turnaround from order to delivery' },
        { icon: '🛠️', title: 'Technical Support', description: '24/7 technical assistance for you and your customers' },
        { icon: '📈', title: 'Marketing Support', description: 'Marketing materials and sales training' },
        { icon: '🔒', title: 'Exclusive Territory', description: 'Protected territory for your region' },
        { icon: '🤝', title: 'Long-term Partnership', description: 'Grow together with mutual success' },
    ];

    return (
        <div className={styles.distributorPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>Partnership Opportunity</span>
                        <h1>Become an Indus Air Distributor</h1>
                        <p>
                            Join our global network of successful distributors and grow your
                            business with premium air compressor products.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className={`section ${styles.whyChoose}`}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-header__title">Why Choose Indus Air?</h2>
                        <p className="section-header__subtitle">
                            Partner with a global leader in air compressor technology
                        </p>
                    </div>

                    <div className={styles.contentGrid}>
                        <div className={styles.contentCard}>
                            <h3>1. Global Trademark Authorization</h3>
                            <ul>
                                <li><strong>Exclusive Rights:</strong> Dealers granted exclusive rights to use the Indus Air trademark in their territory.</li>
                                <li><strong>Protection:</strong> Exclusivity protects your investment in brand development and market penetration.</li>
                                <li><strong>Brand Integrity:</strong> Assistance in maintaining global branding guidelines for consistency.</li>
                            </ul>
                        </div>

                        <div className={styles.contentCard}>
                            <h3>2. Supply Chain Support</h3>
                            <ul>
                                <li><strong>Priority Access:</strong> First access to full range including new releases and limited editions.</li>
                                <li><strong>Optimization:</strong> Streamlined supply chain to minimize lead times and reduce costs.</li>
                                <li><strong>Inventory Management:</strong> Tools and forecasts to optimize stock levels and prevent overstocking.</li>
                                <li><strong>Prepared Stock:</strong> We proactively hold stock to ensure prompt delivery for your market needs.</li>
                            </ul>
                        </div>

                        <div className={styles.contentCard}>
                            <h3>3. Marketing Support</h3>
                            <ul>
                                <li><strong>Marketing Fund:</strong> Support for local advertising, events, and trade shows.</li>
                                <li><strong>Digital Presence:</strong> Assistance with website building and online marketing (SEO, PPC).</li>
                                <li><strong>Lead Generation:</strong> Handover of local leads generated from our global marketing efforts.</li>
                                <li><strong>Resources:</strong> Comprehensive marketing materials, catalogs, and promotional items.</li>
                            </ul>
                        </div>

                        <div className={styles.contentCard}>
                            <h3>4. Performance Incentives</h3>
                            <ul>
                                <li><strong>Sales Bonuses:</strong> Tiered bonuses based on quarterly and annual performance.</li>
                                <li><strong>Growth Rewards:</strong> Incentives for market share expansion and new market entry.</li>
                                <li><strong>Recognition:</strong> Annual awards program for top-performing distributors.</li>
                            </ul>
                        </div>

                        <div className={styles.contentCard}>
                            <h3>5. Technical & After-Sales</h3>
                            <ul>
                                <li><strong>Training:</strong> Ongoing technical training for your service teams.</li>
                                <li><strong>Service Network:</strong> Support in establishing strong after-sales service capabilities.</li>
                                <li><strong>Spare Parts:</strong> Guaranteed availability of genuine spare parts.</li>
                            </ul>
                        </div>

                        <div className={styles.contentCard}>
                            <h3>6. Mutual Growth</h3>
                            <ul>
                                <li><strong>Joint Planning:</strong> Collaborative business planning to align strategies and goals.</li>
                                <li><strong>Feedback Loop:</strong> Direct line to management for product and strategy feedback.</li>
                                <li><strong>Sustainability:</strong> Collaboration on eco-friendly initiatives and green solutions.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className={`section ${styles.application}`}>
                <div className="container">
                    <div className={styles.applicationGrid}>
                        <div className={styles.applicationInfo}>
                            <h2>Apply to Become a Distributor</h2>
                            <p>
                                We're looking for ambitious partners to expand our global reach.
                                If you have experience in industrial equipment sales and want to
                                offer premium air compressors to your customers, we'd love to hear from you.
                            </p>

                            <div className={styles.requirements}>
                                <h3>Ideal Partner Profile:</h3>
                                <ul>
                                    <li>Experience in industrial equipment sales</li>
                                    <li>Established customer network</li>
                                    <li>Technical knowledge or support capability</li>
                                    <li>Strong local market presence</li>
                                    <li>Commitment to customer service excellence</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.formWrapper}>
                            {isSubmitted ? (
                                <div className={styles.successMessage}>
                                    <span className={styles.successIcon}>✓</span>
                                    <h3>Application Submitted!</h3>
                                    <p>Thank you for your interest. Our partnership team will contact you within 48 hours.</p>
                                    <Button onClick={() => setIsSubmitted(false)}>Submit Another</Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.formGroup}>
                                        <label>Company Name *</label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            required
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label>Contact Person *</label>
                                            <input
                                                type="text"
                                                name="contactPerson"
                                                value={formData.contactPerson}
                                                onChange={handleChange}
                                                required
                                                className={styles.input}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Email *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className={styles.input}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label>Phone *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className={styles.input}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Country *</label>
                                            <select
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                                required
                                                className={styles.select}
                                            >
                                                <option value="">Select country</option>
                                                {countries.map((country) => (
                                                    <option key={country} value={country}>{country}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Company Website</label>
                                        <input
                                            type="url"
                                            name="website"
                                            value={formData.website}
                                            onChange={handleChange}
                                            placeholder="https://"
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Current Business Description *</label>
                                        <textarea
                                            name="currentBusiness"
                                            value={formData.currentBusiness}
                                            onChange={handleChange}
                                            required
                                            className={styles.textarea}
                                            rows={3}
                                            placeholder="Describe your current business and customer base..."
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Additional Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={styles.textarea}
                                            rows={3}
                                            placeholder="Any additional information or questions..."
                                        />
                                    </div>

                                    <Button type="submit" fullWidth size="lg">
                                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
