import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import DemoModeProvider from "@/components/DemoModeProvider";
import DemoToggle from "@/components/DemoToggle";
import ClickToCall from "@/components/ClickToCall";
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
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <DemoModeProvider>
          <SplashScreen>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <DemoToggle />
            <ClickToCall />
          </SplashScreen>
        </DemoModeProvider>
      </body>
    </html>
  );
}
