// Recent game thumbnails
import wastelanders from "../assets/games_gallery/2025-2026/wastelanders.png";
import greyWake from "../assets/games_gallery/2025-2026/grey-wake.png";
import monstroCity from "../assets/games_gallery/2025-2026/monstrocity.png";
import deathKitchen from "../assets/games_gallery/2025-2026/death-kitchen.png";
import gunplay from "../assets/games_gallery/2025-2026/gunplay.jpg";
import photoLoop from "../assets/games_gallery/2025-2026/photoloop.png";
import projectStarhaven from "../assets/games_gallery/2025-2026/project-starhaven.jpg";
import phaser from "../assets/games_gallery/2025-2026/phaser.jpg";
import jokersRequiem from "../assets/games_gallery/2024-2025/jokers-requiem.png";
import getBetterSoon from "../assets/games_gallery/2024-2025/get-better-soon.png";
import omnia from "../assets/games_gallery/2024-2025/omnia.png";
import nuTREEnts from "../assets/games_gallery/2024-2025/nutreents.png";
import slimeSuccumber from "../assets/games_gallery/2024-2025/slime-succumber.png";
import mtStringmore from "../assets/games_gallery/2024-2025/mt-stringmore.jpg";
import bornToBoard from "../assets/games_gallery/2024-2025/born-to-board.png";
import pacemaker from "../assets/games_gallery/2024-2025/pacemaker.png";
import battleForHarmony from "../assets/games_gallery/2023-2024/battle-for-harmony.png";
import starCrossed from "../assets/games_gallery/2023-2024/star-crossed.jpg";
import theGuardian from "../assets/games_gallery/2023-2024/the-guardian.jpg";
import fatesForest from "../assets/games_gallery/2023-2024/fates-forest.jpg";
import sushiJam from "../assets/games_gallery/2023-2024/sushi-jam.jpg";
import millenniumLine from "../assets/games_gallery/2023-2024/millennium-line.png";
import barkVsByte from "../assets/games_gallery/2023-2024/bark-vs-byte.jpg";
import cyberClimb from "../assets/games_gallery/2023-2024/cyber-climb.jpg";
import spiderCave from "../assets/games_gallery/2023-2024/spider-cave.jpg";

// Import of pictures - 2022-2023
import sleepyChef from "../assets/games_gallery/2022-2023/sleepy-chef.png";
import antidote30xx from "../assets/games_gallery/2022-2023/antidote-30xx.png";
import apoc101 from "../assets/games_gallery/2022-2023/apoc-101.png";
import varansSeals from "../assets/games_gallery/2022-2023/varans-seals.png";
import shadowOfSpace from "../assets/games_gallery/2022-2023/shadow-of-space.png";
import umbra from "../assets/games_gallery/2022-2023/umbra.png";
import bouncyGuy from "../assets/games_gallery/2022-2023/bouncy-guy.png";
import cybercision from "../assets/games_gallery/2022-2023/cyberscision.png";
import sunshineShores from "../assets/games_gallery/2022-2023/sunshine-shores.png";

// 2020-2021
import dathora from "../assets/games_gallery/2020-2021/dathora.png";
import mythos from "../assets/games_gallery/2020-2021/mythos.png";
import sidetracked from "../assets/games_gallery/2020-2021/sidetracked.png";
import mediquest from "../assets/games_gallery/2020-2021/mediquest.png";
import constellationTango from "../assets/games_gallery/2020-2021/constellation-tango.png";
import spellrise from "../assets/games_gallery/2020-2021/spellrise.png";
import transduction from "../assets/games_gallery/2020-2021/transduction.png";
import panicTitanic from "../assets/games_gallery/2020-2021/panic-titanic.png";

// 2019-2020
import slimySewers from "../assets/games_gallery/2019-2020/slimy-sewers.jpg";
import starFarm from "../assets/games_gallery/2019-2020/star-farm.png";
import innoculated from "../assets/games_gallery/2019-2020/innoculated.png";
import contaminated from "../assets/games_gallery/2019-2020/contaminated.png";
import forgottenYellow from "../assets/games_gallery/2019-2020/forgotten-yellow.png";
import ninjastack from "../assets/games_gallery/2019-2020/ninjastack.png";

// 2018-2019
import nightParade from "../assets/games_gallery/2018-2019/night-parade.png";
import rooutes from "../assets/games_gallery/2018-2019/rooutes.png";
import michelinRun from "../assets/games_gallery/2018-2019/michelin-run.png";
import klaymation from "../assets/games_gallery/2018-2019/klaymation.png";
import joesLittleHelpers from "../assets/games_gallery/2018-2019/joes-little-helpers.png";
import electricCrescendo from "../assets/games_gallery/2018-2019/electric-crescendo.png";
import edensGarden from "../assets/games_gallery/2018-2019/edens-garden.png";

// Legacy
import swordship from "../assets/games_gallery/legacy/swordship.webp";
import traderSmith from "../assets/games_gallery/legacy/trader-smith.webp";

import type { Game } from "../types";

