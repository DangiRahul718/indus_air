export interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    gallery?: string[];
    features?: string[];
    specifications?: Record<string, string>;
    applications?: string[];
}

// Products data with full content from Data Summary
export const products: Product[] = [
    {
        id: 'screw-air-compressor',
        name: 'Screw Air Compressor',
        description: 'High-performance rotary screw air compressors for industrial applications with superior efficiency and reliability.',
        image: '/products/screw-air-compressor/1.png',
        category: 'oil-injected',
        gallery: [
            '/products/screw-air-compressor/1.png',
            '/products/screw-air-compressor/2.png',
            '/products/screw-air-compressor/3.png',
            '/products/screw-air-compressor/4.png',
            '/products/screw-air-compressor/5.png',
        ],
        features: ['High Efficiency Motor', 'Low Noise Operation', 'Energy Saving Design', 'Easy Maintenance', 'Variable Frequency Drive Available'],
        specifications: {
            model: 'SLT-7.5F to SLT-75F',
            power: '7.5kW - 75kW',
            pressure: '7-13 bar',
            capacity: '1.0-14 m³/min',
            noise: '68 ± 2 dB(A)',
            cooling: 'Air Cooled',
        },
        applications: ['Manufacturing', 'Automotive', 'Construction', 'Pharmaceutical'],
    },
    {
        id: 'diesel-compressor',
        name: 'Diesel Portable Compressor',
        description: 'Mobile diesel-powered compressors for outdoor and remote locations, ideal for construction and mining.',
        image: '/products/diesel-compressor/1.png',
        category: 'portable',
        gallery: [
            '/products/diesel-compressor/1.png',
            '/products/diesel-compressor/2.png',
            '/products/diesel-compressor/3.png',
            '/products/diesel-compressor/4.png',
            '/products/diesel-compressor/5.png',
        ],
        features: ['Diesel Engine Powered', 'Portable Design', 'Heavy Duty Construction', 'All-Weather Operation', 'Easy Transport'],
        specifications: {
            model: 'SLTDP Series',
            power: '92kW - 132kW',
            pressure: '7-15 bar',
            capacity: '12-17 m³/min',
            noise: '75 ± 2 dB(A)',
            cooling: 'Air Cooled',
        },
        applications: ['Construction', 'Mining', 'Road Works', 'Demolition'],
    },
    {
        id: 'oil-free-compressor',
        name: 'Oil-Free Compressor',
        description: 'Clean, oil-free compressed air for sensitive applications in pharmaceutical, food, and electronics industries.',
        image: '/products/oil-free-compressor/1.png',
        category: 'oil-free',
        gallery: [
            '/products/oil-free-compressor/1.png',
            '/products/oil-free-compressor/2.png',
            '/products/oil-free-compressor/3.png',
            '/products/oil-free-compressor/5.png',
        ],
        features: ['100% Oil-Free Air', 'Class 0 Certification', 'Water Lubricated', 'Low Maintenance', 'Quiet Operation'],
        specifications: {
            model: 'Oil-Free Series',
            power: '3kW - 15kW+',
            pressure: '7-10 bar',
            capacity: 'Varies by model',
            noise: '65 ± 2 dB(A)',
            cooling: 'Air/Water Cooled',
        },
        applications: ['Pharmaceutical', 'Food & Beverage', 'Electronics', 'Medical'],
    },
    {
        id: 'nitrogen-generator',
        name: 'Nitrogen Generator',
        description: 'Industrial nitrogen generators providing high-purity nitrogen for various applications.',
        image: '/products/nitrogen-generator/1.png',
        category: 'specialty',
        gallery: [
            '/products/nitrogen-generator/1.png',
            '/products/nitrogen-generator/4.png',
        ],
        features: ['High Purity Nitrogen', 'Continuous Operation', 'Low Operating Cost', 'Easy Installation', 'Automatic Control'],
        specifications: {
            model: 'Nitrogen Generator Series',
            power: 'Varies by model',
            pressure: '0.1-0.8 MPa',
            capacity: 'Varies by model',
            purity: 'Up to 99.999%',
            technology: 'PSA Technology',
        },
        applications: ['Food Packaging', 'Electronics Manufacturing', 'Pharmaceutical', 'Chemical Industry'],
    },
    {
        id: 'receiver-tank',
        name: 'Air Receiver Tank',
        description: 'High-quality air receiver tanks for compressed air storage and pressure stabilization.',
        image: '/products/receiver-tank/2jpg.png',
        category: 'specialty',
        gallery: [
            '/products/receiver-tank/2jpg.png',
            '/products/receiver-tank/3pg.png',
            '/products/receiver-tank/4jpg.png',
            '/products/receiver-tank/5jpg.png',
        ],
        features: ['High Pressure Rating', 'Corrosion Resistant', 'Safety Valve Included', 'Pressure Gauge', 'Drain Valve'],
        specifications: {
            model: 'Receiver Tank Series',
            power: 'N/A',
            pressure: '8-16 bar',
            capacity: 'Various sizes',
            material: 'Carbon Steel',
            certification: 'CE Certified',
        },
        applications: ['Industrial Plants', 'Manufacturing', 'Automotive', 'General Industry'],
    },
    {
        id: '4-in-1-air-compressor',
        name: '4-in-1 Air Compressor',
        description: 'All-in-one integrated compressor solution with dryer, filter, and tank for laser cutting and workshops.',
        image: '/products/4-in-1-air-compressor/1.png',
        category: 'oil-injected',
        gallery: [
            '/products/4-in-1-air-compressor/1.png',
            '/products/4-in-1-air-compressor/2.png',
            '/products/4-in-1-air-compressor/4.png',
        ],
        features: ['All-in-One Design', 'Space Saving', 'Easy Installation', 'Integrated Air Dryer', 'Built-in Air Tank'],
        specifications: {
            model: '4-in-1 Series',
            power: '7.5kW - 15kW',
            pressure: '7-10 bar',
            capacity: 'Varies by model',
            noise: '68 ± 2 dB(A)',
            cooling: 'Air Cooled',
        },
        applications: ['Laser Cutting', 'Small Workshops', 'Limited Space Installations', 'Manufacturing'],
    },
    {
        id: 'air-dryer',
        name: 'Air Dryer',
        description: 'Industrial air dryers for moisture removal from compressed air systems.',
        image: '/products/air-dryer/1.6m3/1.6-1.png',
        category: 'specialty',
        gallery: [
            '/products/air-dryer/1.6m3/1.6-1.png',
            '/products/air-dryer/1.6m3/1.6-2.png',
            '/products/air-dryer/1.6m3/1.6-3.png',
            '/products/air-dryer/1.6m3/1.6-4.png'
        ],
        features: ['Low Dew Point', 'Energy Efficient', 'Automatic Operation', 'Low Pressure Drop', 'Reliable Performance'],
        specifications: {
            model: 'Air Dryer Series',
            power: 'Various',
            pressure: 'Up to 16 bar',
            capacity: '1.2 - 45+ m³/min',
            type: 'Refrigerated/Desiccant',
            cooling: 'Air Cooled',
        },
        applications: ['Manufacturing', 'Painting', 'Pneumatic Tools', 'Instrumentation'],
    },
    {
        id: 'air-dryer-1-6m',
        name: '1.6m³ Air Dryer',
        description: '1.6m³ Capacity Industrial Air Dryer for moisture removal.',
        image: '/products/air-dryer/1.6m3/1.6-1.png',
        category: 'air-dryer',
        gallery: [
            '/products/air-dryer/1.6m3/1.6-1.png',
            '/products/air-dryer/1.6m3/1.6-2.png',
            '/products/air-dryer/1.6m3/1.6-3.png',
            '/products/air-dryer/1.6m3/1.6-4.png'
        ],
        features: ['1.6m³/min Capacity', 'Low Dew Point', 'Energy Efficient', 'Reliable Performance'],
        specifications: {
            model: 'AD-1.6',
            capacity: '1.6 m³/min',
            pressure: 'Up to 16 bar',
            cooling: 'Air Cooled',
        },
        applications: ['Manufacturing', 'Painting', 'Pneumatic Tools', 'Instrumentation'],
    },
    {
        id: 'air-dryer-2-6m',
        name: '2.6m³ Air Dryer',
        description: '2.6m³ Capacity Industrial Air Dryer for moisture removal.',
        image: '/products/air-dryer/2.6m3/1 (1).png',
        category: 'air-dryer',
        gallery: [
            '/products/air-dryer/2.6m3/1 (1).png',
            '/products/air-dryer/2.6m3/1 (2).png',
            '/products/air-dryer/2.6m3/1 (3).png',
            '/products/air-dryer/2.6m3/1(4).png',
            '/products/air-dryer/2.6m3/1(5).png',
            '/products/air-dryer/2.6m3/1(6).png'
        ],
        features: ['2.6m³/min Capacity', 'Low Dew Point', 'Energy Efficient', 'Reliable Performance'],
        specifications: {
            model: 'AD-2.6',
            capacity: '2.6 m³/min',
            pressure: 'Up to 16 bar',
            cooling: 'Air Cooled',
        },
        applications: ['Manufacturing', 'Painting', 'Pneumatic Tools', 'Instrumentation'],
    },
    {
        id: 'air-dryer-6-5m',
        name: '6.5m³ Air Dryer',
        description: '6.5m³ Capacity Industrial Air Dryer for moisture removal.',
        image: '/products/air-dryer/6.5m3/gallery/6.5-1-.png',
        category: 'air-dryer',
        gallery: [
            '/products/air-dryer/6.5m3/gallery/6.5-1-.png',
            '/products/air-dryer/6.5m3/gallery/6.5-2-.png',
            '/products/air-dryer/6.5m3/gallery/6.5-3-.png',
            '/products/air-dryer/6.5m3/gallery/6.5-4-.png',
            '/products/air-dryer/6.5m3/gallery/1.png',
            '/products/air-dryer/6.5m3/gallery/2.png',
            '/products/air-dryer/6.5m3/gallery/3.png',
            '/products/air-dryer/6.5m3/gallery/4.png'
        ],
        features: ['6.5m³/min Capacity', 'Low Dew Point', 'Energy Efficient', 'Reliable Performance'],
        specifications: {
            model: 'AD-6.5',
            capacity: '6.5 m³/min',
            pressure: 'Up to 16 bar',
            cooling: 'Air Cooled',
        },
        applications: ['Manufacturing', 'Painting', 'Pneumatic Tools', 'Instrumentation'],
    },
    {
        id: 'air-dryer-8-5m',
        name: '8.5m³ Air Dryer',
        description: '8.5m³ Capacity Industrial Air Dryer for moisture removal.',
        image: '/products/air-dryer/8.5m3/gallery/1.png',
        category: 'air-dryer',
        gallery: [
            '/products/air-dryer/8.5m3/gallery/1.png',
            '/products/air-dryer/8.5m3/gallery/2.png',
            '/products/air-dryer/8.5m3/gallery/3.png',
            '/products/air-dryer/8.5m3/gallery/4.png',
            '/products/air-dryer/8.5m3/gallery/5.png',
            '/products/air-dryer/8.5m3/gallery/6.png'
        ],
        features: ['8.5m³/min Capacity', 'Low Dew Point', 'Energy Efficient', 'Reliable Performance'],
        specifications: {
            model: 'AD-8.5',
            capacity: '8.5 m³/min',
            pressure: 'Up to 16 bar',
            cooling: 'Air Cooled',
        },
        applications: ['Manufacturing', 'Painting', 'Pneumatic Tools', 'Instrumentation'],
    },
    {
        id: 'air-dryer-11-5m',
        name: '11.5m³ Air Dryer',
        description: '11.5m³ Capacity Industrial Air Dryer for moisture removal.',
        image: '/products/air-dryer/11.5m3/gallery/1.png',
        category: 'air-dryer',
        gallery: [
            '/products/air-dryer/11.5m3/gallery/1.png',
            '/products/air-dryer/11.5m3/gallery/2.png',
            '/products/air-dryer/11.5m3/gallery/3.png',
            '/products/air-dryer/11.5m3/gallery/4.png',
            '/products/air-dryer/11.5m3/gallery/5.png',
            '/products/air-dryer/11.5m3/gallery/6.png',
            '/products/air-dryer/11.5m3/gallery/7.png'
        ],
        features: ['11.5m³/min Capacity', 'Low Dew Point', 'Energy Efficient', 'Reliable Performance'],
        specifications: {
            model: 'AD-11.5',
            capacity: '11.5 m³/min',
            pressure: 'Up to 16 bar',
            cooling: 'Air Cooled',
        },
        applications: ['Manufacturing', 'Painting', 'Pneumatic Tools', 'Instrumentation'],
    },
    {
        id: 'air-dryer-13-5m',
        name: '13.5m³ Air Dryer',
        description: '13.5m³ Capacity Industrial Air Dryer for moisture removal.',
        image: '/products/air-dryer/13.5m3/gallery/1.png',
        category: 'air-dryer',
        gallery: [
            '/products/air-dryer/13.5m3/gallery/1.png',
            '/products/air-dryer/13.5m3/gallery/2.png',
            '/products/air-dryer/13.5m3/gallery/3.png',
            '/products/air-dryer/13.5m3/gallery/4.png',
            '/products/air-dryer/13.5m3/gallery/5.png',
            '/products/air-dryer/13.5m3/gallery/6.png',
            '/products/air-dryer/13.5m3/gallery/7.png'
        ],
        features: ['13.5m³/min Capacity', 'Low Dew Point', 'Energy Efficient', 'Reliable Performance'],
        specifications: {
            model: 'AD-13.5',
            capacity: '13.5 m³/min',
            pressure: 'Up to 16 bar',
            cooling: 'Air Cooled',
        },
        applications: ['Manufacturing', 'Painting', 'Pneumatic Tools', 'Instrumentation'],
    },
    {
        id: 'air-dryer-18-5m',
        name: '18.5m³ Air Dryer',
        description: '18.5m³ Capacity Industrial Air Dryer for moisture removal.',
        image: '/products/air-dryer/18.5m3/gallery/1.png',
        category: 'air-dryer',
        gallery: [
            '/products/air-dryer/18.5m3/gallery/1.png',
            '/products/air-dryer/18.5m3/gallery/2.png',
            '/products/air-dryer/18.5m3/gallery/3.png',
            '/products/air-dryer/18.5m3/gallery/4.png',
            '/products/air-dryer/18.5m3/gallery/6.png',
            '/products/air-dryer/18.5m3/gallery/7.png',
            '/products/air-dryer/18.5m3/gallery/8.png',
            '/products/air-dryer/18.5m3/gallery/9.png'
        ],
        features: ['18.5m³/min Capacity', 'Low Dew Point', 'Energy Efficient', 'Reliable Performance'],
        specifications: {
            model: 'AD-18.5',
            capacity: '18.5 m³/min',
            pressure: 'Up to 16 bar',
            cooling: 'Air Cooled',
        },
        applications: ['Manufacturing', 'Painting', 'Pneumatic Tools', 'Instrumentation'],
    },
    {
        id: 'air-dryer-35m',
        name: '35m³ Air Dryer',
        description: '35m³ Capacity Industrial Air Dryer for moisture removal.',
        image: '/products/air-dryer/35m3/gallery/1.png',
        category: 'air-dryer',
        gallery: [
            '/products/air-dryer/35m3/gallery/1.png',
            '/products/air-dryer/35m3/gallery/2.png',
            '/products/air-dryer/35m3/gallery/3.png',
            '/products/air-dryer/35m3/gallery/4.png',
            '/products/air-dryer/35m3/gallery/5.png',
            '/products/air-dryer/35m3/gallery/6.png',
            '/products/air-dryer/35m3/gallery/7.png',
            '/products/air-dryer/35m3/gallery/8.png',
            '/products/air-dryer/35m3/gallery/9.png',
            '/products/air-dryer/35m3/gallery/10.png'
        ],
        features: ['35m³/min Capacity', 'Low Dew Point', 'Energy Efficient', 'Reliable Performance'],
        specifications: {
            model: 'AD-35',
            capacity: '35 m³/min',
            pressure: 'Up to 16 bar',
            cooling: 'Air Cooled',
        },
        applications: ['Manufacturing', 'Painting', 'Pneumatic Tools', 'Instrumentation'],
    },
    {
        id: 'air-dryer-45m',
        name: '45m³ Air Dryer',
        description: '45m³ Capacity Industrial Air Dryer for moisture removal.',
        image: '/products/air-dryer/45m3/gallery/IMG_20250303_085647-.png',
        category: 'air-dryer',
        gallery: [
            '/products/air-dryer/45m3/gallery/IMG_20250303_085647-.png',
            '/products/air-dryer/45m3/gallery/IMG_20250303_085647=.png',
            '/products/air-dryer/45m3/gallery/IMG_20250303_090200-.png',
            '/products/air-dryer/45m3/gallery/IMG_20250303_090200=.png',
            '/products/air-dryer/45m3/gallery/IMG_20250303_090441-.png',
            '/products/air-dryer/45m3/gallery/IMG_20250303_090441=.png',
            '/products/air-dryer/45m3/gallery/IMG_20250303_090600-.png',
            '/products/air-dryer/45m3/gallery/IMG_20250303_090600=.png',
            '/products/air-dryer/45m3/gallery/IMG_20250303_090621-.png',
            '/products/air-dryer/45m3/gallery/IMG_20250303_090621=.png'
        ],
        features: ['45m³/min Capacity', 'Low Dew Point', 'Energy Efficient', 'Reliable Performance'],
        specifications: {
            model: 'AD-45',
            capacity: '45 m³/min',
            pressure: 'Up to 16 bar',
            cooling: 'Air Cooled',
        },
        applications: ['Manufacturing', 'Painting', 'Pneumatic Tools', 'Instrumentation'],
    },
    {
        id: '4-in-1-7-5kw',
        name: '7.5KW 4-in-1 Air Compressor',
        description: 'Integrated 7.5KW compressor solution with dryer and tank.',
        image: '/products/4-in-1-air-compressor/7.5kw/1.png',
        category: '4-in-1-air-compressor',
        gallery: [
            '/products/4-in-1-air-compressor/7.5kw/1.png',
            '/products/4-in-1-air-compressor/7.5kw/2.png',
            '/products/4-in-1-air-compressor/7.5kw/3.png',
            '/products/4-in-1-air-compressor/7.5kw/4.png'
        ],
        features: ['7.5KW Power', 'Integrated Design', 'Space Saving', 'Easy Installation'],
        specifications: {
            model: '4IN1-7.5',
            power: '7.5kW (10HP)',
            pressure: '8-10 bar',
            contact: 'Inquire for details'
        },
        applications: ['Laser Cutting', 'Workshops', 'Small Manufacturing']
    },
    {
        id: '4-in-1-22kw',
        name: '22KW 4-in-1 Air Compressor',
        description: 'Powerful 22KW integrated compressor system for industrial use.',
        image: '/products/4-in-1-air-compressor/22kw/1.png',
        category: '4-in-1-air-compressor',
        gallery: [
            '/products/4-in-1-air-compressor/22kw/1.png',
            '/products/4-in-1-air-compressor/22kw/2.png',
            '/products/4-in-1-air-compressor/22kw/3.png',
            '/products/4-in-1-air-compressor/22kw/4.png'
        ],
        features: ['22KW Power', 'High Capacity', 'Integrated System', 'Industrial Grade'],
        specifications: {
            model: '4IN1-22',
            power: '22kW (30HP)',
            pressure: '8-10 bar',
            contact: 'Inquire for details'
        },
        applications: ['Medium Industry', 'Manufacturing Plants', 'Laser Cutting']
    },
];

