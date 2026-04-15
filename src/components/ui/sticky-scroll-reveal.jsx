import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

const LINEAR_GRADIENTS = [
  "linear-gradient(135deg, #1A73E8, #0D4FA0)",
  "linear-gradient(135deg, #4A95EE, #1557B0)",
  "linear-gradient(135deg, #60A5FA, #1A73E8)",
];

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(
      cardLength - 1,
      Math.max(0, Math.floor(latest * cardLength))
    );
    setActiveCard(idx);
  });

  return (
    <div ref={ref} className="relative">
      <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16">
        <div>
          {content.map((item, index) => {
            const isActive = activeCard === index;
            return (
              <div
                key={item.title + index}
                className="min-h-[32vh] lg:min-h-[42vh] flex flex-col justify-center py-6 md:py-8"
              >
                <motion.h3
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.25 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-dark)] leading-[1.05]"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.25 }}
                  transition={{ duration: 0.3 }}
                  className="mt-5 max-w-md text-sm md:text-base leading-relaxed text-[var(--color-text-muted)]"
                >
                  {item.description}
                </motion.p>
                {item.bullets && (
                  <motion.ul
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0.25 }}
                    transition={{ duration: 0.3 }}
                    className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 max-w-md"
                  >
                    {item.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-xs md:text-sm text-[var(--color-dark)]/85"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"
                          aria-hidden="true"
                        />
                        {b}
                      </li>
                    ))}
                  </motion.ul>
                )}

                {/* Mobile-only inline image */}
                {item.content && (
                  <div
                    className="lg:hidden mt-8 rounded-2xl overflow-hidden aspect-[4/3] shadow-xl"
                    style={{
                      background: LINEAR_GRADIENTS[index % LINEAR_GRADIENTS.length],
                    }}
                  >
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-24 h-[calc(100vh-6rem)] flex items-center">
            <motion.div
              initial={false}
              animate={{
                background: LINEAR_GRADIENTS[activeCard % LINEAR_GRADIENTS.length],
              }}
              transition={{ duration: 0.4 }}
              className={cn(
                "w-full aspect-[4/5] max-h-full rounded-3xl overflow-hidden shadow-2xl",
                contentClassName
              )}
            >
              {content[activeCard]?.content ?? null}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
