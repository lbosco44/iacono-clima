import { Reveal } from "./ui/Reveal";
import { BeforeAfterSlider } from "./ui/BeforeAfterSlider";
import { Icon } from "./ui/Icon";

export function BeforeAfter() {
  return (
    <section className="section-cinematic bg-white">
      <div className="container-narrow">
        <Reveal className="grid md:grid-cols-[1fr_auto] md:items-end gap-6 md:gap-12 mb-10 md:mb-14">
          <div>
            <span className="eyebrow">Prima / Dopo</span>
            <h2
              className="h-display max-w-3xl"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Come cambia<br />
              un ambiente.
            </h2>
          </div>
          <p className="text-[var(--color-text-muted)] max-w-sm text-sm md:text-base leading-relaxed">
            Trascina lo slider per vedere il "prima" e il "dopo". Installazione pulita, cavi nascosti, unità in asse con l'arredo.
          </p>
        </Reveal>

        <Reveal>
          <BeforeAfterSlider
            beforeSrc="/images/senza-clima.png"
            afterSrc="/images/con-clima.png"
            beforeAlt="Ambiente prima dell'installazione del climatizzatore"
            afterAlt="Ambiente dopo l'installazione del climatizzatore Iacono Clima"
            beforeLabel="Senza"
            afterLabel="Con clima"
            aspect="16 / 10"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-10 md:mt-12 grid md:grid-cols-3 gap-3 md:gap-4">
            {[
              { title: "Installazione pulita", text: "Cavi nascosti, staffe a bolla, canaline in tinta dove possibile." },
              { title: "Estetica curata", text: "Unità in asse con l'arredo — il clima non deve vedersi." },
              { title: "Test e consegna", text: "Collaudo davanti a te, istruzioni pratiche su uso e manutenzione." },
            ].map((f) => (
              <li
                key={f.title}
                className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-bg-light)]"
              >
                <div className="shrink-0 grid place-items-center w-8 h-8 rounded-lg bg-[var(--color-primary)] text-white">
                  <Icon name="check" size={16} stroke={2.6} />
                </div>
                <div>
                  <div className="font-bold text-[var(--color-dark)] text-sm md:text-base">
                    {f.title}
                  </div>
                  <div className="text-[var(--color-text-muted)] text-sm mt-0.5">
                    {f.text}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
