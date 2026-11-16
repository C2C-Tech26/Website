import { CheckCircle2, MonitorSmartphone, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';

export function FeaturedServices() {
  return (
    <section id="featured-services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        
        {/* Featured Service 1: IT Product Development */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-[3rem] transform -rotate-3 scale-105 -z-10"></div>
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-8">
                <MonitorSmartphone className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--navy)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                IT Product Development
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">The Challenge</h4>
                  <p className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                    Off-the-shelf software rarely fits your exact business workflows, leading to inefficiencies, scattered data, and restricted growth potential.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Our Solution</h4>
                  <p className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                    We design and develop custom web and mobile applications tailored to your specific operational needs, ensuring scalability and seamless integration.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-semibold text-[var(--navy)] mb-4">Core Capabilities:</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {['Web Applications', 'Mobile Apps', 'API Integration', 'Cloud Solutions', 'UI/UX Design', 'Legacy Modernization'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6">
              Concept to Creation
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Custom Software That Drives Business Forward
            </h2>
            <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              From initial strategy and UX design to full-stack development and deployment, we bring your product vision to life using modern, reliable technologies.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-[var(--navy)] text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>

        {/* Featured Service 2: Digital Marketing */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-6">
              Clients to Conversions
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Data-Driven Marketing For Measurable Growth
            </h2>
            <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              We don't just generate traffic; we create comprehensive digital strategies that convert visitors into loyal customers and maximize your ROI.
            </p>
            <Link 
              to="/digital-marketing" 
              className="inline-flex items-center justify-center bg-[var(--navy)] text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
            >
              Explore Digital Marketing
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-100 to-pink-50 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-8">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--navy)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Digital Marketing Services
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">The Challenge</h4>
                  <p className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                    In a crowded digital landscape, struggling to stand out, attract qualified leads, and achieve a clear return on ad spend.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Our Solution</h4>
                  <p className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                    Targeted, multi-channel marketing campaigns combining SEO, content, and paid advertising to build brand authority and pipeline.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-semibold text-[var(--navy)] mb-4">Core Capabilities:</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {['Search Engine Optimization', 'Social Media Marketing', 'PPC & Paid Ads', 'Content Strategy', 'Email Marketing', 'Conversion Optimization'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
