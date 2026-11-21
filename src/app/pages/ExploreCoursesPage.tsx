import { useEffect, useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router';
import { Download, CheckCircle2, Info, BookOpen, Clock, MessageSquare, Mail, ChevronDown } from 'lucide-react';
import { COURSE_CATEGORY_ORDER, getCourseByName, getCoursesByCategory, type CourseCategory } from '../data/courses';
import { getCurriculumById } from '../data/curriculumData';
import { EnquiryModal } from '../components/EnquiryModal';
import { sendToWhatsApp, getWhatsAppUrl } from '../utils/whatsappNotification';
import { sendEmailNotification, getOutlookWebUrl, TARGET_NOTIFICATION_EMAIL } from '../utils/emailNotification';
import { generateAndDownloadCurriculumPdf } from '../utils/curriculumPdfGenerator';
import {
  downloadCurriculumForCourse,
  getCurriculumForCourse,
  triggerPostApplicationDownloads,
  type ApplicationFormData,
} from '../utils/courseApplicationPdf';

const categoryColors: Record<string, { badge: string; border: string }> = {
  'Basic Courses': { badge: 'bg-sky-100 text-sky-800', border: 'border-sky-200' },
  'Advanced IT Courses': { badge: 'bg-blue-100 text-blue-800', border: 'border-blue-200' },
  'Full Stack Courses': { badge: 'bg-orange-100 text-orange-800', border: 'border-orange-200' },
  'Quick Courses': { badge: 'bg-rose-100 text-rose-800', border: 'border-rose-200' },
  'Add on Courses': { badge: 'bg-emerald-100 text-emerald-800', border: 'border-emerald-200' },
};

const emptyForm: ApplicationFormData = {
  fullName: '',
  email: '',
  phone: '',
  course: '',
  qualification: '',
  city: '',
  message: '',
};

export function ExploreCoursesPage() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState<ApplicationFormData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [courseCategory, setCourseCategory] = useState<CourseCategory | ''>('');
  const [enquiryCourse, setEnquiryCourse] = useState<{ name: string; category: string } | null>(null);
  const [expandedCourses, setExpandedCourses] = useState<Record<string, boolean>>({
    'c-programming': true,
  });

  const toggleCourse = (id: string) => {
    setExpandedCourses((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAllCourses = (expand: boolean) => {
    if (!expand) {
      setExpandedCourses({});
    } else {
      const all: Record<string, boolean> = {};
      COURSE_CATEGORY_ORDER.forEach((cat) => {
        getCoursesByCategory(cat).forEach((c) => {
          all[c.id] = true;
        });
      });
      setExpandedCourses(all);
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    const courseParam = searchParams.get('course');
    if (courseParam) {
      const matched = getCourseByName(courseParam);
      if (matched) {
        setCourseCategory(matched.category);
        setForm((prev) => ({ ...prev, course: matched.name }));
      }
    }
  }, [searchParams]);

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

    // Save to localStorage
    const enquiry = {
      id: Date.now(),
      studentName: form.fullName.trim(),
      email: form.email.trim(),
      mobile: form.phone.trim(),
      college: form.qualification.trim(),
      course: form.course,
      courseCategory,
      message: form.message.trim(),
      submittedAt: new Date().toISOString(),
      status: 'New',
    };
    const existing = JSON.parse(localStorage.getItem('c2c_enquiries') || '[]');
    existing.push(enquiry);
    localStorage.setItem('c2c_enquiries', JSON.stringify(existing));

    // Send direct email to jigeesha.c2c@gmail.com
    sendEmailNotification({
      name: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      qualification: form.qualification.trim(),
      city: form.city.trim(),
      course: form.course,
      category: courseCategory,
      message: form.message.trim(),
    });

    // Send to WhatsApp at 7093182525
    sendToWhatsApp({
      name: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      qualification: form.qualification.trim(),
      city: form.city.trim(),
      course: form.course,
      category: courseCategory,
      message: form.message.trim(),
    });

    triggerPostApplicationDownloads(form);
  };

  const selectCourse = (name: string) => {
    navigate(`/course/${encodeURIComponent(name)}`);
  };

  const coursesInCategory = courseCategory ? getCoursesByCategory(courseCategory) : [];

  const selectedCurriculum = form.course ? getCurriculumForCourse(form.course) : undefined;

  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="py-16 px-6 md:px-8 bg-[var(--navy)]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              style={{ fontFamily: 'var(--font-body)' }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--yellow)] text-[var(--navy)] text-xs md:text-sm font-bold uppercase tracking-wider shadow-sm"
            >
              Campus to Corporate (C2C)
            </span>
            <span
              style={{ fontFamily: 'var(--font-body)' }}
              className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--yellow)]/90 font-medium"
            >
              IT Training &amp; Placement
            </span>
          </div>
          <h1
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-4xl md:text-5xl text-white mb-4"
          >
            Explore Courses
          </h1>
          <p style={{ fontFamily: 'var(--font-body)' }} className="text-white/85 text-lg max-w-2xl">
            Choose a program and submit your application. Curriculum PDFs are available for select
            advanced programs including Data Science & Analytics, Python (Entry Level), and AI & ML.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-8 bg-gray-50">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h2
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-3xl text-[var(--navy)]"
            >
              Available Programs
            </h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => toggleAllCourses(true)}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Expand All
              </button>
              <button
                type="button"
                onClick={() => toggleAllCourses(false)}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Collapse All
              </button>
            </div>
          </div>

          <div className="space-y-10">
            {COURSE_CATEGORY_ORDER.map((category) => {
              const courses = getCoursesByCategory(category);
              const colors = categoryColors[category];
              return (
                <div key={category} className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm">
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <h3
                        style={{ fontFamily: 'var(--font-heading)' }}
                        className="text-xl md:text-2xl text-[var(--navy)] font-bold"
                      >
                        {category}
                      </h3>
                      <span
                        className={`rounded-full px-3 py-0.5 text-xs font-semibold ${colors.badge}`}
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {courses.length} courses
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {courses.map((course) => {
                      const Icon = course.icon;
                      const isExpanded = !!expandedCourses[course.id];
                      const curriculum = getCurriculumById(course.name);
                      const duration = course.category === 'Full Stack Courses' ? '4-6 Months' : course.category === 'Advanced IT Courses' ? '3-4 Months' : course.category === 'Basic Courses' ? '2-3 Months' : '1 Month';
                      const keyTopics = curriculum?.modules.slice(0, 4).map((m) => m.title.replace(/^MODULE \d+ - /i, '').replace(/^\d+ /i, '').replace(/^PHASE \d+ - /i, '')) || [];

                      return (
                        <div
                          key={course.id}
                          className={`rounded-xl border transition-all overflow-hidden bg-white ${
                            isExpanded
                              ? 'border-[var(--yellow)] shadow-md ring-1 ring-[var(--yellow)]/30'
                              : 'border-gray-200 hover:border-[var(--yellow)] hover:shadow-sm'
                          }`}
                        >
                          {/* Collapsible Course Bar / Header */}
                          <div
                            onClick={() => toggleCourse(course.id)}
                            className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 sm:gap-4 transition-colors hover:bg-gray-50/80 cursor-pointer select-none"
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
                              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[var(--yellow)]/10 flex items-center justify-center text-[var(--navy)] shrink-0 transition-transform">
                                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <h4
                                    style={{ fontFamily: 'var(--font-heading)' }}
                                    className="text-base sm:text-lg font-bold text-[var(--navy)] leading-snug"
                                  >
                                    {course.name}
                                  </h4>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 mt-1">
                                  <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] sm:text-xs text-gray-700 font-medium">
                                    <Clock className="w-3 h-3 text-[var(--navy)]" />
                                    {duration}
                                  </span>
                                  <span
                                    className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold ${
                                      course.level === 'Beginner'
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'bg-purple-100 text-purple-700'
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

                            {/* Right side: quick button + chevron */}
                            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setEnquiryCourse({ name: course.name, category: course.category });
                                }}
                                className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-[var(--yellow)] px-3 py-1.5 text-xs font-bold text-[var(--navy)] shadow-sm hover:bg-[#E0B015] transition-transform hover:scale-105"
                                style={{ fontFamily: 'var(--font-body)' }}
                                title="Download Syllabus"
                              >
                                <Download className="w-3.5 h-3.5" />
                                <span>Download Syllabus</span>
                              </button>
                              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-transform duration-300 text-[var(--navy)] bg-gray-100 ${isExpanded ? 'rotate-180 bg-[var(--yellow)]/30' : ''}`}>
                                <ChevronDown className="w-4 h-4" />
                              </div>
                            </div>
                          </div>

                          {/* Collapsible Body */}
                          {isExpanded && (
                            <div className="px-4 sm:px-5 pb-5 pt-3 border-t border-gray-100 bg-gray-50/50">
                              <p
                                style={{ fontFamily: 'var(--font-body)' }}
                                className="text-sm text-gray-600 mb-4 leading-relaxed"
                              >
                                {course.summary}
                              </p>

                              {keyTopics.length > 0 && (
                                <div className="mb-4 bg-white rounded-xl p-3.5 border border-gray-100 shadow-sm">
                                  <p className="text-xs font-semibold text-[var(--navy)] mb-2 uppercase tracking-wider">
                                    Key Modules
                                  </p>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                    {keyTopics.map((topic, i) => (
                                      <div key={i} className="text-xs text-gray-700 flex items-center gap-2 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100 truncate">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--yellow)] shrink-0" />
                                        <span className="truncate">{topic}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                                <button
                                  type="button"
                                  onClick={() => selectCourse(course.name)}
                                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-[var(--navy)] px-3.5 py-2 text-xs font-semibold text-[var(--navy)] transition-colors hover:bg-gray-100"
                                  style={{ fontFamily: 'var(--font-body)' }}
                                >
                                  <BookOpen className="w-3.5 h-3.5" />
                                  View Details
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setEnquiryCourse({ name: course.name, category: course.category })}
                                  className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[var(--yellow)] px-3.5 py-2 text-xs font-bold text-[var(--navy)] transition-transform hover:scale-[1.02] shadow-sm hover:bg-[#E0B015]"
                                  style={{ fontFamily: 'var(--font-body)' }}
                                >
                                  <Download className="w-3.5 h-3.5" />
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
              );
            })}
          </div>
        </div>
      </section>

      <section id="application-form" className="py-16 px-6 md:px-8 bg-white">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-3xl text-[var(--navy)] mb-4"
            >
              Application Form
            </h2>
            <p
              style={{ fontFamily: 'var(--font-body)' }}
              className="text-[var(--navy)]/75 leading-relaxed mb-6"
            >
              Complete the form below. First choose a <strong>course category</strong>, then pick your
              course from that list.
              {selectedCurriculum ? (
                <>
                  {' '}
                  After submit, the <strong>curriculum PDF for that course</strong> will download.
                </>
              ) : (
                <> Most courses can be applied for now; curriculum PDFs are available for select programs.</>
              )}
            </p>
            {selectedCurriculum ? (
              <p
                className="flex gap-3 text-[var(--navy)]/80"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <Download className="w-5 h-5 text-[var(--yellow)] shrink-0 mt-0.5" />
                <span>You will receive: {selectedCurriculum.title} Curriculum</span>
              </p>
            ) : form.course ? (
              <p className="text-[var(--navy)]/70 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                No curriculum PDF for this course yet. Submit your application and our team will
                contact you.
              </p>
            ) : (
              <p className="text-[var(--navy)]/70 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                Select a course to apply. PDF download is available for Data Science & Analytics,
                Python (Entry Level), and AI & Machine Learning.
              </p>
            )}
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
                <h3
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="text-2xl text-[var(--navy)] mb-3"
                >
                  Application submitted successfully
                </h3>
                <p
                  style={{ fontFamily: 'var(--font-body)' }}
                  className="text-[var(--navy)]/80 mb-6"
                >
                  Thank you, {form.fullName}. Your application for{' '}
                  <strong>{form.course}</strong> has been sent to our mailboxes (<strong>info@c2ctechsolutions.com</strong> &amp; <strong>frontdesk.c2c@gmail.com</strong>) and forwarded to WhatsApp at <strong>+91 70931 82525</strong>.
                  {selectedCurriculum
                    ? ' Your curriculum PDF should have started downloading.'
                    : ' Our team will contact you with batch details soon.'}
                </p>
                <div className="flex flex-wrap gap-3">
                  {getCurriculumForCourse(form.course) && (
                    <button
                      type="button"
                      onClick={() => downloadCurriculumForCourse(form.course)}
                      className="inline-flex items-center gap-2 bg-[var(--yellow)] text-[var(--navy)] px-5 py-2.5 rounded-lg hover:bg-[#E0B015] transition-colors text-sm font-semibold"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <Download className="w-4 h-4" />
                      Download {getCurriculumForCourse(form.course)!.title} Curriculum
                    </button>
                  )}
                  <a
                    href={getWhatsAppUrl({
                      name: form.fullName,
                      email: form.email,
                      phone: form.phone,
                      qualification: form.qualification,
                      city: form.city,
                      course: form.course,
                      category: courseCategory,
                      message: form.message,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <MessageSquare className="w-4 h-4" />
                    Chat on WhatsApp (+91 70931 82525)
                  </a>
                  <a
                    href={getOutlookWebUrl({
                      name: form.fullName,
                      email: form.email,
                      phone: form.phone,
                      qualification: form.qualification,
                      city: form.city,
                      course: form.course,
                      category: courseCategory,
                      message: form.message,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                    style={{ fontFamily: 'var(--font-body)' }}
                    title={`Open Outlook for ${TARGET_NOTIFICATION_EMAIL}`}
                  >
                    <Mail className="w-4 h-4" />
                    Open in Outlook
                  </a>
                  <Link
                    to="/"
                    className="inline-flex items-center px-5 py-2.5 text-[var(--navy)] hover:underline text-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Back to home
                  </Link>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm text-[var(--navy)]" style={{ fontFamily: 'var(--font-body)' }}>
                      Full Name *
                    </label>
                    <input
                      required
                      value={form.fullName}
                      onChange={(e) => update('fullName', e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[var(--navy)] focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-[var(--navy)]" style={{ fontFamily: 'var(--font-body)' }}>
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[var(--navy)] focus:outline-none"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm text-[var(--navy)]" style={{ fontFamily: 'var(--font-body)' }}>
                      Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[var(--navy)] focus:outline-none"
                      placeholder="+91 70931 82525"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-[var(--navy)]" style={{ fontFamily: 'var(--font-body)' }}>
                      City
                    </label>
                    <input
                      value={form.city}
                      onChange={(e) => update('city', e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[var(--navy)] focus:outline-none"
                      placeholder="Vijayawada"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm text-[var(--navy)]" style={{ fontFamily: 'var(--font-body)' }}>
                      Course Category *
                    </label>
                    <select
                      required
                      value={courseCategory}
                      onChange={(e) => handleCategoryChange(e.target.value as CourseCategory | '')}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-[var(--navy)] focus:outline-none"
                    >
                      <option value="">Select category</option>
                      {COURSE_CATEGORY_ORDER.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-[var(--navy)]" style={{ fontFamily: 'var(--font-body)' }}>
                      Course *
                    </label>
                    <select
                      required
                      value={form.course}
                      disabled={!courseCategory}
                      onChange={(e) => update('course', e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-[var(--navy)] focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400"
                    >
                      <option value="">
                        {courseCategory ? 'Select course' : 'Select a category first'}
                      </option>
                      {coursesInCategory.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm text-[var(--navy)]" style={{ fontFamily: 'var(--font-body)' }}>
                    Qualification *
                  </label>
                  <input
                    required
                    value={form.qualification}
                    onChange={(e) => update('qualification', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[var(--navy)] focus:outline-none sm:max-w-md"
                    placeholder="B.Tech / B.Sc / Diploma"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm text-[var(--navy)]" style={{ fontFamily: 'var(--font-body)' }}>
                    Message (optional)
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 focus:border-[var(--navy)] focus:outline-none"
                    placeholder="Tell us about your goals or preferred batch timing"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600" style={{ fontFamily: 'var(--font-body)' }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[var(--yellow)] px-8 py-3.5 font-medium text-[var(--navy)] transition-colors hover:bg-[#E0B015] sm:w-auto"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {selectedCurriculum ? 'Submit & download curriculum' : 'Submit application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {enquiryCourse && (
        <EnquiryModal
          isOpen={!!enquiryCourse}
          onClose={() => setEnquiryCourse(null)}
          courseName={enquiryCourse.name}
          courseCategory={enquiryCourse.category}
        />
      )}
    </div>
  );
}
