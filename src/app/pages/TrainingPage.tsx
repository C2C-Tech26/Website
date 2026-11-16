import { TrainingHero } from '../components/training/TrainingHero';
import { TrainingStats } from '../components/training/TrainingStats';
import { TrainingCourseList } from '../components/training/TrainingCourseList';
import { TrainingWhyUs } from '../components/training/TrainingWhyUs';
import { TrainingExperience } from '../components/training/TrainingExperience';
import { TrainingProjects } from '../components/training/TrainingProjects';
import { TrainingModes } from '../components/training/TrainingModes';
import { TrainingTestimonials } from '../components/training/TrainingTestimonials';
import { TrainingFAQ } from '../components/training/TrainingFAQ';
import { TrainingEnquiryForm } from '../components/training/TrainingEnquiryForm';
import { TrainingCTA } from '../components/training/TrainingCTA';
import { useEffect } from 'react';

export function TrainingPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <TrainingHero />
      <TrainingStats />
      <TrainingCourseList />
      <TrainingWhyUs />
      <TrainingExperience />
      <TrainingProjects />
      <TrainingModes />
      <TrainingTestimonials />
      <TrainingFAQ />
      <TrainingEnquiryForm />
      <TrainingCTA />
    </div>
  );
}
