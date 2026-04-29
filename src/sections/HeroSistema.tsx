import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { stagger, staggerItem } from "@/components/ui/reveal-variants";

const schedaDati: Array<{ key: string; value: string }> = [
  { key: "Esperienza", value: "20+ anni di attività" },
  { key: "Scala", value: "multisplit fino a 9 unità" },
  { key: "Brand", value: "Carrier · MAXA · F-GAS" },
  { key: "Copertura", value: "Siracusa e provincia" },
];

export function HeroSistema() {
  return (
    <section
      id="sistema"
      aria-labelledby="hero-heading"
      className="relative pt-[68px] lg:pt-[80px] overflow-hidden bg-[var(--color-bg)]"
    >
      <div className="container-x grid lg:grid-cols-12 gap-y-12 lg:gap-x-12 py-12 lg:py-24 min-h-[calc(100svh-80px)]">
        {/* Sinistra — copy + CTA */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <SectionLabel index="01" label="Sistema" />

          <h1
            id="hero-heading"
            className="mt-7 lg:mt-9 font-display font-bold text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.25rem] xl:text-[6.5rem] leading-[0.98] tracking-[-0.03em] text-[var(--color-ink)]"
          >
            Impianti che durano
            <br />
            <span className="text-[var(--color-accent)]">vent'anni.</span>{" "}
            <span className="whitespace-nowrap">Come noi.</span>
          </h1>

          <p className="mt-7 lg:mt-9 max-w-[34rem] text-[17px] lg:text-[19px] leading-[1.55] text-[var(--color-mute)]">
            Climatizzatori Carrier e MAXA installati a regola d'arte a Siracusa e provincia.
            Sopralluogo gratuito, preventivo chiaro, manutenzione che non dimentichiamo.
          </p>

          <div className="mt-9 lg:mt-11 flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${site.phoneTel}`}
              aria-label={`Chiama Iacono Clima al numero ${site.phone}`}
              className="btn-fly inline-flex items-center gap-2 h-14 px-7 text-base font-body font-semibold tracking-tight bg-[var(--color-accent)] text-white rounded-[3px] shadow-[0_8px_24px_-8px_rgba(232,118,58,0.5)] hover:shadow-[0_12px_28px_-8px_rgba(232,118,58,0.65)] active:scale-[0.98] transition-shadow focus-visible:outline-2 focus-visible:outline-offset-3"
            >
              <span className="btn-icon">
                <Phone size={16} strokeWidth={2.5} aria-hidden="true" />
              </span>
              <span className="btn-text">Chiama {site.phone}</span>
            </a>
            <Button
              href={site.whatsapp1Link}
              variant="outline"
              size="lg"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Apri WhatsApp per contattarci — si apre in una nuova scheda"
            >
              Apri WhatsApp
            </Button>
          </div>
        </div>

        {/* Destra — scheda dati azienda */}
        <motion.div
          className="lg:col-span-5 flex items-center"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <div className="relative w-full">
            {/* Foto di sfondo decorativa */}
            <div className="absolute inset-0 -z-10 rounded-[6px] overflow-hidden" aria-hidden="true">
              <img
                src="/images/hero-detail.jpeg"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover opacity-[0.55] saturate-[0.6] contrast-[1.05]"
                loading="eager"
                fetchPriority="high"
                decoding="sync"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(248,248,246,0.15) 0%, rgba(248,248,246,0.45) 100%)",
                }}
              />
            </div>

            <div
              className="relative bg-white/80 border border-[var(--color-line)] backdrop-blur-md p-6 lg:p-9 rounded-[6px]"
              role="region"
              aria-label="Scheda informativa Iacono Clima"
            >
              <motion.div
                variants={staggerItem}
                className="flex items-baseline justify-between border-b border-[var(--color-line)] pb-4 mb-5"
                aria-hidden="true"
              >
                <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-mute)]">
                  iacono.clima / scheda
                </span>
                <span className="font-mono text-[10.5px] text-[var(--color-accent)]">
                  v{new Date().getFullYear()}
                </span>
              </motion.div>

              <dl className="space-y-4 lg:space-y-5">
                {schedaDati.map((row) => (
                  <motion.div
                    key={row.key}
                    variants={staggerItem}
                    className="flex flex-col gap-1"
                  >
                    <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-mute)]">
                      {row.key}
                    </dt>
                    <dd className="font-display text-[1.5rem] lg:text-[1.75rem] leading-tight text-[var(--color-ink)] font-medium tracking-tight">
                      {row.value}
                    </dd>
                  </motion.div>
                ))}
              </dl>

              <motion.div
                variants={staggerItem}
                className="mt-7 pt-4 border-t border-[var(--color-line)] flex items-center justify-between font-mono text-[11px]"
              >
                <span aria-hidden="true" className="text-[var(--color-mute)]">→ briefing</span>
                <a
                  href="#briefing"
                  className="text-[var(--color-accent)] hover:underline underline-offset-4"
                  aria-label="Vai al modulo di richiesta sopralluogo"
                >
                  apri il modulo
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
