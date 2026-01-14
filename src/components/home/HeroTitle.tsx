import Typewriter from "typewriter-effect";

export default function HeroTitle() {
  return (
    <h1 className="font-pixel min-h-[1.2em] text-5xl leading-none font-black tracking-tight text-[var(--text)] md:text-7xl lg:text-8xl">
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString("UBC GAME DEV").start();
        }}
        options={{
          autoStart: true,
          loop: false,
          cursor: "|",
          delay: 80,
          wrapperClassName: "typewriter-wrapper",
          cursorClassName: "Typewriter__cursor text-[var(--brand)]",
        }}
      />
    </h1>
  );
}
