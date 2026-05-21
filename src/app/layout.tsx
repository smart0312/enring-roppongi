import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EnRing Roppongi | Craft Your Identity",
    template: "%s | EnRing Roppongi",
  },
  description:
    "A premium craft ring-making experience in Roppongi, Tokyo. Create your one-of-a-kind ring — and discover our intimate nighttime bar for inbound guests.",
  keywords: [
    "Roppongi",
    "Tokyo",
    "craft ring",
    "workshop",
    "inbound",
    "jewelry experience",
  ],
  openGraph: {
    title: "EnRing Roppongi",
    description: "Craft Your Identity. A Premium Ring Experience in Roppongi.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
