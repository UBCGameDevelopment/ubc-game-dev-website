import { c as createComponent, m as maybeRenderHead, r as renderTemplate, b as createAstro, d as addAttribute, f as renderSlot, a as renderComponent } from './astro/server_BuADJsLa.mjs';
import 'clsx';

const $$CardGlow = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Gradient glow effect for cards -->${maybeRenderHead()}<div class="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-brand-700 via-brand-500 to-accent-500 opacity-20 blur transition-opacity duration-500 group-hover:opacity-30"></div>`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/common/Card/CardGlow.astro", void 0);

const $$CardOrbs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Decorative background orbs -->${maybeRenderHead()}<div class="absolute top-0 right-0 h-64 w-64 bg-brand-500/5 rounded-full blur-3xl pointer-events-none"></div> <div class="absolute bottom-0 left-0 h-64 w-64 bg-accent-500/5 rounded-full blur-3xl pointer-events-none"></div>`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/common/Card/CardOrbs.astro", void 0);

const $$Astro$1 = createAstro();
const $$BaseCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseCard;
  const { class: className = "", hasGlow = true, hasOrbs = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`group relative ${className}`, "class")}> ${hasGlow && renderTemplate`${renderComponent($$result, "CardGlow", $$CardGlow, {})}`} <!-- Main card container --> <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-2xl ring-1 shadow-black/40 ring-white/10 backdrop-blur-xl"> ${hasOrbs && renderTemplate`${renderComponent($$result, "CardOrbs", $$CardOrbs, {})}`} <div class="relative z-10"> ${renderSlot($$result, $$slots["default"])} </div> </div> </article>`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/common/Card/BaseCard.astro", void 0);

const $$Astro = createAstro();
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Badge;
  const { label, variant = "default", class: className = "" } = Astro2.props;
  const variantClasses = {
    event: "border-brand-500/30 bg-brand-500/20",
    game: "border-brand-500/30 bg-brand-500/20",
    default: "border-white/30 bg-white/20"
  };
  const textColorClasses = {
    event: "text-brand-400",
    game: "text-brand-400",
    default: "text-white"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`inline-flex w-fit items-center gap-2 rounded-full border px-2.5 py-0.5 ${variantClasses[variant]} ${className}`, "class")}> <span${addAttribute(`text-xs font-semibold tracking-wide uppercase ${textColorClasses[variant]}`, "class")}> ${label} </span> </div>`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/common/Badge/Badge.astro", void 0);

export { $$BaseCard as $, $$Badge as a };
