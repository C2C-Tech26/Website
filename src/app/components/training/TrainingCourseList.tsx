import { useState } from 'react';
import { COURSE_CATEGORY_ORDER, getCoursesByCategory, type CourseCategory } from '../../data/courses';
import { useNavigate } from 'react-router';

export function TrainingCourseList() {
  const [activeCategory, setActiveCategory] = useState<CourseCategory | 'All'>('All');
  const navigate = useNavigate();

  const categories = ['All', ...COURSE_CATEGORY_ORDER];

  const displayedCourses = activeCategory === 'All' 
    ? COURSE_CATEGORY_ORDER.flatMap(getCoursesByCategory)
    : getCoursesByCategory(activeCategory as CourseCategory);

  return (
    <section id="courses-section" className="py-20 px-6 md:px-8 bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Our Training Programs
          </h2>
          <p className="text-gray-600 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
            Master the most in-demand technologies with our industry-aligned curriculum and hands-on projects.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as CourseCategory | 'All')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-[var(--navy)] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-[var(--navy)] border border-gray-200'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCourses.map((course) => {
            const Icon = course.icon;
            return (
              <div key={course.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-[var(--navy)] group-hover:bg-[var(--yellow)]/10 group-hover:text-[var(--yellow)] transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    course.level === 'Beginner' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
                  }`} style={{ fontFamily: 'var(--font-body)' }}>
                    {course.level}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--navy)] mb-3 line-clamp-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {course.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow" style={{ fontFamily: 'var(--font-body)' }}>
                  {course.summary}
                </p>
                
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                  <button 
                    onClick={() => navigate(`/course/${encodeURIComponent(course.name)}`)}
                    className="flex-1 text-center py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-[var(--navy)] hover:border-[var(--navy)] hover:bg-gray-50 transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    View Details
                  </button>
                  <button 
                    onClick={() => {
                      // Navigate or scroll to enquiry form
                      const enquirySection = document.getElementById('enquiry-section');
                      if (enquirySection) {
                        enquirySection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="flex-1 text-center py-2.5 rounded-lg bg-[var(--yellow)] text-sm font-medium text-[var(--navy)] hover:bg-[#E0B015] transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
