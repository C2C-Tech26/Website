import { Bot, Database, Server } from 'lucide-react';

export function TrainingProjects() {
  const projects = [
    {
      title: 'AI Resume Analyzer',
      tech: 'Python • NLP • Machine Learning',
      description: 'Build an intelligent system that analyzes resumes against job descriptions using Natural Language Processing.',
      difficulty: 'Advanced',
      icon: Bot,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Student Management System',
      tech: 'Python • SQL • Flask',
      description: 'Develop a comprehensive CRUD application for managing student records, attendance, and grades.',
      difficulty: 'Intermediate',
      icon: Database,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'E-Commerce Platform',
      tech: 'React • Node.js • MongoDB',
      description: 'Create a full-stack shopping application with user authentication, product catalog, and payment integration.',
      difficulty: 'Advanced',
      icon: Server,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--yellow)]/10 text-[var(--navy)] font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--yellow)] animate-pulse"></span>
            Project-Based Learning
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Learn by Building Real Projects
          </h2>
          <p className="text-gray-600 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
            Put your skills to the test. Every course includes industry-grade projects that simulate real work environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-xl ${project.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${project.color}`} />
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full" style={{ fontFamily: 'var(--font-body)' }}>
                      {project.difficulty}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--navy)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    {project.title}
                  </h3>
                  <p className="text-[var(--yellow)] text-sm font-semibold mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                    {project.tech}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
