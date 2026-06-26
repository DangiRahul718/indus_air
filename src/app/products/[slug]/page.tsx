import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './product.module.css';
import Button from '@/components/ui/Button';
import ProductGallery from '@/components/ui/ProductGallery';
import ProductTabs from '@/components/ui/ProductTabs';
import Accordion from '@/components/ui/Accordion';
import AnimatedProductPage from '@/components/ui/AnimatedProductPage';
import { products } from '@/lib/data';

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.id,
    }));
}

export async function generateMetadata({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = products.find((p) => p.id === slug);

    if (!product) {
        return {
            title: 'Product Not Found - Indus Air',
        };
    }

    return {
        title: `${product.name} - Indus Air Compressor`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = products.find((p) => p.id === slug);

    if (!product) {
        notFound();
    }

    const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

    return (
        <AnimatedProductPage>
            <div className={styles.productPage}>
                {/* Hero Banner */}
                <section className={`${styles.heroBanner} parallax-hero`}>
                    <div className="container">
                        <div className={styles.heroBannerContent}>
                            <span className={`${styles.categoryBadge} animate-hero-badge`}>
                                {product.category}
                            </span>
                            <h1 className="animate-hero-title">{product.name}</h1>
                            <p className="animate-hero-desc">{product.description}</p>
                            <div className={styles.heroCtas}>
                                <Button href="/contact" size="lg" className="animate-hero-cta">
                                    Request Quick Quote
                                </Button>
                                <Button href="tel:+918401242943" variant="outline" size="lg" className="animate-hero-cta">
                                    📞 Call Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Breadcrumb */}
                <div className={styles.breadcrumb}>
                    <div className="container">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/products">Products</Link>
                        <span>/</span>
                        <span>{product.name}</span>
                    </div>
                </div>

                {/* Product Main Section */}
                <section className={styles.productMain}>
                    <div className="container">
                        <div className={styles.productGrid}>
                            {/* Left: Gallery */}
                            <div className={`${styles.productGallery} animate-gallery`}>
                                <ProductGallery
                                    mainImage={product.image}
                                    gallery={product.gallery || []}
                                    productName={product.name}
                                />
                            </div>

                            {/* Right: Quick Info */}
                            <div className={`${styles.productQuickInfo} animate-quick-info`}>
                                <h2>{product.name}</h2>
                                <p className={styles.shortDesc}>{product.description}</p>

                                {/* Quick Specs */}
                                <div className={styles.quickSpecs}>
                                    <h4>Key Specifications</h4>
                                    <div className={styles.specsList}>
                                        {product.specifications && Object.entries(product.specifications).slice(0, 4).map(([key, value]) => (
                                            <div key={key} className={`${styles.specItem} animate-spec-item`}>
                                                <span className={styles.specLabel}>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                                                <span className={styles.specValue}>{String(value)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.actionButtons}>
                                    <Button href="/contact" size="lg" className={styles.quoteBtn}>
                                        Get Best Price
                                    </Button>
                                    <Button href="tel:+918401242943" variant="outline" size="lg">
                                        Contact Sales
                                    </Button>
                                </div>

                                <div className={styles.trustBadges}>
                                    <div className={`${styles.badge} animate-badge`}>
                                        <span className="animate-float">🛡️</span>
                                        <span>1-2 Year Warranty</span>
                                    </div>
                                    <div className={`${styles.badge} animate-badge`}>
                                        <span className="animate-float">🚚</span>
                                        <span>Fast Delivery</span>
                                    </div>
                                    <div className={`${styles.badge} animate-badge`}>
                                        <span className="animate-float">📞</span>
                                        <span>24/7 Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Product Tabs Section */}
                <section className={`section ${styles.tabsSection}`}>
                    <div className="container">
                        <div className="animate-tabs">
                            <ProductTabs
                                description={product.description}
                                specifications={product.specifications || {}}
                                features={product.features || []}
                                productName={product.name}
                            />
                        </div>
                    </div>
                </section>

                {/* Screw Applications Section */}
                <section className={`section ${styles.screwApplicationsSection}`}>
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-header__title">Applications of Screw Air Compressors</h2>
                            <p className="section-header__subtitle">Industrial buyers search by application.</p>
                        </div>
                        <div className={styles.applicationsGrid}>
                            {[
                                { industry: 'Textile Industry', usage: 'Continuous air supply' },
                                { industry: 'Pharma Industry', usage: 'Clean compressed air' },
                                { industry: 'CNC Machines', usage: 'Stable pressure' },
                                { industry: 'Engineering Workshops', usage: 'Industrial automation' },
                                { industry: 'Automobile Industry', usage: 'Pneumatic operations' },
                                { industry: 'Packaging Industry', usage: 'Machine air systems' },
                            ].map((app, index) => (
                                <div key={index} className={styles.applicationCard}>
                                    <h3 className={styles.applicationTitle}>{app.industry}</h3>
                                    <p className={styles.applicationUsage}>{app.usage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className={`section ${styles.benefitsSection}`}>
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-header__title">Benefits of Rotary Screw Air Compressors</h2>
                            <p className="section-header__subtitle">Why Choose Screw Air Compressors</p>
                        </div>
                        <div className={styles.benefitsGrid}>
                            {[
                                'Low power consumption',
                                'Continuous operation',
                                'Low maintenance',
                                'Energy efficient',
                                'Low noise levels',
                                'Long operational life',
                                'High air delivery efficiency',
                                'Ideal for industrial use',
                            ].map((benefit, index) => (
                                <div key={index} className={styles.benefitCard}>
                                    <span className={styles.benefitIcon}>✓</span>
                                    <p>{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Product FAQ Section */}
                <section className={`section ${styles.productFaqSection}`}>
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-header__title">Frequently Asked Questions</h2>
                            <p className="section-header__subtitle">Important for SEO and industrial buyers.</p>
                        </div>
                        <div className={styles.faqContent}>
                            <Accordion items={[
                                {
                                    question: 'Which screw air compressor is best for industrial use?',
                                    answer: 'Rotary screw air compressors are best for industrial use due to continuous operation, energy efficiency, and reliable performance.',
                                },
                                {
                                    question: 'What is the price of screw air compressors in Ahmedabad?',
                                    answer: 'The price depends on compressor capacity, HP, pressure, and industrial requirements. Contact for a customized quotation.',
                                },
                                {
                                    question: 'Which industries use rotary screw compressors?',
                                    answer: 'Textile, pharma, engineering, automobile, packaging, food processing, and manufacturing industries commonly use rotary screw compressors.',
                                },
                                {
                                    question: 'Do you provide screw compressor installation in Ahmedabad?',
                                    answer: 'Yes, installation and technical support services are available across Ahmedabad industrial areas.',
                                },
                                {
                                    question: 'What is the maintenance cost of a screw compressor?',
                                    answer: 'Maintenance costs are generally low with regular servicing, filter replacement, and oil maintenance.',
                                },
                                {
                                    question: 'Which compressor is best for textile industries?',
                                    answer: 'Rotary screw air compressors are ideal for textile industries because of stable airflow and continuous operation.',
                                },
                            ]} />
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className={`section ${styles.applicationsSection}`}>
                    <div className="container">
                        <h2 className={`${styles.sectionTitle} animate-section-title`}>Applications</h2>
                        <div className={styles.appGrid}>
                            {product.applications && product.applications.map((app, i) => (
                                <div key={i} className={`${styles.appCard} animate-app-card`}>
                                    <span className={`${styles.appIcon} animate-float`}>
                                        {['🏭', '🔧', '🏗️', '💊', '🍔', '💻', '🧪', '🚗'][i % 8]}
                                    </span>
                                    <h4>{app}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related Products */}
                <section className={`section ${styles.relatedSection}`}>
                    <div className="container">
                        <h2 className={`${styles.sectionTitle} animate-section-title`}>Related Products</h2>
                        <div className={styles.relatedGrid}>
                            {relatedProducts.map((p) => (
                                <Link key={p.id} href={`/products/${p.id}`} className={`${styles.relatedCard} animate-related-card`}>
                                    <div className={styles.relatedImage}>
                                        <img src={p.image} alt={p.name} />
                                    </div>
                                    <div className={styles.relatedInfo}>
                                        <h4>{p.name}</h4>
                                        <p>{p.description.substring(0, 80)}...</p>
                                        <span className={styles.viewMore}>View Details →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className="container">
                        <div className={`${styles.ctaContent} animate-cta-content`}>
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
        </AnimatedProductPage>
    );
}


