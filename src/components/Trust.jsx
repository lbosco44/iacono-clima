import { Reveal } from "./ui/Reveal";

export function Trust() {
  return (
    <section id="marchi" className="section-cinematic bg-white">
      <div className="container-narrow">
        <Reveal className="mb-10 md:mb-14">
          <span className="eyebrow">Partner e certificazioni</span>
          <h2
            className="h-display max-w-2xl"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
          >
            Certificati F-GAS.<br />
            Rivenditori ufficiali.
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)] max-w-xl text-sm md:text-base leading-relaxed">
            Manipolare gas fluorurati è obbligatorio per legge — e solo aziende certificate possono farlo. Siamo anche rivenditori e installatori ufficiali Carrier e MAXA.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid md:grid-cols-[0.9fr_1fr_1fr] gap-4 md:gap-6 items-stretch">
            <div className="rounded-2xl bg-[var(--color-bg-light)] p-6 md:p-8 flex flex-col">
              <div className="bg-white rounded-xl p-3 h-36 md:h-44 flex items-center justify-center mb-5">
                <img
                  src="/images/certificazione-fgas.jpg"
                  alt="Certificazione F-GAS Iacono Clima"
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="mt-auto">
                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-2">
                  Certificazione
                </div>
                <h3 className="font-bold text-xl md:text-2xl text-[var(--color-dark)] leading-tight">
                  F-GAS
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  Azienda abilitata alla manipolazione dei gas fluorurati secondo Reg. UE 517/2014.
                </p>
              </div>
            </div>

            <BrandCard
              logo="/images/Carrier.png"
              name="Carrier"
              since="Dal 1915"
              text="Leader mondiale della climatizzazione. Oltre 100 anni di innovazione, garanzia ufficiale e ricambi originali."
            />
            <BrandCard
              logo="/images/maxa-logo-removebg-preview.png"
              name="MAXA"
              since="Dal 1992"
              text="Progettazione italiana di qualità. Gamma completa residenziale, commerciale e industriale."
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BrandCard({ logo, name, since, text }) {
  return (
    <div className="rounded-2xl bg-[var(--color-dark)] text-white p-6 md:p-8 flex flex-col">
      <div className="bg-white rounded-xl p-4 h-36 md:h-44 flex items-center justify-center mb-5">
        <img
          src={logo}
          alt={`Logo ${name}`}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="mt-auto">
        <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-primary-soft)] mb-2">
          {since}
        </div>
        <h3 className="font-bold text-xl md:text-2xl text-white leading-tight">
          {name}
        </h3>
        <p className="mt-2 text-sm text-white/70 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
