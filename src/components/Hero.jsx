import { motion, useReducedMotion } from "framer-motion";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { ImagePlaceholder } from "./ui/ImagePlaceholder";
import { Icon } from "./ui/Icon";

const EASE = [0.22, 1, 0.36, 1];

export function Hero() {
  const reduced = useReducedMotion();

  const containerVariants = reduced
    ? {}
    : {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.14, delayChildren: 0.1 },
        },
      };

  const itemVariants = reduced
    ? {}
    : {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      };

  const badgeVariants = reduced
    ? {}
    : {
        hidden: { opacity: 0, scale: 0.9, y: 12 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { type: "spring", stiffness: 260, damping: 18 },
        },
      };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-[var(--color-dark)] via-[#0E2E52] to-[var(--color-primary-dark)]"
    >
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, white 1px, transparent 1.5px), radial-gradient(circle at 80% 60%, white 1px, transparent 1.5px)",
          backgroundSize: "60px 60px, 90px 90px",
        }}
      />
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-12 items-center"
        >
          <div>
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 text-xs font-semibold tracking-wide">
                <Icon name="snowflake" size={14} stroke={2.2} className="text-[var(--color-accent)]" />
                Installatori climatizzatori — Siracusa
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-white font-black leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.75rem, 7vw, 5rem)" }}
            >
              ARIA PERFETTA.
              <br />
              <span className="text-[var(--color-accent)]">INSTALLATA</span> BENE.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 text-white/90 font-semibold text-lg md:text-xl"
            >
              Climatizzatori a Siracusa e provincia.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-3 text-base md:text-lg text-white/70 max-w-xl leading-relaxed"
            >
              Installatori certificati <strong className="text-white">F-GAS</strong> — rivenditori
              ufficiali Carrier e MAXA. Oltre 20 anni di esperienza sul campo.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-2">
              {[
                { icon: "shield", text: "Certificati F-GAS" },
                { icon: "star", text: "Carrier & MAXA" },
                { icon: "clock", text: "20+ anni" },
              ].map((b) => (
                <motion.span
                  key={b.text}
                  variants={badgeVariants}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white text-[var(--color-primary-dark)] px-3.5 py-2 text-xs md:text-sm font-bold"
                >
                  <Icon name={b.icon} size={14} stroke={2.2} />
                  {b.text}
                </motion.span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
              <Button href="#contatti" variant="primary">
                Richiedi Preventivo Gratuito
                <Icon name="arrowRight" size={18} />
              </Button>
              <Button
                href="#servizi"
                variant="outline"
                className="!border-white !text-white hover:!bg-white hover:!text-[var(--color-primary)]"
              >
                Scopri i Servizi
              </Button>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative">
            <div
              className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
              style={{ background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <ImagePlaceholder
              name="hero-bg.png"
              alt="Tecnico Iacono Clima durante un'installazione di climatizzatore a Siracusa"
              aspect="4 / 5"
              rounded="rounded-3xl"
              priority
              className="relative shadow-2xl ring-1 ring-white/10"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
