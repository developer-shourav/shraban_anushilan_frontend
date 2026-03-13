import type { Metadata } from "next";
import { Google_Sans_Flex, Geist_Mono, Playfair_Display } from "next/font/google";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  variable: "--font-google-sans-flex",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "শ্রবণানুশীলন Shrabananushilan",
  description:
    "Hare Krishna Shrabananushilan is a non-profit organization dedicated to promoting the teachings of Lord Krishna and fostering spiritual growth. We organize various events, workshops, and community activities to spread the message of love, compassion, and devotion. Join us in our mission to create a harmonious and spiritually enriched society.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${googleSansFlex.variable} ${geistMono.variable} ${playfairDisplay.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
