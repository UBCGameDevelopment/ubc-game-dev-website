import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StartButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleClick = () => {
    const selectMode = document.getElementById("select-mode");
    if (selectMode) {
      selectMode.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      ref={ref}
      onClick={handleClick}
      className="font-pixel cursor-pointer text-sm tracking-widest text-[var(--brand)] uppercase transition-none hover:text-[var(--cyber-magenta)] hover:drop-shadow-[0_0_12px_rgba(255,0,170,0.6)] md:text-base"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-neon-cyber flicker">&gt;</span> Press Start to Create
    </motion.button>
  );
}
