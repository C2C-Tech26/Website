import { jsPDF } from 'jspdf';
import { getCurriculumById } from '../data/curriculumData';
import { getCourseByName } from '../data/courses';
import { CURRICULUM_PDFS } from './courseApplicationPdf';

const NAVY = '#0A1F3F';
const YELLOW = '#F5C518';

/**
 * Generates and downloads a curriculum PDF for the given course.
 *
 * 1. If the course has a pre-built PDF in CURRICULUM_PDFS, download that.
 * 2. Otherwise, generate a branded PDF from curriculumData on the fly.
 * 3. If no curriculum data exists either, produce a placeholder PDF.
 */
export function generateAndDownloadCurriculumPdf(courseName: string): void {
  // ── 1. Try pre-built static PDF ───────────────────────────────────
  const course = getCourseByName(courseName);

  if (course?.curriculumId) {
    const pdf = CURRICULUM_PDFS.find((p) => p.id === course.curriculumId);
    if (pdf) {
      const link = document.createElement('a');
      link.href = pdf.url;
      link.download = pdf.filename;
      link.rel = 'noopener';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
  }

  // ── 2. Generate PDF from curriculum data ──────────────────────────
  const curriculum = getCurriculumById(courseName);

  if (curriculum) {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const marginLeft = 15;
    const marginRight = 15;
    const contentWidth = pageWidth - marginLeft - marginRight;
    let currentPage = 1;



    // ── Helpers ─────────────────────────────────────────────────────
    function addHeader() {
      // Yellow bar across top
      doc.setFillColor(YELLOW);
      doc.rect(0, 0, pageWidth, 5, 'F');

      // Company name
      doc.setTextColor(NAVY);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.text('C2C TECH SOLUTIONS', pageWidth / 2, 15, { align: 'center' });

      // Subtitle
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(14);
      doc.text('Course Curriculum', pageWidth / 2, 23, { align: 'center' });
    }

    function addFooter() {
      doc.setFontSize(8);
      doc.setTextColor('#666666');
      doc.setFont('helvetica', 'normal');
      doc.text(
        'C2C Tech Solutions | Vijayawada | www.c2ctechsolutions.com',
        pageWidth / 2,
        pageHeight - 8,
        { align: 'center' },
      );
      doc.text(`Page ${currentPage}`, pageWidth - marginRight, pageHeight - 8, {
        align: 'right',
      });
    }

    function addNewPage() {
      addFooter();
      doc.addPage();
      currentPage++;
      addHeader();
    }

    function checkPageBreak(y: number): number {
      if (y > 270) {
        addNewPage();
        return 35;
      }
      return y;
    }

    // ── Build first page ────────────────────────────────────────────
    addHeader();

    let y = 35;

    // Course title
    doc.setTextColor(NAVY);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    const titleLines = doc.splitTextToSize(curriculum.title, contentWidth);
    doc.text(titleLines, marginLeft, y);
    y += titleLines.length * 8 + 4;

    // Thin separator line
    doc.setDrawColor(YELLOW);
    doc.setLineWidth(0.5);
    doc.line(marginLeft, y, pageWidth - marginRight, y);
    y += 8;

    // ── Modules & topics ────────────────────────────────────────────
    for (const mod of curriculum.modules) {
      y = checkPageBreak(y);

      // Module title
      doc.setTextColor(NAVY);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      const modLines = doc.splitTextToSize(mod.title, contentWidth);
      doc.text(modLines, marginLeft, y);
      y += modLines.length * 6 + 2;

      // Topics
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor('#333333');

      for (const topic of mod.topics) {
        y = checkPageBreak(y);
        const bulletText = `•  ${topic.title}`;
        const topicLines = doc.splitTextToSize(bulletText, contentWidth - 5);
        doc.text(topicLines, marginLeft + 5, y);
        y += topicLines.length * 5;
      }

      y += 6; // spacing after module
    }

    // Final footer
    addFooter();

    // ── Save ────────────────────────────────────────────────────────
    const safeFilename =
      courseName
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .replace(/\s+/g, '_') + '_Curriculum.pdf';

    doc.save(safeFilename);
    return;
  }

  // ── 3. No curriculum data – placeholder PDF ───────────────────────
  const fallbackDoc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const fbPageWidth = fallbackDoc.internal.pageSize.getWidth();
  const fbPageHeight = fallbackDoc.internal.pageSize.getHeight();

  // Header
  fallbackDoc.setFillColor(YELLOW);
  fallbackDoc.rect(0, 0, fbPageWidth, 5, 'F');

  fallbackDoc.setTextColor(NAVY);
  fallbackDoc.setFont('helvetica', 'bold');
  fallbackDoc.setFontSize(20);
  fallbackDoc.text('C2C TECH SOLUTIONS', fbPageWidth / 2, 15, { align: 'center' });

  fallbackDoc.setFont('helvetica', 'normal');
  fallbackDoc.setFontSize(14);
  fallbackDoc.text('Course Curriculum', fbPageWidth / 2, 23, { align: 'center' });

  // Course name
  fallbackDoc.setFont('helvetica', 'bold');
  fallbackDoc.setFontSize(16);
  fallbackDoc.text(courseName, fbPageWidth / 2, 45, { align: 'center' });

  // Coming-soon message
  fallbackDoc.setFont('helvetica', 'normal');
  fallbackDoc.setFontSize(12);
  fallbackDoc.setTextColor('#333333');
  fallbackDoc.text(
    'Detailed curriculum coming soon.',
    fbPageWidth / 2,
    65,
    { align: 'center' },
  );
  fallbackDoc.text(
    'Contact us at info@c2ctechsolutions.com',
    fbPageWidth / 2,
    73,
    { align: 'center' },
  );

  // Footer
  fallbackDoc.setFontSize(8);
  fallbackDoc.setTextColor('#666666');
  fallbackDoc.text(
    'C2C Tech Solutions | Vijayawada | www.c2ctechsolutions.com',
    fbPageWidth / 2,
    fbPageHeight - 8,
    { align: 'center' },
  );
  fallbackDoc.text('Page 1', fbPageWidth - 15, fbPageHeight - 8, { align: 'right' });

  const safeFallbackFilename =
    courseName
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .replace(/\s+/g, '_') + '_Curriculum.pdf';

  fallbackDoc.save(safeFallbackFilename);
}
