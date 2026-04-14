import { cn } from "../../lib/cn";
import { handleAnchorClick } from "../../lib/smoothScroll";

export function Button({
  as = "button",
  variant = "primary",
  href,
  onClick,
  children,
  className,
  type,
  ...rest
}) {
  const classes = cn(
    variant === "primary" ? "btn-primary" : "btn-outline",
    className
  );

  if (as === "a" || href) {
    return (
      <a
        href={href}
        onClick={(e) => {
          if (href?.startsWith("#")) handleAnchorClick(e);
          onClick?.(e);
        }}
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type || "button"} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}
