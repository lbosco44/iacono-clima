import Lenis from "lenis";
import { ScrollTrigger } from "./gsap";

let lenisInstance: Lenis | null = null;

export function initLenis(): Lenis | null {
  if (typeof window === "undefined") return null;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return null;

  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    lerp: 0.08,
    duration: 1.1,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.4,
  });

  lenisInstance.on("scroll", ScrollTrigger.update);

  function raf(time: number) {
    lenisInstance?.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return lenisInstance;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function scrollTo(target: string | HTMLElement, offset = -80) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset });
    return;
  }
  const el =
    typeof target === "string" ? document.querySelector(target) : target;
  if (!el) return;
  const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: "smooth" });
}
