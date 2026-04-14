import { SectionTitle } from "./ui/SectionTitle";
import { RevealGroup, RevealItem, Reveal } from "./ui/Reveal";

const brands = [
  {
    name: "Carrier",
    logo: "/images/Carrier.png",
    since: "Dal 1915",
    text: "Oltre 100 anni di innovazione nella climatizzazione. Leader mondiale riconosciuto per affidabilità e performance in qualsiasi applicazione — dalla singola abitazione al grande impianto industriale.",
    points: ["Garanzia ufficiale", "Ricambi originali", "Tecnologia brevettata"],
  },
  {
    name: "MAXA",
    logo: "/images/maxa-logo-removebg-preview.png",
    since: "Dal 1992",
    text: "Progettazione italiana di qualità. Gamma completa per residenziale, commerciale e industriale, con soluzioni idroniche avanzate e un'attenzione artigianale ai dettagli.",
    points: ["Made in Italy", "Gamma completa", "Rapporto qualità-prezzo"],
  },
];

export function Brands() {
  return (
    <section
      id="marchi"
      className="section-y bg-[var(--color-dark)] text-white relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-x relative">
        <SectionTitle
          eyebrow="Partner ufficiali"
          title="I nostri marchi"
          subtitle="Lavoriamo solo con eccellenze del settore. Rivenditori e installatori ufficiali."
          invert
        />

        <RevealGroup stagger={0.15} className="grid md:grid-cols-2 gap-6 md:gap-8">
          {brands.map((b) => (
            <RevealItem key={b.name}>
              <article className="h-full bg-[var(--color-dark-card)] rounded-2xl p-8 md:p-10 border border-white/5 hover:border-[var(--color-primary)]/40 transition-colors">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="bg-white rounded-xl p-4 md:p-5 h-20 md:h-24 flex items-center justify-center flex-1">
                    <img
                      src={b.logo}
                      alt={`Logo ${b.name}`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span className="shrink-0 text-xs font-bold tracking-widest text-white/90 uppercase">
                    {b.since}
                  </span>
                </div>

                <div className="h-[3px] w-12 rounded-full bg-[var(--color-primary)] mb-5" />

                <h3 className="sr-only">{b.name}</h3>

                <p className="text-white/70 leading-relaxed text-[15px]">
                  {b.text}
                </p>

                <ul className="mt-6 space-y-2">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-white/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-10 text-center">
          <p className="text-white/80 font-semibold text-sm md:text-base">
            Siamo <span className="text-[var(--color-primary)]">rivenditori e installatori ufficiali</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
