import { Quote, Laptop, Globe, UserSearch, Lightbulb } from 'lucide-react';

export function AboutSection() {
  const pillars = [
    { name: 'Campus to Corporate', icon: Laptop, color: 'text-blue-500', bg: 'bg-blue-50' },
    { name: 'Clients to Conversions', icon: Globe, color: 'text-purple-500', bg: 'bg-purple-50' },
    { name: 'Candidate to Career', icon: UserSearch, color: 'text-orange-500', bg: 'bg-orange-50' },
    { name: 'Concept to Creation', icon: Lightbulb, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-8 bg-gray-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--yellow)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Pull Quote */}
          <div className="lg:col-span-5 relative">
            <Quote className="absolute -top-6 -left-6 w-16 h-16 text-[var(--yellow)] opacity-30 rotate-180" />
            <blockquote
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] leading-tight relative z-10"
            >
              "We traded corporate cabins for a startup mission."
            </blockquote>
            <div className="w-20 h-1.5 bg-[var(--yellow)] mt-8 rounded-full"></div>
          </div>

          {/* Right: Body Text */}
          <div className="lg:col-span-7">
            <p style={{ fontFamily: 'var(--font-body)' }} className="text-lg md:text-xl text-gray-700 leading-relaxed">
              <span className="font-bold text-[var(--navy)]">C2C Tech Solutions</span> is an EdTech & IT services company from Vijayawada, Andhra Pradesh,
              founded by three professionals who left their corporate careers to build AI & Quantum-ready
              talent for India&apos;s next generation. 
            </p>
            <p style={{ fontFamily: 'var(--font-body)' }} className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
              We bridge the gap between academic learning and industry
              readiness through comprehensive training and cutting-edge technology solutions.
            </p>
          </div>
        </div>

        {/* C2C Pillars Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl ${pillar.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${pillar.color}`} strokeWidth={1.5} />
                </div>
                <h3
                  className="text-lg font-bold text-[var(--navy)]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {pillar.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
