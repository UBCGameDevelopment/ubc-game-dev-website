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
        <nav className="timeline-react" aria-label="Year timeline">
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
                                        transform: isHovered
                                            ? "scaleY(2.8)"
                                            : isActive
                                              ? "scaleY(1.8)"
                                              : "scaleY(1)",
                                        background: isHovered
                                            ? "linear-gradient(90deg, rgba(157, 124, 255, 0.85), rgba(91, 205, 132, 0.85))"
                                            : isActive
                                              ? "linear-gradient(90deg, rgba(157, 124, 255, 0.65), rgba(91, 205, 132, 0.65))"
                                              : "rgba(148, 163, 184, 0.25)",
                                        boxShadow:
                                            isHovered
                                                ? "0 8px 24px rgba(91, 205, 132, 0.35)"
                                                : isActive
                                                  ? "0 6px 18px rgba(91, 205, 132, 0.22)"
                                                  : "none",
                                    }}
                                />
                                <span
                                    className="timeline-label"
                                    style={{
                                        opacity: isHovered || isActive ? 1 : 0,
                                        transform:
                                            isHovered || isActive ? "translateX(0)" : "translateX(-0.5rem)",
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
