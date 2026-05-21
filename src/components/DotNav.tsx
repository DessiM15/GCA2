"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/i18n";

const sections = [
  { id: "hero", labelKey: "dotNav.home" },
  { id: "about", labelKey: "dotNav.about" },
  { id: "services", labelKey: "dotNav.services" },
  { id: "partners", labelKey: "dotNav.partners" },
  { id: "blog", labelKey: "dotNav.blog" },
  { id: "cta", labelKey: "dotNav.contact" },
];

export default function DotNav() {
  const [active, setActive] = useState("hero");
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {sections.map(({ id, labelKey }) => (
        <a
          key={id}
          href={`#${id}`}
          className="group flex items-center gap-3 justify-end"
          aria-label={t(labelKey)}
        >
          <span className="text-xs font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
            {t(labelKey)}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === id
                ? "w-3 h-3 bg-steel"
                : "w-2 h-2 bg-gray-300 group-hover:bg-steel-light"
            }`}
          />
        </a>
      ))}
    </div>
  );
}
