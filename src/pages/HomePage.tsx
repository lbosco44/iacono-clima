import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeroSistema } from "@/sections/HeroSistema";
import { ISistemi } from "@/sections/ISistemi";
import { ComeLavoriamo } from "@/sections/ComeLavoriamo";
import { Casi } from "@/sections/Casi";
import { SistemaIacono } from "@/sections/SistemaIacono";
import { Verdetti } from "@/sections/Verdetti";
import { Briefing } from "@/sections/Briefing";
import { scrollTo } from "@/lib/lenis";

export function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    document.title =
      "Iacono Clima — Climatizzazione Siracusa | Carrier · MAXA";
    if (!hash) return;
    setTimeout(() => scrollTo(hash, -80), 120);
  }, [hash]);

  return (
    <main id="main-content" tabIndex={-1}>
      <HeroSistema />
      <ISistemi />
      <ComeLavoriamo />
      <Casi />
      <SistemaIacono />
      <Verdetti />
      <Briefing />
    </main>
  );
}
