import { motion, useReducedMotion } from "framer-motion";
import { site } from "../data/site";
import { handleAnchorClick } from "../lib/smoothScroll";
import { Icon } from "./ui/Icon";
import { AnimatedButton } from "./ui/AnimatedButton";
import { LayoutTextFlip } from "./ui/layout-text-flip";

const EASE = [0.22, 1, 0.36, 1];

export function Hero() {
  const reduced = useReducedMotion();

  const container = reduced
    ? {}
    : {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
      };

  const item = reduced
    ? {}
    : {
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      };

  const imgReveal = reduced
    ? {}
    : {
        hidden: { opacity: 0, scale: 1.04 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 1.1, ease: EASE },
        },
      };

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-20 md:pt-24"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative"
      >
        <div className="container-narrow">
          <motion.div
            variants={imgReveal}
            className="relative overflow-hidden rounded-3xl aspect-[3/4] sm:aspect-[4/3] md:aspect-[16/10]"
          >
            <img
              src="/images/hero-bg.png"
              alt="Camera con climatizzatore Iacono Clima installato"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%), linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 50%)",
              }}
              aria-hidden="true"
            />

            <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
              <motion.h1
                variants={item}
                className="font-extrabold leading-[1] tracking-tight max-w-2xl flex flex-col gap-2 md:gap-3"
                style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)" }}
              >
                <span className="inline-flex flex-wrap items-center gap-x-3 md:gap-x-4 gap-y-2">
                  <span className="text-gradient-cool">Aria</span>
                  <LayoutTextFlip
                    words={["fresca", "pulita", "silenziosa", "sana", "garantita"]}
                    duration={2400}
                  />
                  <span className="text-gradient-cool">—</span>
                </span>
                <span className="text-gradient-cool">installata bene.</span>
              </motion.h1>

              <motion.div
                variants={item}
                className="mt-5 md:mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
              >
                <p className="text-white/85 max-w-md text-sm md:text-base leading-relaxed">
                  Installatori certificati F-GAS a Siracusa e provincia. Carrier e MAXA.
                  Oltre 20 anni di esperienza e servizio chiavi in mano.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <AnimatedButton href="#contatti" tone="light">
                    Richiedi Preventivo
                  </AnimatedButton>
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-transparent text-white border border-white/30 font-semibold text-sm md:text-base hover:bg-white/10 transition-all"
                  >
                    <Icon name="phone" size={16} stroke={2.4} />
                    {site.phone}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
