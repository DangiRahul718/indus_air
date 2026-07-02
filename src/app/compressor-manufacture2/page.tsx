import dynamic from 'next/dynamic';
import HeroV3 from '@/components/sections-v3/HeroV3';

// Dynamic imports for below-the-fold components
const PainPoints = dynamic(() => import('@/components/sections-v3/PainPoints'));
const UspV3 = dynamic(() => import('@/components/sections-v3/UspV3'));
const TrustV3 = dynamic(() => import('@/components/sections-v3/TrustV3'));
const EnergySavingV3 = dynamic(() => import('@/components/sections-v3/EnergySavingV3'));
const OurProductsV3 = dynamic(() => import('@/components/sections-v3/OurProductsV3'));
const HowItWorksV3 = dynamic(() => import('@/components/sections-v3/HowItWorksV3'));
const IndustriesServedV3 = dynamic(() => import('@/components/sections-v3/IndustriesServedV3'));
const ContactV3 = dynamic(() => import('@/components/sections-v3/ContactV3'));

export default function CompressorManufacturerPage2() {
    return (
        <>
            <HeroV3 />
            <PainPoints />
            <UspV3 />
            <TrustV3 />
            <EnergySavingV3 />
            <OurProductsV3 />
            <HowItWorksV3 />
            <IndustriesServedV3 />
            <ContactV3 />
        </>
    );
}


