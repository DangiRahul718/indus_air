'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Button from '../ui/Button';
import { productCategories } from '@/lib/data';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Become A Distributor', href: '/distributor' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    const toggleProducts = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsProductsOpen(!isProductsOpen);
    };

    const toggleAbout = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsAboutOpen(!isAboutOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.topBar}>
                <div className={`container ${styles.topBarContent}`}>
                    <div className={styles.topBarLeft}>
                        <span>📧 info@indusaircompressor.com</span>
                        <span>📞 +91 84012 42943</span>
                    </div>
                    <div className={styles.topBarRight}>
                        <span>Professional Air Compressor Manufacturer Since 2021</span>
                    </div>
                </div>
            </div>

            <nav className={styles.nav}>
                <div className={`container ${styles.navContent}`}>
                    <Link href="/" className={styles.logo}>
                        <img
                            src="/logo.jpeg"
                            alt="INDUSAIR - Air Compressor"
                            className={styles.logoImage}
                        />
                    </Link>

                    <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
                        {navLinks.map((link) => (
                            <li key={link.name} className={styles.navItem}>
                                {link.name === 'Products' ? (
                                    <>
                                        <a
                                            href="#"
                                            className={styles.navLink}
                                            onClick={toggleProducts}
                                        >
                                            {link.name} <span style={{ fontSize: '10px', marginLeft: '4px' }}>▼</span>
                                        </a>
                                        <div className={`${styles.dropdown} ${isProductsOpen ? styles.dropdownOpen : ''}`}>
                                            {productCategories.map((category) => (
                                                <div key={category.id} className={styles.dropdownItemWrapper}>
                                                    <Link
                                                        href={`/products/${category.id}`}
                                                        className={styles.dropdownItem}
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        {category.name}
                                                        {/* @ts-ignore - subCategories might not be in the type yet but it exists in data */}
                                                        {category.subCategories && <span style={{ float: 'right', fontSize: '10px' }}>▶</span>}
                                                    </Link>
                                                    {/* @ts-ignore */}
                                                    {category.subCategories && (
                                                        <div className={styles.subDropdown}>
                                                            {/* @ts-ignore */}
                                                            {category.subCategories.map((sub: any) => (
                                                                <Link
                                                                    key={sub.id}
                                                                    href={`/products/${sub.id}`}
                                                                    className={styles.dropdownItem}
                                                                    onClick={() => setIsMenuOpen(false)}
                                                                >
                                                                    {sub.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                ) : link.name === 'About Us' ? (
                                    <>
                                        <a
                                            href="#"
                                            className={styles.navLink}
                                            onClick={toggleAbout}
                                        >
                                            {link.name} <span style={{ fontSize: '10px', marginLeft: '4px' }}>▼</span>
                                        </a>
                                        <div className={`${styles.dropdown} ${isAboutOpen ? styles.dropdownOpen : ''}`}>
                                            <Link href="/about" className={styles.dropdownItem} onClick={() => setIsMenuOpen(false)}>
                                                Company Profile
                                            </Link>
                                            <Link href="/history" className={styles.dropdownItem} onClick={() => setIsMenuOpen(false)}>
                                                Company History
                                            </Link>
                                            <Link href="/gallery" className={styles.dropdownItem} onClick={() => setIsMenuOpen(false)}>
                                                Project Gallery
                                            </Link>
                                        </div>
                                    </>
                                ) : (
                                    <Link href={link.href} className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                        <li className={styles.navCta}>
                            <Button href="/contact" size="sm" className={styles.quoteButton}>Quick Quote</Button>
                        </li>
                    </ul>

                    <button
                        className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        </header>
    );
}
