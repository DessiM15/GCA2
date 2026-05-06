"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const leftLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ];

  const rightLinks = [
    { label: "Partners", href: "/partners" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/80 backdrop-blur-lg border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center transition-all duration-500 ${
            scrolled ? "h-28 justify-center" : "h-32 justify-between"
          }`}
        >
          {scrolled ? (
            <>
              <div className="hidden md:flex items-center gap-8 flex-1 justify-end pr-10">
                {leftLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[13px] font-medium tracking-wide uppercase text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/images/gca-logo.png"
                  alt="Gulf Coast Alloys"
                  width={100}
                  height={100}
                />
              </Link>

              <div className="hidden md:flex items-center gap-8 flex-1 pl-10">
                {rightLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[13px] font-medium tracking-wide uppercase text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <>
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/images/gca-logo.png"
                  alt="Gulf Coast Alloys"
                  width={110}
                  height={110}
                />
                <span className="hidden sm:block text-lg font-bold text-white drop-shadow-lg">
                  Gulf Coast Alloys
                </span>
              </Link>

              <div className="hidden md:flex items-center gap-8">
                {allLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[13px] font-medium tracking-wide uppercase text-white/90 hover:text-white transition-colors drop-shadow-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </>
          )}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors ${
              scrolled
                ? "text-white hover:text-white/80 absolute right-4"
                : "text-white hover:text-white/80"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className={`md:hidden border-t ${
            scrolled
              ? "bg-navy/95 backdrop-blur-lg border-white/10"
              : "bg-navy-dark/95 backdrop-blur-lg border-white/10"
          }`}
        >
          <div className="px-4 py-4 space-y-1">
            {allLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2.5 text-sm font-medium tracking-wide uppercase transition-colors ${
                  scrolled
                    ? "text-white/80 hover:text-white"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
