import { CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { sistemi } from "@/data/sistemi";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BrandsStrip } from "@/components/BrandsStrip";

const tagLabel: Record<string, string> = {
  mono: "Monosplit",
  multi: "Multisplit",
  idronica: "Idronica",
  refrigerazione: "Refrigerazione",
  caldaie: "Caldaie",
};

const certifications = ["F-GAS Certificati", "Partner Carrier", "Partner MAXA"];

const ease = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, margin: "-10% 0px" };

function PhotoReveal() {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className="relative">
        <div className="overflow-hidden rounded-[4px] aspect-[4/5]">
          <img src="/images/hero-detail.jpeg" alt="Showroom Iacono Clima" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <FloatingCard />
      </div>
    );
  }
  return (
    <div className="relative">
      {/* Curtain reveal sul container */}
      <motion.div
        className="overflow-hidden rounded-[4px] aspect-[4/5]"
        initial={{ clipPath: "inset(0 100% 0 0 round 4px)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0 round 4px)" }}
        viewport={vp}
        transition={{ duration: 1.0, ease, delay: 0.1 }}
      >
        {/* Leggero zoom-out durante il reveal */}
        <motion.img
          src="/images/hero-detail.jpeg"
          alt="Showroom Iacono Clima — climatizzatori Carrier e MAXA a Siracusa"
          className="w-full h-full object-cover"
          loading="lazy"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={vp}
          transition={{ duration: 1.3, ease, delay: 0.1 }}
        />
      </motion.div>

      {/* Card appare dopo il reveal */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.5, ease, delay: 0.75 }}
      >
        <FloatingCard />
      </motion.div>
    </div>
  );
}

function FloatingCard() {
  return (
    <div className="absolute -bottom-5 -left-5 lg:-left-10 bg-white rounded-[4px] shadow-[0_8px_32px_rgba(15,27,45,0.12)] border border-[var(--color-line)] p-4 lg:p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-mute)] mb-3">
        Certificazioni
      </p>
      <ul className="space-y-2">
        {certifications.map((cert) => (
          <li key={cert} className="flex items-center gap-2">
            <CheckCircle2 size={13} className="text-emerald-500 shrink-0" aria-hidden="true" />
            <span className="font-body text-[13px] font-medium text-[var(--color-ink)]">{cert}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ISistemi() {
  return (
    <section id="i-sistemi" aria-labelledby="i-sistemi-heading" className="bg-[var(--color-bg-warm)] overflow-hidden">

      <div className="container-x pt-24 lg:pt-36 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── Left — copy + checklist ── */}
          <Reveal>
            <div>
              <SectionLabel index="02" label="I Sistemi" />

              <h2
                id="i-sistemi-heading"
                className="mt-6 font-display font-bold text-[2.5rem] lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.0] tracking-[-0.03em] text-[var(--color-ink)]"
              >
                Cinque categorie.{" "}
                <span className="text-[var(--color-accent)]">Una sola filosofia</span>:{" "}
                <em className="not-italic text-[var(--color-mute)]">durata</em>.
              </h2>

              <p className="mt-5 text-[15.5px] leading-relaxed text-[var(--color-mute)] max-w-lg">
                Dall'impianto mono al banco frigo commerciale: dimensioniamo ogni progetto, lavoriamo con brand professionali e firmiamo ogni intervento.
              </p>

              <a
                href="#briefing"
                className="mt-8 inline-flex items-center gap-2 h-12 px-6 bg-[var(--color-accent)] text-white font-semibold text-[14px] rounded-[3px] hover:bg-[var(--color-accent-deep)] active:scale-[0.98] transition-all"
              >
                Richiedi un sopralluogo →
              </a>

              <ul className="mt-10 space-y-5" aria-label="Sistemi disponibili">
                {sistemi.map((s) => (
                  <li key={s.id} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      strokeWidth={2}
                      className="shrink-0 mt-0.5 text-emerald-500"
                      aria-hidden="true"
                    />
                    <p className="text-[15px] leading-snug text-[var(--color-ink)]">
                      <strong className="font-semibold">{tagLabel[s.id]}</strong>
                      {" "}
                      <span className="text-[var(--color-mute)]">{s.title}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* ── Right — foto + floating card ── */}
          <PhotoReveal />

        </div>
      </div>

      {/* ── Brand strip ── */}
      <div className="container-x pt-4 pb-24 lg:pb-32">
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-14 lg:mb-16">
            <div className="lg:col-span-5">
              <p className="font-display text-[1.5rem] lg:text-[1.85rem] leading-snug text-[var(--color-ink)] font-bold">
                Ogni impianto è firmato, certificato F-GAS, garantito.
              </p>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-[15px] leading-relaxed text-[var(--color-mute)] max-w-xl">
                Lavoriamo solo con brand professionali. Per ogni installazione rilasciamo dichiarazione di conformità,
                collaudo in presenza e registrazione del gas refrigerante.
              </p>
            </div>
          </div>
        </Reveal>
        <BrandsStrip />
      </div>

    </section>
  );
}
