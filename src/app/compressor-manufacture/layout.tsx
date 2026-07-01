import type { Metadata } from 'next';
import FooterLanding from '@/components/sections-v2/FooterLanding';

export const metadata: Metadata = {
    title: 'Air Compressor Manufacturer | Indus Air Compressor',
    description:
        'Leading air compressor manufacturer offering screw air compressors, oil-free compressors, air dryers, nitrogen generators, and industrial compressed air solutions.',
    alternates: {
        canonical: 'https://www.indusaircompressor.com/compressor-manufacturer',
    },
};

export default function LandingV1Layout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div data-landing-v1>
            {/*
             * Scoped CSS:
             *  • Hide the root global footer
             *  • Make sure the root layout footer does not display
             */}
            <style>{`
                body:has([data-landing-v1]) > footer,
                body:has([data-landing-v1]) > main > footer {
                    display: none !important;
                }
            `}</style>
            
            {/* Page Content */}
            {children}
            
            {/* Display-only non-clickable footer */}
            <FooterLanding />
        </div>
    );
}
