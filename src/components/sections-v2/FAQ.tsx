import styles from './FAQ.module.css';
import Accordion from '../ui/Accordion';
import { faqs } from '@/lib/data';

export default function FAQ() {
    return (
        <section className={`section ${styles.faq}`}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-header__title faq-animate-title">Frequently Asked Questions</h2>
                    <p className="section-header__subtitle">
                        Find answers to common questions about our air compressors, services, and industrial solutions in Ahmedabad.
                    </p>
                </div>

                <div className={styles.faqContent}>
                    <div className={styles.faqList}>
                        <Accordion items={faqs} />
                    </div>

                    <div className={styles.contactBox}>
                        <div className={styles.contactCard}>
                            <span className={styles.contactIcon}>💬</span>
                            <h3>Still Have Questions?</h3>
                            <p>Can't find the answer you're looking for? Please contact our friendly team.</p>
                            <a href="mailto:info@indusaircompressor.com" className={styles.contactEmail}>
                                info@indusaircompressor.com
                            </a>
                            <a href="tel:+918401242943" className={styles.contactPhone}>
                                +91 84012 42943
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
