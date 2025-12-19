// Premium smooth scrolling with Lenis
import Lenis from "lenis";

// Scroll duration in seconds - adjust for slower/faster scrolling
const SCROLL_DURATION = 1.2;

// Initialize Lenis smooth scroll
const lenis = new Lenis({
  duration: SCROLL_DURATION,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical",
  gestureOrientation: "vertical",
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  infinite: false,
  // Enable smooth scrolling on touch devices
  syncTouch: true,
});

// Animation frame loop
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Handle anchor link clicks
document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  const anchor = target.closest('a[href^="#"]');

  if (!anchor) return;

  const href = anchor.getAttribute("href");
  if (!href || href === "#") return;

  const element = document.querySelector(href) as HTMLElement;
  if (!element) return;

  e.preventDefault();
  lenis.scrollTo(element, {
    offset: 0,
    duration: SCROLL_DURATION,
  });
});

// Listen for mobile menu state changes
// Stop Lenis when menu is open to prevent scroll conflicts
const observer = new MutationObserver(() => {
  const html = document.documentElement;
  const isMenuOpen = html.style.overflow === "hidden";

  if (isMenuOpen) {
    lenis.stop();
  } else {
    lenis.start();
  }
});

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["style"],
});

// Also check on page load
if (document.documentElement.style.overflow === "hidden") {
  lenis.stop();
}
