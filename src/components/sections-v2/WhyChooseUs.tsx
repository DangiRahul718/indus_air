import styles from './WhyChooseUs.module.css';
import { benefits } from '@/lib/data';
import CountingStat from '@/components/ui/CountingStat';

export default function WhyChooseUs() {
    const parseStat = (stat: string) => {
        // Simple check if it starts with a number
        const match = stat.match(/^([\d,]+)(.*)$/);
        if (match) {
            const numStr = match[1].replace(/,/g, '');
            const value = parseFloat(numStr);
            const suffix = match[2];
            if (!isNaN(value)) {
                return { value, suffix, isNumber: true };
            }
        }
        return { isNumber: false };
    };

    return (
        <section className={`section ${styles.whyChoose}`}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.textSection}>
                        <span className={`${styles.badge} why-animate-badge`}>Why Choose Us</span>
                        <h2 className={`${styles.title} why-animate-title`}>Why Choose Indus Air Compressor?</h2>
                        <p className={styles.description}>
                            With over 5 years of experience in manufacturing high-quality air compressors,
                            Indus Air has established itself as a trusted partner for industrial clients worldwide.
                            Our commitment to innovation, quality, and customer satisfaction sets us apart.
                        </p>

                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <span className={styles.featureIcon}>✓</span>
                                <span>ISO 9001:2000 Certified Manufacturing</span>
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.featureIcon}>✓</span>
                                <span>24/7 Technical Support & After-Sales Service</span>
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.featureIcon}>✓</span>
                                <span>Competitive Pricing with Premium Quality</span>
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.featureIcon}>✓</span>
                                <span>Custom OEM Solutions Available</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.statsGrid}>
                        {benefits.map((benefit, index) => {
                            const parsed = parseStat(benefit.stat);
                            return (
                                <div key={index} className={`${styles.statCard} benefit-card-animate`}>
                                    <span className={styles.statIcon}>{benefit.icon}</span>
                                    {parsed.isNumber ? (
                                        <CountingStat
                                            value={parsed.value!}
                                            suffix={parsed.suffix}
                                            className={styles.statNumber}
                                        />
                                    ) : (
                                        <span className={styles.statNumber}>{benefit.stat}</span>
                                    )}
                                    <span className={styles.statTitle}>{benefit.title}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Factory Images Section */}
            <div className={styles.factorySection}>
                <div className="container">
                    <div className={styles.factoryGrid}>
                        <div className={styles.factoryCard}>
                            <div className={styles.factoryImage}>
                                <span>🏭</span>
                            </div>
                            <h4>Modern Production Facility</h4>
                        </div>
                        <div className={styles.factoryCard}>
                            <div className={styles.factoryImage}>
                                <span>🔬</span>
                            </div>
                            <h4>Quality Testing Lab</h4>
                        </div>
                        <div className={styles.factoryCard}>
                            <div className={styles.factoryImage}>
                                <span>📦</span>
                            </div>
                            <h4>Warehouse & Logistics</h4>
                        </div>
                        <div className={styles.factoryCard}>
                            <div className={styles.factoryImage}>
                                <span>👥</span>
                            </div>
                            <h4>Expert Team</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
