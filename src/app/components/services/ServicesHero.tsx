import { ArrowRight, Code2 } from 'lucide-react';
import { Link } from 'react-router';
import heroImage from '../../../assets/images/c2c-reception-hero.png';

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy)] pt-24 lg:pt-32 pb-16 lg:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6">
              <Code2 className="w-4 h-4 text-[var(--yellow)]" />
              <span className="text-white tracking-wide uppercase text-xs">Our Services</span>
            </div>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Technology Solutions Built for <span className="text-[var(--yellow)]">Real-World Impact</span>
            </h1>
            
            <p 
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              From custom software development to corporate training and digital marketing, we help organizations turn ideas into scalable technology solutions.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-[var(--yellow)] text-[var(--navy)] px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--yellow)]/20"
              >
                Let's Work Together
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="#what-we-do" 
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--navy)]/80 via-transparent to-transparent z-10"></div>
            
            <img 
              src={heroImage} 
              alt="C2C Technology Solutions Office" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />

            {/* Floating tech badge */}
            <div className="absolute bottom-8 left-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 shadow-xl">
              <div className="w-12 h-12 rounded-full bg-[var(--yellow)] flex items-center justify-center">
                <Code2 className="w-6 h-6 text-[var(--navy)]" />
              </div>
              <div>
                <p className="text-white font-bold" style={{ fontFamily: 'var(--font-heading)' }}>Concept to Creation</p>
                <p className="text-gray-300 text-sm">End-to-End Solutions</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
