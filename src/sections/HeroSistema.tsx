import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { stagger, staggerItem } from "@/components/ui/reveal-variants";

const schedaDati: Array<{ key: string; value: string; suffix?: string }> = [
  { key: "esperienza", value: "20+ anni di attività" },
  { key: "scala", value: "multisplit fino a 9 unità" },
  { key: "brand", value: "Carrier · MAXA · F-GAS" },
  { key: "copertura", value: "Siracusa e provincia" },
];

export function HeroSistema() {
  return (
    <section
      id="sistema"
      className="relative pt-[68px] lg:pt-[80px] overflow-hidden bg-[--color-bg]"
    >
      <div className="container-x grid lg:grid-cols-12 gap-y-12 lg:gap-x-12 py-12 lg:py-24 min-h-[calc(100svh-80px)]">
        {/* Sinistra — copy + CTA */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <SectionLabel index="01" label="Sistema" />

          <h1 className="mt-7 lg:mt-9 font-display font-bold text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.25rem] xl:text-[6.5rem] leading-[0.98] tracking-[-0.03em] text-[--color-ink]">
            Impianti che durano
            <br />
            <span className="text-[--color-accent]">vent'anni.</span>{" "}
            <span className="whitespace-nowrap">Come noi.</span>
          </h1>

          <p className="mt-7 lg:mt-9 max-w-[34rem] text-[17px] lg:text-[19px] leading-[1.55] text-[--color-mute]">
            Climatizzatori Carrier e MAXA installati a regola d'arte a Siracusa e provincia.
            Sopralluogo gratuito, preventivo chiaro, manutenzione che non dimentichiamo.
          </p>

          <div className="mt-9 lg:mt-11 flex flex-col sm:flex-row gap-3">
            <Button href={`tel:${site.phoneTel}`} variant="primary" size="lg">
              <Phone size={16} strokeWidth={2.5} />
              Chiama {site.phone}
            </Button>
            <Button
              href={site.whatsapp1Link}
              variant="outline"
              size="lg"
              target="_blank"
              rel="noreferrer"
            >
              Apri WhatsApp
            </Button>
          </div>
        </div>

        {/* Destra — scheda dati */}
        <motion.div
          className="lg:col-span-5 flex items-center"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <div className="relative w-full">
            {/* Foto sfondo */}
            <div className="absolute inset-0 -z-10 rounded-[6px] overflow-hidden">
              <img
                src="/images/hero-detail.jpeg"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover opacity-[0.32] saturate-[0.85] mix-blend-multiply"
                loading="eager"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(248,248,246,0.55) 0%, rgba(248,248,246,0.85) 100%)",
                }}
              />
            </div>

            <div className="relative bg-[--color-bg-warm] border border-[--color-line] backdrop-blur-sm p-6 lg:p-9 rounded-[6px]">
              <motion.div
                variants={staggerItem}
                className="flex items-baseline justify-between border-b border-[--color-line] pb-4 mb-5"
              >
                <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[--color-mute]">
                  iacono.clima / scheda
                </span>
                <span className="font-mono text-[10.5px] text-[--color-accent]">
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
                    <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[--color-mute]">
                      / {row.key}
                    </dt>
                    <dd className="font-display text-[1.5rem] lg:text-[1.75rem] leading-tight text-[--color-ink] font-medium tracking-tight">
                      {row.value}
                    </dd>
                  </motion.div>
                ))}
              </dl>

              <motion.div
                variants={staggerItem}
                className="mt-7 pt-4 border-t border-[--color-line] flex items-center justify-between font-mono text-[11px]"
              >
                <span className="text-[--color-mute]">→ briefing</span>
                <a
                  href="#briefing"
                  className="text-[--color-accent] hover:underline underline-offset-4"
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
