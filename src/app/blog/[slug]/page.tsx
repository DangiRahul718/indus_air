import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './post.module.css';
import Button from '@/components/ui/Button';
import { blogPosts } from '@/lib/data';

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return { title: 'Post Not Found - Sollant' };
    }

    return {
        title: `${post.title} - Sollant Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className={styles.postPage}>
            {/* Breadcrumb */}
            <div className={styles.breadcrumb}>
                <div className="container">
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/blog">Blog</Link>
                    <span>/</span>
                    <span>{post.title}</span>
                </div>
            </div>

            {/* Post Content */}
            <article className={`section ${styles.article}`}>
                <div className="container">
                    <div className={styles.articleWrapper}>
                        <div className={styles.articleContent}>
                            <header className={styles.header}>
                                <span className={styles.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                <h1>{post.title}</h1>
                                <p className={styles.excerpt}>{post.excerpt}</p>
                            </header>

                            <div className={styles.featuredImage}>
                                <img src={post.image} alt={post.title} className={styles.heroBannerImage} />
                            </div>

                            <div className={styles.content}>
                                <p>
                                    Air compressors are essential equipment in industrial settings, providing compressed
                                    air for various applications including powering pneumatic tools, spray painting,
                                    sandblasting, and general plant operations.
                                </p>

                                <h2>Understanding Your Requirements</h2>
                                <p>
                                    Before selecting an air compressor, it's crucial to understand your specific needs.
                                    Consider factors such as the volume of air required (measured in CFM - cubic feet per
                                    minute), the pressure needed (PSI), and the duty cycle of your operations.
                                </p>

                                <h2>Types of Air Compressors</h2>
                                <p>
                                    There are several types of air compressors available, each suited for different
                                    applications:
                                </p>
                                <ul>
                                    <li><strong>Rotary Screw Compressors:</strong> Ideal for continuous operation and industrial use</li>
                                    <li><strong>Oil-Free Compressors:</strong> Perfect for applications requiring clean, uncontaminated air</li>
                                    <li><strong>Variable Speed Drive (VSD):</strong> Energy-efficient option that adjusts to demand</li>
                                    <li><strong>Portable Compressors:</strong> Great for construction sites and mobile operations</li>
                                </ul>

                                <h2>Key Considerations</h2>
                                <p>
                                    When choosing an air compressor, keep these factors in mind:
                                </p>
                                <ol>
                                    <li>Total air demand of all equipment</li>
                                    <li>Required working pressure</li>
                                    <li>Operating environment conditions</li>
                                    <li>Energy efficiency ratings</li>
                                    <li>Maintenance requirements</li>
                                    <li>Initial cost vs. lifetime operating cost</li>
                                </ol>

                                <h2>Conclusion</h2>
                                <p>
                                    Selecting the right air compressor is a significant investment decision. By
                                    understanding your requirements and evaluating the options available, you can
                                    make an informed choice that will serve your business well for years to come.
                                </p>
                                <p>
                                    If you need help choosing the right compressor for your needs, our technical
                                    team is available to provide free consultation and recommendations.
                                </p>
                            </div>

                            <div className={styles.cta}>
                                <h3>Need Help Choosing the Right Compressor?</h3>
                                <p>Our experts are here to help you find the perfect solution</p>
                                <Button href="/contact">Get Free Consultation</Button>
                            </div>
                        </div>

                        <aside className={styles.sidebar}>
                            <div className={styles.authorCard}>
                                <div className={styles.authorAvatar}>
                                    <span>I</span>
                                </div>
                                <h4>Indus Air Team</h4>
                                <p>Expert insights from our technical team</p>
                            </div>

                            <div className={styles.relatedPosts}>
                                <h4>Related Articles</h4>
                                {blogPosts.filter(p => p.slug !== slug).slice(0, 3).map((relatedPost) => (
                                    <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className={styles.relatedPost}>
                                        <span>{relatedPost.title}</span>
                                    </Link>
                                ))}
                            </div>
                        </aside>
                    </div>
                </div>
            </article>
        </div>
    );
}
