import ProductGrid from "@/components/ProductGrid";
import { categories, products } from "@/lib/database/mock-data";

export default function ProductsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Semua Produk Digital</h1>
      <p className="text-sm text-gray-300">Kategori: {categories.map((c) => c.name).join(" • ")}</p>
      <ProductGrid products={products} />
    </section>
  );
}
