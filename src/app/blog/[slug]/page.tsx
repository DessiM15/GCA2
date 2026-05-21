import type { Metadata } from "next";
import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import BlogPostContent from "@/components/BlogPostContent";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${post.title} — Gulf Coast Alloys`,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      section: post.category,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — Gulf Coast Alloys`,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://www.gulfcoastalloys.net${post.image}`,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://www.gulfcoastalloys.net",
    },
    publisher: {
      "@type": "Organization",
      name: "Gulf Coast Alloys, LLC",
      logo: {
        "@type": "ImageObject",
        url: "https://www.gulfcoastalloys.net/images/hero-1.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.gulfcoastalloys.net/blog/${post.slug}`,
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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.gulfcoastalloys.net/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogPostContent post={post} />
    </>
  );
}
