import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { scrollTo } from "@/lib/lenis";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeDrawer = () => setOpen(false);

  function handleAnchor(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("/#")) return;
    if (location.pathname !== "/") return; // lascio che react-router porti a /
    e.preventDefault();
    closeDrawer();
    const id = href.slice(2);
    setTimeout(() => scrollTo(`#${id}`, -80), 60);
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-[var(--color-bg)]/85 backdrop-blur-md border-b border-[var(--color-line)]"
          : "bg-transparent",
      )}
    >
      <div className="container-x flex items-center justify-between h-[68px] lg:h-[80px]">
        <Link
          to="/"
          className="font-display text-[20px] lg:text-[22px] font-bold tracking-tight text-[var(--color-ink)]"
          aria-label="Iacono Clima — torna alla home"
        >
          Iacono<span className="text-[var(--color-accent)]">.</span>Clima
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {site.nav.map((item) =>
            item.href.startsWith("/#") ? (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleAnchor(e, item.href)}
                className="font-body text-[13.5px] font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className="font-body text-[13.5px] font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden md:inline-flex items-center gap-2 h-11 px-4 bg-[var(--color-accent)] text-white font-semibold text-sm rounded-[3px] hover:bg-[var(--color-accent-deep)] transition-colors"
          >
            <Phone size={15} strokeWidth={2.5} />
            {site.phone}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
            className="lg:hidden h-11 w-11 inline-flex items-center justify-center text-[var(--color-ink)] hover:bg-[var(--color-bg-warm)] rounded-[3px] transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-x-0 top-[68px] bottom-0 bg-[var(--color-bg)] border-t border-[var(--color-line)] overflow-auto"
          >
            <div className="container-x py-8 flex flex-col gap-1">
              {site.nav.map((item, i) =>
                item.href.startsWith("/#") ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleAnchor(e, item.href)}
                    className="block py-4 border-b border-[var(--color-line)] font-display text-[28px] tracking-tight text-[var(--color-ink)]"
                  >
                    <span className="font-mono text-[11px] text-[var(--color-mute)] mr-3 align-middle">
                      0{i + 1}
                    </span>
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={closeDrawer}
                    className="block py-4 border-b border-[var(--color-line)] font-display text-[28px] tracking-tight text-[var(--color-ink)]"
                  >
                    <span className="font-mono text-[11px] text-[var(--color-mute)] mr-3 align-middle">
                      0{i + 1}
                    </span>
                    {item.label}
                  </Link>
                ),
              )}

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 h-14 bg-[var(--color-accent)] text-white font-semibold rounded-[3px]"
                >
                  <Phone size={16} strokeWidth={2.5} />
                  Chiama {site.phone}
                </a>
                <a
                  href={site.whatsapp1Link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center h-14 bg-transparent text-[var(--color-ink)] border border-[var(--color-ink)] font-semibold rounded-[3px]"
                >
                  Apri WhatsApp · {site.whatsapp1}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
