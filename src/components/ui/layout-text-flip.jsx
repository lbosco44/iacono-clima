import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  words = ["fresca", "pulita", "silenziosa", "sana", "garantita"],
  duration = 2600,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [duration, reduced, words.length]);

  return (
    <motion.span
      layout
      transition={{ type: "spring", stiffness: 280, damping: 28 }}
      className={cn(
        "relative inline-flex items-center overflow-hidden rounded-xl md:rounded-2xl px-3 md:px-5 py-0.5 md:py-1 font-extrabold tracking-tight text-white shadow-[0_10px_36px_rgba(26,115,232,0.5)] ring-1 ring-white/30 leading-[1]",
        className
      )}
      style={{
        fontSize: "0.8em",
        backgroundImage:
          "linear-gradient(135deg, #4A95EE 0%, #1A73E8 55%, #0D4FA0 100%)",
        textShadow: "0 1px 2px rgba(10,17,20,0.35)",
      }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={currentIndex}
          initial={reduced ? false : { y: "-110%", filter: "blur(8px)" }}
          animate={{ y: 0, filter: "blur(0px)" }}
          exit={reduced ? { opacity: 0 } : { y: "110%", filter: "blur(8px)", opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block whitespace-nowrap"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
};
