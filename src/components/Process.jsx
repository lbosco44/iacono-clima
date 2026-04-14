import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { processSteps } from "../data/process";
import { Reveal } from "./ui/Reveal";
import { Icon } from "./ui/Icon";
import { cn } from "../lib/cn";

export function Process() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-cinematic bg-white">
      <div className="container-narrow">
        <Reveal className="grid md:grid-cols-[1fr_auto] md:items-end gap-6 md:gap-12 mb-10 md:mb-16">
          <div>
            <span className="eyebrow">Come lavoriamo</span>
            <h2
              className="h-display max-w-xl"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            >
              Dalla chiamata al<br />
              clima fresco in 5 passi.
            </h2>
          </div>
          <p className="text-[var(--color-text-muted)] max-w-sm text-sm md:text-base leading-relaxed">
            Un processo semplice e tracciato. Nessuna sorpresa, nessuna fretta — dal sopralluogo all'assistenza di lungo periodo.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid md:grid-cols-5 gap-3 md:gap-4">
            {processSteps.map((step, i) => {
              const isActive = i === active;
              return (
                <button
                  key={step.n}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={cn(
                    "relative text-left rounded-2xl transition-all duration-400 overflow-hidden min-h-[180px] md:min-h-[340px] flex flex-col p-5 md:p-6",
                    isActive
                      ? "bg-[var(--color-primary)] text-white md:col-span-1"
                      : "bg-[var(--color-bg-light)] text-[var(--color-dark)] hover:bg-[var(--color-accent)]"
                  )}
                  style={isActive ? { flexBasis: "auto" } : undefined}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "font-bold text-sm md:text-base tracking-wider",
                        isActive ? "text-white/80" : "text-[var(--color-text-muted)]"
                      )}
                    >
                      {step.n}
                    </span>
                    <span
                      className={cn(
                        "text-[10px] md:text-xs font-bold tracking-widest uppercase",
                        isActive ? "text-white/80" : "text-[var(--color-text-muted)]"
                      )}
                    >
                      Step
                    </span>
                  </div>

                  <div className="mt-auto">
                    <div
                      className={cn(
                        "grid place-items-center w-10 h-10 md:w-11 md:h-11 rounded-full mb-4 transition-colors",
                        isActive
                          ? "bg-white text-[var(--color-primary)]"
                          : "bg-white text-[var(--color-primary)] ring-1 ring-[var(--color-border)]"
                      )}
                    >
                      <Icon name={iconFor(i)} size={18} stroke={2.2} />
                    </div>
                    <h3
                      className={cn(
                        "font-bold text-lg md:text-2xl leading-tight",
                        isActive ? "text-white" : "text-[var(--color-dark)]"
                      )}
                    >
                      {step.title}
                    </h3>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          key="desc"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="text-white/85 text-xs md:text-sm mt-3 leading-relaxed"
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function iconFor(i) {
  return ["phone", "clipboard", "tool", "check", "shield"][i] || "check";
}
