import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Gulf Coast Alloys for a quote or to learn more about our metals and alloy products.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — Gulf Coast Alloys, LLC",
    description:
      "Get in touch with Gulf Coast Alloys for a quote or to learn more about our metals and alloy products.",
    url: "/contact",
    images: [
      {
        url: "/images/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Gulf Coast Alloys",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Gulf Coast Alloys, LLC",
    description:
      "Get in touch with Gulf Coast Alloys for a quote or to learn more about our metals and alloy products.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-dark text-white pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-steel-light text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Contact Us
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
                  Send Us a Message
                </h2>
                <ContactForm />
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="space-y-8">
                  {[
                    {
                      label: "Email",
                      value: "stacy@gulfcoastalloys.net",
                      href: "mailto:stacy@gulfcoastalloys.net",
                    },
                    {
                      label: "Phone",
                      value: "832-259-9102",
                      href: "tel:832-259-9102",
                    },
                    {
                      label: "Location",
                      value: "Houston, TX",
                      href: undefined,
                    },
                  ].map((item) => (
                    <div key={item.label} className="border-l-2 border-steel pl-6">
                      <p className="text-xs font-medium tracking-wider uppercase text-gray-400 mb-1">
                        {item.label}
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
