'use client';

import { useState } from 'react';
import styles from './Accordion.module.css';

interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`${styles.item} ${openIndex === index ? styles.itemOpen : ''}`}
                >
                    <button
                        className={styles.header}
                        onClick={() => toggleItem(index)}
                        aria-expanded={openIndex === index}
                    >
                        <span className={styles.question}>{item.question}</span>
                        <span className={styles.icon}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                {openIndex === index ? (
                                    <path d="M5 12h14" />
                                ) : (
                                    <>
                                        <path d="M12 5v14" />
                                        <path d="M5 12h14" />
                                    </>
                                )}
                            </svg>
                        </span>
                    </button>
                    <div className={styles.content}>
                        <div className={styles.answer}>{item.answer}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
