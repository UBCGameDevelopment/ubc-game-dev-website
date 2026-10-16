import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync } from "node:fs";
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

const partialArchiveGames = [
  {
    title: "Millennium Line",
    thumbnail: "src/assets/games_gallery/2023-2024/millennium-line.png",
    thumbnailStem: "millennium-line.",
    sha256: "dfe65013e10f31f5e89a95845f55113bdb2eba26c097c16bdbd0a8bf83c2acc5",
  },
  {
    title: "Bark vs Byte",
    thumbnail: "src/assets/games_gallery/2023-2024/bark-vs-byte.jpg",
    thumbnailStem: "bark-vs-byte.",
    sha256: "f49c9d99e6a581e99b2748ab1cee501489d92c6202c97fb4ca9694d06f0337c0",
  },
  {
    title: "Cyber Climb",
    thumbnail: "src/assets/games_gallery/2023-2024/cyber-climb.jpg",
    thumbnailStem: "cyber-climb.",
    sha256: "3f09afc3782355762cf6d03f485af4dc9df6a078fb76e9feeb3068c0bba287b9",
  },
  {
    title: "Spider Cave",
    thumbnail: "src/assets/games_gallery/2023-2024/spider-cave.jpg",
    thumbnailStem: "spider-cave.",
    sha256: "e02675345c4d92e4ffcc1192724945e07ed86ae32626ff1dd455792d9eadf43a",
  },
  {
    title: "Jokers Requiem",
    thumbnail: "src/assets/games_gallery/2024-2025/jokers-requiem.png",
    thumbnailStem: "jokers-requiem.",
    sha256: "7a932da8a4854e4f0efe61d69ae9082978bd9cb4b7f458538a81222355cac3b7",
  },
];

for (const game of partialArchiveGames) {
  test(`includes ${game.title} with its original workbook thumbnail in the production gallery`, () => {
    const generatedCode = readGeneratedModules(".vercel/output");

    assert.ok(generatedCode.includes(game.title), `${game.title} should appear in the games gallery`);
    assert.ok(generatedCode.includes(game.thumbnailStem), `${game.title} should render its supplied thumbnail`);
    assert.ok(existsSync(game.thumbnail), `${game.title} should store its supplied thumbnail`);
    assert.equal(
      createHash("sha256").update(readFileSync(game.thumbnail)).digest("hex"),
      game.sha256,
      `${game.title} should preserve the original workbook image bytes`,
    );
  });
}

test("includes every supplied thumbnail-backed game in the production gallery", () => {
  const generatedCode = readGeneratedModules(".vercel/output");
  const expectedGames = ["SlimeSuccumber", "Mt. Stringmore", "Born to board", "Pacemaker", "Battle for Harmony"];

  for (const game of expectedGames) {
    assert.ok(generatedCode.includes(game), `${game} should appear in the games gallery`);
  }
});

test("renders the descriptions supplied for the recent archive games", () => {
  const generatedCode = readGeneratedModules(".vercel/output");
  const expectedDescriptions = [
    "A marshmallow head who can't stop running climbs a mountain.",
    "Welcome to Born 2 Board!",
    "Pacemaker is a rhythm-action game where the player must keep a steady beat",
    "Battle For Harmony is a high-fantasy HD-2D RPG",
  ];

  for (const description of expectedDescriptions) {
    assert.ok(generatedCode.includes(description), `gallery should include: ${description}`);
  }
});

test("uses the supplied Mt. Stringmore gameplay thumbnail", () => {
  const thumbnailPath = "src/assets/games_gallery/2024-2025/mt-stringmore.jpg";

  assert.ok(existsSync(thumbnailPath), "the supplied gameplay thumbnail should be stored with the game assets");

  const thumbnail = readFileSync(thumbnailPath);
  assert.equal(thumbnail.readUInt16BE(0), 0xffd8, "thumbnail should be the supplied JPEG");

  let offset = 2;
  let width;
  let height;
  while (offset < thumbnail.length) {
    assert.equal(thumbnail[offset], 0xff, "invalid JPEG marker");
    const marker = thumbnail[offset + 1];
    offset += 2;

    if (marker === 0xd8 || marker === 0xd9) continue;

    const segmentLength = thumbnail.readUInt16BE(offset);
    if (marker >= 0xc0 && marker <= 0xc3) {
      height = thumbnail.readUInt16BE(offset + 3);
      width = thumbnail.readUInt16BE(offset + 5);
      break;
    }
    offset += segmentLength;
  }

  assert.deepEqual({ width, height }, { width: 347, height: 160 });
});

test("includes every data-complete project from the three spreadsheet years", () => {
  const generatedCode = readGeneratedModules(".vercel/output");
  const expectedProjects = [
    {
      title: "Gunplay",
      description: "an immersive sim bot-war simulator game",
      thumbnail: "src/assets/games_gallery/2025-2026/gunplay.jpg",
    },
    {
      title: "PhotoLoop",
      description: "taking strangers' photo editing commissions",
      thumbnail: "src/assets/games_gallery/2025-2026/photoloop.png",
    },
    {
      title: "Project Starhaven",
      description: "a daring initiative to sow the seeds of mankind",
      thumbnail: "src/assets/games_gallery/2025-2026/project-starhaven.jpg",
    },
    {
      title: "Phaser",
      description: "use the three states of matter",
      thumbnail: "src/assets/games_gallery/2025-2026/phaser.jpg",
    },
    {
      title: "Omnia",
      description: "save your best friend from the Waste",
      thumbnail: "src/assets/games_gallery/2024-2025/omnia.png",
    },
    {
      title: "NuTREEnts",
      description: "a 2D tower defense roguelike",
      thumbnail: "src/assets/games_gallery/2024-2025/nutreents.png",
    },
    {
      title: "Star Crossed",
      description: "a bullet-hell dungeon crawler",
      thumbnail: "src/assets/games_gallery/2023-2024/star-crossed.jpg",
    },
    {
      title: "The Guardian",
      description: "Explore a toxic forest",
      thumbnail: "src/assets/games_gallery/2023-2024/the-guardian.jpg",
    },
    {
      title: "Fate's Forest",
      description: "the final guardian of a near-dead god",
      thumbnail: "src/assets/games_gallery/2023-2024/fates-forest.jpg",
    },
    {
      title: "Sushi Jam",
      description: "collecting plates of various sushi dishes to a beat",
      thumbnail: "src/assets/games_gallery/2023-2024/sushi-jam.jpg",
    },
  ];

  for (const project of expectedProjects) {
    assert.ok(generatedCode.includes(project.title), `${project.title} should appear in the games gallery`);
    assert.ok(generatedCode.includes(project.description), `${project.title} should render its supplied description`);
    assert.ok(existsSync(project.thumbnail), `${project.title} should use its supplied thumbnail`);
  }
});