// Product categories
export const productCategories = [
    { id: 'screw-air-compressor', name: 'Rotary Screw Air Compressor', icon: '⚙️' },
    { id: 'diesel-compressor', name: 'Diesel Air Compressor', icon: '🚛' },
    { id: 'oil-free-compressor', name: 'Oil Free Air Compressor', icon: '💨' },
    {
        id: '4-in-1-air-compressor',
        name: '4-in-1 Air Compressor',
        icon: '⚡',
        subCategories: [
            { id: '4-in-1-7-5kw', name: '7.5KW' },
            { id: '4-in-1-22kw', name: '22KW' }
        ]
    },
    { id: 'nitrogen-generator', name: 'Nitrogen Generator', icon: '⚗️' },
    { id: 'receiver-tank', name: 'Air Receiver Tank', icon: '🔋' },
    {
        id: 'air-dryer',
        name: 'Air Dryer',
        icon: '🌡️',
        subCategories: [
            { id: 'air-dryer-1-6m', name: '1.6m³' },
            { id: 'air-dryer-2-6m', name: '2.6m³' },
            { id: 'air-dryer-6-5m', name: '6.5m³' },
            { id: 'air-dryer-8-5m', name: '8.5m³' },
            { id: 'air-dryer-11-5m', name: '11.5m³' },
            { id: 'air-dryer-13-5m', name: '13.5m³' },
            { id: 'air-dryer-18-5m', name: '18.5m³' },
            { id: 'air-dryer-35m', name: '35m³' },
            { id: 'air-dryer-45m', name: '45m³' },
        ]
    },
];

