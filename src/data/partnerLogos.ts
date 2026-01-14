import type { ImageMetadata } from "astro";

import archiact from "../assets/partners/archiact.webp";
import blackbird from "../assets/partners/blackbird_interactive.webp";
import homekey from "../assets/partners/homekey.webp";
import skybox from "../assets/partners/skybox_labs.webp";
import telus from "../assets/partners/telus.webp";
import tgs from "../assets/partners/tgs.webp";

export type Logo = { src: ImageMetadata; alt: string; href?: string };

export const partnerLogos: Logo[] = [
  { src: archiact, alt: "Archiact" },
  { src: blackbird, alt: "Blackbird Interactive", href: "https://blackbirdinteractive.com/" },
  { src: skybox, alt: "SkyBox Labs", href: "https://skyboxlabs.com/" },
  { src: telus, alt: "TELUS", href: "https://www.telus.com/" },
  { src: homekey, alt: "The Home Key", href: "https://www.instagram.com/thehomekeygg/" },
  { src: tgs, alt: "The Gaming Stadium", href: "https://discord.com/invite/tgs" },
];
