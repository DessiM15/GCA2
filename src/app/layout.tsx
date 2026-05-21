import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import ClickToCall from "@/components/ClickToCall";
import { LanguageProvider } from "@/i18n";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gulfcoastalloys.net"),
  title: {
    default: "Gulf Coast Alloys, LLC — Strength in Every Alloy",
    template: "%s — Gulf Coast Alloys, LLC",
  },
  description:
    "Gulf Coast Alloys supplies high-quality metals and alloys for oil & gas, petrochemical, construction, and manufacturing industries. Based in Houston, TX.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Gulf Coast Alloys, LLC",
    title: "Gulf Coast Alloys, LLC — Strength in Every Alloy",
    description:
      "Gulf Coast Alloys supplies high-quality metals and alloys for oil & gas, petrochemical, construction, and manufacturing industries. Based in Houston, TX.",
    url: "/",
    images: [
      {
        url: "/images/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Gulf Coast Alloys — Industrial metals and alloys supplier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gulf Coast Alloys, LLC — Strength in Every Alloy",
    description:
      "Gulf Coast Alloys supplies high-quality metals and alloys for oil & gas, petrochemical, construction, and manufacturing industries. Based in Houston, TX.",
    images: ["/images/hero-1.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        {/* Preconnect to external origins for faster resource loading */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Structured Data — Organization + LocalBusiness + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.gulfcoastalloys.net/#organization",
                  name: "Gulf Coast Alloys, LLC",
                  url: "https://www.gulfcoastalloys.net",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.gulfcoastalloys.net/images/hero-1.jpg",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+1-832-259-9102",
                    contactType: "sales",
                    email: "stacy@gulfcoastalloys.net",
                    availableLanguage: ["English"],
                  },
                  sameAs: [],
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.gulfcoastalloys.net/#localbusiness",
                  name: "Gulf Coast Alloys, LLC",
                  url: "https://www.gulfcoastalloys.net",
                  telephone: "+1-832-259-9102",
                  email: "stacy@gulfcoastalloys.net",
                  image: "https://www.gulfcoastalloys.net/images/hero-1.jpg",
                  description:
                    "Gulf Coast Alloys supplies high-quality metals and alloys for oil & gas, petrochemical, construction, and manufacturing industries. Based in Houston, TX.",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Houston",
                    addressRegion: "TX",
                    addressCountry: "US",
                  },
                  priceRange: "$$",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.gulfcoastalloys.net/#website",
                  name: "Gulf Coast Alloys, LLC",
                  url: "https://www.gulfcoastalloys.net",
                  publisher: {
                    "@id": "https://www.gulfcoastalloys.net/#organization",
                  },
                },
              ],
            }),
          }}
        />

        {/* Google Search Console verification — replace content with your verification code */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}

        {/* Google Analytics 4 — uncomment and replace GA_MEASUREMENT_ID with your ID */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" /> */}
        {/* <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','GA_MEASUREMENT_ID');` }} /> */}
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <LanguageProvider>
          <SplashScreen>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ClickToCall />
          </SplashScreen>
        </LanguageProvider>
      </body>
    </html>
  );
}
