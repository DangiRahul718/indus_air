'use client';

import { useCounterAnimation } from '@/lib/useAnimations';

interface CountingStatProps {
    value: number;
    suffix?: string;
    label?: string; // Optional label if needed, though usually rendered outside
    className?: string; // Allow custom class names for styling
}

export default function CountingStat({ value, suffix = '', className = '' }: CountingStatProps) {
    const counterRef = useCounterAnimation(value, suffix);

    return (
        <span ref={counterRef} className={className}>
            0{suffix}
        </span>
    );
}
