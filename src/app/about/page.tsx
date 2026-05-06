import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About — Gulf Coast Alloys, LLC",
  description:
    "Learn about Gulf Coast Alloys, our mission, and our commitment to quality metals and alloys for the oil & gas industry.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-dark text-white pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-steel-light text-sm tracking-[0.3em] uppercase font-medium mb-4">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Built on Direct
              <br />
              Relationships
            </h1>
            <div className="h-1 w-16 bg-steel mt-6" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Gulf Coast Alloys, LLC was founded in Houston, Texas — the
                energy capital of the world — with a clear mission: provide the
                oil &amp; gas, petrochemical, construction, and manufacturing
                industries with high-quality metals and alloys, sourced
                directly from the world&apos;s best mills.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                By building and maintaining direct relationships with over 20
                mills and manufacturers across South Korea and Vietnam, we
                eliminate unnecessary middlemen from the supply chain. This means
                better quality assurance, competitive pricing, and faster
                delivery for our customers.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Our Commitment
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Quality First",
                    desc: "Every product we supply meets or exceeds international standards including ASME, ASTM, API, and NACE specifications.",
                  },
                  {
                    title: "On-Time Delivery",
                    desc: "Direct mill communication enables accurate lead times and the ability to expedite when your project demands it.",
                  },
                  {
                    title: "Technical Expertise",
                    desc: "Our team understands the materials, the specifications, and the applications — so we can help you source the right product every time.",
                  },
                  {
                    title: "Competitive Pricing",
                    desc: "By going direct to the source, we secure pricing advantages that we pass along to our customers.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-steel pl-6">
                    <h3 className="font-bold text-navy">{item.title}</h3>
                    <p className="mt-1 text-gray-600 text-sm leading-relaxed">
                      {item.desc}
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
              {[
                { value: "20+", label: "Mill Partners" },
                { value: "4", label: "Product Categories" },
                { value: "100%", label: "Direct Sourcing" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-navy">
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-wider uppercase text-gray-500 mt-2">
                    {stat.label}
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
