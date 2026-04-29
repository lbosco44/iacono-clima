import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import { categorie, prodotti } from "@/data/prodotti";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";

const BASE_URL = "https://www.iaconoclim.it";

function injectItemListSchema() {
  const existing = document.getElementById("ld-products");
  if (existing) existing.remove();
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Catalogo climatizzatori Iacono Clima — Siracusa",
    "description": "Climatizzatori residenziali e commerciali installati a Siracusa: Carrier, MAXA, Olimpia Splendid. Monosplit, multisplit, cassetta, VRF, monoblocco, idronica.",
    "url": `${BASE_URL}/prodotti`,
    "numberOfItems": prodotti.length,
    "itemListElement": prodotti.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "@id": `${BASE_URL}/prodotti#${p.slug}`,
        "name": p.nome,
        "description": p.descrizione,
        "brand": { "@type": "Brand", "name": p.brand },
        "category": p.categoria,
        ...(p.image ? { "image": `${BASE_URL}${p.image}` } : {}),
        "offers": {
          "@type": "Offer",
          "seller": { "@id": `${BASE_URL}/#business` },
          "availability": "https://schema.org/InStock",
          "areaServed": { "@type": "AdministrativeArea", "name": "Siracusa" },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "EUR",
            "description": "Prezzo su preventivo dopo sopralluogo gratuito"
          }
        }
      }
    }))
  };
  const script = document.createElement("script");
  script.id = "ld-products";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

function removeItemListSchema() {
  document.getElementById("ld-products")?.remove();
}

export function ProductsPage() {
  useEffect(() => {
    document.title = "Catalogo Climatizzatori Siracusa — Iacono Clima | Carrier · MAXA";
    window.scrollTo(0, 0);
    injectItemListSchema();
    return () => removeItemListSchema();
  }, []);

  return (
    <main id="main-content" tabIndex={-1} className="bg-[var(--color-bg)]">
      {/* Hero piccola */}
      <section
        aria-labelledby="prodotti-heading"
        className="pt-[68px] lg:pt-[80px] section-y border-b border-[var(--color-line)]"
      >
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-end">
            <div className="lg:col-span-6">
              <SectionLabel index="00" label="Catalogo" />
              <DisplayHeading id="prodotti-heading" size="lg" className="mt-7">
                Catalogo prodotti.
              </DisplayHeading>
            </div>
            <div className="lg:col-span-6">
              <p className="text-[16px] lg:text-[17px] leading-relaxed text-[var(--color-mute)] max-w-xl">
                Ogni scheda è disponibile in PDF: dati tecnici, dimensioni,
                consumi, classe energetica. Per scegliere il modello giusto,
                però, parte sempre da un sopralluogo.
              </p>
              <Link
                to="/#briefing"
                className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--color-accent)] hover:gap-3 transition-all"
              >
                Apri il briefing
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categorie */}
      {categorie.map((cat, idx) => {
        const items = prodotti.filter((p) => p.categoria === cat);
        if (!items.length) return null;
        const headingId = `cat-heading-${idx}`;
        return (
          <section
            key={cat}
            aria-labelledby={headingId}
            className={`section-y ${idx % 2 === 1 ? "bg-[var(--color-bg-warm)]" : "bg-[var(--color-bg)]"}`}
          >
            <div className="container-x">
              <div className="grid lg:grid-cols-12 gap-y-6 lg:gap-x-12 mb-12 lg:mb-16">
                <div className="lg:col-span-4">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    / categoria 0{idx + 1}
                  </div>
                  <h2
                    id={headingId}
                    className="mt-5 font-display text-[2rem] lg:text-[3rem] leading-tight font-bold text-[var(--color-ink)]"
                  >
                    {cat}
                  </h2>
                </div>
                <div className="lg:col-span-8 flex items-end">
                  <p className="font-mono text-[12px] text-[var(--color-mute)] tracking-wide">
                    {items.length} {items.length === 1 ? "modello" : "modelli"}
                  </p>
                </div>
              </div>

              <div>
                {items.map((p, i) => {
                  const reverse = i % 2 === 1;
                  return (
                    <Reveal key={p.slug}>
                      <article id={p.slug} aria-label={p.nome} className="border-t border-[var(--color-line)] py-10 lg:py-16">
                        <div className="grid lg:grid-cols-12 gap-y-6 lg:gap-x-10 items-center">
                          <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                            <div className="flex items-center gap-3 mb-4">
                              <Tag variant="neutral">{p.brand}</Tag>
                              <span className="font-mono text-[11px] text-[var(--color-mute)] tracking-wide">
                                {p.spec}
                              </span>
                            </div>
                            <h3 className="font-display text-[1.65rem] lg:text-[2.25rem] leading-tight font-bold text-[var(--color-ink)]">
                              {p.nome}
                            </h3>
                            <p className="mt-4 text-[15.5px] leading-relaxed text-[var(--color-mute)] max-w-2xl">
                              {p.descrizione}
                            </p>
                            <a
                              href={p.pdf}
                              download
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label={`Scarica scheda PDF di ${p.nome}`}
                              className="mt-7 inline-flex items-center gap-2 h-12 px-5 bg-[var(--color-ink)] text-[var(--color-bg)] hover:bg-[var(--color-accent)] transition-colors font-semibold rounded-[3px] text-sm"
                            >
                              <Download size={16} strokeWidth={2.5} aria-hidden="true" />
                              Scarica scheda PDF
                            </a>
                          </div>

                          {p.image ? (
                            <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                              <div className="aspect-[4/3] bg-[var(--color-bg)] border border-[var(--color-line)] flex items-center justify-center p-6 lg:p-10">
                                <img
                                  src={p.image}
                                  alt={`Climatizzatore ${p.nome} — ${p.brand}`}
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
      <section
        aria-labelledby="prodotti-cta-heading"
        className="bg-[var(--color-ink)] text-[var(--color-bg)] py-20 lg:py-32"
      >
        <div className="container-narrow text-center">
          <SectionLabel index="∞" label="Briefing" invert className="justify-center" />
          <h2
            id="prodotti-cta-heading"
            className="mt-7 font-display text-[2rem] lg:text-[3.5rem] leading-tight font-bold"
          >
            Hai bisogno di aiuto a scegliere?
          </h2>
          <p className="mt-5 text-[var(--color-bg)]/70 text-lg max-w-xl mx-auto">
            Il modello giusto dipende dai metri cubi, dall'isolamento e dall'uso reale.
            Parlane con noi: sopralluogo gratuito.
          </p>
          <Link
            to="/#briefing"
            className="mt-9 inline-flex items-center gap-2 h-14 px-7 bg-[var(--color-accent)] text-white font-semibold rounded-[3px] hover:bg-[var(--color-accent-deep)] transition-colors"
          >
            Apri il briefing
            <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
