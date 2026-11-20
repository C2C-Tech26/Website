import { useState, useEffect, useCallback } from 'react';
import {
  Search,
  Mail,
  Phone,
  GraduationCap,
  Calendar,
  Building2,
  MessageSquare,
  ExternalLink,
} from 'lucide-react';
import { getMailtoUrl, getOutlookWebUrl, TARGET_NOTIFICATION_EMAIL } from '../utils/emailNotification';

interface Enquiry {
  id: number;
  studentName: string;
  email: string;
  mobile: string;
  college: string;
  course: string;
  courseCategory: string;
  message: string;
  submittedAt: string;
  status: 'New' | 'Contacted' | 'Completed';
}

const STORAGE_KEY = 'c2c_enquiries';

const statusStyles: Record<Enquiry['status'], string> = {
  New: 'bg-blue-100 text-blue-700',
  Contacted: 'bg-yellow-100 text-yellow-700',
  Completed: 'bg-green-100 text-green-700',
};

function readEnquiries(): Enquiry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Enquiry[];
  } catch {
    return [];
  }
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
}

export function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const loadEnquiries = useCallback(() => {
    const data = readEnquiries();
    // Sort newest first
    data.sort(
      (a, b) =>
        new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );
    setEnquiries(data);
  }, []);

  useEffect(() => {
    loadEnquiries();
  }, [loadEnquiries]);

  const handleStatusChange = (id: number, newStatus: Enquiry['status']) => {
    const all = readEnquiries();
    const updated = all.map((e) =>
      e.id === id ? { ...e, status: newStatus } : e
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    loadEnquiries();
  };

  // --- Filtering ---
  const filtered = enquiries.filter((e) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      e.studentName.toLowerCase().includes(q) ||
      e.email.toLowerCase().includes(q) ||
      e.course.toLowerCase().includes(q)
    );
  });

  // --- Stats ---
  const totalCount = enquiries.length;
  const newCount = enquiries.filter((e) => e.status === 'New').length;
  const contactedCount = enquiries.filter(
    (e) => e.status === 'Contacted'
  ).length;
  const completedCount = enquiries.filter(
    (e) => e.status === 'Completed'
  ).length;

  // --- Render ---
  return (
    <div
      className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8"
      style={{
        fontFamily: 'var(--font-body)',
        backgroundColor: '#f9fafb',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1
            className="text-3xl font-bold"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--navy)',
            }}
          >
            Enquiry Management
          </h1>
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-lg text-xs font-medium text-blue-900">
            <Mail className="w-3.5 h-3.5 text-blue-700" />
            <span>Forwarding to: <strong>info@c2ctechsolutions.com (Outlook)</strong> &amp; <strong>frontdesk.c2c@gmail.com</strong></span>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <SummaryCard label="Total" count={totalCount} accent="bg-gray-100 text-gray-700" />
          <SummaryCard label="New" count={newCount} accent={statusStyles.New} />
          <SummaryCard
            label="Contacted"
            count={contactedCount}
            accent={statusStyles.Contacted}
          />
          <SummaryCard
            label="Completed"
            count={completedCount}
            accent={statusStyles.Completed}
          />
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, email or course…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--navy)] text-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          />
        </div>

        {/* Content */}
        {filtered.length === 0 ? (
          <EmptyState hasAny={enquiries.length > 0} />
        ) : (
          <>
            {/* Table – md and above */}
            <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm text-left">
                <thead
                  className="text-xs uppercase tracking-wider"
                  style={{
                    backgroundColor: 'var(--navy)',
                    color: 'var(--yellow)',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  <tr>
                    <th className="px-4 py-3">#</th>
                    <th className="px-4 py-3">Student Name</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Mobile</th>
                    <th className="px-4 py-3">College</th>
                    <th className="px-4 py-3">Course</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {filtered.map((e, idx) => (
                    <tr key={e.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-gray-500">{idx + 1}</td>
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {e.studentName}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        <div className="flex items-center gap-1.5">
                          <span className="truncate max-w-[150px]">{e.email}</span>
                          {e.email && e.email !== 'Via Digital Marketing Modal' && (
                            <>
                              <a
                                href={getMailtoUrl({
                                  name: e.studentName,
                                  email: e.email,
                                  phone: e.mobile,
                                  college: e.college,
                                  course: e.course,
                                  category: e.courseCategory,
                                  message: e.message,
                                })}
                                title={`Open in Outlook Desktop (${TARGET_NOTIFICATION_EMAIL})`}
                                className="text-blue-600 hover:text-blue-800 transition-colors"
                              >
                                <Mail className="w-3.5 h-3.5 inline" />
                              </a>
                              <a
                                href={getOutlookWebUrl({
                                  name: e.studentName,
                                  email: e.email,
                                  phone: e.mobile,
                                  college: e.college,
                                  course: e.course,
                                  category: e.courseCategory,
                                  message: e.message,
                                })}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={`Open in Outlook Web (${TARGET_NOTIFICATION_EMAIL})`}
                                className="text-sky-600 hover:text-sky-800 transition-colors"
                              >
                                <ExternalLink className="w-3.5 h-3.5 inline" />
                              </a>
                            </>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        <div className="flex items-center gap-1.5">
                          <span>{e.mobile}</span>
                          {e.mobile && e.mobile !== 'Not specified' && (
                            <a
                              href={`https://wa.me/${e.mobile.replace(/\D/g, '').length === 10 ? '91' + e.mobile.replace(/\D/g, '') : e.mobile.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello ${e.studentName}, thank you for contacting C2C Tech Solutions regarding ${e.course}.`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Chat with student on WhatsApp"
                              className="text-green-600 hover:text-green-700 transition-colors"
                            >
                              <MessageSquare className="w-4 h-4 inline" />
                            </a>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{e.college}</td>
                      <td className="px-4 py-3 text-gray-600">{e.course}</td>
                      <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                        {formatDate(e.submittedAt)}
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={e.status} />
                      </td>
                      <td className="px-4 py-3">
                        <StatusSelect
                          current={e.status}
                          onChange={(s) => handleStatusChange(e.id, s)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cards – below md */}
            <div className="md:hidden flex flex-col gap-4">
              {filtered.map((e) => (
                <EnquiryCard
                  key={e.id}
                  enquiry={e}
                  onStatusChange={handleStatusChange}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function SummaryCard({
  label,
  count,
  accent,
}: {
  label: string;
  count: number;
  accent: string;
}) {
  return (
    <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-5 flex flex-col items-center gap-1">
      <span
        className="text-xs font-semibold uppercase tracking-wide"
        style={{ color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}
      >
        {label}
      </span>
      <span
        className={`text-2xl font-bold rounded-full px-4 py-1 ${accent}`}
      >
        {count}
      </span>
    </div>
  );
}

function StatusBadge({ status }: { status: Enquiry['status'] }) {
  return (
    <span
      className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

function StatusSelect({
  current,
  onChange,
}: {
  current: Enquiry['status'];
  onChange: (s: Enquiry['status']) => void;
}) {
  return (
    <select
      value={current}
      onChange={(e) => onChange(e.target.value as Enquiry['status'])}
      className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[var(--navy)]"
      style={{ fontFamily: 'var(--font-body)' }}
    >
      <option value="New">New</option>
      <option value="Contacted">Contacted</option>
      <option value="Completed">Completed</option>
    </select>
  );
}

function EnquiryCard({
  enquiry: e,
  onStatusChange,
}: {
  enquiry: Enquiry;
  onStatusChange: (id: number, s: Enquiry['status']) => void;
}) {
  return (
    <div className="rounded-xl bg-white shadow-sm border border-gray-200 p-5 flex flex-col gap-3">
      {/* Name + Status */}
      <div className="flex items-center justify-between">
        <span
          className="font-semibold text-base"
          style={{ color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}
        >
          {e.studentName}
        </span>
        <StatusBadge status={e.status} />
      </div>

      {/* Details */}
      <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-gray-400 shrink-0" />
            <span className="truncate">{e.email}</span>
          </div>
          {e.email && e.email !== 'Via Digital Marketing Modal' && (
            <div className="flex items-center gap-1.5">
              <a
                href={getMailtoUrl({
                  name: e.studentName,
                  email: e.email,
                  phone: e.mobile,
                  college: e.college,
                  course: e.course,
                  category: e.courseCategory,
                  message: e.message,
                })}
                title="Open in Outlook Desktop"
                className="text-xs text-blue-600 hover:text-blue-800 underline"
              >
                Outlook
              </a>
              <span className="text-gray-300">|</span>
              <a
                href={getOutlookWebUrl({
                  name: e.studentName,
                  email: e.email,
                  phone: e.mobile,
                  college: e.college,
                  course: e.course,
                  category: e.courseCategory,
                  message: e.message,
                })}
                target="_blank"
                rel="noopener noreferrer"
                title="Open in Outlook Web"
                className="text-xs text-sky-600 hover:text-sky-800 underline inline-flex items-center gap-0.5"
              >
                Web <ExternalLink className="w-2.5 h-2.5 inline" />
              </a>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-400 shrink-0" />
            <span>{e.mobile}</span>
          </div>
          {e.mobile && e.mobile !== 'Not specified' && (
            <a
              href={`https://wa.me/${e.mobile.replace(/\D/g, '').length === 10 ? '91' + e.mobile.replace(/\D/g, '') : e.mobile.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello ${e.studentName}, thank you for contacting C2C Tech Solutions regarding ${e.course}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-gray-400 shrink-0" />
          <span>{e.college}</span>
        </div>
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-gray-400 shrink-0" />
          <span>
            {e.course}{' '}
            <span className="text-gray-400">({e.courseCategory})</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-400 shrink-0" />
          <span>{formatDate(e.submittedAt)}</span>
        </div>
        {e.message && (
          <div className="flex items-start gap-2">
            <MessageSquare className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
            <span className="text-gray-500 italic">{e.message}</span>
          </div>
        )}
      </div>

      {/* Action */}
      <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs text-gray-400">Change status</span>
        <StatusSelect
          current={e.status}
          onChange={(s) => onStatusChange(e.id, s)}
        />
      </div>
    </div>
  );
}

function EmptyState({ hasAny }: { hasAny: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <MessageSquare
        className="w-16 h-16 mb-4"
        style={{ color: 'var(--navy)' }}
        strokeWidth={1.2}
      />
      <h2
        className="text-xl font-semibold mb-2"
        style={{ color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}
      >
        {hasAny ? 'No matching enquiries' : 'No enquiries yet'}
      </h2>
      <p className="text-gray-500 max-w-md" style={{ fontFamily: 'var(--font-body)' }}>
        {hasAny
          ? "Try adjusting your search query to find what you're looking for."
          : 'When students submit enquiries through the contact form, they will appear here for you to manage.'}
      </p>
    </div>
  );
}
