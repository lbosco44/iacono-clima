import { services } from "../data/services";
import { Reveal } from "./ui/Reveal";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const IMAGE_MAP = {
  residenziale: {
    src: "/images/comfort-casa.png",
    alt: "Installazione climatizzatore residenziale — casa al fresco",
  },
  commerciale: {
    src: "/images/installazione-02.png",
    alt: "Installazione climatizzatore commerciale",
  },
  manutenzione: {
    src: "/images/unita-esterna.png",
    alt: "Manutenzione unità esterna climatizzatore",
  },
};

const stickyContent = services.map((s) => {
  const img = IMAGE_MAP[s.id];
  return {
    title: s.title,
    description: s.description,
    bullets: s.bullets,
    content: img ? (
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
    ) : null,
  };
});

export function Services() {
  return (
    <section id="servizi" className="section-cinematic bg-[var(--color-bg-light)]">
      <div className="container-narrow">
        <Reveal className="grid md:grid-cols-[1fr_auto] md:items-end gap-6 md:gap-12 mb-10 md:mb-14">
          <div>
            <span className="eyebrow">I nostri servizi</span>
            <h2
              className="h-display max-w-xl"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            >
              Tutto quello che<br />
              serve al tuo clima.
            </h2>
          </div>
          <p className="text-[var(--color-text-muted)] max-w-sm text-sm md:text-base leading-relaxed">
            Scorri per scoprire cosa facciamo. Dal residenziale al commerciale, fino alla manutenzione multimarca.
          </p>
        </Reveal>

        <Reveal>
          <StickyScroll content={stickyContent} />
        </Reveal>
      </div>
    </section>
  );
}
