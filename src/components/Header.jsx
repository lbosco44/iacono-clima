import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { site } from "../data/site";
import { handleAnchorClick } from "../lib/smoothScroll";
import { Icon } from "./ui/Icon";
import { MobileDrawer } from "./MobileDrawer";
import { cn } from "../lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 20);
  });

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0)",
          boxShadow: scrolled ? "0 1px 0 rgba(10,17,20,0.06)" : "0 0 0 rgba(0,0,0,0)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="container-narrow flex items-center justify-between py-4">
          <a
            href="#top"
            onClick={handleAnchorClick}
            className="inline-flex items-center group"
            aria-label="Iacono Clima — torna in cima"
          >
            <img
              src="/images/logo-removebg-preview.png"
              alt="Iacono Clima"
              className="h-9 md:h-11 w-auto object-contain"
              loading="eager"
              decoding="async"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleAnchorClick}
                className="text-sm font-semibold text-[var(--color-dark)] hover:text-[var(--color-primary)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${site.phoneTel}`}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white ring-1 ring-[var(--color-border)] text-[var(--color-dark)] text-sm font-semibold hover:border-[var(--color-dark)] transition-colors"
            >
              <Icon name="phone" size={14} stroke={2.4} />
              {site.phone}
            </a>
            <a
              href="#contatti"
              onClick={handleAnchorClick}
              className="btn-dark-pill !py-2.5 !px-4 !text-sm hidden md:inline-flex"
            >
              Preventivo
            </a>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Apri menu"
              className={cn(
                "md:hidden grid place-items-center w-10 h-10 rounded-lg",
                scrolled
                  ? "bg-[var(--color-bg-light)] text-[var(--color-dark)]"
                  : "bg-white ring-1 ring-[var(--color-border)] text-[var(--color-dark)]"
              )}
            >
              <Icon name="menu" size={20} stroke={2.2} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
