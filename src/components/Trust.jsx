import { Reveal } from "./ui/Reveal";
import { LogoMarquee } from "./ui/LogoMarquee";

const LOGOS = [
  { src: "/images/Carrier.png", alt: "Carrier" },
  { src: "/images/maxa-logo-removebg-preview.png", alt: "MAXA" },
  { src: "/images/DAIKIN_logo.svg", alt: "Daikin" },
  { src: "/images/herman-saunier-duval_logo.png", alt: "Hermann Saunier Duval" },
  { src: "/images/sinclair_logo.png", alt: "Sinclair" },
];

export function Trust() {
  return (
    <section id="marchi" className="section-cinematic bg-white">
      <div className="container-narrow">
        <Reveal className="mb-10 md:mb-14">
          <span className="eyebrow">Partner e certificazioni</span>
          <h2
            className="h-display max-w-4xl"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Certificati F-GAS.<br />
            Rivenditori ufficiali.
          </h2>
          <p className="mt-5 text-[var(--color-text-muted)] max-w-2xl text-base md:text-lg leading-relaxed">
            Manipolare gas fluorurati è obbligatorio per legge — e solo aziende certificate possono farlo. Siamo anche rivenditori e installatori ufficiali Carrier e MAXA.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center bg-[var(--color-bg-light)] rounded-3xl p-6 md:p-10">
            <div className="bg-white rounded-2xl p-4 md:p-5 w-48 md:w-56 h-40 md:h-48 flex items-center justify-center mx-auto md:mx-0 shadow-[var(--shadow-card)] shrink-0">
              <img
                src="/images/certificazione-fgas.jpg"
                alt="Certificazione F-GAS Iacono Clima"
                className="max-h-full max-w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-2">
                Certificazione
              </div>
              <h3 className="font-extrabold text-3xl md:text-4xl text-[var(--color-dark)] leading-tight">
                F-GAS
              </h3>
              <p className="mt-3 text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed max-w-xl">
                Azienda abilitata alla manipolazione dei gas fluorurati secondo Reg. UE 517/2014.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-14 md:mt-20">
          <LogoMarquee logos={LOGOS} speed={32} />
        </Reveal>
      </div>
    </section>
  );
}
