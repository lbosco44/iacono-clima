import { timeline } from "@/data/timeline";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function SistemaIacono() {
  return (
    <section
      id="sistema-iacono"
      aria-labelledby="sistema-iacono-heading"
      className="bg-[var(--color-ink)] text-[var(--color-bg)]"
    >
      {/* Intro count-up */}
      <div className="container-x pt-24 lg:pt-36 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-y-10 lg:gap-x-12 items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="05" label="Il Sistema Iacono" invert />
            {/* Il testo visivo "20+" è decorativo — la frase seguente fornisce il contesto per SR */}
            <div className="mt-10 lg:mt-12 flex items-baseline gap-4" aria-hidden="true">
              <span className="font-display font-bold leading-none tracking-[-0.04em] text-[7rem] sm:text-[10rem] lg:text-[15rem] xl:text-[18rem] text-[var(--color-bg)]">
                <CountUp end={20} duration={1.6} />
              </span>
              <span className="font-display text-[3.5rem] lg:text-[6rem] leading-none text-[var(--color-accent)] font-bold">
                +
              </span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <p
              id="sistema-iacono-heading"
              className="font-display text-[1.25rem] lg:text-[1.75rem] leading-snug text-[var(--color-bg)]/85"
            >
              Oltre 20 anni di interventi tra Siracusa, Ortigia, Tisia e provincia.
              Una squadra che firma ogni intervento e torna ogni anno per la manutenzione.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline verticale */}
      <div className="container-x pb-24 lg:pb-32">
        <ol aria-label="Tappe storiche di Iacono Clima" className="space-y-0">
          {timeline.map((event, i) => (
            <Reveal key={event.year} delay={i * 0.06}>
              <li className="relative pl-7 lg:pl-0 border-t border-[var(--color-bg)]/12 py-10 lg:py-16">
                <div className="grid lg:grid-cols-12 gap-y-5 lg:gap-x-12 items-start">
                  {/* Anno + tappa */}
                  <div className="lg:col-span-3">
                    <div aria-hidden="true" className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-3">
                      / tappa 0{i + 1}
                    </div>
                    <div
                      className="font-display text-[2.5rem] lg:text-[3.75rem] leading-none font-bold text-[var(--color-bg)]"
                      aria-label={`Anno ${event.year}`}
                    >
                      {event.year}
                    </div>
                  </div>

                  {/* Contenuto */}
                  <div className="lg:col-span-9 lg:pt-1">
                    <h3 className="font-display text-[1.4rem] lg:text-[1.85rem] leading-tight text-[var(--color-bg)] font-bold">
                      {event.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-bg)]/80 max-w-2xl">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Pallino decorativo nella timeline mobile */}
                <span
                  aria-hidden="true"
                  className="lg:hidden absolute -left-[5px] top-11 w-[10px] h-[10px] rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-ink)]"
                />
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Foto pair */}
      <div className="container-x pb-24 lg:pb-32">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          <Reveal>
            <figure>
              <div className="aspect-[4/3] overflow-hidden bg-[var(--color-ink-soft)] border border-[var(--color-bg)]/10">
                <img
                  src="/images/showroom-interno.jpeg"
                  alt="Interno dello showroom Iacono Clima in Via Filisto, Siracusa"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-bg)]/65">
                Showroom · Via Filisto 71/73
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.08}>
            <figure>
              <div className="aspect-[4/3] overflow-hidden bg-[var(--color-ink-soft)] border border-[var(--color-bg)]/10">
                <img
                  src="/images/team-titolare.jpeg"
                  alt="Salvatore Iacono, titolare di Iacono Climatizzazione, nello showroom"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-bg)]/65">
                Il titolare · Salvatore Iacono
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
