import { comuni } from "../data/comuni";
import { Reveal } from "./ui/Reveal";
import { Icon } from "./ui/Icon";

export function ServiceArea() {
  return (
    <section className="py-12 md:py-16 bg-[var(--color-bg-light)] border-y border-[var(--color-border)]">
      <div className="container-narrow">
        <Reveal className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
          <div className="shrink-0 md:w-64">
            <div className="flex items-center gap-2 text-[var(--color-primary)] text-xs font-bold tracking-[0.2em] uppercase">
              <Icon name="pin" size={14} stroke={2.2} />
              Zona servita
            </div>
            <div className="mt-2 font-extrabold text-[var(--color-dark)] text-lg md:text-xl leading-tight">
              Siracusa e<br className="hidden md:block" /> provincia — 24h
            </div>
          </div>

          <ul className="flex flex-wrap gap-2 flex-1">
            {comuni.map((c) => (
              <li key={c}>
                <span className="inline-block px-3 py-1.5 rounded-full bg-white border border-[var(--color-border)] text-[var(--color-dark)] text-xs md:text-sm font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">
                  {c}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
