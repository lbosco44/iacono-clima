import { Link } from "react-router-dom";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-bg)]">
      <div className="container-x py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <div
              className="font-display text-3xl lg:text-4xl font-bold leading-none"
              aria-label="Iacono Clima"
            >
              Iacono<span className="text-[var(--color-accent)]" aria-hidden="true">.</span>Clima
            </div>
            <p className="mt-5 text-[var(--color-bg)]/80 text-[15px] leading-relaxed max-w-md">
              Iacono Climatizzazione S.r.l. — Vent'anni di impianti fatti bene.
              Tecnici certificati F-GAS, rivenditori autorizzati Carrier e MAXA.
            </p>
            <address className="not-italic mt-6">
              <dl className="font-mono text-[13px] space-y-1.5">
                <div className="flex gap-3">
                  <dt className="w-24 text-[var(--color-bg)]/60">Sede</dt>
                  <dd>{site.address.full}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 text-[var(--color-bg)]/60">P.IVA</dt>
                  <dd>—</dd>
                </div>
              </dl>
            </address>
          </div>

          {/* Contatti */}
          <div className="lg:col-span-3">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-accent)] mb-5">
              Contatti
            </h2>
            <address className="not-italic">
              <ul className="space-y-3 font-mono text-[13px]">
                <li>
                  <span className="text-[var(--color-bg)]/60 mr-2">Tel:</span>
                  <a
                    href={`tel:${site.phoneTel}`}
                    aria-label={`Chiama al numero ${site.phone}`}
                    className="hover:text-[var(--color-accent)] transition-colors"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <span className="text-[var(--color-bg)]/60 mr-2">WhatsApp 1:</span>
                  <a
                    href={site.whatsapp1Link}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`Apri WhatsApp con il numero ${site.whatsapp1}`}
                    className="hover:text-[var(--color-accent)] transition-colors"
                  >
                    {site.whatsapp1}
                  </a>
                </li>
                <li>
                  <span className="text-[var(--color-bg)]/60 mr-2">WhatsApp 2:</span>
                  <a
                    href={site.whatsapp2Link}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`Apri WhatsApp con il numero ${site.whatsapp2}`}
                    className="hover:text-[var(--color-accent)] transition-colors"
                  >
                    {site.whatsapp2}
                  </a>
                </li>
                <li>
                  <span className="text-[var(--color-bg)]/60 mr-2">Email:</span>
                  <a
                    href={`mailto:${site.email}`}
                    className="hover:text-[var(--color-accent)] transition-colors"
                  >
                    {site.email}
                  </a>
                </li>
              </ul>
            </address>

            <dl className="mt-6 font-mono text-[12px] space-y-1">
              {site.hours.map((h) => (
                <div key={h.days} className="flex gap-2">
                  <dt className="text-[var(--color-bg)]/60">{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Sezioni */}
          <nav aria-label="Sezioni del sito" className="lg:col-span-4">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-accent)] mb-5">
              Sezioni
            </h2>
            <ul className="space-y-3 font-display text-lg">
              {site.nav.map((item) =>
                item.href.startsWith("/#") ? (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="hover:text-[var(--color-accent)] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link to={item.href} className="hover:text-[var(--color-accent)] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>

        <div className="mt-16 pt-6 border-t border-[var(--color-bg)]/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-[11px] text-[var(--color-bg)]/60">
          <span>© {new Date().getFullYear()} Iacono Climatizzazione S.r.l. · Siracusa</span>
          <span>Realizzato con cura.</span>
        </div>
      </div>
    </footer>
  );
}
