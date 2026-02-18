import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";

interface ExecData {
  name: string;
  role: string;
  execClass: string;
  season: string;
  linkedin: string;
  github?: string;
  portfolio?: string;
  imageSrc: string;
}

interface Props {
  execs: ExecData[];
}

/* ─── Social link icon button ─── */
const SocialLink = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group/social flex items-center gap-2 border border-[var(--border-dim)] bg-[var(--bg-deep)] px-4 py-2 text-xs font-bold tracking-widest text-[var(--text-muted)] uppercase transition-all hover:border-[var(--cyber-blue)] hover:text-[var(--cyber-blue)] hover:shadow-[0_0_12px_rgba(0,240,255,0.2)]"
  >
    {children}
    <span>{label}</span>
  </a>
);

/* ─── Small portrait thumbnail ─── */
const PortraitThumbnail = ({
  exec,
  index,
  isSelected,
  onClick,
}: {
  exec: ExecData;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`group relative aspect-square w-full overflow-hidden border-2 transition-all duration-200 ${
      isSelected
        ? "z-10 scale-105 border-[var(--cyber-yellow)] shadow-[0_0_15px_rgba(252,238,10,0.3)]"
        : "border-[var(--border-dim)] hover:border-[var(--cyber-blue)] hover:shadow-[0_0_10px_rgba(0,240,255,0.15)]"
    }`}
    style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
    aria-label={`Select ${exec.name}`}
  >
    <img
      src={exec.imageSrc}
      alt={exec.name}
      className={`h-full w-full object-cover transition-all duration-300 ${
        isSelected
          ? "brightness-110 saturate-110"
          : "brightness-75 saturate-75 group-hover:brightness-100 group-hover:saturate-100"
      }`}
    />

    {/* Hover / selected overlay */}
    <div
      className={`pointer-events-none absolute inset-0 transition-opacity ${
        isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      }`}
    >
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-1 pt-6">
        <p className="font-tech truncate text-[9px] font-bold tracking-wider text-white uppercase">
          {exec.name.split(" ")[0]}
        </p>
      </div>
    </div>

    {/* Selected corner accent */}
    {isSelected && (
      <>
        <div className="absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-[var(--cyber-yellow)]" />
        <div className="absolute right-0 bottom-0 h-3 w-3 border-r-2 border-b-2 border-[var(--cyber-yellow)]" />
      </>
    )}
  </button>
);

