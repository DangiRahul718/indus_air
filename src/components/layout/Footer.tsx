'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Footer.module.css';

const quickLinks = [
    { name: 'Company History', href: '/history' },
    { name: 'Project Gallery', href: '/gallery' },
    { name: 'Become A Distributor', href: '/distributor' },
];

const products = [
    { name: 'Rotary Screw Air Compressor', href: '/products/screw-air-compressor' },
    { name: 'Diesel Air Compressor', href: '/products/diesel-compressor' },
    { name: 'Oil Free Air Compressor', href: '/products/oil-free-compressor' },
    { name: '4-in-1 Air Compressor', href: '/products/4-in-1-air-compressor' },
    { name: 'Nitrogen Generator', href: '/products/nitrogen-generator' },
    { name: 'Air Receiver Tank', href: '/products/receiver-tank' },
    { name: 'Air Dryer', href: '/products/air-dryer' },
];

export default function Footer() {
    const pathname = usePathname();
    const isLandingV2 = pathname === '/landing-v2';

    return (
        <footer className={`${styles.footer} ${isLandingV2 ? styles.landingV2 : ''}`}>
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
                            {isLandingV2 ? (
                                <span className={styles.readMore}>
                                    Read More →
                                </span>
                            ) : (
                                <Link href="/about" className={styles.readMore}>
                                    Read More →
                                </Link>
                            )}
                        </div>

                        {/* Quick Links */}
                        <div className={styles.footerColumn}>
                            <h4 className={styles.columnTitle}>Quick Links</h4>
                            <ul className={styles.linkList}>
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        {isLandingV2 ? (
                                            <span>{link.name}</span>
                                        ) : (
                                            <Link href={link.href}>{link.name}</Link>
                                        )}
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
                                        {isLandingV2 ? (
                                            <span>{link.name}</span>
                                        ) : (
                                            <Link href={link.href}>{link.name}</Link>
                                        )}
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
                                    {isLandingV2 ? (
                                        <span>+91 84012 42943</span>
                                    ) : (
                                        <a href="tel:+918401242943">+91 84012 42943</a>
                                    )}
                                </li>
                                <li>
                                    <span className={styles.contactIcon}>📧</span>
                                    {isLandingV2 ? (
                                        <span>info@indusaircompressor.com</span>
                                    ) : (
                                        <a href="mailto:info@indusaircompressor.com">info@indusaircompressor.com</a>
                                    )}
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

                            <div className={styles.socialLinks}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <div className="container">
                    <div className={styles.footerBottomContent}>
                        <p>© {new Date().getFullYear()} Indus Air Compressor. All Rights Reserved.</p>
                        <div className={styles.footerBottomLinks}>
                            {isLandingV2 ? (
                                <>
                                    <span>Privacy Policy</span>
                                    <span>Terms of Service</span>
                                </>
                            ) : (
                                <>
                                    <Link href="/privacy">Privacy Policy</Link>
                                    <Link href="/terms">Terms of Service</Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Red Stripe Accent */}
            <div className="red-stripe"></div>
        </footer>
    );
}
