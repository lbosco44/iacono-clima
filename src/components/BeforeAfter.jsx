import { SectionTitle } from "./ui/SectionTitle";
import { Reveal } from "./ui/Reveal";
import { BeforeAfterSlider } from "./ui/BeforeAfterSlider";
import { Icon } from "./ui/Icon";

export function BeforeAfter() {
  return (
    <section className="section-y bg-white relative overflow-hidden">
      <div
        className="absolute -right-40 top-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        <SectionTitle
          eyebrow="Prima / Dopo"
          title="Come cambia un ambiente"
          subtitle="Trascina lo slider per vedere la differenza. Installazione pulita, estetica curata, cavi nascosti."
        />

        <Reveal>
          <BeforeAfterSlider
            beforeSrc="/images/senza-clima.png"
            afterSrc="/images/con-clima.png"
            beforeAlt="Salotto prima dell'installazione del climatizzatore"
            afterAlt="Salotto dopo l'installazione del climatizzatore Iacono Clima"
            beforeLabel="Senza"
            afterLabel="Con clima"
            aspect="16 / 10"
            className="max-w-5xl mx-auto"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="mt-10 grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: "check",
                title: "Installazione pulita",
                text: "Nessun cavo a vista, staffe a bolla, canaline nascoste dove possibile.",
              },
              {
                icon: "check",
                title: "Estetica curata",
                text: "Unità posizionate in asse con l'arredo — il clima non deve vedersi.",
              },
              {
                icon: "check",
                title: "Test e consegna",
                text: "Collaudo davanti a te, istruzioni pratiche su uso e manutenzione.",
              },
            ].map((f) => (
              <li
                key={f.title}
                className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-bg-light)]"
              >
                <div className="shrink-0 grid place-items-center w-8 h-8 rounded-lg bg-[var(--color-primary)] text-white">
                  <Icon name={f.icon} size={16} stroke={2.6} />
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
