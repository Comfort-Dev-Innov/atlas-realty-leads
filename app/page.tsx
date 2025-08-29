import CustomerSection from '@/components/sections/CustomerSection';
import HeroSection from '@/components/sections/HeroSection';
import RealtorsSection from '@/components/sections/RealtorsSection';
import SimplePricing from '@/components/sections/SimplePricing';
import TimelineSection from '@/components/sections/TimelineSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function Home() {
  return (
    <div className="bg-[#fdfdfd] overflow-x-hidden flex flex-col items-center justify-center min-h-screen">
      <HeroSection />
      <RealtorsSection />
      <TimelineSection />
      <SimplePricing />
      <CustomerSection />
      <TestimonialsSection />
    </div>
  );
}
