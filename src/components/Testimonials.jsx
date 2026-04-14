import { testimonials } from "../data/testimonials";
import { SectionTitle } from "./ui/SectionTitle";
import { RevealGroup, RevealItem, Reveal } from "./ui/Reveal";

function Stars({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} stelle su 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i < count ? "var(--color-star)" : "transparent"}
          stroke="var(--color-star)"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <path d="m12 3 2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 18l-5.8 3 1.1-6.5L2.5 9.9 9.1 9z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <SectionTitle
          eyebrow="Testimonianze"
          title="Cosa dicono i clienti"
          subtitle="Lavori fatti, persone soddisfatte. Una manciata di voci tra tante."
        />

        <RevealGroup stagger={0.12} className="grid md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <RevealItem key={i}>
              <article className="relative h-full bg-white rounded-2xl p-7 md:p-8 border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]">
                <span
                  className="absolute -top-3 left-6 text-[var(--color-primary)] text-6xl font-black leading-none select-none"
                  aria-hidden="true"
                >
                  “
                </span>
                <Stars count={t.stars} />
                <p className="mt-4 text-[var(--color-text)] italic leading-relaxed text-[15px]">
                  {t.text}
                </p>
                <div className="mt-6 pt-5 border-t border-[var(--color-border)]">
                  <div className="font-bold text-[var(--color-dark)]">{t.name}</div>
                  <div className="text-sm text-[var(--color-text-muted)]">{t.city}</div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-10 text-center" delay={0.2}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent)] text-[var(--color-primary-dark)] text-xs md:text-sm font-bold">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="m12 3 2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 18l-5.8 3 1.1-6.5L2.5 9.9 9.1 9z" />
            </svg>
            Recensioni reali dei nostri clienti
          </span>
        </Reveal>
      </div>
    </section>
  );
}
