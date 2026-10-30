import { ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router';

export function ServicesCTA() {
  return (
    <section className="py-24 bg-[var(--navy)] relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--yellow)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20 shadow-xl backdrop-blur-sm">
          <MessageSquare className="w-8 h-8 text-[var(--yellow)]" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
          Have an Idea? Let's Build It Together.
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
          Tell us what you're trying to build, improve, or automate. Our team can help you turn your requirements into a practical, scalable technology solution.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            to="/contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--yellow)] text-[var(--navy)] px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl group"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a 
            href="mailto:contact@mohansoftwaresolutions.in" 
            className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Email Us Directly
          </a>
        </div>
      </div>
    </section>
  );
}
