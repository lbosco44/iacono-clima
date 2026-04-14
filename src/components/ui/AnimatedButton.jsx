import { cn } from "../../lib/cn";
import { handleAnchorClick } from "../../lib/smoothScroll";

const Arrow = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
  </svg>
);

export function AnimatedButton({
  children,
  href,
  onClick,
  tone = "dark",
  className,
  type,
  ...rest
}) {
  const toneClass = tone === "light" ? "animated-btn-light" : "animated-btn-dark";

  const content = (
    <>
      <Arrow className="animated-btn__arr animated-btn__arr-2" />
      <span className="animated-btn__text">{children}</span>
      <span className="animated-btn__circle" aria-hidden="true" />
      <Arrow className="animated-btn__arr animated-btn__arr-1" />
    </>
  );

  const classes = cn("animated-btn", toneClass, className);

  if (href) {
    return (
      <a
        href={href}
        onClick={(e) => {
          if (href.startsWith("#")) handleAnchorClick(e);
          onClick?.(e);
        }}
        className={classes}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type || "button"} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}
