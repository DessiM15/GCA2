"use client";

import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";
import ScrollReveal from "./ScrollReveal";
import { useTranslation } from "@/i18n";

export default function BlogPreview() {
  const latestPosts = posts.slice(0, 3);
  const { t } = useTranslation();

  return (
    <section id="blog" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16">
            <div>
              <p className="text-steel text-sm tracking-[0.3em] uppercase font-medium mb-4">
                {t("blogPreview.subtitle")}
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-navy">
                {t("blogPreview.title")}
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 mt-6 sm:mt-0 text-sm font-semibold tracking-wide uppercase text-navy hover:text-steel transition-colors group"
            >
              {t("blogPreview.viewAll")}
              <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.15}>
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
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-navy group-hover:text-steel transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-6 text-xs font-semibold tracking-wide uppercase text-navy group-hover:text-steel transition-colors">
                      {t("blogPreview.readMore")}
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
  );
}
