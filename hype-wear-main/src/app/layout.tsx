import type { Metadata } from "next";
import { Geist, Geist_Mono, Sedan_SC, Ramaraja } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Import fonts from Figma design
const sedanSC = Sedan_SC({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-sedan-sc",
});

const ramaraja = Ramaraja({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-ramaraja",
});

export const metadata: Metadata = {
  title: "HypeWear - Carrinho",
  description: "Carrinho de compras da HypeWear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sedanSC.variable} ${ramaraja.variable} antialiased`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
