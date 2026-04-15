import { useEffect } from "react";
import { ProductsHero } from "../components/products/ProductsHero";
import { ProductCategory } from "../components/products/ProductCategory";
import { MaxaWarranty } from "../components/products/MaxaWarranty";
import { ProductsCta } from "../components/products/ProductsCta";
import { productCategories } from "../data/products";

export function ProductsPage() {
  useEffect(() => {
    document.title =
      "Prodotti | Iacono Clima — Climatizzatori Carrier e MAXA Siracusa";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ProductsHero />
      {productCategories.map((cat, i) => (
        <ProductCategory key={cat.id} category={cat} index={i} />
      ))}
      <MaxaWarranty />
      <ProductsCta />
    </main>
  );
}
