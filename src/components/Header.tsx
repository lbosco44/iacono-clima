import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/data/site";
import { scrollTo } from "@/lib/lenis";

// Restituisce il primo e l'ultimo elemento focusable all'interno di un container
function getFocusable(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  );
}

type NavItem = { label: string; href: string };

function NavGroup({
  items,
  onItemClick,
  currentPath,
  floated = true,
  startIndex = 0,
}: {
  items: NavItem[];
  onItemClick?: () => void;
  currentPath: string;
  floated?: boolean;
  startIndex?: number;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const location = useLocation();

  function handleAnchor(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("/#")) return;
    if (location.pathname !== "/") return;
    e.preventDefault();
    onItemClick?.();
    const id = href.slice(2);
    setTimeout(() => scrollTo(`#${id}`, -80), 60);
  }

  const linkClass = `relative px-3.5 py-2 font-body text-[13.5px] font-medium transition-colors ${floated ? "text-[var(--color-ink)]" : "text-white"}`;

  return (
    <div onMouseLeave={() => setHovered(null)} className="flex items-center">
      {items.map((item, i) => {
        const idx = startIndex + i;
        const pill = floated && hovered === idx && (
          <motion.div
            layoutId="nav-hovered"
            className="absolute inset-0 rounded-[5px] bg-[var(--color-bg-warm)]"
            transition={{ type: "spring", stiffness: 300, damping: 40 }}
            aria-hidden="true"
          />
        );
        return !item.href.startsWith("/#") ? (
          <Link
            key={item.href}
            to={item.href}
            onMouseEnter={() => setHovered(idx)}
            onClick={onItemClick}
            aria-current={currentPath === item.href ? "page" : undefined}
            className={linkClass}
          >
            {pill}
            <span className="relative z-10">{item.label}</span>
          </Link>
        ) : (
          <a
            key={item.href}
            href={item.href}
            onMouseEnter={() => setHovered(idx)}
            onClick={(e) => handleAnchor(e, item.href)}
            className={linkClass}
          >
            {pill}
            <span className="relative z-10">{item.label}</span>
          </a>
        );
      })}
    </div>
  );
}

