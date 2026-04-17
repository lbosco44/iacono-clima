import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
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

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const opacity0 = useTransform(scrollYProgress, [0, 0.28, 0.4], [1, 1, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.28, 0.4, 0.6, 0.72], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.6, 0.72, 1], [0, 1, 1]);
  const opacities = [opacity0, opacity1, opacity2];

  // Progress dot active index
  const activeIdx = useTransform(scrollYProgress, [0, 0.4, 0.72, 1], [0, 0, 1, 2]);

  return (
    <section id="servizi" className="bg-[var(--color-bg-light)] relative">
      <div className="container-narrow pt-16 md:pt-24">
        <Reveal className="grid md:grid-cols-[1fr_auto] md:items-end gap-6 md:gap-12 mb-8 md:mb-10">
          <div>
            <span className="eyebrow">I nostri servizi</span>
            <h2
              className="h-display max-w-3xl"
              style={{ fontSize: "clamp(2rem, 4.8vw, 4rem)" }}
            >
              Tutto quello che<br />
              serve al tuo clima.
            </h2>
          </div>
          <p className="text-[var(--color-text-muted)] max-w-sm text-sm md:text-base leading-relaxed">
            Scorri per scoprire cosa facciamo. Dal residenziale al commerciale, fino alla manutenzione multimarca.
          </p>
        </Reveal>
      </div>

      {reduced ? (
        <ReducedMotionFallback />
      ) : (
        <div ref={trackRef} className="relative" style={{ height: "220vh" }}>
          <div className="sticky top-24 h-[calc(100vh-7rem)] flex items-center">
            <div className="container-narrow w-full">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 items-center">
                {/* LEFT — text + dots + stat */}
                <div className="relative min-h-[40vh] md:min-h-[46vh]">
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
                      <p className="mt-4 max-w-md text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed">
                        {s.description}
                      </p>

                      {/* Big stat */}
                      <div className="mt-10 md:mt-14">
                        <div
                          className="font-extrabold text-[var(--color-dark)] leading-none tracking-tight"
                          style={{
                            fontSize: "clamp(4rem, 8vw, 7rem)",
                            fontVariantNumeric: "tabular-nums",
                          }}
                        >
                          {s.stat.value}
                        </div>
                        <div className="text-[var(--color-text-muted)] text-sm md:text-base font-semibold mt-2">
                          {s.stat.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Progress dots — always visible */}
                  <div className="absolute bottom-0 left-0">
                    <ProgressDots count={services.length} progress={activeIdx} />
                  </div>
                </div>

                {/* RIGHT — image card + bullets card */}
                <div className="relative min-h-[40vh] md:min-h-[50vh]">
                  {services.map((s, i) => {
                    const img = IMAGE_MAP[s.id];
                    return (
                      <motion.div
                        key={s.id}
                        style={{ opacity: opacities[i] }}
                        className="absolute inset-0 flex gap-4 md:gap-5 items-stretch"
                      >
                        {/* Photo card */}
                        <div className="flex-1 rounded-2xl overflow-hidden shadow-xl bg-white">
                          <img
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Info/bullets card */}
                        <div className="hidden md:flex flex-col w-56 lg:w-64 rounded-2xl bg-white border border-[var(--color-border)] shadow-lg p-5 lg:p-6">
                          <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3">
                            {s.short}
                          </div>
                          <ul className="space-y-2.5 flex-1">
                            {s.bullets.map((b) => (
                              <li
                                key={b}
                                className="flex items-start gap-2 text-xs md:text-sm text-[var(--color-dark)]/85"
                              >
                                <Icon
                                  name="check"
                                  size={14}
                                  stroke={2.6}
                                  className="mt-0.5 shrink-0 text-[var(--color-primary)]"
                                />
                                {b}
                              </li>
                            ))}
                          </ul>
                          <div className="pt-4 mt-auto border-t border-[var(--color-border)]">
                            <span className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider">
                              Servizio {i + 1} di {services.length}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ProgressDots({ count, progress }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="h-2 rounded-full bg-[var(--color-dark)] origin-left"
          animate="visible"
          style={{
            width: 32,
            scaleX: useTransform(progress, (v) => (Math.round(v) === i ? 1 : 0.35)),
            opacity: useTransform(progress, (v) => (Math.round(v) === i ? 1 : 0.3)),
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      ))}
    </div>
  );
}

function ReducedMotionFallback() {
  return (
    <div className="container-narrow pb-20 space-y-14">
      {services.map((s, i) => {
        const img = IMAGE_MAP[s.id];
        return (
          <div key={s.id} className="grid md:grid-cols-[1fr_1fr] gap-8 items-center">
            <div>
              <h3 className="font-extrabold text-[var(--color-dark)] leading-[1.02] tracking-tight text-3xl">
                {s.title}
              </h3>
              <p className="mt-4 text-[var(--color-text-muted)] text-sm leading-relaxed">
                {s.description}
              </p>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-[var(--color-dark)]/85">
                    <Icon name="check" size={14} stroke={2.6} className="mt-0.5 shrink-0 text-[var(--color-primary)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden aspect-[4/5] max-h-[50vh]">
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
