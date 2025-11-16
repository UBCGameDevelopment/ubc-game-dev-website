import { c as createComponent, a as renderComponent, r as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute, e as renderScript } from '../chunks/astro/server_BuADJsLa.mjs';
import { $ as $$Layout } from '../chunks/Layout_CW5VetiR.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { $ as $$BaseCard, a as $$Badge } from '../chunks/Badge_BDYkpLTX.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

function Timeline({ years, initialYear }) {
  const [activeYear, setActiveYear] = useState(initialYear);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleYearClick = (year) => {
    setActiveYear(year);
    const event = new CustomEvent("timeline-year-change", {
      detail: { year },
      bubbles: true
    });
    window.dispatchEvent(event);
  };
  return /* @__PURE__ */ jsx("nav", { className: "timeline-react", "aria-label": "Year timeline", children: /* @__PURE__ */ jsx("ul", { role: "list", children: years.map((year, index) => {
    const isActive = year === activeYear;
    const isHovered = hoveredIndex === index;
    let scale = 1;
    let opacity = 1;
    if (hoveredIndex !== null) {
      const distance = Math.abs(index - hoveredIndex);
      if (distance === 0) {
        scale = 1.2;
        opacity = 1;
      } else if (distance === 1) {
        scale = 1.1;
        opacity = 0.8;
      } else {
        scale = 1;
        opacity = 0.4;
      }
    }
    return /* @__PURE__ */ jsx(
      "li",
      {
        style: {
          transform: `scale(${scale})`,
          opacity,
          transition: "all 0.2s ease"
        },
        children: /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => handleYearClick(year),
            onMouseEnter: () => setHoveredIndex(index),
            onMouseLeave: () => setHoveredIndex(null),
            onFocus: () => setHoveredIndex(index),
            onBlur: () => setHoveredIndex(null),
            "aria-pressed": isActive,
            className: "timeline-btn",
            children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "timeline-bar",
                  style: {
                    transform: isHovered ? "scaleY(2.8)" : isActive ? "scaleY(1.8)" : "scaleY(1)",
                    background: isHovered ? "linear-gradient(90deg, rgba(157, 124, 255, 0.85), rgba(91, 205, 132, 0.85))" : isActive ? "linear-gradient(90deg, rgba(157, 124, 255, 0.65), rgba(91, 205, 132, 0.65))" : "rgba(148, 163, 184, 0.25)",
                    boxShadow: isHovered ? "0 8px 24px rgba(91, 205, 132, 0.35)" : isActive ? "0 6px 18px rgba(91, 205, 132, 0.22)" : "none"
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "timeline-label",
                  style: {
                    opacity: isHovered || isActive ? 1 : 0,
                    transform: isHovered || isActive ? "translateX(0)" : "translateX(-0.5rem)"
                  },
                  children: year
                }
              )
            ]
          }
        )
      },
      year
    );
  }) }) });
}

const sleepyChef = new Proxy({"src":"/_astro/sleepy-chef.CuPlaRIQ.png","width":1253,"height":718,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2022-2023/sleepy-chef.png";
							}
							
							return target[name];
						}
					});

const antidote30xx = new Proxy({"src":"/_astro/antidote-30xx.Dhef0HJA.png","width":958,"height":722,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2022-2023/antidote-30xx.png";
							}
							
							return target[name];
						}
					});

const apoc101 = new Proxy({"src":"/_astro/apoc-101.BTVCPT7C.png","width":1278,"height":689,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2022-2023/apoc-101.png";
							}
							
							return target[name];
						}
					});

const varansSeals = new Proxy({"src":"/_astro/varans-seals.C7qWpamv.png","width":1251,"height":716,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2022-2023/varans-seals.png";
							}
							
							return target[name];
						}
					});

const shadowOfSpace = new Proxy({"src":"/_astro/shadow-of-space.DA5ajGCZ.png","width":961,"height":716,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2022-2023/shadow-of-space.png";
							}
							
							return target[name];
						}
					});

const umbra = new Proxy({"src":"/_astro/umbra.Dh70N4mc.png","width":1262,"height":712,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2022-2023/umbra.png";
							}
							
							return target[name];
						}
					});

const bouncyGuy = new Proxy({"src":"/_astro/bouncy-guy.dgzgJ5Ke.png","width":959,"height":719,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2022-2023/bouncy-guy.png";
							}
							
							return target[name];
						}
					});

const cybercision = new Proxy({"src":"/_astro/cyberscision.BtbIr0ma.png","width":1277,"height":718,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2022-2023/cyberscision.png";
							}
							
							return target[name];
						}
					});

const sunshineShores = new Proxy({"src":"/_astro/sunshine-shores.DNJyPoZx.png","width":1271,"height":716,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2022-2023/sunshine-shores.png";
							}
							
							return target[name];
						}
					});

const dathora = new Proxy({"src":"/_astro/dathora.BdmplG4b.png","width":512,"height":244,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2020-2021/dathora.png";
							}
							
							return target[name];
						}
					});

const mythos = new Proxy({"src":"/_astro/mythos.CZv6lV9E.png","width":501,"height":512,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2020-2021/mythos.png";
							}
							
							return target[name];
						}
					});

const sidetracked = new Proxy({"src":"/_astro/sidetracked.CrI9KAxf.png","width":512,"height":289,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2020-2021/sidetracked.png";
							}
							
							return target[name];
						}
					});

const mediquest = new Proxy({"src":"/_astro/mediquest.CZSEmm8J.png","width":465,"height":512,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2020-2021/mediquest.png";
							}
							
							return target[name];
						}
					});

const constellationTango = new Proxy({"src":"/_astro/constellation-tango.CynuFsJh.png","width":512,"height":259,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2020-2021/constellation-tango.png";
							}
							
							return target[name];
						}
					});

const spellrise = new Proxy({"src":"/_astro/spellrise.DElWb7UL.png","width":512,"height":278,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2020-2021/spellrise.png";
							}
							
							return target[name];
						}
					});

const transduction = new Proxy({"src":"/_astro/transduction.nj5HHo0P.png","width":512,"height":288,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2020-2021/transduction.png";
							}
							
							return target[name];
						}
					});

const panicTitanic = new Proxy({"src":"/_astro/panic-titanic.e5ICvj70.png","width":1600,"height":900,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2020-2021/panic-titanic.png";
							}
							
							return target[name];
						}
					});

const slimySewers = new Proxy({"src":"/_astro/slimy-sewers.h9jOStak.jpg","width":498,"height":280,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2019-2020/slimy-sewers.jpg";
							}
							
							return target[name];
						}
					});

const starFarm = new Proxy({"src":"/_astro/star-farm.KcA9sTX4.png","width":707,"height":280,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2019-2020/star-farm.png";
							}
							
							return target[name];
						}
					});

