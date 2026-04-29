import { ArrowUpRight } from "lucide-react";
import { sistemi, sistemiManifesto, type Sistema } from "@/data/sistemi";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { BrandsStrip } from "@/components/BrandsStrip";

export function ISistemi() {
  return (
    <section id="i-sistemi" className="bg-[--color-bg-warm] section-y">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-14 lg:mb-20">
          <div className="lg:col-span-4">
            <SectionLabel index="02" label="I Sistemi" />
          </div>
          <div className="lg:col-span-8">
            <DisplayHeading size="md">
              Cinque categorie. Una sola filosofia: <span className="text-[--color-accent]">durata</span>.
            </DisplayHeading>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[--color-line]">
          {sistemi.slice(0, 2).map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <SistemaCard sistema={s} />
            </Reveal>
          ))}

          {/* Manifesto card al posto della 3a */}
          <Reveal delay={0.1}>
            <ManifestoCard />
          </Reveal>

          {sistemi.slice(2).map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <SistemaCard sistema={s} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 lg:mt-20">
          <BrandsStrip />
        </div>
      </div>
    </section>
  );
}

function SistemaCard({ sistema }: { sistema: Sistema }) {
  return (
    <a
      href="#briefing"
      className="group relative block h-full bg-[--color-bg] hover:bg-white p-7 lg:p-9 transition-all duration-300"
    >
      <Tag variant={sistema.id} className="mb-7 group-hover:bg-[--color-accent] group-hover:text-white transition-colors">
        {sistema.tag}
      </Tag>

      <h3 className="font-display text-[1.5rem] lg:text-[1.75rem] leading-[1.1] tracking-tight text-[--color-ink] font-bold">
        {sistema.title}
      </h3>

      <p className="mt-4 text-[14.5px] leading-relaxed text-[--color-mute] min-h-[5rem]">
        {sistema.description}
      </p>

      <div className="mt-7 pt-5 border-t border-[--color-line] flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[--color-mute]">
          {sistema.brands}
        </span>
        <span className="inline-flex items-center gap-1 font-mono text-[12px] text-[--color-accent] group-hover:gap-2 transition-all">
          Sopralluogo
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>

      <span
        aria-hidden
        className="absolute inset-0 border border-transparent group-hover:border-[--color-ink] transition-colors duration-300 pointer-events-none"
      />
    </a>
  );
}

function ManifestoCard() {
  return (
    <div className="h-full bg-[--color-ink] text-[--color-bg] p-7 lg:p-9 relative overflow-hidden">
      <Tag variant="invert" className="mb-7">
        ◆ filosofia
      </Tag>
      <pre className="font-mono text-[12.5px] lg:text-[13.5px] leading-[1.85] text-[--color-bg]/80 whitespace-pre-wrap break-words">
        {sistemiManifesto}
      </pre>
      <div
        aria-hidden
        className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-[--color-accent]/15 blur-3xl pointer-events-none"
      />
    </div>
  );
}
