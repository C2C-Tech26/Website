import { useEffect } from 'react';
import { ServicesHero } from '../components/services/ServicesHero';
import { ServicesOverview } from '../components/services/ServicesOverview';
import { FeaturedServices } from '../components/services/FeaturedServices';
import { DevelopmentProcess } from '../components/services/DevelopmentProcess';
import { WhyChooseUsServices } from '../components/services/WhyChooseUsServices';
import { ServicesFAQ } from '../components/services/ServicesFAQ';
import { ServicesCTA } from '../components/services/ServicesCTA';
import { ContactSection } from '../components/ContactSection';

export function ServicesPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <ServicesHero />
      <ServicesOverview />
      <FeaturedServices />
      <DevelopmentProcess />
      <WhyChooseUsServices />
      <ServicesFAQ />
      <ServicesCTA />
      
      {/* Existing Contact Section at the very bottom as requested */}
      <ContactSection />
    </div>
  );
}
