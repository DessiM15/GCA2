import HeroCarousel from "@/components/HeroCarousel";
import AboutPreview from "@/components/AboutPreview";
import Services from "@/components/Services";
import PartnersPreview from "@/components/PartnersPreview";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTASection";
import DotNav from "@/components/DotNav";

export default function Home() {
  return (
    <>
      <DotNav />
      <HeroCarousel />
      <AboutPreview />
      <Services />
      <PartnersPreview />
      <BlogPreview />
      <CTASection />
    </>
  );
}
