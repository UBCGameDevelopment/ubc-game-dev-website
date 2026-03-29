import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import MobileMenu from "./navbar/MobileMenu";

interface NavbarProps {
  logo: string;
  links: Array<{ href: string; label: string }>;
}

export default function Navbar({ logo, links }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  return (
    <>
      <header className="fixed top-3 right-0 left-0 z-[100] mx-auto w-[92%] max-w-5xl">
        <div className="clip-angled bg-[var(--brand)]/60 p-px shadow-[0_0_20px_rgba(168,85,247,0.2)]">
          <div className="clip-angled relative flex items-center justify-between bg-[var(--bg-panel)]/95 px-6 py-2 backdrop-blur-xl md:px-8">
            <a
              href="/"
              className="group relative flex items-center gap-2 transition-colors hover:text-[var(--brand)]"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-sm bg-[var(--brand)]/20 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
                <img
                  src={logo}
                  alt="UBC Game Dev"
                  className="relative h-6 w-6 transition-transform duration-300 group-hover:scale-110 md:h-8 md:w-8"
                />
              </div>
              <span className="text-neon group-hover:text-neon hidden text-sm font-bold tracking-widest text-[var(--brand)] sm:block">
                UBC GAME DEV
              </span>
            </a>

            <nav
              className="hidden items-center gap-4 lg:flex"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {regularLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className="relative px-2 py-1 text-sm font-bold tracking-wide text-[var(--text-muted)] transition-colors hover:text-[var(--brand)]"
                >
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute right-0 bottom-0 left-0 h-[2px] bg-[var(--brand)] shadow-[0_0_8px_var(--brand)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href={contactLink.href}
                className="clip-angled group relative hidden bg-[var(--brand)]/90 p-px transition-all duration-300 hover:shadow-[0_0_20px_var(--brand)] md:block"
              >
                <span className="clip-angled relative z-10 block bg-[var(--bg-panel)]/95 px-6 py-2 text-sm font-bold tracking-widest text-[var(--brand)] transition-all duration-300 group-hover:bg-[var(--brand)] group-hover:text-white">
                  {contactLink.label}
                </span>
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center border border-[var(--border)] bg-[var(--surface-3)]/50 transition-all hover:border-[var(--brand)] hover:bg-[var(--surface-3)] hover:shadow-[0_0_10px_var(--brand)] lg:hidden"
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
        </div>
      </header>

      <MobileMenu
        links={links}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
