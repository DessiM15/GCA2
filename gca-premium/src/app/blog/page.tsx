import type { Metadata } from "next";
import BlogListContent from "@/components/BlogListContent";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Industry insights, technical knowledge, and company updates from Gulf Coast Alloys.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog — Gulf Coast Alloys, LLC",
    description:
      "Industry insights, technical knowledge, and company updates from Gulf Coast Alloys.",
    url: "/blog",
    images: [
      {
        url: "/images/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Gulf Coast Alloys Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Gulf Coast Alloys, LLC",
    description:
      "Industry insights, technical knowledge, and company updates from Gulf Coast Alloys.",
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
      name: "Blog",
      item: "https://www.gulfcoastalloys.net/blog",
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogListContent />
    </>
  );
}
