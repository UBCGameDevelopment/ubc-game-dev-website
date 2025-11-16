import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, f as renderSlot, r as renderTemplate } from './astro/server_BuADJsLa.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$InfoBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InfoBlock;
  const { title, imageSrc, imageAlt = "", ctaHref, ctaLabel, reverse = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto my-10 max-w-5xl px-4 sm:px-6 md:my-14 lg:px-8"> <div class="overflow-hidden rounded-3xl border border-white/20 bg-white/5 p-4 shadow-2xl ring-1 shadow-black/40 ring-white/10 backdrop-blur-2xl"> <div${addAttribute(`grid md:grid-cols-2 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`, "class")}> <!-- Image --> <div class="p-5 md:p-7"> <img${addAttribute(imageSrc, "src")}${addAttribute(imageAlt, "alt")} loading="lazy" class="h-full max-h-[420px] w-full rounded-2xl object-cover shadow-lg"> </div> <!-- Copy --> <div class="p-6 md:p-10"> <h2 class="mb-4 text-3xl font-extrabold tracking-wide md:text-4xl"> ${title} </h2> <div class="space-y-4 text-[0.98rem] leading-relaxed text-gray-50/90"> ${renderSlot($$result, $$slots["default"])} </div> ${ctaHref && ctaLabel && renderTemplate`<div class="mt-6"> <a${addAttribute(ctaHref, "href")} class="btn-outline btn rounded-full px-5 py-2"> ${ctaLabel} </a> </div>`} </div> </div> </div> </section>`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/home/InfoBlock.astro", void 0);

export { $$InfoBlock as $ };
