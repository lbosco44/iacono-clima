import { Reveal } from "../ui/Reveal";
import { Icon } from "../ui/Icon";

const benefits = [
  {
    icon: "shield",
    title: "Garanzia ufficiale MAXA",
    text: "Tutti i prodotti MAXA che installiamo sono coperti dalla garanzia ufficiale del produttore, gestita direttamente da noi.",
  },
  {
    icon: "tool",
    title: "Ricambi originali",
    text: "Accesso diretto al magazzino ricambi MAXA: sostituzioni rapide con componenti originali, non compatibili.",
  },
  {
    icon: "check",
    title: "Installazione certificata",
    text: "L'installazione eseguita dai nostri tecnici F-GAS non invalida mai la garanzia del produttore — anzi, la attiva correttamente.",
  },
];

export function MaxaWarranty() {
  return (
    <section className="section-cinematic bg-[var(--color-dark)] text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, var(--color-primary) 1px, transparent 1.5px), radial-gradient(circle at 80% 70%, var(--color-primary) 1px, transparent 1.5px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-narrow relative">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <span className="eyebrow !text-[var(--color-primary-soft)]">
              Garanzia & assistenza
            </span>
            <h2
              className="font-extrabold text-white leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Garanzia <span className="text-[var(--color-primary-soft)]">MAXA</span>,<br />
              senza sorprese.
            </h2>
            <p className="mt-5 text-white/75 max-w-md text-sm md:text-base leading-relaxed">
              Siamo rivenditori e installatori ufficiali MAXA. Ogni prodotto che
              installiamo è coperto dalla garanzia del produttore, che attiviamo noi
              al collaudo — e che gestiamo in autonomia se serve un intervento.
            </p>

            <div className="mt-8 flex items-start gap-4 rounded-2xl bg-white/5 border border-white/10 p-5">
              <div className="shrink-0 grid place-items-center w-11 h-11 rounded-xl bg-[var(--color-primary)] text-white">
                <Icon name="shield" size={22} stroke={2} />
              </div>
              <div>
                <div className="font-bold text-white">Dubbi sulla copertura?</div>
                <div className="mt-1 text-white/70 text-sm leading-relaxed">
                  Chiamaci o scrivici — ti diciamo subito cosa copre la garanzia
                  del tuo modello e cosa rientra nell'assistenza ordinaria.
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="grid gap-3 md:gap-4">
              {benefits.map((b) => (
                <li
                  key={b.title}
                  className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-[var(--color-dark-card)] border border-white/5 hover:border-[var(--color-primary)]/40 transition-colors"
                >
                  <div className="shrink-0 grid place-items-center w-11 h-11 rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary-soft)]">
                    <Icon name={b.icon} size={20} stroke={2} />
                  </div>
                  <div>
                    <div className="font-bold text-white text-base md:text-lg">
                      {b.title}
                    </div>
                    <div className="mt-1 text-white/65 text-sm leading-relaxed">
                      {b.text}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
