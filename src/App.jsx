import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppFab } from "./components/WhatsAppFab";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prodotti" element={<ProductsPage />} />
        </Routes>
        <Footer />
        <WhatsAppFab />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