const innoculated = new Proxy({"src":"/_astro/innoculated.CvYE-Ms_.png","width":311,"height":280,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2019-2020/innoculated.png";
							}
							
							return target[name];
						}
					});

const contaminated = new Proxy({"src":"/_astro/contaminated.By33Eum8.png","width":1920,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2019-2020/contaminated.png";
							}
							
							return target[name];
						}
					});

const forgottenYellow = new Proxy({"src":"/_astro/forgotten-yellow.BMI8Q72H.png","width":1920,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2019-2020/forgotten-yellow.png";
							}
							
							return target[name];
						}
					});

const ninjastack = new Proxy({"src":"/_astro/ninjastack.BHjBfF7Y.png","width":1920,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2019-2020/ninjastack.png";
							}
							
							return target[name];
						}
					});

const nightParade = new Proxy({"src":"/_astro/night-parade.CzKMdcYZ.png","width":1640,"height":881,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2018-2019/night-parade.png";
							}
							
							return target[name];
						}
					});

const rooutes = new Proxy({"src":"/_astro/rooutes.BsVbgk8G.png","width":2500,"height":1205,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2018-2019/rooutes.png";
							}
							
							return target[name];
						}
					});

const michelinRun = new Proxy({"src":"/_astro/michelin-run.Bx1RRERD.png","width":995,"height":304,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2018-2019/michelin-run.png";
							}
							
							return target[name];
						}
					});

const klaymation = new Proxy({"src":"/_astro/klaymation.DLVvUIK8.png","width":2205,"height":1381,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2018-2019/klaymation.png";
							}
							
							return target[name];
						}
					});

const joesLittleHelpers = new Proxy({"src":"/_astro/joes-little-helpers.CaXXt9K7.png","width":1912,"height":1074,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2018-2019/joes-little-helpers.png";
							}
							
							return target[name];
						}
					});

const electricCrescendo = new Proxy({"src":"/_astro/electric-crescendo.D_Vx34F8.png","width":1080,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2018-2019/electric-crescendo.png";
							}
							
							return target[name];
						}
					});

const edensGarden = new Proxy({"src":"/_astro/edens-garden.Ck3O-5rz.png","width":1030,"height":576,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/2018-2019/edens-garden.png";
							}
							
							return target[name];
						}
					});

const swordship = new Proxy({"src":"/_astro/swordship.CNJfgdza.webp","width":720,"height":480,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/legacy/swordship.webp";
							}
							
							return target[name];
						}
					});

const traderSmith = new Proxy({"src":"/_astro/trader-smith.L6Mq2O31.webp","width":641,"height":399,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/legacy/trader-smith.webp";
							}
							
							return target[name];
						}
					});

