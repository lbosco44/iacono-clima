import { useRef } from "react";
import { testimonials } from "../data/testimonials";
import { Reveal } from "./ui/Reveal";
import { Icon } from "./ui/Icon";

function Stars({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} stelle su 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? "var(--color-star)" : "transparent"}
          stroke="var(--color-star)"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="m12 3 2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 18l-5.8 3 1.1-6.5L2.5 9.9 9.1 9z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const w = el.clientWidth;
    el.scrollBy({ left: dir * (w * 0.8), behavior: "smooth" });
  };

  return (
    <section className="section-cinematic bg-[var(--color-dark)] text-white overflow-hidden">
      <div className="container-narrow">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <span className="eyebrow !text-[var(--color-primary-soft)]">Testimonianze</span>
            <h2
              className="font-extrabold text-white leading-[1.05] tracking-tight max-w-xl"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            >
              Cosa dicono<br />
              i nostri clienti.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Testimonianza precedente"
              className="grid place-items-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/15 text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Testimonianza successiva"
              className="grid place-items-center w-11 h-11 rounded-full bg-white text-[var(--color-dark)] hover:bg-[var(--color-accent)] transition-colors"
            >
              <Icon name="arrowRight" size={16} stroke={2.4} />
            </button>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div
          ref={trackRef}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pl-5 md:pl-[max(2.5rem,calc((100vw-1120px)/2+2.5rem))] pr-5 md:pr-[max(2.5rem,calc((100vw-1120px)/2+2.5rem))] pb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[420px] bg-[var(--color-dark-card)] border border-white/10 rounded-2xl p-6 md:p-8"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[var(--color-primary)] mb-4"
                aria-hidden="true"
              >
                <path d="M7 7h3v7H5c0-4 1-6 2-7zm9 0h3v7h-5c0-4 1-6 2-7z" />
              </svg>

              <Stars count={t.stars} />

              <p className="mt-4 text-white/85 leading-relaxed text-sm md:text-base min-h-[6.5rem]">
                {t.text}
              </p>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full grid place-items-center bg-[var(--color-primary)] text-white font-bold text-sm"
                  aria-hidden="true"
                >
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-white/55">{t.city}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
