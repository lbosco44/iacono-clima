import { ArrowRight } from "lucide-react";
import { sistemi } from "@/data/sistemi";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BrandsStrip } from "@/components/BrandsStrip";

export function ISistemi() {
  return (
    <section id="i-sistemi" className="bg-[var(--color-bg-warm)] overflow-hidden">
      {/* Header sezione */}
      <div className="container-x pt-24 lg:pt-36 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-12">
          <div className="lg:col-span-4">
            <SectionLabel index="02" label="I Sistemi" />
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display font-bold text-[2.5rem] lg:text-[4rem] xl:text-[5rem] leading-[1.0] tracking-[-0.03em] text-[var(--color-ink)]">
              Cinque categorie.{" "}
              <span className="text-[var(--color-accent)]">Una sola filosofia</span>:{" "}
              <em className="not-italic text-[var(--color-mute)]">durata</em>.
            </h2>
          </div>
        </div>
      </div>

      {/* Lista categorie — grande, editoriale */}
      <div className="container-x">
        <div className="border-t border-[var(--color-line-strong)]">
          {sistemi.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <a
                href="#briefing"
                className="group block border-b border-[var(--color-line)] py-10 lg:py-14 hover:bg-white/60 transition-colors duration-300"
              >
                <div className="grid lg:grid-cols-12 gap-y-5 lg:gap-x-12 items-center">
                  {/* Numero */}
                  <div className="lg:col-span-1">
                    <span className="font-mono text-[11px] text-[var(--color-mute)] tracking-[0.16em]">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Tag */}
                  <div className="lg:col-span-2">
                    <Tag variant={s.id}>{s.tag}</Tag>
                  </div>

                  {/* Titolo */}
                  <div className="lg:col-span-5">
                    <h3 className="font-display font-bold text-[1.65rem] lg:text-[2.25rem] xl:text-[2.75rem] leading-[1.05] tracking-tight text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                      {s.title}
                    </h3>
                  </div>

                  {/* Descrizione */}
                  <div className="lg:col-span-3">
                    <p className="text-[14.5px] leading-relaxed text-[var(--color-mute)]">
                      {s.description}
                    </p>
                    <div className="mt-3 font-mono text-[11px] text-[var(--color-mute)] tracking-wide">
                      {s.brands}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex lg:col-span-1 justify-end">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-line)] text-[var(--color-mute)] group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] group-hover:bg-[var(--color-accent-soft)] transition-all duration-300">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Certificazioni e brand strip */}
      <div className="container-x pt-16 lg:pt-20 pb-24 lg:pb-32">
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
