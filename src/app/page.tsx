import HeroCarousel from "@/components/HeroCarousel";
import AboutPreview from "@/components/AboutPreview";
import Services from "@/components/Services";
import PartnersPreview from "@/components/PartnersPreview";
import EmailCampaignDemo from "@/components/EmailCampaignDemo";
import HeyGenDemo from "@/components/HeyGenDemo";
import SocialMediaDemo from "@/components/SocialMediaDemo";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTASection";
import DotNav from "@/components/DotNav";
import DemoSection from "@/components/DemoSection";

export default function Home() {
  return (
    <>
      <DotNav />
      <HeroCarousel />
      <AboutPreview />
      <Services />
      <PartnersPreview />
      <DemoSection>
        <EmailCampaignDemo />
      </DemoSection>
      <DemoSection>
        <HeyGenDemo />
      </DemoSection>
      <DemoSection>
        <SocialMediaDemo />
      </DemoSection>
      <BlogPreview />
      <CTASection />
    </>
  );
}
