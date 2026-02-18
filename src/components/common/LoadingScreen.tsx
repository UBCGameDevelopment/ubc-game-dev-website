import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";

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
          className="font-tech fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(252, 238, 10, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(252, 238, 10, 0.1) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10 w-full max-w-2xl px-8">
            <div className="mb-8 flex items-end justify-between border-b border-[var(--cyber-yellow)]/30 pb-2">
              <span className="text-xs text-[var(--cyber-yellow)]/70">UBC_GAME_DEV_OS v2.0.0</span>
              <span className="animate-pulse text-xs text-[var(--cyber-red)]">STATUS: BOOTING</span>
            </div>

            <div className="min-h-[200px] text-lg font-bold tracking-wider text-[var(--text-main)] md:text-xl">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(30)
                    .typeString(
                      "<span style='color: var(--cyber-yellow);'>></span> SYSTEM BOOT SEQUENCE <span style='color: var(--accent);'>INITIATED...</span><br/>",
                    )
                    .pauseFor(300)
                    .typeString(
                      "<span style='color: var(--cyber-yellow);'>></span> CHECKING KERNEL... <span style='color: var(--cyber-blue);'>OK</span><br/>",
                    )
                    .pauseFor(200)
                    .typeString(
                      "<span style='color: var(--cyber-yellow);'>></span> MOUNTING FILE SYSTEM... <span style='color: var(--cyber-blue);'>OK</span><br/>",
                    )
                    .pauseFor(200)
                    .typeString(
                      "<span style='color: var(--cyber-yellow);'>></span> LOADING ASSETS... <span style='color: var(--cyber-blue);'>OK</span><br/>",
                    )
                    .pauseFor(400)
                    .typeString(
                      "<span style='color: var(--cyber-yellow);'>></span> ESTABLISHING CONNECTION TO NEURAL NET... <span style='color: var(--cyber-blue);'>OK</span><br/>",
                    )
                    .pauseFor(500)
                    .typeString(
                      "<span style='color: var(--cyber-yellow);'>></span> ACCESS <span style='color: var(--cyber-red);'>GRANTED.</span><br/>",
                    )
                    .typeString(
                      "<br/><span style='color: var(--cyber-yellow);'>></span> WELCOME, <span style='color: var(--accent);'>OPERATOR.</span>",
                    )
                    .pauseFor(1000)
                    .callFunction(() => {
                      handleEnter();
                    })
                    .start();
                }}
                options={{
                  cursor: "<span style='color: var(--cyber-yellow);'>█</span>",
                  delay: 40,
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
