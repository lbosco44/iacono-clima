import { useEffect, useState } from "react";
import { Icon } from "../ui/Icon";
import { cn } from "../../lib/cn";

const NAV_ITEMS = [
  { id: "residenziale", label: "Residenziale", icon: "home" },
  { id: "commerciale", label: "Commerciale", icon: "store" },
  { id: "monoblocchi", label: "Monoblocchi", icon: "key" },
  { id: "industriale", label: "Industriale", icon: "factory" },
];

export function ProductsNav() {
  const [active, setActive] = useState("residenziale");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5],
      }
    );
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const onClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 170;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="sticky top-24 z-30 bg-[var(--color-bg-light)]/85 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="container-narrow py-3 md:py-4">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => onClick(e, item.id)}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all",
                  isActive
                    ? "bg-[var(--color-dark)] text-white shadow-md scale-[1.03]"
                    : "bg-white text-[var(--color-dark)] border border-[var(--color-border)] hover:border-[var(--color-dark)]"
                )}
              >
                <Icon name={item.icon} size={14} stroke={2.2} />
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