// Benefits/Why Choose Us
export const benefits = [
    { icon: '🏭', stat: '15,000', title: 'm² Production Workshop', description: 'State-of-the-art manufacturing facility' },
    { icon: '✅', stat: 'ISO', title: '9001:2000 Certification', description: 'International quality standards' },
    { icon: '🔧', stat: '4', title: 'Air Compressor Production Lines', description: 'Dedicated production capacity' },
    { icon: '📞', stat: '24/7', title: 'Engineer After-Sales Service', description: 'Round-the-clock technical support' },
    { icon: '💰', stat: '100%', title: 'Competitive Price & Quality', description: 'Best value for your investment' },
    { icon: '🌍', stat: '5+', title: 'Years Experience', description: 'Trusted by clients worldwide' },
    { icon: '🚀', stat: 'New', title: 'Continuous Development', description: 'Innovation-driven product updates' },
];

// Applications
export const applications = [
    { id: 1, title: 'Manufacturing', image: '/images/gallery/manufacturing-usa.png' },
    { id: 2, title: 'Construction', image: '/images/gallery/construction-uae.png' },
    { id: 3, title: 'Mining', image: '/images/gallery/mining-south-africa.png' },
    { id: 4, title: 'Pharmaceutical', image: '/images/gallery/pharma-germany.png' },
    { id: 5, title: 'Food & Beverage', image: '/images/gallery/food-australia.png' },
    { id: 6, title: 'Automotive', image: '/images/gallery/automotive-mexico.png' },
    { id: 7, title: 'Textile', image: '/images/gallery/textile-india.png' },
    { id: 8, title: 'Electronics', image: '/images/gallery/electronics-japan.png' },
];

