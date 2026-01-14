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
      className="font-pixel mt-3 cursor-pointer text-lg tracking-widest text-[var(--brand)] uppercase transition-none hover:text-[var(--accent)] hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] md:text-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      Press Here to Create
    </motion.button>
  );
}
