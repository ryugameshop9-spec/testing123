# Web App Toko Online Digital Auto Order WhatsApp

Project ini adalah template siap deploy ke Vercel untuk jualan produk digital dan jasa dengan flow order cepat via WhatsApp.

## Stack
- Next.js App Router + React + Tailwind CSS
- API Route di `app/api/*`
- Prisma schema (`prisma/schema.prisma`)
- Validasi dengan Zod

## Fitur Utama
- Home, Produk, Detail Produk, Checkout WhatsApp, Kategori, Testimoni, Kontak
- Tombol **Order via WhatsApp** di kartu produk dan halaman detail
- Generate **kode order otomatis**
- Generate pesan WhatsApp otomatis sesuai format
- Link `wa.me` ter-encode menggunakan `encodeURIComponent`
- Halaman admin scaffold + endpoint admin scaffold

## Menjalankan Lokal
1. `cp .env.example .env`
2. Isi value env
3. `npm install`
4. `npm run dev`

## Deploy ke Vercel
1. Push ke GitHub
2. Import project di Vercel
3. Set environment variable:
   - `NEXT_PUBLIC_WHATSAPP_ADMIN`
   - `JWT_SECRET`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`
   - `DATABASE_URL`
4. Deploy

## Endpoint Publik
- `GET /api/products`
- `GET /api/products/:slug`
- `GET /api/categories`
- `GET /api/banners`
- `GET /api/testimonials`
- `POST /api/orders`
- `GET /api/orders/:order_code`
- `POST /api/generate-whatsapp-link`

## Catatan
- Data saat ini masih mock data untuk demo.
- Untuk production penuh, sambungkan endpoint ke Prisma + database sungguhan.
