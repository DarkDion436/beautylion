import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import FloatingCartButton from "@/components/FloatingCartButton";
import WhatsAppButton from "@/components/WhatsAppButton";


export const metadata: Metadata = {
  title: "LION-BEAUTY-SHOP — Premium Beauty, Delivered",
  description:
    "Considered skincare, haircare, makeup, and fragrance essentials. Guest checkout with M-Pesa payment, delivered across Kenya.",
  icons: {
    icon: "/images/lionlogo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },



  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CartDrawer />
        <FloatingCartButton />
      </body>
    </html>
  );
}
