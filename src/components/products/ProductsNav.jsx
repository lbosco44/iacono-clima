import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

const NAV_ITEMS = [
  { id: "residenziale", label: "Residenziale", short: "R" },
  { id: "commerciale", label: "Commerciale", short: "C" },
  { id: "monoblocchi", label: "Monoblocchi", short: "M" },
  { id: "industriale", label: "Industriale", short: "I" },
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
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
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
    <>
      {/* Desktop: horizontal sticky bar */}
      <div className="hidden md:block sticky top-24 z-30 bg-[var(--color-bg-light)]/85 backdrop-blur-md border-b border-[var(--color-border)]">
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
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile: vertical sidebar on the right */}
      <div className="md:hidden fixed right-3 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-3">
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => onClick(e, item.id)}
              className="flex items-center gap-2 group"
            >
              {/* Label: visible on active, hidden on inactive */}
              <motion.span
                animate={{
                  opacity: isActive ? 1 : 0,
                  x: isActive ? 0 : 8,
                  width: isActive ? "auto" : 0,
                }}
                transition={{ duration: 0.2 }}
                className="text-[11px] font-bold tracking-wider uppercase text-[var(--color-dark)] bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm border border-[var(--color-border)] overflow-hidden whitespace-nowrap"
              >
                {item.short === "R" ? "Resid." : item.short === "C" ? "Comm." : item.short === "M" ? "Mono." : "Industr."}
              </motion.span>

              {/* Dot */}
              <motion.div
                animate={{
                  width: isActive ? 12 : 8,
                  height: isActive ? 12 : 8,
                  backgroundColor: isActive ? "var(--color-primary)" : "var(--color-border)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="rounded-full shrink-0"
              />
            </a>
          );
        })}
      </div>
    </>
  );
}
