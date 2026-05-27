"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/i18n";

export default function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { labelKey: "navbar.home", href: "/" },
    { labelKey: "navbar.about", href: "/about" },
    { labelKey: "navbar.partners", href: "/partners" },
    { labelKey: "navbar.blog", href: "/blog" },
    { labelKey: "navbar.contact", href: "/contact" },
  ];

  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/images/gca-logo.png"
              alt="Gulf Coast Alloys"
              width={160}
              height={160}
              className="mb-4"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">
              {t("footer.navigation")}
            </h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">
              {t("footer.capabilities")}
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>{t("footer.pipe")}</li>
              <li>{t("footer.fittings")}</li>
              <li>{t("footer.flanges")}</li>
              <li>{t("footer.cuni")}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">
              {t("footer.contact")}
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
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <p className="text-xs text-gray-500">
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
