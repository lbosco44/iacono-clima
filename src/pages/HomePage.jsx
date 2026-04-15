import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { Services } from "../components/Services";
import { Process } from "../components/Process";
import { Trust } from "../components/Trust";
import { BeforeAfter } from "../components/BeforeAfter";
import { ServiceArea } from "../components/ServiceArea";
import { Faq } from "../components/Faq";
import { Testimonials } from "../components/Testimonials";
import { ContactForm } from "../components/ContactForm";

export function HomePage() {
  useEffect(() => {
    document.title =
      "Iacono Clima | Installatori Climatizzatori Siracusa — Certificati F-GAS";
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 72;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 120);
    }
  }, []);

  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Trust />
      <BeforeAfter />
      <ServiceArea />
      <Faq />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
