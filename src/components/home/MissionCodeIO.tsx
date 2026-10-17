import React from "react";

export default function MissionCodeIO() {
  return (
    <>
      <span className="text-[var(--cyber-blue)]">const</span> <span className="text-white">club</span> = {"{"}
      <br />
      &nbsp;&nbsp;<span className="text-[var(--cyber-yellow)]">members</span>: [
      <span className="text-[var(--cyber-red)]">"programmers"</span>, {" "}
      <span className="text-[var(--cyber-red)]">"artists"</span>, {" "}
      <span className="text-[var(--cyber-red)]">"writers"</span>, {" "}
      <span className="text-[var(--cyber-red)]">"designers"</span>, {" "}
      <span className="text-[var(--cyber-red)]">"musicians"</span>],
      <br />
      &nbsp;&nbsp;<span className="text-[var(--cyber-yellow)]">openTo</span>: [
      <span className="text-[var(--cyber-red)]">"UBC"</span>, {" "}
      <span className="text-[var(--cyber-red)]">"non-UBC"</span>],
      <br />
      &nbsp;&nbsp;<span className="text-[var(--cyber-yellow)]">focus</span>: {" "}
      <span className="text-[var(--cyber-red)]">"build games together"</span>,
      <br />
      &nbsp;&nbsp;<span className="text-[var(--cyber-yellow)]">goal</span>: {" "}
      <span className="text-[var(--cyber-red)]">"form teams and make projects"</span>
      <br />
      {"};"}
      <br />
      <br />
      <span className="text-white">club</span>.<span className="text-[var(--cyber-yellow)]">connectAcrossDisciplines</span>();
      <br />
      <span className="text-white">club</span>.<span className="text-[var(--cyber-yellow)]">formTeams</span>();
      <br />
      <span className="text-white">club</span>.<span className="text-[var(--cyber-yellow)]">buildProjects</span>();
    </>
  );
}
