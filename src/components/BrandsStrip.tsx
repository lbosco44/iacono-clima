import { secondaryBrands } from "@/data/brands";

export function BrandsStrip() {
  const items = [...secondaryBrands, ...secondaryBrands];
  return (
    <div className="container-x">
      <div className="border-t border-[var(--color-line)] pt-8">
        {/* L'etichetta è visibile ma il marquee è decorativo per SR */}
        <p
          aria-hidden="true"
          className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-mute)] mb-5 text-center"
        >
          Altri marchi disponibili
        </p>
        {/* Marcato come presentation: le immagini duplicate per il loop sarebbero rumorose per SR */}
        <div
          className="brand-marquee"
          role="presentation"
          aria-hidden="true"
        >
          <div className="brand-marquee__track">
            {items.map((b, i) => (
              <div key={`${b.id}-${i}`} className="px-4 flex items-center">
                <img
                  src={b.logo}
                  alt={b.name}
                  className="brand-marquee__img"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Lista testuale per screen reader — nascosta visivamente */}
        <ul className="sr-only">
          {secondaryBrands.map((b) => (
            <li key={b.id}>{b.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
