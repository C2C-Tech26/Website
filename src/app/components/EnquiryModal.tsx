'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { X, CheckCircle2, Download, Loader2, MessageSquare, Mail } from 'lucide-react';
import { generateAndDownloadCurriculumPdf } from '../utils/curriculumPdfGenerator';
import { sendToWhatsApp, getWhatsAppUrl } from '../utils/whatsappNotification';
import { sendEmailNotification, getOutlookWebUrl, TARGET_NOTIFICATION_EMAIL } from '../utils/emailNotification';

export interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
  courseCategory: string;
}

interface FormData {
  studentName: string;
  email: string;
  mobile: string;
  college: string;
  message: string;
}

interface FormErrors {
  studentName?: string;
  email?: string;
  mobile?: string;
  college?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  courseName,
  courseCategory,
}) => {
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    email: '',
    mobile: '',
    college: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const resetForm = useCallback(() => {
    setFormData({ studentName: '', email: '', mobile: '', college: '', message: '' });
    setErrors({});
    setIsSubmitting(false);
    setIsSuccess(false);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be exactly 10 digits';
    }
    if (!formData.college.trim()) {
      newErrors.college = 'College/Institution name is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      // Save to localStorage
      const enquiry = {
        id: Date.now(),
        studentName: formData.studentName.trim(),
        email: formData.email.trim(),
        mobile: formData.mobile.trim(),
        college: formData.college.trim(),
        course: courseName,
        courseCategory,
        message: formData.message.trim(),
        submittedAt: new Date().toISOString(),
        status: 'New',
      };

      const existing = JSON.parse(localStorage.getItem('c2c_enquiries') || '[]');
      existing.push(enquiry);
      localStorage.setItem('c2c_enquiries', JSON.stringify(existing));

      // Direct email notification to jigeesha.c2c@gmail.com
      sendEmailNotification({
        name: formData.studentName.trim(),
        email: formData.email.trim(),
        phone: formData.mobile.trim(),
        college: formData.college.trim(),
        course: courseName,
        category: courseCategory,
        message: formData.message.trim(),
      });

      // Send to WhatsApp at 7093182525
      sendToWhatsApp({
        name: formData.studentName.trim(),
        email: formData.email.trim(),
        phone: formData.mobile.trim(),
        college: formData.college.trim(),
        course: courseName,
        category: courseCategory,
        message: formData.message.trim(),
      });

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDownloadCurriculum = () => {
    generateAndDownloadCurriculumPdf(courseName);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)' }}
      onClick={handleOverlayClick}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden"
        style={{
          backgroundColor: '#fff',
          animation: 'modalScaleIn 0.3s ease-out forwards',
        }}
      >
        <style jsx>{`
          @keyframes modalScaleIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>

        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ backgroundColor: 'var(--navy, #1B2A4A)', color: '#fff' }}
        >
          <h2
            className="text-xl font-bold"
            style={{ fontFamily: 'var(--font-heading, sans-serif)' }}
          >
            Enquiry Form
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full transition-colors hover:bg-white/20"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        <div className="px-6 py-5 max-h-[75vh] overflow-y-auto">
          {isSuccess ? (
            /* ───── Success State ───── */
            <div className="flex flex-col items-center text-center py-6 gap-4">
              <CheckCircle2 size={56} className="text-green-500" />
              <h3
                className="text-2xl font-bold"
                style={{
                  color: 'var(--navy, #1B2A4A)',
                  fontFamily: 'var(--font-heading, sans-serif)',
                }}
              >
                Enquiry Submitted Successfully!
              </h3>
              <p
                className="text-gray-600"
                style={{ fontFamily: 'var(--font-body, sans-serif)' }}
              >
                Thank you for your interest in <strong>{courseName}</strong>. Your enquiry details have been recorded and sent to <strong>info@c2ctechsolutions.com</strong> (Outlook) &amp; <strong>frontdesk.c2c@gmail.com</strong>, and forwarded to our WhatsApp advisor at <strong>+91 70931 82525</strong>.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                <button
                  onClick={handleDownloadCurriculum}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-transform hover:scale-105"
                  style={{
                    backgroundColor: 'var(--yellow, #F5C518)',
                    color: 'var(--navy, #1B2A4A)',
                    fontFamily: 'var(--font-body, sans-serif)',
                  }}
                >
                  <Download size={18} />
                  Download Curriculum
                </button>
                <a
                  href={getWhatsAppUrl({
                    name: formData.studentName,
                    email: formData.email,
                    phone: formData.mobile,
                    college: formData.college,
                    course: courseName,
                    category: courseCategory,
                    message: formData.message,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm bg-green-600 text-white transition-transform hover:scale-105 hover:bg-green-700"
                  style={{ fontFamily: 'var(--font-body, sans-serif)' }}
                >
                  <MessageSquare size={18} />
                  Chat on WhatsApp (+91 70931 82525)
                </a>
                <a
                  href={getOutlookWebUrl({
                    name: formData.studentName,
                    email: formData.email,
                    phone: formData.mobile,
                    college: formData.college,
                    course: courseName,
                    category: courseCategory,
                    message: formData.message,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm bg-blue-600 text-white transition-transform hover:scale-105 hover:bg-blue-700"
                  style={{ fontFamily: 'var(--font-body, sans-serif)' }}
                  title={`Open Outlook for ${TARGET_NOTIFICATION_EMAIL}`}
                >
                  <Mail size={18} />
                  Open in Outlook
                </a>
              </div>
            </div>
          ) : (
            /* ───── Form ───── */
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Student Name */}
              <div>
                <label
                  htmlFor="studentName"
                  className="block text-sm font-medium mb-1"
                  style={{
                    color: 'var(--navy, #1B2A4A)',
                    fontFamily: 'var(--font-body, sans-serif)',
                  }}
                >
                  Student Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="studentName"
                  name="studentName"
                  type="text"
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors focus:ring-2"
                  style={{
                    borderColor: errors.studentName ? '#ef4444' : '#d1d5db',
                    fontFamily: 'var(--font-body, sans-serif)',
                  }}
                />
                {errors.studentName && (
                  <p className="mt-1 text-xs text-red-500">{errors.studentName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                  style={{
                    color: 'var(--navy, #1B2A4A)',
                    fontFamily: 'var(--font-body, sans-serif)',
                  }}
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors focus:ring-2"
                  style={{
                    borderColor: errors.email ? '#ef4444' : '#d1d5db',
                    fontFamily: 'var(--font-body, sans-serif)',
                  }}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium mb-1"
                  style={{
                    color: 'var(--navy, #1B2A4A)',
                    fontFamily: 'var(--font-body, sans-serif)',
                  }}
                >
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors focus:ring-2"
                  style={{
                    borderColor: errors.mobile ? '#ef4444' : '#d1d5db',
                    fontFamily: 'var(--font-body, sans-serif)',
                  }}
                />
                {errors.mobile && (
                  <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>
                )}
              </div>

              {/* College / Institution Name */}
              <div>
                <label
                  htmlFor="college"
                  className="block text-sm font-medium mb-1"
                  style={{
                    color: 'var(--navy, #1B2A4A)',
                    fontFamily: 'var(--font-body, sans-serif)',
                  }}
                >
                  College / Institution Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="college"
                  name="college"
                  type="text"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="Enter your college or institution"
                  className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors focus:ring-2"
                  style={{
                    borderColor: errors.college ? '#ef4444' : '#d1d5db',
                    fontFamily: 'var(--font-body, sans-serif)',
                  }}
                />
                {errors.college && (
                  <p className="mt-1 text-xs text-red-500">{errors.college}</p>
                )}
              </div>

              {/* Course Interested In (read-only) */}
              <div>
                <label
                  htmlFor="course"
                  className="block text-sm font-medium mb-1"
                  style={{
                    color: 'var(--navy, #1B2A4A)',
                    fontFamily: 'var(--font-body, sans-serif)',
                  }}
                >
                  Course Interested In
                </label>
                <input
                  id="course"
                  type="text"
                  value={courseName}
                  readOnly
                  className="w-full rounded-lg border px-4 py-2.5 text-sm bg-gray-100 cursor-not-allowed"
                  style={{
                    borderColor: '#d1d5db',
                    fontFamily: 'var(--font-body, sans-serif)',
                  }}
                />
              </div>

              {/* Message / Additional Requirements */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                  style={{
                    color: 'var(--navy, #1B2A4A)',
                    fontFamily: 'var(--font-body, sans-serif)',
                  }}
                >
                  Message / Additional Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific requirements or questions?"
                  rows={3}
                  className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors focus:ring-2 resize-none"
                  style={{
                    borderColor: '#d1d5db',
                    fontFamily: 'var(--font-body, sans-serif)',
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: 'var(--yellow, #F5C518)',
                  color: 'var(--navy, #1B2A4A)',
                  fontFamily: 'var(--font-body, sans-serif)',
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Enquiry'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
