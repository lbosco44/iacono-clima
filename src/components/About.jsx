import { SectionTitle } from "./ui/SectionTitle";
import { Reveal } from "./ui/Reveal";
import { Badge } from "./ui/Badge";
import { ImagePlaceholder } from "./ui/ImagePlaceholder";
import { Icon } from "./ui/Icon";

export function About() {
  return (
    <section
      id="chi-siamo"
      className="section-y bg-[var(--color-bg-light)] relative overflow-hidden"
    >
      <div
        className="absolute -left-32 top-40 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal className="order-2 md:order-1">
            <ImagePlaceholder
              name="chi-siamo-team.png"
              alt="Il team di Iacono Clima nel showroom di Via Filisto"
              aspect="4 / 3"
              rounded="rounded-2xl"
              className="shadow-[var(--shadow-card-hover)]"
            />
          </Reveal>

          <Reveal className="order-1 md:order-2" delay={0.1}>
            <span className="eyebrow">Chi siamo</span>
            <h2
              className="font-black leading-tight text-[var(--color-dark)]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Oltre vent'anni <br className="hidden md:block" />
              <span className="text-[var(--color-primary)]">al vostro fianco.</span>
            </h2>

            <div className="mt-6 space-y-4 text-[var(--color-text-muted)] text-[15px] md:text-base leading-relaxed">
              <p>
                Iacono Clima è presente nel settore della climatizzazione a Siracusa
                da oltre venti anni. La nostra garanzia di successo è la cortesia del
                personale, la professionalità e l'assistenza.
              </p>
              <p>
                Operiamo in tutta Siracusa e provincia con personale qualificato, e
                nel nostro showroom potete vedere dal vivo i prodotti prima di
                scegliere.
              </p>
              <p className="text-[var(--color-text)] font-semibold">
                Il nostro servizio è chiavi in mano: dalla consulenza iniziale
                all'installazione finale, ci occupiamo noi di tutto.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Badge icon={<Icon name="shield" size={14} stroke={2.2} />}>
                Certificati F-GAS
              </Badge>
              <Badge icon={<Icon name="pin" size={14} stroke={2.2} />}>
                Showroom a Siracusa
              </Badge>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