function getGameYears() {
  const years = [...new Set(games.map((game) => game.year))];
  return years.sort((a, b) => {
    const [aStart] = a.split("/").map(Number);
    const [bStart] = b.split("/").map(Number);
    return bStart - aStart;
  });
}
const games = [
  {
    name: "Sleepy Chef",
    description: "After staying up all night studying for culinary exams, your sleep becomes restless. Unbeknownst to you, a hidden power has been passed down through generations of Japanese chef ancestors. You can sleep-cook in your dreams! Remembering your grandmother's recipes, you sleep-cook the night away! Hopefully you can pass culinary school from sleepwalking! The player can grab items and utensils with a left click. They can throw the item by dragging and releasing left click. To rotate the item, drag right click while holding an item.",
    instructions: "• Use W A S D and the mouse to move.\n• The player can grab items and utensils with a left click.\n• Throw the item by dragging and releasing left click.\n• To rotate the item, drag right click while holding an item.\n• Jump (SPACE), crouch (CTRL), or interact with objects (E).\n• Press TAB to view the recipe card.\n• The end of the level, place the plate on the the lit up table.",
    media: {
      type: "image",
      image: sleepyChef
    },
    teamMembers: ["Anya Higano", "Luke Joe", "Alex Melanson", "Emily Zhang", "Reza Rahnama", "Bryn Shaffer", "Reza Rahnama", "Kyle van Winkoop"],
    award: "Best Graphics",
    year: "2022/2023"
  },
  {
    name: "Antidote 30XX",
    description: "The world outside, as you know it, has been completely destroyed. 10 years ago, 99% of the people turned into zombies.The Elites built an underground base and gathered all the other survivors so that humanity could have a chance at survival. Today we all live in a deteriorating base with a declining population and limited supplies. We need to find the cure urgently. You, the head researcher, have been working tirelessly on fighting for humanity’s future for the past seven years. Now you’re at the very last step. After countless experiments, you finally figured out the ingredients needed for the cure. Now, you need to collect them. With the elites on your back, a betrayal by a close friend, and time running out, you need to travel through different timelines, extract information from other members of the base and tide over multiple challenges to finally obtain the ingredients.",
    instructions: "• Use the A, W, S and D keys to move around the map.\n• Press E key to converse with characters, start/close the puzzle interface, collect items for inventory.",
    media: {
      type: "image",
      image: antidote30xx
    },
    gameLink: "https://drive.google.com/drive/folders/1SDfKb5Tcs0WBhRYjWpVkDN-tmCby87wY",
    teamMembers: ["Levi Lu (Project Team Lead)", "So Nakamura (Programming)", "Ural Tunaboyu (Programming)", "Asher Arya (Programming)", "Max Botsis (Level Design & Writing)", "Kyle van Winkoop (Art)", '"Manu" Pocholo Ramento (Art)', "Simon Fang (Art)", "Khushi Sharma (Writing)", "Keilah Abello (Writing)"],
    year: "2022/2023"
  },
  {
    name: "APOC101",
    description: "You thought regular classes were hard, try getting your degree in an apocalypse! Whether you wanted to take it or not, APOC 101 is a mandatory course in this pandemic. Put on your sensible footwear and finish finals week before the zombies finish you! Explore minigames and help out the UBC community to leave this nightmare.",
    media: {
      type: "image",
      image: apoc101
    },
    gameLink: "https://drive.google.com/drive/folders/1-3M8UCEoFV3XtTI2VsDkA3zyTOWYdySa",
    teamMembers: ["Pedro Novais", "Calvin Cavanagh", "Ahren", "Zehao Lu", "Echo", "Nishant Molleti", "Ruixue Luo", "Arpit Kumar", "Hannah Lee", "Sophie Chen", "Lucas Lobo", "Rosalyn Carr", "Kristen"],
    year: "2022/2023"
  },
  {
    name: "Varan's Seals",
    description: "Step into the role of a student of demonic lore as you retrace the footsteps of lost scholar Varan and attempt to decipher the hieroglyphic language of the demons. Uncover inscriptions in your surroundings, fill your grimoire by translating demonic symbols, and unravel ancient spellwork with your newfound mastery. Relying only on your wits and clues left behind by your predecessors, will you be the first to unlock Varan's Seals?",
    instructions: `• Use WASD or arrow keys to move
• Move your mouse to look around
• Use Space to jump
• Use E to interact with objects (objects with outlines have clues!)
• Use your mouse for on-screen interactions
• Use B to open and close the Daemonicum
    ○ As you see more symbols, they will appear in the Daemonicum.
    ○ Add your own notes to each page!
• When you're ready, you may interact with the Reliquary (it has a red outline)
    ○ Click to turn the rings in the Reliquary
    ○ Press "Activate" to attempt to break the seal!`,
    media: {
      type: "image",
      image: varansSeals
    },
    gameLink: "https://drive.google.com/drive/folders/1VHvA0-8irwn7OhprcMdQFt8lPWjeIvNm",
    teamMembers: ["Floria Gu (Artist, team lead)", "Jon Nah (Programmer)", "Ethan Anderson (Writer)", "Chun Yan Luo (3D Artist)"],
    award: "Best Concept",
    year: "2022/2023"
  },
  {
    name: "In the Shadow of Space",
    description: "You've inexplicably awoken to find yourself on the surface of a distant inhospitable exoplanet, memories fragmented and power supplies draining fast. Collect resources and use your wits and technology to survive as best you can against the dangers of the planet. In the Shadow of Space is a 2.5D survival-horror game, and the current demo sees you devoting your efforts towards enduring an eclipse event that bathes the planet in dangerous darkness. There is so much we don't know about what lurks within the endless abyss of space...",
    media: {
      type: "image",
      image: shadowOfSpace
    },
    gameLink: "https://drive.google.com/drive/folders/1-QKCn9uaW0Qw3XTlIvYXsc262laaOtdN",
    teamMembers: ["Chantal Hemmann", "Linda Chu", "Kyle Brent", "Joshua Riefman", "Rumbidzai Chinamo", "Joyce Park", "troopsushi"],
    award: "Best Gameplay",
    year: "2022/2023"
  },
  {
    name: "Umbra (by Avalon Games)",
    description: "You play as a kid who's trying to c ope with the passing of his parents. You will traverse through your old home in your dreamscape, familiar but now swarmed with monsters, and defeat your inner demons one room at a time. This demo includes the first level only, which takes place in the kid's bedroom. The monsters are shadows; you need to use your shadow to fight them! You start with the nightlight in your hand. While the nightlight is in your hand, you cannot move. You need to place the light by right - clicking at a location of your choosing. The placement of the light is crucial to your success in this game, as the position of your shadow depends on the position of the light. You can always retrieve the light by right - clicking and then place it at a new location in the same way.",
    instructions: "Use WASD to move and left - click to swing your sword! Remember that it is the shadow of your sword that can kill the enemies. You can also press Space for a small dash to get you out of tough situations.",
    media: {
      type: "image",
      image: umbra
    },
    gameLink: "https://drive.google.com/drive/folders/1z7lErBxrF1ICisJlNnMt60Wd0tMZZX8s",
    teamMembers: ["Bailey Brantigham", "Allen Chiang", "Emma Greville", "Xue Huang", "Kaitlyn Russell", "Alexandria Vido", "Dean Yang", "William Zhou"],
    award: "Game of the Year",
    year: "2022/2023"
  },
  {
    name: "The Lengend of Bouncy Guy",
    description: "Demons have overrun the world, terrorizing the kingdom and claiming the throne as their own. Will you take up the mantle of the Hero and save this world before it's too late? Joining your side will be a dog mage who holds tremendous willpower, and a mysterious character who claims he was there when the demons were summoned. Take control of the battlefield by mastering the altered gravity of this world. Pull and release your units to deal damage and defeat the enemies! Your legend awaits, Hero!",
    instructions: '• Using mouse, click on player you want to move and drag back (or forward)\n    ○ This will show a pink arrow that grows in size depending on how much you drag the mouse\n    ○ Larger size represents "power" of launch. Bigger arrow = bigger movement\n• Use mouse and click on arrows for next in the dialogues\n• If game over, escape key to return to main menu\n• To leave game otherwise, use Alt+F4 to exit application',
    media: {
      type: "image",
      image: bouncyGuy
    },
    gameLink: "https://drive.google.com/drive/folders/1gOo_Ary643mU5Z-FfkKh-Pg6qP3HeKe8",
    teamMembers: ["William Robert Ko (Story, Programming, Team Lead)", "Oleg Yurchenko (Programming)", "Kimi Ngo (Story)", "Jane Wan (Audio)", "Corey Chan (Artist)", "Bonnie Lu (Artist)"],
    year: "2022/2023"
  },
  {
    name: "Cybercision",
    description: "A puzzle/minigame game with visual novel elements and story. The player will use their logical and finesse skills to perform cybernetic surgery on a grab bag of wacky patients and customers to experience the daily life of Firth in the rain-drenched cyberpunk setting of Monsoon City.",
    instructions: "• Use the keyboard and mouse for most interactions\n    ○ Use the arrow keys and space bar to select dialogue options\n• When debugging a chip, click to shoot the spiders before time runs out! Your shots recharge over time.\n• When charging a battery, trace your mouse over the electric circuit\n• When wiring a hand, drag the correct wire to the glowing slot on the wiggling finger. Click rapidly to extinguish any fires so your charge does not run out!\n• When restarting a heart, watch the cursor as it passes over the two icons. Press left click to activate one icon, and right click to activate the other. Continue pumping the art until time runs out and it is stable!",
    media: {
      type: "image",
      image: cybercision
    },
    gameLink: "https://drive.google.com/drive/folders/1VNFLoxq7u5UtEV0QYybHxBZzngGdwTlX",
    teamMembers: ["Collin Eng (team lead)", "Darryl Tanzil", "Emma Nash", "Elsa Wei", "Erick Jovan Muljadi", "Harry Kim", "Tyler Hasman", "Matt Plyukhin", "Michelle Wang", "Zoe Khan"],
    award: "Audience Choice + Best Audio",
    year: "2022/2023"
  },
  {
    name: "Sunshine Shores",
    description: "Decorate and personalize your home with different sets of furniture, while enjoying the beauty of the nature around you. How many points can you rack up as you try to collect all 5 of the unique fish in this world?",
    instructions: "• Use WASD to move around\n• When near a pool of water, press E to begin fishing\n    ○ Use F to keep the meter on the white box until you've caught a fish and gain it's corresponding points\n    ○ If you fail to catch the fish you lose 15 points\n• Use the mouse scroll wheel to move up and down your toolbar\n• Press 1 to place the furniture you are currently hovered over in your toolbar\n• Press 2 while standing in front of a piece of furniture to place it back into your toolbar\n• Stand in front of the house door to enter\n    ○ Stand on the red carpet inside of the house to exit",
    media: {
      type: "image",
      image: sunshineShores
    },
    gameLink: "https://drive.google.com/drive/folders/1iuZSQZfIgTSTYPAqO1GD_FmbmUxh7QCZ",
    teamMembers: ["Gavin Lau", "Justin Li", "Michael Tuntang", "Hailey Han", "Jana Chittarath", "Lavanya Menon", "Josephine Huang", "Edrick Belmiro"],
    year: "2022/2023"
  },
  // 2021-2022 Games
  {
    name: "Mnemosyne",
    media: {
      type: "video",
      videoUrl: "https://www.youtube.com/embed/2QSXg75v2Ck?si=syKR9RjCmjZFNxSJ"
    },
    teamMembers: ["Willam", "Johnson", "Leo", "Frank", "Emma", "Vitor", "Tyler", "Allen", "Maahi"],
    year: "2021/2022"
  },
  {
    name: "Lice Communism",
    media: {
      type: "video",
      videoUrl: "https://www.youtube.com/embed/WO5afc9r0sA?si=JuZuHamW-KyJ-8hK"
    },
    teamMembers: ["Eric", "Jenny", "Kelcy", "Matias", "Diego", "Yew", "Harper", "Youssef", "Peter", "Jonathan"],
    year: "2021/2022"
  },
  {
    name: "Spellrise",
    media: {
      type: "video",
      videoUrl: "https://www.youtube.com/embed/XrRvySn8tSc?si=hm27tvlB7S-L80Ap"
    },
    teamMembers: ["Arta. Reuben", "Stephane", "Adam", "Shiyan"],
    year: "2021/2022"
  },
  {
    name: "Viewpoint",
    media: {
      type: "video",
      videoUrl: "https://www.youtube.com/embed/efJZ0UF7cag?si=e5wbm1VvUP8h42jq"
    },
    teamMembers: ["Diego", "Adrienne", "Denton", "Mohan", "Miranda", "Maximus", "Raymond", "Jay", "Shuang", "Camilo", "Vito"],
    year: "2021/2022"
  },
  {
    name: "Dathora",
    media: {
      type: "video",
      videoUrl: "https://www.youtube.com/embed/HSTv4tnKHO8?si=xGhCS0_DKz2yzNaU"
    },
    teamMembers: ["Kevin", "Howard", "Sarina", "Nuo", "Nasif", "Preston", "Devon"],
    year: "2021/2022"
  },
  {
    name: "Sidetracked!",
    media: {
      type: "video",
      videoUrl: "hhttps://www.youtube.com/embed/0rrs4dvRcrQ?si=7UyabiWNh7e_frSg"
    },
    teamMembers: ["Ramy", "Nyan", "Vihara", "Brett", "Casey", "Lakshya", "Phanndateevint", "Allen"],
    year: "2021/2022"
  },
  {
    name: "MediQuest",
    media: {
      type: "video",
      videoUrl: "https://www.youtube.com/embed/dTYLhyExTbw?si=L4ozB2OJh2jreYTC"
    },
    teamMembers: ["Payam", "Apoorv", "Ariel", "William", "Syndio", "Kenny", "Thomas", "Aung", "Methasit"],
    year: "2021/2022"
  },
  // 2020-2021 Games
  {
    name: "Dathora",
    description: "A dark fantasy dungeon-crawler with monstrous creatures lying in the deepest depths. Hack and slash your way to the corrupted Founder in order to banish them and restore balance to the world.",
    media: {
      type: "image",
      image: dathora
    },
    teamMembers: ["Keegan", "Kevin", "Yuya", "Eugene", "Valery", "Zoe", "Tanmay", "Khammy", "Sophie", "Richard", "Sebastian"],
    award: "Best Audio",
    year: "2020/2021"
  },
  {
    name: "Mythos",
    description: "Mythos is an action platformer RPG that brings out the Lovecraftian in all of us. As the player  traverses through the world, they figure out that reality and truth are very different things. Explore with your ever-growing library of magical abilities that pushes the boundaries of platforming and combat strategies. Uncover secret endings and dangerous truths as you are challenged to the point of insanity by the physical manifestations of reality's true nature.",
    media: {
      type: "image",
      image: mythos
    },
    teamMembers: ["David Boguslavksy (Project Lead, Artist, Animator)", "Daisy Wan (Artist)", "Vivian Sam (Artist)", "Danny Deng (Artist)", "Amy Lee (Artist)", "Advik Ayya (Programmer)", "Jin Kim (Programmer)", "TJ Wu (Programmer)", "Tyler Mann (Programmer)", "Ethan Wescoatt (Storywriter)", "Meaghan Marina (Storywriter)", "Daniel Steiner (Musician & SFX)"],
    award: "Platinum Award (2020-2021) + Best Graphics (2019-2020)",
    year: "2020/2021"
  },
  {
    name: "SideTracked",
    description: `SideTracked! is a low-poly, casual action RPG where any group of friends can group and side with good or evil while becoming superhuman in strength, power, or magic! Players take on the role of "assistants" stolen from their home dimensions by a hugely powerful but disorganized entity. Complete quests in the entity's pocket dimension to help them restore order or go against the commands issued to you and take vengeance for being forcefully abducted.`,
    media: {
      type: "image",
      image: sidetracked
    },
    teamMembers: ["Lukas", "Kanwar", "Brett", "Joshua", "Brandon", "Cherry", "Leo", "Brian", "Casy", "Helyn"],
    year: "2020/2021"
  },
  {
    name: "Mediquest",
    description: "Play as a medical intern in a story-driven game, learning about how be a resident doctor while getting to know patients, coworkers, and senior physicians, with the goal of becoming a resident surgeon",
    instructions: "To play, download the game files, extract them into a folder, and boot up the 'Mediquest.exe' file.",
    media: {
      type: "image",
      image: mediquest
    },
    gameLink: "https://drive.google.com/drive/folders/1r6IfwmpbeF3q1Vndk0i1fGaks87-wKmE",
    teamMembers: ["Payam", "Aaditya", "Minchan", "Daniel", "Stephanie", "Jenny", "Apoorv", "Shreyans", "Rodrigo", "Alexander"],
    award: "Game of the Year + Best Gameplay",
    year: "2020/2021"
  },
  {
    name: "Constellation Tango",
    description: "A 3-D turn-based strategy game set across various planets. Lead a coalition force, and push back against mysterious and oppressive empires, with a variety of unique units in unique situations.",
    media: {
      type: "image",
      image: constellationTango
    },
    gameLink: "https://drive.google.com/drive/folders/1WaQ-Qv41ga2341TQHwTFvWSC5qNZWRqb",
    teamMembers: ["Gwen", "Bennett", "Tom", "Koda", "Duy", "Richard", "Jackson", "Julianne"],
    year: "2020/2021"
  },
  {
    name: "Spellrise",
    description: "Spellrise is a 2D top-down adventure game that immerses the player in a world rich of magic, to become one of the strongest mages in the world.",
    instructions: "To install, download the zip and extract the files into an empty folder, then run 'Spellrise.exe'",
    media: {
      type: "image",
      image: spellrise
    },
    gameLink: "https://drive.google.com/drive/folders/1RPth1fYsEXc6qVflTqEzBF6DR4ap4DSH",
    teamMembers: ["Meaghan", "Ryan", "Vincent", "Pedro", "Amy", "Danny", "Michelle", "Sean", "Kevin", "Joshua", "Moses", "Sarah"],
    award: "Best Graphics",
    year: "2020/2021"
  },
  {
    name: "Transduction",
    description: "A co-op puzzle game, with a story featuring two secret agents: Agent X and Agent Y, the best spies there are.",
    instructions: "Transduction requires two players, and the multiplayer is a bit buggy. We have provided two gameplay videos, one for each player that you can check out. There are two videos, one for each player, so you can see what each player's screen would look like. One player is the 'Dream' player, and one is the 'Officer'. \n We do not recommend you try it unless you are familiar with setting up IP connections. If you do want to try it, check out the provided document.",
    media: {
      type: "image",
      image: transduction
    },
    gameLink: "https://drive.google.com/drive/folders/1xfuL2QHYvmM3c6x0N50FOCcnUQd9V90v",
    teamMembers: ["Eric", "John", "Isaac", "Sophia", "Aviral", "Floria", "Bronwyn", "Santiago", "Cecilia", "Andreas", "Dugan", "Frank"],
    award: "Best Concept",
    year: "2020/2021"
  },
  {
    name: "Panic Titanic",
    description: "Panic Titanic is a multiplayer social deduction game set on a cruise ship. Eliminate anyone standing in your way as an impostor, or work together to survive as ordinary passengers!",
    instructions: "• *This game requires a group of people to play, all of which will need to download the game files, extract them into a folder, and boot up the 'Panic Titanic.exe'\n• The game is similar to Among Us, the crewmates will have tasks they need to complete to win and the imposters will have fake tasks along with abilities that can help them kill the crewmates.\n    ○ Each room can only hold 10 people\n    ○ Players cannot join games already in progress\n    ○ We didn't account for people leaving in the middle of the game, so that could mess things up\n    ○ Voting does not work perfectly, so we suggest manually voting if the voting system fails\n    ○ When ghosts complete tasks, it counts towards the win condition but does not increment the task bar UI",
    media: {
      type: "image",
      image: panicTitanic
    },
    gameLink: "https://drive.google.com/drive/folders/1BJHy_KCxH9ZLuWsZ2z7LEErbV5kcJpx8",
    teamMembers: ["Walter - Team Lead", "Nafis", "Mohan", "Christopher", "Miranda", "Kevin", "Adrienne", "Chiara", "Jay Park", "Raymond"],
    award: "Audience Choice + Best Audio",
    year: "2020/2021"
  },
  // 2019-2020 Games
  {
    name: "Slimy Sewers",
    description: "Our game, SLIMY SEWERS, was inspired by the rogue-like genre, which we all love. We wanted to learn how to work with melee combat and randomly generated levels, and through the development process we got a chance to learn about those things and a whole lot more. The game follows a young street youth who finds himself trapped in a dingy sewer infested with nasty slimes! He must defeat them and their monstrous overlord if he's to escape.",
    instructions: "",
    media: {
      type: "image",
      image: slimySewers
    },
    teamMembers: ["Ben Spratt", "Mohan", "Chris", "Chris", "Miranda", "Kevin"],
    award: "Best Gameplay",
    year: "2019/2020"
  },
  {
    name: "Star Farm",
    description: "A pixel art, resource management adventure taking inspiration from games like Stardew Valley, Factorio and starbound! Take on the role of a daring astronaut and dive into a dangerous adventure on an unfamiliar planet! We added over 15 unique metals for the player to collect and farm. The farming engages the player by having them grow the resources they need to upgrade their ship and forge new things. But be careful! As you start to expand your farm around the planet, new monsters will start attacking your farm to steal your metals. Keep upgrading your weapon and build walls and turrets to fight against the waves of monsters. The player’s multitool provides them with the means to alter the world around them.  By breaking obstacles, building defences, and growing plants, we provided the player with the means to make the world their own.",
    media: {
      type: "image",
      image: starFarm
    },
    teamMembers: ["Randy Russell (Team Lead/Programmer)", "Anna Yun (Artist)", "Michelle Kim (Artist)", "Brian Chau (Programmer)", "Clarence Chiu (Programmer)", "Kyle van Winkoop (Programmer)", "Santiago Sira (Programmer)", "Connor Zhou (Writer)", "Shaoxin Deng (Music)"],
    award: "Game of the Year (and Best Gameplay)",
    year: "2019/2020"
  },
  {
    name: "Innoculated",
    description: "❖ Inoculated is set in a dystopia where people have been reduced to mutants due to infectious disease. A pair of siblings, a brother and sister, are survivors who make their journey to gather items to make themselves immune so they will not lose their humanity. \n❖ The game is a single screen multiplayer based around puzzle solving and hack and slashing. It’s an escape-the-“room” game where one player has to protect the other player from an enemy while they solve the puzzle. But your HP will run out and you will be forced to switch and then the other player will have to be the puzzle solver.\n ❖ Guide the siblings: Sol, a stubborn but caring brother, and Luna, naive but full of energy, through a post apocalyptic wasteland ruled by an airborne disease that turns humans into mindless monsters. Help the siblings find the vaccine, although it might be too late for one of them.",
    media: {
      type: "image",
      image: innoculated
    },
    gameLink: "https://drive.google.com/file/d/1lqhWjv_pt-NijbEJClcfawphRy9ySBUT/view",
    teamMembers: ["Diego Icaza (Team Lead/Art)", "Dennis Truong (Vice Lead/Programmer)", "Myra Niu (Art/Programmer)", "Mojan Jamalzadeh (Programmer)", "Poon Krairiksh (Music/Writer)", "Kali Longpré (Writer)", "Saba Bakhshi (Programmer)"],
    award: "Best Concept",
    year: "2019/2020"
  },
  {
    name: "Contaminated",
    description: "The year is 2050, where the world is now dominated by a single nuclearly armed super-power. The outskirts of civilization are a dangerously radioactive wasteland, while the closer you get to civilization, the more unnaturally pristine and wholly metallic your surroundings become. Remaining uncontaminated settlements of land outside of city boundaries are constantly seized by the government for nuclear testing. Here, we find Beatrice. A young woman who lives by herself on her parent’s farm. She defends the farm from different threats with help from her personal assistant, BARN 9000, the family’s barn. One day, an alarm rings inside Beatrice’s house saying something has broken the farm fence. Here begins our story, as Beatrice figures out what the hell is messing with her crops! Contaminated is a face paced top-down 2d shooter with quick gunplay, an assortment of weapons, and an engaging storyline. Figure out the mystery behind what’s been destroying parts of the farm. And venture into the forest where irradiated mutant woodland creatures are on the prowl!",
    media: {
      type: "image",
      image: contaminated
    },
    gameLink: "https://drive.google.com/file/d/1_ZE-OcQ_KMcPT2sYV1dQfEHHthvtO5W5/view",
    teamMembers: ["Ryan Reiss (Project Lead/Programmer)", "Mike Li (Programmer)", "Len Leung (Artist)", "Harman Nahar (Artist)", "Suzie Sun (Artist/Level Designer/Programmer)", "Leif Thomas Marken Jack (Music)", "Alex Z. (SFX Designer/Programmer/Documenter)", "Gary Yu (Writer/Game Designer)", "Aziz Alimov (Programmer)", "Allen Chen (Programmer)", "Shawn Chen (Programmer)", "Tao Lin (Programmer)", "Jack He (Programmer)"],
    year: "2019/2020"
  },
  {
    name: "Forgotten Yellow",
    description: "Forgotten Yellow is a combo-based beat-em-up.",
    media: {
      type: "image",
      image: forgottenYellow
    },
    gameLink: "https://drive.google.com/file/d/1dpC0oOXSNdNZXjPcHnMX3a2qeyp160_3/view",
    teamMembers: ["Amy Liu (Project Lead)", "Jarjay Chen", "Blaze Zhang", "Josh Wong", "Alex Gu", "June Lam", "Helen Zhao", "Brandon Chan"],
    year: "2019/2020"
  },
  {
    name: "NinjaStack (WIP)",
    description: "An endless runner game that surrounds a ninja being able to stack and maneuver forward in order to avoid any obstacles or holes on the ground.",
    media: {
      type: "image",
      image: ninjastack
    },
    teamMembers: ["James Chuang (Project Lead)", "David Kao", "Samuel Lin", "Eric Kuo", "Wenhong Zhang", "Steven Li", "Kemilyn Bayer", "Vihara Jayaweera"],
    year: "2019/2020"
  },
  // 2018-2019 Games
  {
    name: "Night Parade (by  Yodelin' Yokai Yanny/Laurel)",
    description: "The Night Parade is a puzzle based horror game that takes place in Japan. Inspired by games such as the Witch’s House, follow the story of Yuko as she travels into the Yokai Realm in order to find her sister– a dark world which mirrors our own. Escape yokai, solve puzzles and uncover what’s really going on in the Yokai Realm.",
    media: {
      type: "image",
      image: nightParade
    },
    gameLink: "https://agda-ubc.github.io/night_parade/",
    teamMembers: ["Wesley Yuen (Co-Project Lead)", "Tristan Crane (Co-Project Lead)", "Demi Montes", "Christopher Tang", "Haruka Masuda", "Richard Miao", "Joey Shi"],
    year: "2018/2019"
  },
  {
    name: "Rooutes",
    description: "A 2D top-down dungeon crawler featuring magic! Wield the elements of fire, ice, and more fire to incinerate your foes… destroying any fearful adversaries that get in your way. Prove yourself worthy to go up against the Guardian of the Forest.",
    media: {
      type: "image",
      image: rooutes
    },
    teamMembers: ["Martin Tsang (Project Lead)", "Isaac Zee", "Thai Ngoc Nguyen", "Jarjay Chen"],
    year: "2018/2019"
  },
  {
    name: "Michelin Run (by Maximum Studios)",
    description: "The endless escape of a discredited chef from his worst nightmare- the harshest critic in the world. Help him to pick the best ingredients to prepare delicious dishes and get his Michelin star. To be released on Mobile.",
    media: {
      type: "image",
      image: michelinRun
    },
    teamMembers: ["Umut Polat (Project Lead)", "Amy Liu", "Karan Vasdev", "Andrew Ting", "YiChen Zhang"],
    year: "2018/2019"
  },
  {
    name: "Klaymation",
    description: "A 2D arcade game inspired by Tetris and Donkey Kong. There was once a wizard who loves to create clay during his free time. One random day, his magic has gone wrong. The clay has come to life and they are trying to kill you! Use blocks to prevent them from getting near you. Clear the lines to make more space for yourself.",
    media: {
      type: "image",
      image: klaymation
    },
    teamMembers: ["Christopher Kevin Jonathan (Co-Project Lead)", "Brandon Chan (Co-Project Lead)", "Nathan Poon", "Ben Spratt", "Theodore Pellegrin", "Jay Ho", "Brian Ackermann", "Alex Mountain"],
    year: "2018/2019"
  },
  {
    name: "Joe's Little Helpers (Roasted)",
    description: "Play as Joe the Barista as he fends off waves of unsatisfied customers…or prepare to get ROASTED! Roasted is a 2D top-down shooter game built with C# in Unity, where players shoot coffee beans at waves of angry customers to survive the day.",
    media: {
      type: "image",
      image: joesLittleHelpers
    },
    gameLink: "https://drive.google.com/file/d/1acKFmp5HWDh-iy89ze2tqFmsQ_g-Zkg2/view",
    teamMembers: ["Charmaine Lee (Programmer)", "Richard Le (Programmer)", "Eden Ding (Programmer)"],
    year: "2018/2019"
  },
  {
    name: "Electric Crescendo (by EC Team)",
    description: "Turn-based RPG where our small Robo-protagonist must defend his home and creator from the Robo-revolutionaries searching to topple human governance with the power of music! Use the instruments from your defeated enemies to increase the power of your one-man band!",
    media: {
      type: "image",
      image: electricCrescendo
    },
    teamMembers: ["Diego Icaza (Project Lead)", "Mandy Wong", "David Thomas", "Hima Kattumuri", "Sheldon Chen"],
    year: "2018/2019"
  },
  {
    name: "Eden's Garden",
    description: "'I have decided to destroy/protect it.'\n The City of Amanzi is a city in the sea and the last human society. This is feasible due to the power of the sacred Life Shard, guarded by the Royal Family. Ryder, a civilian Post Guard, is caught up in a dangerous plot when he delivers a parcel containing a bomb. Incorrectly labelled as the traitor and Life Shard in hand, Ryder must find a way to prove his innocence.  100 years in the past, Ellison, a Lead Architect, and her team discover the Death Shard from legends and ancient history. She is recruited into Project COR-2021's team, responsible for creating an alternative source of clean energy for society to use. In reality, the project aims to create the Cor Stone, with the ability to manipulate time itself. Faced with the truth and its horrifying implications, Ellison devises a plan that may doom or save humanity.  Eden's Garden is a virtual reality game with RPG, Puzzle & Visual Novel elements.  Play as Ryder and Ellis, switching between characters and their unique skills as you uncover the truth behind humanity's fall from grace.",
    media: {
      type: "image",
      image: edensGarden
    },
    teamMembers: ["Levi (Angela) Lu (Project Team Lead)", "Blaze Zhang", "Erin McGinn", "Ferado Smyth", "Joaquin Qiu", "Jonathan Alexander", "Magan Chang", "Natasha Miner", "William Beltran", "Eurielle Marmol (Voice Actor)", "Katherine Guo (Voice Actor)", "Ryan Evan Alfonso (Voice Actor)", "Alyssa Meneses (Voice Actor)", "Conor Meadows (Voice Actor)", "India Coates (Voice Actor)", "Nicolas Olney (Voice Actor)"],
    award: "Game of the Year",
    year: "2018/2019"
  },
  // Legacy
  {
    name: "Swordship",
    description: "Swordship is a 2D physics based fighting game where you fly spaceships that wield giant weapons. Strike your opponents with swords, skewer them with spears or blast them from afar with cannons in this action packed brawler!",
    media: {
      type: "image",
      image: swordship
    },
    teamMembers: ["Team Swordship"],
    year: "Legacy"
  },
  {
    name: "Trader Smith's Spaceship Emporium",
    description: "Play as the enigmatic Trader Smith, as he becomes embroiled in conflict with a dangerous faction of ruthless intergalactic pirates. Build up your armada of ships, each one heavily customizable with engines, weapons, hulls, and diverse array of equip-able items! Collect blueprints to build your own parts and ships, or purchase them from the numerous merchants of varying reputability! Interact with a variety of quirky and intriguing NPCs, and recruit them in your fight! Journey towards the centre of a galaxy under siege! AND MUCH MORE (PROBABLY). Disclaimer: This game is very much in progress, so expect significant changes in design, art, and content as development progresses.",
    media: {
      type: "image",
      image: traderSmith
    },
    teamMembers: ["Kevin Jayamanna (Team Lead/Designer/Programmer)", "Jenne Hui (Programmer/UI)", "Alice Zhu (Programmer/Artist)", "Jennifer Ahn (Programmer/Artist)", "Ziwen Ran (Writer/Artist)"],
    year: "Legacy"
  }
];

