import Link from "next/link";
export default function Navbar() {
  return <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur border-b border-white/10"><div className="container-app py-4 flex justify-between"><Link href="/" className="font-bold">DigitalStore</Link><div className="flex gap-4 text-sm"><Link href="/products">Produk</Link><Link href="/categories">Kategori</Link><Link href="/testimonials">Testimoni</Link><Link href="/kontak">Kontak</Link><Link href="/login">Admin</Link></div></div></nav>;
}
