import { Globe, Laptop, Lightbulb, UserSearch, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const SERVICES = [
  {
    id: 'training',
    caption: 'Campus to Corporate (C2C)',
    title: 'IT Training & Placement',
    description: 'Bridge the gap between academic knowledge and industry requirements with our expert-led, hands-on training programs.',
    icon: Laptop,
    link: '/training',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'digital-marketing',
    caption: 'Clients to Conversions (C2C)',
    title: 'Digital Marketing',
    description: 'Transform your online presence with data-driven marketing strategies that drive real business growth and lead generation.',
    icon: Globe,
    link: '/digital-marketing',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'staffing',
    caption: 'Candidate to Career (C2C)',
    title: 'IT & Non IT Staffing',
    description: 'Find the right talent for your organization with our comprehensive staffing solutions across technical and non-technical domains.',
    icon: UserSearch,
    link: '#contact',
    color: 'from-orange-400 to-red-500'
  },
  {
    id: 'development',
    caption: 'Concept to Creation (C2C)',
    title: 'IT Product Development',
    description: 'Build scalable, secure, and high-performance software solutions tailored to your unique business requirements and challenges.',
    icon: Lightbulb,
    link: '#featured-services',
    color: 'from-emerald-400 to-teal-500'
  },
];

export function ServicesOverview() {
  return (
    <section id="what-we-do" className="py-24 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[var(--navy)] font-semibold tracking-wider uppercase text-sm mb-3">What We Do</p>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Comprehensive Technology Solutions
          </h2>
          <p className="text-lg text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
            We provide end-to-end technology services designed to empower businesses, educators, and professionals in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden flex flex-col h-full"
              >
                {/* Decorative background gradient on hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-[100px] -z-0`}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{service.caption}</p>
                  
                  <h3 
                    className="text-xl font-bold text-[var(--navy)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 flex-grow" style={{ fontFamily: 'var(--font-body)' }}>
                    {service.description}
                  </p>
                  
                  <Link 
                    to={service.link}
                    className="inline-flex items-center gap-2 text-[var(--navy)] font-bold group/link mt-auto w-fit"
                  >
                    <span className="group-hover/link:text-[var(--yellow)] transition-colors duration-300">
                      Explore Service
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:text-[var(--yellow)] transition-all duration-300" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
