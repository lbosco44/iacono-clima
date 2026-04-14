import { services } from "../data/services";
import { SectionTitle } from "./ui/SectionTitle";
import { RevealGroup, RevealItem } from "./ui/Reveal";
import { Icon } from "./ui/Icon";

export function Services() {
  return (
    <section
      id="servizi"
      className="section-y bg-[var(--color-bg-light)] relative"
    >
      <div className="container-x">
        <SectionTitle
          eyebrow="I nostri servizi"
          title="Dal residenziale all'industriale"
          subtitle="Dalla piccola abitazione al centro commerciale — installiamo il clima giusto per te."
        />

        <RevealGroup
          stagger={0.08}
          className="grid md:grid-cols-2 gap-5 md:gap-6"
        >
          {services.map((s) => (
            <RevealItem key={s.id}>
              <article className="group relative h-full bg-white rounded-2xl p-6 md:p-7 border-l-4 border-[var(--color-primary)] shadow-[var(--shadow-card)] transition-all duration-[250ms] hover:-translate-y-1.5 hover:shadow-[var(--shadow-card-hover)]">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 grid place-items-center w-12 h-12 rounded-xl bg-[var(--color-accent)] text-[var(--color-primary)] transition-transform duration-300 group-hover:scale-110">
                    <Icon name={s.icon} size={24} stroke={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-extrabold text-[var(--color-dark)]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[var(--color-text-muted)] text-[15px] leading-relaxed">
                      {s.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase text-[var(--color-primary)]">
                      <Icon name="check" size={14} stroke={2.5} />
                      {s.tech}
                    </div>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
