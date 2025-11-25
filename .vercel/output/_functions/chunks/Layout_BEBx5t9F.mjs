import { c as createComponent, a as renderComponent, r as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute, e as renderScript, o as renderHead, f as renderSlot } from './astro/server_BuADJsLa.mjs';
/* empty css                         */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import 'clsx';

const logo = new Proxy({"src":"/_astro/logo.D2yr04wa.png","width":633,"height":709,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/vvict/projects/ubc_game/club_site/src/assets/logo.png";
							}
							
							return target[name];
						}
					});

function GlowEffect() {
  return /* @__PURE__ */ jsx("div", { className: "absolute -inset-[3px] rounded-3xl bg-gradient-to-r from-brand-700 via-brand-500 to-accent-500 opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-sm -z-10" });
}

function DecorativeOrbs() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" })
  ] });
}

function DesktopNav({ logo, links }) {
  const regularLinks = links.slice(0, -1);
  const contactLink = links[links.length - 1];
  return /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center justify-between px-6 py-3", children: [
    /* @__PURE__ */ jsx("a", { href: "/", className: "flex items-center", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "UBC Game Dev Logo", className: "h-10 w-10" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-8 font-semibold flex-1 justify-center", children: [
      regularLinks.map((link) => /* @__PURE__ */ jsx(
        "a",
        {
          href: link.href,
          className: "text-white hover:text-brand-400 transition-colors duration-300",
          children: link.label
        },
        link.href
      )),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: contactLink.href,
          className: "rounded-4xl border border-white/30 px-4 py-2 text-white hover:border-brand-500 hover:bg-brand-500 hover:text-black transition-all duration-300",
          children: contactLink.label
        }
      )
    ] })
  ] });
}

function MobileNavHeader({ logo, isOpen, onToggle }) {
  return /* @__PURE__ */ jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 py-3", children: [
    /* @__PURE__ */ jsx("a", { href: "/", className: "flex items-center", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "UBC Game Dev Logo", className: "h-10 w-10" }) }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: onToggle,
        className: "flex h-10 w-10 flex-col items-center justify-center gap-1.5",
        "aria-label": "Toggle menu",
        "aria-expanded": isOpen,
        children: [
          /* @__PURE__ */ jsx("span", { className: `h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}` }),
          /* @__PURE__ */ jsx("span", { className: `h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}` }),
          /* @__PURE__ */ jsx("span", { className: `h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}` })
        ]
      }
    )
  ] }) });
}

function MobileMenu({ links, isOpen, onClose }) {
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] lg:hidden",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "fixed left-4 right-4 top-32 z-[95] lg:hidden", children: /* @__PURE__ */ jsxs("div", { className: "group relative", children: [
      /* @__PURE__ */ jsx(GlowEffect, {}),
      /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl shadow-2xl shadow-black/40 ring-1 ring-white/10 overflow-hidden", children: [
        /* @__PURE__ */ jsx(DecorativeOrbs, {}),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 flex flex-col gap-2 p-6 font-semibold", children: links.map((link) => {
          const isContact = link.label === "Contact Us";
          return /* @__PURE__ */ jsx(
            "a",
            {
              href: link.href,
              onClick: onClose,
              className: `${isContact ? "mt-3 rounded-4xl border border-white/30 px-4 py-3 text-center text-white hover:border-brand-500 hover:bg-brand-500 hover:text-black transition-all duration-300" : "rounded-2xl px-4 py-3 text-white hover:bg-white/10 transition-colors duration-300"}`,
              children: link.label
            },
            link.href
          );
        }) })
      ] })
    ] }) })
  ] });
}

