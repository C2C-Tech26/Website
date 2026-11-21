export const C2C_WHATSAPP_NUMBER = '917093182525';

export interface WhatsAppEnquiryData {
  title?: string;
  name: string;
  email?: string;
  phone?: string;
  course?: string;
  category?: string;
  college?: string;
  city?: string;
  qualification?: string;
  message?: string;
}

export function formatWhatsAppMessage(data: WhatsAppEnquiryData): string {
  const lines = [
    `📩 *${data.title || 'New Course Enquiry - C2C Tech Solutions'}*`,
    `━━━━━━━━━━━━━━━━━━━`,
    `👤 *Name:* ${data.name}`,
    data.phone ? `📱 *Mobile:* ${data.phone}` : null,
    data.email ? `📧 *Email:* ${data.email}` : null,
    data.course ? `🎓 *Course:* ${data.course}` : null,
    data.category ? `🏷️ *Category:* ${data.category}` : null,
    data.college ? `🏛️ *College / Institute:* ${data.college}` : null,
    data.qualification ? `📜 *Qualification:* ${data.qualification}` : null,
    data.city ? `📍 *City:* ${data.city}` : null,
    data.message ? `💬 *Message:* ${data.message}` : null,
    `━━━━━━━━━━━━━━━━━━━`,
    `🕒 *Date:* ${new Date().toLocaleString('en-IN')}`,
    `🌐 *Source:* C2C Tech Solutions Website`,
  ].filter(Boolean);

  return lines.join('\n');
}

export function getWhatsAppUrl(data: WhatsAppEnquiryData): string {
  const text = formatWhatsAppMessage(data);
  return `https://wa.me/${C2C_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function sendToWhatsApp(data: WhatsAppEnquiryData): string {
  const url = getWhatsAppUrl(data);
  try {
    window.open(url, '_blank', 'noopener,noreferrer');
  } catch (err) {
    console.error('Failed to open WhatsApp link:', err);
  }
  return url;
}
