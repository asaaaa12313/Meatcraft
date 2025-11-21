import HeroSection from '@/components/sections/HeroSection';
import USPSection from '@/components/sections/USPSection';
import FeaturedMenuSection from '@/components/sections/FeaturedMenuSection';
import ReviewSection from '@/components/sections/ReviewSection';
import LocationSection from '@/components/sections/LocationSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <USPSection />
      <FeaturedMenuSection />
      <ReviewSection />
      <LocationSection />
    </>
  );
}
