import { useState } from "react";
import { motion } from "framer-motion";
import { processSteps } from "../data/process";
import { Reveal } from "./ui/Reveal";
import { Icon } from "./ui/Icon";
import { cn } from "../lib/cn";

function iconFor(i) {
  return ["phone", "clipboard", "tool", "check", "shield"][i] || "check";
}

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
                    "relative text-left rounded-2xl transition-all duration-400 overflow-hidden min-h-[220px] md:min-h-[340px] p-5 md:p-6",
                    isActive
                      ? "bg-[var(--color-primary)] text-white"
                      : "bg-[var(--color-bg-light)] text-[var(--color-dark)] hover:bg-[var(--color-accent)]"
                  )}
                >
                  {/* REST state — big numeral + title */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 0 : 1,
                      scale: isActive ? 0.6 : 1,
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 flex flex-col items-center justify-center px-3 pointer-events-none select-none text-[var(--color-primary)]"
                    aria-hidden="true"
                  >
                    <span
                      className="font-black leading-none"
                      style={{
                        fontSize: "clamp(5rem, 14vw, 9rem)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className="mt-3 md:mt-4 font-bold tracking-wide text-sm md:text-base text-center text-[var(--color-dark)]/85">
                      {step.title}
                    </span>
                  </motion.div>

                  {/* HOVER / ACTIVE state — full detail */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: isActive ? 0.08 : 0 }}
                    className="relative flex flex-col h-full min-h-[180px] md:min-h-[300px] pointer-events-none"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm md:text-base tracking-wider text-white/80">
                        {step.n}
                      </span>
                      <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-white/80">
                        Step
                      </span>
                    </div>

                    <div className="mt-auto">
                      <div className="grid place-items-center w-10 h-10 md:w-11 md:h-11 rounded-full mb-4 bg-white text-[var(--color-primary)]">
                        <Icon name={iconFor(i)} size={18} stroke={2.2} />
                      </div>
                      <h3 className="font-bold text-lg md:text-2xl leading-tight text-white">
                        {step.title}
                      </h3>
                      <p className="text-white/85 text-xs md:text-sm mt-3 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>

                  <span className="sr-only">
                    Passo {i + 1}: {step.title}. {step.desc}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
