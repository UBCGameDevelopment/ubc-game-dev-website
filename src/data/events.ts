// src/data/events.ts
import type { ImageMetadata } from "astro";

// Images
import placeholderImage from "../assets/logo.png";

export type Event = {
  title: string;
  date: string;
  description: string;
  location: string;
  image: ImageMetadata;
};

export const events: Event[] = [
  {
    title: "Launch Party: Learn more About Us",
    date: "Friday, September 26, 2025: 6-9pm",
    description: "Our launch party is the perfect chance to learn more about what exactly the club does. At our launch party, you will hear about how you can join a team, what our events look like and what ways the club can help support you! Its your chance to become a member.",
    location: "BUCH A104",
    image: placeholderImage,
  },
  {
    title: "Game Jam Workshop",
    date: "Saturday, October 12, 2025: 10am-4pm",
    description: "Join us for an intensive game development workshop where you'll learn the basics of game design, coding, and art. Work in teams to create a complete game in just one day!",
    location: "ICICS X836",
    image: placeholderImage,
  },
  {
    title: "Industry Speaker Series",
    date: "Wednesday, November 6, 2025: 5-7pm",
    description: "Hear from industry professionals about their journey in game development. Network with developers from local studios and learn about career opportunities in the gaming industry.",
    location: "ESB 1012",
    image: placeholderImage,
  },
];
