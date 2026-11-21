import { useState } from 'react';
import { COURSE_CATEGORY_ORDER, getCoursesByCategory, type CourseCategory } from '../../data/courses';
import { getCurriculumById } from '../../data/curriculumData';
import { useNavigate } from 'react-router';
import { Clock, BookOpen, Download, ChevronDown } from 'lucide-react';
import { EnquiryModal } from '../EnquiryModal';

export function TrainingCourseList() {
  const [activeCategory, setActiveCategory] = useState<CourseCategory | 'All'>('All');
  const [enquiryCourse, setEnquiryCourse] = useState<{ name: string; category: string } | null>(null);
  const [expandedCourses, setExpandedCourses] = useState<Record<string, boolean>>({
    'c-programming': true,
  });
  const navigate = useNavigate();

  const categories = ['All', ...COURSE_CATEGORY_ORDER];

  const displayedCourses = activeCategory === 'All' 
    ? COURSE_CATEGORY_ORDER.flatMap(getCoursesByCategory)
    : getCoursesByCategory(activeCategory as CourseCategory);

  const toggleCourse = (id: string) => {
    setExpandedCourses((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAllCourses = (expand: boolean) => {
    if (!expand) {
      setExpandedCourses({});
    } else {
      const all: Record<string, boolean> = {};
      displayedCourses.forEach((c) => {
        all[c.id] = true;
      });
      setExpandedCourses(all);
    }
  };

  return (
    <section id="courses-section" className="py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Our Training Programs
          </h2>
          <p className="text-gray-600 text-base md:text-lg" style={{ fontFamily: 'var(--font-body)' }}>
            Master the most in-demand technologies with our industry-aligned curriculum and hands-on projects.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-8 md:mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as CourseCategory | 'All')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-[var(--navy)] text-white shadow-md scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-[var(--navy)] border border-gray-200'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Controls bar: Count + Expand/Collapse All */}
        <div className="flex items-center justify-between gap-4 mb-4 px-1">
          <span className="text-xs sm:text-sm font-semibold text-gray-500" style={{ fontFamily: 'var(--font-body)' }}>
            Showing <strong className="text-[var(--navy)]">{displayedCourses.length}</strong> courses
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => toggleAllCourses(true)}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 transition-colors shadow-2xs"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Expand All
            </button>
            <button
              type="button"
              onClick={() => toggleAllCourses(false)}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 transition-colors shadow-2xs"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Collapsible Course List */}
        <div className="space-y-3 sm:space-y-3.5">
          {displayedCourses.map((course) => {
            const Icon = course.icon;
            const isExpanded = !!expandedCourses[course.id];
            const curriculum = getCurriculumById(course.name);
            const duration = course.category === 'Full Stack Courses' ? '4-6 Months' : (course.category === 'Advanced IT Courses' || course.category === 'Core Courses') ? '3-4 Months' : course.category === 'Basic Courses' ? '2-3 Months' : '1 Month';
            const keyTopics = curriculum?.modules.slice(0, 4).map((m) => m.title.replace(/^MODULE \d+ - /i, '').replace(/^\d+ /i, '').replace(/^PHASE \d+ - /i, '')) || [];

            return (
              <div
                key={course.id}
                className={`rounded-2xl border transition-all overflow-hidden bg-white ${
                  isExpanded
                    ? 'border-[var(--yellow)] shadow-md ring-1 ring-[var(--yellow)]/30'
                    : 'border-gray-200 hover:border-[var(--yellow)] hover:shadow-sm'
                }`}
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleCourse(course.id)}
                  className="w-full text-left p-3.5 sm:p-4 md:p-5 flex items-center justify-between gap-3 sm:gap-4 transition-colors hover:bg-gray-50/70 cursor-pointer select-none"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleCourse(course.id);
                    }
                  }}
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[var(--yellow)]/10 flex items-center justify-center text-[var(--navy)] shrink-0 transition-transform group-hover:scale-105">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3
                        className="text-base sm:text-lg md:text-xl font-bold text-[var(--navy)] truncate"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {course.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] sm:text-xs text-gray-700 font-medium">
                          <Clock className="w-3 h-3 text-[var(--navy)]" />
                          {duration}
                        </span>
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold ${
                            course.level === 'Beginner' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
                          }`}
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {course.level}
                        </span>
                        {curriculum?.modules && (
                          <span className="hidden sm:inline-block text-xs text-gray-400">
                            • {curriculum.modules.length} Modules
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right: Quick Download Syllabus & Chevron */}
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setEnquiryCourse({ name: course.name, category: course.category });
                      }}
                      className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-[var(--yellow)] px-3 py-1.5 text-xs font-bold text-[var(--navy)] shadow-sm hover:bg-[#E0B015] transition-transform hover:scale-105"
                      style={{ fontFamily: 'var(--font-body)' }}
                      title={`Download Syllabus for ${course.name}`}
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Syllabus</span>
                    </button>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-transform duration-300 text-[var(--navy)] bg-gray-100 ${
                        isExpanded ? 'rotate-180 bg-[var(--yellow)]/30' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-4 sm:px-5 md:px-6 pb-5 pt-2 border-t border-gray-100 bg-gray-50/40">
                    <p
                      className="text-gray-600 text-sm mb-4 leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {course.summary}
                    </p>

                    {keyTopics.length > 0 && (
                      <div className="mb-5 bg-white rounded-xl p-4 border border-gray-100 shadow-xs">
                        <p className="text-xs font-semibold text-[var(--navy)] mb-2.5 uppercase tracking-wider">
                          Key Modules Covered
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                          {keyTopics.map((topic, i) => (
                            <div
                              key={i}
                              className="text-xs text-gray-700 flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100 truncate"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--yellow)] shrink-0" />
                              <span className="truncate">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <button
                        type="button"
                        onClick={() => navigate(`/course/${encodeURIComponent(course.name)}`)}
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-[var(--navy)] px-4 py-2 text-xs sm:text-sm font-semibold text-[var(--navy)] transition-colors hover:bg-gray-100"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        <BookOpen className="w-4 h-4" />
                        View Full Details
                      </button>
                      <button
                        type="button"
                        onClick={() => setEnquiryCourse({ name: course.name, category: course.category })}
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[var(--yellow)] px-4 py-2 text-xs sm:text-sm font-bold text-[var(--navy)] transition-transform hover:scale-[1.02] shadow-sm hover:bg-[#E0B015]"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        <Download className="w-4 h-4" />
                        Download Syllabus
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {enquiryCourse && (
        <EnquiryModal
          isOpen={!!enquiryCourse}
          onClose={() => setEnquiryCourse(null)}
          courseName={enquiryCourse.name}
          courseCategory={enquiryCourse.category}
        />
      )}
    </section>
  );
}
