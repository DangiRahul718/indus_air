import type { Metadata } from 'next';
import FooterLanding from '@/components/sections-v2/FooterLanding';

export const metadata: Metadata = {
    title: 'Industrial Air Compressor Manufacturer | Indus Air Compressor',
    description:
        'Leading air compressor manufacturer offering energy-efficient rotary screw air compressors, oil-free compressors, receiver tanks, and customized OEM utility solutions.',
    keywords:
        'air compressor manufacturer, industrial air compressor, screw air compressor, oil-free compressor, rotary screw compressor, air dryer, Indus Air',
    alternates: {
        canonical: 'https://www.indusaircompressor.com/compressor-manufacturer',
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        title: 'Industrial Air Compressor Manufacturer | Indus Air Compressor',
        description:
            'Leading air compressor manufacturer offering energy-efficient rotary screw air compressors, oil-free compressors, receiver tanks, and customized OEM utility solutions.',
        url: 'https://www.indusaircompressor.com/compressor-manufacturer',
        siteName: 'Indus Air Compressor',
        locale: 'en_IN',
        type: 'website',
        images: [
            {
                url: 'https://www.indusaircompressor.com/logo.jpeg',
                width: 800,
                height: 600,
                alt: 'Indus Air Compressor Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Industrial Air Compressor Manufacturer | Indus Air Compressor',
        description:
            'Leading air compressor manufacturer offering energy-efficient rotary screw air compressors, oil-free compressors, receiver tanks, and customized OEM utility solutions.',
        images: ['https://www.indusaircompressor.com/logo.jpeg'],
    },
};

export default function LandingV1Layout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Indus Air Compressor',
        'url': 'https://www.indusaircompressor.com',
        'logo': 'https://www.indusaircompressor.com/logo.jpeg',
        'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+918401242943',
            'contactType': 'sales',
            'areaServed': 'IN',
            'availableLanguage': ['en', 'hi', 'gu']
        }
    };

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Indus Screw Air Compressor',
        'image': 'https://www.indusaircompressor.com/products/screw-air-compressor/1.png',
        'description': 'High-efficiency industrial rotary screw air compressor designed for continuous operation in Indian factories.',
        'brand': {
            '@type': 'Brand',
            'name': 'Indus Air'
        },
        'offers': {
            '@type': 'AggregateOffer',
            'priceCurrency': 'INR',
            'lowPrice': '150000',
            'highPrice': '1200000',
            'offerCount': '10'
        }
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'Which is the best air compressor for textile industries?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Rotary screw air compressors are best for textile industries due to continuous airflow, energy efficiency, and stable performance.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Do you provide air compressor installation in Ahmedabad?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes, complete air compressor installation services are available across Ahmedabad and nearby industrial areas.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Which compressor is best for pharma industries?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Oil-free air compressors are ideal for pharma industries because they provide clean and contamination-free compressed air.'
                }
            }
        ]
    };

    return (
        <div data-landing-v1>
            {/* Scoped CSS for overflow prevention and footer hiding */}
            <style>{`
                [data-landing-v1] {
                    overflow-x: hidden;
                    position: relative;
                    width: 100%;
                }
                body:has([data-landing-v1]) > footer,
                body:has([data-landing-v1]) > main > footer {
                    display: none !important;
                }
            `}</style>
            
            {/* Structured Data Scripts */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Page Content */}
            {children}
            
            {/* Display-only non-clickable footer */}
            <FooterLanding />
        </div>
    );
}
