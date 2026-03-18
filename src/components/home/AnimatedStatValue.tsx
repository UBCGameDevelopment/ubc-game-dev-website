import React, { useEffect, useState } from "react";
import { animate } from "framer-motion";

interface AnimatedStatValueProps {
  value: string;
  accentColor: string;
  className?: string;
  delay?: number;
  duration?: number;
}

interface ParsedValue {
  prefix: string;
  suffix: string;
  target: number;
  decimals: number;
  useGrouping: boolean;
}

const parseValue = (value: string): ParsedValue | null => {
  const match = value.match(/^([^0-9]*)([\d,]+(?:\.\d+)?)(.*)$/);

  if (!match) {
    return null;
  }

  const [, prefix, numericText, suffix] = match;
  const normalized = numericText.replaceAll(",", "");
  const target = Number.parseFloat(normalized);

  if (Number.isNaN(target)) {
    return null;
  }

  return {
    prefix,
    suffix,
    target,
    decimals: normalized.includes(".") ? normalized.split(".")[1].length : 0,
    useGrouping: numericText.includes(","),
  };
};

const formatAnimatedValue = (parsed: ParsedValue, latest: number) => {
  const rounded =
    parsed.decimals === 0 ? Math.round(latest) : Number(latest.toFixed(parsed.decimals));

  const formatter = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: parsed.decimals,
    maximumFractionDigits: parsed.decimals,
    useGrouping: parsed.useGrouping,
  });

  return `${parsed.prefix}${formatter.format(rounded)}${parsed.suffix}`;
};

export default function AnimatedStatValue({
  value,
  accentColor,
  className = "",
  delay = 0,
  duration = 1.2,
}: AnimatedStatValueProps) {
  const [displayValue, setDisplayValue] = useState(() => value);

  useEffect(() => {
    const parsed = parseValue(value);

    if (!parsed) {
      setDisplayValue(value);
      return;
    }

    setDisplayValue(formatAnimatedValue(parsed, 0));

    const controls = animate(0, parsed.target, {
      delay,
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayValue(formatAnimatedValue(parsed, latest));
      },
      onComplete: () => {
        setDisplayValue(value);
      },
    });

    return () => {
      controls.stop();
    };
  }, [delay, duration, value]);

  return (
    <span
      className={className}
      style={{
        textShadow: `0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(255,255,255,0.3), 0 0 10px ${accentColor}40`,
      }}
    >
      {displayValue}
    </span>
  );
}
