"use client";

import ScrollReveal from "./ScrollReveal";
import { useTranslation } from "@/i18n";

export default function AboutContent() {
  const { t } = useTranslation();

  const commitments = [
    { titleKey: "aboutPage.commitment1Title", descKey: "aboutPage.commitment1Desc" },
    { titleKey: "aboutPage.commitment2Title", descKey: "aboutPage.commitment2Desc" },
    { titleKey: "aboutPage.commitment3Title", descKey: "aboutPage.commitment3Desc" },
    { titleKey: "aboutPage.commitment4Title", descKey: "aboutPage.commitment4Desc" },
  ];

  const stats = [
    { valueKey: "aboutPage.stat1Value", labelKey: "aboutPage.stat1Label" },
    { valueKey: "aboutPage.stat2Value", labelKey: "aboutPage.stat2Label" },
    { valueKey: "aboutPage.stat3Value", labelKey: "aboutPage.stat3Label" },
    { valueKey: "aboutPage.stat4Value", labelKey: "aboutPage.stat4Label" },
  ];

  return (
    <>
      <section className="bg-navy-dark text-white pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-steel-light text-sm tracking-[0.3em] uppercase font-medium mb-4">
              {t("aboutPage.subtitle")}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              {t("aboutPage.title1")}
              <br />
              {t("aboutPage.title2")}
            </h1>
            <div className="h-1 w-16 bg-steel mt-6" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <h2 className="text-3xl font-bold text-navy mb-6">{t("aboutPage.storyTitle")}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("aboutPage.storyP1")}
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                {t("aboutPage.storyP2")}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {t("aboutPage.commitmentTitle")}
              </h2>
              <div className="space-y-6">
                {commitments.map((item) => (
                  <div key={item.titleKey} className="border-l-2 border-steel pl-6">
                    <h3 className="font-bold text-navy">{t(item.titleKey)}</h3>
                    <p className="mt-1 text-gray-600 text-sm leading-relaxed">
                      {t(item.descKey)}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.labelKey} className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-navy">
                    {t(stat.valueKey)}
                  </div>
                  <div className="text-xs tracking-wider uppercase text-gray-500 mt-2">
                    {t(stat.labelKey)}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
