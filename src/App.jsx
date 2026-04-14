import { ErrorBoundary } from "./components/ErrorBoundary";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Trust } from "./components/Trust";
import { BeforeAfter } from "./components/BeforeAfter";
import { ServiceArea } from "./components/ServiceArea";
import { Faq } from "./components/Faq";
import { Testimonials } from "./components/Testimonials";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { WhatsAppFab } from "./components/WhatsAppFab";

function App() {
  return (
    <ErrorBoundary>
      <Header />
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
      <Footer />
      <WhatsAppFab />
    </ErrorBoundary>
  );
}

export default App;
