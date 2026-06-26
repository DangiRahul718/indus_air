import styles from '../about/about.module.css';

export const metadata = {
    title: 'Terms of Service - Indus Air Compressor',
    description: 'Terms and Conditions for using the Indus Air Compressor website and services.',
};

export default function TermsPage() {
    return (
        <div className={styles.aboutPage}>
            <section className={styles.hero} style={{ padding: '80px 0 40px' }}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1>Terms of Service</h1>
                        <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--color-text)' }}>
                        <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>1. Acceptance of Terms</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            By accessing and using the Indus Air Compressor website, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>2. Use of License</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Permission is granted to temporarily download one copy of the materials on Indus Air Compressor's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                        </p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>3. Disclaimer</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The materials on Indus Air Compressor's website are provided on an 'as is' basis. Indus Air Compressor makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>4. Limitations</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In no event shall Indus Air Compressor or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Indus Air Compressor's website, even if Indus Air Compressor or an authorized representative has been notified orally or in writing of the possibility of such damage.
                        </p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>5. Revisions and Errata</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The materials appearing on Indus Air Compressor's website could include technical, typographical, or photographic errors. Indus Air Compressor does not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
                        </p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>6. Contact Information</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            If you have any questions about these Terms, please contact us at <strong>info@indusaircompressor.com</strong>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
