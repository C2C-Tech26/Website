import { useState } from 'react';
import {
  Apple,
  GraduationCap,
  Network,
  Globe,
  CheckCircle2,
  ArrowRight,
  Code2,
  Layers,
  Sparkles,
  Smartphone,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { EnquiryModal } from './EnquiryModal';

interface ProjectDetail {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  tagColor: string;
  iconBg: string;
  iconColor: string;
  icon: typeof Apple;
  overview: string;
  features: string[];
  techStack: string[];
  highlights: string[];
}

const DELIVERED_PROJECTS: ProjectDetail[] = [
  {
    id: 'fruit-up',
    name: 'fruit_up Mobile App',
    subtitle: 'Cross-platform mobile application with seamless commerce & delivery',
    tag: 'Mobile',
    tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    iconBg: 'bg-emerald-50 text-emerald-600',
    iconColor: 'text-emerald-600',
    icon: Apple,
    overview:
      'A production-ready e-commerce and quick-commerce delivery mobile application built for fast, high-volume retail. Engineered with responsive design, instant cart updates, real-time dispatch tracking, and automated stock sync across multiple fulfillment hubs.',
    features: [
      'Live GPS Order & Delivery Tracking with real-time driver dispatch updates',
      'Unified Payment Gateway with UPI, Razorpay, Net Banking, Cards & Cash on Delivery',
      'Dynamic Inventory & Pricing Synchronization across warehouse locations',
      'Personalized push notifications, order history reordering, and smart customer retention alerts',
      'Admin & Delivery Executive companion apps with route optimization'
    ],
    techStack: ['Flutter / React Native', 'Node.js', 'PostgreSQL', 'Redis', 'AWS Cloud'],
    highlights: ['iOS & Android App', 'Sub-second search', '99.9% uptime', 'Scalable architecture']
  },
  {
    id: 'lms-app',
    name: 'LMS App',
    subtitle: 'Learning Management System with live courses, assessments & tracking',
    tag: 'EdTech',
    tagColor: 'bg-blue-100 text-blue-800 border-blue-200',
    iconBg: 'bg-blue-50 text-blue-600',
    iconColor: 'text-blue-600',
    icon: GraduationCap,
    overview:
      'A comprehensive educational ecosystem designed for universities, colleges, and training academies. Empowers educators to structure curricula, conduct interactive live lectures, grade assignments, and monitor student progress with deep academic analytics.',
    features: [
      'Multimedia Course Delivery with video streaming, code sandboxes, and PDF module downloads',
      'Live Interactive Classrooms with integrated attendance logs and calendar sync',
      'Automated Quizzes & Timed Assessments with instant AI-powered grading and scorecards',
      'Granular Student Analytics tracking completion rates, test scores, and skill gaps',
      'Multi-Role Access for Students, Instructors, Department HODs, and Institution Admins'
    ],
    techStack: ['React / Next.js', 'Python FastAPI', 'PostgreSQL', 'WebRTC', 'AWS S3'],
    highlights: ['Multi-tenant portal', 'Automated certificates', 'Live proctoring', 'Mobile responsive']
  },
  {
    id: 'erp-app',
    name: 'ERP App',
    subtitle: 'Enterprise Resource Planning system for operations, inventory & workflow',
    tag: 'Enterprise',
    tagColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    iconBg: 'bg-indigo-50 text-indigo-600',
    iconColor: 'text-indigo-600',
    icon: Network,
    overview:
      'A robust, modular Enterprise Resource Planning suite that unifies business operations, supply chains, human resources, and financial management into a single real-time dashboard, eliminating fragmented manual spreadsheets.',
    features: [
      'Real-Time Inventory & Multi-Warehouse Tracking with automated purchase order generation',
      'Complete HRMS & Automated Payroll with biometric attendance, leave approvals, and tax deductions',
      'GST-Compliant Invoicing & Accounting with balance sheets, cash flow, and audit-ready reports',
      'Workflow Automation & Departmental Approvals with customizable sign-off pipelines',
      'Enterprise-Grade Role-Based Access Control (RBAC) and detailed audit activity logs'
    ],
    techStack: ['React Dashboard', 'Django / Node.js', 'PostgreSQL', 'Docker', 'JWT / OAuth2'],
    highlights: ['Operational overhead cut by 40%', 'Multi-branch support', 'Full data security', 'Customizable modules']
  },
  {
    id: 'web-dev',
    name: 'Web Development',
    subtitle: 'Modern responsive web platforms, client portals & API integrations',
    tag: 'Web',
    tagColor: 'bg-purple-100 text-purple-800 border-purple-200',
    iconBg: 'bg-purple-50 text-purple-600',
    iconColor: 'text-purple-600',
    icon: Globe,
    overview:
      'High-performance web applications, customer self-service portals, and digital transformation platforms built with cutting-edge front-end frameworks and secure cloud architectures for businesses seeking scalability and market dominance.',
    features: [
      'Pixel-Perfect Responsive User Interfaces optimized across all mobile, tablet, and desktop devices',
      'Client & Partner Portals featuring secure logins, real-time ticket tracking, and document sharing',
      'RESTful & GraphQL API Integration connecting CRMs, payment engines, and third-party systems',
      'Search Engine Optimization (SEO) & Core Web Vitals optimization achieving 95+ PageSpeed scores',
      'Global Content Delivery (CDN) caching with automated SSL certificates and DDoS mitigation'
    ],
    techStack: ['Next.js / React', 'Tailwind CSS', 'TypeScript', 'GraphQL / REST', 'Vercel / Cloudflare'],
    highlights: ['Lightning-fast LCP (<1.2s)', '100% SEO compliance', 'Custom analytics', 'Modern UI/UX']
  }
];

export function ProductsSection() {
  const [selectedEnquiry, setSelectedEnquiry] = useState<{ name: string; category: string } | null>(null);
  const [expandedDetails, setExpandedDetails] = useState<Record<string, boolean>>({
    'fruit-up': true,
    'lms-app': true,
    'erp-app': true,
    'web-dev': true
  });

  const toggleDetail = (id: string) => {
    setExpandedDetails((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const scrollToContact = (projectName: string) => {
    setSelectedEnquiry({ name: projectName, category: 'IT Product Development' });
  };

  return (
    <section id="products" className="bg-gray-50 px-4 py-16 sm:px-6 md:px-8 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        {/* Concept to Creation Header */}
        <div className="text-center mb-4">
          <span
            style={{ fontFamily: 'var(--font-body)' }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--yellow)] text-[var(--navy)] text-xs md:text-sm font-bold uppercase tracking-wider shadow-sm"
          >
            Concept to Creation (C2C) · IT Product Development
          </span>
        </div>

        <h2
          style={{ fontFamily: 'var(--font-heading)' }}
          className="mb-4 text-center text-3xl font-extrabold text-[var(--navy)] sm:text-4xl md:text-5xl"
        >
          Our Products &amp; Solutions
        </h2>
        <p
          style={{ fontFamily: 'var(--font-body)' }}
          className="mx-auto max-w-3xl text-center text-gray-600 text-base md:text-lg mb-12"
        >
          From consumer mobile apps to enterprise-scale ERP and educational platforms, explore the production-grade products and software solutions developed by C2C Tech Solutions.
        </p>

        {/* Flagship IT Development Header Banner (Matches Uploaded Card) */}
        <div className="mb-12 rounded-3xl bg-gradient-to-r from-[var(--navy)] via-[#152e59] to-[#0A1F3F] p-6 text-white shadow-xl sm:p-8 md:p-10 border border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="inline-flex items-center gap-2 rounded-lg bg-blue-500/20 px-3.5 py-1.5 text-xs md:text-sm font-bold text-blue-300 border border-blue-400/30 uppercase tracking-wide">
              SOFTWARE DIVISION
            </span>
            <span className="text-xs md:text-sm font-medium text-white/80 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[var(--yellow)]" />
              4 Developed Projects
            </span>
          </div>

          <h3
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2"
          >
            IT Development
          </h3>
          <p
            style={{ fontFamily: 'var(--font-body)' }}
            className="text-sm md:text-base text-blue-200/90 font-medium flex items-center gap-2 mb-6"
          >
            <Code2 className="w-4 h-4 text-[var(--yellow)]" />
            <span>Mobile Apps • Web Platforms • ERP &amp; LMS Systems</span>
          </p>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-5 border border-white/15">
            <h4
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-base sm:text-lg font-bold text-white mb-1.5 flex items-center gap-2"
            >
              <Layers className="w-5 h-5 text-[var(--yellow)]" />
              Developed Projects &amp; Products
            </h4>
            <p
              style={{ fontFamily: 'var(--font-body)' }}
              className="text-xs sm:text-sm text-white/85 leading-relaxed"
            >
              Full-lifecycle production software, mobile applications, and enterprise platforms developed in-house by C2C Tech Solutions to empower businesses, educators, and commercial enterprises.
            </p>
          </div>
        </div>

        {/* Projects Delivered Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-xl md:text-2xl font-bold uppercase tracking-wider text-[var(--navy)]"
            >
              Projects Delivered
            </h3>
            <span className="hidden sm:inline-block rounded-full bg-[var(--yellow)]/30 px-2.5 py-0.5 text-xs font-bold text-[var(--navy)]">
              In-House Production
            </span>
          </div>
        </div>

        {/* 4 Delivered Projects - In Deep Detail */}
        <div className="space-y-6 mb-16">
          {DELIVERED_PROJECTS.map((project) => {
            const Icon = project.icon;
            const isExpanded = !!expandedDetails[project.id];

            return (
              <div
                key={project.id}
                className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all hover:border-[var(--yellow)]"
              >
                {/* Project Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                  <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 min-w-0">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 ${project.iconBg}`}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.8} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h4
                          style={{ fontFamily: 'var(--font-heading)' }}
                          className="text-xl sm:text-2xl font-bold text-[var(--navy)]"
                        >
                          {project.name}
                        </h4>
                        <span
                          className={`rounded-full px-3 py-0.5 text-xs font-bold border ${project.tagColor}`}
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {project.tag}
                        </span>
                      </div>
                      <p
                        style={{ fontFamily: 'var(--font-body)' }}
                        className="text-xs sm:text-sm text-gray-500 mt-0.5 font-medium"
                      >
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Quick Toggle Details */}
                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                    <button
                      type="button"
                      onClick={() => toggleDetail(project.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollToContact(project.name)}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-[var(--navy)] bg-[var(--yellow)] hover:bg-[#E0B015] rounded-lg shadow-sm transition-transform hover:scale-105"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <span>Request Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Project Detailed Description */}
                {isExpanded && (
                  <div className="pt-5 space-y-5 animate-in fade-in duration-200">
                    <p
                      style={{ fontFamily: 'var(--font-body)' }}
                      className="text-sm md:text-base text-gray-700 leading-relaxed"
                    >
                      {project.overview}
                    </p>

                    {/* Features Grid */}
                    <div className="rounded-xl bg-gray-50 p-4 sm:p-5 border border-gray-100">
                      <h5
                        style={{ fontFamily: 'var(--font-heading)' }}
                        className="text-xs font-bold uppercase tracking-wider text-[var(--navy)] mb-3"
                      >
                        Core Features &amp; Capabilities
                      </h5>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack & Highlights Footer */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2 border-t border-gray-100">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-[var(--navy)] uppercase tracking-wider">
                          Tech Stack:
                        </span>
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="rounded-md bg-white border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-700 shadow-2xs"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {project.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-[var(--navy)]/5 text-[var(--navy)] px-2.5 py-0.5 text-[11px] font-semibold"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {selectedEnquiry && (
        <EnquiryModal
          isOpen={!!selectedEnquiry}
          onClose={() => setSelectedEnquiry(null)}
          courseName={selectedEnquiry.name}
          courseCategory={selectedEnquiry.category}
        />
      )}
    </section>
  );
}