const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const gameYears = getGameYears();
  const years = ["All Years", ...gameYears];
  const initialYear = "All Years";
  return renderTemplate`${renderComponent($$result, "TimelineReact", Timeline, { "years": years, "initialYear": initialYear, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/vvict/projects/ubc_game/club_site/src/components/games/Timeline", "client:component-export": "default" })}`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/games/Timeline.astro", void 0);

const $$Astro$4 = createAstro();
const $$GameTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$GameTitle;
  const { name, gameLink } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mb-4" data-astro-cid-ci65od4a> ${gameLink ? renderTemplate`<a${addAttribute(gameLink, "href")} target="_blank" rel="noopener noreferrer" class="game-title-link group/title inline-block" data-astro-cid-ci65od4a> <h3 class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent transition-all duration-300 group-hover/title:scale-105 md:text-3xl" data-astro-cid-ci65od4a> ${name} <svg class="text-brand-400 group-hover/title:text-accent-400 ml-2 inline-block h-5 w-5 transition-all duration-300 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ci65od4a> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-astro-cid-ci65od4a></path> </svg> </h3> </a>` : renderTemplate`<h3 class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent md:text-3xl" data-astro-cid-ci65od4a> ${name} </h3>`} </div> `;
}, "/home/vvict/projects/ubc_game/club_site/src/components/games/GameTitle.astro", void 0);

