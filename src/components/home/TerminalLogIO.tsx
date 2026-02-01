import React from "react";
import Typewriter from "typewriter-effect";

export default function TerminalLogIO() {
  return (
    <div className="font-tech text-sm text-[var(--text-muted)]">
      <div className="mb-4 text-[var(--cyber-blue)]">root@ubc-gamedev:~$ ./status_log.sh</div>
      <div className="min-h-[120px] space-y-1">
        <Typewriter
          options={{
            delay: 30,
            cursor: "█",
            cursorClassName: "text-[var(--cyber-yellow)] animate-pulse",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="text-green-500">[SUCCESS]</span> Loading assets... 100%<br/>')
              .pauseFor(300)
              .typeString('<span class="text-green-500">[SUCCESS]</span> Connecting to neural net... OK<br/>')
              .pauseFor(500)
              .typeString(
                '<span class="text-[var(--cyber-yellow)]">[WARN]</span> Upcoming event detected: GAME_JAM_2026<br/>',
              )
              .pauseFor(500)
              .typeString('<span class="text-[var(--cyber-magenta)]">[ALERT]</span> New members recruiting now.')
              .start();
          }}
        />
      </div>
    </div>
  );
}
