import { useRef } from "react";
import { useInView } from "framer-motion";
import { stats } from "../data/stats";
import { useCountUp } from "../hooks/useCountUp";
import { Reveal } from "./ui/Reveal";
import { ImagePlaceholder } from "./ui/ImagePlaceholder";

function StatItem({ stat, started }) {
  const value = useCountUp(stat.value, { duration: 2, start: started });
  return (
    <div className="flex flex-col items-start">
      <div
        className="text-[var(--color-primary)] font-extrabold leading-none tracking-tight"
        style={{
          fontSize: "clamp(3rem, 6vw, 5.5rem)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
        <span>{stat.suffix}</span>
      </div>
      <div className="mt-3 md:mt-4 text-[var(--color-dark)] font-bold text-sm md:text-base leading-tight">
        {stat.label}
      </div>
      {stat.sub && (
        <div className="text-[var(--color-text-muted)] text-xs md:text-sm mt-0.5">
          {stat.sub}
        </div>
      )}
    </div>
  );
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="section-cinematic bg-white">
      <div className="container-narrow">
        <Reveal className="grid md:grid-cols-[1fr_auto] md:items-end gap-6 md:gap-12 mb-10 md:mb-14">
          <div>
            <span className="eyebrow">I nostri numeri</span>
            <h2
              className="h-display max-w-2xl"
              style={{ fontSize: "clamp(1.875rem, 4vw, 3.125rem)" }}
            >
              Oltre vent'anni,<br />
              al servizio del clima.
            </h2>
          </div>
          <p className="text-[var(--color-text-muted)] max-w-md text-lg md:text-2xl leading-snug">
            Non numeri per marketing. Anni, clienti, comuni e lavori che abbiamo fatto davvero — verificabili.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-10 pt-6 md:pt-8 border-t border-[var(--color-border)]">
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} started={inView} />
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
