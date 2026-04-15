import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { Icon } from "../ui/Icon";
import { cn } from "../../lib/cn";

const BRAND_COLORS = {
  CARRIER: "text-[var(--color-primary)]",
  MAXA: "text-[var(--color-primary)]",
};

export function ProductCategory({ category, index }) {
  const isAlt = index % 2 === 1;

  return (
    <section
      id={category.id}
      className={cn(
        "section-cinematic relative",
        isAlt ? "bg-[var(--color-bg-light)]" : "bg-white"
      )}
    >
      <div className="container-narrow">
        <Reveal className="grid md:grid-cols-[1fr_auto] md:items-end gap-6 md:gap-12 mb-10 md:mb-14">
          <div>
            <span className="eyebrow">{category.eyebrow}</span>
            <h2
              className="h-display max-w-2xl"
              style={{ fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)" }}
            >
              {category.title}
            </h2>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <span
              className={cn(
                "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-accent)] text-xs font-bold tracking-[0.18em] uppercase",
                BRAND_COLORS[category.brand] || "text-[var(--color-primary)]"
              )}
            >
              <Icon name="star" size={14} stroke={2.2} />
              {category.brand}
            </span>
            <p className="text-[var(--color-text-muted)] max-w-md text-sm md:text-base leading-relaxed">
              {category.description}
            </p>
          </div>
        </Reveal>

        <RevealGroup stagger={0.06} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {category.products.map((p) => (
            <RevealItem key={p.name}>
              <ProductCard product={p} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <article className="group h-full bg-white rounded-2xl p-6 md:p-7 border border-[var(--color-border)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--color-text-muted)]">
        {product.type}
      </div>
      <h3 className="mt-1.5 text-xl md:text-2xl font-extrabold text-[var(--color-dark)] leading-tight">
        {product.name}
      </h3>
      <p className="mt-2 text-[var(--color-text-muted)] text-sm md:text-[15px] leading-relaxed">
        {product.short}
      </p>

      <ul className="mt-5 space-y-1.5">
        {product.specs.map((s) => (
          <li
            key={s}
            className="flex items-start gap-2 text-xs md:text-sm text-[var(--color-dark)]/85"
          >
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"
              aria-hidden="true"
            />
            {s}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6 border-t border-[var(--color-border)] mt-6">
        {product.pdf ? (
          <a
            href={product.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
          >
            <Icon name="clipboard" size={16} stroke={2.2} />
            Scarica catalogo
            <Icon name="arrowRight" size={14} stroke={2.4} />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-muted)]">
            <Icon name="phone" size={14} stroke={2.2} />
            Scheda su richiesta
          </span>
        )}
      </div>
    </article>
  );
}
