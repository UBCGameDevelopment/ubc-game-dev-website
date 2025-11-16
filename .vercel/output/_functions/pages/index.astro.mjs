import { c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderTemplate, b as createAstro, f as renderSlot, a as renderComponent } from '../chunks/astro/server_BuADJsLa.mjs';
import { $ as $$Layout } from '../chunks/Layout_CW5VetiR.mjs';
import 'clsx';
import { h as heroGraphic_1 } from '../chunks/hero-graphics-1_C_QibVuj.mjs';
import { $ as $$InfoBlock } from '../chunks/InfoBlock_C9Xx2797.mjs';
import { $ as $$SubscribeSection } from '../chunks/SubscribeSection_DnQzJVMl.mjs';
export { renderers } from '../renderers.mjs';

const heroGraphic_0 = new Proxy({"src":"/_astro/hero-graphics-0.Xjq1XnsJ.png","width":1682,"height":946,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/hero/hero-graphics-0.png";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- NOTE: The number indicates the Z-index -->${maybeRenderHead()}<div class="relative mx-auto mt-2 mb-4 h-[280px] w-full max-w-[1250px] px-4 md:mt-8 md:mb-16 md:h-[450px] lg:mt-12 lg:mb-24 lg:h-[650px]"> <img${addAttribute(heroGraphic_0.src, "src")} alt="Hero Graphic 0" class="absolute inset-0 z-0 h-full w-full object-contain"> <img${addAttribute(heroGraphic_1.src, "src")} alt="Hero Graphic 1" class="absolute inset-0 z-10 m-auto h-auto w-[90%] md:w-[75%] lg:w-auto"> </div>`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/home/Hero.astro", void 0);

const $$Astro$2 = createAstro();
const $$StatsCircles = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$StatsCircles;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="container-page py-12 md:py-16"> <div class="grid grid-cols-1 gap-6 sm:grid-cols-3"> ${items.map((s) => renderTemplate`<div class="relative mx-auto flex aspect-square w-65 items-center justify-center rounded-full border border-white/30 bg-white/5 text-center ring-1 ring-white/10 backdrop-blur-3xl sm:w-52 md:w-60"> <div class="space-y-4"> <div class="text-6xl font-bold tracking-tight">${s.value}</div> <div class="text-2xl tracking-widest uppercase opacity-90">${s.labelTop}</div> <div class="text-2xl tracking-widest uppercase opacity-90">${s.labelBottom}</div> </div> <span class="pointer-events-none absolute -top-1 -left-1 h-20 w-20 rounded-full bg-white/10 blur-2xl"></span> </div>`)} </div> </section>`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/home/StatsCircles.astro", void 0);

const $$Astro$1 = createAstro();
const $$FeaturesCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeaturesCard;
  const { title, imageSrc, imageAlt = "", href, cta = "Learn More" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="flex h-full flex-col gap-5 rounded-3xl border border-white/30 bg-white/5 p-6 shadow-2xl shadow-black/50 backdrop-blur-3xl md:min-h-96 md:p-8"> <!-- Title --> <h5 class="my-4 text-5xl font-extrabold tracking-wide">${title}</h5> <div class="text-lg leading-relaxed text-gray-50/85"> ${renderSlot($$result, $$slots["default"])} </div> ${imageSrc && renderTemplate`<img${addAttribute(imageSrc, "src")}${addAttribute(imageAlt, "alt")} loading="lazy" class="max-h-60 rounded-xl border border-white/10 object-cover">`} ${href && renderTemplate`<div class="mt-2"> <a${addAttribute(href, "href")} class="btn-outline btn rounded-full px-5 py-2"> ${cta} </a> </div>`} </article>`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/common/FeaturesCard.astro", void 0);

const $$Astro = createAstro();
const $$FeaturesRow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeaturesRow;
  const { cards } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto my-12 max-w-4xl px-4 sm:px-6 md:my-16 lg:px-8"> <div class="grid gap-20 md:grid-cols-2"> ${cards.map((c) => renderTemplate`${renderComponent($$result, "FeatureCard", $$FeaturesCard, { "title": c.title, "imageSrc": c.imageSrc, "imageAlt": c.imageAlt, "href": c.href, "cta": c.cta }, { "default": ($$result2) => renderTemplate`${c.desc.map((p) => renderTemplate`<p>${p}</p>`)}` })}`)} </div> </section>`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/common/FeaturesRow.astro", void 0);

const infoImage = new Proxy({"src":"/_astro/info.C1wOzTeo.jpg","width":7344,"height":4896,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/info.jpg";
							}
							
							return target[name];
						}
					});

const eventImg = new Proxy({"src":"/_astro/events.BOE0chnX.jpg","width":7728,"height":5152,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/events.jpg";
							}
							
							return target[name];
						}
					});

const ourGamesImg = new Proxy({"src":"/_astro/ourGames.DhmexW4b.jpg","width":7584,"height":5056,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/ourGames.jpg";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!-- Hero Section --> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "InfoBlock", $$InfoBlock, { "title": "WE CREATE GAMES", "imageSrc": infoImage.src, "imageAlt": "Stylized neon sci-fi landscape", "ctaHref": "https://discord.gg/RXMxvEcj7B", "ctaLabel": "Join our Discord" }, { "default": ($$result3) => renderTemplate` <p>
We bring together artists, programmers, writers and musicians to make games! No previous experience required —
        join a team and start building alongside other budding developers.
</p> <p>We also host a Year End Showcase where industry judges check out the games and hand out awards.</p> <p>Want to join? Keep an eye on our Discord for signup forms after our Launch Party.</p> ` })} <!-- StatCircles --> ${renderComponent($$result2, "StatsCircles", $$StatsCircles, { "items": [
    { value: "200+", labelTop: "Members" },
    { value: "5+", labelTop: "Events", labelBottom: "Per Year" },
    { value: "10+", labelTop: "Sponsors" }
  ] })} <!-- Events + Our Games cards --> ${renderComponent($$result2, "FeaturesRow", $$FeaturesRow, { "cards": [
    {
      title: "Events",
      desc: ["Want to get involved?", "Come join us at the club events we'll be hosting this year."],
      imageSrc: eventImg.src,
      imageAlt: "Club event photo",
      href: "/events",
      cta: "Learn More"
    },
    {
      title: "Our Games",
      desc: ["Here's a collection of the games created by our members over the years."],
      imageSrc: ourGamesImg.src,
      imageAlt: "Game showcase banner",
      href: "/games",
      cta: "Learn More"
    }
  ] })} <!-- Subscribe CTA / Form --> ${renderComponent($$result2, "SubscribeSection", $$SubscribeSection, { "action": "#", "method": "POST", "title": "SUBSCRIBE", "subtitle": "Sign up for our newsletter to receive info about meetings, workshops, events and more!" })} </main> ` })}`;
}, "/home/vvict/projects/ubc_game/club_site/src/pages/index.astro", void 0);

const $$file = "/home/vvict/projects/ubc_game/club_site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