export function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 80);
  });

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Focus trap inside drawer
  useEffect(() => {
    if (!open || !drawerRef.current) return;

    // Move focus to first focusable element inside drawer
    const focusable = getFocusable(drawerRef.current);
    if (focusable.length > 0) {
      (focusable[0] as HTMLElement).focus();
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (!drawerRef.current) return;
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;

      const focusableEls = getFocusable(drawerRef.current);
      if (focusableEls.length === 0) return;

      const first = focusableEls[0];
      const last = focusableEls[focusableEls.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const closeDrawer = () => {
    setOpen(false);
    menuButtonRef.current?.focus();
  };
  const floated = visible || open;

  function handleAnchorMobile(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("/#")) return;
    if (location.pathname !== "/") return;
    e.preventDefault();
    closeDrawer();
    const id = href.slice(2);
    setTimeout(() => scrollTo(`#${id}`, -80), 60);
  }

  return (
    <div ref={headerRef} className="fixed top-0 inset-x-0 z-50 flex flex-col items-center">
      {/* ── Desktop nav pill ── */}
      <motion.div
        animate={{
          width: floated ? "88%" : "100%",
          maxWidth: floated ? 860 : 1440,
          y: floated ? 14 : 0,
          borderRadius: floated ? "10px" : "0px",
          backgroundColor: floated
            ? "rgba(248,248,246,0.92)"
            : "rgba(248,248,246,0)",
          backdropFilter: floated ? "blur(14px)" : "blur(0px)",
          boxShadow: floated
            ? "0 4px 32px rgba(15,27,45,0.09), 0 0 0 1px rgba(229,226,218,0.55)"
            : "0 0 0 0 transparent",
        }}
        transition={{ type: "spring", stiffness: 190, damping: 48 }}
        className="hidden lg:flex items-center justify-center relative px-6 xl:px-10 h-[72px]"
      >
        {/* Gruppo centrato: nav sx + logo + nav dx */}
        <div className="flex items-center">
          <nav aria-label="Navigazione principale sinistra">
            <NavGroup
              items={site.nav.slice(0, 3)}
              currentPath={location.pathname}
              floated={floated}
              startIndex={0}
            />
          </nav>

          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0 })}
            className={`font-display text-[21px] font-bold tracking-tight transition-colors px-5 ${floated ? "text-[var(--color-ink)]" : "text-white"}`}
            aria-label="Iacono Clima — torna alla home"
          >
            Iacono<span className="text-[var(--color-accent)]" aria-hidden="true">.</span>Clima
          </Link>

          <nav aria-label="Navigazione principale destra">
            <NavGroup
              items={site.nav.slice(3)}
              currentPath={location.pathname}
              floated={floated}
              startIndex={3}
            />
          </nav>
        </div>

        {/* Bottone telefono — ancorato a destra */}
        <div className="absolute right-6 xl:right-10">
          <a
            href={`tel:${site.phoneTel}`}
            aria-label={`Chiama Iacono Clima al numero ${site.phone}`}
            className="btn-fly shrink-0 inline-flex items-center gap-2 h-10 px-4 bg-[var(--color-accent)] text-white font-semibold text-[13.5px] rounded-[5px] shadow-[0_4px_16px_-4px_rgba(0,102,204,0.4)] hover:shadow-[0_6px_20px_-4px_rgba(0,102,204,0.6)] active:scale-[0.98] transition-shadow"
          >
            <span className="btn-icon">
              <Phone size={14} strokeWidth={2.5} aria-hidden="true" />
            </span>
            <span className="btn-text">{site.phone}</span>
            <span className="btn-icon-center" aria-hidden="true">
              <span className="btn-icon-bob">
                <Phone size={16} strokeWidth={2.5} />
              </span>
            </span>
          </a>
        </div>
      </motion.div>

      {/* ── Mobile nav bar ── */}
      <motion.div
        animate={{
          width: floated ? "92%" : "100%",
          y: floated ? 10 : 0,
          borderRadius: floated ? "10px" : "0px",
          backgroundColor: floated
            ? "rgba(248,248,246,0.92)"
            : "rgba(248,248,246,0)",
          backdropFilter: floated ? "blur(14px)" : "blur(0px)",
          boxShadow: floated
            ? "0 4px 32px rgba(15,27,45,0.09), 0 0 0 1px rgba(229,226,218,0.55)"
            : "0 0 0 0 transparent",
        }}
        transition={{ type: "spring", stiffness: 190, damping: 48 }}
        className="lg:hidden flex items-center justify-between px-5 h-[62px]"
      >
        <Link
          to="/"
          onClick={() => { window.scrollTo({ top: 0 }); closeDrawer(); }}
          className="font-display text-[19px] font-bold tracking-tight text-[var(--color-ink)]"
          aria-label="Iacono Clima — torna alla home"
        >
          Iacono<span className="text-[var(--color-accent)]" aria-hidden="true">.</span>Clima
        </Link>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center justify-center w-10 h-10 bg-[var(--color-accent)] text-white rounded-[5px]"
            aria-label={`Chiama ${site.phone}`}
          >
            <Phone size={16} strokeWidth={2.5} aria-hidden="true" />
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Chiudi menu di navigazione" : "Apri menu di navigazione"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            className="h-10 w-10 inline-flex items-center justify-center text-[var(--color-ink)] rounded-[5px] hover:bg-[var(--color-bg-warm)] transition-colors"
          >
            {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>
      </motion.div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={drawerRef}
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu di navigazione"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-x-0 top-[62px] bottom-0 bg-[var(--color-bg)] border-t border-[var(--color-line)] overflow-auto"
          >
            <nav aria-label="Menu mobile" className="px-5 py-8 flex flex-col gap-1">
              {site.nav.map((item, i) =>
                !item.href.startsWith("/#") ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={closeDrawer}
                    aria-current={location.pathname === item.href ? "page" : undefined}
                    className="block py-4 border-b border-[var(--color-line)] font-display text-[26px] tracking-tight text-[var(--color-ink)]"
                  >
                    <span aria-hidden="true" className="font-mono text-[10px] text-[var(--color-mute)] mr-3 align-middle">
                      0{i + 1}
                    </span>
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleAnchorMobile(e, item.href)}
                    className="block py-4 border-b border-[var(--color-line)] font-display text-[26px] tracking-tight text-[var(--color-ink)]"
                  >
                    <span aria-hidden="true" className="font-mono text-[10px] text-[var(--color-mute)] mr-3 align-middle">
                      0{i + 1}
                    </span>
                    {item.label}
                  </a>
                )
              )}

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={`tel:${site.phoneTel}`}
                  aria-label={`Chiama Iacono Clima al numero ${site.phone}`}
                  className="inline-flex items-center justify-center gap-2 h-14 bg-[var(--color-accent)] text-white font-semibold rounded-[5px]"
                >
                  <Phone size={16} strokeWidth={2.5} aria-hidden="true" />
                  Chiama {site.phone}
                </a>
                <a
                  href={site.whatsapp1Link}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Apri WhatsApp con il numero ${site.whatsapp1}`}
                  className="inline-flex items-center justify-center h-14 bg-transparent text-[var(--color-ink)] border border-[var(--color-line-strong)] font-semibold rounded-[5px]"
                >
                  WhatsApp · {site.whatsapp1}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
