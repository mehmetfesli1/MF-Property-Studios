import HeroSection from '@/components/home/HeroSection';
import SocialProofSection from '@/components/home/SocialProofSection';
import ServicesShowcase from '@/components/home/ServicesShowcase';
import FeaturedPortfolio from '@/components/home/FeaturedPortfolio';
import CtaSection from '@/components/home/CtaSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <ServicesShowcase />
      <FeaturedPortfolio />
      <CtaSection />
    </>
  );
} 