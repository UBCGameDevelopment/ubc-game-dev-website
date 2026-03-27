import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TabValues = "MISSION" | "STRUCTURE" | "JOIN";

const TabButton = ({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`group relative w-full border-l-4 px-4 py-3 text-left text-xs font-bold tracking-[0.18em] uppercase transition-all sm:px-6 sm:py-4 sm:text-sm sm:tracking-widest ${active
        ? "border-[var(--cyber-yellow)] bg-[var(--cyber-yellow)]/10 text-white"
        : "border-[var(--border-dim)] text-[var(--text-muted)] hover:border-[var(--brand)] hover:text-white"
      }`}
  >
    <span className="relative z-10 flex items-center justify-between gap-3">
      <span className="min-w-0 [overflow-wrap:anywhere]">{label}</span>
      {active && (
        <motion.span
          layoutId="active-indicator"
          className="hidden text-[var(--cyber-yellow)] sm:inline"
        >
          &lt;&lt;
        </motion.span>
      )}
    </span>
    {/* Glitch hover background */}
    <div className="absolute inset-0 -z-10 translate-x-full bg-[var(--brand)]/20 opacity-0 transition-transform duration-300 group-hover:translate-x-0" />
  </button>
);

export default function CyberSettingsMenu() {
  const [activeTab, setActiveTab] = useState<TabValues>("MISSION");

  return (
    <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[300px_1fr] lg:gap-8">
      {/* Sidebar Navigation */}
      <aside className="font-tech h-fit overflow-hidden border border-[var(--border-dim)] bg-[var(--bg-panel)]/90 pb-6 text-sm shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur sm:pb-8">
        <div className="border-b border-[var(--border-dim)] bg-[var(--bg-deep)] p-4">
          <h2 className="text-[10px] font-bold tracking-[0.18em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.2em]">
            ABOUT // UBC GAME DEV
          </h2>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <TabButton
            active={activeTab === "MISSION"}
            label="Our Mission"
            onClick={() => setActiveTab("MISSION")}
          />
          <TabButton
            active={activeTab === "STRUCTURE"}
            label="How It Works"
            onClick={() => setActiveTab("STRUCTURE")}
          />
          <TabButton
            active={activeTab === "JOIN"}
            label="Join Us"
            onClick={() => setActiveTab("JOIN")}
          />
        </div>

        {/* Decor */}
        <div className="mt-8 px-4 text-[10px] text-[var(--border-dim)] sm:mt-12 sm:px-6">
          <p>STUDENT-RUN</p>
          <p>OPEN TO ALL SKILL LEVELS</p>
          <p>BUILD GAMES TOGETHER</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="relative min-h-[420px] border border-[var(--border-dim)] bg-[var(--bg-panel)]/50 backdrop-blur-md md:min-h-[500px]">
        {/* CRT Scanline Overlay */}
        <div className="scanline-rgb pointer-events-none absolute inset-0 z-0 opacity-10"></div>

        <div className="relative z-10 p-5 sm:p-6 md:p-12">
          <AnimatePresence
            mode="wait"
            initial={false}
          >
            {activeTab === "MISSION" && (
              <motion.div
                key="MISSION"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6 md:space-y-8"
              >
                <div className="border-b border-[var(--cyber-yellow)] pb-4">
                  <h3 className="text-3xl font-black tracking-tighter text-white uppercase sm:text-4xl md:text-5xl">
                    Our <span className="text-[var(--cyber-yellow)]">Mission</span>
                  </h3>
                </div>
                <div className="space-y-5">
                  <p className="text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl">
                    We are a student-run video game development club that gives students a hands-on way to make games
                    and learn more about the industry.
                  </p>
                  <p className="text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl">
                    Through workshops, guest speakers, regular meetings, and collaborative projects, UBC Game Dev helps
                    members build practical skills, meet collaborators across disciplines, and grow as developers.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border-l-2 border-[var(--cyber-blue)] bg-[var(--bg-deep)] p-5 sm:p-6">
                    <h4 className="mb-2 font-bold text-[var(--cyber-blue)] uppercase">What We Offer</h4>
                    <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                      Workshops, guest speakers, club meetings, and collaborative game projects throughout the year.
                    </p>
                  </div>
                  <div className="border-l-2 border-[var(--cyber-red)] bg-[var(--bg-deep)] p-5 sm:p-6">
                    <h4 className="mb-2 font-bold text-[var(--cyber-red)] uppercase">Who Can Join</h4>
                    <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                      Students and creators across programming, art, design, writing, music, and other disciplines.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "STRUCTURE" && (
              <motion.div
                key="STRUCTURE"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6 md:space-y-8"
              >
                <div className="border-b border-[var(--brand)] pb-4">
                  <h3 className="text-3xl font-black tracking-tighter text-white uppercase sm:text-4xl md:text-5xl">
                    How It <span className="text-[var(--brand)]">Works</span>
                  </h3>
                </div>

                <div className="space-y-5">
                  <p className="text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl">
                    Members can take part in both Project Teams and the Learning Community depending on their interests
                    and experience level.
                  </p>
                </div>

                <div className="grid gap-6">
                  <div className="group relative overflow-hidden border border-[var(--brand)]/30 bg-[var(--bg-deep)] p-5 transition-colors hover:border-[var(--brand)] sm:p-6">
                    <div className="mb-3 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-xl font-bold text-white">Project Teams</h4>
                      <span className="rounded-sm bg-[var(--brand)] px-2 py-0.5 text-xs text-white">TEAM-BASED</span>
                    </div>
                    <p className="mb-4 leading-relaxed text-[var(--text-muted)]">
                      Project Teams are led by experienced members and balanced across multiple disciplines so members
                      can design and develop original games together.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="border border-[var(--border-dim)] px-2 py-1 text-[10px] text-[var(--text-muted)] uppercase">
                        Cross-Disciplinary
                      </span>
                      <span className="border border-[var(--border-dim)] px-2 py-1 text-[10px] text-[var(--text-muted)] uppercase">
                        Original Projects
                      </span>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden border border-[var(--accent)]/30 bg-[var(--bg-deep)] p-5 transition-colors hover:border-[var(--accent)] sm:p-6">
                    <div className="mb-3 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-xl font-bold text-white">Learning Community</h4>
                      <span className="rounded-sm bg-[var(--accent)] px-2 py-0.5 text-xs text-black">OPEN ENTRY</span>
                    </div>
                    <p className="mb-4 leading-relaxed text-[var(--text-muted)]">
                      The Learning Community gives aspiring developers a supportive place to improve their skills,
                      experiment, and make connections before moving into Project Teams when they feel ready.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="border border-[var(--border-dim)] px-2 py-1 text-[10px] text-[var(--text-muted)] uppercase">
                        Workshops
                      </span>
                      <span className="border border-[var(--border-dim)] px-2 py-1 text-[10px] text-[var(--text-muted)] uppercase">
                        Skill Building
                      </span>
                      <span className="border border-[var(--border-dim)] px-2 py-1 text-[10px] text-[var(--text-muted)] uppercase">
                        Community
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "JOIN" && (
              <motion.div
                key="JOIN"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6 md:space-y-8"
              >
                <div className="border-b border-[var(--cyber-blue)] pb-4">
                  <h3 className="text-3xl font-black tracking-tighter text-white uppercase sm:text-4xl md:text-5xl">
                    Join <span className="text-[var(--cyber-blue)]">Us</span>
                  </h3>
                </div>

                <div className="border border-[var(--border-dim)] bg-[var(--bg-deep)] p-5 text-center sm:p-6 md:p-8">
                  <p className="mb-4 text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl">
                    Interested in joining or partnering with UBC Game Dev? We welcome students from different
                    disciplines and experience levels.
                  </p>
                  <p className="mb-6 text-base leading-relaxed text-[var(--text-muted)] md:mb-8">
                    If you have questions or want to get involved, reach out through our contact page and we can help
                    you find the right next step.
                  </p>

                  <a
                    href="/contact"
                    className="clip-angled inline-flex w-full items-center justify-center gap-3 bg-[var(--cyber-blue)] px-5 py-4 text-center font-bold text-black transition-transform hover:scale-105 hover:shadow-[0_0_20px_var(--cyber-blue)] sm:w-auto sm:px-8"
                  >
                    <span className="tracking-[0.18em] sm:tracking-widest">
                      CONTACT US
                    </span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
