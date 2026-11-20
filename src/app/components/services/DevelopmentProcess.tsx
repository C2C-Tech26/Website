import { Search, PenTool, Layout, Code, PlayCircle, Rocket, ShieldCheck } from 'lucide-react';

const PROCESS_STEPS = [
  {
    icon: Search,
    title: 'Discover',
    description: 'We analyze your business requirements, target audience, and project goals to define a clear roadmap.',
    color: 'bg-blue-500'
  },
  {
    icon: PenTool,
    title: 'Plan',
    description: 'Defining the architecture, technology stack, and timeline to ensure a structured execution phase.',
    color: 'bg-indigo-500'
  },
  {
    icon: Layout,
    title: 'Design',
    description: 'Creating intuitive, user-centric wireframes and high-fidelity UI/UX designs for your approval.',
    color: 'bg-purple-500'
  },
  {
    icon: Code,
    title: 'Develop',
    description: 'Writing clean, scalable code using modern technologies, with regular progress updates.',
    color: 'bg-pink-500'
  },
  {
    icon: ShieldCheck,
    title: 'Test',
    description: 'Rigorous Quality Assurance (QA) testing for functionality, performance, and security.',
    color: 'bg-rose-500'
  },
  {
    icon: Rocket,
    title: 'Deploy',
    description: 'Smooth deployment to production servers and app stores, ensuring zero downtime.',
    color: 'bg-orange-500'
  },
];

export function DevelopmentProcess() {
  return (
    <section className="py-24 bg-[var(--navy)] text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#fff_25%,transparent_25%,transparent_75%,#fff_75%,#fff_100%),linear-gradient(45deg,#fff_25%,transparent_25%,transparent_75%,#fff_75%,#fff_100%)] bg-[length:40px_40px] bg-[position:0_0,20px_20px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-[var(--yellow)] font-semibold tracking-wider uppercase text-sm mb-3">Our Methodology</p>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            How We Turn Ideas Into Solutions
          </h2>
          <p className="text-lg text-gray-300" style={{ fontFamily: 'var(--font-body)' }}>
            A proven, transparent development process designed to deliver high-quality technology products on time and within budget.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex flex-col items-center group">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-2 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors pointer-events-none" style={{ fontFamily: 'var(--font-heading)' }}>
                    0{index + 1}
                  </div>
                  
                  {/* Icon Circle */}
                  <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300 relative z-10 border-4 border-[var(--navy)]`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-center px-2">
                    <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
