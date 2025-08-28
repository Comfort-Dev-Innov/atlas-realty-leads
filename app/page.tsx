import HeroSection from '@/components/sections/HeroSection';
import SimplePricing from '@/components/sections/SimplePricing';

export default function Home() {
  return (
    <div className="bg-[#fdfdfd] flex flex-col items-center justify-center min-h-screen">
      <HeroSection />
      <SimplePricing />
    </div>
  );
}
