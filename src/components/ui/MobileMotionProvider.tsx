'use client';

import { useState, useEffect } from 'react';
import { MotionConfig } from 'framer-motion';

export default function MobileMotionProvider({ children }: { children: React.ReactNode }) {
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setReducedMotion(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <MotionConfig transition={reducedMotion ? { duration: 0 } : undefined}>
            {children}
        </MotionConfig>
    );
}
