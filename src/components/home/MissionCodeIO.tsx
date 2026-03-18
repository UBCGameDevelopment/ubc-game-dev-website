import React from "react";
import Typewriter from "typewriter-effect";

export default function MissionCodeIO() {
  return (
    <Typewriter
      options={{
        delay: 15,
        cursor: "█",
        cursorClassName: "text-[var(--cyber-blue)] animate-pulse ml-1",
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(
            '<span class="text-[var(--cyber-blue)]">class</span> <span class="text-white">GameDev</span> <span class="text-[var(--cyber-blue)]">extends</span> <span class="text-white">Society</span> {',
          )
          .pauseFor(300)
          .typeString('<br/>&nbsp;&nbsp;<span class="text-[var(--cyber-yellow)]">constructor</span>(passion, skill) {')
          .pauseFor(300)
          .typeString(
            '<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-[var(--cyber-blue)]">this</span>.objective = <span class="text-[var(--cyber-red)]">"CREATE"</span>;',
          )
          .pauseFor(100)
          .typeString(
            '<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-[var(--cyber-blue)]">this</span>.status = <span class="text-[var(--cyber-red)]">"ONLINE"</span>;',
          )
          .pauseFor(300)
          .typeString("<br/>&nbsp;&nbsp;}")
          .pauseFor(500)
          .typeString("<br/>")
          .typeString('<br/>&nbsp;&nbsp;<span class="text-[var(--cyber-yellow)]">deploy</span>() {')
          .pauseFor(300)
          .typeString("<br/>&nbsp;&nbsp;&nbsp;&nbsp;build();")
          .typeString("<br/>&nbsp;&nbsp;&nbsp;&nbsp;learn();")
          .typeString("<br/>&nbsp;&nbsp;&nbsp;&nbsp;repeat();")
          .typeString("<br/>&nbsp;&nbsp;}")
          .typeString("<br/>}")
          .start();
      }}
    />
  );
}
