import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { services } from "../data/services";
import { Reveal } from "./ui/Reveal";
import { Icon } from "./ui/Icon";

const IMAGE_MAP = {
  residenziale: { src: "/images/comfort-casa.png", alt: "Installazione climatizzatore residenziale" },
  commerciale: { src: "/images/installazione-02.png", alt: "Installazione climatizzatore commerciale" },
  manutenzione: { src: "/images/unita-esterna.png", alt: "Manutenzione unità esterna climatizzatore" },
};

export function Services() {
  const trackRef = useRef(null);
  const reduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      services.length - 1,
      Math.floor(v * services.length)
    );
    setActiveIndex(idx);
  });

  const active = services[activeIndex];
  const img = IMAGE_MAP[active.id];

  if (reduced) return <FallbackStatic />;

  return (
    <section id="servizi" className="bg-[var(--color-bg-light)] relative">
      <div ref={trackRef} style={{ height: `${services.length * 150}vh` }}>
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <div className="container-narrow w-full py-8 md:py-12">
            <SectionHeader />

            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 md:gap-14 items-center mt-8 md:mt-10">
              {/* LEFT — text, switches instantly */}
              <div className="relative min-h-[34vh] md:min-h-[40vh]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col justify-center"
                  >
                    <h3
                      className="font-extrabold text-[var(--color-dark)] leading-[1.02] tracking-tight"
                      style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
                    >
                      {active.title}
                    </h3>
                    <p className="mt-3 md:mt-4 max-w-md text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed">
                      {active.description}
                    </p>
                    <ul className="mt-4 md:mt-5 grid grid-cols-2 gap-x-4 gap-y-2 max-w-md">
                      {active.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs md:text-sm text-[var(--color-dark)]/85">
                          <Icon name="check" size={14} stroke={2.6} className="mt-0.5 shrink-0 text-[var(--color-primary)]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 md:mt-10">
                      <div
                        className="font-extrabold text-[var(--color-dark)] leading-none tracking-tight"
                        style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)", fontVariantNumeric: "tabular-nums" }}
                      >
                        {active.stat.value}
                      </div>
                      <div className="text-[var(--color-text-muted)] text-sm md:text-base font-semibold mt-1">
                        {active.stat.label}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* RIGHT — single image, switches instantly */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white" style={{ aspectRatio: "4/3" }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={img.src}
                    alt={img.alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Progress dots */}
            <div className="mt-8 md:mt-10">
              <ProgressDots count={services.length} active={activeIndex} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <Reveal className="grid md:grid-cols-[1fr_auto] md:items-end gap-4 md:gap-12">
      <div>
        <span className="eyebrow">I nostri servizi</span>
        <h2 className="h-display max-w-3xl" style={{ fontSize: "clamp(2rem, 4.8vw, 4rem)" }}>
          Tutto quello che<br />serve al tuo clima.
        </h2>
      </div>
      <p className="text-[var(--color-text-muted)] max-w-sm text-sm md:text-base leading-relaxed">
        Scorri per scoprire cosa facciamo. Dal residenziale al commerciale, fino alla manutenzione multimarca.
      </p>
    </Reveal>
  );
}

function ProgressDots({ count, active }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            width: active === i ? 36 : 12,
            opacity: active === i ? 1 : 0.25,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="h-2 rounded-full bg-[var(--color-dark)]"
        />
      ))}
    </div>
  );
}

function FallbackStatic() {
  return (
    <section id="servizi" className="bg-[var(--color-bg-light)] section-cinematic">
      <div className="container-narrow">
        <SectionHeader />
        <div className="space-y-16 mt-10">
          {services.map((s) => {
            const img = IMAGE_MAP[s.id];
            return (
              <div key={s.id} className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-extrabold text-[var(--color-dark)] text-3xl">{s.title}</h3>
                  <p className="mt-3 text-[var(--color-text-muted)] text-sm">{s.description}</p>
                  <ul className="mt-4 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-[var(--color-dark)]/85">
                        <Icon name="check" size={14} stroke={2.6} className="mt-0.5 shrink-0 text-[var(--color-primary)]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
