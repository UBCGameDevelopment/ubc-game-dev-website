import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";

function readGeneratedModules(directory) {
  let generatedCode = "";
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      generatedCode += readGeneratedModules(path);
    } else if (entry.name.endsWith(".js") || entry.name.endsWith(".mjs")) {
      generatedCode += readFileSync(path, "utf8");
    }
  }
  return generatedCode;
}

test("includes every supplied thumbnail-backed game in the production gallery", () => {
  const generatedCode = readGeneratedModules(".vercel/output");
  const expectedGames = ["SlimeSuccumber", "Mt. Stringmore", "Born to board", "Pacemaker", "Battle for Harmony"];

  for (const game of expectedGames) {
    assert.ok(generatedCode.includes(game), `${game} should appear in the games gallery`);
  }
});
