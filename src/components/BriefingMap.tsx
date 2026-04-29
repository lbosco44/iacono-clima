import { useEffect, useRef } from "react";
import { site } from "@/data/site";

export function BriefingMap() {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    if (!ref.current) return;
    let cancelled = false;

    (async () => {
      // Import CSS e JS insieme — entrambi lazy, non bloccano il bundle iniziale
      const [{ default: L }] = await Promise.all([
        import("leaflet"),
        // Vite gestisce il CSS come side-effect module
        import("leaflet/dist/leaflet.css" as string),
      ]);

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

      const blueIcon = L.divIcon({
        className: "iacono-pin",
        html: `<div style="
          width: 26px; height: 26px; border-radius: 50%;
          background: #0066CC; border: 4px solid #0F1B2D;
          box-shadow: 0 4px 12px rgba(15,27,45,0.35);
        " role="presentation"></div>`,
        iconSize: [26, 26],
        iconAnchor: [13, 13],
      });

      L.marker([lat, lng], { icon: blueIcon, alt: "Iacono Clima — Via Filisto 71/73, Siracusa" })
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

  const mapsUrl = `https://www.openstreetmap.org/?mlat=${site.address.geo.lat}&mlon=${site.address.geo.lng}&zoom=17`;

  return (
    <div className="relative">
      <div className="absolute top-5 left-5 z-10 inline-flex items-center gap-2 px-3 py-2 bg-[var(--color-bg)] rounded-[3px] shadow-md">
        <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--color-ink)]">
          Showroom · Via Filisto 71/73
        </span>
      </div>

      {/* Alternativa tastiera/SR per chi non può usare la mappa interattiva */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="sr-only focus:not-sr-only focus:absolute focus:top-5 focus:right-5 focus:z-10 focus:inline-flex focus:items-center focus:h-10 focus:px-4 focus:bg-[var(--color-ink)] focus:text-[var(--color-bg)] focus:font-body focus:font-semibold focus:text-sm focus:rounded-[3px] focus:outline-none"
      >
        Apri indirizzo su OpenStreetMap — si apre in una nuova scheda
      </a>

      <div
        ref={ref}
        className="w-full h-[360px] lg:h-[480px] bg-[var(--color-bg-warm)]"
        role="region"
        aria-label="Mappa con la posizione dello showroom Iacono Clima a Siracusa, Via Filisto 71/73"
        tabIndex={0}
      />
    </div>
  );
}
