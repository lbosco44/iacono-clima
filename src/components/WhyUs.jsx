import { reasons } from "../data/reasons";
import { SectionTitle } from "./ui/SectionTitle";
import { RevealGroup, RevealItem } from "./ui/Reveal";
import { Icon } from "./ui/Icon";

export function WhyUs() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <SectionTitle
          eyebrow="Perché sceglierci"
          title="Tre ragioni concrete"
          subtitle="Non parole — fatti verificabili che fanno la differenza sul campo."
        />

        <RevealGroup
          stagger={0.18}
          className="grid md:grid-cols-3 gap-8 md:gap-6"
        >
          {reasons.map((r) => (
            <RevealItem key={r.title}>
              <div className="relative h-full text-center md:text-left p-2 md:p-4">
                <div className="inline-grid place-items-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[var(--color-accent)] text-[var(--color-primary)] mb-5">
                  <Icon name={r.icon} size={36} stroke={1.8} />
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-[var(--color-dark)]">
                  {r.title}
                </h3>
                <p className="mt-3 text-[var(--color-text-muted)] text-[15px] leading-relaxed">
                  {r.text}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
