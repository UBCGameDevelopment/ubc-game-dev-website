import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_C2S9dwlY.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_-OEfOtAE.mjs';
import { I as xavier, J as bethany, K as lucas, L as sarah, M as mathew, N as chloe, O as kyle, P as victor, Q as justin, R as vanshika, S as brittany, T as noah, U as placeholder } from '../chunks/logo_RjLqd7JM.mjs';
import '../chunks/hero-graphics-1_C_QibVuj.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_OTmU57NM.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const execs = [
  {
    name: "Xavier Lam",
    role: "President",
    linkedin: "https://www.linkedin.com/in/placeholder/",
    image: xavier
  },
  {
    name: "Bethany Guo",
    role: "Community Director",
    linkedin: "https://www.linkedin.com/in/bethany-guo-39b9a5337/",
    image: bethany
  },
  {
    name: "Lucas Liu",
    role: "Marketing Director",
    linkedin: "https://www.linkedin.com/in/lucas-liu-32b566216/",
    image: lucas
  },
  {
    name: "Sarah Liang",
    role: "Social Media Director",
    linkedin: "https://www.linkedin.com/in/ssarahliang/",
    image: sarah
  },
  {
    name: "Mathew Drexel",
    role: "Treasurer",
    linkedin: "https://www.linkedin.com/in/mathew-drexel-a77167205/",
    image: mathew
  },
  {
    name: "Chloe Cheng",
    role: "VP External",
    linkedin: "https://www.linkedin.com/in/chloecheng6772/",
    portfolio: "https://chloeecheng.cargo.site/",
    image: chloe
  },
  {
    name: "Kyle Van Winkoop",
    role: "Executive-at-Large",
    linkedin: "https://www.linkedin.com/in/kyle-van-winkoop/",
    image: kyle
  },
  {
    name: "Victor Thai",
    role: "Web Developer / Web Manager",
    linkedin: "www.linkedin.com/in/vvictort20",
    github: "https://github.com/vvictort",
    image: victor
  },
  {
    name: "Justin Galimpin",
    role: "Web Developer / Web Manager",
    linkedin: "https://www.linkedin.com/in/justin-galimpin/",
    github: "https://github.com/JustinGalimpin",
    image: justin
  },
  {
    name: "Vanshika Dixit",
    role: "Conference Director",
    linkedin: "https://www.linkedin.com/in/vdixit20/",
    image: vanshika
  },
  {
    name: "Brittany Tsui",
    role: "Graphic Designer",
    linkedin: "https://www.linkedin.com/in/brittanytsui/",
    image: brittany
  },
  {
    name: "Noah Cho",
    role: "3D Graphic Designer",
    linkedin: "https://www.linkedin.com/in/noah-cho-184302230/",
    image: noah
  },
  {
    name: "Pedro Novais",
    role: "VP Project Teams",
    linkedin: "https://www.linkedin.com/in/placeholder/",
    image: placeholder
  }
];

class ExecService {
  /**
   * Get all executives
   * @returns Array of all executives
   */
  static getAll() {
    return execs;
  }
  /**
   * Get executives by role
   * @param role - Role string to filter by (e.g., "President", "Vice President")
   * @returns Filtered array of executives
   */
  static getByRole(role) {
    return execs.filter(
      (exec) => exec.role.toLowerCase().includes(role.toLowerCase())
    );
  }
  /**
   * Get the president(s)
   * @returns Array of executives with "President" in their role
   */
  static getPresidents() {
    return execs.filter(
      (exec) => exec.role.toLowerCase().includes("president") && !exec.role.toLowerCase().includes("vice")
    );
  }
  /**
   * Get all executives except presidents (for grid display)
   * @returns Array of non-president executives
   */
  static getNonPresidents() {
    return execs.filter(
      (exec) => !(exec.role.toLowerCase().includes("president") && !exec.role.toLowerCase().includes("vice"))
    );
  }
  /**
   * Get executives with GitHub profiles
   * @returns Array of executives who have GitHub links
   */
  static getWithGitHub() {
    return execs.filter((exec) => exec.github);
  }
  /**
   * Get executives with portfolio links
   * @returns Array of executives who have portfolio links
   */
  static getWithPortfolio() {
    return execs.filter((exec) => exec.portfolio);
  }
  /**
   * Search executives by name
   * @param query - Search query string
   * @returns Array of executives matching the query
   */
  static search(query) {
    const lowerQuery = query.toLowerCase();
    return execs.filter(
      (exec) => exec.name.toLowerCase().includes(lowerQuery) || exec.role.toLowerCase().includes(lowerQuery)
    );
  }
  /**
   * Get total count of executives
   * @returns Total number of executives
   */
  static getCount() {
    return execs.length;
  }
}

