import { useRef } from "react";
import { useInView } from "framer-motion";
import { stats } from "../data/stats";
import { useCountUp } from "../hooks/useCountUp";
import { Reveal } from "./ui/Reveal";
import { ImagePlaceholder } from "./ui/ImagePlaceholder";

function BigStat({ stat, started }) {
  const value = useCountUp(stat.value, { duration: 2, start: started });
  return (
    <div className="grid md:grid-cols-[auto_1fr] items-baseline gap-4 md:gap-8 py-6 md:py-10 border-b border-[var(--color-border)]">
      <div
        className="text-[var(--color-primary)] font-extrabold leading-none tracking-tight"
        style={{
          fontSize: "clamp(4rem, 11vw, 9rem)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
        <span className="text-[var(--color-primary)]">{stat.suffix}</span>
      </div>
      <div className="md:pb-4">
        <div className="text-[var(--color-dark)] font-bold text-base md:text-lg">
          {stat.label}
        </div>
        {stat.sub && (
          <div className="text-[var(--color-text-muted)] text-sm mt-1">
            {stat.sub}
          </div>
        )}
      </div>
    </div>
  );
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="section-cinematic bg-white">
      <div className="container-narrow">
        <Reveal className="grid md:grid-cols-[1fr_auto] md:items-end gap-6 md:gap-12 mb-10 md:mb-16">
          <div>
            <span className="eyebrow">I nostri numeri</span>
            <h2
              className="h-display max-w-xl"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            >
              Oltre vent'anni,<br />
              al servizio del clima.
            </h2>
          </div>
          <p className="text-[var(--color-text-muted)] max-w-sm text-sm md:text-base leading-relaxed">
            Non numeri per marketing. Anni, clienti, comuni e lavori che abbiamo fatto davvero — verificabili.
          </p>
        </Reveal>

        <div>
          {stats.map((s) => (
            <BigStat key={s.label} stat={s} started={inView} />
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10 md:mt-16">
          <ImagePlaceholder
            name="installazione-01.png"
            alt="Tecnico Iacono Clima al lavoro su unità esterna"
            aspect="21 / 9"
            rounded="rounded-3xl"
          />
        </Reveal>
      </div>
    </section>
  );
}
