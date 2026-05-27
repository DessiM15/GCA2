import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Gulf Coast Alloys for a quote or to learn more about our metals and alloy products.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — Gulf Coast Alloys, LLC",
    description:
      "Get in touch with Gulf Coast Alloys for a quote or to learn more about our metals and alloy products.",
    url: "/contact",
    images: [
      {
        url: "/images/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Gulf Coast Alloys",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Gulf Coast Alloys, LLC",
    description:
      "Get in touch with Gulf Coast Alloys for a quote or to learn more about our metals and alloy products.",
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
      name: "Contact",
      item: "https://www.gulfcoastalloys.net/contact",
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ContactContent />
    </>
  );
}
