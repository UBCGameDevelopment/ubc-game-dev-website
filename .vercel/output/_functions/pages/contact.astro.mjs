import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C2S9dwlY.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_-OEfOtAE.mjs';
import { $ as $$SubscribeSection } from '../chunks/SubscribeSection_BbuXR2Lr.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto mt-20 max-w-3xl text-center"> <div class="bg-brand-500/20 border-brand-500/30 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"> <span class="text-brand-400 text-sm font-semibold">Contact Us</span> </div> </div>  <div class=""> ${renderComponent($$result2, "SubscribeSection", $$SubscribeSection, { "action": "#", "method": "POST", "title": "SUBSCRIBE", "subtitle": "Sign up for our newsletter to receive info about meetings, workshops, events and more!" })} </div> ` })}`;
}, "/home/vvict/projects/ubc_game/club_site/src/pages/contact.astro", void 0);

const $$file = "/home/vvict/projects/ubc_game/club_site/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
