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
    <section id="verdetti" className="bg-[--color-bg] section-y">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-12 lg:mb-20">
          <div className="lg:col-span-4">
            <SectionLabel index="06" label="Verdetti" />
          </div>
          <div className="lg:col-span-8 max-w-3xl">
            <h2 className="font-display text-[1.75rem] lg:text-[2.25rem] leading-tight font-bold text-[--color-ink]">
              Quattro persone, quattro impianti, una sola opinione.
            </h2>
          </div>
        </div>

        <div className="relative">
          {/* Virgolette gigante */}
          <div
            aria-hidden
            className="absolute -top-12 lg:-top-20 -left-2 lg:left-0 font-display text-[--color-accent] text-[10rem] lg:text-[16rem] leading-[0.7] font-bold pointer-events-none select-none"
          >
            “
          </div>

          <div className="relative max-w-4xl mx-auto pt-10 lg:pt-20">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current.text}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <p className="font-display text-[1.5rem] sm:text-[1.85rem] lg:text-[2.5rem] leading-[1.25] text-[--color-ink] tracking-tight">
                  {current.text}
                </p>
                <footer className="mt-9 font-mono text-[12px] uppercase tracking-[0.16em] text-[--color-mute]">
                  <span className="text-[--color-ink]">{current.author}</span>
                  <span className="mx-2 text-[--color-line-strong]">·</span>
                  <span>{current.context}</span>
                  <span className="mx-2 text-[--color-line-strong]">·</span>
                  <span>{current.year}</span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Nav */}
          <div className="mt-12 lg:mt-16 flex items-center justify-center gap-6">
            <button
              type="button"
              aria-label="Verdetto precedente"
              onClick={() => go(-1)}
              className="w-12 h-12 inline-flex items-center justify-center border border-[--color-line-strong] hover:border-[--color-ink] hover:bg-[--color-ink] hover:text-[--color-bg] transition-colors rounded-[3px]"
            >
              <ArrowLeft size={18} strokeWidth={2} />
            </button>
            <span className="font-mono text-[13px] tracking-[0.12em] text-[--color-mute] tabular-nums">
              <span className="text-[--color-ink]">{pad(index + 1)}</span>
              <span className="mx-2">/</span>
              <span>{pad(total)}</span>
            </span>
            <button
              type="button"
              aria-label="Verdetto successivo"
              onClick={() => go(1)}
              className="w-12 h-12 inline-flex items-center justify-center border border-[--color-line-strong] hover:border-[--color-ink] hover:bg-[--color-ink] hover:text-[--color-bg] transition-colors rounded-[3px]"
            >
              <ArrowRight size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
