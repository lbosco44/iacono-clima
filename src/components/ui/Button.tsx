import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const button = cva(
  "inline-flex items-center justify-center gap-2 font-body font-semibold tracking-tight transition-all duration-200 ease-[cubic-bezier(.22,1,.36,1)] whitespace-nowrap select-none disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-3",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-deep)] active:scale-[0.98] shadow-[0_8px_24px_-8px_rgba(0,102,204,0.5)] hover:shadow-[0_12px_28px_-8px_rgba(0,102,204,0.65)]",
        outline:
          "bg-transparent text-[var(--color-ink)] border border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] active:scale-[0.98]",
        ghost:
          "bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-bg-warm)] active:scale-[0.98]",
        invert:
          "bg-[var(--color-bg)] text-[var(--color-ink)] hover:bg-[var(--color-accent)] hover:text-white active:scale-[0.98]",
        link:
          "bg-transparent text-[var(--color-accent)] hover:text-[var(--color-accent-deep)] underline-offset-4 hover:underline px-0",
      },
      size: {
        sm: "h-10 px-4 text-sm rounded-[3px]",
        md: "h-12 px-5 text-[15px] rounded-[3px]",
        lg: "h-14 px-7 text-base rounded-[3px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Common = VariantProps<typeof button> & {
  className?: string;
  children: ReactNode;
};

type AsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type AsAnchor = Common &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: AsButton | AsAnchor) {
  const { variant, size, className, children, ...rest } = props;
  const cls = cn(button({ variant, size }), className);

  if ("href" in rest && rest.href !== undefined) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
