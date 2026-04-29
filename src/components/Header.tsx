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

function NavItems({ onItemClick }: { onItemClick?: () => void }) {
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

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className="hidden lg:flex items-center"
    >
      {site.nav.map((item, idx) =>
        !item.href.startsWith("/#") ? (
          <Link
            key={item.href}
            to={item.href}
            onMouseEnter={() => setHovered(idx)}
            onClick={onItemClick}
            className="relative px-3.5 py-2 font-body text-[13.5px] font-medium text-[var(--color-ink)]"
          >
            {hovered === idx && (
              <motion.div
                layoutId="nav-hovered"
                className="absolute inset-0 rounded-[5px] bg-[var(--color-bg-warm)]"
                transition={{ type: "spring", stiffness: 300, damping: 40 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </Link>
        ) : (
          <a
            key={item.href}
            href={item.href}
            onMouseEnter={() => setHovered(idx)}
            onClick={(e) => handleAnchor(e, item.href)}
            className="relative px-3.5 py-2 font-body text-[13.5px] font-medium text-[var(--color-ink)]"
          >
            {hovered === idx && (
              <motion.div
                layoutId="nav-hovered"
                className="absolute inset-0 rounded-[5px] bg-[var(--color-bg-warm)]"
                transition={{ type: "spring", stiffness: 300, damping: 40 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </a>
        )
      )}
    </div>
  );
}

export function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 80);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeDrawer = () => setOpen(false);
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
        style={{ maxWidth: 1440 }}
        className="hidden lg:flex items-center justify-between px-6 xl:px-10 h-[72px]"
      >
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0 })}
          className="font-display text-[21px] font-bold tracking-tight text-[var(--color-ink)] shrink-0"
          aria-label="Iacono Clima — torna alla home"
        >
          Iacono<span className="text-[var(--color-accent)]">.</span>Clima
        </Link>

        <NavItems />

        <a
          href={`tel:${site.phoneTel}`}
          className="shrink-0 inline-flex items-center gap-2 h-10 px-4 bg-[var(--color-accent)] text-white font-semibold text-[13.5px] rounded-[5px] hover:bg-[var(--color-accent-deep)] transition-colors"
        >
          <Phone size={14} strokeWidth={2.5} />
          {site.phone}
        </a>
      </motion.div>

      {/* ── Mobile nav pill ── */}
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
          aria-label="Iacono Clima"
        >
          Iacono<span className="text-[var(--color-accent)]">.</span>Clima
        </Link>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center justify-center w-10 h-10 bg-[var(--color-accent)] text-white rounded-[5px]"
            aria-label={`Chiama ${site.phone}`}
          >
            <Phone size={16} strokeWidth={2.5} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
            className="h-10 w-10 inline-flex items-center justify-center text-[var(--color-ink)] rounded-[5px] hover:bg-[var(--color-bg-warm)] transition-colors"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </motion.div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-x-0 top-[62px] bottom-0 bg-[var(--color-bg)] border-t border-[var(--color-line)] overflow-auto"
          >
            <div className="px-5 py-8 flex flex-col gap-1">
              {site.nav.map((item, i) =>
                !item.href.startsWith("/#") ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={closeDrawer}
                    className="block py-4 border-b border-[var(--color-line)] font-display text-[26px] tracking-tight text-[var(--color-ink)]"
                  >
                    <span className="font-mono text-[10px] text-[var(--color-mute)] mr-3 align-middle">
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
                    <span className="font-mono text-[10px] text-[var(--color-mute)] mr-3 align-middle">
                      0{i + 1}
                    </span>
                    {item.label}
                  </a>
                )
              )}

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 h-14 bg-[var(--color-accent)] text-white font-semibold rounded-[5px]"
                >
                  <Phone size={16} strokeWidth={2.5} />
                  Chiama {site.phone}
                </a>
                <a
                  href={site.whatsapp1Link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center h-14 bg-transparent text-[var(--color-ink)] border border-[var(--color-line-strong)] font-semibold rounded-[5px]"
                >
                  WhatsApp · {site.whatsapp1}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
