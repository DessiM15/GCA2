"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { useTranslation } from "@/i18n";

export default function AboutPreview() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <p className="text-steel text-sm tracking-[0.3em] uppercase font-medium mb-4">
              {t("aboutPreview.subtitle")}
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy leading-tight">
              {t("aboutPreview.title1")}
              <br />
              {t("aboutPreview.title2")}
            </h2>
            <div className="h-1 w-16 bg-steel mt-6" />
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t("aboutPreview.description1")}
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              {t("aboutPreview.description2")}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold tracking-wide uppercase text-navy hover:text-steel transition-colors group"
            >
              {t("aboutPreview.link")}
              <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
