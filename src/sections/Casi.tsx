import { casi } from "@/data/casi";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";

export function Casi() {
  return (
    <section id="casi" aria-labelledby="casi-heading" className="bg-[var(--color-bg-warm)] section-y">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-16 lg:mb-20">
          <div className="lg:col-span-4">
            <SectionLabel index="04" label="Casi" />
          </div>
          <div className="lg:col-span-8">
            <DisplayHeading id="casi-heading" size="md">
              Lavori che hanno funzionato.
            </DisplayHeading>
            <p className="mt-5 text-[var(--color-mute)] text-[16px] max-w-2xl">
              Quattro nicchie, quattro storie reali. Ogni intervento parte da un sopralluogo,
              passa da un preventivo dettagliato, finisce con un impianto che lavora bene per anni.
            </p>
          </div>
        </div>

        <div>
          {casi.map((caso, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={caso.id}>
                <article
                  aria-label={caso.title}
                  className="border-t border-[var(--color-line-strong)] py-14 lg:py-20"
                >
                  <div className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-center">
                    {/* Testo */}
                    <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
                      <div className="flex items-center gap-3 mb-5">
                        <Tag variant={caso.nicchia}>{caso.tag}</Tag>
                        <span
                          aria-hidden="true"
                          className="font-mono text-[11px] text-[var(--color-mute)] tracking-wide"
                        >
                          / caso 0{i + 1}
                        </span>
                      </div>

                      <h3 className="font-display text-[1.85rem] lg:text-[2.5rem] leading-[1.1] tracking-tight font-bold text-[var(--color-ink)]">
                        {caso.title}
                      </h3>

                      <p className="mt-5 text-[16px] leading-relaxed text-[var(--color-mute)] max-w-xl">
                        {caso.story}
                      </p>

                      <div className="mt-7 inline-flex items-center gap-2 px-3 py-2 bg-[var(--color-bg)] border border-[var(--color-line)]">
                        <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                        <span className="font-mono text-[12px] text-[var(--color-ink)]">
                          {caso.spec}
                        </span>
                      </div>
                    </div>

                    {/* Immagine */}
                    <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
                      <div className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden bg-[var(--color-bg)] border border-[var(--color-line)] group">
                        <img
                          src={caso.image}
                          alt={caso.alt}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
