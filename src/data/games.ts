// Import of pictures - 2022-2023
import sleepyChef from "../assets/2022-2023/sleepy-chef.png";
import antidote30xx from "../assets/2022-2023/antidote-30xx.png";
import apoc101 from "../assets/2022-2023/apoc-101.png";
import varansSeals from "../assets/2022-2023/varans-seals.png";
import shadowOfSpace from "../assets/2022-2023/shadow-of-space.png";
import umbra from "../assets/2022-2023/umbra.png";
import bouncyGuy from "../assets/2022-2023/bouncy-guy.png";
import cybercision from "../assets/2022-2023/cyberscision.png";
import sunshineShores from "../assets/2022-2023/sunshine-shores.png";

// 2020-2021
import dathora from "../assets/2020-2021/dathora.png";
import mythos from "../assets/2020-2021/mythos.png";
import sidetracked from "../assets/2020-2021/sidetracked.png";
import mediquest from "../assets/2020-2021/mediquest.png";
import constellationTango from "../assets/2020-2021/constellation-tango.png";
import spellrise from "../assets/2020-2021/spellrise.png";
import transduction from "../assets/2020-2021/transduction.png";
import panicTitanic from "../assets/2020-2021/panic-titanic.png";

// 2019-2020
import slimySewers from "../assets/2019-2020/slimy-sewers.jpg";
import starFarm from "../assets/2019-2020/star-farm.png";
import innoculated from "../assets/2019-2020/innoculated.png";
import contaminated from "../assets/2019-2020/contaminated.png";
import forgottenYellow from "../assets/2019-2020/forgotten-yellow.png";
import ninjastack from "../assets/2019-2020/ninjastack.png";

// 2018-2019
import nightParade from "../assets/2018-2019/night-parade.png";
import rooutes from "../assets/2018-2019/rooutes.png";
import michelinRun from "../assets/2018-2019/michelin-run.png";
import klaymation from "../assets/2018-2019/klaymation.png";
import joesLittleHelpers from "../assets/2018-2019/joes-little-helpers.png";
import electricCrescendo from "../assets/2018-2019/electric-crescendo.png";
import edensGarden from "../assets/2018-2019/edens-garden.png";

// Legacy
import swordship from "../assets/legacy/swordship.webp";
import traderSmith from "../assets/legacy/trader-smith.webp";

export type GameMedia = {
  type: 'video' | 'images' | 'image';
  videoUrl?: string; // YouTube embed URL (use youtube-nocookie.com for privacy-enhanced mode)
  images?: ImageMetadata[]; // Array of image slides
  image?: ImageMetadata; // just one picture
};

export type Game = {
  name: string;
  description?: string; // Game description (optional to accomodate for 2021/2022 games)
  instructions?: string; // How-to-Play optional
  media: GameMedia;
  gameLink?: string; // Link to play/download the game (optional)
  teamMembers?: string[]; // also optional
  award?: string; // Winner category (optional)
  year: string;
};

// Helper function to get unique years from games
export function getGameYears(): string[] {
  const years = [...new Set(games.map(game => game.year))];
  return years.sort((a, b) => {
    // Sort in descending order (newest first)
    const [aStart] = a.split('/').map(Number);
    const [bStart] = b.split('/').map(Number);
    return bStart - aStart;
  });
}

