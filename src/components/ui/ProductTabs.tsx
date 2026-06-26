'use client';

import { useState } from 'react';
import styles from './ProductTabs.module.css';

interface ProductTabsProps {
    description: string;
    specifications: Record<string, string>;
    features: string[];
    productName: string;
}

export default function ProductTabs({ description, specifications, features, productName }: ProductTabsProps) {
    const [activeTab, setActiveTab] = useState<'description' | 'specification' | 'inquiry'>('description');

    return (
        <div className={styles.tabsContainer}>
            <div className={styles.tabHeaders}>
                <button
                    className={`${styles.tabButton} ${activeTab === 'description' ? styles.active : ''}`}
                    onClick={() => setActiveTab('description')}
                >
                    DESCRIPTION
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'specification' ? styles.active : ''}`}
                    onClick={() => setActiveTab('specification')}
                >
                    SPECIFICATION
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'inquiry' ? styles.active : ''}`}
                    onClick={() => setActiveTab('inquiry')}
                >
                    INQUIRY
                </button>
            </div>

            <div className={styles.tabContent}>
                {activeTab === 'description' && (
                    <div className={styles.descriptionTab}>
                        <div className={styles.descriptionContent}>
                            <h3>Product Overview</h3>
                            <p>{description}</p>

                            <h3>Key Features</h3>
                            <ul className={styles.featureList}>
                                {features.map((feature, i) => (
                                    <li key={i}>
                                        <span className={styles.checkIcon}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {activeTab === 'specification' && (
                    <div className={styles.specificationTab}>
                        <h3>Technical Specifications</h3>
                        <table className={styles.specTable}>
                            <thead>
                                <tr>
                                    <th>Parameter</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(specifications).map(([key, value], i) => (
                                    <tr key={key} className={i % 2 === 0 ? styles.evenRow : ''}>
                                        <td>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</td>
                                        <td>{String(value)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'inquiry' && (
                    <div className={styles.inquiryTab}>
                        <h3>Request a Quote for {productName}</h3>
                        <p className={styles.inquirySubtext}>Fill in the form below and our team will get back to you within 24 hours.</p>

                        <form className={styles.inquiryForm}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label>Your Name *</label>
                                    <input type="text" placeholder="Enter your name" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Email *</label>
                                    <input type="email" placeholder="Enter your email" required />
                                </div>
                            </div>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label>Phone</label>
                                    <input type="tel" placeholder="Enter your phone number" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Country *</label>
                                    <input type="text" placeholder="Enter your country" required />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Message *</label>
                                <textarea rows={5} placeholder="Describe your requirements..." required></textarea>
                            </div>
                            <button type="submit" className={styles.submitButton}>
                                Send Inquiry
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
