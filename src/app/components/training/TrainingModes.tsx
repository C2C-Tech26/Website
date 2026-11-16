import { Building2, Globe2, MonitorSmartphone } from 'lucide-react';

export function TrainingModes() {
  const modes = [
    {
      title: 'Online Training',
      description: 'Learn from anywhere with our interactive live sessions. Get the same rigorous curriculum and expert mentorship from the comfort of your home.',
      icon: Globe2,
      features: ['Live Interactive Classes', 'Recorded Sessions Access', 'Online Doubt Clearing', 'Digital Study Material'],
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Offline / In-House',
      description: 'Experience immersive learning at our state-of-the-art facility. Interact directly with mentors and peers in a dedicated professional environment.',
      icon: Building2,
      features: ['Physical Classroom', '1-on-1 Interaction', 'Lab Facilities', 'Peer Networking'],
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Hybrid Training',
      description: 'The best of both worlds. Attend core conceptual classes online and visit the campus for practical lab sessions and project evaluations.',
      icon: MonitorSmartphone,
      features: ['Flexible Schedule', 'Campus Lab Access', 'Blended Learning', 'Optimal Convenience'],
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Flexible Training Modes
          </h2>
          <p className="text-gray-600 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
            Choose the learning mode that best fits your schedule, location, and learning style.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {modes.map((mode, index) => {
            const Icon = mode.icon;
            return (
              <div key={index} className="rounded-2xl border border-gray-200 p-8 hover:border-[var(--yellow)] transition-colors group relative overflow-hidden">
                <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full ${mode.bgColor} opacity-50 group-hover:scale-150 transition-transform duration-500`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl ${mode.bgColor} flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${mode.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--navy)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    {mode.title}
                  </h3>
                  <p className="text-gray-600 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
                    {mode.description}
                  </p>
                  <ul className="space-y-3">
                    {mode.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm text-gray-700 font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--yellow)] mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
