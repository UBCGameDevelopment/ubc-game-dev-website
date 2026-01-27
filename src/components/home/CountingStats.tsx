import { useEffect, useRef, useState } from "react";
import { useSpring, useInView, motion, useMotionValue, useTransform } from "framer-motion";

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

interface CountingStatsProps {
  stats: StatItem[];
}

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix: string }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span
      className="font-pixel animate-pulse text-2xl md:text-3xl"
      style={{
        color: "var(--brand)",
        textShadow: `
          0 0 5px var(--brand),
          0 0 10px var(--brand),
          0 0 20px var(--brand),
          0 0 40px var(--brand-strong),
          0 0 80px var(--brand-strong)
        `,
        filter: "brightness(1.2)",
      }}
    >
      {displayValue}
      {suffix}
    </span>
  );
}

function StatCounter({ value, suffix = "", label, isInView }: StatItem & { isInView: boolean }) {
  const targetValue = isInView ? value : 0;

  return (
    <div className="flex flex-col items-center">
      <AnimatedNumber
        value={targetValue}
        suffix={suffix}
      />
      <span
        className="text-xs tracking-widest uppercase"
        style={{ color: "var(--text-muted)" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function CountingStats({ stats }: CountingStatsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-8 flex items-center justify-center gap-6 rounded-xl border px-6 py-3 shadow-lg backdrop-blur-sm md:gap-10"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "color-mix(in srgb, var(--surface-2) 80%, transparent)",
      }}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="flex items-center gap-8 md:gap-12"
        >
          <StatCounter
            {...stat}
            isInView={isInView}
          />
          {index < stats.length - 1 && (
            <div
              className="h-8 w-px"
              style={{ backgroundColor: "var(--border)" }}
            />
          )}
        </div>
      ))}
    </motion.div>
  );
}
