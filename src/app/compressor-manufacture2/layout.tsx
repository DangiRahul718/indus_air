import type { Metadata } from 'next';
import HeaderLanding from '@/components/sections-v3/HeaderLanding';

export const metadata: Metadata = {
    title: 'Air Compressor Manufacturer in India | Indus Air Compressor',
    description:
        'Leading industrial air compressor manufacturer in India. Screw compressors, oil-free compressors, nitrogen generators, air dryers — factory-direct pricing, ISO certified, 24/7 support.',
    keywords:
        'air compressor manufacturer India, screw air compressor, oil-free compressor, nitrogen generator, industrial compressor, Indus Air',
    alternates: {
        canonical: 'https://www.indusaircompressor.com/compressor-manufacturer-india',
    },
    openGraph: {
        title: 'Air Compressor Manufacturer in India | Indus Air Compressor',
        description:
            'Factory-direct industrial air compressors — screw, oil-free, diesel, nitrogen generators. ISO 9001 certified. Get a free quote in 30 minutes.',
        type: 'website',
        url: 'https://www.indusaircompressor.com/compressor-manufacturer-india',
    },
};

/**
 * Dedicated layout for Landing Page 2 (/compressor-manufacture2).
 *
 * Strategy: In Next.js App Router, nested layouts nest INSIDE the root layout,
 * so the root <Header> and <Footer> still render. We suppress them with a
 * scoped <style> tag targeting the [data-landing-v3] wrapper, then render our
 * own minimal HeaderLanding in their place.
 *
 * This keeps Landing Page 2 as a distraction-free, single-CTA page without
 * modifying the shared root layout, Header, or Footer components.
 */
export default function LandingLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        /* Wrap everything in a scoped container */
        <div data-landing-v3>
            {/*
             * Scoped CSS:
             *  • Hide the root Header (global nav + top bar)
             *  • Hide the root Footer
             *  • Suppress any root <main> padding the root layout's <main> adds
             */}
            <style>{`
                /* Hide global header & footer on this landing page */
                [data-landing-v3] ~ * { display: none !important; }
                body:has([data-landing-v3]) > header,
                body:has([data-landing-v3]) > footer,
                body:has([data-landing-v3]) > main > header,
                body:has([data-landing-v3]) > main > footer {
                    display: none !important;
                }
                /* Remove any top margin added by root layout's main */
                body:has([data-landing-v3]) > main {
                    padding: 0 !important;
                    margin: 0 !important;
                }
            `}</style>

            {/* Minimal landing header: logo + Quick Quote only */}
            <HeaderLanding />

            {/* Page sections */}
            {children}
        </div>
    );
}
