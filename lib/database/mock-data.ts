export type Category = { id: number; name: string; slug: string; description: string; icon: string; status: "active" | "inactive" };
export type Product = {
  id: number;
  category_id: number;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  price: number;
  image: string;
  demo_url: string;
  type: "digital" | "service";
  status: "active" | "inactive";
  is_featured: boolean;
  sold_count: number;
  benefits: string[];
};

export const categories: Category[] = [
  { id: 1, name: "Script Website", slug: "script-website", description: "Produk script siap pakai", icon: "💻", status: "active" },
  { id: 2, name: "Jasa Website", slug: "jasa-website", description: "Jasa pembuatan website custom", icon: "🛠️", status: "active" },
  { id: 3, name: "Desain", slug: "desain", description: "Template dan desain banner", icon: "🎨", status: "active" }
];

export const products: Product[] = [
  {
    id: 1, category_id: 1, name: "Script Toko Digital Next.js", slug: "script-toko-digital-nextjs",
    description: "Source code lengkap toko digital auto order WhatsApp dengan panel admin.", short_description: "Template toko digital premium",
    price: 750000, image: "/images/p1.png", demo_url: "https://example.com/demo", type: "digital", status: "active", is_featured: true, sold_count: 78,
    benefits: ["Full source code", "Free update 3 bulan", "Dokumentasi instalasi"]
  },
  {
    id: 2, category_id: 2, name: "Jasa Pembuatan Website Company", slug: "jasa-pembuatan-website-company",
    description: "Jasa pembuatan website profesional untuk bisnis dan personal branding.", short_description: "Custom website sesuai kebutuhan",
    price: 2500000, image: "/images/p2.png", demo_url: "https://example.com/demo2", type: "service", status: "active", is_featured: true, sold_count: 30,
    benefits: ["Gratis domain .com 1 tahun", "Free revisi", "Bantuan deploy"]
  }
];

export const testimonials = [
  { id: 1, name: "Raka", message: "Order cepat dan support sangat responsif.", rating: 5, image: "", status: "active" },
  { id: 2, name: "Nadia", message: "Script rapi, mudah dikembangkan.", rating: 5, image: "", status: "active" }
];

export const settings = {
  site_name: "DigitalStore Pro",
  whatsapp_admin: process.env.NEXT_PUBLIC_WHATSAPP_ADMIN || "6281234567890",
  instagram: "https://instagram.com",
  telegram: "https://t.me"
};
