import type { Metadata } from "next";
import { Inter, Playfair_Display, Montserrat, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar.client";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav.client";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Westley's Restocafe | Modern Dining. Timeless Flavor.",
  description: "Westley's Restocafe is the #1 restaurant in Edappally, Kochi. Experience international cuisines, premium steaks, and a quiet, minimalist ambiance.",
  keywords: "Westley's Restocafe, Kochi Restaurant, Edappally Dining, Best Steak Kochi, International Cafe Kerala",
  openGraph: {
    title: "Westley's Restocafe | Modern Dining. Timeless Flavor.",
    description: "Premium modern dining in the heart of Kochi — crafted for taste, built for comfort.",
    url: "https://westleysrestocafe.com",
    siteName: "Westley's Restocafe",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${montserrat.variable} ${dmSans.variable} antialiased`}
      >
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
