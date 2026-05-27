"use client";

import ScrollReveal from "./ScrollReveal";
import ContactForm from "./ContactForm";
import { useTranslation } from "@/i18n";

export default function ContactContent() {
  const { t } = useTranslation();

  const contactInfo = [
    {
      labelKey: "contactPage.emailLabel",
      value: "stacy@gulfcoastalloys.net",
      href: "mailto:stacy@gulfcoastalloys.net",
    },
    {
      labelKey: "contactPage.phoneLabel",
      value: "832-259-9102",
      href: "tel:832-259-9102",
    },
    {
      labelKey: "contactPage.locationLabel",
      value: t("contactPage.locationValue"),
      href: undefined as string | undefined,
    },
  ];

  return (
    <>
      <section className="bg-navy-dark text-white pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-steel-light text-sm tracking-[0.3em] uppercase font-medium mb-4">
              {t("contactPage.subtitle")}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              {t("contactPage.title")}
            </h1>
            <div className="h-1 w-16 bg-steel mt-6" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <h2 className="text-2xl font-bold text-navy mb-8">
                  {t("contactPage.formTitle")}
                </h2>
                <ContactForm />
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="space-y-8">
                  {contactInfo.map((item) => (
                    <div key={item.labelKey} className="border-l-2 border-steel pl-6">
                      <p className="text-xs font-medium tracking-wider uppercase text-gray-400 mb-1">
                        {t(item.labelKey)}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-lg text-navy hover:text-steel transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg text-navy font-medium">
                          {item.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
