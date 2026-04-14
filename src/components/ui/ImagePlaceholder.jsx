import { useState } from "react";
import { cn } from "../../lib/cn";

export function ImagePlaceholder({
  name,
  alt,
  aspect = "4 / 3",
  className,
  objectPosition = "center",
  rounded = "rounded-2xl",
  priority = false,
}) {
  const [failed, setFailed] = useState(false);
  const src = `/images/${name}`;

  const wrapperClass = cn(
    "relative overflow-hidden bg-[var(--color-accent)]",
    rounded,
    className
  );

  if (failed) {
    return (
      <div
        className={wrapperClass}
        style={{ aspectRatio: aspect }}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 grid place-items-center p-6">
          <div className="text-center">
            <svg
              className="mx-auto mb-3 text-[var(--color-primary)] opacity-60"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.5-3.5a2 2 0 0 0-2.83 0L4 22" />
            </svg>
            <span className="block text-xs md:text-sm font-semibold text-[var(--color-primary)] tracking-wide">
              [immagine: {name}]
            </span>
            {alt && (
              <span className="block text-[11px] mt-1 text-[var(--color-text-muted)] max-w-xs">
                {alt}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={wrapperClass} style={{ aspectRatio: aspect }}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchpriority={priority ? "high" : "auto"}
        decoding="async"
        onError={() => setFailed(true)}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
}