// Testimonials
export const testimonials = [
    {
        id: 1,
        text: 'Indus Air compressors have been running flawlessly in our factory for over 5 years. The energy efficiency and reliability are exceptional. Their after-sales service is prompt and professional.',
        author: 'Michael Johnson',
        role: 'Factory Manager, USA',
        image: '/images/testimonials/client1.jpg',
    },
    {
        id: 2,
        text: 'We switched to Indus Air compressors last year and have seen a 30% reduction in energy costs. The quality is outstanding and the technical support team is always available when needed.',
        author: 'Ahmed Hassan',
        role: 'Operations Director, UAE',
        image: '/images/testimonials/client2.jpg',
    },
    {
        id: 3,
        text: 'As a distributor, I have been working with Indus Air for over 5 years. Their products are reliable, competitively priced, and the partnership has been excellent for our business growth.',
        author: 'Carlos Rodriguez',
        role: 'CEO, Spain',
        image: '/images/testimonials/client3.jpg',
    },
    {
        id: 4,
        text: 'The oil-free compressors from Indus Air are perfect for our pharmaceutical production. Zero contamination risk and consistent performance. Highly recommended for clean room applications.',
        author: 'Dr. Sarah Chen',
        role: 'Production Head, Singapore',
        image: '/images/testimonials/client4.jpg',
    },
];

