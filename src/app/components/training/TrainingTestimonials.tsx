import { Quote } from 'lucide-react';

export function TrainingTestimonials() {
  const testimonials = [
    {
      name: 'Rahul S.',
      course: 'Full Stack Web Development',
      feedback: 'The practical approach of this training completely changed how I write code. The mentors were incredibly supportive, and the real-world projects helped me crack my first tech interview.',
      initials: 'RS',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      name: 'Priya M.',
      course: 'Data Science & Machine Learning',
      feedback: 'I transitioned from a non-IT background to a Data Analyst role within 4 months. The curriculum is perfectly structured from basics to advanced, making complex topics easy to grasp.',
      initials: 'PM',
      color: 'bg-purple-100 text-purple-700'
    },
    {
      name: 'Karthik V.',
      course: 'Python Programming (Advanced)',
      feedback: 'The doubt-clearing sessions and hands-on coding assignments were the best part. I feel much more confident in my logical thinking and problem-solving skills now.',
      initials: 'KV',
      color: 'bg-orange-100 text-orange-700'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Student Success Stories
          </h2>
          <p className="text-gray-600 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
            Don't just take our word for it. Hear from our students who have transformed their careers through our training programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <Quote className="absolute top-6 right-8 w-10 h-10 text-gray-100 rotate-180" />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${testimonial.color}`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-[var(--navy)]" style={{ fontFamily: 'var(--font-heading)' }}>{testimonial.name}</h4>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'var(--font-body)' }}>{testimonial.course}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic relative z-10" style={{ fontFamily: 'var(--font-body)' }}>
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
