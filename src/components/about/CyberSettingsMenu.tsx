import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TabValues = "STATUS" | "ROLES" | "SYSTEM";

const TabButton = ({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`group relative w-full border-l-4 px-6 py-4 text-left font-bold tracking-widest uppercase transition-all ${
      active
        ? "border-[var(--cyber-yellow)] bg-[var(--cyber-yellow)]/10 text-white"
        : "border-[var(--border-dim)] text-[var(--text-muted)] hover:border-[var(--brand)] hover:text-white"
    }`}
  >
    <span className="relative z-10 flex items-center justify-between">
      <span>{label}</span>
      {active && (
        <motion.span
          layoutId="active-indicator"
          className="text-[var(--cyber-yellow)]"
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
  const [activeTab, setActiveTab] = useState<TabValues>("STATUS");

  return (
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[300px_1fr]">
      {/* Sidebar Navigation */}
      <aside className="font-tech h-fit border border-[var(--border-dim)] bg-[var(--bg-panel)]/90 pb-8 text-sm shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur">
        <div className="border-b border-[var(--border-dim)] bg-[var(--bg-deep)] p-4">
          <h2 className="text-xs font-bold tracking-[0.2em] text-[var(--text-muted)]">SETTINGS_MENU // v2.0.77</h2>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <TabButton
            active={activeTab === "STATUS"}
            label="Mission Status"
            onClick={() => setActiveTab("STATUS")}
          />
          <TabButton
            active={activeTab === "ROLES"}
            label="Crew Roles"
            onClick={() => setActiveTab("ROLES")}
          />
          <TabButton
            active={activeTab === "SYSTEM"}
            label="System Access"
            onClick={() => setActiveTab("SYSTEM")}
          />
        </div>

        {/* Decor */}
        <div className="mt-12 px-6 text-[10px] text-[var(--border-dim)]">
          <p>MEM: 64TB // OK</p>
          <p>NET: CONNECTED</p>
          <p>PWR: 98%</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="relative min-h-[500px] border border-[var(--border-dim)] bg-[var(--bg-panel)]/50 backdrop-blur-md">
        {/* CRT Scanline Overlay */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-10"></div>

        <div className="relative z-10 p-8 md:p-12">
          <AnimatePresence mode="wait">
            {activeTab === "STATUS" && (
              <motion.div
                key="STATUS"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                <div className="border-b border-[var(--cyber-yellow)] pb-4">
                  <h3 className="text-4xl font-black tracking-tighter text-white uppercase md:text-5xl">
                    Current <span className="text-[var(--cyber-yellow)]">Objective</span>
                  </h3>
                </div>
                <div className="prose prose-invert max-w-none">
                  <p className="font-mono text-xl leading-relaxed text-[var(--text-muted)] md:text-2xl">
                    "Arm every student with the tools, know-how, and squadmates to forge their own{" "}
                    <span className="font-bold text-white">legendary games</span>."
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border-l-2 border-[var(--cyber-blue)] bg-[var(--bg-deep)] p-6">
                    <h4 className="mb-2 font-bold text-[var(--cyber-blue)] uppercase">Primary Directive</h4>
                    <p className="text-sm text-[var(--text-muted)]">Build worlds. Break limits. Deploy to players.</p>
                  </div>
                  <div className="border-l-2 border-[var(--cyber-red)] bg-[var(--bg-deep)] p-6">
                    <h4 className="mb-2 font-bold text-[var(--cyber-red)] uppercase">Secondary Directive</h4>
                    <p className="text-sm text-[var(--text-muted)]">Expand the network. Train new operators.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "ROLES" && (
              <motion.div
                key="ROLES"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                <div className="border-b border-[var(--brand)] pb-4">
                  <h3 className="text-4xl font-black tracking-tighter text-white uppercase md:text-5xl">
                    Crew <span className="text-[var(--brand)]">Structure</span>
                  </h3>
                </div>

                <div className="grid gap-6">
                  {/* Class A */}
                  <div className="group relative overflow-hidden border border-[var(--brand)]/30 bg-[var(--bg-deep)] p-6 transition-colors hover:border-[var(--brand)]">
                    <div className="mb-2 flex items-center justify-between">
                      <h4 className="text-xl font-bold text-white">ROLE: VANGUARD</h4>
                      <span className="rounded-sm bg-[var(--brand)] px-2 py-0.5 text-xs text-white">LVL 50+</span>
                    </div>
                    <p className="mb-4 text-[var(--text-muted)]">
                      Elite strike teams led by veteran devs. Balanced squads of coders, artists, and designers shipping
                      commercial-grade titles.
                    </p>
                    <div className="flex gap-2">
                      <span className="border border-[var(--border-dim)] px-2 py-1 text-[10px] text-[var(--text-muted)] uppercase">
                        High EXP
                      </span>
                      <span className="border border-[var(--border-dim)] px-2 py-1 text-[10px] text-[var(--text-muted)] uppercase">
                        Shipped Titles
                      </span>
                    </div>
                  </div>

                  {/* Class B */}
                  <div className="group relative overflow-hidden border border-[var(--accent)]/30 bg-[var(--bg-deep)] p-6 transition-colors hover:border-[var(--accent)]">
                    <div className="mb-2 flex items-center justify-between">
                      <h4 className="text-xl font-bold text-white">ROLE: RECRUIT</h4>
                      <span className="rounded-sm bg-[var(--accent)] px-2 py-0.5 text-xs text-black">LVL 1+</span>
                    </div>
                    <p className="mb-4 text-[var(--text-muted)]">
                      The training ring. A flexible environment to level skills through workshops, game jams, and
                      social ops. No prior experience required.
                    </p>
                    <div className="flex gap-2">
                      <span className="border border-[var(--border-dim)] px-2 py-1 text-[10px] text-[var(--text-muted)] uppercase">
                        Workshops
                      </span>
                      <span className="border border-[var(--border-dim)] px-2 py-1 text-[10px] text-[var(--text-muted)] uppercase">
                        Networking
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "SYSTEM" && (
              <motion.div
                key="SYSTEM"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                <div className="border-b border-[var(--cyber-blue)] pb-4">
                  <h3 className="text-4xl font-black tracking-tighter text-white uppercase md:text-5xl">
                    System <span className="text-[var(--cyber-blue)]">Access</span>
                  </h3>
                </div>

                <div className="border border-[var(--border-dim)] bg-[var(--bg-deep)] p-8 text-center">
                  <p className="mb-8 text-xl text-[var(--text-muted)]">
                    Ready to jack in? Access is open to all students, regardless of faculty or skill level.
                  </p>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-[var(--cyber-blue)] px-8 py-4 font-bold text-black transition-transform hover:scale-105 hover:shadow-[0_0_20px_var(--cyber-blue)]"
                    style={{
                      clipPath:
                        "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                    }}
                  >
                    <span className="tracking-widest">INITIALIZE_JOIN_SEQUENCE</span>
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
