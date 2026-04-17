import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { Icon } from "../ui/Icon";
import { cn } from "../../lib/cn";

const BRAND_COLORS = {
  CARRIER: "text-[var(--color-primary)]",
  MAXA: "text-[var(--color-primary)]",
};

export function ProductCategory({ category, index }) {
  const isAlt = index % 2 === 1;
  const watermark = category.id.toUpperCase();

  return (
    <section
      id={category.id}
      className={cn(
        "section-cinematic relative overflow-hidden",
        isAlt ? "bg-[var(--color-bg-light)]" : "bg-white"
      )}
      style={{ scrollMarginTop: "8rem" }}
    >
      {/* Giant transparent watermark */}
      <div
        className="pointer-events-none absolute inset-x-0 top-2 md:top-4 flex justify-center select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-black uppercase tracking-tighter leading-[0.85] text-[var(--color-primary)]/[0.07] whitespace-nowrap"
          style={{
            fontSize: "clamp(5rem, 18vw, 16rem)",
          }}
        >
          {watermark}
        </span>
      </div>

      <div className="container-narrow relative">
        <Reveal className="grid md:grid-cols-[1fr_auto] md:items-end gap-6 md:gap-12 mb-10 md:mb-14 mt-12 md:mt-20">
          <div>
            <h2
              className="h-display max-w-2xl"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              {category.title}
            </h2>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <span
              className={cn(
                "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-accent)] text-xs font-bold tracking-[0.18em] uppercase shadow-sm",
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
    <article className="group relative h-full bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-400 flex flex-col overflow-hidden">
      <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-[var(--color-accent)] via-white to-[var(--color-bg-light)]">
        {product.image ? (
          <div
            className="absolute inset-0 flex items-center justify-center p-5"
            style={product.imageScale ? { transform: `scale(${product.imageScale})` } : undefined}
          >
            <img
              src={product.image}
              alt={`${product.name} — ${product.type}`}
              loading="lazy"
              decoding="async"
              className="max-w-full max-h-full object-contain transition-transform duration-500 ease-[var(--ease-smooth)] group-hover:scale-[1.08]"
            />
          </div>
        ) : (
          <div className="absolute inset-0 grid place-items-center text-[var(--color-primary)]/30">
            <Icon name="snowflake" size={64} stroke={1.5} />
          </div>
        )}

        <div
          className="absolute inset-0 bg-gradient-to-t from-white/0 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          aria-hidden="true"
        />

        <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold tracking-[0.14em] uppercase text-[var(--color-dark)] shadow-sm">
          {product.type}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-5 md:p-6">
        <h3 className="text-xl md:text-2xl font-extrabold text-[var(--color-dark)] leading-tight">
          {product.name}
        </h3>
        <p className="mt-2 text-[var(--color-text-muted)] text-sm md:text-[15px] leading-relaxed">
          {product.short}
        </p>

        <ul className="mt-4 space-y-1.5">
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

        <div className="mt-auto pt-5 border-t border-[var(--color-border)] mt-5">
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
      </div>
    </article>
  );
}
