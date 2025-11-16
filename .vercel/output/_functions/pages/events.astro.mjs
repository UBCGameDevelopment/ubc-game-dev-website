import { c as createComponent, b as createAstro, a as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BuADJsLa.mjs';
import { $ as $$Layout } from '../chunks/Layout_CW5VetiR.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BRhqTzeE.mjs';
import { $ as $$BaseCard, a as $$Badge } from '../chunks/Badge_BDYkpLTX.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { h as heroGraphic_1 } from '../chunks/hero-graphics-1_C_QibVuj.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$EventCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EventCard;
  const { title, date, description, location, mapLink, image } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseCard", $$BaseCard, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-4 md:p-6"> <!-- Grid Layout: Image Left, Content Right --> <div class="grid gap-4 md:grid-cols-2 md:gap-6"> <!-- Left Section: Event Image --> <div class="flex flex-col justify-center"> <div class="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] ring-1 ring-white/10"> ${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": title, "class": "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105", "loading": "lazy" })} </div> </div> <!-- Right Section: Event Info --> <div class="flex flex-col"> <!-- Event Badge --> ${renderComponent($$result2, "Badge", $$Badge, { "label": "Event", "variant": "event", "class": "mb-2" })} <!-- Event Title --> <h3 class="mb-2 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-xl font-extrabold tracking-tight text-transparent md:text-2xl"> ${title} </h3> <!-- Event Date --> <div class="mb-2 flex items-center gap-2 text-sm"> <svg class="text-accent-400 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> <span class="font-semibold text-gray-200">${date}</span> </div> <!-- Event Description --> <p class="mb-3 text-sm leading-relaxed text-gray-50/80"> ${description} </p> <!-- Event Location --> <div class="mt-auto flex items-center gap-2 text-sm"> <svg class="text-accent-400 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path> </svg> ${mapLink ? renderTemplate`<a class="font-medium text-gray-200 hover:underline"${addAttribute(mapLink, "href")} target="_blank"> ${location} </a>` : renderTemplate`<span class="font-medium text-gray-200">${location}</span>`} </div> </div> </div> </div> ` })}`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/events/EventCard.astro", void 0);

const TIMELINE_GAP_TO_NEXT_CIRCLE = 200;
const CONTENT_LOAD_DELAY = 100;
function EventTimeline({ index, isLast }) {
  const circleRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);
  useEffect(() => {
    if (isLast || !circleRef.current) return;
    const updateLineHeight = () => {
      const circle = circleRef.current;
      if (!circle) return;
      const container = circle.closest(".timeline-container");
      if (!container) return;
      const containerHeight = container.clientHeight;
      const circleRect = circle.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const centerOffset = circleRect.top - containerRect.top + circleRect.height / 2;
      const heightToNextCard = containerHeight - centerOffset + TIMELINE_GAP_TO_NEXT_CIRCLE;
      setLineHeight(heightToNextCard);
    };
    updateLineHeight();
    window.addEventListener("resize", updateLineHeight);
    const timeout = setTimeout(updateLineHeight, CONTENT_LOAD_DELAY);
    return () => {
      window.removeEventListener("resize", updateLineHeight);
      clearTimeout(timeout);
    };
  }, [isLast]);
  return /* @__PURE__ */ jsxs("div", { className: "relative flex h-full min-h-full items-center justify-center", ref: circleRef, children: [
    !isLast && /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute left-1/2 top-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-500/50 to-accent-500/30",
        style: { height: `${lineHeight}px` }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 shadow-lg ring-4 ring-black/20", children: /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-white", children: index + 1 }) })
  ] });
}

const $$Astro = createAstro();
const $$EventTimeline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EventTimeline;
  const { index, isLast } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "EventTimelineReact", EventTimeline, { "index": index, "isLast": isLast, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/vvict/projects/ubc_game/club_site/src/components/events/EventTimeline", "client:component-export": "default" })}`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/events/EventTimeline.astro", void 0);

const launchPartyImage = new Proxy({"src":"/_astro/launch_party.CeAot9XN.jpg","width":7728,"height":5152,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/timeline/launch_party.jpg";
							}
							
							return target[name];
						}
					});

const unityImage = new Proxy({"src":"/_astro/unity.C54181Zm.png","width":600,"height":600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/timeline/unity.png";
							}
							
							return target[name];
						}
					});

const events = [
  {
    title: "Launch Party: Learn more About Us",
    date: "Friday, Sept. 26, 2025: 6-9pm",
    description: "Our launch party is the perfect chance to learn more about what exactly the club does. At our launch party, you will hear about how you can join a team, what our events look like and what ways the club can help support you! Its your chance to become a member.",
    location: "BUCH A104",
    mapLink: "https://maps.app.goo.gl/kXj9mxqmohCmDsbt7",
    image: launchPartyImage
  },
  {
    title: "Alan's Unity Workshop",
    date: "Wed., Nov. 19, 2025: 6:30-8pm",
    description: "Join us for an intensive game development workshop where you'll learn the basics of Unity. Get the required skills to create your own games with us!",
    location: "BUCH D222",
    mapLink: "https://maps.app.goo.gl/5s75UNe32sQprvFJA",
    image: unityImage
  },
  {
    title: "Battle of the Concepts",
    date: "Friday, Nov. 21, 2025: 6-8pm",
    description: "Step into the arena of creativity! Members pitch their boldest game ideas, showcase their vision, and compete for the club’s vote. The concept that wins the crowd could become our next big game project — who will rise as the ultimate creator?",
    location: "BUCH A104",
    mapLink: "https://maps.app.goo.gl/kXj9mxqmohCmDsbt7",
    image: heroGraphic_1
  }
];

const $$Events = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="mb-8 flex w-full justify-center px-4"> <div class="mt-20 mb-8 flex w-full max-w-6xl flex-row items-center justify-between md:my-16"> <p class="text-5xl font-extrabold">Upcoming Events (2025-2026)</p> <a href="https://discord.gg/RXMxvEcj7B" class="rounded-4xl border border-[#E4E4E4] px-4 py-2 whitespace-nowrap text-white transition-colors duration-1000 ease-in-out hover:border-[#BEA9FF] hover:bg-[#BEA9FF] hover:text-black">
Join our Discord
</a> </div> </div>  <div class="flex w-full justify-center px-4 pb-16"> <div class="w-full max-w-7xl"> ${events.map((event, index) => {
    const isEven = index % 2 === 0;
    return renderTemplate`<div class="relative mb-8 last:mb-0 md:mb-12">  <div class="hidden md:grid md:grid-cols-[1fr_80px_1fr] md:gap-8">  <div${addAttribute(`flex ${isEven ? "justify-end" : "justify-start"}`, "class")}> ${isEven && renderTemplate`${renderComponent($$result2, "EventCard", $$EventCard, { ...event })}`} </div>  <div class="timeline-container flex h-full justify-center"> ${renderComponent($$result2, "EventTimeline", $$EventTimeline, { "index": index, "isLast": index === events.length - 1 })} </div>  <div${addAttribute(`flex ${isEven ? "justify-start" : "justify-end"}`, "class")}> ${!isEven && renderTemplate`${renderComponent($$result2, "EventCard", $$EventCard, { ...event })}`} </div> </div>  <div class="md:hidden"> ${renderComponent($$result2, "EventCard", $$EventCard, { ...event })} </div> </div>`;
  })} </div> </div> ` })}`;
}, "/home/vvict/projects/ubc_game/club_site/src/pages/events.astro", void 0);

const $$file = "/home/vvict/projects/ubc_game/club_site/src/pages/events.astro";
const $$url = "/events";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Events,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
