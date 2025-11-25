// src/data/events.ts
import type { Event } from '../types';

// Images
import placeholderImage from "../assets/hero/hero-graphics-1.png";
import launchPartyImage from "../assets/timeline/launch_party.jpg";
import unityImage from "../assets/timeline/unity.png";

export const events: Event[] = [
  {
    title: "Launch Party: Learn more About Us",
    date: "Friday, Sept. 26, 2025: 6-9pm",
    description: "Our launch party is the perfect chance to learn more about what exactly the club does. At our launch party, you will hear about how you can join a team, what our events look like and what ways the club can help support you! Its your chance to become a member.",
    location: "BUCH A104",
    mapLink: "https://maps.app.goo.gl/kXj9mxqmohCmDsbt7",
    image: launchPartyImage,
  },
  {
    title: "Unity Workshop (w/ Alan)",
    date: "Wed., Nov. 19, 2025: 6:30-8pm",
    description: "Join us for an intensive game development workshop where you'll learn the basics of Unity. Get the required skills to create your own games with us!",
    location: "BUCH D222",
    mapLink: "https://maps.app.goo.gl/5s75UNe32sQprvFJA",
    image: unityImage,
  },
  {
    title: "Battle of the Concepts",
    date: "Friday, Nov. 21, 2025: 6-8pm",
    description: "Step into the arena of creativity! Members pitch their boldest game ideas, showcase their vision, and compete for the club’s vote. The concept that wins the crowd could become our next big game project — who will rise as the ultimate creator?",
    location: "BUCH A104",
    mapLink: "https://maps.app.goo.gl/kXj9mxqmohCmDsbt7",
    image: placeholderImage,
  },
];
