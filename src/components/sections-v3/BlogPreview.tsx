import styles from './BlogPreview.module.css';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { blogPosts } from '@/lib/data';

export default function BlogPreview() {
    return (
        <section className={`section ${styles.blogPreview}`}>
            <div className="container">
                <div className={styles.header}>
                    <div>
                        <h2 className={`${styles.title} blog-animate-title`}>
                            Grow Your Business by Importing High Quality Air Compressors From India
                        </h2>
                        <p className={styles.subtitle}>
                            Expert guides and tips to help you make informed decisions
                        </p>
                    </div>
                    <Button href="/blog" variant="outline">Check All Guides</Button>
                </div>

                <div className={styles.grid}>
                    {blogPosts.map((post) => (
                        <Card
                            key={post.id}
                            type="blog"
                            title={post.title}
                            description={post.excerpt}
                            image={post.image}
                            link={`/blog/${post.slug}`}
                            className="blog-card-animate"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
