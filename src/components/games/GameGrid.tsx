import { useState, useEffect } from 'react';

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
        let visibleIndex = 0;
        
        gameCards.forEach((card) => {
            const cardYear = card.getAttribute('data-year');
            const shouldShow = selectedYear === 'All Years' || cardYear === selectedYear;
            
            if (shouldShow) {
                // Show with staggered animation
                (card as HTMLElement).style.setProperty('--stagger-delay', `${visibleIndex * 0.1}s`);
                card.classList.remove('game-card-hidden');
                card.classList.add('game-card-visible');
                visibleIndex++;
            } else {
                // Hide immediately
                card.classList.remove('game-card-visible');
                card.classList.add('game-card-hidden');
                (card as HTMLElement).style.setProperty('--stagger-delay', '0s');
            }
        });
        
        // Clean up animation class after animation completes
        const cleanupTimer = setTimeout(() => {
            gameCards.forEach((card) => {
                if (!card.classList.contains('game-card-hidden')) {
                    card.classList.remove('game-card-visible');
                }
            });
        }, 1000);
        
        return () => clearTimeout(cleanupTimer);
    }, [selectedYear]);

    return null; // This component just manages state
}
