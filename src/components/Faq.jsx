import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faq } from "../data/faq";
import { Reveal } from "./ui/Reveal";
import { Icon } from "./ui/Icon";
import { cn } from "../lib/cn";

export function Faq() {
  const [open, setOpen] = useState(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section className="section-cinematic bg-[var(--color-dark)] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-narrow">
        <Reveal className="grid md:grid-cols-[1fr_auto] md:items-end gap-6 md:gap-12 mb-10 md:mb-14">
          <div>
            <span className="eyebrow !text-[var(--color-primary-soft)]">Domande frequenti</span>
            <h2
              className="font-extrabold text-white leading-[1.05] tracking-tight max-w-xl"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            >
              Chiarezza prima<br />
              di qualunque clic.
            </h2>
          </div>
          <p className="text-white/60 max-w-sm text-sm md:text-base leading-relaxed">
            Abbiamo raccolto le domande che ci fanno più spesso. Se non trovi la tua, chiamaci — rispondiamo direttamente.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {faq.map((item, i) => {
              const isOpen = i === open;
              return (
                <li key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-4 md:gap-6 py-5 md:py-6 text-left group"
                  >
                    <span className="shrink-0 text-xs md:text-sm font-bold text-white/40 tabular-nums w-8 md:w-10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-base md:text-xl font-semibold text-white group-hover:text-[var(--color-primary-soft)] transition-colors">
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "shrink-0 grid place-items-center w-9 h-9 md:w-10 md:h-10 rounded-full transition-all",
                        isOpen
                          ? "bg-[var(--color-primary)] text-white rotate-45"
                          : "bg-white/10 text-white group-hover:bg-white/15"
                      )}
                      aria-hidden="true"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="pb-6 pl-12 md:pl-16 pr-10 md:pr-12 text-white/75 text-sm md:text-base leading-relaxed max-w-3xl">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
