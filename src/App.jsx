import { ErrorBoundary } from "./components/ErrorBoundary";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { BeforeAfter } from "./components/BeforeAfter";
import { About } from "./components/About";
import { Brands } from "./components/Brands";
import { ServiceArea } from "./components/ServiceArea";
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
        <WhyUs />
        <BeforeAfter />
        <About />
        <Brands />
        <ServiceArea />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFab />
    </ErrorBoundary>
  );
}

export default App;
