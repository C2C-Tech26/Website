import { ArrowRight } from 'lucide-react';

export function TrainingCTA() {
  return (
    <section className="py-24 px-6 md:px-8 bg-[var(--navy)] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 rounded-full bg-[var(--yellow)]/10 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
          Ready to Upgrade Your Skills?
        </h2>
        <p className="text-xl text-white/80 mb-10 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
          Choose a course, learn from industry-focused trainers, build real projects, and take the next crucial step in your IT career.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => {
              document.getElementById('courses-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[var(--yellow)] text-[var(--navy)] font-bold text-lg hover:bg-[#E0B015] transition-all transform hover:-translate-y-1 shadow-lg"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Explore Courses
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button 
            onClick={() => {
              document.getElementById('enquiry-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-all"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
