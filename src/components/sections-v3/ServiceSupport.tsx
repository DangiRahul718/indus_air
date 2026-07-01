import styles from './ServiceSupport.module.css';

const services = [
    { name: 'Installation', icon: '🔧' },
    { name: 'Maintenance', icon: '⚙️' },
    { name: 'Repair', icon: '🔨' },
    { name: 'AMC Support', icon: '📋' },
    { name: 'Spare Parts', icon: '🛠️' },
    { name: 'Technical Assistance', icon: '👨‍🔧' },
    { name: 'Emergency Support', icon: '🚨' },
];

export default function ServiceSupport() {
    return (
        <section className={`section ${styles.serviceSupport}`}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-header__title">Complete Compressor Service & Support in Ahmedabad</h2>
                    <p className="section-header__subtitle">
                        Professional installation, maintenance, and support services for all your air compressor needs across Ahmedabad and surrounding industrial areas.
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    {services.map((service) => (
                        <div key={service.name} className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>
                                {service.icon}
                            </div>
                            <h3 className={styles.serviceTitle}>{service.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}