# Web App Toko Online Digital Auto Order WhatsApp

## Fitur
- Katalog produk digital, kategori, testimoni, halaman detail.
- Checkout sederhana dan generate link WhatsApp otomatis.
- Admin dashboard + endpoint CRUD dasar.
- Prisma schema lengkap sesuai kebutuhan.

## Struktur Folder
Lihat folder `app`, `components`, `lib`, `api`, `public`, `styles`, `prisma`.

## Instalasi
1. `npm install`
2. Salin `.env.example` ke `.env`
3. Atur `DATABASE_URL`, `JWT_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `NEXT_PUBLIC_BASE_URL`
4. `npx prisma generate`
5. `npm run dev`

## Cara Testing Order WhatsApp
1. Buka `/products`
2. Pilih produk lalu klik **Order via WhatsApp**
3. Isi form checkout
4. Sistem generate kode order + redirect ke `wa.me` dengan message ter-encode.

## Deploy Vercel
1. Push repo ke GitHub
2. Import project di Vercel
3. Set semua environment variable di dashboard Vercel
4. Deploy.

## Setting Nomor WhatsApp Admin
Ubah pada data settings (DB) atau file source `lib/database/mock-data.ts` untuk mode demo.

## Keamanan yang disiapkan
- Validasi input dengan Zod
- Format WA dan harga tervalidasi server-side
- JWT untuk auth admin
- Password bisa di-hash bcrypt saat implementasi DB nyata
- Gunakan `.env` untuk secret.
