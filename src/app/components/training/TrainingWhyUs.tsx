import { BookOpen, Briefcase, GraduationCap, Laptop, Lightbulb, Users } from 'lucide-react';

export function TrainingWhyUs() {
  const reasons = [
    {
      title: 'Industry-Relevant Curriculum',
      description: 'Our courses are designed by industry experts to match current market demands and technologies.',
      icon: BookOpen,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Hands-on Practical Training',
      description: 'Learn by doing with interactive coding sessions, assignments, and real-time problem solving.',
      icon: Laptop,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Real-World Projects',
      description: 'Build enterprise-grade applications that you can showcase in your portfolio to employers.',
      icon: Briefcase,
      color: 'text-[var(--yellow)]',
      bgColor: 'bg-[var(--yellow)]/10'
    },
    {
      title: 'Expert Mentorship',
      description: 'Get personalized guidance and code reviews from senior developers with years of experience.',
      icon: Users,
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Doubt-Clearing Sessions',
      description: 'Dedicated time to resolve all your queries and ensure you understand core concepts deeply.',
      icon: Lightbulb,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Career & Certification',
      description: 'Receive an industry-recognized certificate and get assistance with resume building and interviews.',
      icon: GraduationCap,
      color: 'text-pink-500',
      bgColor: 'bg-pink-50'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-8 bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Why Choose Our Training?
          </h2>
          <p className="text-gray-600 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
            We don't just teach code, we build careers. Experience a learning environment focused on practical skills and industry readiness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className={`w-14 h-14 rounded-xl ${reason.bgColor} flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${reason.color}`} />
                </div>
                <h3 className="text-xl font-bold text-[var(--navy)] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
