import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const tag = cva(
  "inline-flex items-center font-mono text-[10.5px] md:text-[11px] uppercase tracking-[0.12em] font-medium px-2 py-1 rounded-[3px] transition-colors duration-200 leading-none",
  {
    variants: {
      variant: {
        // Sistemi
        mono: "bg-[--color-accent-soft] text-[--color-accent]",
        multi: "bg-[--color-bg-warm] text-[--color-ink] border border-[--color-line-strong]",
        idronica: "bg-[--color-ink] text-[--color-bg]",
        refrigerazione: "bg-[--color-bg-cool] text-[--color-ink]",
        caldaie: "bg-[#ffe9d8] text-[--color-accent-deep]",
        // Nicchie
        horeca: "bg-[--color-ink] text-[--color-bg]",
        residenziale: "bg-[--color-accent-soft] text-[--color-accent]",
        condominio: "bg-[--color-bg-warm] text-[--color-ink] border border-[--color-line-strong]",
        commerciale: "bg-[#ffe9d8] text-[--color-accent-deep]",
        // Altri
        neutral: "bg-[--color-bg-warm] text-[--color-mute] border border-[--color-line]",
        ghost: "bg-transparent text-[--color-mute] border border-[--color-line]",
        invert: "bg-[--color-bg]/10 text-[--color-bg] border border-[--color-bg]/20",
      },
    },
    defaultVariants: { variant: "mono" },
  },
);

type TagProps = React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof tag>;

export function Tag({ className, variant, ...rest }: TagProps) {
  return <span className={cn(tag({ variant }), className)} {...rest} />;
}
