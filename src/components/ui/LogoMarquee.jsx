import { cn } from "../../lib/cn";

export function LogoMarquee({ logos, className, speed = 40, invert = false }) {
  const duplicated = [...logos, ...logos];

  return (
    <div className={cn("logo-marquee", invert && "logo-marquee--invert", className)}>
      <div
        className="logo-marquee__track"
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicated.map((logo, i) => (
          <div key={i} className="logo-marquee__item" aria-hidden={i >= logos.length}>
            <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              decoding="async"
              className="logo-marquee__img"
              style={logo.heightRem ? { height: `${logo.heightRem}rem` } : undefined}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
