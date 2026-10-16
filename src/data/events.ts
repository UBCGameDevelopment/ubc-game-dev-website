import type { Event } from "../types";
import ubcGameDirect from "../assets/events/ubc_game_direct.png";
import placeholder from "../assets/logo/hero-graphics-1.png";
import battleOfConcepts from "../assets/events/battle-of-concepts-2026.png";
import battleOfConceptsSchedule from "../assets/events/battle-of-concepts-2026-schedule.png";
import industrySpeakers from "../assets/events/industry-speakers-2026.png";
import godotLogo from "../assets/events/godot-workshop.png";
import unityLogo from "../assets/timeline/unity.png";

export const events: Event[] = [
  {
    title: "Imagine Day",
    date: "Monday, September 8, 2026: 1:00 PM – 5:00 PM",
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
    date: "Friday, September 18, 2026: 6:30 PM",
    isoDate: "2026-09-18T18:30:00",
    description: "Join us for the UBC Game Direct Launch Party! Learn more about the club, how to get involved in our game dev teams, and what events and workshops are coming up this year.",
    detailPoints: [
      "When: Friday, September 18th | 6:30 PM",
      "Where: Buchanan A202",
      "Who: Open to all students & game dev enthusiasts—everyone is welcome!",
    ],
    location: "Buchanan A202",
    mapLink: "https://maps.app.goo.gl/K4iwFDuS9thBq7b18",
    image: ubcGameDirect,
    isActive: false,
  },
  {
    title: "Workshop #1: Roll a Ball Unity",
    date: "Wednesday, October 7, 2026: 5:30 PM – 8:00 PM",
    isoDate: "2026-10-07T17:30:00",
    description: "Build a Roll a Ball game in Unity with our community instructors. All skill levels are welcome!",
    detailPoints: [
      "A Google Form for sign-up will be shared. Drop-ins are welcome!",
    ],
    location: "MacLeod 2012",
    mapLink: "https://www.google.com/maps/search/?api=1&query=MacLeod+Building%2C+2356+Main+Mall%2C+Vancouver%2C+BC",
    image: unityLogo,
    isActive: true,
  },
  {
    title: "October Playtest",
    date: "October 2026: Sign-up ends October 4",
    isoDate: "2026-10-04T00:00:00",
    description: "Get paid to playtest Korean indie games this October with Plithus, a playtesting company based in South Korea.",
    detailPoints: [
      "Details will be posted on Discord.",
      "Requires creating an account and linking Steam, PSN, or Xbox.",
    ],
    image: placeholder,
    isActive: true,
  },
  {
    title: "Industry Speaker #1",
    date: "Friday, October 23, 2026: 5:30 PM – 8:00 PM",
    isoDate: "2026-10-23T17:30:00",
    description: "Hear from **Jonathan Ng** (Yap Yap), plus **Gil Costa** (Destiny 2, Halo Infinite) and **Ghafur Remtulla** (Minecraft, Fallout 76) of SkyBox Labs, for talks on game design, marketing, and how AI could positively impact developers and players.",
    detailPoints: [
      "Part of Battle of the Concepts.",
      "5:30 PM – 6:15 PM | Be a proactive designer so you can be a lazy marketer. **Jonathan Ng**, one of the masterminds behind Yap Yap (a breakout indie with 1M+ units sold in 2026), breaks down the design and marketing decisions behind going viral and building a huge community.",
      "7:15 PM – 8:00 PM | Patching the Future: AI Workflows & Opportunity in Game Dev. **Gil Costa** and **Ghafur Remtulla** of SkyBox Labs discuss how AI could positively impact both developers and players.",
    ],
    location: "Buchanan A202",
    mapLink: "https://maps.app.goo.gl/K4iwFDuS9thBq7b18",
    image: industrySpeakers,
    isActive: true,
  },
  {
    title: "Battle of the Concepts",
    date: "Friday, October 23, 2026: 5:30 PM – 8:00 PM",
    isoDate: "2026-10-23T17:30:00",
    description: "Battle of the Concepts 2026 is here! One night, three reasons to show up: guest speakers, team game pitches, and a look at how AI could shape the future of game development.",
    detailPoints: [
      "5:30 PM – 6:15 PM | Be a proactive designer so you can be a lazy marketer. **Jonathan Ng**, one of the masterminds behind Yap Yap—a breakout indie with 1M+ units sold in 2026—breaks down the design and marketing decisions behind going viral and building a huge community.",
      "6:15 PM – 7:15 PM | Team Game Pitches. Discover the concepts our teams will be working on as each team presents their game idea, and vote for your favourite!",
      "7:15 PM – 8:00 PM | Patching the Future: AI Workflows & Opportunity in Game Dev. Hear from **Gil Costa** (Destiny 2, Halo Infinite) and **Ghafur Remtulla** (Minecraft, Fallout 76) of SkyBox Labs on how AI could positively impact both developers and players.",
    ],
    location: "Buchanan A202",
    mapLink: "https://maps.app.goo.gl/K4iwFDuS9thBq7b18",
    image: battleOfConcepts,
    additionalImages: [
      {
        image: battleOfConceptsSchedule,
        alt: "Battle of the Concepts 2026 schedule: Jonathan Ng at 5:30 PM, team game pitches at 6:15 PM, and Gil Costa and Ghafur Remtulla at 7:15 PM.",
      },
    ],
    isActive: true,
  },
  {
    title: "Workshop #2: Intro to Godot",
    date: "Wednesday, October 28, 2026",
    isoDate: "2026-10-28T00:00:00",
    description: "Get started with the Godot game engine alongside our community instructors. All skill levels are welcome!",
    detailPoints: [
      "A Google Form for sign-up will be shared. Drop-ins are welcome!",
    ],
    location: "MacLeod 2012",
    mapLink: "https://www.google.com/maps/search/?api=1&query=MacLeod+Building%2C+2356+Main+Mall%2C+Vancouver%2C+BC",
    image: godotLogo,
    isActive: true,
  },
  {
    title: "Workshop #3: How to Use an LLM",
    date: "Wednesday, November 18, 2026",
    isoDate: "2026-11-18T00:00:00",
    description: "Learn the basics of using large language models (LLMs) with our community instructors. All skill levels are welcome!",
    detailPoints: [
      "A Google Form for sign-up will be shared. Drop-ins are welcome!",
    ],
    location: "MacLeod 2012",
    mapLink: "https://www.google.com/maps/search/?api=1&query=MacLeod+Building%2C+2356+Main+Mall%2C+Vancouver%2C+BC",
    image: placeholder,
    isActive: true,
  },
  {
    title: "Industry Speaker #2",
    date: "Friday, November 20, 2026",
    isoDate: "2026-11-20T00:00:00",
    description: "Join game industry professionals for another session of insights into their work and a chance to ask questions.",
    detailPoints: ["Stay tuned for the speaker announcements!"],
    location: "Buchanan A202",
    mapLink: "https://maps.app.goo.gl/K4iwFDuS9thBq7b18",
    image: placeholder,
    isActive: true,
  },
];
