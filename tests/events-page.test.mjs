import assert from "node:assert/strict";
import test from "node:test";

const baseUrl = process.env.TEST_BASE_URL ?? "http://127.0.0.1:4321";

test("completed event cards open their event details", async () => {
  const response = await fetch(`${baseUrl}/events`);
  assert.equal(response.status, 200);

  const html = await response.text();
  const cards = html.match(
    /<div[^>]*class="angular-card[^"]*"[^>]*>[\s\S]*?(?=<div[^>]*class="angular-card|$)/g,
  );
  const completedCards = cards?.filter((card) => />\s*Complete\s*</.test(card)) ?? [];

  assert.ok(completedCards.length > 0, "expected at least one completed event card");

  for (const card of completedCards) {
    const openingTag = card.match(/^<div[^>]*>/)?.[0] ?? "";
    assert.match(openingTag, /data-open-modal="\d+"/);
    assert.match(openingTag, /cursor-pointer/);
    assert.doesNotMatch(openingTag, /pointer-events-none/);
    assert.match(card, />\s*DETAILS\s*</);
  }
});
