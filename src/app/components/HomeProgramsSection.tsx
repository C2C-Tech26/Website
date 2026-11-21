import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { COURSE_CATEGORY_ORDER, getCoursesByCategory } from '../data/courses';

const highlights = [
  'Industry-aligned curriculum with live projects',
  'Mentorship from working professionals',
  '100% placement assistance',
  'Flexible batches for students and working learners',
];

const categoryMeta: Record<
  string,
  { badge: string; accentBg: string; subtitle: string }
> = {
  'Basic Courses': {
    badge: 'bg-sky-100 text-sky-800 border border-sky-200',
    accentBg: 'bg-sky-500',
    subtitle: 'Programming fundamentals in C, Java, Python, Web Dev & office essentials',
  },
  'Advanced IT Courses': {
    badge: 'bg-blue-100 text-blue-800 border border-blue-200',
    accentBg: 'bg-blue-600',
    subtitle: 'AI, Machine Learning, Agentic AI, Quantum, Cloud & Cyber Security',
  },
  'Full Stack Courses': {
    badge: 'bg-orange-100 text-orange-800 border border-orange-200',
    accentBg: 'bg-orange-500',
    subtitle: 'End-to-end full stack development pipelines (MERN, Java, Python, .NET)',
  },
  'Core Courses': {
    badge: 'bg-indigo-100 text-indigo-800 border border-indigo-200',
    accentBg: 'bg-indigo-600',
    subtitle: 'VLSI, IoT, Embedded Systems, PCB Design & ECE engineering tracks',
  },
  'Quick Courses': {
    badge: 'bg-rose-100 text-rose-800 border border-rose-200',
    accentBg: 'bg-rose-500',
    subtitle: 'Fast-track certifications and rapid skill bootcamps',
  },
  'Add on Courses': {
    badge: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
    accentBg: 'bg-emerald-500',
    subtitle: 'Industry power skills, DevOps, cloud add-ons & interview prep',
  },
};

export function HomeProgramsSection() {
  // Start with Basic Courses expanded by default so user sees courses and realizes it's collapsible
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    'Basic Courses': true,
  });

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    COURSE_CATEGORY_ORDER.forEach((cat) => {
      allOpen[cat] = true;
    });
    setOpenCategories(allOpen);
  };

  const collapseAll = () => {
    setOpenCategories({});
  };

  const totalCourses = COURSE_CATEGORY_ORDER.reduce(
    (acc, cat) => acc + getCoursesByCategory(cat).length,
    0
  );

  return (
    <section className="bg-gray-50 px-6 py-20 md:px-8 md:py-[100px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 grid items-end gap-8 lg:mb-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <p
              style={{ fontFamily: 'var(--font-body)' }}
              className="mb-4 text-sm uppercase tracking-[0.2em] text-[#5c4a3a]"
            >
              Training Programs
            </p>
            <h2
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-4xl leading-tight text-[var(--navy)] md:text-5xl"
            >
              C2C Tech Solutions — IT Training Courses
            </h2>
          </div>
          <p
            style={{ fontFamily: 'var(--font-body)' }}
            className="text-lg leading-relaxed text-[var(--navy)]/75"
          >
            Basic, advanced, full stack, quick, and add-on programs — from entry-level programming
            to AI, cloud, DevOps, and placement support. Apply online today.
          </p>
        </div>

        <ul className="mb-12 grid gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[var(--navy)]/85"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--yellow)]" />
              {item}
            </li>
          ))}
        </ul>

        {/* Collapsible Controls Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200/80 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 items-center rounded-full bg-[var(--navy)]/5 px-3 text-xs font-bold text-[var(--navy)]">
              {totalCourses} Total Courses across {COURSE_CATEGORY_ORDER.length} Tracks
            </span>
            <span className="hidden sm:inline-block text-xs text-gray-500">
              Click any category to expand / collapse
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={expandAll}
              className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-2xs hover:bg-gray-50 hover:text-[var(--navy)] transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <button
              type="button"
              onClick={collapseAll}
              className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-2xs hover:bg-gray-50 hover:text-[var(--navy)] transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Collapsible Accordion List */}
        <div className="mb-12 space-y-4">
          {COURSE_CATEGORY_ORDER.map((category) => {
            const courses = getCoursesByCategory(category);
            const isOpen = !!openCategories[category];
            const meta = categoryMeta[category] || {
              badge: 'bg-gray-100 text-gray-800 border border-gray-200',
              accentBg: 'bg-[var(--navy)]',
              subtitle: 'Comprehensive IT training track',
            };

            return (
              <div
                key={category}
                className={`rounded-2xl border transition-all duration-300 bg-white shadow-2xs overflow-hidden ${
                  isOpen
                    ? 'border-[var(--navy)]/30 ring-1 ring-[var(--navy)]/5 shadow-sm'
                    : 'border-gray-200/90 hover:border-gray-300'
                }`}
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left transition-colors duration-200 hover:bg-gray-50/80 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 md:gap-4 min-w-0 pr-4">
                    <div className={`w-2.5 h-9 sm:h-11 rounded-full ${meta.accentBg} shrink-0`} />
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5 mb-0.5">
                        <h3
                          style={{ fontFamily: 'var(--font-heading)' }}
                          className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--navy)] leading-tight"
                        >
                          {category}
                        </h3>
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${meta.badge}`}
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {courses.length} courses
                        </span>
                      </div>
                      <p
                        style={{ fontFamily: 'var(--font-body)' }}
                        className="text-xs sm:text-sm text-gray-500 line-clamp-1"
                      >
                        {meta.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <span className="hidden sm:inline-block text-xs font-semibold text-gray-400">
                      {isOpen ? 'Hide' : 'Show'}
                    </span>
                    <div
                      className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isOpen
                          ? 'bg-[var(--navy)] text-white rotate-180'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </button>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 md:px-6 md:pb-6 pt-1 border-t border-gray-100">
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-3">
                      {courses.map((course) => {
                        const Icon = course.icon;
                        return (
                          <Link
                            key={course.id}
                            to={`/explore-courses?course=${encodeURIComponent(course.name)}`}
                            className="group/card rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-[var(--yellow)] hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <div className="w-9 h-9 rounded-lg bg-gray-50 group-hover/card:bg-yellow-50 flex items-center justify-center transition-colors">
                                  <Icon className="h-5 w-5 text-[var(--navy)]" strokeWidth={1.5} />
                                </div>
                                <span className="text-[11px] font-semibold text-[var(--navy)]/65 bg-gray-100 px-2 py-0.5 rounded-md">
                                  {course.level}
                                </span>
                              </div>
                              <p
                                style={{ fontFamily: 'var(--font-heading)' }}
                                className="mb-1 text-base font-bold text-[var(--navy)] group-hover/card:text-blue-900 leading-snug"
                              >
                                {course.name}
                              </p>
                              <p
                                style={{ fontFamily: 'var(--font-body)' }}
                                className="text-xs text-gray-500 line-clamp-2 mt-1 mb-3"
                              >
                                {course.summary}
                              </p>
                            </div>

                            <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[var(--navy)]/80 group-hover/card:text-[var(--navy)]">
                              <span>Explore Curriculum</span>
                              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/card:translate-x-1 text-[var(--yellow)]" />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/explore-courses"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--yellow)] px-8 py-3.5 text-[var(--navy)] font-bold transition-all hover:bg-[#E0B015] hover:scale-105 shadow-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Explore all courses & apply
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
