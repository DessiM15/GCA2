import ScrollReveal from "./ScrollReveal";

const services = [
  {
    number: "01",
    title: "Pipe",
    subtitle: "Seamless, Welded & SAW",
    description:
      "Carbon steel, stainless steel, and high alloy pipe sourced from premier Korean and Vietnamese mills. Available in all standard sizes and schedules, with custom specifications on request.",
  },
  {
    number: "02",
    title: "BW & Forged Fittings",
    subtitle: "All Grades & Configurations",
    description:
      "Butt-weld fittings in SS and alloy from Vintech (Vietnam) and leading Korean manufacturers. High-pressure forged fittings from SAM OH and KEONSAE in all grades.",
  },
  {
    number: "03",
    title: "Flanges",
    subtitle: "Every Grade, Every Size",
    description:
      "Comprehensive flange supply from over 10 Korean manufacturers including LS, HDFCO, DAE HEUNG, SHIN WOO, and PILLAR. All grades from carbon steel through specialty CuNi.",
  },
  {
    number: "04",
    title: "CuNi Products",
    subtitle: "Marine & Specialty Applications",
    description:
      "Copper-Nickel fittings from HAE WON and CuNi flanges from BM MEtal. Purpose-built for offshore platforms, naval vessels, and coastal installations requiring superior corrosion resistance.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-steel text-sm tracking-[0.3em] uppercase font-medium mb-4">
              What We Supply
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy">
              Core Capabilities
            </h2>
            <div className="h-1 w-16 bg-steel mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="space-y-0">
          {services.map((service, i) => (
            <ScrollReveal key={service.number} delay={i * 0.1}>
              <div className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 border-b border-gray-200 last:border-0 hover:bg-white/80 transition-colors px-4 lg:px-8 -mx-4 lg:-mx-8">
                <div className="lg:col-span-1">
                  <span className="text-5xl lg:text-6xl font-bold text-gray-200 group-hover:text-steel transition-colors">
                    {service.number}
                  </span>
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-2xl font-bold text-navy">
                    {service.title}
                  </h3>
                  <p className="text-sm text-steel mt-1 tracking-wide">
                    {service.subtitle}
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
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
