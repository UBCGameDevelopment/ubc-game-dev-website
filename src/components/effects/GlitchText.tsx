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
  respectReducedMotion?: boolean;
}

const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&^*!~";

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  tag: Tag = "span",
  className = "",
  options = {},
  onHover = true,
  respectReducedMotion = true,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const [allowAnimation, setAllowAnimation] = useState(!respectReducedMotion);
  const intervalRef = useRef<any>(null);
  const isAnimating = useRef(false);

  // Default options
  const speed = options.speed || 30;
  const cycles = options.cycles || 3;
  const mode = options.mode || "both"; // Default to both decode + visual
  const usesOffsetEffect = mode === "offset" || mode === "both";

  useEffect(() => {
    if (!respectReducedMotion || typeof window === "undefined") {
      setAllowAnimation(true);
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setAllowAnimation(!mediaQuery.matches);

    updatePreference();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updatePreference);
      return () => mediaQuery.removeEventListener("change", updatePreference);
    }

    mediaQuery.addListener(updatePreference);
    return () => mediaQuery.removeListener(updatePreference);
  }, [respectReducedMotion]);

  const animate = useCallback(() => {
    if (!allowAnimation || isAnimating.current) return;
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
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              if (char === " " || char === "\n") {
                return char;
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
  }, [allowAnimation, text, speed, cycles, mode]);

  useEffect(() => {
    if (!allowAnimation) {
      clearInterval(intervalRef.current);
      isAnimating.current = false;
      setIsGlitching(false);
      setDisplayText(text);
      return;
    }

    animate();
    return () => clearInterval(intervalRef.current);
  }, [text, animate, allowAnimation]);

  const handleMouseEnter = () => {
    if (onHover && allowAnimation) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      isAnimating.current = false;
      animate();
    }
  };

  // Only apply the split/glitch overlay when the selected mode includes it.
  const activeClass = isGlitching && usesOffsetEffect ? "glitch-intense" : "";
  const glitchAttr = isGlitching ? { "data-text": text } : {};

  return (
    <Tag
      className={`${className} relative overflow-visible`}
      onMouseEnter={handleMouseEnter}
    >
      <span className="invisible whitespace-pre-wrap">{text}</span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 block h-full w-full whitespace-pre-wrap ${activeClass}`}
        {...glitchAttr}
      >
        {displayText}
      </span>
      <span className="sr-only">{text}</span>
    </Tag>
  );
};

export default GlitchText;
