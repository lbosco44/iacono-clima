import { cn } from "../../lib/cn";

export function Badge({ children, icon, tone = "accent", className }) {
  const tones = {
    accent: "bg-[var(--color-accent)] text-[var(--color-primary)]",
    solid: "bg-[var(--color-primary)] text-white",
    ghost: "bg-white/10 text-white border border-white/20",
    outline: "bg-transparent text-[var(--color-primary)] border border-[var(--color-primary)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs md:text-sm font-semibold whitespace-nowrap",
        tones[tone],
        className
      )}
    >
      {icon && <span className="text-sm" aria-hidden>{icon}</span>}
      {children}
    </span>
  );
}
