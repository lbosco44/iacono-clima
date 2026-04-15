import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0F1114",
    "#0A2540",
    "#0D1828",
  ];
  const linearGradients = [
    "linear-gradient(135deg, #1A73E8, #0D4FA0)",
    "linear-gradient(135deg, #4A95EE, #1557B0)",
    "linear-gradient(135deg, #60A5FA, #1A73E8)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[32rem] md:h-[40rem] justify-center gap-10 overflow-y-auto rounded-3xl p-6 md:p-10 scrollbar-thin"
      ref={ref}
    >
      <div className="relative flex items-start px-2 md:px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-16 md:my-24">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.25 }}
                transition={{ duration: 0.3 }}
                className="text-2xl md:text-4xl font-extrabold tracking-tight text-white"
              >
                {item.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.25 }}
                transition={{ duration: 0.3 }}
                className="mt-6 max-w-md text-sm md:text-base leading-relaxed text-white/80"
              >
                {item.description}
              </motion.p>
              {item.bullets && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.2 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 max-w-md"
                >
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs md:text-sm text-white/85">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary-soft)] shrink-0"
                        aria-hidden="true"
                      />
                      {b}
                    </li>
                  ))}
                </motion.ul>
              )}
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden lg:block h-72 w-96 overflow-hidden rounded-2xl shadow-2xl",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
