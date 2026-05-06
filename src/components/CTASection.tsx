import ScrollReveal from "./ScrollReveal";
import CTAForm from "./CTAForm";

export default function CTASection() {
  return (
    <section id="cta" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal direction="left">
            <p className="text-steel text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Get Started
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy leading-tight">
              Ready to Discuss
              <br />
              Your Next Project?
            </h2>
            <div className="h-1 w-16 bg-steel mt-6 mb-8" />
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you need a competitive quote, technical specifications, or
              guidance on material selection — our team is here to help.
            </p>
            <div className="mt-8 space-y-4 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-steel flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:stacy@gulfcoastalloys.net" className="hover:text-navy transition-colors">
                  stacy@gulfcoastalloys.net
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-steel flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:832-259-9102" className="hover:text-navy transition-colors">
                  832-259-9102
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-steel flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Houston, TX
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="bg-white border border-gray-200 p-8 sm:p-10 shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-6">
                Request a Quote
              </h3>
              <CTAForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
