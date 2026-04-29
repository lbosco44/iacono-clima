import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { timeline } from "@/data/timeline";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function SistemaIacono() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    if (typeof window === "undefined") return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mql = window.matchMedia("(min-width: 1024px)");
    let trigger: ScrollTrigger | undefined;

    function build() {
      kill();
      if (!mql.matches) return;
      const totalScroll = track!.scrollWidth - window.innerWidth + 80;
      const tween = gsap.to(track, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 0.8,
          start: "top top",
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
      trigger = tween.scrollTrigger;
    }

    function kill() {
      trigger?.kill();
      trigger = undefined;
      gsap.set(track, { x: 0 });
    }

    build();
    const onChange = () => {
      kill();
      build();
    };
    mql.addEventListener("change", onChange);
    window.addEventListener("resize", onChange);
    return () => {
      kill();
      mql.removeEventListener("change", onChange);
      window.removeEventListener("resize", onChange);
    };
  }, [reduce]);

  return (
    <section
      id="sistema-iacono"
      ref={sectionRef}
      className="bg-[--color-ink] text-[--color-bg] relative overflow-hidden"
    >
      {/* Intro count-up */}
      <div className="container-x pt-24 lg:pt-36 pb-12 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-y-10 lg:gap-x-12 items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="05" label="Il Sistema Iacono" invert />
            <div className="mt-10 lg:mt-12 flex items-baseline gap-4">
              <span className="font-display font-bold leading-none tracking-[-0.04em] text-[7rem] sm:text-[10rem] lg:text-[15rem] xl:text-[18rem] text-[--color-bg]">
                <CountUp end={20} duration={1.6} />
              </span>
              <span className="font-display text-[3.5rem] lg:text-[6rem] leading-none text-[--color-accent] font-bold">
                +
              </span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="font-display text-[1.25rem] lg:text-[1.75rem] leading-snug text-[--color-bg]/85">
              Anni di interventi tra Siracusa, Ortigia, Tisia e provincia.
              Una squadra che firma ogni intervento e torna ogni anno per la manutenzione.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline desktop = horizontal scroll, mobile = vertical */}
      <div className="lg:h-screen lg:flex lg:items-center lg:overflow-hidden">
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-12 px-5 lg:pl-16 xl:pl-24 lg:pr-[20vw] pb-16 lg:pb-0"
        >
          {timeline.map((event, i) => (
            <article
              key={event.year}
              className="lg:w-[clamp(360px,32vw,520px)] flex-shrink-0 relative pl-7 lg:pl-0 border-l lg:border-l-0 lg:border-t border-[--color-bg]/15 pt-0 lg:pt-7"
            >
              {/* Pallino */}
              <span
                aria-hidden
                className="absolute -left-[5px] lg:-left-0 top-0 lg:top-[-7px] w-[10px] h-[10px] lg:w-[14px] lg:h-[14px] rounded-full bg-[--color-accent] ring-4 ring-[--color-ink]"
              />
              <div className="font-mono text-[12px] uppercase tracking-[0.18em] text-[--color-accent]">
                / tappa 0{i + 1}
              </div>
              <div className="mt-4 lg:mt-6 font-display text-[2.5rem] lg:text-[4.5rem] leading-none font-bold text-[--color-bg]">
                {event.year}
              </div>
              <h3 className="mt-5 font-display text-[1.5rem] lg:text-[2rem] leading-tight text-[--color-bg] font-bold">
                {event.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[--color-bg]/65 max-w-md">
                {event.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Foto pair */}
      <div className="container-x pt-20 lg:pt-32 pb-24 lg:pb-32">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          <Reveal>
            <figure>
              <div className="aspect-[4/3] overflow-hidden bg-[--color-ink-soft] border border-[--color-bg]/10">
                <img
                  src="/images/showroom-interno.jpeg"
                  alt="Interno dello showroom Iacono Clima in Via Filisto, Siracusa"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[--color-bg]/55">
                Showroom · Via Filisto 71/73
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.08}>
            <figure>
              <div className="aspect-[4/3] overflow-hidden bg-[--color-ink-soft] border border-[--color-bg]/10">
                <img
                  src="/images/team-titolare.jpeg"
                  alt="Salvatore Iacono, titolare di Iacono Climatizzazione, nello showroom"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[--color-bg]/55">
                Il titolare · Salvatore Iacono
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
