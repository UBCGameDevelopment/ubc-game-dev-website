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
            '<span class="text-[var(--cyber-blue)]">const</span> <span class="text-white">club</span> = {',
          )
          .pauseFor(300)
          .typeString(
            '<br/>&nbsp;&nbsp;<span class="text-[var(--cyber-yellow)]">members</span>: [<span class="text-[var(--cyber-red)]">"programmers"</span>, <span class="text-[var(--cyber-red)]">"artists"</span>, <span class="text-[var(--cyber-red)]">"writers"</span>, <span class="text-[var(--cyber-red)]">"designers"</span>, <span class="text-[var(--cyber-red)]">"musicians"</span>],',
          )
          .pauseFor(300)
          .typeString(
            '<br/>&nbsp;&nbsp;<span class="text-[var(--cyber-yellow)]">openTo</span>: [<span class="text-[var(--cyber-red)]">"UBC"</span>, <span class="text-[var(--cyber-red)]">"non-UBC"</span>],',
          )
          .pauseFor(300)
          .typeString(
            '<br/>&nbsp;&nbsp;<span class="text-[var(--cyber-yellow)]">focus</span>: <span class="text-[var(--cyber-red)]">"build games together"</span>,',
          )
          .pauseFor(300)
          .typeString(
            '<br/>&nbsp;&nbsp;<span class="text-[var(--cyber-yellow)]">goal</span>: <span class="text-[var(--cyber-red)]">"form teams and make projects"</span>',
          )
          .pauseFor(500)
          .typeString("<br/>};")
          .typeString("<br/>")
          .typeString('<br/><span class="text-white">club</span>.<span class="text-[var(--cyber-yellow)]">connectAcrossDisciplines</span>();')
          .pauseFor(300)
          .typeString("<br/><span class=\"text-white\">club</span>.<span class=\"text-[var(--cyber-yellow)]\">formTeams</span>();")
          .typeString("<br/><span class=\"text-white\">club</span>.<span class=\"text-[var(--cyber-yellow)]\">buildProjects</span>();")
          .start();
      }}
    />
  );
}
