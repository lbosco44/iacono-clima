import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { SkipLink } from "@/components/SkipLink";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { initLenis } from "@/lib/lenis";

// Lazy routes — riduce il bundle iniziale
// HomePage viene pre-fetchata immediatamente dopo il paint iniziale
// ProductsPage viene caricata solo alla navigazione verso /prodotti
const HomePage = lazy(() =>
  import("@/pages/HomePage").then((m) => ({ default: m.HomePage }))
);
const ProductsPage = lazy(() =>
  import("@/pages/ProductsPage").then((m) => ({ default: m.ProductsPage }))
);

/** Skeleton minimo — impedisce CLS durante il Suspense fallback */
function PageSkeleton() {
  return (
    <div
      aria-hidden="true"
      style={{ minHeight: "100svh", background: "var(--color-bg)" }}
    />
  );
}

function App() {
  useEffect(() => {
    initLenis();
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <SkipLink />
        <Header />
        <Suspense fallback={<PageSkeleton />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/prodotti" element={<ProductsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
        <Footer />
        <WhatsAppFab />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
