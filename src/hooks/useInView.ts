import { useInView as useIO } from "react-intersection-observer";

export function useInView(opts?: {
  threshold?: number;
  margin?: string;
  triggerOnce?: boolean;
}) {
  return useIO({
    threshold: opts?.threshold ?? 0.2,
    rootMargin: opts?.margin ?? "0px 0px -10% 0px",
    triggerOnce: opts?.triggerOnce ?? true,
  });
}
