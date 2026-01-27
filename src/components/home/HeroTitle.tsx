import Typewriter from "typewriter-effect";

export default function HeroTitle() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Main Title */}
      <h1 className="relative z-10 min-h-[1.2em] text-4xl leading-none font-bold tracking-tight md:text-5xl lg:text-6xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("System.init()").pauseFor(300).deleteAll(20).typeString("UBC GAME DEV").start();
          }}
          options={{
            autoStart: true,
            loop: false,
            cursor: "|",
            delay: 70,
            wrapperClassName: "typewriter-wrapper text-neon-cyber",
            cursorClassName: "Typewriter__cursor text-[var(--accent)] animate-pulse",
          }}
        />
      </h1>
      {/* Reflection - using same Typewriter but flipped */}
      <div
        className="relative -mt-2 opacity-30 blur-[1px]"
        style={{
          transform: "scaleY(-1)",
          maskImage: "linear-gradient(to top, black 0%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 80%)",
        }}
        aria-hidden="true"
      >
        <h1 className="text-4xl leading-none font-bold tracking-tight text-[var(--brand)] md:text-5xl lg:text-6xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("System.init()").pauseFor(300).deleteAll(20).typeString("UBC GAME DEV").start();
            }}
            options={{
              autoStart: true,
              loop: false,
              cursor: "|",
              delay: 70,
              wrapperClassName: "typewriter-wrapper",
              cursorClassName: "Typewriter__cursor",
            }}
          />
        </h1>
      </div>
    </div>
  );
}
