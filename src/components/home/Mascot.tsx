import { motion } from "framer-motion";

interface MascotProps {
  lightSrc: string;
  darkSrc: string;
}

export default function Mascot({ lightSrc, darkSrc }: MascotProps) {
  return (
    <div className="relative w-full">
      <motion.img
        src={lightSrc}
        alt="Game Dev Mascot"
        className="h-auto w-full drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] dark:hidden"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={darkSrc}
        alt="Game Dev Mascot"
        className="hidden h-auto w-full drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] dark:block"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
