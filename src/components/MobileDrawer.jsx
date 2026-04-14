import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "../data/site";
import { Icon } from "./ui/Icon";
import { Button } from "./ui/Button";
import { smoothScrollTo } from "../lib/smoothScroll";

export function MobileDrawer({ open, onClose }) {
  const reduced = useReducedMotion();
  const closeBtnRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    previousFocusRef.current = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const main = document.querySelector("main");
    main?.setAttribute("inert", "");

    const focusTimer = setTimeout(() => closeBtnRef.current?.focus(), 200);
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);

    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = originalOverflow;
      main?.removeAttribute("inert");
      window.removeEventListener("keydown", onKey);
      if (previousFocusRef.current instanceof HTMLElement) {
        previousFocusRef.current.focus();
      }
    };
  }, [open, onClose]);

  const go = (href) => {
    onClose();
    setTimeout(() => smoothScrollTo(href), 220);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-[60] md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.aside
            key="drawer"
            initial={reduced ? { x: 0 } : { x: "100%" }}
            animate={{ x: 0 }}
            exit={reduced ? { opacity: 0 } : { x: "100%" }}
            transition={{ duration: reduced ? 0.001 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-[85%] max-w-sm bg-white shadow-2xl md:hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Menu di navigazione"
          >
            <div className="flex items-center justify-between p-5 border-b border-[var(--color-border)]">
              <img
                src="/images/logo-removebg-preview.png"
                alt="Iacono Clima"
                className="h-9 w-auto object-contain"
              />
              <button
                ref={closeBtnRef}
                type="button"
                onClick={onClose}
                aria-label="Chiudi menu"
                className="grid place-items-center w-10 h-10 rounded-lg bg-[var(--color-bg-light)] text-[var(--color-dark)]"
              >
                <Icon name="close" size={22} stroke={2.2} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-6">
              {site.nav.map((item) => (
                <button
                  key={item.href}
                  onClick={() => go(item.href)}
                  className="w-full text-left px-6 py-4 text-lg font-semibold text-[var(--color-dark)] border-b border-[var(--color-border)] hover:bg-[var(--color-bg-light)] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="p-5 border-t border-[var(--color-border)] space-y-3">
              <Button
                href="#contatti"
                variant="primary"
                className="!w-full !justify-center"
                onClick={() => setTimeout(() => onClose(), 100)}
              >
                Chiedi Preventivo
              </Button>
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[var(--color-whatsapp)] text-white font-semibold"
              >
                <Icon name="whatsapp" size={20} />
                WhatsApp
              </a>
              <div className="flex items-center justify-center gap-2 pt-2 text-sm text-[var(--color-text-muted)]">
                <Icon name="phone" size={16} />
                <a href={`tel:${site.phoneTel}`} className="font-semibold text-[var(--color-dark)]">
                  {site.phone}
                </a>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
