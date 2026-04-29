import Lenis from "lenis";

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

  // Notifica ScrollTrigger (GSAP) se è caricato nel bundle — import dinamico
  // per evitare che GSAP finisca nel bundle main anche quando non usato
  lenisInstance.on("scroll", () => {
    // ScrollTrigger può essere iniettato da sezioni che lo usano
    // tramite window.__lenis_scrolltrigger_update se presente
    const fn = (window as unknown as Record<string, unknown>).__lenis_st_update;
    if (typeof fn === "function") fn();
  });

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
