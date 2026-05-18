import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Mill Partners",
  description:
    "Our direct partnerships with leading steel mills and manufacturers across South Korea and Vietnam.",
  alternates: {
    canonical: "/partners",
  },
  openGraph: {
    title: "Mill Partners — Gulf Coast Alloys, LLC",
    description:
      "Our direct partnerships with leading steel mills and manufacturers across South Korea and Vietnam.",
    url: "/partners",
    images: [
      {
        url: "/images/partners-img.jpg",
        width: 1200,
        height: 630,
        alt: "Gulf Coast Alloys Mill Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mill Partners — Gulf Coast Alloys, LLC",
    description:
      "Our direct partnerships with leading steel mills and manufacturers across South Korea and Vietnam.",
  },
};

const partnerCategories = [
  {
    title: "Pipe Mills",
    description: "Carbon steel SAW pipe, CS/SS welded pipe, and SS & alloy pipe",
    partners: [
      { name: "HYUNDAI", origin: "S. Korea", spec: "CS Saw" },
      { name: "DONG YANG", origin: "S. Korea", spec: "CS Saw" },
      { name: "DAI DUCK", origin: "S. Korea", spec: "CS Saw" },
      { name: "SEAH", origin: "S. Korea", spec: "CS/SS Welded" },
      { name: "VinLong", origin: "Vietnam", spec: "SS & Alloys" },
    ],
  },
  {
    title: "BW Fittings",
    description: "Butt-weld fittings in stainless steel, alloy, and carbon steel",
    partners: [
      { name: "Vintech", origin: "Vietnam", spec: "SS / Alloy" },
      { name: "TK, DK, JIN IL, YS", origin: "S. Korea", spec: "SS" },
      { name: "PFC, SBC, JOUN, KYEONG NAM", origin: "S. Korea", spec: "CS" },
      { name: "WSM", origin: "S. Korea", spec: "CS / SS" },
    ],
  },
  {
    title: "Forged Fittings",
    description: "High-pressure socket-weld fittings across all grades",
    partners: [
      { name: "SAM OH, KEONSAE", origin: "S. Korea", spec: "High Pressure SSF — All Grades" },
    ],
  },
  {
    title: "Flanges",
    description: "Complete flange coverage in all grades including CuNi",
    partners: [
      { name: "LS, HDFCO, DAE HEUNG, SHIN WOO, PILLAR", origin: "S. Korea", spec: "All Grades" },
      { name: "TAE IL, KUM OH, JAIL, CHANG SHIN", origin: "S. Korea", spec: "All Grades" },
      { name: "BM MEtal", origin: "S. Korea", spec: "CuNi Flanges" },
    ],
  },
  {
    title: "Specialty",
    description: "CuNi fittings for marine and offshore applications",
    partners: [
      { name: "HAE WON", origin: "S. Korea", spec: "CuNi Fittings" },
    ],
  },
];

export default function PartnersPage() {
  return (
    <>
      <section className="bg-navy-dark text-white pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-steel-light text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Our Network
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Mill Partners
            </h1>
            <div className="h-1 w-16 bg-steel mt-6" />
            <p className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed">
              Direct relationships with leading manufacturers across South Korea
              and Vietnam, ensuring quality, competitive pricing, and reliable
              delivery.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {partnerCategories.map((category, ci) => (
            <ScrollReveal key={category.title} delay={ci * 0.1}>
              <div className="border-b border-gray-200 pb-16 last:border-0 last:pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-1">
                    <h2 className="text-2xl font-bold text-navy">
                      {category.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.partners.map((partner) => (
                        <div
                          key={partner.name}
                          className="border border-gray-200 p-5 hover:border-steel/30 hover:shadow-sm transition-all"
                        >
                          <h3 className="font-semibold text-navy text-sm">
                            {partner.name}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1">
                            {partner.origin}
                          </p>
                          <p className="text-xs text-steel mt-2 font-medium">
                            {partner.spec}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
