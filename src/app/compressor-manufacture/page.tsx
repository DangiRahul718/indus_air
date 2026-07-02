import dynamic from 'next/dynamic';
import Hero from '@/components/sections-v2/Hero';
import AnimatedHomePage from '@/components/ui/AnimatedHomePage';

// Dynamic imports for below-the-fold components
const ProductShowcase = dynamic(() => import('@/components/sections-v2/ProductShowcase'));
const WhyChooseUs = dynamic(() => import('@/components/sections-v2/WhyChooseUs'));
const Applications = dynamic(() => import('@/components/sections-v2/Applications'));
const Testimonials = dynamic(() => import('@/components/sections-v2/Testimonials'));
const ProductionProcess = dynamic(() => import('@/components/sections-v2/ProductionProcess'));
const QualityControl = dynamic(() => import('@/components/sections-v2/QualityControl'));
const QuoteForm = dynamic(() => import('@/components/sections-v2/QuoteForm'));
const ServiceSupport = dynamic(() => import('@/components/sections-v2/ServiceSupport'));
const FAQ = dynamic(() => import('@/components/sections-v2/FAQ'));

export default function CompressorManufacturerPage() {
    return (
        <AnimatedHomePage>
            <Hero />
            <ProductShowcase />
            <WhyChooseUs />
            <Applications />
            <Testimonials />
            <ProductionProcess />
            <QualityControl />
            <QuoteForm />
            <ServiceSupport />
            <FAQ />
        </AnimatedHomePage>
    );
}
