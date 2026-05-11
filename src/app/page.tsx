import Hero from "@/components/home/Hero";
import FeatureShowcase from "@/components/home/FeatureShowcase";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import SkillsStrip from "@/components/home/SkillsStrip";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SkillsStrip />
      <FeatureShowcase />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}
