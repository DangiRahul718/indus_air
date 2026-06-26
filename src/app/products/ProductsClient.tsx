'use client';

import { useState } from 'react';
import styles from './products.module.css';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Product } from '@/lib/data';
interface ProductsClientProps {
    products: Product[];
    categories: { id: string; name: string; icon: string }[];
}

export default function ProductsClient({ products, categories }: ProductsClientProps) {
    const [activeCategory, setActiveCategory] = useState<string>('all');

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(product => product.id === activeCategory);

    return (
        <div className={styles.productsPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>Our Products</span>
                        <h1>Industrial Air Compressor Solutions</h1>
                        <p>
                            Discover our comprehensive range of high-quality air compressors
                            designed for various industrial applications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className={styles.categories}>
                <div className="container">
                    <div className={styles.categoryGrid}>
                        <button
                            className={`${styles.categoryCard} ${activeCategory === 'all' ? styles.categoryCardActive : ''}`}
                            onClick={() => setActiveCategory('all')}
                        >
                            <span className={styles.categoryName}>All Products</span>
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`${styles.categoryCard} ${activeCategory === category.id ? styles.categoryCardActive : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                <span className={styles.categoryIcon}>{category.icon}</span>
                                <span className={styles.categoryName}>{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className={`section ${styles.productsSection}`}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-header__title">
                            {activeCategory === 'all'
                                ? 'All Products'
                                : categories.find(c => c.id === activeCategory)?.name || 'Products'
                            }
                        </h2>
                        <p className="section-header__subtitle">
                            {activeCategory === 'all'
                                ? 'Browse our complete product catalog'
                                : `Explore our customized ${categories.find(c => c.id === activeCategory)?.name.toLowerCase()} solutions`
                            }
                        </p>
                    </div>

                    <div className={styles.productGrid}>
                        {filteredProducts.map((product) => (
                            <Card
                                key={product.id}
                                type="product"
                                title={product.name}
                                description={product.description}
                                image={product.image}
                                link={`/products/${product.id}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Need Help Choosing the Right Compressor?</h2>
                        <p>Our technical team is ready to help you find the perfect solution for your needs</p>
                        <div className={styles.ctaButtons}>
                            <Button href="/contact" size="lg">Get Expert Advice</Button>
                            <Button href="tel:+918401242943" variant="outline" size="lg">
                                Call Us Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
