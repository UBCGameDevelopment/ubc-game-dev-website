// src/data/events.ts
import type { Event } from "../types";

// Images
import placeholderImage from "../assets/hero/hero-graphics-1.png";
import launchPartyImage from "../assets/timeline/launch_party.jpg";
import unityImage from "../assets/timeline/unity.png";
import nwhacks from "../assets/timeline/nwhacks2026.webp";
import triviaNight from "../assets/timeline/Trivia_Night.webp";

export const events: Event[] = [
  {
    title: "Launch Party: Learn more About Us",
    date: "Friday, Sept. 26, 2025: 6-9pm",
    isoDate: "2025-09-26T18:00:00",
    description:
      "Our launch party is the perfect chance to learn more about what exactly the club does. At our launch party, you will hear about how you can join a team, what our events look like and what ways the club can help support you! Its your chance to become a member.",
    location: "BUCH A104",
    mapLink: "https://maps.app.goo.gl/kXj9mxqmohCmDsbt7",
    image: launchPartyImage,
    isActive: false,
  },
  {
    title: "Unity Workshop (w/ Alan)",
    date: "Wed., Nov. 19, 2025: 6:30-8pm",
    isoDate: "2025-11-19T18:30:00",
    description:
      "Join us for an intensive game development workshop where you'll learn the basics of Unity. Get the required skills to create your own games with us!",
    location: "BUCH D222",
    mapLink: "https://maps.app.goo.gl/5s75UNe32sQprvFJA",
    image: unityImage,
    isActive: false,
  },
  {
    title: "Battle of the Concepts",
    date: "Friday, Nov. 21, 2025: 6-8pm",
    isoDate: "2025-11-21T18:00:00",
    description:
      "Step into the arena of creativity! Members pitch their boldest game ideas, showcase their vision, and compete for the club's vote. The concept that wins the crowd could become our next big game project — who will rise as the ultimate creator?",
    location: "BUCH A104",
    mapLink: "https://maps.app.goo.gl/kXj9mxqmohCmDsbt7",
    image: placeholderImage,
    isActive: false,
  },
  {
    title: "nwHacks 2026 Workshop",
    date: "Friday, Jan. 16, 2026: 6-7:30pm",
    isoDate: "2026-01-16T18:00:00",
    description:
      "Join our hands-on Unity workshop and build your first 3D game, Roll-a-Ball! You'll learn the essentials like scene setup, player movement, physics, and collecting objects. Leave with a playable mini-game and a strong base to keep creating on your own. <strong>No experience needed, just bring your laptop with the latest version of Unity installed.</strong>",
    location: "IRC 5",
    mapLink: "https://maps.app.goo.gl/yvfR3oCS7TRHdyUn8",
    image: nwhacks,
    isActive: true,
  },
  {
    title: "Video Game Trivia Night",
    date: "Friday, Jan. 23, 2026: 6pm",
    isoDate: "2026-01-23T18:00:00",
    description:
      "🕹️ Test your gaming knowledge at Video Game Trivia Night! Join us for an exciting evening hosted by Aaron Gordon from BraceYourselfGames. Form teams of up to 6 players and compete for the title of Trivia Champion! <strong>Free to attend with donations encouraged (all proceeds benefit B.C. Children's Hospital to bring video games to kids ❤️)</strong><br/><br/><a href='https://www.eventbrite.ca/e/video-game-trivia-ubc-edition-tickets-1980223837805' target='_blank' rel='noopener noreferrer' style='font-weight: bold;' onmouseover='this.style.textDecoration=\"underline\"' onmouseout='this.style.textDecoration=\"none\"'>RSVP here</a>",
    location: "BUCH A104",
    mapLink: "https://maps.app.goo.gl/kXj9mxqmohCmDsbt7",
    image: triviaNight,
    isActive: true,
  },
  {
    title: "Global Game Jam Showcase",
    date: "Friday, Feb. 14, 2026: 5-8pm",
    isoDate: "2026-02-14T17:00:00",
    description:
      "Witness the chaos and creativity of our Global Game Jam teams! Play the games created in just 48 hours and vote for your favorites. Pizza and refreshments provided for all operatives.",
    location: "Life Sciences Centre",
    mapLink: "https://maps.google.com",
    image: placeholderImage,
    isActive: true,
  },
  {
    title: "Spring Quarter Kickoff",
    date: "Mon, Mar. 2, 2026: 6pm",
    isoDate: "2026-03-02T18:00:00",
    description:
      "New semester, new mission. innovative workshops, guest speakers from the industry, and team formation for the spring projects. Don't miss the briefing.",
    location: "MacLeod Building",
    mapLink: "https://maps.google.com",
    image: unityImage,
    isActive: true,
  },
];
