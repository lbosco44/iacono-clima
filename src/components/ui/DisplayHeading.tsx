import { cn } from "@/lib/cn";
import type { ElementType, ReactNode } from "react";

type Size = "xs" | "sm" | "md" | "lg" | "xl" | "hero";

const sizes: Record<Size, string> = {
  xs: "text-2xl md:text-3xl lg:text-4xl",
  sm: "text-3xl md:text-4xl lg:text-5xl",
  md: "text-4xl md:text-5xl lg:text-6xl",
  lg: "text-5xl md:text-6xl lg:text-7xl",
  xl: "text-6xl md:text-7xl lg:text-8xl",
  hero: "text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6.5rem]",
};

type Props = {
  as?: ElementType;
  size?: Size;
  className?: string;
  children: ReactNode;
  invert?: boolean;
};

export function DisplayHeading({
  as: Tag = "h2",
  size = "md",
  className,
  children,
  invert,
}: Props) {
  return (
    <Tag
      className={cn(
        "font-display font-bold leading-[1.02] tracking-[-0.025em]",
        sizes[size],
        invert ? "text-[--color-bg]" : "text-[--color-ink]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
