import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import { splitTypewriterText } from "../../utils/typewriter";

export default function LoadingScreen() {
  const [isLoaded, setIsLoaded] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("cyber_boot_custom") === "true";
    }
    return false;
  });

  useEffect(() => {
    if (isLoaded) {
      document.documentElement.removeAttribute("data-loading");
      document.documentElement.classList.remove("app-loading");
      return;
    }

    sessionStorage.setItem("cyber_boot_custom", "true");

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isLoaded]);

  const handleEnter = () => {
    setIsLoaded(true);
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    document.documentElement.removeAttribute("data-loading");
    document.documentElement.classList.remove("app-loading"); // Cleanup old class just in case
  };

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="font-tech fixed inset-0 z-[9999] flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-black px-4 [padding-top:max(1rem,env(safe-area-inset-top))] [padding-bottom:max(1rem,env(safe-area-inset-bottom))] text-white"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(252, 238, 10, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(252, 238, 10, 0.1) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10 mx-auto w-full max-w-2xl px-4 sm:px-8">
            <div className="mb-6 flex flex-col items-start gap-2 border-b border-[var(--cyber-yellow)]/30 pb-2 text-left sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
              <span className="text-xs text-[var(--cyber-yellow)]/70">UBC_GAME_DEV_OS v2.0.0</span>
              <span className="animate-pulse text-xs text-[var(--cyber-red)]">STATUS: BOOTING</span>
            </div>

            <div className="mx-auto min-h-[180px] w-full max-w-full overflow-x-auto text-left text-[clamp(0.55rem,2.8vw,0.95rem)] leading-[1.7] font-bold tracking-[0.1em] whitespace-nowrap text-[var(--text-main)] [scrollbar-width:none] sm:min-h-[200px] sm:overflow-visible sm:text-lg sm:leading-relaxed sm:tracking-[0.12em] md:text-xl [&::-webkit-scrollbar]:hidden">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(20)
                    .typeString(
                      "<span style='color: var(--cyber-yellow);'>></span> SYSTEM BOOT SEQUENCE <span style='color: var(--accent);'>INITIATED...</span><br/>",
                    )
                    .pauseFor(100)
                    .typeString(
                      "<span style='color: var(--cyber-yellow);'>></span> CHECKING KERNEL... <span style='color: var(--cyber-blue);'>OK</span><br/>",
                    )
                    .pauseFor(100)
                    .typeString(
                      "<span style='color: var(--cyber-yellow);'>></span> MOUNTING FILE SYSTEM... <span style='color: var(--cyber-blue);'>OK</span><br/>",
                    )
                    .pauseFor(100)
                    .typeString(
                      "<span style='color: var(--cyber-yellow);'>></span> LOADING ASSETS... <span style='color: var(--cyber-blue);'>OK</span><br/>",
                    )
                    .pauseFor(100)
                    .typeString(
                      "<span style='color: var(--cyber-yellow);'>></span> ESTABLISHING CONNECTION TO NEURAL NET... <span style='color: var(--cyber-blue);'>OK</span><br/>",
                    )
                    .pauseFor(100)
                    .typeString(
                      "<span style='color: var(--cyber-yellow);'>></span> ACCESS <span style='color: var(--cyber-red);'>GRANTED.</span><br/>",
                    )
                    .typeString(
                      "<br/><span style='color: var(--cyber-yellow);'>></span> WELCOME, <span style='color: var(--accent);'>OPERATOR.</span>",
                    )
                    .pauseFor(300)
                    .callFunction(() => {
                      handleEnter();
                    })
                    .start();
                }}
                options={{
                  cursor: "<span style='color: var(--cyber-yellow);'>█</span>",
                  delay: 40,
                  stringSplitter: splitTypewriterText,
                }}
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-2 w-full bg-[var(--cyber-yellow)]/20">
            <motion.div
              className="h-full bg-[var(--cyber-yellow)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
