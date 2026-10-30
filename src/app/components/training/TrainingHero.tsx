import { ArrowRight, Code2, Laptop } from 'lucide-react';
import { Link } from 'react-router';

export function TrainingHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy)] pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-b from-[var(--yellow)]/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-t from-blue-500/10 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--yellow)]/10 border border-[var(--yellow)]/20 text-[var(--yellow)] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--yellow)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--yellow)]"></span>
              </span>
              <span className="text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'var(--font-body)' }}>
                Professional IT Training
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Build Skills.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--yellow)] to-yellow-200">Build Projects.</span><br />
              Build Your Career.
            </h1>
            
            <p className="text-lg text-white/80 mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Learn industry-relevant technologies through practical, project-based training. Expert mentorship, real-world curriculum, and career-focused guidance to accelerate your IT career.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => {
                  document.getElementById('courses-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[var(--yellow)] text-[var(--navy)] font-medium hover:bg-[#E0B015] transition-all transform hover:-translate-y-0.5"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Explore Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={() => {
                  document.getElementById('enquiry-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-all"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Enquire Now
              </button>
            </div>
          </div>

          {/* Visual/Image Area */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Central element */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--yellow)]/20 to-blue-500/20 rounded-3xl transform rotate-6 border border-white/10 backdrop-blur-sm" />
              <div className="absolute inset-0 bg-white/5 rounded-3xl transform -rotate-3 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center p-8 shadow-2xl">
                
                {/* Mock code window */}
                <div className="w-full bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-white/10 mb-6 transform -translate-y-4 hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="ml-2 text-xs text-gray-400 font-mono">training.ts</div>
                  </div>
                  <div className="p-4 text-sm font-mono text-gray-300">
                    <div className="flex"><span className="text-pink-500 mr-2">const</span> <span className="text-blue-400">career</span> <span className="text-pink-500 mx-2">=</span> <span className="text-yellow-300">await</span> <span className="text-green-400">Code2Career</span>.start();</div>
                    <div className="flex mt-2"><span className="text-blue-400">career</span>.buildSkills([</div>
                    <div className="flex ml-4"><span className="text-orange-400">'React'</span>, <span className="text-orange-400">'Node.js'</span>, <span className="text-orange-400">'Python'</span>, <span className="text-orange-400">'AI/ML'</span></div>
                    <div className="flex">]);</div>
                    <div className="flex mt-2 text-gray-500">{'// Future is bright'}</div>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -right-8 top-12 bg-white rounded-xl p-4 shadow-xl flex items-center gap-4 animate-[bounce_3s_ease-in-out_infinite]">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-800">100% Practical</div>
                    <div className="text-xs text-gray-500">Project Based</div>
                  </div>
                </div>

                <div className="absolute -left-8 bottom-24 bg-[var(--navy)] rounded-xl p-4 shadow-xl flex items-center gap-4 border border-white/10 animate-[bounce_4s_ease-in-out_infinite] animation-delay-1000">
                  <div className="w-10 h-10 rounded-full bg-[var(--yellow)]/20 flex items-center justify-center text-[var(--yellow)]">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Industry Experts</div>
                    <div className="text-xs text-white/60">Top Mentors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
