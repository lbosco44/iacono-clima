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
    <section id="marchi" className="py-20 md:py-28 bg-[var(--color-bg-light)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
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
