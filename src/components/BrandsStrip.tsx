import { secondaryBrands } from "@/data/brands";

export function BrandsStrip() {
  const items = [...secondaryBrands, ...secondaryBrands];
  return (
    <div className="container-x">
      <div className="border-t border-[--color-line] pt-8">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[--color-mute] mb-5 text-center">
          Altri marchi disponibili
        </div>
        <div className="brand-marquee">
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
      </div>
    </div>
  );
}
