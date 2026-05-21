import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Gulf Coast Alloys, our mission, and our commitment to quality metals and alloys for the oil & gas industry.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — Gulf Coast Alloys, LLC",
    description:
      "Learn about Gulf Coast Alloys, our mission, and our commitment to quality metals and alloys for the oil & gas industry.",
    url: "/about",
    images: [
      {
        url: "/images/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "About Gulf Coast Alloys",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Gulf Coast Alloys, LLC",
    description:
      "Learn about Gulf Coast Alloys, our mission, and our commitment to quality metals and alloys for the oil & gas industry.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.gulfcoastalloys.net",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://www.gulfcoastalloys.net/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AboutContent />
    </>
  );
}
