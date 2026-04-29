import { motion } from "framer-motion";
import { Phone, CalendarDays, Layers2, ShieldCheck, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { stagger, staggerItem } from "@/components/ui/reveal-variants";

type Dato = {
  icon: LucideIcon;
  label: string;
  count?: number;
  suffix?: string;
  text?: string;
  sub?: string;
};

const schedaDati: Dato[] = [
  { icon: CalendarDays, count: 20, suffix: "+", label: "anni di attività" },
  { icon: Layers2,      count: 9,  suffix: " unità", label: "interni multisplit max" },
  { icon: ShieldCheck,  text: "Carrier · MAXA", sub: "F-GAS cert.", label: "brand certificati" },
  { icon: MapPin,       text: "Siracusa", sub: "+ provincia SR", label: "zona di copertura" },
];

export function HeroSistema() {
  return (
    <section
      id="sistema"
      aria-labelledby="hero-heading"
    >
      {/* ── Hero fullscreen ─────────────────────────────────── */}
      <div
        className="relative min-h-svh flex flex-col pt-[68px] lg:pt-[80px]"
        style={{
          backgroundImage: "url(/images/hero3.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        {/* Overlay scuro per leggibilità del testo */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

        {/* Gradient bottom — sfuma verso bg-warm di ISistemi con tint blu */}
        <div
          className="absolute bottom-0 inset-x-0 h-[40%] pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(0,102,204,0.08) 55%, #f2f0ea 100%)",
          }}
        />

        {/* Contenuto — heading in alto, bottoni in basso */}
        <div className="relative z-10 flex flex-col flex-1 items-center justify-between pb-16 lg:pb-24 px-6 text-center">

          {/* TOP — heading */}
          <div className="flex flex-col items-center pt-12 lg:pt-20">
            <h1
              id="hero-heading"
              className="font-display font-bold text-[3rem] sm:text-[4.5rem] lg:text-[6.5rem] xl:text-[8rem] leading-[0.98] tracking-[-0.03em] text-white"
            >
              Fresco <em className="italic text-[var(--color-accent)]">perfetto</em>.
              <br />
              Silenzio <em className="italic text-[var(--color-accent)]">assoluto</em>.
            </h1>
          </div>

          {/* BOTTOM — bottoni */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${site.phoneTel}`}
              aria-label={`Chiama Iacono Clima al numero ${site.phone}`}
              className="btn-fly inline-flex items-center gap-2 h-14 px-7 text-base font-body font-semibold tracking-tight bg-[var(--color-accent)] text-white rounded-[3px] shadow-[0_8px_24px_-8px_rgba(0,102,204,0.5)] hover:shadow-[0_12px_28px_-8px_rgba(0,102,204,0.65)] active:scale-[0.98] transition-shadow focus-visible:outline-2 focus-visible:outline-offset-3"
            >
              <span className="btn-icon">
                <Phone size={16} strokeWidth={2.5} aria-hidden="true" />
              </span>
              <span className="btn-text">Chiama {site.phone}</span>
              <span className="btn-icon-center" aria-hidden="true">
                <span className="btn-icon-bob">
                  <Phone size={18} strokeWidth={2.5} />
                </span>
              </span>
            </a>
            <Button
              href={site.whatsapp1Link}
              variant="invert"
              size="lg"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Apri WhatsApp per contattarci — si apre in una nuova scheda"
            >
              Apri WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* ── Data strip — reveal sullo scroll ────────────────── */}
      <div className="bg-[var(--color-bg-warm)] py-14 lg:py-20">
        <div className="container-x">
          <motion.dl
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="grid grid-cols-2 lg:grid-cols-4"
          >
            {schedaDati.map((row) => (
              <motion.div
                key={row.label}
                variants={staggerItem}
                className="flex flex-col gap-4 px-0 py-8 lg:px-8 lg:py-6"
              >
                <row.icon
                  size={18}
                  strokeWidth={1.8}
                  className="text-[var(--color-accent)]"
                  aria-hidden="true"
                />
                <dd className="font-display font-bold leading-none tracking-tight text-[var(--color-ink)]">
                  {row.count !== undefined ? (
                    <CountUp
                      end={row.count}
                      suffix={row.suffix ?? ""}
                      className="text-[2.75rem] lg:text-[3.25rem]"
                    />
                  ) : (
                    <span className="text-[2rem] lg:text-[2.5rem]">{row.text}</span>
                  )}
                  {row.sub && (
                    <span className="block mt-1 font-mono text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--color-accent)]">
                      {row.sub}
                    </span>
                  )}
                </dd>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-mute)]">
                  {row.label}
                </dt>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
