import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./navbar/ThemeToggle";
import MobileMenu from "./navbar/MobileMenu";

interface NavbarProps {
  logo: string;
  links: Array<{ href: string; label: string }>;
}

export default function Navbar({ logo, links }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const regularLinks = links.slice(0, -1);
  const contactLink = links[links.length - 1];

  if (!mounted) return null;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        className="fixed top-6 right-0 left-0 z-[100] mx-auto w-[95%] max-w-5xl"
      >
        <div className="relative flex items-center justify-between rounded-full border border-[var(--border)] bg-[var(--surface-2)]/80 px-2 py-2 pr-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl md:px-3">
          {/* Logo */}
          <a
            href="/"
            className="group relative ml-1 flex items-center gap-3 rounded-full px-3 py-2 transition-colors hover:bg-[var(--brand)]/5 md:ml-2"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-[var(--brand)]/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
              <img
                src={logo}
                alt="UBC Game Dev"
                className="relative h-8 w-8 transition-transform duration-300 group-hover:scale-110 md:h-9 md:w-9"
              />
            </div>
            <span className="font-pixel hidden text-sm tracking-wide text-[var(--text)] sm:block md:text-base">
              UBC GAME DEV
            </span>
          </a>

          {/* Desktop Nav Links - Pill Style */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {regularLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                className="relative rounded-full px-5 py-2 text-base font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text)] md:text-lg"
              >
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 rounded-full bg-[var(--brand)]/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="font-pixel relative z-10 tracking-wide">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* CTA Button */}
            <a
              href={contactLink.href}
              className="font-pixel group relative hidden overflow-hidden rounded-full border border-[var(--brand)] bg-[var(--brand)] px-5 py-2 text-sm text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] md:block"
            >
              <span className="relative z-10">{contactLink.label}</span>
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
            </a>

            <div className="h-6 w-px bg-[var(--border)]" />

            {/* Theme Toggle */}
            <div className="rounded-full border border-[var(--border)] p-1 transition-colors hover:border-[var(--brand)] hover:bg-[var(--surface-3)]">
              <ThemeToggle />
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-3)]/50 transition-all hover:border-[var(--brand)]/50 hover:bg-[var(--surface-3)] lg:hidden"
              aria-label="Toggle menu"
            >
              <svg
                className="h-5 w-5 text-[var(--text)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        links={links}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
