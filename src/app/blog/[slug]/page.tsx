import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";

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

  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="text-2xl font-bold text-navy mt-10 mb-4">
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
            {items.map((item, j) => (
              <li
                key={j}
                dangerouslySetInnerHTML={{
                  __html: item
                    .replace("- ", "")
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                }}
              />
            ))}
          </ul>
        );
      }
      if (/^\d+\./.test(block)) {
        const items = block.split("\n").filter((l) => /^\d+\./.test(l));
        return (
          <ol key={i} className="list-decimal pl-6 space-y-2 text-gray-600 leading-relaxed">
            {items.map((item, j) => (
              <li
                key={j}
                dangerouslySetInnerHTML={{
                  __html: item
                    .replace(/^\d+\.\s*/, "")
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                }}
              />
            ))}
          </ol>
        );
      }
      return (
        <p
          key={i}
          className="text-lg text-gray-600 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: block.replace(
              /\*\*(.*?)\*\*/g,
              "<strong class='text-gray-800'>$1</strong>"
            ),
          }}
        />
      );
    });
  };

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

      <section className="bg-navy-dark text-white pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-steel-light hover:text-white transition-colors mb-6 group"
            >
              <svg className="h-4 w-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium tracking-wider uppercase text-steel-light">
                {post.category}
              </span>
              <span className="text-xs text-gray-400">{post.date}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight max-w-3xl">
              {post.title}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <div className="relative h-64 sm:h-80 lg:h-96 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/20" />
      </div>

      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="space-y-6">{renderContent(post.content)}</div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