// Blog posts
export const blogPosts = [
    {
        id: 1,
        title: 'How to Choose the Right Air Compressor for Your Business',
        excerpt: 'Learn the key factors to consider when selecting an industrial air compressor for your specific needs.',
        image: '/images/blog/post1.jpg',
        date: '2024-01-15',
        slug: 'choose-right-air-compressor',
    },
    {
        id: 2,
        title: 'Variable Speed vs Fixed Speed: Which is Better?',
        excerpt: 'Compare VSD and fixed speed compressors to understand which one offers better value for your application.',
        image: '/images/blog/post2.jpg',
        date: '2024-01-10',
        slug: 'vsd-vs-fixed-speed',
    },
    {
        id: 3,
        title: 'Complete Guide to Air Compressor Maintenance',
        excerpt: 'Essential maintenance tips to keep your air compressor running efficiently and extend its lifespan.',
        image: '/images/blog/post3.jpg',
        date: '2024-01-05',
        slug: 'air-compressor-maintenance-guide',
    },
    {
        id: 4,
        title: 'Top 10 Benefits of Oil-Free Air Compressors',
        excerpt: 'Discover why oil-free compressors are essential for pharmaceutical and food industries.',
        image: '/images/blog/post4.jpg',
        date: '2024-01-01',
        slug: 'benefits-oil-free-compressors',
    },
    {
        id: 5,
        title: 'Understanding Air Compressor Energy Efficiency',
        excerpt: 'Learn how to reduce energy costs and improve the efficiency of your compressed air system.',
        image: '/images/blog/post5.jpg',
        date: '2023-12-28',
        slug: 'energy-efficiency-guide',
    },
    {
        id: 6,
        title: 'How to Import Air Compressors from India',
        excerpt: 'Step-by-step guide to importing industrial equipment from Indian manufacturers.',
        image: '/images/blog/post6.jpg',
        date: '2023-12-20',
        slug: 'import-from-india-guide',
    },
];

