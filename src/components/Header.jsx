import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { site } from "../data/site";
import { handleAnchorClick } from "../lib/smoothScroll";
import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";
import { MobileDrawer } from "./MobileDrawer";
import { cn } from "../lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0)",
          boxShadow: scrolled ? "var(--shadow-nav)" : "0 0 0 rgba(0,0,0,0)",
          backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="container-x flex items-center justify-between py-4">
          <a
            href="#top"
            onClick={handleAnchorClick}
            className="flex items-center gap-2.5 group"
            aria-label="Iacono Clima — torna in cima"
          >
            <span
              className={cn(
                "grid place-items-center h-11 w-11 md:h-12 md:w-12 rounded-xl transition-colors p-1",
                scrolled ? "bg-white" : "bg-white/95 backdrop-blur-sm"
              )}
            >
              <img
                src="/images/logo-removebg-preview.png"
                alt="Iacono Clima"
                className="h-full w-full object-contain"
                loading="eager"
                decoding="async"
              />
            </span>
            <span
              className={cn(
                "font-black text-base md:text-xl tracking-tight transition-colors leading-none",
                scrolled ? "text-[var(--color-primary)]" : "text-white"
              )}
            >
              Iacono Clima
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleAnchorClick}
                className={cn(
                  "text-sm font-semibold transition-colors hover:opacity-80",
                  scrolled ? "text-[var(--color-dark)]" : "text-white"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              href="#contatti"
              variant="primary"
              className="!hidden md:!inline-flex !py-2.5 !px-4 !text-sm"
            >
              Chiedi Preventivo
            </Button>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Apri menu"
              className={cn(
                "md:hidden grid place-items-center w-10 h-10 rounded-lg transition-colors",
                scrolled
                  ? "bg-[var(--color-accent)] text-[var(--color-primary)]"
                  : "bg-white/15 backdrop-blur-sm text-white"
              )}
            >
              <Icon name="menu" size={22} stroke={2.2} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
