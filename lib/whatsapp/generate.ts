import type { Product } from "@/lib/database/mock-data";

export function generateOrderCode() {
  const stamp = Date.now().toString().slice(-6);
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `ORD-${stamp}${rand}`;
}

export function buildOrderMessage(input: {
  orderCode: string;
  customer_name: string;
  customer_whatsapp: string;
  customer_note?: string;
  product: Product;
  category: string;
}) {
  return `Halo Admin, saya ingin order produk digital.\n\nDetail Order:\nKode Order: ${input.orderCode}\nNama Pembeli: ${input.customer_name}\nNomor WhatsApp: ${input.customer_whatsapp}\nProduk: ${input.product.name}\nKategori: ${input.category}\nHarga: Rp ${Number(input.product.price).toLocaleString("id-ID")}\nCatatan: ${input.customer_note || "-"}\n\nMohon info pembayaran dan proses ordernya. Terima kasih.`;
}

export function generateWhatsAppLink(adminNumber: string, message: string) {
  const safeNumber = adminNumber.replace(/[^\d]/g, "");
  return `https://wa.me/${safeNumber}?text=${encodeURIComponent(message)}`;
}
