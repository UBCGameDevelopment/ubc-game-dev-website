import type { Event } from "../types";

import placeholderImage from "../assets/logo/hero-graphics-1.png";
import launchPartyImage from "../assets/timeline/launch_party.webp";
import unityImage from "../assets/timeline/unity.png";
import nwhacks from "../assets/timeline/nwhacks2026.webp";
import triviaNight from "../assets/timeline/Trivia_Night.webp";
import gameJamQrCode from "../assets/events/qrcode.png";

export const events: Event[] = [
  {
    title: "Year-End Showcase",
    date: "Saturday, April 4, 2026: 2:00-6:00pm",
    isoDate: "2026-04-04T14:00:00",
    description:
      "The UBC Game Development Club Year-End Showcase is almost here. Celebrate the games built this year, connect with industry professionals, and get hands-on feedback from fellow developers and players.",
    detailPoints: [
      "When: Saturday, April 4th | 2:00 - 6:00 PM",
      "Where: IBLC 261 (Irving K. Barber Learning Centre)",
      "Who: Everyone is welcome. This is an open-floor event.",
    ],
    location: "IBLC 261 (Irving K. Barber Learning Centre)",
    mapLink: "https://learningspaces.ubc.ca/classrooms/iblc-261/",
    image: placeholderImage,
    isActive: true,
  },
  {
    title: "UBC x UVic Game Jam",
    date: "Feb. 11-20, 2026: 2-6pm",
    isoDate: "2026-02-14T14:00:00",
    description:
      "UBC and UVic unite for a week-long cross-campus Game Jam. Meet developers from both universities, form teams, and collaborate on original games throughout the week.",
    detailPoints: [
      "Play the finished games, vote for your favorites, and connect with new collaborators from both schools.",
      "Use the QR code below to join the jam and access the event hub.",
    ],
    actionLink: {
      label: "Open Discord",
      href: "https://discord.gg/m4yJFNuw",
    },
    supplementalImage: {
      src: gameJamQrCode.src,
      alt: "QR code for the UBC x UVic Game Jam Discord",
    },
    location: "Remote [Discord]",
    mapLink: "https://discord.gg/m4yJFNuw",
    image: placeholderImage,
    isActive: false,
  },
  {
    title: "Video Game Trivia Night",
    date: "Friday, Jan. 23, 2026: 6pm",
    isoDate: "2026-01-23T18:00:00",
    description:
      "Test your gaming knowledge at Video Game Trivia Night with Aaron Gordon from BraceYourselfGames. Form teams of up to six players and compete for the title of Trivia Champion.",
    detailPoints: [
      "Free to attend, with donations encouraged.",
      "All proceeds support B.C. Children's Hospital in bringing video games to kids.",
    ],
    actionLink: {
      label: "RSVP Here",
      href: "https://www.eventbrite.ca/e/video-game-trivia-ubc-edition-tickets-1980223837805",
    },
    location: "BUCH A104",
    mapLink: "https://maps.app.goo.gl/kXj9mxqmohCmDsbt7",
    image: triviaNight,
    isActive: false,
  },
  {
    title: "nwHacks 2026 Workshop",
    date: "Friday, Jan. 16, 2026: 6-7:30pm",
    isoDate: "2026-01-16T18:00:00",
    description:
      "Join our hands-on Unity workshop and build your first 3D game, Roll-a-Ball. You'll learn scene setup, player movement, physics, and object collection, then leave with a playable mini-game and a strong base to keep creating.",
    detailPoints: [
      "No experience needed.",
      "Bring your laptop with the latest version of Unity installed.",
    ],
    location: "IRC 5",
    mapLink: "https://maps.app.goo.gl/yvfR3oCS7TRHdyUn8",
    image: nwhacks,
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
    title: "Launch Party: Learn more About Us",
    date: "Friday, Sept. 26, 2025: 6-9pm",
    isoDate: "2025-09-26T18:00:00",
    description:
      "Our launch party is the perfect chance to learn more about what exactly the club does. At our launch party, you will hear about how you can join a team, what our events look like and what ways the club can help support you! Its your chance to become a member.",
    location: "BUCH A104",
    mapLink: "https://maps.app.goo.gl/kXj9mxqmohCmDsbt7",
    image: launchPartyImage,
    isActive: false,
  }
];
