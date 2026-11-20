import { HeroSection } from '../components/HeroSection';
import { HomeAboutSection } from '../components/HomeAboutSection';
import { HomeProgramsSection } from '../components/HomeProgramsSection';
import { InspirationSection } from '../components/InspirationSection';
import { ServicesSection } from '../components/ServicesSection';
import { VisionMissionSection } from '../components/VisionMissionSection';
import { CoreValuesSection } from '../components/CoreValuesSection';
import { LeadershipSection } from '../components/LeadershipSection';
import { InstagramFeed } from '../components/InstagramFeed';
import { ContactSection } from '../components/ContactSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeAboutSection />
      <ServicesSection />
      <HomeProgramsSection />
      <InspirationSection />
      <VisionMissionSection />
      <LeadershipSection />
      <CoreValuesSection />
      <InstagramFeed />
      <ContactSection />
    </>
  );
}
