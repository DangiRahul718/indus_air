import styles from './about.module.css';
import Button from '@/components/ui/Button';
import { coreValues, productionSteps, qualityMeasures, teamMembers } from '@/lib/data';
import VideoStack from '@/components/sections/VideoStack';

export const metadata = {
    title: 'About Us - Indus Air Compressor',
    description: 'Learn about Indus Air, a professional air compressor manufacturer with 5+ years experience. Discover our mission, values, and commitment to quality.',
};

export default function AboutPage() {
    return (
        <div className={styles.aboutPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>About Sollant</span>
                        <h1>Professional Air Compressor Manufacturer Since 2021</h1>
                        <p>
                            For over 5 years, Sollant has been at the forefront of industrial air compressor
                            manufacturing, delivering high-quality, reliable solutions to businesses worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className={`section ${styles.mission}`}>
                <div className="container">
                    <div className={styles.missionGrid}>
                        <div className={styles.missionContent}>
                            <h2>Our Mission</h2>
                            <p>
                                To provide industrial clients worldwide with the most reliable, energy-efficient,
                                and cost-effective air compression solutions. We are committed to continuous innovation,
                                exceptional quality, and outstanding customer service.
                            </p>
                            <p>
                                At Indus Air, we believe that every business deserves access to premium industrial equipment
                                at competitive prices. Our mission drives us to constantly improve our products and
                                services to exceed customer expectations.
                            </p>
                            <Button href="/contact">Contact Indus Air Team</Button>
                        </div>
                        <VideoStack />
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className={`section ${styles.values}`}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-header__title">Our Core Values</h2>
                        <p className="section-header__subtitle">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className={styles.valuesGrid}>
                        {coreValues.map((value, index) => (
                            <div key={index} className={styles.valueCard}>
                                <div className={styles.valueNumber}>0{index + 1}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Factory Tour */}
            <section className={`section ${styles.factory}`}>
                <div className="container">
                    <div className={styles.factoryHeader}>
                        <h2>Indus Air is a Reliable Supplier of Air Compressors</h2>
                        <p>
                            Our state-of-the-art 15,000 m² manufacturing facility in Ahmedabad, Gujarat is equipped
                            with the latest production technology and quality control systems.
                        </p>
                    </div>

                    <div className={styles.factoryGrid}>
                        <div className={styles.factoryFeature}>
                            <span className={styles.factoryIcon}>🔬</span>
                            <h4>Continuous Innovation</h4>
                            <p>R&D team constantly developing new and improved products</p>
                        </div>
                        <div className={styles.factoryFeature}>
                            <span className={styles.factoryIcon}>✅</span>
                            <h4>High Quality Service</h4>
                            <p>ISO 9001 certified quality management system</p>
                        </div>
                        <div className={styles.factoryFeature}>
                            <span className={styles.factoryIcon}>🤝</span>
                            <h4>Win-Win Cooperation</h4>
                            <p>Building long-term partnerships with global clients</p>
                        </div>
                        <div className={styles.factoryFeature}>
                            <span className={styles.factoryIcon}>💡</span>
                            <h4>Perfect Solutions</h4>
                            <p>Customized solutions for specific requirements</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Production Process */}
            <section className={`section ${styles.process}`}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-header__title">Our Production Process</h2>
                        <p className="section-header__subtitle">
                            From raw materials to finished product - quality at every step
                        </p>
                    </div>

                    <div className={styles.processSteps}>
                        {productionSteps.map((step) => (
                            <div key={step.step} className={styles.processStep}>
                                <div className={styles.stepNumber}>{step.step}</div>
                                <div className={styles.stepContent}>
                                    <h4>{step.title}</h4>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Control */}
            <section className={`section ${styles.quality}`}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-header__title">Quality Control</h2>
                        <p className="section-header__subtitle">
                            ISO 9001:2000 certified with comprehensive quality measures
                        </p>
                    </div>

                    <div className={styles.qualityGrid}>
                        {qualityMeasures.map((measure, index) => (
                            <div key={index} className={styles.qualityItem}>
                                <span className={styles.checkIcon}>✓</span>
                                {measure}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className={`section ${styles.team}`}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-header__title">Our Team</h2>
                        <p className="section-header__subtitle">
                            Meet the dedicated professionals behind Indus Air
                        </p>
                    </div>

                    <div className={styles.teamGrid}>
                        {teamMembers.map((member, index) => (
                            <div key={index} className={styles.teamCard}>
                                <div className={styles.teamAvatar}>
                                    <span>{member.name.charAt(0)}</span>
                                </div>
                                <h4>{member.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Privacy Policy */}
            <section className={`section`}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-header__title">Privacy Policy</h2>
                    </div>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <p style={{ marginBottom: '1rem' }}>At Indus Air, we take your privacy seriously. This privacy policy describes how we collect, use, and handle your personal information when you use our website and services.</p>
                        <p>We only collect information that is necessary to provide our services and communicate with you effectively. We do not sell your personal data to third parties.</p>
                    </div>
                </div>
            </section>

            {/* Terms and Conditions */}
            <section className={`section`} style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-header__title">Terms & Conditions</h2>
                    </div>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <p style={{ marginBottom: '1rem' }}>By using our website, you agree to comply with and be bound by the following terms and conditions of use.</p>
                        <p>All content included on this site, such as text, graphics, logos, and images, is the property of Indus Air and protected by international copyright laws. Any unauthorized use of the materials is strictly prohibited.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Ready to Partner with Us?</h2>
                        <p>Contact our team today to discuss your air compressor needs</p>
                        <div className={styles.ctaButtons}>
                            <Button href="/contact" size="lg">Get in Touch</Button>
                            <Button href="/products" variant="white" size="lg">View Products</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
