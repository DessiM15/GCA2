import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gulf Coast Alloys, LLC — Strength in Every Alloy",
  description:
    "Gulf Coast Alloys supplies high-quality metals and alloys for oil & gas, petrochemical, construction, and manufacturing industries. Based in Houston, TX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <SplashScreen>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SplashScreen>
      </body>
    </html>
  );
}