const $$Astro$4 = createAstro();
const $$LinkedInIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LinkedInIcon;
  const { class: className = "h-5 w-5" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"${addAttribute(className, "class")} aria-hidden="true"> <path d="M20.45 20.45h-3.55v-5.58c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.4v6.34zM5.34 7.44a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"></path> </svg>`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/common/Icons/LinkedInIcon.astro", void 0);

const $$Astro$3 = createAstro();
const $$GitHubIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$GitHubIcon;
  const { class: className = "h-5 w-5" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"${addAttribute(className, "class")} aria-hidden="true"> <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.54.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.61.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0112 4.5c.84 0 1.68.11 2.47.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.82-2.34 4.68-4.56 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.43-.01 2.77 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"></path> </svg>`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/common/Icons/GitHubIcon.astro", void 0);

const $$Astro$2 = createAstro();
const $$PortfolioIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortfolioIcon;
  const { class: className = "h-5 w-5", variant = "default" } = Astro2.props;
  return renderTemplate`${variant === "robot" ? renderTemplate`<!-- Robot icon for special portfolio links -->
  ${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"${addAttribute(className, "class")} aria-hidden="true"><path d="M21 11c0-.55-.45-1-1-1h-.17l-2.57-2.57c.1-.32.17-.66.17-1.01 0-1.93-1.57-3.5-3.5-3.5-.96 0-1.83.38-2.47 1h-.92c-.64-.62-1.51-1-2.47-1C6.14 2.92 4.57 4.49 4.57 6.42c0 .35.07.69.17 1.01L2.17 10H2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1v5c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5h1c.55 0 1-.45 1-1v-2zM8.07 4.92c.63 0 1.15.52 1.15 1.15s-.52 1.15-1.15 1.15-1.15-.52-1.15-1.15.52-1.15 1.15-1.15zm5.85 0c.63 0 1.15.52 1.15 1.15s-.52 1.15-1.15 1.15-1.15-.52-1.15-1.15.52-1.15 1.15-1.15zM19 19H5v-4h14v4z"></path><circle cx="8" cy="17" r="1"></circle><circle cx="12" cy="17" r="1"></circle><circle cx="16" cy="17" r="1"></circle></svg>` : renderTemplate`<!-- Default globe/portfolio icon -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"${addAttribute(className, "class")} aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>`}`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/common/Icons/PortfolioIcon.astro", void 0);

const $$Astro$1 = createAstro();
const $$ExecCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ExecCard;
  const { name, role, linkedin, github, portfolio, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="group flex flex-col items-center text-center"> <!-- Photo with hover effect --> <div class="relative"> <!-- Glow effect on hover --> <div class="from-brand-500 to-accent-500 absolute -inset-2 rounded-full bg-gradient-to-r opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50"></div> <div class="relative"> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": `${name} headshot`, "width": 512, "height": 512, "quality": 99, "format": "webp", "class": "group-hover:ring-brand-400/60 group-hover:shadow-brand-500/20 h-32 w-32 rounded-full object-cover shadow-xl ring-2 ring-white/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl md:h-36 md:w-36", "loading": "lazy" })}  <div class="from-brand-500 to-brand-700 absolute -right-2 -bottom-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br opacity-0 ring-2 ring-black/50 transition-opacity duration-300 group-hover:opacity-100"> <a${addAttribute(linkedin, "href")} target="_blank" rel="noreferrer noopener" class="flex h-full w-full items-center justify-center"${addAttribute(`LinkedIn profile for ${name}`, "aria-label")} title="LinkedIn"> ${renderComponent($$result, "LinkedInIcon", $$LinkedInIcon, {})} </a> </div>  ${github && renderTemplate`<div class="absolute -bottom-2 -left-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-gray-900 opacity-0 ring-2 ring-black/50 transition-opacity duration-300 group-hover:opacity-100"> <a${addAttribute(github, "href")} target="_blank" rel="noreferrer noopener" class="flex h-full w-full items-center justify-center"${addAttribute(`GitHub profile for ${name}`, "aria-label")} title="GitHub"> ${renderComponent($$result, "GitHubIcon", $$GitHubIcon, {})} </a> </div>`}  ${portfolio && renderTemplate`<div class="from-accent-500 to-accent-700 absolute -top-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br opacity-0 ring-2 ring-black/50 transition-opacity duration-300 group-hover:opacity-100"> <a${addAttribute(portfolio, "href")} target="_blank" rel="noreferrer noopener" class="flex h-full w-full items-center justify-center"${addAttribute(`Portfolio website for ${name}`, "aria-label")} title="Portfolio"> ${renderComponent($$result, "PortfolioIcon", $$PortfolioIcon, { "variant": name === "Chloe Cheng" ? "robot" : "default" })} </a> </div>`} </div> </div> <!-- Name / Role --> <div class="mt-5"> <div class="group-hover:text-brand-400 text-lg font-extrabold tracking-wide transition-colors duration-300 md:text-xl"> ${name} </div> <div class="mt-1 text-sm font-medium text-gray-300 md:text-base">${role}</div> </div> </div>`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/team/ExecCard.astro", void 0);

const $$Astro = createAstro();
const $$ExecGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ExecGrid;
  const { execs } = Astro2.props;
  const presidentIndex = execs.findIndex((e) => e.role === "President");
  const president = presidentIndex >= 0 ? execs[presidentIndex] : null;
  const rest = execs.filter((_, i) => i !== presidentIndex);
  return renderTemplate`${maybeRenderHead()}<section class="container-page my-16 md:my-20"> <!-- Section Header --> <div class="mx-auto mb-12 max-w-3xl text-center"> <div class="bg-brand-500/20 border-brand-500/30 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"> <span class="text-brand-400 text-sm font-semibold">Meet The Team</span> </div> <h2 class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent md:text-5xl">
Our Executive Team
</h2> <p class="mt-4 text-lg leading-relaxed text-gray-50/80">
Meet the folks who keep UBC Game Dev running—events, workshops, and community!
</p> </div> <!-- President row with special styling --> ${president && renderTemplate`<div class="mt-12 flex justify-center"> <div class="group relative">  <div class="from-brand-500 to-accent-500 absolute -inset-4 rounded-full bg-gradient-to-r opacity-20 blur-2xl transition-opacity group-hover:opacity-30"></div> <div class="relative w-[200px] md:w-[220px]"> ${renderComponent($$result, "ExecCard", $$ExecCard, { ...president })} </div> </div> </div>`} <!-- Rest of execs in a modern grid --> <div class="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-3 md:gap-10 lg:grid-cols-4"> ${rest.map((e) => renderTemplate`<div class="flex justify-center"> <div class="w-full max-w-[180px] md:max-w-[200px]"> ${renderComponent($$result, "ExecCard", $$ExecCard, { ...e })} </div> </div>`)} </div> </section>`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/team/ExecGrid.astro", void 0);

const $$Team = createComponent(($$result, $$props, $$slots) => {
  const execs = ExecService.getAll();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "ExecGrid", $$ExecGrid, { "execs": execs })} </main> ` })}`;
}, "/home/vvict/projects/ubc_game/club_site/src/pages/team.astro", void 0);

const $$file = "/home/vvict/projects/ubc_game/club_site/src/pages/team.astro";
const $$url = "/team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Team,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