const $$Astro$3 = createAstro();
const $$GameMedia = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$GameMedia;
  const { media, name, cardId } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] overflow-hidden ring-1 ring-white/10" data-astro-cid-fk3o3cft> ${media.type === "video" && media.videoUrl ? renderTemplate`<!-- YouTube Video Embed -->
    <iframe${addAttribute(media.videoUrl, "src")} class="w-full h-full border-0"${addAttribute(`${name} gameplay video`, "title")} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" loading="lazy" allowfullscreen data-astro-cid-fk3o3cft></iframe>` : media.type === "images" && media.images && media.images.length > 0 ? renderTemplate`<!-- Image Slideshow -->
    <div class="relative w-full h-full" data-astro-cid-fk3o3cft> <div class="slideshow-container w-full h-full"${addAttribute(`${cardId}-slideshow`, "id")} data-astro-cid-fk3o3cft> ${media.images.map((image, index) => renderTemplate`<div${addAttribute(`slide ${index === 0 ? "active" : ""}`, "class")} style="display: none;" data-astro-cid-fk3o3cft> <img${addAttribute(image.src, "src")}${addAttribute(`${name} screenshot ${index + 1}`, "alt")} class="w-full h-full object-cover" data-astro-cid-fk3o3cft> </div>`)} </div>  ${media.images.length > 1 && renderTemplate`<div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-2" data-astro-cid-fk3o3cft> ${media.images.map((_, index) => renderTemplate`<button class="dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/80 transition-all"${addAttribute(index, "data-slide")}${addAttribute(`${cardId}-slideshow`, "data-slideshow")}${addAttribute(`Go to slide ${index + 1}`, "aria-label")} data-astro-cid-fk3o3cft></button>`)} </div>`} </div>` : media.type === "image" && media.image ? renderTemplate`<!-- Single Image -->
    <img${addAttribute(media.image.src, "src")}${addAttribute(`${name} screenshot`, "alt")} class="w-full h-auto object-contain" data-astro-cid-fk3o3cft>` : renderTemplate`<!-- Placeholder -->
    <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-500/10 to-accent-500/10" data-astro-cid-fk3o3cft> <div class="text-center" data-astro-cid-fk3o3cft> <svg class="w-16 h-16 mx-auto text-white/20 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-fk3o3cft> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" data-astro-cid-fk3o3cft></path> </svg> <p class="text-sm text-white/40" data-astro-cid-fk3o3cft>No media available</p> </div> </div>`} </div> ${renderScript($$result, "/home/vvict/projects/ubc_game/club_site/src/components/games/GameMedia.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/vvict/projects/ubc_game/club_site/src/components/games/GameMedia.astro", void 0);

