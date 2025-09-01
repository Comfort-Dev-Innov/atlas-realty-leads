import CustomerSection from '@/components/sections/CustomerSection';
import HeroSection from '@/components/sections/HeroSection';
import RealtorsSection from '@/components/sections/RealtorsSection';
import SimplePricing from '@/components/sections/SimplePricing';
import TimelineSection from '@/components/sections/TimelineSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import { CustomerFormDialog } from '@/components/ui/forms/CustomFormDialog';
import { TermsAndConditionsDialog } from '@/components/ui/forms/TermsAndConditionsDialog';

export default function Home() {
  return (
    <div className="bg-[#fdfdfd] overflow-x-hidden flex flex-col items-center justify-center min-h-screen pt-8">
      <CustomerFormDialog />
      <TermsAndConditionsDialog />
      <HeroSection />
      <RealtorsSection />
      <TimelineSection />
      <SimplePricing />
      <CustomerSection />
      <TestimonialsSection />
      <ContactSection />
      <FinalCTASection />
    </div>
  );
}
