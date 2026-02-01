import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  links: NavLink[];
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ links, isOpen, onClose }: MobileMenuProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm lg:hidden"
          />

          {/* Floating Menu Card */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-24 right-0 left-0 z-[95] mx-auto w-[95%] max-w-5xl overflow-hidden border border-[var(--brand)]/40 bg-[var(--surface-2)]/95 p-2 shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-xl lg:hidden"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)" }}
          >
            <nav
              className="flex flex-col gap-1"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {links.map((link, index) => {
                const isContact = link.label === "Contact Us";
                if (isContact) return null; // We'll render contact separately if strictly needed, or just let navbar handle it.

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    onMouseEnter={() => setHoveredIndex(index)}
                    className="relative flex items-center justify-between px-4 py-3 text-[var(--text-muted)] transition-colors hover:text-[var(--brand)]"
                  >
                    {hoveredIndex === index && (
                      <motion.div
                        layoutId="mobile-navbar-pill"
                        className="absolute inset-0 border-l-2 border-[var(--brand)] bg-[var(--brand)]/10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 text-lg font-bold tracking-wide">{link.label}</span>
                    <svg
                      className="relative z-10 h-4 w-4 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                );
              })}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
