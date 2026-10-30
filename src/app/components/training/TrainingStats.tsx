export function TrainingStats() {
  const stats = [
    { number: '500+', label: 'Students Trained' },
    { number: '50+', label: 'Industry Projects' },
    { number: '20+', label: 'Training Programs' },
    { number: '10+', label: 'Technology Domains' },
  ];

  return (
    <section className="py-10 bg-white border-b border-gray-100 relative z-10 -mt-8 mx-6 md:mx-8 max-w-[1200px] xl:mx-auto rounded-2xl shadow-xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              {stat.number}
            </div>
            <div className="text-sm md:text-base text-gray-600 font-medium" style={{ fontFamily: 'var(--font-body)' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
