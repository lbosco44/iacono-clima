import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { HomePage } from "@/pages/HomePage";
import { ProductsPage } from "@/pages/ProductsPage";
import { initLenis } from "@/lib/lenis";

function App() {
  useEffect(() => {
    initLenis();
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prodotti" element={<ProductsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
        <WhatsAppFab />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
