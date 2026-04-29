import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/cn";

export type StickyScrollItem = {
  title: string;
  description: React.ReactNode;
  content?: React.ReactNode;
};

export function StickyScroll({
  content,
  contentClassName,
}: {
  content: StickyScrollItem[];
  contentClassName?: string;
}) {
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setActiveCard(Math.min(
      Math.floor(latest * content.length),
      content.length - 1
    ));
  });

  return (
    <div ref={sectionRef} className="relative lg:flex lg:gap-16 lg:items-start">

      {/* Left — text items, scorrono normalmente */}
      <div className="flex-1">
        {content.map((item, i) => (
          <div
            key={i}
            className="min-h-[60vh] lg:min-h-screen flex flex-col justify-center py-16 lg:py-24 border-t border-[var(--color-line)] first:border-t-0"
          >
            <motion.div
              animate={{ opacity: activeCard === i ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-display font-bold text-[1.65rem] lg:text-[2.25rem] leading-[1.1] tracking-tight text-[var(--color-ink)]">
                {item.title}
              </h3>
              <div className="mt-5">
                {item.description}
              </div>
            </motion.div>

            {/* Immagine visibile solo su mobile */}
            {item.content && (
              <div className="lg:hidden mt-8 aspect-[4/3] overflow-hidden rounded-[4px]">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right — immagine sticky (solo desktop) */}
      <div className="hidden lg:block w-[45%] shrink-0">
        <div className={cn("sticky top-[12vh] h-[76vh] overflow-hidden rounded-[4px]", contentClassName)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full"
            >
              {content[activeCard]?.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
}
