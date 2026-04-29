import { casi } from "@/data/casi";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { StickyScroll, type StickyScrollItem } from "@/components/ui/StickyScroll";

const content: StickyScrollItem[] = casi.map((caso, i) => ({
  title: caso.title,
  description: (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <Tag variant={caso.nicchia}>{caso.tag}</Tag>
        <span className="font-mono text-[11px] text-[var(--color-mute)] tracking-wide">
          / caso 0{i + 1}
        </span>
      </div>
      <p className="text-[15px] leading-relaxed text-[var(--color-mute)]">
        {caso.story}
      </p>
      <div className="mt-5 inline-flex items-center gap-2 px-3 py-2 bg-[var(--color-bg-warm)] border border-[var(--color-line)]">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
        <span className="font-mono text-[12px] text-[var(--color-ink)]">{caso.spec}</span>
      </div>
    </div>
  ),
  content: (
    <img
      src={caso.image}
      alt={caso.alt}
      loading="lazy"
      className="w-full h-full object-cover"
    />
  ),
}));

export function Casi() {
  return (
    <section id="casi" aria-labelledby="casi-heading" className="bg-[var(--color-bg)] section-y">
      <div className="container-x">
        <Reveal>
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
        </Reveal>

        <StickyScroll content={content} />
      </div>
    </section>
  );
}
