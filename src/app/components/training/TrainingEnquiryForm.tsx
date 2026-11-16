import { useState } from 'react';
import { COURSE_CATEGORY_ORDER, getCoursesByCategory, type CourseCategory } from '../../data/courses';
import { triggerPostApplicationDownloads, type ApplicationFormData, getCurriculumForCourse } from '../../utils/courseApplicationPdf';
import { CheckCircle2, Download } from 'lucide-react';
import { Link } from 'react-router';

const emptyForm: ApplicationFormData = {
  fullName: '',
  email: '',
  phone: '',
  course: '',
  qualification: '',
  city: '',
  message: '',
};

export function TrainingEnquiryForm() {
  const [form, setForm] = useState<ApplicationFormData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [courseCategory, setCourseCategory] = useState<CourseCategory | ''>('');

  const update = (field: keyof ApplicationFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleCategoryChange = (category: CourseCategory | '') => {
    setCourseCategory(category);
    setForm((prev) => ({ ...prev, course: '' }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.email.trim() || !form.phone.trim() || !courseCategory || !form.course || !form.qualification.trim()) {
      setError('Please fill in all required fields and select a course category and course.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitted(true);
    triggerPostApplicationDownloads(form);
  };

  const coursesInCategory = courseCategory ? getCoursesByCategory(courseCategory) : [];
  const selectedCurriculum = form.course ? getCurriculumForCourse(form.course) : undefined;

  return (
    <section id="enquiry-section" className="py-20 px-6 md:px-8 bg-white border-t border-gray-100">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Start Your Journey Today
          </h2>
          <p className="text-gray-600 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
            Fill out the form below to enquire about a course or enroll. Our academic counselors will get in touch with you shortly.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--navy)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Application Received!
              </h3>
              <p className="text-gray-600 text-lg mb-8" style={{ fontFamily: 'var(--font-body)' }}>
                Thank you, {form.fullName}. We have received your application for <strong>{form.course}</strong>.
                {selectedCurriculum 
                  ? ' Your curriculum PDF download should have started.' 
                  : ' Our team will contact you with batch details soon.'}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/"
                  className="px-8 py-3 rounded-lg border-2 border-[var(--navy)] text-[var(--navy)] font-semibold hover:bg-gray-50 transition-colors"
                >
                  Back to Home
                </Link>
                {selectedCurriculum && (
                  <button
                    onClick={() => triggerPostApplicationDownloads(form)}
                    className="px-8 py-3 rounded-lg bg-[var(--yellow)] text-[var(--navy)] font-semibold hover:bg-[#E0B015] transition-colors flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF Again
                  </button>
                )}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[var(--navy)] mb-2" style={{ fontFamily: 'var(--font-body)' }}>Full Name *</label>
                  <input
                    required
                    value={form.fullName}
                    onChange={(e) => update('fullName', e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)] transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--navy)] mb-2" style={{ fontFamily: 'var(--font-body)' }}>Email Address *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[var(--navy)] mb-2" style={{ fontFamily: 'var(--font-body)' }}>Phone Number *</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)] transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--navy)] mb-2" style={{ fontFamily: 'var(--font-body)' }}>City</label>
                  <input
                    value={form.city}
                    onChange={(e) => update('city', e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)] transition-all"
                    placeholder="Vijayawada"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[var(--navy)] mb-2" style={{ fontFamily: 'var(--font-body)' }}>Course Category *</label>
                  <select
                    required
                    value={courseCategory}
                    onChange={(e) => handleCategoryChange(e.target.value as CourseCategory | '')}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)] transition-all appearance-none"
                  >
                    <option value="">Select category</option>
                    {COURSE_CATEGORY_ORDER.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--navy)] mb-2" style={{ fontFamily: 'var(--font-body)' }}>Interested Course *</label>
                  <select
                    required
                    value={form.course}
                    disabled={!courseCategory}
                    onChange={(e) => update('course', e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)] transition-all appearance-none disabled:opacity-50"
                  >
                    <option value="">{courseCategory ? 'Select a course' : 'Select category first'}</option>
                    {coursesInCategory.map((c) => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-2" style={{ fontFamily: 'var(--font-body)' }}>Highest Qualification *</label>
                <input
                  required
                  value={form.qualification}
                  onChange={(e) => update('qualification', e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)] transition-all"
                  placeholder="e.g. B.Tech Computer Science"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-2" style={{ fontFamily: 'var(--font-body)' }}>Any queries? (Optional)</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)] transition-all resize-none"
                  placeholder="Tell us about your preferred batch timings or specific goals..."
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm font-medium">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-[var(--navy)] text-white rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-xl shadow-[var(--navy)]/20"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {selectedCurriculum ? 'Submit & Download Curriculum' : 'Submit Enquiry'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
