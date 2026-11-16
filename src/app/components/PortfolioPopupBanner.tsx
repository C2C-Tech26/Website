import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Sparkles, Award, Users, BookOpen } from 'lucide-react';

export function PortfolioPopupBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if dismissed during the current session
    const isDismissed = sessionStorage.getItem('c2c_portfolio_banner_dismissed');
    if (!isDismissed) {
      // Show popup after 1.5 seconds for pleasant entrance
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('c2c_portfolio_banner_dismissed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio and Impact Announcement"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
    >
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={handleClose} />

      <aside className="relative z-10 max-w-md sm:max-w-lg w-full animate-in zoom-in-95 duration-300">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#1E3A8A] text-white p-6 sm:p-7 shadow-2xl border border-blue-500/30">
        {/* Decorative Top Accent Glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 p-1.5 rounded-full text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 transition-all focus:outline-none"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Tag / Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
            <Sparkles className="w-3 h-3 text-amber-400" /> NEW PORTFOLIO
          </span>
          <span className="text-xs text-blue-200 font-medium">20 Programs & Reports</span>
        </div>

        {/* Content Heading */}
        <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-1.5 pr-6">
          Explore Our Executed Workshops & Live Internships
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
          Discover our 17 institutional college workshops across South India, plus in-house AI batches and certified intern roster.
        </p>

        {/* Mini Highlights */}
        <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-white/5 border border-white/10 text-center mb-4">
          <div className="flex flex-col items-center">
            <span className="text-amber-400 font-extrabold text-sm sm:text-base flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 hidden sm:inline" /> 17
            </span>
            <span className="text-[10px] text-slate-300 font-medium">Workshops</span>
          </div>
          <div className="flex flex-col items-center border-x border-white/10">
            <span className="text-emerald-400 font-extrabold text-sm sm:text-base flex items-center gap-1">
              <Award className="w-3.5 h-3.5 hidden sm:inline" /> 3
            </span>
            <span className="text-[10px] text-slate-300 font-medium">In-House</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-blue-300 font-extrabold text-sm sm:text-base flex items-center gap-1">
              <Users className="w-3.5 h-3.5 hidden sm:inline" /> 9
            </span>
            <span className="text-[10px] text-slate-300 font-medium">Interns</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            href="/portfolio/index.html"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#0A192F] font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-amber-400/20"
          >
            <span>View Full Portfolio</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={handleClose}
            className="px-3 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white text-xs font-semibold transition-all"
          >
            Later
          </button>
        </div>
      </div>
    </aside>
  </div>
  );
}