// FAQs
export const faqs = [
    {
        question: 'Which is the best air compressor for textile industries?',
        answer: 'Rotary screw air compressors are best for textile industries due to continuous airflow, energy efficiency, and stable performance.',
    },
    {
        question: 'Do you provide air compressor installation in Ahmedabad?',
        answer: 'Yes, complete air compressor installation services are available across Ahmedabad and nearby industrial areas.',
    },
    {
        question: 'Which compressor is best for pharma industries?',
        answer: 'Oil-free air compressors are ideal for pharma industries because they provide clean and contamination-free compressed air.',
    },
    {
        question: 'Do you provide compressor maintenance services?',
        answer: 'Yes, compressor maintenance, servicing, spare parts support, and AMC services are available.',
    },
    {
        question: 'What industries use screw air compressors?',
        answer: 'Screw air compressors are widely used in textile, pharma, engineering, automobile, packaging, and manufacturing industries.',
    },
    {
        question: 'Do you supply compressors in Vatva GIDC?',
        answer: 'Yes, industrial air compressors are supplied in Vatva GIDC and other major industrial areas of Ahmedabad.',
    },
];

// Team members
export const teamMembers = [
    {
        name: 'Digvijaysinh zala',
    },
    {
        name: 'vijayrajsinh Zala',
    },
    {
        name: 'shivpalsinh Zala',
    },
];

