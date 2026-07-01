import styles from './ProductShowcase.module.css';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { products } from '@/lib/data';

export default function ProductShowcase() {
    return (
        <section className={`section ${styles.showcase}`}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-header__title products-animate-title">Our Product Categories</h2>
                    <p className="section-header__subtitle">
                        Explore our comprehensive range of industrial air compressors designed
                        for various applications and industries.
                    </p>
                </div>

                <div className={styles.grid}>
                    {products.slice(0, 9).map((product) => (
                        <Card
                            key={product.id}
                            type="product"
                            title={product.name}
                            description={product.description}
                            image={product.image}
                            link={`/products/${product.id}`}
                            className="product-card-animate"
                        />
                    ))}
                </div>

                <div className={styles.viewAll}>
                    <Button href="/products" size="lg">View All Products</Button>
                </div>
            </div>
        </section>
    );
}
