import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section id="cta" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-steel text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Get Started
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy leading-tight">
              Ready to Discuss
              <br />
              Your Next Project?
            </h2>
            <div className="h-1 w-16 bg-steel mx-auto mt-6 mb-8" />
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you need a competitive quote, technical specifications, or
              guidance on material selection — our team is here to help.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-navy px-10 py-4 text-sm font-semibold tracking-wide uppercase text-white hover:bg-navy-light transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:832-259-9102"
                className="inline-flex items-center justify-center border border-navy px-10 py-4 text-sm font-semibold tracking-wide uppercase text-navy hover:bg-navy hover:text-white transition-colors"
              >
                Call 832-259-9102
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
