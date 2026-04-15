import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "../ui/Icon";
import { handleAnchorClick } from "../../lib/smoothScroll";

const EASE = [0.22, 1, 0.36, 1];

export function ProductsHero() {
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
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      };

  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-12 md:pb-20 bg-[var(--color-bg-light)]">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-primary) 1px, transparent 1.2px)",
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="container-narrow relative text-center"
      >
        <motion.span variants={item} className="eyebrow justify-center">
          Catalogo prodotti
        </motion.span>

        <motion.h1
          variants={item}
          className="h-display mx-auto max-w-3xl"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Ogni ambiente<br />
          ha il suo clima giusto.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-2xl mx-auto text-[var(--color-text-muted)] text-base md:text-lg leading-relaxed"
        >
          Residenziale, commerciale, monoblocchi e soluzioni industriali Carrier e MAXA.
          Consulta le schede e scarica i cataloghi tecnici ufficiali.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#residenziale"
            onClick={handleAnchorClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-dark)] text-white text-sm font-semibold hover:bg-[var(--color-primary)] transition-colors"
          >
            <Icon name="home" size={16} stroke={2.2} />
            Residenziale
          </a>
          <a
            href="#commerciale"
            onClick={handleAnchorClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[var(--color-dark)] border border-[var(--color-border)] text-sm font-semibold hover:border-[var(--color-dark)] transition-colors"
          >
            <Icon name="store" size={16} stroke={2.2} />
            Commerciale
          </a>
          <a
            href="#monoblocchi"
            onClick={handleAnchorClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[var(--color-dark)] border border-[var(--color-border)] text-sm font-semibold hover:border-[var(--color-dark)] transition-colors"
          >
            <Icon name="key" size={16} stroke={2.2} />
            Monoblocchi
          </a>
          <a
            href="#industriale"
            onClick={handleAnchorClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[var(--color-dark)] border border-[var(--color-border)] text-sm font-semibold hover:border-[var(--color-dark)] transition-colors"
          >
            <Icon name="factory" size={16} stroke={2.2} />
            Industriale
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