// Note that the youtube video must allows embeddings for it to work
export const games: Game[] = [
    {
        name: "Sleepy Chef",
        description: "After staying up all night studying for culinary exams, your sleep becomes restless. Unbeknownst to you, a hidden power has been passed down through generations of Japanese chef ancestors. You can sleep-cook in your dreams! Remembering your grandmother's recipes, you sleep-cook the night away! Hopefully you can pass culinary school from sleepwalking! The player can grab items and utensils with a left click. They can throw the item by dragging and releasing left click. To rotate the item, drag right click while holding an item.",
        instructions: "• Use W A S D and the mouse to move.\n• The player can grab items and utensils with a left click.\n• Throw the item by dragging and releasing left click.\n• To rotate the item, drag right click while holding an item.\n• Jump (SPACE), crouch (CTRL), or interact with objects (E).\n• Press TAB to view the recipe card.\n• The end of the level, place the plate on the the lit up table.",
        media: {
            type: 'image',
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
            type: 'image',
            image: antidote30xx
        },
        gameLink: "https://drive.google.com/drive/folders/1SDfKb5Tcs0WBhRYjWpVkDN-tmCby87wY",
        teamMembers: ["Levi Lu (Project Team Lead)", "So Nakamura (Programming)", "Ural Tunaboyu (Programming)", "Asher Arya (Programming)", "Max Botsis (Level Design & Writing)", "Kyle van Winkoop (Art)", "\"Manu\" Pocholo Ramento (Art)", "Simon Fang (Art)", "Khushi Sharma (Writing)", "Keilah Abello (Writing)"],
        year: "2022/2023"
    },
    {
        name: "APOC101",
        description: "You thought regular classes were hard, try getting your degree in an apocalypse! Whether you wanted to take it or not, APOC 101 is a mandatory course in this pandemic. Put on your sensible footwear and finish finals week before the zombies finish you! Explore minigames and help out the UBC community to leave this nightmare.",
        media: {
            type: 'image',
            image: apoc101
        },
        gameLink: "https://drive.google.com/drive/folders/1-3M8UCEoFV3XtTI2VsDkA3zyTOWYdySa",
        teamMembers: ["Pedro Novais", "Calvin Cavanagh", "Ahren", "Zehao Lu", "Echo", "Nishant Molleti", "Ruixue Luo", "Arpit Kumar", "Hannah Lee", "Sophie Chen", "Lucas Lobo", "Rosalyn Carr", "Kristen"],
        year: "2022/2023"
    },
    {
        name: "Varan's Seals",
        description: "Step into the role of a student of demonic lore as you retrace the footsteps of lost scholar Varan and attempt to decipher the hieroglyphic language of the demons. Uncover inscriptions in your surroundings, fill your grimoire by translating demonic symbols, and unravel ancient spellwork with your newfound mastery. Relying only on your wits and clues left behind by your predecessors, will you be the first to unlock Varan's Seals?",
        instructions: "• Use WASD or arrow keys to move\n• Move your mouse to look around\n• Use Space to jump\n• Use E to interact with objects (objects with outlines have clues!)\n• Use your mouse for on-screen interactions\n• Use B to open and close the Daemonicum\n    ○ As you see more symbols, they will appear in the Daemonicum.\n    ○ Add your own notes to each page!\n• When you're ready, you may interact with the Reliquary (it has a red outline)\n    ○ Click to turn the rings in the Reliquary\n    ○ Press \"Activate\" to attempt to break the seal!",
        media: {
            type: 'image',
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
        instructions: "• Using mouse, click on player you want to move and drag back (or forward)\n    ○ This will show a pink arrow that grows in size depending on how much you drag the mouse\n    ○ Larger size represents \"power\" of launch. Bigger arrow = bigger movement\n• Use mouse and click on arrows for next in the dialogues\n• If game over, escape key to return to main menu\n• To leave game otherwise, use Alt+F4 to exit application",
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
        description: "SideTracked! is a low-poly, casual action RPG where any group of friends can group and side with good or evil while becoming superhuman in strength, power, or magic! Players take on the role of \"assistants\" stolen from their home dimensions by a hugely powerful but disorganized entity. Complete quests in the entity's pocket dimension to help them restore order or go against the commands issued to you and take vengeance for being forcefully abducted.",
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
        year: "2019/2020",
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
        year: "2019/2020",
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
        teamMembers: [ "Levi (Angela) Lu (Project Team Lead)", "Blaze Zhang", "Erin McGinn", "Ferado Smyth", "Joaquin Qiu", "Jonathan Alexander", "Magan Chang", "Natasha Miner", "William Beltran", "Eurielle Marmol (Voice Actor)", "Katherine Guo (Voice Actor)", "Ryan Evan Alfonso (Voice Actor)", "Alyssa Meneses (Voice Actor)", "Conor Meadows (Voice Actor)", "India Coates (Voice Actor)", "Nicolas Olney (Voice Actor)"],
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
] as const;