// Quality control measures
export const qualityMeasures = [
    'Vibration Test',
    'Pressure Dew Point Detection',
    'Temperature And Humidity Detection',
    'Balance Test',
    'Exhaust Pressure Test',
    'Measure Exhaust Flow',
    'Motor Type Test',
    'Oil Content Detection',
    'Inlet Flow Measurement',
    'Pipeline Flow Measurement',
    'Specific Power Measurement',
    'Air End Rotor Profile Measurement',
    'Dynamic Balance Test',
    'Total Power Measurement',
    'Shock Absorber Testing',
    'Voltage And Current Detection',
];

// Core values
export const coreValues = [
    {
        title: 'Passion and Innovation',
        description: 'We continuously invest in R&D to develop cutting-edge air compressor technology that meets evolving industry needs.',
    },
    {
        title: 'Customer Focus',
        description: 'Our customers success is our success. We provide personalized solutions and exceptional support to help businesses thrive.',
    },
    {
        title: 'People Centredness',
        description: 'We value our employees and partners, fostering a collaborative environment that promotes growth and excellence.',
    },
    {
        title: 'Integrity',
        description: 'We conduct business with honesty and transparency, building long-lasting relationships based on trust and mutual respect.',
    },
];

// Production process steps
export const productionSteps = [
    {
        step: 1,
        title: 'Purchase Accessories',
        description: 'Source high-quality components from certified suppliers worldwide.',
    },
    {
        step: 2,
        title: 'Re-inspect Accessories',
        description: 'Thorough quality inspection of all incoming materials and parts.',
    },
    {
        step: 3,
        title: 'Assembly Equipment',
        description: 'Precision assembly by skilled technicians following strict protocols.',
    },
    {
        step: 4,
        title: 'Testing Before Shipment',
        description: 'Comprehensive performance and safety testing of every unit.',
    },
    {
        step: 5,
        title: 'Packaging',
        description: 'Professional packaging to ensure safe transportation.',
    },
    {
        step: 6,
        title: 'Delivery and Shipment',
        description: 'Reliable logistics partners for timely worldwide delivery.',
    },
];

