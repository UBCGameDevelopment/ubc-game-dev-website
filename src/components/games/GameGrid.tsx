import { useState, useEffect } from 'react';
import { animate, stagger } from 'framer-motion';

export default function GameGrid() {
    const [selectedYear, setSelectedYear] = useState<string>('All Years');

    useEffect(() => {
        const handleYearChange = (event: CustomEvent) => {
            const year = event.detail.year;
            setSelectedYear(year);
        };

        window.addEventListener('timeline-year-change', handleYearChange as EventListener);

        return () => {
            window.removeEventListener('timeline-year-change', handleYearChange as EventListener);
        };
    }, []);

    useEffect(() => {
        const gameCards = document.querySelectorAll('[data-game-card]');
        const visibleCards: Element[] = [];
        const hiddenCards: Element[] = [];

        gameCards.forEach((card) => {
            const cardYear = card.getAttribute('data-year');
            const shouldShow = selectedYear === 'All Years' || cardYear === selectedYear;

            if (shouldShow) {
                visibleCards.push(card);
            } else {
                hiddenCards.push(card);
            }
        });

        // First, fade out ALL cards
        const allCards = Array.from(gameCards) as HTMLElement[];
        animate(
            allCards,
            { opacity: 0, scale: 0.95, filter: 'blur(4px)' },
            { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
        ).then(() => {
            // Hide cards that shouldn't be visible
            hiddenCards.forEach((card) => {
                (card as HTMLElement).style.display = 'none';
            });

            // Reset visible cards to initial animated state
            visibleCards.forEach((card) => {
                const htmlCard = card as HTMLElement;
                htmlCard.style.display = 'block';
                htmlCard.style.opacity = '0';
                htmlCard.style.transform = 'scale(0.9)';
                htmlCard.style.filter = 'blur(8px)';
            });

            // Animate visible cards in with stagger
            if (visibleCards.length > 0) {
                animate(
                    visibleCards,
                    { opacity: 1, scale: 1, filter: 'blur(0px)' },
                    {
                        duration: 1.2,
                        delay: stagger(0.2),
                        ease: [0.16, 1, 0.3, 1]
                    }
                );
            }
        });
    }, [selectedYear]);

    return null;
}