const $$Astro$2 = createAstro();
const $$AwardBadge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AwardBadge;
  const { award } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-6"> <div class="relative inline-block"> <div class="from-accent-500 to-accent-600 absolute -inset-1 rounded-xl bg-gradient-to-r opacity-40 blur"></div> <div class="border-accent-500/50 from-accent-500/20 to-accent-600/10 relative rounded-xl border bg-gradient-to-br px-4 py-3 backdrop-blur-sm"> <div class="flex items-center gap-2"> <svg class="text-accent-500 h-5 w-5" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> <div> <div class="text-accent-300 text-xs font-medium tracking-wide uppercase">Award Winner</div> <div class="text-sm font-bold text-white">${award}</div> </div> </div> </div> </div> </div>`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/games/AwardBadge.astro", void 0);

const $$Astro$1 = createAstro();
const $$TeamMembers = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TeamMembers;
  const { members } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-4 ring-1 ring-white/10"> <div class="mb-2 flex items-center gap-2"> <svg class="text-brand-400 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg> <h4 class="text-brand-400 text-xs font-semibold tracking-wide uppercase">Team Members</h4> </div> <div class="flex flex-wrap gap-2"> ${members.map((member) => renderTemplate`<span class="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-gray-200 ring-1 ring-white/20"> ${member} </span>`)} </div> </div>`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/games/TeamMembers.astro", void 0);

const $$Astro = createAstro();
const $$GameCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GameCard;
  const { name, description, media, gameLink, teamMembers, award } = Astro2.props;
  const cardId = `game-${name.toLowerCase().replace(/\s+/g, "-")}`;
  return renderTemplate`${renderComponent($$result, "BaseCard", $$BaseCard, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-6 md:p-8"> <!-- Top Section: Grid Layout --> <div class="grid items-center gap-8 md:grid-cols-2"> <!-- Left Section: Game Info --> <div class="flex flex-col"> <div class="flex-1"> ${renderComponent($$result2, "Badge", $$Badge, { "label": "Game", "variant": "game", "class": "mb-4 px-3 py-1" })} ${renderComponent($$result2, "GameTitle", $$GameTitle, { "name": name, "gameLink": gameLink })} <p class="text-sm leading-relaxed text-gray-50/80 md:text-base"> ${description} </p> </div> ${award && renderTemplate`${renderComponent($$result2, "AwardBadge", $$AwardBadge, { "award": award })}`} </div> <!-- Right Section: Media & Team --> <div class="flex h-fit flex-col gap-4"> ${renderComponent($$result2, "GameMedia", $$GameMedia, { "media": media, "name": name, "cardId": cardId })} ${teamMembers && teamMembers.length > 0 && renderTemplate`${renderComponent($$result2, "TeamMembers", $$TeamMembers, { "members": teamMembers })}`} </div> </div> </div> ` })}`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/games/GameCard.astro", void 0);

function GameGrid() {
  const [selectedYear, setSelectedYear] = useState("All Years");
  useEffect(() => {
    const handleYearChange = (event) => {
      const year = event.detail.year;
      setSelectedYear(year);
    };
    window.addEventListener("timeline-year-change", handleYearChange);
    return () => {
      window.removeEventListener("timeline-year-change", handleYearChange);
    };
  }, []);
  useEffect(() => {
    const gameCards = document.querySelectorAll("[data-game-card]");
    let visibleIndex = 0;
    gameCards.forEach((card) => {
      const cardYear = card.getAttribute("data-year");
      const shouldShow = selectedYear === "All Years" || cardYear === selectedYear;
      if (shouldShow) {
        card.style.setProperty("--stagger-delay", `${visibleIndex * 0.1}s`);
        card.classList.remove("game-card-hidden");
        card.classList.add("game-card-visible");
        visibleIndex++;
      } else {
        card.classList.remove("game-card-visible");
        card.classList.add("game-card-hidden");
        card.style.setProperty("--stagger-delay", "0s");
      }
    });
    const cleanupTimer = setTimeout(() => {
      gameCards.forEach((card) => {
        if (!card.classList.contains("game-card-hidden")) {
          card.classList.remove("game-card-visible");
        }
      });
    }, 1e3);
    return () => clearTimeout(cleanupTimer);
  }, [selectedYear]);
  return null;
}

const $$Games = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-gismuqk3": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container-page" data-astro-cid-gismuqk3> <!-- Page Header --> <section class="my-12 text-center md:my-16" data-astro-cid-gismuqk3> <div class="bg-brand-500/20 border-brand-500/30 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5" data-astro-cid-gismuqk3> <span class="text-brand-400 text-sm font-semibold" data-astro-cid-gismuqk3>Our Projects</span> </div> <h1 class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl" data-astro-cid-gismuqk3>
Game Showcase
</h1> <p class="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-50/80" data-astro-cid-gismuqk3>
Explore the amazing games created by our talented teams. Each project represents countless hours of
                creativity, collaboration, and passion for game development.
</p> </section> <!-- Timeline + Games --> <section class="my-12 md:my-16" data-astro-cid-gismuqk3> <div class="items-start gap-8 md:grid md:grid-cols-[minmax(180px,220px)_minmax(0,1fr)] lg:gap-14" data-astro-cid-gismuqk3> <aside class="order-2 md:sticky md:top-24 md:order-1" data-astro-cid-gismuqk3> <div class="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-xl ring-1 shadow-black/30 ring-white/10 backdrop-blur-xl" data-astro-cid-gismuqk3> <h2 class="mb-3 text-lg font-bold tracking-wide" data-astro-cid-gismuqk3>Club Timeline</h2> ${renderComponent($$result2, "Timeline", $$Timeline, { "data-astro-cid-gismuqk3": true })} </div> </aside> <div class="order-1 md:order-2" data-astro-cid-gismuqk3> <!-- React component to manage filtering state --> ${renderComponent($$result2, "GameGrid", GameGrid, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/vvict/projects/ubc_game/club_site/src/components/games/GameGrid", "client:component-export": "default", "data-astro-cid-gismuqk3": true })} <!-- Game cards with fallback --> ${games.length > 0 ? renderTemplate`<div class="game-cards-container space-y-8 md:space-y-12" data-astro-cid-gismuqk3> ${games.map((game) => renderTemplate`<div class="game-card-wrapper" data-game-card${addAttribute(game.year, "data-year")} data-astro-cid-gismuqk3> ${renderComponent($$result2, "GameCard", $$GameCard, { ...game, "data-astro-cid-gismuqk3": true })} </div>`)} </div>` : renderTemplate`<div class="py-16 text-center" data-astro-cid-gismuqk3> <svg class="mx-auto mb-4 h-24 w-24 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-gismuqk3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-gismuqk3></path> </svg> <p class="mb-2 text-xl text-gray-50/60" data-astro-cid-gismuqk3>No games yet</p> <p class="text-sm text-gray-50/40" data-astro-cid-gismuqk3>Check back soon for our latest projects!</p> </div>`} </div> </div> </section> </main> ` })} `;
}, "/home/vvict/projects/ubc_game/club_site/src/pages/games.astro", void 0);

const $$file = "/home/vvict/projects/ubc_game/club_site/src/pages/games.astro";
const $$url = "/games";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Games,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