// Countries list for form
export const countries = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'Italy',
    'Spain',
    'Brazil',
    'Mexico',
    'India',
    'China',
    'Japan',
    'South Korea',
    'Singapore',
    'Malaysia',
    'Indonesia',
    'Thailand',
    'Vietnam',
    'Philippines',
    'UAE',
    'Saudi Arabia',
    'South Africa',
    'Nigeria',
    'Egypt',
    'Russia',
    'Turkey',
    'Poland',
    'Netherlands',
    'Belgium',
    'Other',
];

// Project Gallery
export const projectGallery = [
    { id: 1, title: 'Manufacturing Plant - USA', category: 'Industrial', image: '/images/gallery/manufacturing-usa.png' },
    { id: 2, title: 'Construction Site - UAE', category: 'Construction', image: '/images/gallery/construction-uae.png' },
    { id: 3, title: 'Pharmaceutical Factory - Germany', category: 'Pharmaceutical', image: '/images/gallery/pharma-germany.png' },
    { id: 4, title: 'Food Processing - Australia', category: 'Food & Beverage', image: '/images/gallery/food-australia.png' },
    { id: 5, title: 'Mining Operation - South Africa', category: 'Mining', image: '/images/gallery/mining-south-africa.png' },
    { id: 6, title: 'Automotive Plant - Mexico', category: 'Automotive', image: '/images/gallery/automotive-mexico.png' },
    { id: 7, title: 'Textile Factory - India', category: 'Textile', image: '/images/gallery/textile-india.png' },
    { id: 8, title: 'Electronics Factory - Japan', category: 'Electronics', image: '/images/gallery/electronics-japan.png' },
    { id: 9, title: 'Oil & Gas - Saudi Arabia', category: 'Energy', image: '/images/gallery/oil-gas-saudi.png' },

    { id: 11, title: 'Steel Mill - China', category: 'Industrial', image: '/images/gallery/steel-china.png' },
    { id: 12, title: 'Cement Factory - Egypt', category: 'Construction', image: '/images/gallery/cement-egypt.png' },
];
