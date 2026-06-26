'use client';

import { useState } from 'react';
import styles from '../../app/about/about.module.css';

const videos = [
    {
        id: 'company',
        src: '/video/company_Prod.mp4',
        label: 'Company Production House'
    },
    {
        id: 'life',
        src: '/video/LifeAt.mp4',
        label: 'Life at Indus Air'
    }
];

export default function VideoStack() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(true);

    const toggleVideo = () => {
        setActiveIndex((prev) => (prev === 0 ? 1 : 0));
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMuted(!isMuted);
    };

    return (
        <div className={styles.videoGrid}>
            <div className={styles.videoStack} onClick={toggleVideo}>
                {videos.map((video, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <div
                            key={video.id}
                            className={`${styles.videoCard} ${
                                isActive ? styles.videoCardActive : styles.videoCardInactive
                            }`}
                        >
                            <video
                                src={video.src}
                                muted={!isActive || isMuted}
                                loop
                                playsInline
                                autoPlay
                            />
                            {isActive && (
                                <div className={styles.soundToggle} onClick={toggleMute}>
                                    {isMuted ? '🔇' : '🔊'}
                                </div>
                            )}
                            <div className={styles.videoOverlay}>
                                <div className={styles.playButtonSmall}>▶</div>
                                <span className={styles.videoLabel}>{video.label}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
