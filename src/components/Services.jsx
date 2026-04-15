import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { services } from "../data/services";
import { Reveal } from "./ui/Reveal";
import { Icon } from "./ui/Icon";

const IMAGE_MAP = {
  residenziale: {
    src: "/images/comfort-casa.png",
    alt: "Installazione climatizzatore residenziale",
  },
  commerciale: {
    src: "/images/installazione-02.png",
    alt: "Installazione climatizzatore commerciale",
  },
  manutenzione: {
    src: "/images/unita-esterna.png",
    alt: "Manutenzione unità esterna climatizzatore",
  },
};

function ServicePanel({ service, index, opacity, xShift }) {
  return (
    <motion.div
      style={{ opacity, x: xShift }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[var(--color-primary)] font-extrabold tabular-nums leading-none text-5xl md:text-6xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-text-muted)]">
          / {String(services.length).padStart(2, "0")}
        </span>
      </div>

      <h3
        className="font-extrabold text-[var(--color-dark)] leading-[1.02] tracking-tight"
        style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
      >
        {service.title}
      </h3>

      <p className="mt-4 md:mt-5 max-w-md text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed">
        {service.description}
      </p>

      <ul className="mt-5 md:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2 max-w-md">
        {service.bullets.map((b) => (
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
    </motion.div>
  );
}

export function Services() {
  const trackRef = useRef(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // 3 services → 3 phases of crossfade:
  // phase A: service 0 fully visible
  // phase B: service 0 fades out / service 1 fades in
  // phase C: service 1 fully visible
  // phase D: service 1 fades out / service 2 fades in
  // phase E: service 2 fully visible
  const opacity0 = useTransform(scrollYProgress, [0, 0.28, 0.4], [1, 1, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.28, 0.4, 0.6, 0.72], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.6, 0.72, 1], [0, 1, 1]);

  // Subtle horizontal drift per panel (gives "carousel" feel)
  const x0 = useTransform(scrollYProgress, [0, 0.4], ["0%", "-8%"]);
  const x1 = useTransform(scrollYProgress, [0.28, 0.5, 0.72], ["8%", "0%", "-8%"]);
  const x2 = useTransform(scrollYProgress, [0.6, 1], ["8%", "0%"]);

  const imgOpacities = [opacity0, opacity1, opacity2];
  const panelOpacities = [opacity0, opacity1, opacity2];
  const panelX = [x0, x1, x2];

  // Progress bar fill
  const barScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="servizi"
      className="bg-[var(--color-bg-light)] relative"
    >
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
        <div className="container-narrow pb-20 space-y-14">
          {services.map((s, i) => (
            <ServicePanelStatic key={s.id} service={s} index={i} />
          ))}
        </div>
      ) : (
        <div ref={trackRef} className="relative" style={{ height: "220vh" }}>
          <div className="sticky top-24 h-[calc(100vh-7rem)] flex items-center">
            <div className="container-narrow w-full">
              {/* Progress bar */}
              <div className="relative mb-6 md:mb-8 h-1 w-full bg-[var(--color-border)] rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-[var(--color-primary)] origin-left"
                  style={{ scaleX: barScale, width: "100%" }}
                />
              </div>

              <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 md:gap-14 items-center">
                {/* Left — text crossfade */}
                <div className="relative min-h-[46vh] md:min-h-[52vh]">
                  {services.map((s, i) => (
                    <ServicePanel
                      key={s.id}
                      service={s}
                      index={i}
                      opacity={panelOpacities[i]}
                      xShift={panelX[i]}
                    />
                  ))}
                </div>

                {/* Right — image crossfade */}
                <div
                  className="relative rounded-3xl overflow-hidden shadow-2xl bg-white"
                  style={{ aspectRatio: "4 / 5", maxHeight: "55vh" }}
                >
                  {services.map((s, i) => {
                    const img = IMAGE_MAP[s.id];
                    return (
                      <motion.img
                        key={s.id}
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        decoding="async"
                        style={{ opacity: imgOpacities[i] }}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
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

function ServicePanelStatic({ service, index }) {
  const img = IMAGE_MAP[service.id];
  return (
    <div className="grid md:grid-cols-[1fr_1fr] gap-8 items-center">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[var(--color-primary)] font-extrabold tabular-nums leading-none text-5xl">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="font-extrabold text-[var(--color-dark)] leading-[1.02] tracking-tight text-3xl">
          {service.title}
        </h3>
        <p className="mt-4 text-[var(--color-text-muted)] text-sm leading-relaxed">
          {service.description}
        </p>
        <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
          {service.bullets.map((b) => (
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
}
