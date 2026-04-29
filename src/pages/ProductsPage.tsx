import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import { categorie, prodotti } from "@/data/prodotti";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";

export function ProductsPage() {
  useEffect(() => {
    document.title = "Prodotti — Catalogo Iacono Clima | Carrier · MAXA";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[--color-bg]">
      {/* Hero piccola */}
      <section className="pt-[68px] lg:pt-[80px] section-y border-b border-[--color-line]">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-end">
            <div className="lg:col-span-6">
              <SectionLabel index="00" label="Catalogo" />
              <DisplayHeading size="lg" className="mt-7">
                Catalogo prodotti.
              </DisplayHeading>
            </div>
            <div className="lg:col-span-6">
              <p className="text-[16px] lg:text-[17px] leading-relaxed text-[--color-mute] max-w-xl">
                Ogni scheda è disponibile in PDF: dati tecnici, dimensioni,
                consumi, classe energetica. Per scegliere il modello giusto,
                però, parte sempre da un sopralluogo.
              </p>
              <Link
                to="/#briefing"
                className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-[--color-accent] hover:gap-3 transition-all"
              >
                Apri il briefing
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categorie */}
      {categorie.map((cat, idx) => {
        const items = prodotti.filter((p) => p.categoria === cat);
        if (!items.length) return null;
        return (
          <section
            key={cat}
            className={`section-y ${idx % 2 === 1 ? "bg-[--color-bg-warm]" : "bg-[--color-bg]"}`}
          >
            <div className="container-x">
              <div className="grid lg:grid-cols-12 gap-y-6 lg:gap-x-12 mb-12 lg:mb-16">
                <div className="lg:col-span-4">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[--color-accent]">
                    / categoria 0{idx + 1}
                  </div>
                  <h2 className="mt-5 font-display text-[2rem] lg:text-[3rem] leading-tight font-bold text-[--color-ink]">
                    {cat}
                  </h2>
                </div>
                <div className="lg:col-span-8 flex items-end">
                  <p className="font-mono text-[12px] text-[--color-mute] tracking-wide">
                    {items.length} {items.length === 1 ? "modello" : "modelli"}
                  </p>
                </div>
              </div>

              <div>
                {items.map((p, i) => {
                  const reverse = i % 2 === 1;
                  return (
                    <Reveal key={p.slug}>
                      <article className="border-t border-[--color-line] py-10 lg:py-16">
                        <div className="grid lg:grid-cols-12 gap-y-6 lg:gap-x-10 items-center">
                          <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                            <div className="flex items-center gap-3 mb-4">
                              <Tag variant="neutral">{p.brand}</Tag>
                              <span className="font-mono text-[11px] text-[--color-mute] tracking-wide">
                                {p.spec}
                              </span>
                            </div>
                            <h3 className="font-display text-[1.65rem] lg:text-[2.25rem] leading-tight font-bold text-[--color-ink]">
                              {p.nome}
                            </h3>
                            <p className="mt-4 text-[15.5px] leading-relaxed text-[--color-mute] max-w-2xl">
                              {p.descrizione}
                            </p>
                            <a
                              href={p.pdf}
                              download
                              target="_blank"
                              rel="noreferrer"
                              className="mt-7 inline-flex items-center gap-2 h-12 px-5 bg-[--color-ink] text-[--color-bg] hover:bg-[--color-accent] transition-colors font-semibold rounded-[3px] text-sm"
                            >
                              <Download size={16} strokeWidth={2.5} />
                              Scarica scheda PDF
                            </a>
                          </div>

                          {p.image ? (
                            <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                              <div className="aspect-[4/3] bg-[--color-bg] border border-[--color-line] flex items-center justify-center p-6 lg:p-10">
                                <img
                                  src={p.image}
                                  alt={p.nome}
                                  loading="lazy"
                                  className="max-w-full max-h-full object-contain"
                                />
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA finale */}
      <section className="bg-[--color-ink] text-[--color-bg] py-20 lg:py-32">
        <div className="container-narrow text-center">
          <SectionLabel index="∞" label="Briefing" invert className="justify-center" />
          <h2 className="mt-7 font-display text-[2rem] lg:text-[3.5rem] leading-tight font-bold">
            Hai bisogno di aiuto a scegliere?
          </h2>
          <p className="mt-5 text-[--color-bg]/70 text-lg max-w-xl mx-auto">
            Il modello giusto dipende dai metri cubi, dall'isolamento e dall'uso reale.
            Parlane con noi: sopralluogo gratuito.
          </p>
          <Link
            to="/#briefing"
            className="mt-9 inline-flex items-center gap-2 h-14 px-7 bg-[--color-accent] text-white font-semibold rounded-[3px] hover:bg-[--color-accent-deep] transition-colors"
          >
            Apri il briefing
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </main>
  );
}
