import { motion, useReducedMotion } from "framer-motion";
import { site } from "../data/site";
import { handleAnchorClick } from "../lib/smoothScroll";
import { Icon } from "./ui/Icon";

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
                className="font-extrabold leading-[0.98] tracking-tight max-w-2xl bg-clip-text text-transparent"
                style={{
                  fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
                  backgroundImage:
                    "linear-gradient(135deg, #B4D4FA 0%, #E8F4FD 45%, #FFFFFF 100%)",
                }}
              >
                Aria fresca — <br />
                installata bene.
              </motion.h1>

              <motion.div
                variants={item}
                className="mt-5 md:mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
              >
                <p className="text-white/85 max-w-md text-sm md:text-base leading-relaxed">
                  Installatori certificati F-GAS a Siracusa e provincia. Carrier e MAXA.
                  Oltre 20 anni di esperienza e servizio chiavi in mano.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#contatti"
                    onClick={handleAnchorClick}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[var(--color-dark)] font-semibold text-sm md:text-base hover:bg-[var(--color-bg-light)] transition-all"
                  >
                    Richiedi Preventivo
                    <Icon name="arrowRight" size={16} stroke={2.4} />
                  </a>
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
