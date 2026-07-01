'use client';

import styles from '../layout/Footer.module.css';

const quickLinks = [
    { name: 'Company History' },
    { name: 'Project Gallery' },
    { name: 'Become A Distributor' },
];

const products = [
    { name: 'Rotary Screw Air Compressor' },
    { name: 'Diesel Air Compressor' },
    { name: 'Oil Free Air Compressor' },
    { name: '4-in-1 Air Compressor' },
    { name: 'Nitrogen Generator' },
    { name: 'Air Receiver Tank' },
    { name: 'Air Dryer' },
];

export default function FooterLanding() {
    return (
        <footer className={`${styles.footer} ${styles.landingV2}`} style={{ pointerEvents: 'none', cursor: 'default' }}>
            {/* Scoped styles to enforce non-interactive display states */}
            <style>{`
                footer.nonInteractive,
                footer.nonInteractive * {
                    pointer-events: none !important;
                    cursor: default !important;
                    user-select: text;
                }
            `}</style>
            
            <div className={styles.footerMain}>
                <div className="container">
                    <div className={styles.footerGrid}>
                        {/* Company Info */}
                        <div className={styles.footerColumn}>
                            <div className={styles.footerLogo}>
                                <img
                                    src="/logo.jpeg"
                                    alt="INDUSAIR - Air Compressor"
                                    className={styles.logoImage}
                                />
                            </div>
                            <p className={styles.companyDesc}>
                                Indus Air is a professional air compressor manufacturer with 5+ years of experience. We provide high-quality, durable, and reliable air compressor solutions for industrial applications worldwide.
                            </p>
                            <span className={styles.readMore} style={{ cursor: 'default' }}>
                                Read More →
                            </span>
                        </div>

                        {/* Quick Links */}
                        <div className={styles.footerColumn}>
                            <h4 className={styles.columnTitle}>Quick Links</h4>
                            <ul className={styles.linkList}>
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <span style={{ cursor: 'default' }}>{link.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Products */}
                        <div className={styles.footerColumn}>
                            <h4 className={styles.columnTitle}>Products</h4>
                            <ul className={styles.linkList}>
                                {products.map((link) => (
                                    <li key={link.name}>
                                        <span style={{ cursor: 'default' }}>{link.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className={styles.footerColumn}>
                            <h4 className={styles.columnTitle}>Reach Us</h4>
                            <ul className={styles.contactList}>
                                <li>
                                    <span className={styles.contactIcon}>📞</span>
                                    <span style={{ cursor: 'default' }}>+91 84012 42943</span>
                                </li>
                                <li>
                                    <span className={styles.contactIcon}>📧</span>
                                    <span style={{ cursor: 'default' }}>info@indusaircompressor.com</span>
                                </li>
                                <li>
                                    <span className={styles.contactIcon}>📍</span>
                                    <span>A-202, Elenza Greens, South bopal</span>
                                </li>
                                <li className={styles.productionAddressItem}>
                                    <span className={styles.contactIcon}>📍</span>
                                    <div className={styles.productionAddress}>
                                        <strong>Production Office</strong><br/>
                                        E/17, Shayona Estate,<br/>
                                        Bansidhar Mill Compound,<br/>
                                        Naroda Rd
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <div className="container">
                    <div className={styles.footerBottomContent}>
                        <p>© {new Date().getFullYear()} Indus Air Compressor. All Rights Reserved.</p>
                        <div className={styles.footerBottomLinks}>
                            <span style={{ cursor: 'default', marginRight: '12px' }}>Privacy Policy</span>
                            <span style={{ cursor: 'default' }}>Terms of Service</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Red Stripe Accent */}
            <div className="red-stripe"></div>
        </footer>
    );
}
