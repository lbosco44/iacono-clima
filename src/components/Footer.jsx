import { site } from "../data/site";
import { services } from "../data/services";
import { handleAnchorClick } from "../lib/smoothScroll";
import { Icon } from "./ui/Icon";

export function Footer() {
  const year = new Date().getFullYear();

  const sectionLinks = [
    { label: "Servizi", href: "#servizi" },
    { label: "Chi Siamo", href: "#chi-siamo" },
    { label: "Marchi", href: "#marchi" },
    { label: "Contatti", href: "#contatti" },
  ];

  return (
    <footer className="bg-[var(--color-darker)] text-white pt-16 md:pt-20 pb-8">
      <div className="container-x">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/20">
                <Icon name="snowflake" size={22} stroke={2} className="text-[var(--color-primary)]" />
              </span>
              <span className="font-black text-xl text-white">Iacono Clima</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {site.legalName}
              <br />
              {site.address.full}
            </p>
            <p className="mt-4 text-white/40 text-xs">
              Installatori certificati F-GAS — Rivenditori ufficiali Carrier e MAXA.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Servizi
            </h3>
            <ul className="space-y-2.5">
              {sectionLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={handleAnchorClick}
                    className="text-white/60 hover:text-[var(--color-primary)] transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-4 space-y-2 text-white/50 text-xs">
              {services.slice(0, 4).map((s) => (
                <li key={s.id}>• {s.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Contatti
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="flex items-center gap-2 text-white/80 hover:text-[var(--color-primary)] transition-colors text-sm"
                >
                  <Icon name="phone" size={16} stroke={2} />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-[var(--color-whatsapp)] transition-colors text-sm"
                >
                  <Icon name="whatsapp" size={16} stroke={2} />
                  WhatsApp: {site.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 text-white/80 hover:text-[var(--color-primary)] transition-colors text-sm break-all"
                >
                  <Icon name="mail" size={16} stroke={2} />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/80 text-sm">
                <Icon name="clock" size={16} stroke={2} className="mt-0.5 shrink-0" />
                <span>
                  Lun-Ven 8:30-18:00
                  <br />
                  Sabato 8:30-13:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-xs text-white/40">
          <span>
            © {year} {site.legalName}. Tutti i diritti riservati.
          </span>
          <span>
            Sede legale: {site.address.full}
          </span>
        </div>
      </div>
    </footer>
  );
}
