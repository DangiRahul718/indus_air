import styles from '../about/about.module.css';

export const metadata = {
    title: 'Privacy Policy - Indus Air Compressor',
    description: 'Privacy Policy for Indus Air Compressor website and services.',
};

export default function PrivacyPage() {
    return (
        <div className={styles.aboutPage}>
            <section className={styles.hero} style={{ padding: '80px 0 40px' }}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1>Privacy Policy</h1>
                        <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--color-text)' }}>
                        <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>1. Information We Collect</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            At Indus Air Compressor, we collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products, when you participate in activities on the Website, or otherwise when you contact us. This may include your name, email address, phone number, and company details.
                        </p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>2. How We Use Your Information</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We use the information we collect to communicate with you, process your requests or inquiries, provide customer support, and send you important updates regarding our industrial air compression solutions. We may also use this information to improve our website and services.
                        </p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>3. Sharing Your Information</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
                        </p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>4. Data Security</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                        </p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>5. Contact Us</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            If you have questions or comments about this privacy policy, you may email us at <strong>info@indusaircompressor.com</strong> or contact us via our Contact page.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
