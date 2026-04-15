import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { site } from "../data/site";
import { handleAnchorClick } from "../lib/smoothScroll";
import { Icon } from "./ui/Icon";
import { MobileDrawer } from "./MobileDrawer";
import { cn } from "../lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const location = useLocation();

  const onLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      if (location.hash) {
        navigate("/", { replace: true });
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 20);
  });

  return (
    <>
      <div className="fixed top-3 md:top-5 inset-x-0 z-50 flex justify-center px-3 md:px-6 pointer-events-none">
        <motion.header
          initial={false}
          animate={{
            backgroundColor: scrolled
              ? "rgba(255,255,255,0.85)"
              : "rgba(255,255,255,0.65)",
            boxShadow: scrolled
              ? "0 10px 32px rgba(10,17,20,0.12), 0 2px 8px rgba(10,17,20,0.06)"
              : "0 4px 18px rgba(10,17,20,0.06)",
            scale: scrolled ? 0.98 : 1,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 30 }}
          className="pointer-events-auto w-full max-w-5xl rounded-full backdrop-blur-xl border border-white/40 ring-1 ring-[var(--color-border)]/50"
          style={{ willChange: "transform" }}
        >
          <div className="flex items-center justify-between py-2.5 md:py-3 pl-4 md:pl-5 pr-2 md:pr-3">
            <a
              href="/"
              onClick={onLogoClick}
              className="inline-flex items-center group shrink-0"
              aria-label="Iacono Clima — torna alla home"
            >
              <img
                src="/images/logo-removebg-preview.png"
                alt="Iacono Clima"
                className="h-8 md:h-9 w-auto object-contain"
                loading="eager"
                decoding="async"
              />
            </a>

            <nav className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
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
                className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[var(--color-dark)] text-sm font-semibold hover:text-[var(--color-primary)] transition-colors"
              >
                <Icon name="phone" size={14} stroke={2.4} />
                {site.phone}
              </a>
              <a
                href="/#contatti"
                onClick={handleAnchorClick}
                className="btn-dark-pill !py-2 !px-4 !text-sm hidden md:inline-flex"
              >
                Preventivo
              </a>
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                aria-label="Apri menu"
                className={cn(
                  "md:hidden grid place-items-center w-10 h-10 rounded-full bg-[var(--color-bg-light)] text-[var(--color-dark)]"
                )}
              >
                <Icon name="menu" size={20} stroke={2.2} />
              </button>
            </div>
          </div>
        </motion.header>
      </div>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
