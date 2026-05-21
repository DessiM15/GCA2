import type { Metadata } from "next";
import PartnersContent from "@/components/PartnersContent";

export const metadata: Metadata = {
  title: "Mill Partners",
  description:
    "Our direct partnerships with leading steel mills and manufacturers across South Korea and Vietnam.",
  alternates: {
    canonical: "/partners",
  },
  openGraph: {
    title: "Mill Partners — Gulf Coast Alloys, LLC",
    description:
      "Our direct partnerships with leading steel mills and manufacturers across South Korea and Vietnam.",
    url: "/partners",
    images: [
      {
        url: "/images/partners-img.jpg",
        width: 1200,
        height: 630,
        alt: "Gulf Coast Alloys Mill Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mill Partners — Gulf Coast Alloys, LLC",
    description:
      "Our direct partnerships with leading steel mills and manufacturers across South Korea and Vietnam.",
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
      name: "Mill Partners",
      item: "https://www.gulfcoastalloys.net/partners",
    },
  ],
};

export default function PartnersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PartnersContent />
    </>
  );
}
