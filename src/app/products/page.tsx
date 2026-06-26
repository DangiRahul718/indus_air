import ProductsClient from './ProductsClient';
import { products, productCategories } from '@/lib/data';

export const metadata = {
    title: 'Products - Sollant Air Compressor',
    description: 'Explore our complete range of industrial air compressors including oil-injected, oil-free, portable, and specialty compressors.',
};

export default function ProductsPage() {
    return <ProductsClient products={products} categories={productCategories} />;
}