/* ─── LinkedIn SVG ─── */
const LinkedInIcon = () => (
  <svg
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/* ─── GitHub SVG ─── */
const GitHubIcon = () => (
  <svg
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

/* ─── Portfolio SVG ─── */
const PortfolioIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
);

export default function ExecRoster({ execs }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = execs[selectedIndex];

  // Group execs by class with a fixed display order
  const classOrder = ["President", "Leadership", "Operations", "Tech & Design"];
  const grouped: Record<string, { exec: ExecData; originalIndex: number }[]> = {};
  execs.forEach((exec, index) => {
    if (!grouped[exec.execClass]) {
      grouped[exec.execClass] = [];
    }
    grouped[exec.execClass].push({ exec, originalIndex: index });
  });

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16">
      {/* Section header */}
      <div className="mb-4 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--cyber-yellow)]/30 to-transparent" />
        <h2 className="font-tech text-xs font-bold tracking-[0.3em] text-[var(--cyber-yellow)] uppercase">
          &gt;&gt; Select Your Operator
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--cyber-yellow)]/30 to-transparent" />
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        {/* ─── LEFT: Portrait Grid grouped by class ─── */}
        <div className="space-y-4">
          {classOrder.map((cls) => (
            <div key={cls}>
              {/* Class divider */}
              <div className="mb-2 flex items-center gap-3">
                <span className="font-tech text-[10px] font-bold tracking-[0.2em] text-[var(--cyber-blue)] uppercase">
                  {cls}
                </span>
                <div className="h-px flex-1 bg-[var(--border-dim)]" />
                <span className="font-tech text-[10px] text-[var(--text-muted)]">{grouped[cls].length}</span>
              </div>

              {/* Portraits for this class */}
              <div className="grid grid-cols-4 gap-2">
                {grouped[cls].map(({ exec, originalIndex }) => (
                  <PortraitThumbnail
                    key={exec.name}
                    exec={exec}
                    index={originalIndex}
                    isSelected={originalIndex === selectedIndex}
                    onClick={() => setSelectedIndex(originalIndex)}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Decorative status bar */}
          <div className="mt-2 flex items-center gap-3 border-t border-[var(--border-dim)] pt-3">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--cyber-yellow)]" />
            <span className="font-tech text-[10px] tracking-widest text-[var(--text-muted)]">
              PROCESSING SELECTIONS...
            </span>
          </div>
        </div>

        {/* ─── RIGHT: Detail Panel ─── */}
        <div className="relative flex flex-col overflow-hidden border border-[var(--border-dim)] bg-[var(--bg-panel)]/80 backdrop-blur-md">
          {/* Scanline overlay */}
          <div className="scanline-soft pointer-events-none absolute inset-0 z-0 opacity-10" />

          {/* Panel header bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-[var(--border-dim)] bg-[var(--bg-deep)] px-6 py-3">
            <span className="font-tech text-[10px] font-bold tracking-[0.2em] text-[var(--cyber-blue)] uppercase">
              Operator Dossier
            </span>
            <span className="font-tech text-[10px] text-[var(--text-muted)]">
              STATUS: <span className="text-[var(--cyber-yellow)]">ACTIVE</span>
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 flex flex-1 flex-col"
            >
              {/* Top: Headshot + Name side by side */}
              <div className="flex gap-6 p-6 pb-0">
                {/* Headshot */}
                <div className="relative shrink-0">
                  <div
                    className="h-44 w-44 overflow-hidden border-2 border-[var(--cyber-yellow)] shadow-[0_0_25px_rgba(252,238,10,0.15)] md:h-52 md:w-52"
                    style={{
                      clipPath:
                        "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                    }}
                  >
                    <img
                      src={selected.imageSrc}
                      alt={selected.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-1 -left-1 h-4 w-4 border-t-2 border-l-2 border-[var(--cyber-blue)]" />
                  <div className="absolute -right-1 -bottom-1 h-4 w-4 border-r-2 border-b-2 border-[var(--cyber-blue)]" />
                  <div
                    className="pointer-events-none absolute inset-0 -z-10 rounded-lg opacity-20 blur-xl"
                    style={{ background: "radial-gradient(circle, var(--cyber-yellow) 0%, transparent 70%)" }}
                  />
                </div>

                {/* Name + Role */}
                <div className="flex flex-col justify-center">
                  <span className="mb-2 inline-block self-start border border-[var(--brand)]/40 bg-[var(--brand)]/10 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-[var(--brand)] uppercase">
                    {selected.role}
                  </span>
                  <h3 className="font-display text-3xl leading-tight font-black tracking-tight text-white uppercase md:text-4xl">
                    {selected.name.split(" ")[0]}
                    <br />
                    <span className="bg-gradient-to-r from-[var(--cyber-yellow)] to-[var(--brand)] bg-clip-text text-transparent">
                      {selected.name.split(" ").slice(1).join(" ")}
                    </span>
                  </h3>
                </div>
              </div>

              {/* Stats + Info */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 h-px w-full bg-gradient-to-r from-[var(--cyber-yellow)]/50 via-[var(--border-dim)] to-transparent" />

                {/* Stats grid */}
                <div className="font-tech mb-4 grid grid-cols-3 gap-2 text-xs">
                  <div className="border border-[var(--border-dim)] bg-[var(--bg-deep)] p-2.5">
                    <span className="mb-0.5 block text-[9px] tracking-[0.15em] text-[var(--text-muted)] uppercase">
                      Class
                    </span>
                    <span className="font-bold text-[var(--cyber-blue)]">{selected.execClass}</span>
                  </div>
                  <div className="border border-[var(--border-dim)] bg-[var(--bg-deep)] p-2.5">
                    <span className="mb-0.5 block text-[9px] tracking-[0.15em] text-[var(--text-muted)] uppercase">
                      Season
                    </span>
                    <span className="font-bold text-white">{selected.season}</span>
                  </div>
                  <div className="border border-[var(--border-dim)] bg-[var(--bg-deep)] p-2.5">
                    <span className="mb-0.5 block text-[9px] tracking-[0.15em] text-[var(--text-muted)] uppercase">
                      Status
                    </span>
                    <span className="font-bold text-[var(--cyber-yellow)]">ACTIVE</span>
                  </div>
                </div>
                <div className="font-tech mb-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="border border-[var(--border-dim)] bg-[var(--bg-deep)] p-2.5">
                    <span className="mb-0.5 block text-[9px] tracking-[0.15em] text-[var(--text-muted)] uppercase">
                      Clearance
                    </span>
                    <span className="font-bold text-[var(--brand)]">LVL MAX</span>
                  </div>
                  <div className="border border-[var(--border-dim)] bg-[var(--bg-deep)] p-2.5">
                    <span className="mb-0.5 block text-[9px] tracking-[0.15em] text-[var(--text-muted)] uppercase">
                      Division
                    </span>
                    <span className="font-bold text-[var(--cyber-blue)]">{selected.execClass}</span>
                  </div>
                </div>

                {/* Terminal log */}
                <div className="mb-4 flex-1 overflow-hidden border border-[var(--cyber-blue)]/30 bg-[#060a10]">
                  {/* Terminal header */}
                  <div className="flex items-center justify-between border-b border-[var(--cyber-blue)]/20 bg-[var(--cyber-blue)]/5 px-3 py-1.5">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--cyber-blue)] shadow-[0_0_6px_var(--cyber-blue)]" />
                      <span className="font-tech text-[9px] font-bold tracking-[0.2em] text-[var(--cyber-blue)] uppercase">
                        sys://terminal
                      </span>
                    </div>
                    <span className="font-tech text-[8px] tracking-wider text-[var(--cyber-blue)]/40">
                      ■ operator_dossier.sh
                    </span>
                  </div>
                  {/* Terminal content */}
                  <div
                    className="font-tech relative p-4 text-[11px] leading-relaxed text-[var(--text-muted)]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px)",
                    }}
                  >
                    <Typewriter
                      key={selectedIndex}
                      onInit={(typewriter) => {
                        typewriter
                          .changeDelay(30)
                          .typeString(
                            "<span style='color: var(--cyber-blue);'>[SYS]</span> Operator profile loaded.<br/>",
                          )
                          .pauseFor(200)
                          .typeString(
                            `<span style='color: var(--cyber-blue);'>[SYS]</span> Assigned role: <span style='color: white; font-weight: bold;'>${selected.role}</span><br/>`,
                          )
                          .pauseFor(200)
                          .typeString(
                            `<span style='color: var(--cyber-blue);'>[SYS]</span> Division: <span style='color: white; font-weight: bold;'>${selected.execClass}</span><br/>`,
                          )
                          .pauseFor(300)
                          .typeString(
                            "<span style='color: var(--cyber-yellow);'>[NET]</span> Social links verified. Ready for connection.",
                          )
                          .start();
                      }}
                      options={{
                        cursor: "<span style='color: var(--cyber-yellow);'>█</span>",
                        delay: 30,
                      }}
                    />
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-2 border-t border-[var(--border-dim)] pt-3">
                  <SocialLink
                    href={selected.linkedin}
                    label="LinkedIn"
                  >
                    <LinkedInIcon />
                  </SocialLink>
                  {selected.github && (
                    <SocialLink
                      href={selected.github}
                      label="GitHub"
                    >
                      <GitHubIcon />
                    </SocialLink>
                  )}
                  {selected.portfolio && (
                    <SocialLink
                      href={selected.portfolio}
                      label="Portfolio"
                    >
                      <PortfolioIcon />
                    </SocialLink>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Legacy Leaders Link */}
      <div className="mt-12 flex justify-center">
        <a
          href="/team/legacy"
          className="group font-tech relative inline-flex items-center gap-3 border border-[var(--border-dim)] bg-[var(--bg-deep)] px-8 py-4 text-xs font-bold tracking-[0.2em] text-[var(--text-muted)] uppercase transition-all hover:border-[var(--cyber-blue)] hover:text-[var(--cyber-blue)] hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>View Legacy Leaders</span>
          <svg
            className="h-3 w-3 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
