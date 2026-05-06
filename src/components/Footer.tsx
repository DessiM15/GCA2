import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/images/gca-logo.png"
              alt="Gulf Coast Alloys"
              width={120}
              height={120}
              className="mb-4"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              High-quality metals and alloys for oil &amp; gas, petrochemical,
              construction, and manufacturing.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Partners", href: "/partners" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">
              Capabilities
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Pipe (Seamless, Welded, SAW)</li>
              <li>BW &amp; Forged Fittings</li>
              <li>Flanges (All Grades)</li>
              <li>CuNi Products</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href="mailto:stacy@gulfcoastalloys.net"
                  className="hover:text-white transition-colors"
                >
                  stacy@gulfcoastalloys.net
                </a>
              </li>
              <li>
                <a
                  href="tel:832-259-9102"
                  className="hover:text-white transition-colors"
                >
                  832-259-9102
                </a>
              </li>
              <li>Houston, TX</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Gulf Coast Alloys, LLC. All rights
            reserved.
          </p>
          <p className="text-xs text-gray-500">
            Houston, Texas &mdash; Strength in Every Alloy
          </p>
        </div>
      </div>
    </footer>
  );
}
