import { secondaryBrands } from "@/data/brands";
import { LogoLoop, type LogoItem } from "./LogoLoop";

const logoItems: LogoItem[] = secondaryBrands.map((b) => ({
  src: b.logo,
  alt: b.name,
  title: b.name,
}));

export function BrandsStrip() {
  return (
    <div className="container-x">
      <div className="border-t border-[var(--color-line)] pt-8">
        <p
          aria-hidden="true"
          className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-mute)] mb-5 text-center"
        >
          Altri marchi disponibili
        </p>

        <LogoLoop
          logos={logoItems}
          speed={55}
          direction="left"
          logoHeight={28}
          gap={56}
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#F8F8F6"
          ariaLabel="Altri marchi disponibili: Daikin, Sinclair, Hermann Saunier Duval"
        />

        {/* Lista testuale per screen reader */}
        <ul className="sr-only">
          {secondaryBrands.map((b) => (
            <li key={b.id}>{b.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
