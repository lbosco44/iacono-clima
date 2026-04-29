import CountUpLib from "react-countup";
import { useReducedMotion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

type Props = {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

export function CountUp({ end, duration = 1.4, suffix, prefix, className }: Props) {
  const reduce = useReducedMotion();
  const { ref, inView } = useInView({ threshold: 0.45, triggerOnce: true });

  if (reduce) {
    return (
      <span className={className}>
        {prefix}
        {end}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {inView ? (
        <CountUpLib end={end} duration={duration} useEasing easingFn={easeOutQuart} />
      ) : (
        0
      )}
      {suffix}
    </span>
  );
}

function easeOutQuart(t: number, b: number, c: number, d: number) {
  t /= d;
  t -= 1;
  return -c * (t * t * t * t - 1) + b;
}
