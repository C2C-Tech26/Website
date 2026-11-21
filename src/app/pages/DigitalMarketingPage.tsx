import { Target, TrendingUp, Zap, CheckCircle2, ArrowRight, BarChart3, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { sendToWhatsApp } from '../utils/whatsappNotification';
import { sendEmailNotification } from '../utils/emailNotification';

import fruitUpLogo from '../../assets/images/clients/fruit-up.jpg';
import aquaKushiLogo from '../../assets/images/clients/aqua-kushi.jpg';
import hrrLogo from '../../assets/images/clients/hrr-royal-treat.jpg';
import sriLakshmiLogo from '../../assets/images/clients/sri-lakshmi-hostel.jpg';
import balajiMessLogo from '../../assets/images/clients/balaji-mess.jpg';
import aadhyaLogo from '../../assets/images/clients/aadhya.jpg';
import vrsLogo from '../../assets/images/clients/vrs-suppliers.jpg';
import apMsmeLogo from '../../assets/images/clients/ap-msme.png';

interface DigitalMarketingClient {
  id: string;
  name: string;
  tagline: string;
  logo: string;
}

const DIGITAL_MARKETING_CLIENTS: DigitalMarketingClient[] = [
  {
    id: 'fruit-up',
    name: 'fruit_up',
    tagline: 'Cold Pressed Juice & Salad',
    logo: fruitUpLogo,
  },
  {
    id: 'aqua-kushi',
    name: 'Aqua Kushi',
    tagline: 'Packaged Drinking Water',
    logo: aquaKushiLogo,
  },
  {
    id: 'hrr-royal-treat',
    name: 'HRR The Royal Treat',
    tagline: 'Fine Dining & Hospitality',
    logo: hrrLogo,
  },
  {
    id: 'sri-lakshmi-hostel',
    name: 'Sri Lakshmi Ladies Hostel',
    tagline: 'Where Standard Meets Luxury',
    logo: sriLakshmiLogo,
  },
  {
    id: 'balaji-mess',
    name: 'Balaji Mess',
    tagline: 'Meals & Biryani',
    logo: balajiMessLogo,
  },
  {
    id: 'aadhya',
    name: 'Aadhya',
    tagline: 'Boutique & Designer Studio',
    logo: aadhyaLogo,
  },
  {
    id: 'vrs-suppliers',
    name: 'Venkata Rama Suppliers',
    tagline: 'Industrial & Commercial Supplies',
    logo: vrsLogo,
  },
  {
    id: 'ap-msme',
    name: 'AP MSME Association',
    tagline: 'Micro, Small & Medium Enterprises',
    logo: apMsmeLogo,
  },
];

export function DigitalMarketingPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [dmForm, setDmForm] = useState({ name: '', mobile: '' });

  const plans = [
    {
      name: "Basic",
      bestFor: "Emerging brands building an online footprint",
      features: [
        { label: "Strategy", value: "Brand Audit & Content Roadmap" },
        { label: "Content", value: "12 Custom Visual & Copy Assets / mo" },
        { label: "Organic Mgmt", value: "Included" },
        { label: "Paid Ads", value: "—" },
        { label: "CRO", value: "—" },
        { label: "Reporting", value: "Monthly Reach & Engagement Report" },
      ],
      popular: false,
    },
    {
      name: "Standard",
      bestFor: "Businesses looking to generate qualified leads",
      features: [
        { label: "Strategy", value: "Market Analysis & Funnel Mapping" },
        { label: "Content", value: "20 Custom Visual & Copy Assets / mo" },
        { label: "Organic Mgmt", value: "Included" },
        { label: "Paid Ads", value: "Setup, Mgmt & Optimization (Ad spend extra)" },
        { label: "CRO", value: "—" },
        { label: "Reporting", value: "Bi-Weekly ROI & Performance Breakdown" },
      ],
      popular: true,
    },
    {
      name: "Premium",
      bestFor: "Scale-ups & enterprises aiming for maximum ROI",
      features: [
        { label: "Strategy", value: "Full-Funnel Architecture & CRO Strategy" },
        { label: "Content", value: "30 Custom Visual & Copy Assets / mo (Daily)" },
        { label: "Organic Mgmt", value: "Priority Publishing & Community Mgmt" },
        { label: "Paid Ads", value: "Multichannel Campaigns & A/B Testing" },
        { label: "CRO", value: "Landing Page & Checkout Friction Audits" },
        { label: "Reporting", value: "Dedicated Manager + Weekly Strategy Reviews" },
      ],
      popular: false,
    }
  ];

  const handleEnquiry = (planName: string) => {
    setSelectedPlan(planName);
    setShowModal(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dmForm.name.trim() || !dmForm.mobile.trim()) return;

    // Save to localStorage
    const enquiry = {
      id: Date.now(),
      studentName: dmForm.name.trim(),
      email: 'Via Digital Marketing Modal',
      mobile: dmForm.mobile.trim(),
      college: 'Digital Marketing Plan',
      course: `${selectedPlan} Plan`,
      courseCategory: 'Digital Marketing',
      message: `Enquiry for ${selectedPlan} digital marketing package`,
      submittedAt: new Date().toISOString(),
      status: 'New',
    };
    const existing = JSON.parse(localStorage.getItem('c2c_enquiries') || '[]');
    existing.push(enquiry);
    localStorage.setItem('c2c_enquiries', JSON.stringify(existing));

    // Send direct email to info@c2ctechsolutions.com (Outlook)
    sendEmailNotification({
      title: 'Digital Marketing Plan Enquiry',
      name: dmForm.name.trim(),
      phone: dmForm.mobile.trim(),
      course: `${selectedPlan} Plan`,
      category: 'Digital Marketing',
      message: `Interested in the ${selectedPlan} plan.`,
    });

    // Send to WhatsApp at 7093182525
    sendToWhatsApp({
      title: 'Digital Marketing Plan Enquiry',
      name: dmForm.name.trim(),
      phone: dmForm.mobile.trim(),
      course: `${selectedPlan} Plan`,
      category: 'Digital Marketing',
      message: `Interested in the ${selectedPlan} plan.`,
    });

    alert('Enquiry submitted successfully! Your details have been sent to info@c2ctechsolutions.com & frontdesk.c2c@gmail.com and forwarded to WhatsApp.');
    setShowModal(false);
    setDmForm({ name: '', mobile: '' });
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24 bg-[var(--navy)] overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] rounded-full bg-[var(--yellow)]/10 blur-[100px]"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--yellow)] text-[var(--navy)] font-bold mb-8 shadow-md">
            <Target className="w-4 h-4 text-[var(--navy)]" />
            <span className="text-xs md:text-sm tracking-wide uppercase" style={{ fontFamily: 'var(--font-body)' }}>
              Clients to Conversions (C2C) · Digital Marketing
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Digital Marketing that <span className="text-[var(--yellow)]">Engineers Growth</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 text-lg text-gray-300 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            <p>
              At our core, we don't just chase vanity metrics like clicks and likes; we engineer measurable business growth. Every brand has a unique story and a specific target audience, but bridging the gap between a first-time visitor and a loyal customer requires a deliberate, data-driven approach.
            </p>
            <p>
              Our signature <strong>&ldquo;Clients to Conversions (C2C)&rdquo;</strong> framework is designed to do exactly that—transforming your brand's digital footprint into a powerful customer acquisition engine.
            </p>
          </div>
        </div>
      </section>

      {/* The Conversion Engine Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--navy)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              The Conversion Engine
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              The ultimate metric of our success is your bottom line. By seamlessly blending data analytics with creative execution, we continuously monitor, test, and optimize every campaign parameter.
            </p>
            <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              From refining ad copy and tweaking audience parameters to optimizing landing page layouts, we relentlessly remove friction. We deliver qualified leads and measurable conversions, ensuring every marketing rupee yields a tangible return.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-yellow-50 flex items-center justify-center mb-6">
              <BarChart3 className="w-7 h-7 text-[var(--yellow)]" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--navy)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Data-Driven Marketing
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              Vanity metrics like likes and views don't pay the bills—conversions do. We engineer end-to-end digital strategies designed to turn cold audiences into long-term, high-value clients.
            </p>
            <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Powered by our proprietary "Client-to-Conversion" (C2C) framework, we bridge the gap between initial brand discovery and revenue growth.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--navy)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Engineered for High ROI
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              Traffic is useless if it doesn't convert. We continuously analyze, test, and refine every touchpoint in your marketing funnel—from high-converting ad copy to high-performing landing pages.
            </p>
            <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Every marketing rupee you invest is tracked against direct business outcomes, ensuring zero wasted ad spend and a steady pipeline of sales-ready leads. Let's build your growth engine today.
            </p>
          </div>

        </div>
      </section>

      {/* Client Logos Scrolling Marquee - Above Partnership Plans */}
      <section className="bg-[var(--navy)] py-6 md:py-8 overflow-hidden relative shadow-md">
        <div className="max-w-[1440px] mx-auto px-6 mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span
              className="text-xs md:text-sm font-bold uppercase tracking-wider text-[var(--yellow)] flex items-center gap-1.5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Digital Marketing Clients
            </span>
            <span className="hidden sm:inline-block text-xs text-blue-200/70 font-medium">
              | Brands Scaled by C2C Tech Solutions
            </span>
          </div>
          <span className="text-[11px] font-semibold text-blue-200/60 uppercase tracking-wider hidden md:inline-block">
            Continuous Campaign Performance
          </span>
        </div>

        {/* Scrolling Track with Edge Gradient Masks */}
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-[var(--navy)] via-[var(--navy)]/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-[var(--navy)] via-[var(--navy)]/80 to-transparent z-10" />

          <div className="animate-marquee-scroll flex gap-4 md:gap-6 items-center py-1">
            {[...DIGITAL_MARKETING_CLIENTS, ...DIGITAL_MARKETING_CLIENTS, ...DIGITAL_MARKETING_CLIENTS, ...DIGITAL_MARKETING_CLIENTS].map((client, idx) => (
              <div
                key={`${client.id}-${idx}`}
                className="flex items-center gap-3.5 bg-[#14233c] hover:bg-[#1d3153] border border-white/15 hover:border-[var(--yellow)] rounded-2xl px-4 py-2.5 shadow-sm transition-all duration-300 shrink-0 group cursor-default"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden bg-white border border-white/10 flex items-center justify-center p-1 shrink-0 shadow-2xs">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="eager"
                  />
                </div>
                <div className="pr-2 text-left">
                  <p
                    className="text-xs md:text-sm font-bold text-white whitespace-nowrap leading-tight group-hover:text-[var(--yellow)] transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {client.name}
                  </p>
                  <p
                    className="text-[10px] md:text-xs text-blue-200/80 font-medium whitespace-nowrap leading-tight mt-0.5"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {client.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 bg-white px-6 md:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--navy)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Partnership Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              Select the engine that fits your growth stage.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 ${
                  plan.popular 
                  ? 'bg-[var(--navy)] text-white shadow-2xl ring-4 ring-[var(--yellow)]/30' 
                  : 'bg-white border border-gray-200 text-[var(--navy)] shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--yellow)] text-[var(--navy)] text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{plan.name}</h3>
                <p className={`text-sm mb-8 ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`} style={{ fontFamily: 'var(--font-body)' }}>
                  {plan.bestFor}
                </p>

                <div className="flex-1 space-y-6">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex gap-3">
                      <div className="shrink-0 mt-0.5">
                        <CheckCircle2 className={`w-5 h-5 ${feature.value === '—' ? 'text-gray-300 opacity-50' : plan.popular ? 'text-[var(--yellow)]' : 'text-blue-600'}`} />
                      </div>
                      <div>
                        <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>{feature.label}</p>
                        <p className={`text-sm ${feature.value === '—' ? 'opacity-50' : ''}`} style={{ fontFamily: 'var(--font-body)' }}>
                          {feature.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => handleEnquiry(plan.name)}
                  className={`w-full mt-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors ${
                    plan.popular
                    ? 'bg-[var(--yellow)] text-[var(--navy)] hover:bg-yellow-400'
                    : 'bg-[var(--navy)] text-white hover:bg-blue-900'
                  }`}
                >
                  For More Details <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-[var(--navy)] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-[var(--navy)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Enquire Now
            </h3>
            <p className="text-gray-600 mb-6 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Leave your details to get more information about our <strong className="text-[var(--navy)]">{selectedPlan}</strong> plan. Our team will get back to you shortly.
            </p>
            
            <form className="space-y-5" onSubmit={handleFormSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" style={{ fontFamily: 'var(--font-body)' }}>Full Name</label>
                <input 
                  type="text" 
                  required 
                  value={dmForm.name}
                  onChange={(e) => setDmForm({ ...dmForm, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--yellow)] focus:border-transparent outline-none transition-all" 
                  placeholder="" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" style={{ fontFamily: 'var(--font-body)' }}>Mobile Number</label>
                <input 
                  type="tel" 
                  required 
                  value={dmForm.mobile}
                  onChange={(e) => setDmForm({ ...dmForm, mobile: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--yellow)] focus:border-transparent outline-none transition-all" 
                  placeholder="" 
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-4 mt-2 bg-[var(--yellow)] text-[var(--navy)] font-bold rounded-xl hover:bg-yellow-400 transition-colors shadow-md"
              >
                Submit Enquiry & Open WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
