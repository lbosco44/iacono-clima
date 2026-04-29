import { steps } from "@/data/steps";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";

export function ComeLavoriamo() {
  return (
    <section id="come-lavoriamo" className="bg-[var(--color-bg)] section-y">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-16 lg:mb-24">
          <div className="lg:col-span-4">
            <SectionLabel index="03" label="Come lavoriamo" />
          </div>
          <div className="lg:col-span-8">
            <DisplayHeading size="md">
              Quattro passaggi.{" "}
              <span className="text-[var(--color-mute)]">Niente improvvisazione.</span>
            </DisplayHeading>
          </div>
        </div>

        <div className="space-y-24 lg:space-y-40">
          {steps.map((step, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={step.number}
                className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-8 items-center"
              >
                {/* Numero gigante */}
                <div className={`lg:col-span-3 ${reverse ? "lg:order-3" : ""}`}>
                  <Reveal direction="fade" delay={0}>
                    <div className="font-display font-bold text-[var(--color-accent-soft)] text-[7rem] sm:text-[8rem] lg:text-[12rem] xl:text-[14rem] leading-[0.85] select-none">
                      {step.number}
                    </div>
                  </Reveal>
                </div>

                {/* Testo */}
                <div className={`lg:col-span-4 ${reverse ? "lg:order-2" : ""}`}>
                  <Reveal delay={0.06}>
                    <h3 className="font-display text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-tight font-bold text-[var(--color-ink)]">
                      {step.title}
                    </h3>
                    <p className="mt-5 text-[16px] leading-relaxed text-[var(--color-mute)] max-w-md">
                      {step.description}
                    </p>
                  </Reveal>
                </div>

                {/* Immagine */}
                <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                  <Reveal direction={reverse ? "right" : "left"} delay={0.1}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] bg-[var(--color-bg-warm)] border border-[var(--color-line)]">
                      <img
                        src={step.image}
                        alt={step.alt}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-bg)] bg-[var(--color-ink)]/80 backdrop-blur px-2 py-1 rounded-[3px]">
                        {step.number} · {step.title}
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
