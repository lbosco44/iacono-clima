import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
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
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = content.map((_, i) => i / content.length);
    const closest = breakpoints.reduce((acc, bp, i) =>
      Math.abs(latest - bp) < Math.abs(latest - breakpoints[acc]) ? i : acc, 0
    );
    setActiveCard(closest);
  });

  return (
    <div
      ref={ref}
      className="h-[32rem] lg:h-[36rem] overflow-y-auto flex gap-10 lg:gap-16 rounded-[4px]"
    >
      {/* Left — scrolling text */}
      <div className="relative flex-1 flex items-start px-1">
        <div className="w-full">
          {content.map((item, i) => (
            <div key={i} className="my-16 first:mt-4 last:mb-0">
              <motion.h3
                animate={{ opacity: activeCard === i ? 1 : 0.25 }}
                transition={{ duration: 0.3 }}
                className="font-display font-bold text-[1.5rem] lg:text-[1.85rem] leading-snug tracking-tight text-[var(--color-ink)]"
              >
                {item.title}
              </motion.h3>
              <motion.div
                animate={{ opacity: activeCard === i ? 1 : 0.25 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-[15px] leading-relaxed text-[var(--color-mute)]"
              >
                {item.description}
              </motion.div>
            </div>
          ))}
          <div className="h-20" />
        </div>
      </div>

      {/* Right — sticky image */}
      <div
        className={cn(
          "hidden lg:block sticky top-0 self-start h-full w-[42%] shrink-0 overflow-hidden rounded-[4px]",
          contentClassName
        )}
      >
        {content[activeCard]?.content}
      </div>
    </div>
  );
}
