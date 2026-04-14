import { site } from "../data/site";
import { handleAnchorClick } from "../lib/smoothScroll";
import { Icon } from "./ui/Icon";

export function Footer() {
  const year = new Date().getFullYear();

  const cols = [
    {
      title: "Sito",
      links: [
        { label: "Servizi", href: "#servizi" },
        { label: "Marchi", href: "#marchi" },
        { label: "Contatti", href: "#contatti" },
      ],
    },
    {
      title: "Contatti",
      links: [
        { label: site.phone, href: `tel:${site.phoneTel}` },
        { label: `WhatsApp: ${site.whatsapp}`, href: site.whatsappLink, external: true },
        { label: site.email, href: `mailto:${site.email}` },
      ],
    },
    {
      title: "Sede",
      links: [
        { label: site.address.full, href: "https://maps.google.com/?q=Via+Filisto+71,+Siracusa", external: true },
        { label: "Lun–Ven 8:30–18:00", static: true },
        { label: "Sabato 8:30–13:00", static: true },
      ],
    },
  ];

  return (
    <footer className="bg-[var(--color-darker)] text-white pt-16 md:pt-24">
      <div className="container-narrow">
        <div className="grid md:grid-cols-[1.1fr_repeat(3,0.9fr)] gap-10 md:gap-12 pb-14 md:pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="grid place-items-center h-11 w-11 rounded-xl bg-white p-1.5">
                <img
                  src="/images/logo-removebg-preview.png"
                  alt="Iacono Clima"
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="font-extrabold text-xl text-white">Iacono Clima</span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Installatori certificati F-GAS a Siracusa e provincia. Rivenditori ufficiali Carrier e MAXA.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 mb-5">
                {c.title}
              </h3>
              <ul className="space-y-3">
                {c.links.map((l, idx) =>
                  l.static ? (
                    <li key={idx} className="text-white/70 text-sm">
                      {l.label}
                    </li>
                  ) : (
                    <li key={idx}>
                      <a
                        href={l.href}
                        target={l.external ? "_blank" : undefined}
                        rel={l.external ? "noopener noreferrer" : undefined}
                        onClick={l.href?.startsWith("#") ? handleAnchorClick : undefined}
                        className="text-white/70 hover:text-white text-sm transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-9 w-9 rounded-lg bg-white p-1">
              <img
                src="/images/logo-removebg-preview.png"
                alt=""
                className="h-full w-full object-contain"
                aria-hidden="true"
              />
            </span>
            <span
              className="font-extrabold tracking-tight text-white"
              style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
            >
              Iacono Clima.
            </span>
          </div>

          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[var(--color-dark)] font-semibold text-sm hover:bg-[var(--color-primary-soft)] transition-colors"
          >
            <Icon name="whatsapp" size={18} />
            Scrivici su WhatsApp
          </a>
        </div>

        <div className="py-5 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-xs text-white/40">
          <span>© {year} {site.legalName}. Tutti i diritti riservati.</span>
          <span>{site.address.full}</span>
        </div>
      </div>
    </footer>
  );
}
