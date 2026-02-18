import React, { useEffect, useState, useRef, useCallback } from "react";

interface GlitchTextProps {
  text: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p" | "div";
  className?: string;
  options?: {
    speed?: number;
    cycles?: number;
    mode?: "decode" | "offset" | "both";
  };
  onHover?: boolean;
}

const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&^*!~";

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  tag: Tag = "span",
  className = "",
  options = {},
  onHover = true,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const intervalRef = useRef<any>(null);
  const isAnimating = useRef(false);

  // Default options
  const speed = options.speed || 30;
  const cycles = options.cycles || 3;
  const mode = options.mode || "both"; // Default to both decode + visual

  const animate = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setIsGlitching(true);

    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      // Decode Effect
      if (mode === "decode" || mode === "both") {
        setDisplayText(() =>
          text
            .split("")
            .map((_, index) => {
              if (index < iteration) {
                return text[index];
              }
              return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
            })
            .join(""),
        );
      }

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        isAnimating.current = false;
        setIsGlitching(false);
        setDisplayText(text); // Ensure final state
      }

      iteration += 1 / cycles;
    }, speed);
  }, [text, speed, cycles, mode]);

  useEffect(() => {
    animate();
    // Also trigger on loop? Maybe random?
    // For now just on mount.
    return () => clearInterval(intervalRef.current);
  }, [text, animate]);

  const handleMouseEnter = () => {
    if (onHover) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      isAnimating.current = false;
      animate();
    }
  };

  // When glitching, we append the CSS class for visual offset
  const activeClass = isGlitching ? "glitch-intense" : "";
  const glitchAttr = isGlitching ? { "data-text": text } : {};

  return (
    <Tag
      className={`${className} ${activeClass}`}
      {...glitchAttr}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </Tag>
  );
};

export default GlitchText;
