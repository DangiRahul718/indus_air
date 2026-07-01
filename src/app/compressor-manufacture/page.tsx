import type { Metadata } from 'next';
import Hero from '@/components/sections-v2/Hero';
import ProductShowcase from '@/components/sections-v2/ProductShowcase';
import WhyChooseUs from '@/components/sections-v2/WhyChooseUs';
import Applications from '@/components/sections-v2/Applications';
import Testimonials from '@/components/sections-v2/Testimonials';
import ProductionProcess from '@/components/sections-v2/ProductionProcess';
import QualityControl from '@/components/sections-v2/QualityControl';
import QuoteForm from '@/components/sections-v2/QuoteForm';
import ServiceSupport from '@/components/sections-v2/ServiceSupport';
import FAQ from '@/components/sections-v2/FAQ';
import AnimatedHomePage from '@/components/ui/AnimatedHomePage';

export const metadata: Metadata = {
    title: 'Air Compressor Manufacturer | Indus Air Compressor',
    description:
        'Leading air compressor manufacturer offering screw air compressors, oil-free compressors, air dryers, nitrogen generators, and industrial compressed air solutions.',
    alternates: {
        canonical: 'https://www.indusaircompressor.com/compressor-manufacturer',
    },
};

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
