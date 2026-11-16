import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export function TrainingFAQ() {
  const faqs = [
    {
      question: 'Who can join these courses?',
      answer: 'Our courses are designed for students, recent graduates, and working professionals who want to upskill or switch careers. We have beginner-friendly courses as well as advanced modules.'
    },
    {
      question: 'Are practical projects included?',
      answer: 'Absolutely! Project-based learning is the core of our training. You will work on real-world projects that simulate industry requirements and build a strong portfolio.'
    },
    {
      question: 'Will I receive a certificate?',
      answer: 'Yes, upon successful completion of the training program and project submissions, you will receive an industry-recognized certification.'
    },
    {
      question: 'Do you provide internship opportunities?',
      answer: 'Yes, top-performing students are often considered for internal internships or referred to our partner network for placement opportunities.'
    },
    {
      question: 'Are customized corporate training programs available?',
      answer: 'Yes, we provide tailored corporate training programs. Please contact our support team with your specific requirements and team size.'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
            Got questions? We've got answers. If you need more information, feel free to contact us.
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item 
              key={index} 
              value={`item-${index}`}
              className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex items-center justify-between w-full p-6 text-left hover:bg-gray-100 transition-colors group">
                  <span className="font-semibold text-[var(--navy)] text-lg" style={{ fontFamily: 'var(--font-body)' }}>
                    {faq.question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-400 group-data-[state=open]:rotate-180 transition-transform duration-300" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="p-6 pt-0 text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
