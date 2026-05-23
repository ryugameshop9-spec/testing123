import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="dark">
      <body>
        <Navbar />
        <main className="container-app py-8 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
