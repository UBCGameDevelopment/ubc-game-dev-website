import type { Event } from "../types";
import ubcGameDirect from "../assets/events/ubc_game_direct.png";
import placeholder from "../assets/logo/hero-graphics-1.png";

export const events: Event[] = [
  {
    title: "Imagine Day",
    date: "Monday, September 8, 2026: 1:00pm – 5:00pm",
    isoDate: "2026-09-08T13:00:00",
    description: "Come by our booth near the Engineering Cairn to say hi and meet the team behind it all!",
    detailPoints: [
      "When: Monday, September 8th | 1:00 PM – 5:00 PM",
      "Where: Engineering Cairn",
      "Who: Open to all students—come say hi!",
    ],
    location: "Engineering Cairn",
    image: placeholder,
    isActive: false,
  },
  {
    title: "UBC Game Direct",
    date: "Friday, September 18, 2026: 6:30pm",
    isoDate: "2026-09-18T18:30:00",
    description: "Join us for the UBC Game Direct Launch Party! Learn more about the club, how to get involved in our game dev teams, and what events and workshops are coming up this year.",
    detailPoints: [
      "When: Friday, September 18th | 6:30 PM",
      "Where: BUCH A202 (Buchanan Building)",
      "Who: Open to all students & game dev enthusiasts—everyone is welcome!",
    ],
    location: "BUCH A202",
    mapLink: "https://maps.app.goo.gl/K4iwFDuS9thBq7b18",
    image: ubcGameDirect,
    isActive: true,
  },
];