function Navbar({ logo, links }) {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mt-8 w-full max-w-6xl px-4 z-[100]", children: /* @__PURE__ */ jsxs("nav", { className: "group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl shadow-2xl shadow-black/40 ring-1 ring-white/10 overflow-visible", children: [
      /* @__PURE__ */ jsx(GlowEffect, {}),
      /* @__PURE__ */ jsx(DecorativeOrbs, {}),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsx(DesktopNav, { logo, links }),
        /* @__PURE__ */ jsx(
          MobileNavHeader,
          {
            logo,
            isOpen,
            onToggle: () => setIsOpen(!isOpen)
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      MobileMenu,
      {
        links,
        isOpen,
        onClose: () => setIsOpen(false)
      }
    )
  ] });
}

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/partners", label: "Partners" },
    { href: "/games", label: "Games Gallery" },
    { href: "/team", label: "Our Team" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact Us" }
  ];
  return renderTemplate`${renderComponent($$result, "NavbarReact", Navbar, { "client:load": true, "logo": logo.src, "links": navLinks, "client:component-hydration": "load", "client:component-path": "/home/vvict/projects/ubc_game/club_site/src/components/layout/NavbarReact", "client:component-export": "default" })}`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/layout/Navbar.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="py-14 text-2xl text-[var(--color-gray-200)]"> <div class="container-page"> <!-- Text --> <h3 class="mb-8 text-center text-base font-bold tracking-wide md:text-2xl">Follow Us on Social Media</h3> <!-- Social Media icons via SVG --> <ul class="mt-4 flex flex-wrap items-center justify-center gap-4 md:gap-6"> <!-- Discord --> <a href="https://discord.gg/RXMxvEcj7B" class="text-[#C3B9FF] hover:text-white"> <svg class="h-8 w-8" width="30" height="30" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 
            12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 
            0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 
            0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 
            1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 
            0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 
            .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 
            .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 
            0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 
            0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"></path> </svg> </a> <!-- Instagram --> <a href="https://www.instagram.com/ubcgamedev/" target="_blank" class="text-[#C3B9FF] hover:text-white"> <svg class="h-8 w-8" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M35 13H35.02M14 4H34C39.5228 4 44 8.47715 44 14V34C44 39.5228 39.5228 44 34 
                  44H14C8.47715 44 4 39.5228 4 34V14C4 8.47715 8.47715 4 14 4ZM32 22.74C32.2468 
                  24.4045 31.9625 26.1044 31.1875 27.598C30.4125 29.0916 29.1863 30.3028 27.6833 
                  31.0593C26.1802 31.8159 24.4769 32.0792 22.8156 31.8119C21.1543 31.5445 19.6195 
                  30.7602 18.4297 29.5703C17.2398 28.3805 16.4555 26.8457 16.1881 25.1844C15.9208
                  23.5231 16.1841 21.8198 16.9407 20.3167C17.6972 18.8137 18.9084 17.5875 20.402 
                  16.8125C21.8956 16.0375 23.5955 15.7532 25.26 16C26.9578 16.2518 28.5297 17.0429 
                  29.7434 18.2566C30.9571 19.4703 31.7482 21.0422 32 22.74Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a> <!-- Twitch --> <a href="https://www.twitch.tv/ubcgamedev" class="text-[#C3B9FF] hover:text-white"> <svg class="h-8 w-8" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M22 22V14M32 22V14M42 4H6V36H16V44L24 36H34L42 28V4Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a> <!-- Link Icon --> <a href="/" class="text-[#C3B9FF] hover:text-white"> <svg class="h-8 w-8" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M30 14H36C37.3132 14 38.6136 14.2587 39.8268 14.7612C41.0401 15.2638 42.1425 16.0003 
                    43.0711 16.9289C43.9997 17.8575 44.7362 18.9599 45.2388 20.1732C45.7413 21.3864 46 
                    22.6868 46 24C46 25.3132 45.7413 26.6136 45.2388 27.8268C44.7362 29.0401 43.9997 
                    30.1425 43.0711 31.0711C42.1425 31.9997 41.0401 32.7362 39.8268 33.2388C38.6136 
                    33.7413 37.3132 34 36 34H30M18 34H12C10.6868 34 9.38642 33.7413 8.17317 33.2388C6.95991 
                    32.7362 5.85752 31.9997 4.92893 31.0711C3.05357 29.1957 2 26.6522 2 24C2 21.3478 3.05357 
                    18.8043 4.92893 16.9289C6.8043 15.0536 9.34784 14 12 14H18M16 24H32" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a> </ul> <!-- Social Media Icons --> <!-- <ul class="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-4">
      {socials.map((s) => (
        <li>
          <a href={s.href}
             {...(s.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
             class="inline-flex justify-center items-center bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 rounded-full w-10 h-10 font-semibold text-sm transition"
             aria-label={s.label} title={s.label}>
            {s.label[0]}
          </a>
        </li>
      ))}
    </ul> --> <!-- <p class="mt-5 text-gray-400 text-xs text-center">
      © {new Date().getFullYear()} UBC Game Development. All rights reserved.
    </p> --> </div> </footer>`;
}, "/home/vvict/projects/ubc_game/club_site/src/components/layout/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>UBC Game Development</title>${renderScript($$result, "/home/vvict/projects/ubc_game/club_site/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body class="flex min-h-screen flex-col" data-astro-cid-sckkx6r4> <!-- Navbar --> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-sckkx6r4": true })} <!-- Body/main content --> ${renderSlot($$result, $$slots["default"])} <!-- Footer --> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "/home/vvict/projects/ubc_game/club_site/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
