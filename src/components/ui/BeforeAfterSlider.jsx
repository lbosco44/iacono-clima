import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/cn";

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Prima",
  afterAlt = "Dopo",
  beforeLabel = "Prima",
  afterLabel = "Dopo",
  initial = 50,
  aspect = "16 / 10",
  className,
}) {
  const [pos, setPos] = useState(initial);
  const [dragging, setDragging] = useState(false);
  const rootRef = useRef(null);

  const updateFromClientX = useCallback((clientX) => {
    const el = rootRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  }, []);

  useEffect(() => {
    if (!dragging) return;

    const move = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      updateFromClientX(x);
    };
    const stop = () => setDragging(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", stop);
    };
  }, [dragging, updateFromClientX]);

  const onPointerDown = (e) => {
    e.preventDefault();
    setDragging(true);
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    updateFromClientX(x);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPos((p) => Math.max(0, p - (e.shiftKey ? 10 : 3)));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPos((p) => Math.min(100, p + (e.shiftKey ? 10 : 3)));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPos(100);
    }
  };

  return (
    <div
      ref={rootRef}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl shadow-[var(--shadow-card-hover)] select-none",
        className
      )}
      style={{ aspectRatio: aspect, touchAction: "pan-y" }}
      onMouseDown={onPointerDown}
      onTouchStart={onPointerDown}
    >
      <img
        src={afterSrc}
        alt={afterAlt}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <span className="absolute top-3 left-3 md:top-4 md:left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur text-white text-xs md:text-sm font-bold tracking-wider uppercase pointer-events-none">
        {beforeLabel}
      </span>
      <span className="absolute top-3 right-3 md:top-4 md:right-4 px-3 py-1.5 rounded-full bg-[var(--color-primary)] text-white text-xs md:text-sm font-bold tracking-wider uppercase pointer-events-none">
        {afterLabel}
      </span>

      <div
        className="absolute top-0 bottom-0 pointer-events-none"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        aria-hidden="true"
      >
        <div className="h-full w-[3px] bg-white shadow-[0_0_0_1px_rgba(10,37,64,0.3)]" />
      </div>

      <button
        type="button"
        role="slider"
        aria-label="Sposta per confrontare prima e dopo"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-valuetext={`${Math.round(pos)}% prima, ${Math.round(100 - pos)}% dopo`}
        onKeyDown={onKeyDown}
        className={cn(
          "absolute top-1/2 grid place-items-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-[var(--color-primary)] shadow-lg border-2 border-white cursor-ew-resize",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]",
          dragging && "scale-110"
        )}
        style={{
          left: `${pos}%`,
          transform: "translate(-50%, -50%)",
          transition: dragging ? "none" : "transform 0.15s ease",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M8 6 2 12l6 6" />
          <path d="m16 6 6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
