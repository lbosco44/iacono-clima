import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
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
    if (v < 0.38) setActiveIndex(0);
    else if (v < 0.7) setActiveIndex(1);
    else setActiveIndex(2);
  });

  const opacity0 = useTransform(scrollYProgress, [0, 0.3, 0.42], [1, 1, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.3, 0.42, 0.62, 0.74], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.62, 0.74, 1], [0, 1, 1]);
  const opacities = [opacity0, opacity1, opacity2];

  if (reduced) {
    return (
      <section id="servizi" className="bg-[var(--color-bg-light)] section-cinematic">
        <div className="container-narrow">
          <SectionHeader />
          <div className="space-y-16 mt-10">
            {services.map((s, i) => {
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

  return (
    <section id="servizi" className="bg-[var(--color-bg-light)] relative">
      <div ref={trackRef} style={{ height: "300vh" }}>
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <div className="container-narrow w-full py-10 md:py-16">
            <SectionHeader />

            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 md:gap-14 items-center mt-8 md:mt-12">
              {/* LEFT — text + stat */}
              <div className="relative min-h-[32vh] md:min-h-[38vh]">
                {services.map((s, i) => (
                  <motion.div
                    key={s.id}
                    style={{ opacity: opacities[i] }}
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    <h3
                      className="font-extrabold text-[var(--color-dark)] leading-[1.02] tracking-tight"
                      style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
                    >
                      {s.title}
                    </h3>
                    <p className="mt-3 md:mt-4 max-w-md text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed">
                      {s.description}
                    </p>
                    <ul className="mt-4 md:mt-5 grid grid-cols-2 gap-x-4 gap-y-2 max-w-md">
                      {s.bullets.map((b) => (
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
                        {s.stat.value}
                      </div>
                      <div className="text-[var(--color-text-muted)] text-sm md:text-base font-semibold mt-1">
                        {s.stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* RIGHT — single image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white" style={{ aspectRatio: "4/3" }}>
                {services.map((s, i) => {
                  const img = IMAGE_MAP[s.id];
                  return (
                    <motion.img
                      key={s.id}
                      src={img.src}
                      alt={img.alt}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      style={{ opacity: opacities[i] }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  );
                })}
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
