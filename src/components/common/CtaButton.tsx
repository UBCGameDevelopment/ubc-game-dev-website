import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface CtaButtonProps {
  label: string;
  href: string;
  className?: string;
  animateIn?: boolean;
}

export default function CtaButton({ label, href, className = "", animateIn = true }: CtaButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const baseClassName =
    "group font-pixel inline-flex items-center gap-3 rounded-xl border-2 border-[var(--brand)] bg-[var(--brand)] px-10 py-4 text-lg text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]";

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
      {...animationProps}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>{label}</span>
      <svg
        className="h-5 w-5 transition-transform group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        ></path>
      </svg>
    </motion.a>
  );
}
