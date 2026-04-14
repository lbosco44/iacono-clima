import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "../data/services";
import { Reveal } from "./ui/Reveal";
import { Icon } from "./ui/Icon";
import { cn } from "../lib/cn";

export function Services() {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active) || services[0];

  return (
    <section id="servizi" className="section-cinematic bg-[var(--color-bg-light)]">
      <div className="container-narrow">
        <Reveal className="grid md:grid-cols-[1fr_auto] md:items-end gap-6 md:gap-12 mb-10 md:mb-16">
          <div>
            <span className="eyebrow">I nostri servizi</span>
            <h2
              className="h-display max-w-xl"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            >
              Tutto quello che<br />
              serve al tuo clima.
            </h2>
          </div>
          <p className="text-[var(--color-text-muted)] max-w-sm text-sm md:text-base leading-relaxed">
            Installazione, manutenzione, assistenza multimarca. Dalla piccola abitazione al centro commerciale — gestiamo tutto.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_1.1fr] gap-6 md:gap-10 items-start">
          <Reveal className="relative">
            <div
              className="relative rounded-3xl overflow-hidden bg-white ring-1 ring-[var(--color-border)]"
              style={{ aspectRatio: "4 / 5" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <ServiceIllustration id={active} />
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="flex flex-col gap-3">
              {services.map((s) => {
                const isActive = s.id === active;
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => setActive(s.id)}
                      className={cn(
                        "w-full text-left rounded-2xl transition-all duration-300 overflow-hidden",
                        isActive
                          ? "bg-[var(--color-primary)] text-white shadow-[var(--shadow-card-hover)]"
                          : "bg-white text-[var(--color-dark)] hover:bg-white/80 ring-1 ring-[var(--color-border)]"
                      )}
                    >
                      <div className="flex items-center justify-between gap-4 p-5 md:p-6">
                        <div className="flex items-center gap-4 min-w-0">
                          <div
                            className={cn(
                              "shrink-0 grid place-items-center w-11 h-11 rounded-xl transition-colors",
                              isActive
                                ? "bg-white/20 text-white"
                                : "bg-[var(--color-accent)] text-[var(--color-primary)]"
                            )}
                          >
                            <Icon name={s.icon} size={22} stroke={2} />
                          </div>
                          <div className="min-w-0">
                            <div className="font-bold text-lg md:text-xl leading-tight">
                              {s.title}
                            </div>
                            <div
                              className={cn(
                                "text-sm mt-0.5",
                                isActive ? "text-white/80" : "text-[var(--color-text-muted)]"
                              )}
                            >
                              {s.short}
                            </div>
                          </div>
                        </div>
                        <div
                          className={cn(
                            "shrink-0 grid place-items-center w-9 h-9 rounded-full transition-colors",
                            isActive ? "bg-white text-[var(--color-primary)]" : "bg-[var(--color-bg-light)] text-[var(--color-dark)]"
                          )}
                          aria-hidden="true"
                        >
                          <Icon name="arrowRight" size={14} stroke={2.4} />
                        </div>
                      </div>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            key="panel"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                              <p className="text-white/85 text-sm md:text-base leading-relaxed max-w-md">
                                {s.description}
                              </p>
                              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                                {s.bullets.map((b) => (
                                  <li
                                    key={b}
                                    className="flex items-start gap-2 text-xs md:text-sm text-white/90"
                                  >
                                    <Icon name="check" size={14} stroke={2.6} className="mt-0.5 shrink-0" />
                                    {b}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServiceIllustration({ id }) {
  const imageMap = {
    residenziale: { src: "/images/comfort-casa.png", alt: "Installazione residenziale" },
    commerciale: { src: "/images/installazione-02.png", alt: "Installazione commerciale" },
    manutenzione: { src: "/images/unita-esterna.png", alt: "Manutenzione unità esterna" },
  };
  const img = imageMap[id] || imageMap.residenziale;
  return (
    <img
      src={img.src}
      alt={img.alt}
      loading="lazy"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}
