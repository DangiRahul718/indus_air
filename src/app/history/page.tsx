import styles from './history.module.css';
import Button from '@/components/ui/Button';
import CountingStat from '@/components/ui/CountingStat';

export const metadata = {
    title: 'Company History - Sollant Air Compressor',
    description: 'Learn about Sollant\'s journey from a small workshop to a leading air compressor manufacturer.',
};

const milestones = [
    { year: '2021', title: 'Company Founded', description: 'Indus Air was established in Ahmedabad, India with a small team dedicated to manufacturing quality air compressors.' },
    { year: '2022', title: 'First Export', description: 'Successfully shipped our first container of air compressors to Southeast Asia, marking the beginning of our international journey.' },
    { year: '2023', title: 'ISO Certification', description: 'Achieved ISO 9001:2000 certification, demonstrating our commitment to quality management systems.' },
    { year: '2024', title: 'Factory Expansion', description: 'Expanded our manufacturing facility to 8,000 m² to meet growing international demand.' },
    { year: '2025', title: '3+ Countries', description: 'Reached a milestone of exporting to over 3 countries across 6 continents.' },
    { year: '2026', title: 'R&D Center', description: 'Established a dedicated Research & Development center for continuous product innovation.' },
];

export default function HistoryPage() {
    return (
        <div className={styles.historyPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>Our Journey</span>
                        <h1>Our Journey</h1>
                        <p>
                            From a small workshop to a global leader in air compressor manufacturing -
                            discover the Indus Air story.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className={`section ${styles.timeline}`}>
                <div className="container">
                    <div className={styles.timelineWrapper}>
                        {milestones.map((milestone, index) => (
                            <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
                                <div className={styles.timelineContent}>
                                    <span className={styles.year}>{milestone.year}</span>
                                    <h3>{milestone.title}</h3>
                                    <p>{milestone.description}</p>
                                </div>
                                <div className={styles.timelineDot}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className={styles.stats}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <CountingStat value={5} suffix="+" className={styles.statNumber} />
                            <span className={styles.statLabel}>Years Experience</span>
                        </div>
                        <div className={styles.statCard}>
                            <CountingStat value={3} suffix="+" className={styles.statNumber} />
                            <span className={styles.statLabel}>Countries Served</span>
                        </div>
                        <div className={styles.statCard}>
                            <CountingStat value={1000} suffix="+" className={styles.statNumber} />
                            <span className={styles.statLabel}>Happy Customers</span>
                        </div>
                        <div className={styles.statCard}>
                            <CountingStat value={200} suffix="+" className={styles.statNumber} />
                            <span className={styles.statLabel}>Team Members</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Be Part of Our Next Chapter</h2>
                        <p>Join thousands of satisfied customers and partners worldwide</p>
                        <div className={styles.ctaButtons}>
                            <Button href="/contact" size="lg">Contact Us</Button>
                            <Button href="/distributor" variant="outline" size="lg">Become a Partner</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
