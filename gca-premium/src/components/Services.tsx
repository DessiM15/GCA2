"use client";

import ScrollReveal from "./ScrollReveal";
import { useTranslation } from "@/i18n";

const serviceKeys = ["01", "02", "03", "04"] as const;

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-steel text-sm tracking-[0.3em] uppercase font-medium mb-4">
              {t("services.subtitle")}
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy">
              {t("services.title")}
            </h2>
            <div className="h-1 w-16 bg-steel mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="space-y-0">
          {serviceKeys.map((num, i) => (
            <ScrollReveal key={num} delay={i * 0.1}>
              <div className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 border-b border-gray-200 last:border-0 hover:bg-white/80 transition-colors px-4 lg:px-8 -mx-4 lg:-mx-8">
                <div className="lg:col-span-1">
                  <span className="text-5xl lg:text-6xl font-bold text-gray-200 group-hover:text-steel transition-colors">
                    {num}
                  </span>
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-2xl font-bold text-navy">
                    {t(`services.${num}.title`)}
                  </h3>
                  <p className="text-sm text-steel mt-1 tracking-wide">
                    {t(`services.${num}.subtitle`)}
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {t(`services.${num}.description`)}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
