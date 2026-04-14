import { cn } from "../../lib/cn";
import { Reveal } from "./Reveal";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = true,
  invert = false,
  className,
}) {
  return (
    <Reveal
      className={cn(
        "mb-10 md:mb-14",
        centered && "text-center max-w-3xl mx-auto",
        className
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow", invert && "!text-[var(--color-primary)] brightness-125")}>
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-[clamp(2rem,4vw,3rem)] font-black",
          invert ? "text-white" : "text-[var(--color-dark)]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg",
            invert ? "text-white/70" : "text-[var(--color-text-muted)]"
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
