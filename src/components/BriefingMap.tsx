import { useEffect, useRef } from "react";
import { site } from "@/data/site";

export function BriefingMap() {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    if (!ref.current) return;
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !ref.current) return;

      const { lat, lng } = site.address.geo;

      const map = L.map(ref.current, {
        center: [lat, lng],
        zoom: 16,
        scrollWheelZoom: false,
        attributionControl: true,
        zoomControl: true,
      });
      mapRef.current = map;

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        },
      ).addTo(map);

      const orangeIcon = L.divIcon({
        className: "iacono-pin",
        html: `<div style="
          width: 26px; height: 26px; border-radius: 50%;
          background: #E8763A; border: 4px solid #0F1B2D;
          box-shadow: 0 4px 12px rgba(15,27,45,0.35);
        "></div>`,
        iconSize: [26, 26],
        iconAnchor: [13, 13],
      });

      L.marker([lat, lng], { icon: orangeIcon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; line-height: 1.5;">
            <strong style="font-family: 'Inter', sans-serif; font-size: 13px;">Iacono Clima</strong><br />
            ${site.address.full}
          </div>`,
        );
    })();

    return () => {
      cancelled = true;
      const map = mapRef.current as { remove?: () => void } | null;
      map?.remove?.();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-5 left-5 z-10 inline-flex items-center gap-2 px-3 py-2 bg-[var(--color-bg)] rounded-[3px] shadow-md">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--color-ink)]">
          Showroom · Via Filisto 71/73
        </span>
      </div>
      <div
        ref={ref}
        className="w-full h-[360px] lg:h-[480px] bg-[var(--color-bg-warm)]"
        aria-label="Mappa con la posizione dello showroom Iacono Clima a Siracusa"
        role="region"
      />
    </div>
  );
}
