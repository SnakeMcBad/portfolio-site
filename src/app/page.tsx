import Hero from "@/components/home/Hero";
import HeroCarousel from "@/components/shared/HeroCarousel";
import FeatureShowcase from "@/components/home/FeatureShowcase";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import SkillsStrip from "@/components/home/SkillsStrip";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroCarousel />
      <SkillsStrip />
      <FeatureShowcase />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}
