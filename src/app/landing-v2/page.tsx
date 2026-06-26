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

export default function Home() {
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
