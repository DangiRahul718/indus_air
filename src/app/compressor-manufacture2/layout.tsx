import type { Metadata } from 'next';
import HeaderLanding from '@/components/sections-v3/HeaderLanding';
import MobileMotionProvider from '@/components/ui/MobileMotionProvider';

export const metadata: Metadata = {
    title: 'Industrial Air Compressor in Ahmedabad | Indus Air Compressor',
    description:
        'ISO-certified industrial air compressor manufacturer in Ahmedabad, Gujarat. Direct-factory pricing on high-efficiency screw air compressors, oil-free models, and 24/7 service backup.',
    keywords:
        'industrial air compressor Ahmedabad, air compressor manufacturer Gujarat, screw air compressor Ahmedabad, factory-direct compressor pricing, Indus Air',
    alternates: {
        canonical: 'https://www.indusaircompressor.com/industrial-air-compressor-ahmedabad',
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
        title: 'Industrial Air Compressor in Ahmedabad | Indus Air Compressor',
        description:
            'ISO-certified industrial air compressor manufacturer in Ahmedabad, Gujarat. Direct-factory pricing on high-efficiency screw air compressors, oil-free models, and 24/7 service backup.',
        url: 'https://www.indusaircompressor.com/industrial-air-compressor-ahmedabad',
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
        title: 'Industrial Air Compressor in Ahmedabad | Indus Air Compressor',
        description:
            'ISO-certified industrial air compressor manufacturer in Ahmedabad, Gujarat. Direct-factory pricing on high-efficiency screw air compressors, oil-free models, and 24/7 service backup.',
        images: ['https://www.indusaircompressor.com/logo.jpeg'],
    },
};

export default function LandingLayout({
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

    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'Indus Air Compressor',
        'image': 'https://www.indusaircompressor.com/logo.jpeg',
        'telephone': '+918401242943',
        'url': 'https://www.indusaircompressor.com/industrial-air-compressor-ahmedabad',
        'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Naroda Road',
            'addressLocality': 'Ahmedabad',
            'addressRegion': 'Gujarat',
            'postalCode': '382330',
            'addressCountry': 'IN'
        },
        'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 23.0645,
            'longitude': 72.6379
        },
        'openingHoursSpecification': {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            'opens': '00:00',
            'closes': '23:59'
        }
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
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
                'name': 'Do you supply compressors in Vatva GIDC?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes, industrial air compressors are supplied in Vatva GIDC and other major industrial areas of Ahmedabad.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Do you provide compressor maintenance services?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes, compressor maintenance, servicing, spare parts support, and AMC services are available.'
                }
            }
        ]
    };

    return (
        <div data-landing-v3>
            {/* Scoped CSS for overflow prevention and header/footer overrides */}
            <style>{`
                [data-landing-v3] {
                    overflow-x: hidden;
                    position: relative;
                    width: 100%;
                }
                [data-landing-v3] ~ * { display: none !important; }
                body:has([data-landing-v3]) > header,
                body:has([data-landing-v3]) > footer,
                body:has([data-landing-v3]) > main > header,
                body:has([data-landing-v3]) > main > footer {
                    display: none !important;
                }
                body:has([data-landing-v3]) > main {
                    padding: 0 !important;
                    margin: 0 !important;
                }
            `}</style>

            {/* Structured Data Scripts */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Minimal landing header: logo + Quick Quote only */}
            <HeaderLanding />

            {/* Page sections */}
            <MobileMotionProvider>
                {children}
            </MobileMotionProvider>
        </div>
    );
}
