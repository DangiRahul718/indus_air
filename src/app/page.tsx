import Hero from '@/components/sections/Hero';
import ProductShowcase from '@/components/sections/ProductShowcase';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Applications from '@/components/sections/Applications';
import Testimonials from '@/components/sections/Testimonials';
import BlogPreview from '@/components/sections/BlogPreview';
import QuoteForm from '@/components/sections/QuoteForm';
import ServiceSupport from '@/components/sections/ServiceSupport';
import FAQ from '@/components/sections/FAQ';
import AnimatedHomePage from '@/components/ui/AnimatedHomePage';

export default function Home() {
  return (
    <AnimatedHomePage>
      <Hero />
      <ProductShowcase />
      <WhyChooseUs />
      <Applications />
      <Testimonials />
      <BlogPreview />
      <QuoteForm />
      <ServiceSupport />
      <FAQ />
    </AnimatedHomePage>
  );
}
