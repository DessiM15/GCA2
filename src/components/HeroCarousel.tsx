"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/i18n";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/images/hero-1.jpg",
    alt: "Oil refinery with steel pipes and towers",
  },
  {
    image: "/images/hero-2.jpg",
    alt: "Offshore oil rig platform in ocean",
  },
  {
    image: "/images/hero-3.jpg",
    alt: "Petrochemical industrial plant",
  },
  {
    image: "/images/hero-4.jpg",
    alt: "Oil refinery illuminated at night",
  },
  {
    image: "/images/hero-5.jpg",
    alt: "Offshore platform at sunset",
  },
];

export default function HeroCarousel() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative h-screen min-h-[600px] max-h-[1000px]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        speed={1500}
        className="swiper-hero h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="relative">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-navy-dark/60" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-steel-light text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              {t("hero.location")}
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white">
              {t("hero.headline1")}
              <br />
              <span className="text-steel-light">{t("hero.headline2")}</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-lg">
              {t("hero.description")}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 pointer-events-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-none bg-steel px-8 py-4 text-sm font-semibold tracking-wide uppercase text-white hover:bg-steel-light transition-colors"
              >
                {t("hero.cta")}
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-none border border-white/40 px-8 py-4 text-sm font-semibold tracking-wide uppercase text-white hover:bg-white/10 transition-colors"
              >
                {t("hero.learnMore")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs tracking-[0.2em] uppercase">
          {t("hero.scroll")}
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
