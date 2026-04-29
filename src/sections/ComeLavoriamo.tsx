import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { steps } from "@/data/steps";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DisplayHeading } from "@/components/ui/DisplayHeading";

export function ComeLavoriamo() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    if (typeof window === "undefined") return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const mql = window.matchMedia("(min-width: 1024px)");
    const triggers: ScrollTrigger[] = [];

    function build() {
      kill();
      if (!mql.matches) return;
      const stepEls = wrapper!.querySelectorAll<HTMLDivElement>("[data-step]");
      stepEls.forEach((el) => {
        const text = el.querySelector<HTMLDivElement>("[data-step-text]");
        const image = el.querySelector<HTMLDivElement>("[data-step-image]");
        if (!text || !image) return;

        const t = gsap.fromTo(
          text,
          { y: 32, opacity: 0.2 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 75%",
              end: "top 25%",
              scrub: 1,
            },
          },
        );
        const i = gsap.fromTo(
          image,
          { y: 56, opacity: 0.4, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "top 20%",
              scrub: 1,
            },
          },
        );
        if (t.scrollTrigger) triggers.push(t.scrollTrigger);
        if (i.scrollTrigger) triggers.push(i.scrollTrigger);
      });
    }

    function kill() {
      triggers.splice(0).forEach((t) => t.kill());
    }

    build();
    const onResize = () => build();
    mql.addEventListener("change", onResize);
    window.addEventListener("resize", onResize);

    return () => {
      kill();
      mql.removeEventListener("change", onResize);
      window.removeEventListener("resize", onResize);
    };
  }, [reduce]);

  return (
    <section id="come-lavoriamo" className="bg-[--color-bg] section-y" ref={wrapperRef}>
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-16 lg:mb-24">
          <div className="lg:col-span-4">
            <SectionLabel index="03" label="Come lavoriamo" />
          </div>
          <div className="lg:col-span-8">
            <DisplayHeading size="md">
              Quattro passaggi.{" "}
              <span className="text-[--color-mute]">Niente improvvisazione.</span>
            </DisplayHeading>
          </div>
        </div>

        <div className="space-y-24 lg:space-y-40">
          {steps.map((step, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={step.number}
                data-step
                className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-8 items-center"
              >
                {/* Numero gigante */}
                <div className={`lg:col-span-3 ${reverse ? "lg:order-3" : ""}`}>
                  <div className="font-mono font-medium text-[--color-accent-soft] text-[7rem] sm:text-[8rem] lg:text-[12rem] xl:text-[14rem] leading-[0.85] select-none">
                    {step.number}
                  </div>
                </div>

                {/* Testo */}
                <div className={`lg:col-span-4 ${reverse ? "lg:order-2" : ""}`} data-step-text>
                  <Reveal>
                    <h3 className="font-display text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-tight font-bold text-[--color-ink]">
                      {step.title}
                    </h3>
                    <p className="mt-5 text-[16px] leading-relaxed text-[--color-mute] max-w-md">
                      {step.description}
                    </p>
                  </Reveal>
                </div>

                {/* Immagine */}
                <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`} data-step-image>
                  <Reveal direction={reverse ? "right" : "left"}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] bg-[--color-bg-warm] border border-[--color-line]">
                      <img
                        src={step.image}
                        alt={step.alt}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[--color-bg] bg-[--color-ink]/80 backdrop-blur px-2 py-1 rounded-[3px]">
                        {step.number} · {step.title}
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
