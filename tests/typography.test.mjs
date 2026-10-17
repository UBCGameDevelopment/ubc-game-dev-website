import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";

function readBuiltStyles(directory) {
  return readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".css"))
    .map((entry) => readFileSync(join(directory, entry.name), "utf8"))
    .join("\n");
}

test("uses Rajdhani as the only site font in the production styles", () => {
  const styles = readBuiltStyles("dist/client/_astro");

  assert.ok(styles.includes('--font-main:"Rajdhani",sans-serif'));
  assert.ok(styles.includes('--font-mono:"Rajdhani",sans-serif'));
  assert.ok(styles.includes('--font-tech:"Rajdhani",sans-serif'));
  assert.ok(styles.includes('--font-pixel:"Rajdhani",sans-serif'));
  assert.ok(!styles.includes("Share Tech Mono"));
});
