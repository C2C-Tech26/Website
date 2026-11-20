export const PRIMARY_NOTIFICATION_EMAIL = 'info@c2ctechsolutions.com';
export const SECONDARY_NOTIFICATION_EMAIL = 'frontdesk.c2c@gmail.com';
export const TARGET_NOTIFICATION_EMAILS = [
  PRIMARY_NOTIFICATION_EMAIL,
  SECONDARY_NOTIFICATION_EMAIL,
];
export const TARGET_NOTIFICATION_EMAIL = `${PRIMARY_NOTIFICATION_EMAIL}, ${SECONDARY_NOTIFICATION_EMAIL}`;

export interface EmailEnquiryPayload {
  title?: string;
  name: string;
  email?: string;
  phone?: string;
  course?: string;
  category?: string;
  college?: string;
  qualification?: string;
  city?: string;
  message?: string;
}

export function formatEmailBody(data: EmailEnquiryPayload): string {
  const lines = [
    `New Enquiry Received on C2C Tech Solutions Website:`,
    `----------------------------------------------------`,
    `Student / Client Name: ${data.name}`,
    data.phone ? `Phone / Mobile: ${data.phone}` : null,
    data.email ? `Email: ${data.email}` : null,
    data.course ? `Course / Service: ${data.course}` : null,
    data.category ? `Category: ${data.category}` : null,
    data.college ? `College / Institute: ${data.college}` : null,
    data.qualification ? `Qualification: ${data.qualification}` : null,
    data.city ? `City: ${data.city}` : null,
    data.message ? `Message: ${data.message}` : null,
    `----------------------------------------------------`,
    `Submission Date & Time: ${new Date().toLocaleString('en-IN')}`,
    `Recipients: ${PRIMARY_NOTIFICATION_EMAIL} (Outlook) & ${SECONDARY_NOTIFICATION_EMAIL}`,
    `Source: C2C Tech Solutions Website`,
  ].filter(Boolean);

  return lines.join('\n');
}

/**
 * Native mailto URL - sends to info@c2ctechsolutions.com with CC to frontdesk.c2c@gmail.com
 */
export function getMailtoUrl(data: EmailEnquiryPayload): string {
  const subject = encodeURIComponent(`[C2C Enquiry] ${data.course ? data.course + ' - ' : ''}${data.name}`);
  const body = encodeURIComponent(formatEmailBody(data));
  return `mailto:${PRIMARY_NOTIFICATION_EMAIL}?cc=${encodeURIComponent(SECONDARY_NOTIFICATION_EMAIL)}&subject=${subject}&body=${body}`;
}

/**
 * Microsoft 365 / Office Outlook Web compose link (to info@c2ctechsolutions.com, cc frontdesk.c2c@gmail.com)
 */
export function getOutlookWebUrl(data: EmailEnquiryPayload): string {
  const subject = encodeURIComponent(`[C2C Enquiry] ${data.course ? data.course + ' - ' : ''}${data.name}`);
  const body = encodeURIComponent(formatEmailBody(data));
  return `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(PRIMARY_NOTIFICATION_EMAIL)}&cc=${encodeURIComponent(SECONDARY_NOTIFICATION_EMAIL)}&subject=${subject}&body=${body}`;
}

/**
 * Outlook Live / Personal compose link as fallback
 */
export function getOutlookLiveUrl(data: EmailEnquiryPayload): string {
  const subject = encodeURIComponent(`[C2C Enquiry] ${data.course ? data.course + ' - ' : ''}${data.name}`);
  const body = encodeURIComponent(formatEmailBody(data));
  return `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(PRIMARY_NOTIFICATION_EMAIL)}&cc=${encodeURIComponent(SECONDARY_NOTIFICATION_EMAIL)}&subject=${subject}&body=${body}`;
}

/**
 * Sends enquiry details directly to BOTH info@c2ctechsolutions.com (Outlook) and frontdesk.c2c@gmail.com via FormSubmit.
 */
export async function sendEmailNotification(data: EmailEnquiryPayload): Promise<{ success: boolean; error?: string }> {
  try {
    const subject = `[C2C Website Enquiry] ${data.course ? data.course + ' - ' : ''}${data.name}`;
    const payload = {
      _subject: subject,
      _template: 'table',
      _captcha: 'false',
      _replyto: data.email || PRIMARY_NOTIFICATION_EMAIL,
      _cc: SECONDARY_NOTIFICATION_EMAIL,
      'Recipients': `${PRIMARY_NOTIFICATION_EMAIL} (Outlook) & ${SECONDARY_NOTIFICATION_EMAIL}`,
      'Student Name': data.name,
      'Email': data.email || 'N/A',
      'Mobile Number': data.phone || 'N/A',
      'Course / Plan': data.course || 'General Enquiry',
      'Category': data.category || 'N/A',
      'College / Institute': data.college || 'N/A',
      'Qualification': data.qualification || 'N/A',
      'City': data.city || 'N/A',
      'Message': data.message || 'No additional message',
      'Submission Time': new Date().toLocaleString('en-IN'),
    };

    // Dispatch concurrently to both endpoints for guaranteed dual delivery
    const endpoints = [
      `https://formsubmit.co/ajax/${PRIMARY_NOTIFICATION_EMAIL}`,
      `https://formsubmit.co/ajax/${SECONDARY_NOTIFICATION_EMAIL}`,
    ];

    const results = await Promise.allSettled(
      endpoints.map((url) =>
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        })
      )
    );

    const anySuccess = results.some((r) => r.status === 'fulfilled' && r.value.ok);
    return { success: anySuccess };
  } catch (err: any) {
    console.warn('Direct email dispatch encountered network/CORS limitation:', err);
    return { success: false, error: err?.message || 'Network error' };
  }
}
