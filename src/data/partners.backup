import type { ImageMetadata } from "astro";
import placeholder from "../assets/logo.png"; 
import archiact from "../assets/partners/archiact.webp"; 
import bbi from "../assets/partners/blackbird_interactive.webp"; 
import homekey from "../assets/partners/homekey.webp"; 
import skybox from "../assets/partners/skybox_labs.webp"; 
import telus from "../assets/partners/telus.webp"; 
import tgs from "../assets/partners/tgs.webp"; 


// TODO: replace per-partner with real logos
// Put them in: src/assets/partners/<name>.png and import them here

export type Partner = {
  name: string;
  website?: string;
  image?: ImageMetadata;
  imageAlt?: string;
  paragraphs: string[]; // copy blocks for InfoBlock slot
};

export const partners: Partner[] = [
  {
    name: "Blackbird Interactive",
    website: "https://blackbirdinteractive.com/",
    image: bbi,
    imageAlt: "Blackbird Interactive logo",
    paragraphs: [
      "Blackbird Interactive is an independent game development studio located in Vancouver, BC, Canada.",
      "Founded in 2010, Blackbird Interactive is dedicated to creating uncompromising immersive games with a strong narrative and distinct art style.",
      "Blackbird Interactive is best known for its 2016 release Homeworld: Deserts of Kharak™ and is currently working on several projects including Hardspace: Shipbreaker, Homeworld 3, Minecraft Earth (in collaboration with Microsoft), as well as a number of unannounced projects.",
    ],
  },
  {
    name: "Skybox Labs",
    website: "https://skyboxlabs.com/",
    image: skybox,
    imageAlt: "Skybox Labs logo",
    paragraphs: [
      "SkyBox Labs is a full-service game development studio based in Vancouver, BC, Canada. Founded in 2011, they’ve developed titles alongside some of the world’s top publishers including Xbox Game Studios, Wizards of the Coast, and Electronic Arts.",
      "The studio is currently co-developing Halo Infinite, working on projects in the Minecraft universe, supporting development of Magic: The Gathering Arena, and developing an original title, Stela.",
    ],
  },
  {
    name: "ARCHIACT",
    website: "https://www.archiact.com/",
    image: archiact,
    imageAlt: "Archiact logo",
    paragraphs: [
      "Archiact is a premium virtual and augmented reality studio headquartered in Vancouver, Canada, and specialises in immersive game development.",
      "Founded in 2013, Archiact has released over thirty quality titles across all leading VR/AR platforms, and continue to establish themselves as foremost experts and pioneers in the emerging VR/AR industry.",
      "Archiact's titles include Evasion, Waddle Home and VR Game of the Year nominated FREEDIVER: Triton Down.",
    ],
  },
  {
    name: "The HomeKey",
    website: "https://www.instagram.com/thehomekeygg/",
    image: homekey,
    imageAlt: "The Home Key logo",
    paragraphs: [
      "The Home Key is building a first-of-its-kind professional workspace for the e-sports and gaming community in Downtown Vancouver.",
      "The Home Key offers solutions that are both turnkey and customizable—whether you're a startup in need of office space, a streamer looking to expand your audience, or a game developer who wants feedback from a qualified base.",
      "By connecting the industry's diverse ecosystem through a dedicated facility, the goal is to counteract the top heavy e-sports landscape and create sustainable community infrastructure from the ground up.",
    ],
  },
  {
    name: "TELUS",
    website: "https://www.telus.com/",
    image: telus,
    imageAlt: "TELUS logo",
    paragraphs: [
      "TELUS is a Canadian company that provides extended telecommunication products and services, including High-Speed Internet, Home Phone, TV, mobility, and health and security products.",
      "When you choose TELUS PureFibre™, you're on Western Canada's only 100% fibre optic network with the fastest internet technology and unparalleled reliability.",
      "TELUS also ranks #1 for the best gaming quality, with the lowest combined latency and jitter amongst major Internet Service Providers.",
    ],
  },
  {
    name: "The Gaming Stadium",
    website: "",
    image: tgs,
    imageAlt: "The Gaming Stadium logo",
    paragraphs: [
      "The Gaming Stadium is Canada's first dedicated esports stadium, located in Richmond, British Columbia.",
      "TGS is custom built from the ground up with one purpose in mind - build the best place to play and watch your favourite esports! Visit their website and join the community at Discord.",
    ],
  },
];
