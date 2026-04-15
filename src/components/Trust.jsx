import { Reveal } from "./ui/Reveal";

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
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              src={LOGOS[0].src}
              alt={LOGOS[0].alt}
              loading="lazy"
              decoding="async"
              className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
            />
            <img
              src={LOGOS[1].src}
              alt={LOGOS[1].alt}
              loading="lazy"
              decoding="async"
              className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
            />
            <img
              src={LOGOS[2].src}
              alt={LOGOS[2].alt}
              loading="lazy"
              decoding="async"
              className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
            />
            <img
              src={LOGOS[3].src}
              alt={LOGOS[3].alt}
              loading="lazy"
              decoding="async"
              className="col-span-2 max-h-14 w-full object-contain sm:col-start-2 lg:col-span-1 lg:col-start-auto"
            />
            <img
              src={LOGOS[4].src}
              alt={LOGOS[4].alt}
              loading="lazy"
              decoding="async"
              className="col-span-2 col-start-2 max-h-14 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
