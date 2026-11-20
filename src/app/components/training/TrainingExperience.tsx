import { CheckCircle2 } from 'lucide-react';

export function TrainingExperience() {
  const steps = [
    {
      number: '01',
      title: 'Learn',
      description: 'Understand core concepts from fundamentals to advanced topics with structured lectures.'
    },
    {
      number: '02',
      title: 'Practice',
      description: 'Apply what you learn through hands-on coding exercises and practical assignments.'
    },
    {
      number: '03',
      title: 'Build',
      description: 'Create real-world applications and integrate them into a professional portfolio.'
    },
    {
      number: '04',
      title: 'Get Mentored',
      description: 'Receive continuous guidance, code reviews, and doubt clarification from experts.'
    },
    {
      number: '05',
      title: 'Get Certified',
      description: 'Complete the program successfully and receive an industry-recognized certificate.'
    },
    {
      number: '06',
      title: 'Grow',
      description: 'Leverage your new skills for internships, placements, and professional opportunities.'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-8 bg-[var(--navy)] text-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Our Learning Approach
          </h2>
          <p className="text-white/80 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
            A proven methodology designed to transform beginners into job-ready professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl font-extrabold text-white/10" style={{ fontFamily: 'var(--font-heading)' }}>
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-[var(--yellow)]" style={{ fontFamily: 'var(--font-heading)' }}>
                  {step.title}
                </h3>
              </div>
              <p className="text-white/70 pl-2 border-l-2 border-[var(--yellow)]/30 py-1" style={{ fontFamily: 'var(--font-body)' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
