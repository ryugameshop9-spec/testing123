import ProductGrid from "@/components/ProductGrid";
import { products } from "@/lib/database/mock-data";

export default function Home() {
  return (
    <section className="space-y-6">
      <div className="rounded-2xl p-6 bg-gradient-to-r from-neon/30 to-accent/30 border border-white/10">
        <h1 className="text-3xl font-bold">Web App Toko Online Digital Auto Order WhatsApp</h1>
        <p className="text-gray-200 mt-2">Jual script, template, source code, dan jasa digital dengan checkout cepat langsung ke WhatsApp admin.</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-3">Produk Unggulan</h2>
        <ProductGrid products={products.filter((p) => p.is_featured)} />
      </div>
    </section>
  );
}
