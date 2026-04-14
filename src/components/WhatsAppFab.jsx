import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "../data/site";
import { Icon } from "./ui/Icon";

export function WhatsAppFab() {
  const [mounted, setMounted] = useState(false);
  const [hovering, setHovering] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.a
          href={site.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Scrivici su WhatsApp al ${site.whatsapp}`}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onHoverStart={() => setHovering(true)}
          onHoverEnd={() => setHovering(false)}
          whileHover={reduced ? {} : { scale: 1.05 }}
          whileTap={reduced ? {} : { scale: 0.96 }}
          className="wa-pulse fixed z-40 bottom-5 right-5 md:bottom-6 md:right-6 grid place-items-center w-14 h-14 md:w-16 md:h-16 rounded-full text-white bg-[var(--color-whatsapp)]"
        >
          <Icon name="whatsapp" size={28} stroke={1.8} />
          <AnimatePresence>
            {hovering && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.18 }}
                className="hidden md:block absolute right-full mr-3 whitespace-nowrap bg-[var(--color-dark)] text-white text-sm font-semibold px-3.5 py-2 rounded-lg shadow-lg"
              >
                Scrivici su WhatsApp
                <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rotate-45 bg-[var(--color-dark)]" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
