import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { verdetti } from "@/data/verdetti";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Verdetti() {
  const [index, setIndex] = useState(0);
  const total = verdetti.length;
  const current = verdetti[index];
  const pad = (n: number) => String(n).padStart(2, "0");

  const go = (delta: number) => setIndex((i) => (i + delta + total) % total);

  return (
    <section id="verdetti" className="bg-[var(--color-bg)] section-y">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-12 lg:mb-20">
          <div className="lg:col-span-4">
            <SectionLabel index="06" label="Verdetti" />
          </div>
          <div className="lg:col-span-8 max-w-3xl">
            <h2 className="font-display text-[1.75rem] lg:text-[2.25rem] leading-tight font-bold text-[var(--color-ink)]">
              Quattro persone, quattro impianti, una sola opinione.
            </h2>
          </div>
        </div>

        {/* Carousel con accessibilità */}
        <div
          role="region"
          aria-roledescription="carosello recensioni"
          aria-label="Verdetti dei clienti"
        >
          <div className="relative">
            {/* Virgolette decorative */}
            <div
              aria-hidden="true"
              className="absolute -top-12 lg:-top-20 -left-2 lg:left-0 font-display text-[var(--color-accent)] text-[10rem] lg:text-[16rem] leading-[0.7] font-bold pointer-events-none select-none"
            >
              "
            </div>

            {/* Live region — annuncia il cambio slide agli screen reader */}
            <div
              aria-live="polite"
              aria-atomic="true"
              className="relative max-w-4xl mx-auto pt-10 lg:pt-20"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                  aria-roledescription="slide"
                  aria-label={`Verdetto ${index + 1} di ${total}`}
                >
                  <blockquote cite={undefined}>
                    <p className="font-display text-[1.5rem] sm:text-[1.85rem] lg:text-[2.5rem] leading-[1.25] text-[var(--color-ink)] tracking-tight">
                      {current.text}
                    </p>
                    <footer className="mt-9 font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-mute)]">
                      <cite className="not-italic">
                        <span className="text-[var(--color-ink)]">{current.author}</span>
                      </cite>
                      <span aria-hidden="true" className="mx-2 text-[var(--color-line-strong)]">·</span>
                      <span className="sr-only">,</span>
                      <span>{current.context}</span>
                      <span aria-hidden="true" className="mx-2 text-[var(--color-line-strong)]">·</span>
                      <span className="sr-only">,</span>
                      <span>{current.year}</span>
                    </footer>
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigazione carousel */}
            <div className="mt-12 lg:mt-16 flex items-center justify-center gap-6">
              <button
                type="button"
                aria-label={`Verdetto precedente (${index === 0 ? total : index} di ${total})`}
                onClick={() => go(-1)}
                className="w-12 h-12 inline-flex items-center justify-center border border-[var(--color-line-strong)] hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] transition-colors rounded-[3px]"
              >
                <ArrowLeft size={18} strokeWidth={2} aria-hidden="true" />
              </button>
              <span
                className="font-mono text-[13px] tracking-[0.12em] text-[var(--color-mute)] tabular-nums"
                aria-hidden="true"
              >
                <span className="text-[var(--color-ink)]">{pad(index + 1)}</span>
                <span className="mx-2">/</span>
                <span>{pad(total)}</span>
              </span>
              <button
                type="button"
                aria-label={`Verdetto successivo (${(index + 2) > total ? 1 : index + 2} di ${total})`}
                onClick={() => go(1)}
                className="w-12 h-12 inline-flex items-center justify-center border border-[var(--color-line-strong)] hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] transition-colors rounded-[3px]"
              >
                <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
