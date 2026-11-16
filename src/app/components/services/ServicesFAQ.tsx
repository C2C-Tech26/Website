import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { forwardRef } from 'react';

const FAQS = [
  {
    value: 'item-1',
    question: 'What types of software solutions do you build?',
    answer: 'We build a wide range of custom software, including enterprise web applications, mobile apps (iOS & Android), internal business tools, APIs, and scalable backend systems tailored to your specific industry needs.'
  },
  {
    value: 'item-2',
    question: 'Do you provide IT staffing for long-term projects?',
    answer: 'Yes. Our "Candidate to Career" initiative provides both IT and Non-IT staffing solutions. We can help you find full-time employees, contract workers, or dedicated offshore teams to scale your operations.'
  },
  {
    value: 'item-3',
    question: 'Can you integrate modern AI into our existing applications?',
    answer: 'Absolutely. We specialize in modernizing legacy applications and can integrate AI-driven features like automated document processing, predictive analytics, and natural language processing into your existing workflows.'
  },
  {
    value: 'item-4',
    question: 'Do you provide corporate training for our employees?',
    answer: 'Yes, corporate training is a core part of our services. We offer customized upskilling programs in modern technologies (React, Node.js, Python, Cloud, AI) designed specifically for corporate teams.'
  },
  {
    value: 'item-5',
    question: 'What is your typical project development timeline?',
    answer: 'Timelines vary depending on project complexity. A basic web application might take 4-6 weeks, while a complex enterprise system could take 3-6 months. We provide a detailed timeline during the Discovery phase.'
  },
  {
    value: 'item-6',
    question: 'Do you offer maintenance after the project is launched?',
    answer: 'Yes. We offer ongoing maintenance and support contracts to ensure your software remains secure, up-to-date, and optimized for performance long after the initial deployment.'
  }
];

export function ServicesFAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
            Have a question about our services? Here are some of the most common inquiries we receive.
          </p>
        </div>

        <Accordion.Root type="single" defaultValue="item-1" collapsible className="w-full space-y-4">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.value} value={faq.value}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

// Styled Accordion Components using Tailwind
const AccordionItem = forwardRef<HTMLDivElement, React.ComponentProps<typeof Accordion.Item>>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={`border border-gray-200 rounded-xl overflow-hidden data-[state=open]:border-[var(--navy)] data-[state=open]:shadow-md transition-all duration-300 ${className}`}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = forwardRef<HTMLButtonElement, React.ComponentProps<typeof Accordion.Trigger>>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={`group flex h-auto flex-1 items-center justify-between bg-white px-6 py-5 text-left font-bold text-[var(--navy)] outline-none hover:bg-gray-50 transition-colors ${className}`}
        style={{ fontFamily: 'var(--font-heading)' }}
        {...props}
        ref={forwardedRef}
      >
        <span className="text-lg pr-4">{children}</span>
        <ChevronDown
          className="h-5 w-5 text-gray-400 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-[var(--navy)] shrink-0"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = forwardRef<HTMLDivElement, React.ComponentProps<typeof Accordion.Content>>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={`data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-gray-600 bg-gray-50/50 ${className}`}
      style={{ fontFamily: 'var(--font-body)' }}
      {...props}
      ref={forwardedRef}
    >
      <div className="px-6 py-5 leading-relaxed">{children}</div>
    </Accordion.Content>
  )
);
AccordionContent.displayName = 'AccordionContent';
