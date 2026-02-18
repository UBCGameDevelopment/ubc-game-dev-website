import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface CtaButtonProps {
  label: string;
  href: string;
  className?: string;
  animateIn?: boolean;
  variant?: "magenta" | "yellow";
}

export default function CtaButton({
  label,
  href,
  className = "",
  animateIn = true,
  variant = "magenta",
}: CtaButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Cyberpunk 2077 styled angular button
  const baseClassName = `
    group font-pixel inline-flex items-center gap-3 px-8 py-3 text-sm md:text-base
    font-bold uppercase tracking-wider
    transition-all duration-200 ease-out
    ${
      variant === "yellow"
        ? "bg-[var(--cyber-yellow)] text-black hover:bg-white hover:text-black hover:shadow-[0_0_20px_white]"
        : "bg-[var(--brand)] text-white hover:bg-[var(--cyber-yellow)] hover:text-black hover:shadow-[0_0_20px_var(--cyber-yellow)]"
    }
  `;

  const animationProps = animateIn
    ? ({
        initial: { opacity: 0, y: 20 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        transition: { duration: 0.6, ease: "easeOut" },
      } as const)
    : {};

  return (
    <motion.a
      ref={ref}
      href={href}
      className={`${baseClassName} ${className}`}
      style={{
        clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)",
      }}
      {...animationProps}
      whileHover={{ x: 3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span>{label}</span>
      <svg
        className="h-4 w-4 transition-transform group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        ></path>
      </svg>
    </motion.a>
  );
}
