import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_C2S9dwlY.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DQCb_wdK.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/vvict/projects/ubc_game/club_site/","cacheDir":"file:///home/vvict/projects/ubc_game/club_site/node_modules/.astro/","outDir":"file:///home/vvict/projects/ubc_game/club_site/dist/","srcDir":"file:///home/vvict/projects/ubc_game/club_site/src/","publicDir":"file:///home/vvict/projects/ubc_game/club_site/public/","buildClientDir":"file:///home/vvict/projects/ubc_game/club_site/dist/client/","buildServerDir":"file:///home/vvict/projects/ubc_game/club_site/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.UUDVRSpa.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.UUDVRSpa.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.UUDVRSpa.css"}],"routeData":{"route":"/events","isIndex":false,"type":"page","pattern":"^\\/events\\/?$","segments":[[{"content":"events","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/events.astro","pathname":"/events","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.UUDVRSpa.css"},{"type":"inline","content":".game-title-link[data-astro-cid-nx4g2om7]{cursor:pointer;transform-origin:left center}.game-title-link[data-astro-cid-nx4g2om7]:active{animation:titleClick .3s ease}@keyframes titleClick{0%{transform:scale(1)}50%{transform:scale(.97)}to{transform:scale(1)}}.game-title-link[data-astro-cid-nx4g2om7]:hover h3[data-astro-cid-nx4g2om7]{filter:drop-shadow(0 0 8px rgba(157,124,255,.4))}.slide[data-astro-cid-ja5cylif]{animation:fadeIn .5s ease-in-out}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.dot[data-astro-cid-ja5cylif]{cursor:pointer}.dot[data-astro-cid-ja5cylif]:hover{transform:scale(1.2)}.game-card-wrapper[data-astro-cid-gismuqk3]{opacity:1;transform:translateY(0)}.game-card-wrapper[data-astro-cid-gismuqk3].game-card-hidden{opacity:0;height:0;margin:0!important;overflow:hidden;pointer-events:none;transition:opacity .3s ease,height .3s ease,margin .3s ease}.game-card-wrapper[data-astro-cid-gismuqk3].game-card-visible{animation:slideUpFadeIn .6s ease forwards;animation-delay:var(--stagger-delay, 0s)}@keyframes slideUpFadeIn{0%{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}\n"}],"routeData":{"route":"/games","isIndex":false,"type":"page","pattern":"^\\/games\\/?$","segments":[[{"content":"games","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/games.astro","pathname":"/games","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.UUDVRSpa.css"},{"type":"inline","content":".logo-slider[data-astro-cid-5s3uj23b]{--surface: var(--surface, rgba(0,0,0,0));position:relative;padding-block:18px;background:transparent}.slider-outer[data-astro-cid-5s3uj23b]{position:relative;overflow:hidden;height:calc(var(--h) + 6px);mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent);-webkit-mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent)}.slider-track[data-astro-cid-5s3uj23b]{display:flex;align-items:center;gap:var(--gap);width:max-content;animation:scroll var(--dur) linear infinite}.slider-outer[data-astro-cid-5s3uj23b]:hover .slider-track[data-astro-cid-5s3uj23b]{animation-play-state:paused}.logo[data-astro-cid-5s3uj23b]{flex:0 0 auto;display:grid;place-items:center;height:var(--h);max-width:var(--w);width:var(--w)}.logo[data-astro-cid-5s3uj23b] img[data-astro-cid-5s3uj23b]{max-height:100%;max-width:100%;width:auto;height:auto;object-fit:contain;transition:transform .2s ease,opacity .2s ease;opacity:.95}.logo[data-astro-cid-5s3uj23b]:hover img[data-astro-cid-5s3uj23b]{transform:translateY(-2px);opacity:1}.fade[data-astro-cid-5s3uj23b]{pointer-events:none;position:absolute;inset-block:0;width:8%}.fade[data-astro-cid-5s3uj23b].left{left:0;background:linear-gradient(to right,var(--surface),transparent)}.fade[data-astro-cid-5s3uj23b].right{right:0;background:linear-gradient(to left,var(--surface),transparent)}@keyframes scroll{0%{transform:translate(0)}to{transform:translate(-50%)}}@media (max-width: 480px){.logo-slider[data-astro-cid-5s3uj23b]{padding-block:12px}.slider-track[data-astro-cid-5s3uj23b]{gap:40px}}\n"}],"routeData":{"route":"/partners","isIndex":false,"type":"page","pattern":"^\\/partners\\/?$","segments":[[{"content":"partners","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/partners.astro","pathname":"/partners","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.UUDVRSpa.css"}],"routeData":{"route":"/team","isIndex":false,"type":"page","pattern":"^\\/team\\/?$","segments":[[{"content":"team","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/team.astro","pathname":"/team","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.UUDVRSpa.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/vvict/projects/ubc_game/club_site/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/vvict/projects/ubc_game/club_site/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/home/vvict/projects/ubc_game/club_site/src/pages/events.astro",{"propagation":"none","containsHead":true}],["/home/vvict/projects/ubc_game/club_site/src/pages/games.astro",{"propagation":"none","containsHead":true}],["/home/vvict/projects/ubc_game/club_site/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/vvict/projects/ubc_game/club_site/src/pages/partners.astro",{"propagation":"none","containsHead":true}],["/home/vvict/projects/ubc_game/club_site/src/pages/team.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/events@_@astro":"pages/events.astro.mjs","\u0000@astro-page:src/pages/games@_@astro":"pages/games.astro.mjs","\u0000@astro-page:src/pages/partners@_@astro":"pages/partners.astro.mjs","\u0000@astro-page:src/pages/team@_@astro":"pages/team.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DSVC6Nm8.mjs","/home/vvict/projects/ubc_game/club_site/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BpqqCYey.mjs","/home/vvict/projects/ubc_game/club_site/src/components/games/GameGrid":"_astro/GameGrid.B-imjPo8.js","/home/vvict/projects/ubc_game/club_site/src/components/games/Timeline/Timeline":"_astro/Timeline.5G-KgAov.js","/home/vvict/projects/ubc_game/club_site/src/components/events/EventTimeline":"_astro/EventTimeline.DN-JE8c4.js","/home/vvict/projects/ubc_game/club_site/src/components/layout/NavbarReact":"_astro/NavbarReact.OjoNng9Z.js","@astrojs/react/client.js":"_astro/client.BfPWZUkF.js","/home/vvict/projects/ubc_game/club_site/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.BQOd7C5v.js","/home/vvict/projects/ubc_game/club_site/src/components/games/GameMedia/ImageSlideshow.astro?astro&type=script&index=0&lang.ts":"_astro/ImageSlideshow.astro_astro_type_script_index_0_lang.CJT-WMvw.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/vvict/projects/ubc_game/club_site/src/components/games/GameMedia/ImageSlideshow.astro?astro&type=script&index=0&lang.ts","function c(){document.querySelectorAll(\".slideshow-container\").forEach(a=>{const t=a.querySelectorAll(\".slide\"),o=document.querySelectorAll(`[data-slideshow=\"${a.id}\"]`);let e=0,s=null;function i(l){t.forEach(d=>d.style.display=\"none\"),o.forEach(d=>d.classList.remove(\"!bg-white\")),l>=t.length&&(e=0),l<0&&(e=t.length-1);const n=t[e];n&&(n.style.display=\"block\");const u=o[e];u&&u.classList.add(\"!bg-white\")}i(e),o.forEach((l,n)=>{l.addEventListener(\"click\",()=>{e=n,i(e),s!==null&&(clearInterval(s),r())})});function r(){t.length>1&&(s=window.setInterval(()=>{e++,i(e)},5e3))}r()})}document.readyState===\"loading\"?document.addEventListener(\"DOMContentLoaded\",c):c();document.addEventListener(\"astro:page-load\",c);"]],"assets":["/_astro/hero-graphics-1.DXZ7MFmt.png","/_astro/hero-graphics-0.Xjq1XnsJ.png","/_astro/events.BOE0chnX.jpg","/_astro/info.C1wOzTeo.jpg","/_astro/ourGames.DhmexW4b.jpg","/_astro/logo.D2yr04wa.png","/_astro/archiact.DuvcYNSF.webp","/_astro/blackbird_interactive.8cPNxsiq.webp","/_astro/homekey.DZCSBqP9.webp","/_astro/skybox_labs.N0VQ67d8.webp","/_astro/telus.DZdesWQC.webp","/_astro/tgs.BfdsE4Vc.webp","/_astro/xavier.B6IFOBzX.webp","/_astro/brittany.BA_QVYgy.webp","/_astro/kyle.C5Oh737E.webp","/_astro/lucas.EVpqinIx.webp","/_astro/bethany.CJqyRpnF.webp","/_astro/mathew.DcBHy9UV.webp","/_astro/noah.C6nLw6No.webp","/_astro/vanshika.Hohvih2n.webp","/_astro/unity.C54181Zm.png","/_astro/victor.DmzlmP4y.webp","/_astro/chloe.DXh5LN6r.webp","/_astro/justin.BQyGOihK.webp","/_astro/sarah.CFUcyVnF.webp","/_astro/antidote-30xx.Dhef0HJA.png","/_astro/varans-seals.C7qWpamv.png","/_astro/umbra.Dh70N4mc.png","/_astro/sleepy-chef.CuPlaRIQ.png","/_astro/shadow-of-space.DA5ajGCZ.png","/_astro/apoc-101.BTVCPT7C.png","/_astro/bouncy-guy.dgzgJ5Ke.png","/_astro/sidetracked.CrI9KAxf.png","/_astro/dathora.BdmplG4b.png","/_astro/mythos.CZv6lV9E.png","/_astro/mediquest.CZSEmm8J.png","/_astro/constellation-tango.CynuFsJh.png","/_astro/slimy-sewers.h9jOStak.jpg","/_astro/spellrise.DElWb7UL.png","/_astro/innoculated.CvYE-Ms_.png","/_astro/transduction.nj5HHo0P.png","/_astro/forgotten-yellow.BMI8Q72H.png","/_astro/star-farm.KcA9sTX4.png","/_astro/ninjastack.BHjBfF7Y.png","/_astro/michelin-run.Bx1RRERD.png","/_astro/klaymation.DLVvUIK8.png","/_astro/night-parade.CzKMdcYZ.png","/_astro/electric-crescendo.D_Vx34F8.png","/_astro/swordship.CNJfgdza.webp","/_astro/trader-smith.L6Mq2O31.webp","/_astro/joes-little-helpers.CaXXt9K7.png","/_astro/edens-garden.Ck3O-5rz.png","/_astro/panic-titanic.e5ICvj70.png","/_astro/sunshine-shores.DNJyPoZx.png","/_astro/cyberscision.BtbIr0ma.png","/_astro/contaminated.By33Eum8.png","/_astro/rooutes.BsVbgk8G.png","/_astro/launch_party.CeAot9XN.jpg","/_astro/about.UUDVRSpa.css","/favicon.png","/_astro/EventTimeline.DN-JE8c4.js","/_astro/GameGrid.B-imjPo8.js","/_astro/Layout.astro_astro_type_script_index_0_lang.BQOd7C5v.js","/_astro/NavbarReact.OjoNng9Z.js","/_astro/Timeline.5G-KgAov.js","/_astro/client.BfPWZUkF.js","/_astro/index.Cd_vQiNd.js","/_astro/jsx-runtime.D_zvdyIk.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"wHd6pM/ulCS6TruiNPSswy8e07hY6/a2GdqiEChRcgs="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
