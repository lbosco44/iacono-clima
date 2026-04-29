import { Link } from "react-router-dom";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[--color-ink] text-[--color-bg]">
      <div className="container-x py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <div className="font-display text-3xl lg:text-4xl font-bold leading-none">
              Iacono<span className="text-[--color-accent]">.</span>Clima
            </div>
            <p className="mt-5 text-[--color-bg]/70 text-[15px] leading-relaxed max-w-md">
              Iacono Climatizzazione S.r.l. — Vent'anni di impianti fatti bene.
              Tecnici certificati F-GAS, rivenditori autorizzati Carrier e MAXA.
            </p>
            <dl className="mt-6 space-y-1.5 font-mono text-[13px] text-[--color-bg]/65">
              <div className="flex gap-3">
                <dt className="w-24 text-[--color-bg]/45">sede</dt>
                <dd>{site.address.full}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-24 text-[--color-bg]/45">p.iva</dt>
                <dd>—</dd>
              </div>
            </dl>
          </div>

          {/* Contatti */}
          <div className="lg:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-accent] mb-5">
              Contatti
            </div>
            <ul className="space-y-3 font-mono text-[13px]">
              <li>
                <span className="text-[--color-bg]/45 mr-2">tel:</span>
                <a href={`tel:${site.phoneTel}`} className="hover:text-[--color-accent] transition-colors">
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="text-[--color-bg]/45 mr-2">wa/1:</span>
                <a href={site.whatsapp1Link} target="_blank" rel="noreferrer" className="hover:text-[--color-accent] transition-colors">
                  {site.whatsapp1}
                </a>
              </li>
              <li>
                <span className="text-[--color-bg]/45 mr-2">wa/2:</span>
                <a href={site.whatsapp2Link} target="_blank" rel="noreferrer" className="hover:text-[--color-accent] transition-colors">
                  {site.whatsapp2}
                </a>
              </li>
              <li>
                <span className="text-[--color-bg]/45 mr-2">email:</span>
                <a href={`mailto:${site.email}`} className="hover:text-[--color-accent] transition-colors">
                  {site.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 font-mono text-[12px] text-[--color-bg]/55 space-y-1">
              {site.hours.map((h) => (
                <div key={h.days}>
                  <span className="text-[--color-bg]/40 mr-2">{h.days}</span>
                  {h.time}
                </div>
              ))}
            </div>
          </div>

          {/* Sezioni */}
          <div className="lg:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[--color-accent] mb-5">
              Sezioni
            </div>
            <ul className="space-y-3 font-display text-lg">
              {site.nav.map((item) =>
                item.href.startsWith("/#") ? (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="hover:text-[--color-accent] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link to={item.href} className="hover:text-[--color-accent] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-[--color-bg]/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-[11px] text-[--color-bg]/45">
          <span>© {new Date().getFullYear()} Iacono Climatizzazione S.r.l. · Siracusa</span>
          <span>Realizzato con cura.</span>
        </div>
      </div>
    </footer>
  );
}
