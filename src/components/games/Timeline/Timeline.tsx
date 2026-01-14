import { useState } from "react";

interface TimelineProps {
  years: string[];
  initialYear: string;
}

export default function Timeline({ years, initialYear }: TimelineProps) {
  const [activeYear, setActiveYear] = useState(initialYear);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleYearClick = (year: string) => {
    setActiveYear(year);

    // Dispatch custom event for the games page to listen to
    const event = new CustomEvent("timeline-year-change", {
      detail: { year },
      bubbles: true,
    });
    window.dispatchEvent(event);
  };

  return (
    <nav
      className="timeline-react"
      aria-label="Year timeline"
    >
      <ul role="list">
        {years.map((year, index) => {
          const isActive = year === activeYear;
          const isHovered = hoveredIndex === index;

          // Calculate scale based on distance from hovered item
          let scale = 1;
          let opacity = 1;

          if (hoveredIndex !== null) {
            const distance = Math.abs(index - hoveredIndex);
            if (distance === 0) {
              scale = 1.2;
              opacity = 1;
            } else if (distance === 1) {
              scale = 1.1;
              opacity = 0.8;
            } else {
              scale = 1;
              opacity = 0.4;
            }
          }

          return (
            <li
              key={year}
              style={{
                transform: `scale(${scale})`,
                opacity,
                transition: "all 0.2s ease",
              }}
            >
              <button
                type="button"
                onClick={() => handleYearClick(year)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                aria-pressed={isActive}
                className="timeline-btn"
              >
                <span
                  className="timeline-bar"
                  style={{
                    transform: isHovered ? "scaleY(2.8)" : isActive ? "scaleY(1.8)" : "scaleY(1)",
                    background: isHovered
                      ? "linear-gradient(90deg, var(--brand-hover), var(--accent-hover))"
                      : isActive
                        ? "linear-gradient(90deg, var(--brand), var(--accent))"
                        : "var(--border)",
                    boxShadow: isHovered ? "0 8px 24px var(--brand)" : isActive ? "0 6px 18px var(--brand)" : "none",
                  }}
                />
                <span
                  className="timeline-label"
                  style={{
                    opacity: isHovered || isActive ? 1 : 0,
                    transform: isHovered || isActive ? "translateX(0)" : "translateX(-0.5rem)",
                  }}
                >
                  {year}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
