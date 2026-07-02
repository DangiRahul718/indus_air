import Image from 'next/image';
import styles from './Applications.module.css';
import { applications } from '@/lib/data';

export default function Applications() {
    return (
        <section className={`section ${styles.applications}`} aria-labelledby="applications-title">
            <div className="container">
                <div className="section-header">
                    <h2 id="applications-title" className="section-header__title app-animate-title">Indus Air Compressor Applications</h2>
                    <p className="section-header__subtitle">
                        Our air compressors are trusted across diverse industries worldwide,
                        powering critical operations in manufacturing, construction, and more.
                    </p>
                </div>

                <div className={styles.grid}>
                    {applications.map((app) => (
                        <div key={app.id} className={`${styles.appCard} app-card-animate`}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={app.image}
                                    alt={`${app.title} Application`}
                                    fill
                                    className={styles.appImage}
                                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                                <div className={styles.overlay}>
                                    <h3 className={styles.appTitle}>{app.title}</h3>
                                    <p className={styles.appDesc}>Air compressor solutions for {app.title.toLowerCase()} industry</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
