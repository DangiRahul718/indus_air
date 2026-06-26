import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.css';
import Button from './Button';

interface CardProps {
    type: 'product' | 'blog' | 'testimonial' | 'application' | 'benefit';
    image?: string;
    title: string;
    description?: string;
    link?: string;
    author?: string;
    authorImage?: string;
    authorRole?: string;
    icon?: React.ReactNode;
    stat?: string;
    className?: string;
}

export default function Card({
    type,
    image,
    title,
    description,
    link,
    author,
    authorImage,
    authorRole,
    icon,
    stat,
    className = '',
}: CardProps) {
    if (type === 'product') {
        return (
            <div className={`${styles.card} ${styles.productCard} ${className}`}>
                <div className={styles.imageWrapper}>
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className={styles.image}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    ) : (
                        <div className={styles.imagePlaceholder}>
                            <span>🔧</span>
                        </div>
                    )}
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    {description && <p className={styles.description}>{description}</p>}
                    {link && (
                        <Button href={link} variant="primary" size="sm">
                            Check Detail
                        </Button>
                    )}
                </div>
            </div>
        );
    }

    if (type === 'blog') {
        return (
            <Link href={link || '#'} className={`${styles.card} ${styles.blogCard} ${className}`}>
                <div className={styles.imageWrapper}>
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className={styles.image}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    ) : (
                        <div className={styles.imagePlaceholder}>
                            <span>📰</span>
                        </div>
                    )}
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    {description && <p className={styles.description}>{description}</p>}
                    <span className={styles.readMore}>Read More →</span>
                </div>
            </Link>
        );
    }

    if (type === 'testimonial') {
        return (
            <div className={`${styles.card} ${styles.testimonialCard} ${className}`}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.testimonialText}>{description}</p>
                <div className={styles.authorInfo}>
                    <div className={styles.authorAvatar}>
                        {authorImage ? (
                            <Image
                                src={authorImage}
                                alt={author || ''}
                                fill
                                className={styles.avatarImage}
                                sizes="56px"
                            />
                        ) : (
                            <span>{author?.charAt(0) || 'A'}</span>
                        )}
                    </div>
                    <div>
                        <h4 className={styles.authorName}>{author}</h4>
                        <p className={styles.authorRole}>{authorRole}</p>
                    </div>
                </div>
            </div>
        );
    }

    if (type === 'application') {
        return (
            <div className={`${styles.card} ${styles.applicationCard} ${className}`}>
                <div className={styles.imageWrapper}>
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className={styles.image}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    ) : (
                        <div className={styles.imagePlaceholder}>
                            <span>🏭</span>
                        </div>
                    )}
                    <div className={styles.overlay}>
                        <h3 className={styles.overlayTitle}>{title}</h3>
                    </div>
                </div>
            </div>
        );
    }

    if (type === 'benefit') {
        return (
            <div className={`${styles.card} ${styles.benefitCard} ${className}`}>
                <div className={styles.benefitIcon}>{icon}</div>
                {stat && <div className={styles.stat}>{stat}</div>}
                <h4 className={styles.benefitTitle}>{title}</h4>
                {description && <p className={styles.benefitDescription}>{description}</p>}
            </div>
        );
    }

    return null;
}
