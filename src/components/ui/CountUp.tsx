import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

type Props = {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

export function CountUp({ end, duration = 1.4, suffix = "", prefix = "", className }: Props) {
  const reduce = useReducedMotion();
  const { ref, inView } = useInView({ threshold: 0.45, triggerOnce: true });
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    if (reduce) {
      setValue(end);
      return;
    }

    const startTime = performance.now();
    const ms = duration * 1000;
    let raf: number;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / ms, 1);
      setValue(Math.round(easeOutQuart(progress) * end));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}{value}{suffix}
    </span>
  );
}
