import { cn } from "@/lib/cn";

type Props = {
  index: string;
  label: string;
  className?: string;
  invert?: boolean;
};

export function SectionLabel({ index, label, className, invert }: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em]",
        invert ? "text-[var(--color-bg)]/65" : "text-[var(--color-mute)]",
        className,
      )}
    >
      <span className={cn(invert ? "text-[var(--color-accent)]" : "text-[var(--color-accent)]")}>
        [{index}]
      </span>
      <span aria-hidden className={cn("h-px w-8", invert ? "bg-[var(--color-bg)]/30" : "bg-[var(--color-line-strong)]")} />
      <span>{label}</span>
    </div>
  );
}
