'use client';

import { useState, useEffect } from 'react';
import { MotionConfig } from 'framer-motion';

export default function MobileMotionProvider({ children }: { children: React.ReactNode }) {
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const checkMotion = () => {
            const isMobile = window.innerWidth <= 768;
            setReducedMotion(isMobile);
        };

        checkMotion();

        let timeoutId: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(checkMotion, 150); // Debounce resize by 150ms
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <MotionConfig reducedMotion={reducedMotion ? 'always' : 'user'}>
            {children}
        </MotionConfig>
    );
}
