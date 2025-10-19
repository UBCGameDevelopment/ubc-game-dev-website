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
};

// Example games data
// Note that the youtube video must allows embeddings for it to work
export const games: Game[] = [
  {
    name: "Quantum Odyssey",
    description: "An innovative puzzle-platformer that explores quantum mechanics through engaging gameplay. Players manipulate time and space to solve increasingly complex challenges while uncovering the mysteries of a fractured universe.",
    media: {
      type: 'video',
      videoUrl: 'https://www.youtube-nocookie.com/embed/jNQXAC9IVRw' // Test with "Me at the zoo" - first YouTube video
    },
    teamMembers: ["Sarah Chen", "Marcus Rodriguez", "Aisha Patel", "Jake Morrison"],
    award: "Best Game Design"
  },
  {
    name: "Neon Streets",
    description: "A high-octane racing game set in a cyberpunk metropolis. Race through neon-lit streets, customize your vehicle with cutting-edge tech, and compete in underground tournaments. Features stunning visuals and an original synthwave soundtrack.",
    media: {
      type: 'video',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
    },
    teamMembers: ["Alex Kim", "Jordan Taylor", "Emma Wilson", "Ryan Chen", "Olivia Zhang"],
    award: "Best Visual Design"
  },
  {
    name: "Forest Guardian",
    description: "An enchanting adventure game where players take on the role of a mystical forest spirit protecting nature from encroaching darkness. Combines exploration, puzzle-solving, and strategic resource management in a beautifully hand-painted world.",
    media: {
      type: 'video',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
    },
    teamMembers: ["Lily Martinez", "Noah Brown", "Sophie Anderson"],
    award: "Best Narrative"
  },
  {
    name: "Cosmic Chef",
    description: "A whimsical cooking simulator set in space! Manage an intergalactic restaurant, serve alien customers with unique dietary needs, and discover exotic ingredients from across the galaxy. Fast-paced gameplay meets culinary creativity.",
    media: {
      type: 'video',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
    },
    teamMembers: ["Hannah Lee", "David Park", "Isabella Garcia", "Ethan Wong"],
  },
  {
    name: "Shadow Protocol",
    description: "A tactical stealth game where precision and planning are everything. Infiltrate high-security facilities, hack systems, and complete objectives without being detected. Features dynamic AI and multiple approaches to each mission.",
    media: {
      type: 'video',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
    },
    teamMembers: ["Michael Thompson", "Zara Ahmed", "Lucas Bennett", "Mia Johnson", "Oscar Liu"],
    award: "Best Technical Achievement"
  },
  {
    name: "Harmony Tower",
    description: "A unique rhythm-based puzzle game where music and architecture collide. Build towering structures by matching beats and melodies, with each level introducing new musical genres and challenges. An audiovisual masterpiece.",
    media: {
      type: 'video',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
    },
    teamMembers: ["Chloe Nguyen", "Benjamin Smith", "Ava Martinez"],
    award: "Best Audio Design"
  }
];
