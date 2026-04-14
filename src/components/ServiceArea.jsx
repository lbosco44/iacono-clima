import { comuni } from "../data/comuni";
import { SectionTitle } from "./ui/SectionTitle";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";

export function ServiceArea() {
  return (
    <section className="section-y bg-[var(--color-bg-light)]">
      <div className="container-x">
        <SectionTitle
          eyebrow="Zona servita"
          title="Dove operiamo"
          subtitle="Raggiungiamo tutti i comuni di Siracusa e provincia entro 24 ore."
        />

        <RevealGroup
          stagger={0.03}
          className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto"
        >
          {comuni.map((c) => (
            <RevealItem key={c}>
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-[var(--color-primary)] text-sm font-semibold shadow-[var(--shadow-card)] border border-transparent hover:border-[var(--color-primary)] transition-colors">
                <Icon name="pin" size={14} stroke={2.2} />
                {c}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 text-center" delay={0.2}>
          <p className="text-[var(--color-text-muted)] mb-4 text-sm md:text-base">
            Non trovi il tuo comune? Contattaci — probabilmente ci arriviamo lo stesso.
          </p>
          <Button href="#contatti" variant="primary">
            Contattaci
            <Icon name="arrowRight" size={18} />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
