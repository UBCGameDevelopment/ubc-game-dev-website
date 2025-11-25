import { useEffect, useRef, useState } from 'react';

interface EventTimelineProps {
  index: number;
  isLast: boolean;
}

export default function EventTimeline({ index, isLast }: EventTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (isLast) return;

    const updateLineHeight = () => {
      const circle = circleRef.current;
      const container = containerRef.current;
      
      if (!circle || !container) return;

      // Find the next timeline container
      const currentRow = container.closest('[data-timeline-row]');
      if (!currentRow) return;

      const nextRow = currentRow.nextElementSibling as HTMLElement;
      if (!nextRow) return;

      const nextCircle = nextRow.querySelector('[data-timeline-circle]');
      if (!nextCircle) return;

      // Calculate distance between centers of current and next circle
      const currentRect = circle.getBoundingClientRect();
      const nextRect = nextCircle.getBoundingClientRect();
      
      const currentCenter = currentRect.top + currentRect.height / 2;
      const nextCenter = nextRect.top + nextRect.height / 2;
      const distance = nextCenter - currentCenter;
      
      setLineHeight(Math.max(0, distance));
    };

    // Initial calculation
    updateLineHeight();
    
    // Update on resize and after short delay for content loading
    window.addEventListener('resize', updateLineHeight);
    const timeouts = [100, 300, 500].map(delay => 
      setTimeout(updateLineHeight, delay)
    );

    return () => {
      window.removeEventListener('resize', updateLineHeight);
      timeouts.forEach(clearTimeout);
    };
  }, [isLast]);

  return (
    <div className="relative flex h-full items-center justify-center" ref={containerRef}>
      {/* Vertical line connecting to next node */}
      {!isLast && lineHeight > 0 && (
        <div
          className="absolute left-1/2 top-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-500/60 to-accent-500/40"
          style={{ height: `${lineHeight}px` }}
        />
      )}

      {/* Circle with number */}
      <div 
        className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 shadow-lg ring-4 ring-black/20"
        ref={circleRef}
        data-timeline-circle
      >
        <span className="text-lg font-bold text-white">{index + 1}</span>
      </div>
    </div>
  );
}
