import React from "react";
import Typewriter from "typewriter-effect";

export default function MissionCodeIO() {
  return (
    <Typewriter
      options={{
        delay: 40,
        cursor: "█",
        cursorClassName: "text-[var(--cyber-blue)] animate-pulse ml-1",
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(
            '<span class="text-[var(--cyber-blue)]">class</span> <span class="text-white">GameDev</span> <span class="text-[var(--cyber-blue)]">extends</span> <span class="text-white">Society</span> {',
          )
          .pauseFor(300)
          .typeString('<br/>  <span class="text-[var(--cyber-yellow)]">constructor</span>(passion, skill) {')
          .pauseFor(300)
          .typeString(
            '<br/>    <span class="text-[var(--cyber-blue)]">this</span>.objective = <span class="text-[var(--cyber-red)]">"CREATE"</span>;',
          )
          .pauseFor(100)
          .typeString(
            '<br/>    <span class="text-[var(--cyber-blue)]">this</span>.status = <span class="text-[var(--cyber-red)]">"ONLINE"</span>;',
          )
          .pauseFor(300)
          .typeString("<br/>  }")
          .pauseFor(500)
          .typeString("<br/>")
          .typeString('<br/>  <span class="text-[var(--cyber-yellow)]">deploy</span>() {')
          .pauseFor(300)
          .typeString("<br/>    build(); learn(); repeat();")
          .typeString("<br/>  }")
          .typeString("<br/>}")
          .start();
      }}
    />
  );
}
