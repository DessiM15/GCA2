import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog — Gulf Coast Alloys, LLC",
  description:
    "Industry insights, technical knowledge, and company updates from Gulf Coast Alloys.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy-dark text-white pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-steel-light text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Insights
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Blog
            </h1>
            <div className="h-1 w-16 bg-steel mt-6" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full"
                >
                  <article className="h-full border border-gray-200 hover:border-steel/30 hover:shadow-lg transition-all overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-medium tracking-wider uppercase text-steel">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        {post.date}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-navy group-hover:text-steel transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-6 text-xs font-semibold tracking-wide uppercase text-navy group-hover:text-steel transition-colors">
                      Read Article
                      <svg className="h-3 w-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
