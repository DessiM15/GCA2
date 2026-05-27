"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { useTranslation } from "@/i18n";

export default function PartnersPreview() {
  const { t } = useTranslation();

  const highlights = [
    { count: "20+", labelKey: "partnersPreview.stat1" },
    { count: "5+", labelKey: "partnersPreview.stat2" },
    { count: "100%", labelKey: "partnersPreview.stat3" },
  ];

  return (
    <section id="partners" className="py-24 sm:py-32 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <p className="text-steel-light text-sm tracking-[0.3em] uppercase font-medium mb-4">
              {t("partnersPreview.subtitle")}
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              {t("partnersPreview.title1")}
              <br />
              {t("partnersPreview.title2")}
            </h2>
            <div className="h-1 w-16 bg-steel mt-6 mb-8" />
            <p className="text-lg text-gray-300 leading-relaxed">
              {t("partnersPreview.description")}
            </p>
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold tracking-wide uppercase text-steel-light hover:text-white transition-colors group"
            >
              {t("partnersPreview.link")}
              <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/partners-img.jpg"
                  alt="Offshore drilling platform at sunset"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/20" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.labelKey}
                    className="text-center p-5 border border-white/10 bg-white/5"
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-steel-light">
                      {item.count}
                    </div>
                    <div className="text-xs tracking-wider uppercase text-gray-400 mt-2">
                      {t(item.labelKey)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
