import { useRef } from "react";
import { useInView } from "framer-motion";
import { stats } from "../data/stats";
import { useCountUp } from "../hooks/useCountUp";

function StatItem({ stat, started, delay }) {
  const value = useCountUp(stat.value, { duration: 2, start: started });
  return (
    <div className="text-center md:text-left" style={{ animationDelay: `${delay}s` }}>
      <div
        className="text-[var(--color-primary)] font-black leading-none"
        style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", fontVariantNumeric: "tabular-nums" }}
      >
        {value}
        <span>{stat.suffix}</span>
      </div>
      <div className="mt-3 text-white font-semibold text-base md:text-lg">
        {stat.label}
      </div>
      {stat.sub && (
        <div className="mt-1 text-white/55 text-sm">{stat.sub}</div>
      )}
    </div>
  );
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 bg-[var(--color-dark)] overflow-hidden"
      aria-label="Numeri Iacono Clima"
    >
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="container-x relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} started={inView} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
