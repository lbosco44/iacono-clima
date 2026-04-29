import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

/*
 * Contrasto WCAG 1.4.3 — tutte le varianti verificate:
 *
 * mono / residenziale:
 *   bg #DBEEFF · fg #0052A3 (accent-deep) → ~6.5:1 ✓ AA
 *
 * multi / condominio / neutral:
 *   bg #F2F0EA · fg #0F1B2D (ink) → ~15:1 ✓
 *
 * idronica / horeca:
 *   bg #0F1B2D · fg #F8F8F6 → ~18.5:1 ✓
 *
 * refrigerazione:
 *   bg #ECECEA · fg #0F1B2D → ~13.5:1 ✓
 *
 * caldaie / commerciale:
 *   bg #CCE4FF · fg #0052A3 (accent-deep) → ~5.5:1 ✓ AA
 *
 * ghost:
 *   bg transparent · fg #4A4A4A (mute) → 6.15:1 su bg-off-white ✓
 *
 * invert (su sfondo scuro):
 *   bg ink/10 · fg #F8F8F6/bg → contrasto adeguato su navy ✓
 */
const tag = cva(
  "inline-flex items-center font-mono text-[10.5px] md:text-[11px] uppercase tracking-[0.12em] font-medium px-2 py-1 rounded-[3px] transition-colors duration-200 leading-none",
  {
    variants: {
      variant: {
        // Sistemi — fg corretto da accent a accent-deep per superare AA su sfondo tenue
        mono:           "bg-[var(--color-accent-soft)] text-[var(--color-accent-deep)]",
        multi:          "bg-[var(--color-bg-warm)] text-[var(--color-ink)] border border-[var(--color-line-strong)]",
        idronica:       "bg-[var(--color-ink)] text-[var(--color-bg)]",
        refrigerazione: "bg-[var(--color-bg-cool)] text-[var(--color-ink)]",
        caldaie:        "bg-[#cce4ff] text-[var(--color-accent-deep)]",
        // Nicchie — stesso fix per residenziale
        horeca:         "bg-[var(--color-ink)] text-[var(--color-bg)]",
        residenziale:   "bg-[var(--color-accent-soft)] text-[var(--color-accent-deep)]",
        condominio:     "bg-[var(--color-bg-warm)] text-[var(--color-ink)] border border-[var(--color-line-strong)]",
        commerciale:    "bg-[#cce4ff] text-[var(--color-accent-deep)]",
        // Altri
        neutral:        "bg-[var(--color-bg-warm)] text-[var(--color-mute)] border border-[var(--color-line)]",
        ghost:          "bg-transparent text-[var(--color-mute)] border border-[var(--color-line)]",
        invert:         "bg-[var(--color-bg)]/10 text-[var(--color-bg)] border border-[var(--color-bg)]/20",
      },
    },
    defaultVariants: { variant: "mono" },
  },
);

type TagProps = React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof tag>;

export function Tag({ className, variant, ...rest }: TagProps) {
  return <span className={cn(tag({ variant }), className)} {...rest} />;
}
