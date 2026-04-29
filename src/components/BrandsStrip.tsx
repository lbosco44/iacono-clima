import { brands } from "@/data/brands";
import { Reveal } from "@/components/ui/Reveal";

export function BrandsStrip() {
  return (
    <Reveal>
      <div className="border-t border-[var(--color-line)]">
        <p className="pt-6 pb-8 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-mute)] text-center">
          Brand partner
        </p>
        <div className="grid grid-cols-3 lg:grid-cols-5 divide-x divide-y lg:divide-y-0 divide-[var(--color-line)]">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center px-6 py-8 lg:px-10 lg:py-10"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                loading="lazy"
                className="h-7 lg:h-9 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
