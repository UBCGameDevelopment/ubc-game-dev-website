// src/data/games.ts

export type GameMedia = {
  type: 'video' | 'images';
  videoUrl?: string; // YouTube embed URL (use youtube-nocookie.com for privacy-enhanced mode)
  images?: ImageMetadata[]; // Array of image slides
};

export type Game = {
  name: string;
  description: string;
  media: GameMedia;
  teamMembers?: string[]; // also optional
  award?: string; // Winner category (optional)
  year: string;
};

// Example games data
// Note that the youtube video must allows embeddings for it to work
export const games: Game[] = [
  // 2025/26
  {
    name: "Quantum Odyssey",
    description: "An innovative puzzle-platformer that explores quantum mechanics through engaging gameplay. Players manipulate time and space to solve increasingly complex challenges while uncovering the mysteries of a fractured universe.",
    media: {
      type: 'video',
      videoUrl: 'https://www.youtube-nocookie.com/embed/jNQXAC9IVRw' // Test with "Me at the zoo" - first YouTube video
    },
    teamMembers: ["Sarah Chen", "Marcus Rodriguez", "Aisha Patel", "Jake Morrison"],
    award: "Best Game Design",
    year: "2025/26"
  },
  {
    name: "Neon Streets",
    description: "A high-octane racing game set in a cyberpunk metropolis. Race through neon-lit streets, customize your vehicle with cutting-edge tech, and compete in underground tournaments. Features stunning visuals and an original synthwave soundtrack.",
    media: {
      type: 'video',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
    },
    teamMembers: ["Alex Kim", "Jordan Taylor", "Emma Wilson", "Ryan Chen", "Olivia Zhang"],
    award: "Best Visual Design",
    year: "2025/26"
  },
  {
    name: "Forest Guardian",
    description: "An enchanting adventure game where players take on the role of a mystical forest spirit protecting nature from encroaching darkness. Combines exploration, puzzle-solving, and strategic resource management in a beautifully hand-painted world.",
    media: {
      type: 'video',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
    },
    teamMembers: ["Lily Martinez", "Noah Brown", "Sophie Anderson"],
    award: "Best Narrative",
    year: "2025/26"
  },
  {
    name: "Cosmic Chef",
    description: "A whimsical cooking simulator set in space! Manage an intergalactic restaurant, serve alien customers with unique dietary needs, and discover exotic ingredients from across the galaxy. Fast-paced gameplay meets culinary creativity.",
    media: {
      type: 'video',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
    },
    teamMembers: ["Hannah Lee", "David Park", "Isabella Garcia", "Ethan Wong"],
    year: "2025/26"
  },
  {
    name: "Shadow Protocol",
    description: "A tactical stealth game where precision and planning are everything. Infiltrate high-security facilities, hack systems, and complete objectives without being detected. Features dynamic AI and multiple approaches to each mission.",
    media: {
      type: 'video',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
    },
    teamMembers: ["Michael Thompson", "Zara Ahmed", "Lucas Bennett", "Mia Johnson", "Oscar Liu"],
    award: "Best Technical Achievement",
    year: "2025/26"
  },
  {
    name: "Harmony Tower",
    description: "A unique rhythm-based puzzle game where music and architecture collide. Build towering structures by matching beats and melodies, with each level introducing new musical genres and challenges. An audiovisual masterpiece.",
    media: {
      type: 'video',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
    },
    teamMembers: ["Chloe Nguyen", "Benjamin Smith", "Ava Martinez"],
    award: "Best Audio Design",
    year: "2025/26"
  },

  // 2024/2025 Games
  {
    name: "Pixel Frontier",
    description: "A nostalgic pixel-art roguelike with modern mechanics. Explore procedurally generated dungeons, collect powerful artifacts, and face challenging bosses. Every run tells a different story.",
    media: {
      type: 'video',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
    },
    teamMembers: ["James Park", "Rachel Kim", "Tyler Chen"],
    award: "Best Indie Game",
    year: "2024/2025"
  },
  {
    name: "Gravity Shift",
    description: "Defy physics in this mind-bending platformer where you control gravity itself. Flip, rotate, and navigate impossible architecture while solving environmental puzzles.",
    media: {
      type: 'video',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
    },
    teamMembers: ["Maya Johnson", "Chris Lee", "Sophia Martinez", "Daniel Wong"],
    year: "2024/2025"
  },
  {
    name: "Echo Chamber",
    description: "A psychological horror game that uses sound as its primary mechanic. Navigate through darkness using echolocation while avoiding unseen threats. Headphones strongly recommended.",
    media: {
      type: 'video',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
    },
    teamMembers: ["Nathan Brown", "Emily Davis", "Marcus White"],
    award: "Best Atmosphere",
    year: "2024/2025"
  },

  // 2023/2024 Games
  {
    name: "Starship Tycoon",
    description: "Build and manage your own space empire in this strategic simulation game. Trade resources, research technologies, and expand your influence across the galaxy.",
    media: {
      type: 'video',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
    },
    teamMembers: ["Victoria Zhang", "Andrew Thompson", "Jessica Liu", "Kevin Park"],
    award: "Best Strategy Game",
    year: "2023/2024"
  },
  {
    name: "Dragon's Legacy",
    description: "An epic fantasy RPG where your choices shape the world. Forge alliances, master ancient magic, and determine the fate of kingdoms in this narrative-driven adventure.",
    media: {
      type: 'video',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
    },
    teamMembers: ["Brandon Wu", "Ashley Chen", "Dylan Martinez"],
    year: "2023/2024"
  },

  // 2022/2023 Games
  {
    name: "Robo Rescue",
    description: "A charming puzzle-platformer starring a small robot on a big mission. Use various gadgets and abilities to save your robot friends in this family-friendly adventure.",
    media: {
      type: 'video',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
    },
    teamMembers: ["Grace Lee", "Samuel Johnson", "Madison Brown"],
    award: "Best Newcomer Project",
    year: "2022/2023"
  },
  {
    name: "Wasteland Warriors",
    description: "Survive in a post-apocalyptic world filled with dangers and opportunities. Scavenge for resources, craft weapons, and build alliances in this open-world survival game.",
    media: {
      type: 'video',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
    },
    teamMembers: ["Connor Smith", "Taylor Anderson", "Jordan Kim", "Morgan Davis"],
    year: "2022/2023"
  },

  // Other
  {
    name: "Echoes of Aether",
    description:
      "An atmospheric action-adventure where players manipulate sound waves to solve environmental puzzles and uncover the mysteries of a forgotten world floating in the sky.",
    media: {
      type: "video",
      videoUrl: "https://www.youtube-nocookie.com/embed/5qap5aO4i9A"
    },
    teamMembers: ["Liam Chen", "Isabella Nguyen", "Noah Patel"],
    award: "Best Art Direction",
    year: "Other"
  }
];

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
