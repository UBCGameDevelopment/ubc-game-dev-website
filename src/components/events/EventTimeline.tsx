import { useEffect, useRef, useState } from 'react';

interface EventTimelineProps {
  index: number;
  isLast: boolean;
}

// Constants for timeline measurements
const TIMELINE_GAP_TO_NEXT_CIRCLE = 200; // Gap between cards plus space to reach center of next circle (in pixels)
const CONTENT_LOAD_DELAY = 100; // Delay to recalculate after content loads (in milliseconds)

export default function EventTimeline({ index, isLast }: EventTimelineProps) {
  const circleRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (isLast || !circleRef.current) return;

    const updateLineHeight = () => {
      const circle = circleRef.current;
      if (!circle) return;

      // Get the parent container height
      const container = circle.closest('.timeline-container');
      if (!container) return;

      const containerHeight = container.clientHeight;
      const circleRect = circle.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      // Calculate distance from center of circle to bottom of container, plus gap to next card
      const centerOffset = circleRect.top - containerRect.top + (circleRect.height / 2);
      const heightToNextCard = containerHeight - centerOffset + TIMELINE_GAP_TO_NEXT_CIRCLE;
      
      setLineHeight(heightToNextCard);
    };

    updateLineHeight();
    window.addEventListener('resize', updateLineHeight);
    
    // Also update when content loads
    const timeout = setTimeout(updateLineHeight, CONTENT_LOAD_DELAY);

    return () => {
      window.removeEventListener('resize', updateLineHeight);
      clearTimeout(timeout);
    };
  }, [isLast]);

  return (
    <div className="relative flex h-full min-h-full items-center justify-center" ref={circleRef}>
      {/* Vertical line */}
      {!isLast && (
        <div
          className="absolute left-1/2 top-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-500/50 to-accent-500/30"
          style={{ height: `${lineHeight}px` }}
        />
      )}

      {/* Circle with number */}
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 shadow-lg ring-4 ring-black/20">
        <span className="text-lg font-bold text-white">{index + 1}</span>
      </div>
    </div>
  );
}
