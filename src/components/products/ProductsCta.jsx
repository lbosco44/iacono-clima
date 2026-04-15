import { Reveal } from "../ui/Reveal";
import { Icon } from "../ui/Icon";
import { SendButton } from "../ui/SendButton";
import { site } from "../../data/site";

export function ProductsCta() {
  return (
    <section className="section-cinematic bg-white">
      <div className="container-narrow">
        <Reveal className="relative overflow-hidden rounded-3xl bg-[var(--color-bg-light)] p-8 md:p-14 text-center">
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-40 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <span className="eyebrow justify-center">Non trovi quello che cerchi?</span>
            <h2
              className="h-display mx-auto max-w-2xl"
              style={{ fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)" }}
            >
              Dicci cosa ti serve.<br />
              Scegliamo insieme.
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed">
              Non abbiamo elencato tutto: i modelli sono molti e cambiano spesso.
              Contattaci — dal sopralluogo scegliamo il prodotto giusto per i tuoi
              ambienti, budget e consumi.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <SendButton href="/#contatti">Richiedi Preventivo</SendButton>
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[var(--color-dark)] border border-[var(--color-border)] font-semibold text-sm md:text-base hover:border-[var(--color-dark)] transition-colors"
              >
                <Icon name="phone" size={16} stroke={2.4} />
                {site.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