// Note that the youtube video must allows embeddings for it to work
export const games: Game[] = [
  // Recent games
  {
    name: "Wastelanders",
    description:
      "Survival looks ugly, but the ugly survive. Wastelanders is a dystopian turn-based card battler where desperation corrupts souls deeper than the alien Waste. Build your deck to defend Humanity's last haven, but avert their eyes. Lest they see that the Waste has already taken your beauty.",
    media: {
      type: "image",
      image: wastelanders,
    },
    gameLink: "https://store.steampowered.com/app/3830470/Wastelanders/",
    teamMembers: [
      "Kimiko Ngo - Team Lead and Narrative Lead",
      "Bonnie Lu - Art Lead",
      "Andrew Wang - Technical Lead",
      "Anrui Liu - Lead Designer & Lead Programmer",
      "Kate Louie - Artist and Writer",
      "Dixie Santo - Artist",
      "Grace Shen - Artist",
      "Marian Cheung - Artist",
      "Alex Turnbull - Artist",
      "Alissa Guo - Programmer",
      "Ch Muhammad Daud Virk - Programmer",
      "Rahul Kamath - Programmer",
      "Jack Yao - Programmer",
      "Sammy Kuang - Programmer",
      "Jonathan Wang - Programmer",
      "Daniel Schatz - Composer / Sound Engineer",
      "Elizabeth Lin - Social Media Manager",
      "Taylor Spence - Artist",
      "Sarah Feng - Artist",
      "Elysia Xia - Composer",
      "Oliver Cheung - Writer",
      "Brianna Shen - Artist",
    ],
    award: "Game of the Year (2025/2026)",
    year: "2023/2024",
  },
  {
    name: "Grey Wake",
    description:
      "In an intimate narrative-driven exploration game, wake up on a forgotten island between life and death equipped with only a compass, a telescope, and a weathered sailboat. Chart the haunted archipelago, relive faded memories, and uncover the truth about what, and who, you came here to find.",
    media: {
      type: "image",
      image: greyWake,
    },
    gameLink: "https://store.steampowered.com/app/3631930/Grey_Wake/?beta=0",
    teamMembers: [
      "Daniel Graves - Creative director, lead developer, programmer, 3D artist, animator, technical art, design",
      "Jason Li - Production, design, writing",
      "Benjamin Wang - Composition, SFX",
      "Emiliano Aguayo Diaz - Art director, 2D art lead",
      "Jonathan Xu - Systems, Programming support",
      "Ana Dwyer - Writing",
      "Yishan Liu - Character design, promotional artwork",
      "47A - Voice actress",
      "Cathy Xie - Promotional artwork",
      "Desolo Zantas - Additional SFX",
      "Coco Wang - Promotional artwork",
      "Anya Kaiya - Main character model + animation, 3d art advice",
      "Sarah Li - Singer",
    ],
    award: "Best Graphics",
    year: "2025/2026",
  },
  {
    name: "MonstroCity",
    description:
      "You are a powerful mage who has ventured into the wilderness to establish a colony for the outcast creatures of the Kingdom. You believe you can prove that these so-called “monsters” deserve a place of their own, but the King thinks otherwise. Every morning, he sends waves of his subjects, from pitchfork-wielding peasants to noble knights, to sack your settlement. Between these sieges, you must use the spoils to construct towers and improve infrastructure (and try not to commit any workers’ rights violations) before the next wave arrives at dawn!",
    media: {
      type: "image",
      image: monstroCity,
    },
    gameLink: "https://kingrolly.itch.io/monstrocity",
    teamMembers: [
      "Jack Peters (Team Lead, Programming, Art)",
      "Nicholas Liang (Programming, Art)",
      "Jagger Shergill (Programming)",
      "Janet Song (Art)",
      "Erik Li (Art)",
    ],
    award: "Audience Choice",
    year: "2025/2026",
  },
  {
    name: "Death Kitchen",
    description:
      "Death Kitchen is a fast-paced online co-op horror cooking game. Coordinate with your friends to serve alien customers who can kill you if you make a mistake. Embrace the chaos and deliver quality with your new intergalactic restaurant chain.",
    media: {
      type: "image",
      image: deathKitchen,
    },
    gameLink: "https://store.steampowered.com/app/3603380/Death_Kitchen/",
    teamMembers: [
      "Jason (Team Lead / Director, Programming, Concept, Marketing)",
      "Andrei (Art, Programming, Marketing)",
      "Dana (Programming, Concept, Marketing)",
      "Horton (Programming)",
      "Jeanette (Programming, Concept, Marketing)",
      "João (Composer, Sound Designer)",
      "Lydia (Sound Designer)",
      "Pablo (Programming)",
      "Sasha (Art)",
      "Taylor (Sound Designer)",
      "Francis (Concept)",
      "Isha (Programming)",
      "Lavina (Art, Concept)",
      "Noah (Art)",
    ],
    year: "2024/2025",
  },

  {
    name: "Get Better Soon!",
    media: {
      type: "image",
      image: getBetterSoon,
    },
    gameLink: "https://drive.google.com/file/d/1CekkFoyKejiByMGFuBMr3e_MR7SMx6pw/view?usp=drive_link",
    teamMembers: ["Lucas", "Justin", "Austin", "Raifah", "Eric", "Eliora", "Abbie", "Shashank", "Marshall", "Sarah"],
    year: "2025/2026",
  },
  {
    name: "Gunplay",
    description:
      "This build of Gunplay is a proof of concept for an immersive sim bot-war simulator game. The role of the player is not to be a hero, but rather to observe and participate in a large-scale battle happening around them.",
    media: { type: "image", image: gunplay },
    gameLink: "https://drive.google.com/drive/folders/1lIys-YDGMl6H4bD35MomH0DP9QVYwDvK?usp=drive_link",
    teamMembers: [
      "Bailey - Team Lead",
      "Felix - Programming, Icon Design, 3D Art",
      "Ruirui - Programming, 3D Art, Level Design",
      "Krishna - 3D Art, Sound + Music",
      "Nathan - Progamming",
      "Caden - Progamming",
      "Owen - Progamming",
      "Jon - Progamming Lead",
      "Dilsher - Sound Lead",
    ],
    year: "2025/2026",
  },
  {
    name: "PhotoLoop",
    description:
      "In a time of innovation and technological breakthrough, you somehow find yourself stuck with the world's oldest PC, equipped with the world's worst editing software. And after recently joining the ranks of the unemployed, you are left with little choice but to make money online in the best way you can think of: taking strangers' photo editing commissions.",
    media: { type: "image", image: photoLoop },
    gameLink: "https://drive.google.com/drive/folders/1bPg6MAPiGq74_-h4VLa9-fW1MGhP5SDd?usp=drive_link",
    teamMembers: [
      "Eva Lian - Lead Programmer",
      "Munn Chai - Programmer",
      "Tyler Yih - Programmer",
      "Felix Liu - Programmer",
      "Angela Li - Artist",
      "Kylie Ng - Artist",
      "Kristin Li Chan - Artist",
      "Aria - Artist",
      "Jaqlyn Ai - UI Designer, Writer",
      "Jasper Ellis - Writer",
      "John - Writer",
      "Marcus Lim - Sound Designer/Composer",
    ],
    award: "Best Concept",
    year: "2025/2026",
  },
  {
    name: "Project Starhaven",
    description:
      "In the year 2056, faced with an apparent threat to Earth’s very existence, the United Nations has devised Project Starhaven, a daring initiative to sow the seeds of mankind across the solar system and ensure humanity lives on. You’ve been named Chief Colony Planner, and your first stop is the Moon! But that’s the official story. Given that your new boss is the world’s first trillionaire, and your promised shipment of supplies has gone missing, some members of your team are having other ideas regarding the project’s true purpose…\n\nIn this near-future space colony city-builder, gather resources, manage your colonists, and construct thriving colonies across the solar system. Research upgrades and grow your economy to overcome the odds and become self-sufficient in the hostile reaches of space!",
    media: { type: "image", image: projectStarhaven },
    gameLink: "https://drive.google.com/drive/folders/1qn4jads5ES7prbtX8X2adK8JXqVlaC_H?usp=drive_link",
    teamMembers: [
      "Patrick Zhou - Team Lead, Programming, Design, Writing",
      "Alex Xu - Programming, Design",
      "Gavin Wei - Programming, Design",
      "Ariel Liu - Art, Programming",
      "Leon Liang - Programming, Design",
      "Arshvir Bhandal - Programming",
      "Quinn Lieu-Ashthorn - Programming",
      "Caroline - Art, Writing",
      "Rhiannon Liu - Art, Writing, Design",
      "Ben Law - Music",
      "Roman DiGirolamo - Writing",
      "Tyler Kerswell - Programming",
    ],
    year: "2025/2026",
  },
  {
    name: "Phaser",
    description:
      "PHASER is a platforming game where you use the three states of matter, each with its own unique qualities, to overcome obstacles and complete levels. We currently have a complete tutorial world to teach you the game, an industrial world with a variety of interesting platforming challenges, and a Cave World that emphasizes exploration for a new yet familiar take on the system.",
    media: { type: "image", image: phaser },
    gameLink: "https://drive.google.com/file/d/1CIg0INgEEHFMk0kUbljSnaKn-Jyq96ED/view?usp=drive_link",
    teamMembers: [
      "Ethan Anderson: Project Lead / Design",
      "Pai Peng: Technical Team Lead",
      "Yooben Hong: Programming / Artist",
      "Andy Wu: Programmer",
      "Adison: Programmer",
      "Leyi: Artist",
      "Jun: Artist",
      "Varun Giritharan: Music / Sound Design",
    ],
    award: "Best Game Play",
    year: "2025/2026",
  },
  {
    name: "Jokers Requiem",
    media: { type: "image", image: jokersRequiem },
    gameLink: "https://drive.google.com/drive/folders/1Ih66SrRaRt2qGOtTkFSNYpaGem67dnhL?usp=drive_link",
    teamMembers: [
      "Lucas - Sparemeh (Lead)",
      "Julia - jooleya",
      "Tina  - tuna0725",
      "Ben",
      "Victoria",
      "Allen",
      "Zachary  - axzyl",
      "Brendan - Bdan35",
      "Danina - Alinishia#8634",
      "Eno - Eno #7080",
      "Benjamin - bencloud",
      "And others....",
    ],
    year: "2024/2025",
  },
  {
    name: "Omnia",
    description:
      "The clock is ticking as you climb through the world of Omnia on a mission to save your best friend from the Waste; an alien substance that mutates all organic matter. Navigate through tunnels of puzzles, perform satisfying combos on Waste-turned creatures, and uncover the secret of the Waste in Omnia: The Journey Upwards.",
    media: { type: "image", image: omnia },
    gameLink: "https://drew-gnaw.itch.io/omnia-the-journey-upwards",
    teamMembers: [
      "Kimiko Ngo - Team Lead and Narrative Lead",
      "Andrew Wang - Programming Lead",
      "Anrui Liu - Game Designer",
      "Bonnie Lu - Artistic Lead",
      "Daniel Schatz - Audio Lead",
      "Arthur Guo - Programmer",
      "Jack Yao - Programmer",
      "Jonathan Wang - Programmer",
      "Rahul Kamath - Programmer",
      "Sammy Kuang - Programmer",
      "Amanda Yau - Artist",
      "Alex Turnbull - Artist",
      "Grace Shen - Artist",
      "Marian Cheung - Artist",
      "Sarah Feng - Artist",
      "Taylor Kim - Artist",
      "Elizabeth Lin - Social Media Manager",
      "Kate Louie - Writer",
      "Tiana Khandelwal - Writer",
    ],
    year: "2024/2025",
  },
  {
    name: "NuTREEnts",
    description:
      "NuTREEnts is a 2D tower defense roguelike about growing and expanding your forest. Plant saplings, fend off bugs, and explore a desolate planet while you grow a mighty colony of trees!",
    media: { type: "image", image: nuTREEnts },
    gameLink: "https://drive.google.com/drive/folders/1BWqCmgB4l0m8PWm7d5p6oSmGFrdrkt3t?usp=drive_link",
    teamMembers: [
      "Munn Chai - Lead Programmer",
      "Tyler Yih - Programmer, Game Designer",
      "Eva Lian - Programmer",
      "Marcus Lim - Programmer, Sound Designer/Composer",
      "Felix Liu - Programmer, UI Designer, Artist",
      "Jaqlyn Ai - UI Designer, Game Designer",
      "Jasper Ellis - Game Designer",
      "John - Game Designer",
    ],
    year: "2024/2025",
  },
  {
    name: "SlimeSuccumber",
    media: {
      type: "image",
      image: slimeSuccumber,
    },
    year: "2024/2025",
  },
  {
    name: "Mt. Stringmore",
    description:
      "A marshmallow head who can't stop running climbs a mountain. A ball of yarn keeps them from going off the rails. A fresh new take at 2D autorun platformers and the dangers of always wanting more.",
    media: {
      type: "image",
      image: mtStringmore,
    },
    gameLink: "https://permafrosted.itch.io/mt-stringmore",
    teamMembers: [
      "Aden Cross",
      "Jen Taruno",
      "Kai Nah",
      "Jaq Ai",
      "Jonathan Nah",
      "Sparsh Inanda",
      "Eddie Yoshie",
      "Michael Sam",
      "Simon Lin",
      "Krishna Garcha",
      "Diana Alhany",
      "Dilsher Grewal",
      "Frank Yu",
      "Philip Macau",
      "Silvan Ghahri",
      "Aditya Adiraju",
      "Siddhant Patil",
    ],
    year: "2024/2025",
  },
  {
    name: "Born to board",
    description:
      "Welcome to Born 2 Board! Take control of Buddy, the shreddiest shredder on the mountain! Make it to the bottom of the hill as fast as you can! Or at least faster than your buddy…",
    media: {
      type: "image",
      image: bornToBoard,
    },
    gameLink: "https://berc33.itch.io/born-2-board",
    teamMembers: [
      "Lucas - Team Lead",
      "Bailey - Programming",
      "Winsor - Programming",
      "Eric - Programming",
      "Paige - Art and Sound",
      "Cindy - Art and Sound",
      "Taha - Art and Sound",
      "Caitlin - Art and Sound",
      "Elio - Art and Sound",
    ],
    award: "Best Audio",
    year: "2024/2025",
  },
  {
    name: "Pacemaker",
    description:
      "Pacemaker is a rhythm-action game where the player must keep a steady beat while dodging enemy attacks to survive. Time your movements to the beat while your enemies throw fire, lightning, and shoes at you!",
    media: {
      type: "image",
      image: pacemaker,
    },
    gameLink: "https://drive.google.com/drive/folders/17k0IgS68pp2EjqEBwPQvsJB2M2V1MYPU?usp=drive_link",
    teamMembers: [
      "Aly",
      "Amanda",
      "Amelie",
      "Andrew",
      "Charlie",
      "Felicity",
      "Joshua",
      "Keelan",
      "Maddy",
      "Marcus",
      "Matthew",
      "Rad",
      "Zoe",
    ],
    year: "2024/2025",
  },
  {
    name: "Battle for Harmony",
    description:
      "Battle For Harmony is a high-fantasy HD-2D RPG focusing uniquely on a musical world. You play as a Violin who has just arrived at the Castle of Harmony in Melodonia—the Kingdom of Music—and must try to liberate the kingdom from the clutches of the Kingdom of War by retaking control of the Anchors: the lodes that generate the music kingdom’s powers.",
    media: {
      type: "image",
      image: battleForHarmony,
    },
    teamMembers: [
      "Han - Programmer",
      "Cory - Level Designer, Writer",
      "Ina - Programmer",
      "Kush - Team Lead, Programmer, Game Design",
      "Amanda - Programmer",
      "Jorene - Programmer",
      "Raifah - Programmer",
      "Roman - Lead Audio Designer",
      "Kii - Audio Designer",
      "Tanya - 2D Artist",
      "Elora - 2D and 3D Artist",
    ],
    year: "2023/2024",
  },
  {
    name: "Star Crossed",
    description:
      "Star Crossed is a bullet-hell dungeon crawler where you play as Deuce: a suave scavenger looking for a quick buck. During what he thought would be a big break, he ends up crash landing deep into the core of the planet Arcaemi. There, he must fight- or flirt- his way up to the surface blast off.",
    media: { type: "image", image: starCrossed },
    gameLink: "https://drive.google.com/drive/folders/1B_koc3z43_7RxA8ojRVDoQ9F-rLJNzE1?usp=sharing",
    teamMembers: [
      "Patti/patticatti - Team Lead/Programmer",
      "Sasha/chrolla - Team Lead/Artist",
      "Arthur/artland - Lead Artist",
      "Jojo/captainguyliner - Artist",
      "Val/footcelery - Artist",
      "Corina/idkkkk__ - Artist",
      "Sawyer/Tieguy - Artist",
      "Xue/kaworin - Artist",
      "Arpit/krarpit - Lead Programmer/Artist",
      "Xavier/savagier - Programmer",
      "Jade/jade.wilk - Lead Writer",
      "Oliver/healthcaredotgov - Writer/Musician",
      "Alastair/Alasgor - Writer/Musician",
      "Alisa/alisa4013 - Programmer",
      "Emily/emilyh0625 - Programmer",
    ],
    year: "2023/2024",
  },
  {
    name: "The Guardian",
    description:
      "Explore a toxic forest that despises your very presence in search of answers. An adventurer and their stone guardian that need to work together to survive in this turn-based roguelike. Using various spells with endless combinations to best the forest and seek the truth behind the forest.",
    media: { type: "image", image: theGuardian },
    gameLink: "https://drive.google.com/file/d/1Wa75sX4bcJNsB2YOfloedjGuN01En2uk/view?usp=drive_link",
    teamMembers: [
      "Ailith - Team Lead/Designer",
      "Anika - Music/Music Lead",
      "Jen - Character Sprite/Art Lead",
      "Angie - Concept Art (retired)",
      "Kirpyu - Concept Art (retired)",
      "Xavier - Programming/Programming Lead",
      "Hejia - Programming",
      "Andy - Programming",
      "M'aique - Programming (retired)",
      "Anna - Programming (retired)",
      "Derek - Programming (retired)",
      "Anthony - Programming (retired)",
      "Rishav - Programming (retired)",
      "JY - Programming (retired)",
      "Shark - Programming (retired)",
      "Nissan - Programming (retired)",
      "Devin - Programming (retired)",
      "Kyle - Management",
      "Meaghan - Management (retired)",
    ],
    year: "2023/2024",
  },
  {
    name: "Fate's Forest",
    description:
      "The year is unknown. The month is unknown. The day is unknown. The hour is unknown. The war against the forces of Death has been going on as long as you can remember, and you’ve been losing as long as you can remember. So here you stand in Fate’s Forest; back to the final statue of your patron, wielding a sword much too large for your weakened arms, with the forces of death closing in from all sides.\n\nThe world is ending, but how many of them can you take down with it?\n\nIn Fate’s Forest you play as the final guardian of a near-dead god. Waves of enemies will charge you unceasingly, and you must destroy them to prevent them from touching the statue. If too many make it through, you lose.\n\nUniquely, since your character is a young guardian, they do not possess the strength to wield a mighty guardian’s sword effectively, but they can definitely use its momentum to devastating effect!",
    media: { type: "image", image: fatesForest },
    gameLink: "https://drive.google.com/drive/folders/1oXPSrfBxvqNypBWXtoG2najcMS0AbfI-?usp=sharing",
    teamMembers: [
      "Ethan Anderson - Team Lead, Designer/Writer",
      "Markus Li - Programmer, Artist",
      "Bryce Santiago - Programmer, Musician",
      "Bethany Guo - Artist",
    ],
    year: "2023/2024",
  },
  {
    name: "Sushi Jam",
    description:
      "Sushi Jam is a rhythm game in which you play as a hungry customer collecting plates of various sushi dishes to a beat. As a hungry customer, you must time the moment you take sushi plates along with the beat of the song!",
    media: { type: "image", image: sushiJam },
    gameLink: "https://drive.google.com/drive/folders/11reES2XxL8HnJ1DkM0nSxy348vIXqwQA?usp=sharing",
    teamMembers: [
      "Brian Moniaga - Art, Programming, Level Designer",
      "Lily Zhang - Art, Programming, Music, Level Designer",
      "Andrew - Ported game to windows.",
    ],
    year: "2023/2024",
  },

  {
    name: "Millennium Line",
    description:
      "Millennium Line is a 2d story driven side scroller that puts you in the shoes of Lionel, a detective who was on his way to meet his son. Everything appears to be normal as he gets off the bus at the metro station, however he starts noticing that things are not what they appear to be. Strange feelings of deja vu and a mysterious caller were tingling Lionel’s detective senses and he was going to get to the bottom of it like he always did. He WILL NOT fail again. Uncover the secrets buried within Lionel’s heart, unravel the mysteries that have befallen our protagonist and you’d better be quick for time is running short. The Millenium Line is arriving in !@@%#$ minutes. The Next Station is: Death.",
    media: { type: "image", image: millenniumLine },
    gameLink: "https://github.com/Sparemeh/Millennium-Line",
    teamMembers: [
      "Lucas Liu - Team Lead",
      "Ben - Programming",
      "Tina - Programming",
      "Brendan - Programming",
      "Zachary - Programming",
      "Danina -  Art",
      "Victoria - Art",
      "Julia - Art",
      "Konnor - Music",
      "Allen - Story",
    ],
    year: "2023/2024",
  },
  {
    name: "Bark vs Byte",
    media: { type: "image", image: barkVsByte },
    gameLink: "https://drive.google.com/file/d/1C6B5Sx-IDc8qRqn3sI34ACkSBu6KW8is/view?usp=drive_link",
    teamMembers: [
      "Haoxuan (Kevin) - somerandomnerd",
      "Jonathan - reallyrickastley",
      "Michael - mc ronald's part timer#7804",
      "Aryan - ThunderCookie#0079",
      "Chris - Chriz",
      "Prithvi  - RevolZ #6123",
      "Suwetha - ig#6574",
      "Jason - 57#3034",
      "Gordon - tinythistle",
      "Kevin - yk#1417",
    ],
    year: "2023/2024",
  },
  {
    name: "Cyber Climb",
    description:
      "After a catastrophe struck the surface of the earth, a small portion of the human population was forced to move underground into the depths of a hastily made “tower”. Several generations passed, and the once comfortable life has begun to weigh on the residents of the lower levels. Put yourself in the shoes of Wes, a simple man with hopes of climbing the tower and returning with technology that could save his friend’s life.",
    media: { type: "image", image: cyberClimb },
    teamMembers: [
      "Max",
      "Ural",
      "Alwyn",
      "Ariel",
      "Brandon",
      "Hanna",
      "Kagan",
      "Liam Matt",
      "Nico",
      "Paige",
      "Ryan",
      "Sarah",
      "Senlin",
      "Zheng",
    ],
    year: "2023/2024",
  },
  {
    name: "Spider Cave",
    description: "There’s a spider - don’t let it catch you ;). Find the rock and break the barrier to start.",
    media: { type: "image", image: spiderCave },
    teamMembers: [
      "Ahren",
      "Byung Min",
      "Melanie",
      "Douglas",
      "Joseph",
      "Edrick",
      "Mike",
      "Karan",
      "Udhav",
      "Kate",
      "Kat",
    ],
    year: "2023/2024",
  },

  // 2022-2023 Games
  {
    name: "Sleepy Chef",
    description:
      "After staying up all night studying for culinary exams, your sleep becomes restless. Unbeknownst to you, a hidden power has been passed down through generations of Japanese chef ancestors. You can sleep-cook in your dreams! Remembering your grandmother's recipes, you sleep-cook the night away! Hopefully you can pass culinary school from sleepwalking! The player can grab items and utensils with a left click. They can throw the item by dragging and releasing left click. To rotate the item, drag right click while holding an item.",
    instructions:
      "• Use W A S D and the mouse to move.\n• The player can grab items and utensils with a left click.\n• Throw the item by dragging and releasing left click.\n• To rotate the item, drag right click while holding an item.\n• Jump (SPACE), crouch (CTRL), or interact with objects (E).\n• Press TAB to view the recipe card.\n• The end of the level, place the plate on the the lit up table.",
    media: {
      type: "image",
      image: sleepyChef,
    },
    teamMembers: [
      "Anya Higano",
      "Luke Joe",
      "Alex Melanson",
      "Emily Zhang",
      "Reza Rahnama",
      "Bryn Shaffer",
      "Reza Rahnama",
      "Kyle van Winkoop",
    ],
    award: "Best Graphics",
    year: "2022/2023",
  },
  {
    name: "Antidote 30XX",
    description:
      "The world outside, as you know it, has been completely destroyed. 10 years ago, 99% of the people turned into zombies.The Elites built an underground base and gathered all the other survivors so that humanity could have a chance at survival. Today we all live in a deteriorating base with a declining population and limited supplies. We need to find the cure urgently. You, the head researcher, have been working tirelessly on fighting for humanity’s future for the past seven years. Now you’re at the very last step. After countless experiments, you finally figured out the ingredients needed for the cure. Now, you need to collect them. With the elites on your back, a betrayal by a close friend, and time running out, you need to travel through different timelines, extract information from other members of the base and tide over multiple challenges to finally obtain the ingredients.",
    instructions:
      "• Use the A, W, S and D keys to move around the map.\n• Press E key to converse with characters, start/close the puzzle interface, collect items for inventory.",
    media: {
      type: "image",
      image: antidote30xx,
    },
    gameLink: "https://drive.google.com/drive/folders/1SDfKb5Tcs0WBhRYjWpVkDN-tmCby87wY",
    teamMembers: [
      "Levi Lu (Project Team Lead)",
      "So Nakamura (Programming)",
      "Ural Tunaboyu (Programming)",
      "Asher Arya (Programming)",
      "Max Botsis (Level Design & Writing)",
      "Kyle van Winkoop (Art)",
      '"Manu" Pocholo Ramento (Art)',
      "Simon Fang (Art)",
      "Khushi Sharma (Writing)",
      "Keilah Abello (Writing)",
    ],
    year: "2022/2023",
  },
  {
    name: "APOC101",
    description:
      "You thought regular classes were hard, try getting your degree in an apocalypse! Whether you wanted to take it or not, APOC 101 is a mandatory course in this pandemic. Put on your sensible footwear and finish finals week before the zombies finish you! Explore minigames and help out the UBC community to leave this nightmare.",
    media: {
      type: "image",
      image: apoc101,
    },
    gameLink: "https://drive.google.com/drive/folders/1-3M8UCEoFV3XtTI2VsDkA3zyTOWYdySa",
    teamMembers: [
      "Pedro Novais",
      "Calvin Cavanagh",
      "Ahren",
      "Zehao Lu",
      "Echo",
      "Nishant Molleti",
      "Ruixue Luo",
      "Arpit Kumar",
      "Hannah Lee",
      "Sophie Chen",
      "Lucas Lobo",
      "Rosalyn Carr",
      "Kristen",
    ],
    year: "2022/2023",
  },
  {
    name: "Varan's Seals",
    description:
      "Step into the role of a student of demonic lore as you retrace the footsteps of lost scholar Varan and attempt to decipher the hieroglyphic language of the demons. Uncover inscriptions in your surroundings, fill your grimoire by translating demonic symbols, and unravel ancient spellwork with your newfound mastery. Relying only on your wits and clues left behind by your predecessors, will you be the first to unlock Varan's Seals?",
    instructions:
      '• Use WASD or arrow keys to move\n• Move your mouse to look around\n• Use Space to jump\n• Use E to interact with objects (objects with outlines have clues!)\n• Use your mouse for on-screen interactions\n• Use B to open and close the Daemonicum\n    ○ As you see more symbols, they will appear in the Daemonicum.\n    ○ Add your own notes to each page!\n• When you\'re ready, you may interact with the Reliquary (it has a red outline)\n    ○ Click to turn the rings in the Reliquary\n    ○ Press "Activate" to attempt to break the seal!',
    media: {
      type: "image",
      image: varansSeals,
    },
    gameLink: "https://drive.google.com/drive/folders/1VHvA0-8irwn7OhprcMdQFt8lPWjeIvNm",
    teamMembers: [
      "Floria Gu (Artist, team lead)",
      "Jon Nah (Programmer)",
      "Ethan Anderson (Writer)",
      "Chun Yan Luo (3D Artist)",
    ],
    award: "Best Concept",
    year: "2022/2023",
  },
  {
    name: "In the Shadow of Space",
    description:
      "You've inexplicably awoken to find yourself on the surface of a distant inhospitable exoplanet, memories fragmented and power supplies draining fast. Collect resources and use your wits and technology to survive as best you can against the dangers of the planet. In the Shadow of Space is a 2.5D survival-horror game, and the current demo sees you devoting your efforts towards enduring an eclipse event that bathes the planet in dangerous darkness. There is so much we don't know about what lurks within the endless abyss of space...",
    media: {
      type: "image",
      image: shadowOfSpace,
    },
    gameLink: "https://drive.google.com/drive/folders/1-QKCn9uaW0Qw3XTlIvYXsc262laaOtdN",
    teamMembers: [
      "Chantal Hemmann",
      "Linda Chu",
      "Kyle Brent",
      "Joshua Riefman",
      "Rumbidzai Chinamo",
      "Joyce Park",
      "troopsushi",
    ],
    award: "Best Gameplay",
    year: "2022/2023",
  },
  {
    name: "Umbra (by Avalon Games)",
    description:
      "You play as a kid who's trying to c ope with the passing of his parents. You will traverse through your old home in your dreamscape, familiar but now swarmed with monsters, and defeat your inner demons one room at a time. This demo includes the first level only, which takes place in the kid's bedroom. The monsters are shadows; you need to use your shadow to fight them! You start with the nightlight in your hand. While the nightlight is in your hand, you cannot move. You need to place the light by right - clicking at a location of your choosing. The placement of the light is crucial to your success in this game, as the position of your shadow depends on the position of the light. You can always retrieve the light by right - clicking and then place it at a new location in the same way.",
    instructions:
      "Use WASD to move and left - click to swing your sword! Remember that it is the shadow of your sword that can kill the enemies. You can also press Space for a small dash to get you out of tough situations.",
    media: {
      type: "image",
      image: umbra,
    },
    gameLink: "https://drive.google.com/drive/folders/1z7lErBxrF1ICisJlNnMt60Wd0tMZZX8s",
    teamMembers: [
      "Bailey Brantigham",
      "Allen Chiang",
      "Emma Greville",
      "Xue Huang",
      "Kaitlyn Russell",
      "Alexandria Vido",
      "Dean Yang",
      "William Zhou",
    ],
    award: "Game of the Year",
    year: "2022/2023",
  },
  {
    name: "The Lengend of Bouncy Guy",
    description:
      "Demons have overrun the world, terrorizing the kingdom and claiming the throne as their own. Will you take up the mantle of the Hero and save this world before it's too late? Joining your side will be a dog mage who holds tremendous willpower, and a mysterious character who claims he was there when the demons were summoned. Take control of the battlefield by mastering the altered gravity of this world. Pull and release your units to deal damage and defeat the enemies! Your legend awaits, Hero!",
    instructions:
      '• Using mouse, click on player you want to move and drag back (or forward)\n    ○ This will show a pink arrow that grows in size depending on how much you drag the mouse\n    ○ Larger size represents "power" of launch. Bigger arrow = bigger movement\n• Use mouse and click on arrows for next in the dialogues\n• If game over, escape key to return to main menu\n• To leave game otherwise, use Alt+F4 to exit application',
    media: {
      type: "image",
      image: bouncyGuy,
    },
    gameLink: "https://drive.google.com/drive/folders/1gOo_Ary643mU5Z-FfkKh-Pg6qP3HeKe8",
    teamMembers: [
      "William Robert Ko (Story, Programming, Team Lead)",
      "Oleg Yurchenko (Programming)",
      "Kimi Ngo (Story)",
      "Jane Wan (Audio)",
      "Corey Chan (Artist)",
      "Bonnie Lu (Artist)",
    ],
    year: "2022/2023",
  },
  {
    name: "Cybercision",
    description:
      "A puzzle/minigame game with visual novel elements and story. The player will use their logical and finesse skills to perform cybernetic surgery on a grab bag of wacky patients and customers to experience the daily life of Firth in the rain-drenched cyberpunk setting of Monsoon City.",
    instructions:
      "• Use the keyboard and mouse for most interactions\n    ○ Use the arrow keys and space bar to select dialogue options\n• When debugging a chip, click to shoot the spiders before time runs out! Your shots recharge over time.\n• When charging a battery, trace your mouse over the electric circuit\n• When wiring a hand, drag the correct wire to the glowing slot on the wiggling finger. Click rapidly to extinguish any fires so your charge does not run out!\n• When restarting a heart, watch the cursor as it passes over the two icons. Press left click to activate one icon, and right click to activate the other. Continue pumping the art until time runs out and it is stable!",
    media: {
      type: "image",
      image: cybercision,
    },
    gameLink: "https://drive.google.com/drive/folders/1VNFLoxq7u5UtEV0QYybHxBZzngGdwTlX",
    teamMembers: [
      "Collin Eng (team lead)",
      "Darryl Tanzil",
      "Emma Nash",
      "Elsa Wei",
      "Erick Jovan Muljadi",
      "Harry Kim",
      "Tyler Hasman",
      "Matt Plyukhin",
      "Michelle Wang",
      "Zoe Khan",
    ],
    award: "Audience Choice + Best Audio",
    year: "2022/2023",
  },
  {
    name: "Sunshine Shores",
    description:
      "Decorate and personalize your home with different sets of furniture, while enjoying the beauty of the nature around you. How many points can you rack up as you try to collect all 5 of the unique fish in this world?",
    instructions:
      "• Use WASD to move around\n• When near a pool of water, press E to begin fishing\n    ○ Use F to keep the meter on the white box until you've caught a fish and gain it's corresponding points\n    ○ If you fail to catch the fish you lose 15 points\n• Use the mouse scroll wheel to move up and down your toolbar\n• Press 1 to place the furniture you are currently hovered over in your toolbar\n• Press 2 while standing in front of a piece of furniture to place it back into your toolbar\n• Stand in front of the house door to enter\n    ○ Stand on the red carpet inside of the house to exit",
    media: {
      type: "image",
      image: sunshineShores,
    },
    gameLink: "https://drive.google.com/drive/folders/1iuZSQZfIgTSTYPAqO1GD_FmbmUxh7QCZ",
    teamMembers: [
      "Gavin Lau",
      "Justin Li",
      "Michael Tuntang",
      "Hailey Han",
      "Jana Chittarath",
      "Lavanya Menon",
      "Josephine Huang",
      "Edrick Belmiro",
    ],
    year: "2022/2023",
  },

  // 2021-2022 Games
  {
    name: "Mnemosyne",
    media: {
      type: "video",
      videoUrl: "https://www.youtube.com/embed/2QSXg75v2Ck?si=syKR9RjCmjZFNxSJ",
    },
    teamMembers: ["Willam", "Johnson", "Leo", "Frank", "Emma", "Vitor", "Tyler", "Allen", "Maahi"],
    year: "2021/2022",
  },
  {
    name: "Lice Communism",
    media: {
      type: "video",
      videoUrl: "https://www.youtube.com/embed/WO5afc9r0sA?si=JuZuHamW-KyJ-8hK",
    },
    teamMembers: ["Eric", "Jenny", "Kelcy", "Matias", "Diego", "Yew", "Harper", "Youssef", "Peter", "Jonathan"],
    year: "2021/2022",
  },
  {
    name: "Spellrise",
    media: {
      type: "video",
      videoUrl: "https://www.youtube.com/embed/XrRvySn8tSc?si=hm27tvlB7S-L80Ap",
    },
    teamMembers: ["Arta. Reuben", "Stephane", "Adam", "Shiyan"],
    year: "2021/2022",
  },
  {
    name: "Viewpoint",
    media: {
      type: "video",
      videoUrl: "https://www.youtube.com/embed/efJZ0UF7cag?si=e5wbm1VvUP8h42jq",
    },
    teamMembers: [
      "Diego",
      "Adrienne",
      "Denton",
      "Mohan",
      "Miranda",
      "Maximus",
      "Raymond",
      "Jay",
      "Shuang",
      "Camilo",
      "Vito",
    ],
    year: "2021/2022",
  },
  {
    name: "Dathora",
    media: {
      type: "video",
      videoUrl: "https://www.youtube.com/embed/HSTv4tnKHO8?si=xGhCS0_DKz2yzNaU",
    },
    teamMembers: ["Kevin", "Howard", "Sarina", "Nuo", "Nasif", "Preston", "Devon"],
    year: "2021/2022",
  },
  {
    name: "Sidetracked!",
    media: {
      type: "video",
      videoUrl: "https://www.youtube.com/embed/0rrs4dvRcrQ?si=7UyabiWNh7e_frSg",
    },
    teamMembers: ["Ramy", "Nyan", "Vihara", "Brett", "Casey", "Lakshya", "Phanndateevint", "Allen"],
    year: "2021/2022",
  },
  {
    name: "MediQuest",
    media: {
      type: "video",
      videoUrl: "https://www.youtube.com/embed/dTYLhyExTbw?si=L4ozB2OJh2jreYTC",
    },
    teamMembers: ["Payam", "Apoorv", "Ariel", "William", "Syndio", "Kenny", "Thomas", "Aung", "Methasit"],
    year: "2021/2022",
  },

  // 2020-2021 Games
  {
    name: "Dathora",
    description:
      "A dark fantasy dungeon-crawler with monstrous creatures lying in the deepest depths. Hack and slash your way to the corrupted Founder in order to banish them and restore balance to the world.",
    media: {
      type: "image",
      image: dathora,
    },
    teamMembers: [
      "Keegan",
      "Kevin",
      "Yuya",
      "Eugene",
      "Valery",
      "Zoe",
      "Tanmay",
      "Khammy",
      "Sophie",
      "Richard",
      "Sebastian",
    ],
    award: "Best Audio",
    year: "2020/2021",
  },
  {
    name: "Mythos",
    description:
      "Mythos is an action platformer RPG that brings out the Lovecraftian in all of us. As the player  traverses through the world, they figure out that reality and truth are very different things. Explore with your ever-growing library of magical abilities that pushes the boundaries of platforming and combat strategies. Uncover secret endings and dangerous truths as you are challenged to the point of insanity by the physical manifestations of reality's true nature.",
    media: {
      type: "image",
      image: mythos,
    },
    teamMembers: [
      "David Boguslavksy (Project Lead, Artist, Animator)",
      "Daisy Wan (Artist)",
      "Vivian Sam (Artist)",
      "Danny Deng (Artist)",
      "Amy Lee (Artist)",
      "Advik Ayya (Programmer)",
      "Jin Kim (Programmer)",
      "TJ Wu (Programmer)",
      "Tyler Mann (Programmer)",
      "Ethan Wescoatt (Storywriter)",
      "Meaghan Marina (Storywriter)",
      "Daniel Steiner (Musician & SFX)",
    ],
    award: "Platinum Award (2020-2021) + Best Graphics (2019-2020)",
    year: "2020/2021",
  },
  {
    name: "SideTracked",
    description:
      'SideTracked! is a low-poly, casual action RPG where any group of friends can group and side with good or evil while becoming superhuman in strength, power, or magic! Players take on the role of "assistants" stolen from their home dimensions by a hugely powerful but disorganized entity. Complete quests in the entity\'s pocket dimension to help them restore order or go against the commands issued to you and take vengeance for being forcefully abducted.',
    media: {
      type: "image",
      image: sidetracked,
    },
    teamMembers: ["Lukas", "Kanwar", "Brett", "Joshua", "Brandon", "Cherry", "Leo", "Brian", "Casy", "Helyn"],
    year: "2020/2021",
  },
  {
    name: "Mediquest",
    description:
      "Play as a medical intern in a story-driven game, learning about how be a resident doctor while getting to know patients, coworkers, and senior physicians, with the goal of becoming a resident surgeon",
    instructions: "To play, download the game files, extract them into a folder, and boot up the 'Mediquest.exe' file.",
    media: {
      type: "image",
      image: mediquest,
    },
    gameLink: "https://drive.google.com/drive/folders/1r6IfwmpbeF3q1Vndk0i1fGaks87-wKmE",
    teamMembers: [
      "Payam",
      "Aaditya",
      "Minchan",
      "Daniel",
      "Stephanie",
      "Jenny",
      "Apoorv",
      "Shreyans",
      "Rodrigo",
      "Alexander",
    ],
    award: "Game of the Year + Best Gameplay",
    year: "2020/2021",
  },
  {
    name: "Constellation Tango",
    description:
      "A 3-D turn-based strategy game set across various planets. Lead a coalition force, and push back against mysterious and oppressive empires, with a variety of unique units in unique situations.",
    media: {
      type: "image",
      image: constellationTango,
    },
    gameLink: "https://drive.google.com/drive/folders/1WaQ-Qv41ga2341TQHwTFvWSC5qNZWRqb",
    teamMembers: ["Gwen", "Bennett", "Tom", "Koda", "Duy", "Richard", "Jackson", "Julianne"],
    year: "2020/2021",
  },
  {
    name: "Spellrise",
    description:
      "Spellrise is a 2D top-down adventure game that immerses the player in a world rich of magic, to become one of the strongest mages in the world.",
    instructions: "To install, download the zip and extract the files into an empty folder, then run 'Spellrise.exe'",
    media: {
      type: "image",
      image: spellrise,
    },
    gameLink: "https://drive.google.com/drive/folders/1RPth1fYsEXc6qVflTqEzBF6DR4ap4DSH",
    teamMembers: [
      "Meaghan",
      "Ryan",
      "Vincent",
      "Pedro",
      "Amy",
      "Danny",
      "Michelle",
      "Sean",
      "Kevin",
      "Joshua",
      "Moses",
      "Sarah",
    ],
    award: "Best Graphics",
    year: "2020/2021",
  },
  {
    name: "Transduction",
    description:
      "A co-op puzzle game, with a story featuring two secret agents: Agent X and Agent Y, the best spies there are.",
    instructions:
      "Transduction requires two players, and the multiplayer is a bit buggy. We have provided two gameplay videos, one for each player that you can check out. There are two videos, one for each player, so you can see what each player's screen would look like. One player is the 'Dream' player, and one is the 'Officer'. \n We do not recommend you try it unless you are familiar with setting up IP connections. If you do want to try it, check out the provided document.",
    media: {
      type: "image",
      image: transduction,
    },
    gameLink: "https://drive.google.com/drive/folders/1xfuL2QHYvmM3c6x0N50FOCcnUQd9V90v",
    teamMembers: [
      "Eric",
      "Jon",
      "Isaac",
      "Sophia",
      "Aviral",
      "Floria",
      "Bronwyn",
      "Santiago",
      "Cecilia",
      "Andreas",
      "Dugan",
      "Frank",
    ],
    award: "Best Concept",
    year: "2020/2021",
  },
  {
    name: "Panic Titanic",
    description:
      "Panic Titanic is a multiplayer social deduction game set on a cruise ship. Eliminate anyone standing in your way as an impostor, or work together to survive as ordinary passengers!",
    instructions:
      "• *This game requires a group of people to play, all of which will need to download the game files, extract them into a folder, and boot up the 'Panic Titanic.exe'\n• The game is similar to Among Us, the crewmates will have tasks they need to complete to win and the imposters will have fake tasks along with abilities that can help them kill the crewmates.\n    ○ Each room can only hold 10 people\n    ○ Players cannot join games already in progress\n    ○ We didn't account for people leaving in the middle of the game, so that could mess things up\n    ○ Voting does not work perfectly, so we suggest manually voting if the voting system fails\n    ○ When ghosts complete tasks, it counts towards the win condition but does not increment the task bar UI",
    media: {
      type: "image",
      image: panicTitanic,
    },
    gameLink: "https://drive.google.com/drive/folders/1BJHy_KCxH9ZLuWsZ2z7LEErbV5kcJpx8",
    teamMembers: [
      "Walter - Team Lead",
      "Nafis",
      "Mohan",
      "Christopher",
      "Miranda",
      "Kevin",
      "Adrienne",
      "Chiara",
      "Jay Park",
      "Raymond",
    ],
    award: "Audience Choice + Best Audio",
    year: "2020/2021",
  },

  // 2019-2020 Games
  {
    name: "Slimy Sewers",
    description:
      "Our game, SLIMY SEWERS, was inspired by the rogue-like genre, which we all love. We wanted to learn how to work with melee combat and randomly generated levels, and through the development process we got a chance to learn about those things and a whole lot more. The game follows a young street youth who finds himself trapped in a dingy sewer infested with nasty slimes! He must defeat them and their monstrous overlord if he's to escape.",
    instructions: "",
    media: {
      type: "image",
      image: slimySewers,
    },
    teamMembers: ["Ben Spratt", "Mohan", "Chris", "Chris", "Miranda", "Kevin"],
    award: "Best Gameplay",
    year: "2019/2020",
  },
  {
    name: "Star Farm",
    description:
      "A pixel art, resource management adventure taking inspiration from games like Stardew Valley, Factorio and starbound! Take on the role of a daring astronaut and dive into a dangerous adventure on an unfamiliar planet! We added over 15 unique metals for the player to collect and farm. The farming engages the player by having them grow the resources they need to upgrade their ship and forge new things. But be careful! As you start to expand your farm around the planet, new monsters will start attacking your farm to steal your metals. Keep upgrading your weapon and build walls and turrets to fight against the waves of monsters. The player’s multitool provides them with the means to alter the world around them.  By breaking obstacles, building defences, and growing plants, we provided the player with the means to make the world their own.",
    media: {
      type: "image",
      image: starFarm,
    },
    teamMembers: [
      "Randy Russell (Team Lead/Programmer)",
      "Anna Yun (Artist)",
      "Michelle Kim (Artist)",
      "Brian Chau (Programmer)",
      "Clarence Chiu (Programmer)",
      "Kyle van Winkoop (Programmer)",
      "Santiago Sira (Programmer)",
      "Connor Zhou (Writer)",
      "Shaoxin Deng (Music)",
    ],
    award: "Game of the Year (and Best Gameplay)",
    year: "2019/2020",
  },
  {
    name: "Innoculated",
    description:
      "❖ Inoculated is set in a dystopia where people have been reduced to mutants due to infectious disease. A pair of siblings, a brother and sister, are survivors who make their journey to gather items to make themselves immune so they will not lose their humanity. \n❖ The game is a single screen multiplayer based around puzzle solving and hack and slashing. It’s an escape-the-“room” game where one player has to protect the other player from an enemy while they solve the puzzle. But your HP will run out and you will be forced to switch and then the other player will have to be the puzzle solver.\n ❖ Guide the siblings: Sol, a stubborn but caring brother, and Luna, naive but full of energy, through a post apocalyptic wasteland ruled by an airborne disease that turns humans into mindless monsters. Help the siblings find the vaccine, although it might be too late for one of them.",
    media: {
      type: "image",
      image: innoculated,
    },
    gameLink: "https://drive.google.com/file/d/1lqhWjv_pt-NijbEJClcfawphRy9ySBUT/view",
    teamMembers: [
      "Diego Icaza (Team Lead/Art)",
      "Dennis Truong (Vice Lead/Programmer)",
      "Myra Niu (Art/Programmer)",
      "Mojan Jamalzadeh (Programmer)",
      "Poon Krairiksh (Music/Writer)",
      "Kali Longpré (Writer)",
      "Saba Bakhshi (Programmer)",
    ],
    award: "Best Concept",
    year: "2019/2020",
  },
  {
    name: "Contaminated",
    description:
      "The year is 2050, where the world is now dominated by a single nuclearly armed super-power. The outskirts of civilization are a dangerously radioactive wasteland, while the closer you get to civilization, the more unnaturally pristine and wholly metallic your surroundings become. Remaining uncontaminated settlements of land outside of city boundaries are constantly seized by the government for nuclear testing. Here, we find Beatrice. A young woman who lives by herself on her parent’s farm. She defends the farm from different threats with help from her personal assistant, BARN 9000, the family’s barn. One day, an alarm rings inside Beatrice’s house saying something has broken the farm fence. Here begins our story, as Beatrice figures out what the hell is messing with her crops! Contaminated is a face paced top-down 2d shooter with quick gunplay, an assortment of weapons, and an engaging storyline. Figure out the mystery behind what’s been destroying parts of the farm. And venture into the forest where irradiated mutant woodland creatures are on the prowl!",
    media: {
      type: "image",
      image: contaminated,
    },
    gameLink: "https://drive.google.com/file/d/1_ZE-OcQ_KMcPT2sYV1dQfEHHthvtO5W5/view",
    teamMembers: [
      "Ryan Reiss (Project Lead/Programmer)",
      "Mike Li (Programmer)",
      "Len Leung (Artist)",
      "Harman Nahar (Artist)",
      "Suzie Sun (Artist/Level Designer/Programmer)",
      "Leif Thomas Marken Jack (Music)",
      "Alex Z. (SFX Designer/Programmer/Documenter)",
      "Gary Yu (Writer/Game Designer)",
      "Aziz Alimov (Programmer)",
      "Allen Chen (Programmer)",
      "Shawn Chen (Programmer)",
      "Tao Lin (Programmer)",
      "Jack He (Programmer)",
    ],
    year: "2019/2020",
  },
  {
    name: "Forgotten Yellow",
    description: "Forgotten Yellow is a combo-based beat-em-up.",
    media: {
      type: "image",
      image: forgottenYellow,
    },
    gameLink: "https://drive.google.com/file/d/1dpC0oOXSNdNZXjPcHnMX3a2qeyp160_3/view",
    teamMembers: [
      "Amy Liu (Project Lead)",
      "Jarjay Chen",
      "Blaze Zhang",
      "Josh Wong",
      "Alex Gu",
      "June Lam",
      "Helen Zhao",
      "Brandon Chan",
    ],
    year: "2019/2020",
  },
  {
    name: "NinjaStack (WIP)",
    description:
      "An endless runner game that surrounds a ninja being able to stack and maneuver forward in order to avoid any obstacles or holes on the ground.",
    media: {
      type: "image",
      image: ninjastack,
    },
    teamMembers: [
      "James Chuang (Project Lead)",
      "David Kao",
      "Samuel Lin",
      "Eric Kuo",
      "Wenhong Zhang",
      "Steven Li",
      "Kemilyn Bayer",
      "Vihara Jayaweera",
    ],
    year: "2019/2020",
  },

  // 2018-2019 Games
  {
    name: "Night Parade (by  Yodelin' Yokai Yanny/Laurel)",
    description:
      "The Night Parade is a puzzle based horror game that takes place in Japan. Inspired by games such as the Witch’s House, follow the story of Yuko as she travels into the Yokai Realm in order to find her sister– a dark world which mirrors our own. Escape yokai, solve puzzles and uncover what’s really going on in the Yokai Realm.",
    media: {
      type: "image",
      image: nightParade,
    },
    gameLink: "https://agda-ubc.github.io/night_parade/",
    teamMembers: [
      "Wesley Yuen (Co-Project Lead)",
      "Tristan Crane (Co-Project Lead)",
      "Demi Montes",
      "Christopher Tang",
      "Haruka Masuda",
      "Richard Miao",
      "Joey Shi",
    ],
    year: "2018/2019",
  },
  {
    name: "Rooutes",
    description:
      "A 2D top-down dungeon crawler featuring magic! Wield the elements of fire, ice, and more fire to incinerate your foes… destroying any fearful adversaries that get in your way. Prove yourself worthy to go up against the Guardian of the Forest.",
    media: {
      type: "image",
      image: rooutes,
    },
    teamMembers: ["Martin Tsang (Project Lead)", "Isaac Zee", "Thai Ngoc Nguyen", "Jarjay Chen"],
    year: "2018/2019",
  },
  {
    name: "Michelin Run (by Maximum Studios)",
    description:
      "The endless escape of a discredited chef from his worst nightmare- the harshest critic in the world. Help him to pick the best ingredients to prepare delicious dishes and get his Michelin star. To be released on Mobile.",
    media: {
      type: "image",
      image: michelinRun,
    },
    teamMembers: ["Umut Polat (Project Lead)", "Amy Liu", "Karan Vasdev", "Andrew Ting", "YiChen Zhang"],
    year: "2018/2019",
  },
  {
    name: "Klaymation",
    description:
      "A 2D arcade game inspired by Tetris and Donkey Kong. There was once a wizard who loves to create clay during his free time. One random day, his magic has gone wrong. The clay has come to life and they are trying to kill you! Use blocks to prevent them from getting near you. Clear the lines to make more space for yourself.",
    media: {
      type: "image",
      image: klaymation,
    },
    teamMembers: [
      "Christopher Kevin Jonathan (Co-Project Lead)",
      "Brandon Chan (Co-Project Lead)",
      "Nathan Poon",
      "Ben Spratt",
      "Theodore Pellegrin",
      "Jay Ho",
      "Brian Ackermann",
      "Alex Mountain",
    ],
    year: "2018/2019",
  },
  {
    name: "Joe's Little Helpers (Roasted)",
    description:
      "Play as Joe the Barista as he fends off waves of unsatisfied customers…or prepare to get ROASTED! Roasted is a 2D top-down shooter game built with C# in Unity, where players shoot coffee beans at waves of angry customers to survive the day.",
    media: {
      type: "image",
      image: joesLittleHelpers,
    },
    gameLink: "https://drive.google.com/file/d/1acKFmp5HWDh-iy89ze2tqFmsQ_g-Zkg2/view",
    teamMembers: ["Charmaine Lee (Programmer)", "Richard Le (Programmer)", "Eden Ding (Programmer)"],
    year: "2018/2019",
  },
  {
    name: "Electric Crescendo (by EC Team)",
    description:
      "Turn-based RPG where our small Robo-protagonist must defend his home and creator from the Robo-revolutionaries searching to topple human governance with the power of music! Use the instruments from your defeated enemies to increase the power of your one-man band!",
    media: {
      type: "image",
      image: electricCrescendo,
    },
    teamMembers: ["Diego Icaza (Project Lead)", "Mandy Wong", "David Thomas", "Hima Kattumuri", "Sheldon Chen"],
    year: "2018/2019",
  },
  {
    name: "Eden's Garden",
    description:
      "'I have decided to destroy/protect it.'\n The City of Amanzi is a city in the sea and the last human society. This is feasible due to the power of the sacred Life Shard, guarded by the Royal Family. Ryder, a civilian Post Guard, is caught up in a dangerous plot when he delivers a parcel containing a bomb. Incorrectly labelled as the traitor and Life Shard in hand, Ryder must find a way to prove his innocence.  100 years in the past, Ellison, a Lead Architect, and her team discover the Death Shard from legends and ancient history. She is recruited into Project COR-2021's team, responsible for creating an alternative source of clean energy for society to use. In reality, the project aims to create the Cor Stone, with the ability to manipulate time itself. Faced with the truth and its horrifying implications, Ellison devises a plan that may doom or save humanity.  Eden's Garden is a virtual reality game with RPG, Puzzle & Visual Novel elements.  Play as Ryder and Ellis, switching between characters and their unique skills as you uncover the truth behind humanity's fall from grace.",
    media: {
      type: "image",
      image: edensGarden,
    },
    teamMembers: [
      "Levi (Angela) Lu (Project Team Lead)",
      "Blaze Zhang",
      "Erin McGinn",
      "Ferado Smyth",
      "Joaquin Qiu",
      "Jonathan Alexander",
      "Magan Chang",
      "Natasha Miner",
      "William Beltran",
      "Eurielle Marmol (Voice Actor)",
      "Katherine Guo (Voice Actor)",
      "Ryan Evan Alfonso (Voice Actor)",
      "Alyssa Meneses (Voice Actor)",
      "Conor Meadows (Voice Actor)",
      "India Coates (Voice Actor)",
      "Nicolas Olney (Voice Actor)",
    ],
    award: "Game of the Year",
    year: "2018/2019",
  },

  // Legacy
  {
    name: "Swordship",
    description:
      "Swordship is a 2D physics based fighting game where you fly spaceships that wield giant weapons. Strike your opponents with swords, skewer them with spears or blast them from afar with cannons in this action packed brawler!",
    media: {
      type: "image",
      image: swordship,
    },
    teamMembers: ["Team Swordship"],
    year: "Legacy",
  },
  {
    name: "Trader Smith's Spaceship Emporium",
    description:
      "Play as the enigmatic Trader Smith, as he becomes embroiled in conflict with a dangerous faction of ruthless intergalactic pirates. Build up your armada of ships, each one heavily customizable with engines, weapons, hulls, and diverse array of equip-able items! Collect blueprints to build your own parts and ships, or purchase them from the numerous merchants of varying reputability! Interact with a variety of quirky and intriguing NPCs, and recruit them in your fight! Journey towards the centre of a galaxy under siege! AND MUCH MORE (PROBABLY). Disclaimer: This game is very much in progress, so expect significant changes in design, art, and content as development progresses.",
    media: {
      type: "image",
      image: traderSmith,
    },
    teamMembers: [
      "Kevin Jayamanna (Team Lead/Designer/Programmer)",
      "Jenne Hui (Programmer/UI)",
      "Alice Zhu (Programmer/Artist)",
      "Jennifer Ahn (Programmer/Artist)",
      "Ziwen Ran (Writer/Artist)",
    ],
    year: "Legacy",
  },
] as const;
