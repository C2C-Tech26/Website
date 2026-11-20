import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { sendToWhatsApp, getWhatsAppUrl } from '../utils/whatsappNotification';
import { sendEmailNotification, getOutlookWebUrl, TARGET_NOTIFICATION_EMAIL } from '../utils/emailNotification';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    // Save to localStorage
    const enquiry = {
      id: Date.now(),
      studentName: formData.name.trim(),
      email: formData.email.trim(),
      mobile: formData.phone.trim() || 'Not specified',
      college: 'Website Contact Form',
      course: 'General Inquiry',
      courseCategory: 'Contact Form',
      message: formData.message.trim(),
      submittedAt: new Date().toISOString(),
      status: 'New',
    };
    const existing = JSON.parse(localStorage.getItem('c2c_enquiries') || '[]');
    existing.push(enquiry);
    localStorage.setItem('c2c_enquiries', JSON.stringify(existing));

    // Send direct email to jigeesha.c2c@gmail.com
    sendEmailNotification({
      title: 'General Contact Inquiry',
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    });

    // Send to WhatsApp at 7093182525
    sendToWhatsApp({
      title: 'General Contact Inquiry',
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[var(--navy)] px-5 py-16 sm:px-6 md:px-8 md:py-24 lg:py-[120px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 grid grid-cols-1 gap-10 md:mb-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              style={{ fontFamily: 'var(--font-heading)' }}
              className="mb-8 text-3xl text-white sm:text-4xl lg:text-5xl"
            >
              Let&apos;s Connect
            </h2>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-[var(--yellow)]" />
                <div className="w-full">
                  <p style={{ fontFamily: 'var(--font-body)' }} className="text-white font-semibold">
                    C2C Tech Solutions Pvt Ltd
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)' }} className="text-white/80 leading-relaxed">
                    Plot No. 301, 3rd Floor, Sultan Plaza,
                    <br />
                    9th Avenue, Benz Circle,
                    <br />
                    Vijayawada - 520010
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=C2C+Tech+Solutions+Plot+No+301+Sultan+Plaza+Benz+Circle+Vijayawada+520010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-[var(--yellow)] text-white hover:text-[var(--navy)] text-xs md:text-sm font-semibold transition-all border border-white/20 group/map shadow-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                    title="Open in Google Maps"
                  >
                    <MapPin className="w-4 h-4 text-[var(--yellow)] group-hover/map:text-[var(--navy)] transition-colors" />
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 shrink-0 text-[var(--yellow)]" />
                <a
                  href="tel:+917093182525"
                  style={{ fontFamily: 'var(--font-body)' }}
                  className="text-white hover:text-[var(--yellow)] transition-colors"
                >
                  +91 70931 82525
                </a>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 h-6 w-6 shrink-0 text-[var(--yellow)]" />
                <p
                  style={{ fontFamily: 'var(--font-body)' }}
                  className="break-all text-white sm:break-normal"
                >
                  info@c2ctechsolutions.com
                </p>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-sm">
                <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-[var(--yellow)]" />
                <h3
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="mb-2 text-2xl font-bold text-white"
                >
                  Message Sent Successfully!
                </h3>
                <p
                  style={{ fontFamily: 'var(--font-body)' }}
                  className="mb-6 text-white/80"
                >
                  Thank you, <strong>{formData.name}</strong>. Your message has been sent to our mailboxes (<strong>info@c2ctechsolutions.com</strong> &amp; <strong>frontdesk.c2c@gmail.com</strong>) and forwarded to our WhatsApp team at <strong>+91 70931 82525</strong>.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href={getWhatsAppUrl({
                      title: 'General Contact Inquiry',
                      name: formData.name,
                      email: formData.email,
                      phone: formData.phone,
                      message: formData.message,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <MessageSquare className="h-4 w-4" />
                    Open WhatsApp Chat (+91 70931 82525)
                  </a>
                  <a
                    href={getOutlookWebUrl({
                      title: 'General Contact Inquiry',
                      name: formData.name,
                      email: formData.email,
                      phone: formData.phone,
                      message: formData.message,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                    style={{ fontFamily: 'var(--font-body)' }}
                    title={`Open Outlook for ${TARGET_NOTIFICATION_EMAIL}`}
                  >
                    <Mail className="h-4 w-4" />
                    Open in Outlook
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="rounded-lg border border-white/30 px-6 py-3 text-white transition-colors hover:bg-white/10"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-[var(--yellow)] focus:outline-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-[var(--yellow)] focus:outline-none"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-[var(--yellow)] focus:outline-none"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>

                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-[var(--yellow)] focus:outline-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                />

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[var(--yellow)] px-8 py-3 text-[var(--navy)] font-bold transition-colors hover:bg-[#E0B015]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Send Message & Forward to WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 border-t border-white/20 pt-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <p
            style={{ fontFamily: 'var(--font-body)' }}
            className="max-w-sm text-sm text-white/60 sm:max-w-none"
          >
            © 2026 C2C Tech Solutions Pvt Ltd. All rights reserved.
          </p>

          <div className="flex gap-3 sm:gap-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[var(--yellow)] hover:text-[var(--navy)]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[var(--yellow)] hover:text-[var(--navy)]"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[var(--yellow)] hover:text-[var(--navy)]"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          <a
            href="https://c2ctechsolutions.com"
            style={{ fontFamily: 'var(--font-body)' }}
            className="text-sm text-[var(--yellow)] hover:underline"
          >
            www.c2ctechsolutions.com
          </a>
        </div>
      </div>
    </section>
  );
}
