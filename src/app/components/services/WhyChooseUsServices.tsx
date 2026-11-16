import { CheckCircle2 } from 'lucide-react';

const REASONS = [
  {
    title: 'Custom Solutions',
    description: 'We don’t believe in one-size-fits-all. Every solution is architected specifically around your unique business requirements and goals.',
  },
  {
    title: 'Modern Technology',
    description: 'We leverage the latest frameworks, cloud infrastructure, and best practices to ensure your product is fast, secure, and future-proof.',
  },
  {
    title: 'Project-Focused',
    description: 'We prioritize practical, measurable outcomes over vanity metrics, ensuring every feature we build delivers actual business value.',
  },
  {
    title: 'Scalable Architecture',
    description: 'We build systems designed to grow with your organization, easily handling increased traffic and expanding feature sets.',
  },
  {
    title: 'Client Collaboration',
    description: 'We maintain clear, transparent communication throughout the entire development lifecycle, keeping you in the loop at all times.',
  },
  {
    title: 'Ongoing Support',
    description: 'Our commitment doesn’t end at launch. We provide reliable maintenance, updates, and support to keep your systems running smoothly.',
  },
];

export function WhyChooseUsServices() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          <div className="lg:col-span-1 lg:sticky lg:top-32">
            <p className="text-[var(--navy)] font-semibold tracking-wider uppercase text-sm mb-3">Our Advantage</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Why Choose <br className="hidden lg:block"/> Us For Your Next Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              Partnering with C2C means working with a dedicated team that is as invested in your success as you are.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-[var(--yellow)] text-[var(--navy)] px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all shadow-md"
            >
              Start Your Journey
            </a>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {REASONS.map((reason, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl font-black text-gray-100 group-hover:text-blue-50 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--navy)]" style={{ fontFamily: 'var(--font-heading)' }}>
                    {reason.title}
                  </h3>
                </div>
                <p className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
