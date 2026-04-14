import { useEffect, useState } from "react";
import { animate, useReducedMotion } from "framer-motion";

export function useCountUp(target, { duration = 2, start = false } = {}) {
  const [value, setValue] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!start) return;
    if (reduced) {
      setValue(target);
      return;
    }
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, target, duration, reduced]);

  return value;
}
