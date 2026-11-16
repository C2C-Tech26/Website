import { useParams, useNavigate } from 'react-router';
import { getCurriculumById } from '../data/curriculumData';
import { ArrowLeft, BookOpen, CheckCircle2 } from 'lucide-react';

export function CurriculumPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  // Decoding URL param since it might have spaces
  const decodedId = decodeURIComponent(courseId || '');
  const curriculum = getCurriculumById(decodedId);

  if (!curriculum) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-[var(--navy)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Curriculum Not Found
        </h1>
        <p className="text-gray-600 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
          We couldn't find the curriculum details for this course. It might be in development.
        </p>
        <button
          onClick={() => navigate('/explore-courses')}
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--yellow)] px-6 py-3 font-medium text-[var(--navy)] transition-colors hover:bg-[#E0B015]"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="bg-[var(--navy)] py-16 px-6 md:px-8 text-center text-white">
        <div className="max-w-[1000px] mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            {curriculum.title}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Explore the comprehensive syllabus designed to take you from fundamentals to advanced concepts, preparing you for real-world challenges.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
             <button
                onClick={() => navigate(`/explore-courses?course=${encodeURIComponent(decodedId)}`)}
                className="rounded-lg bg-[var(--yellow)] px-8 py-3.5 font-medium text-[var(--navy)] transition-colors hover:bg-[#E0B015]"
                style={{ fontFamily: 'var(--font-body)' }}
             >
                Apply for this Course
             </button>
             <button
                onClick={() => navigate('/explore-courses')}
                className="rounded-lg border border-white/20 bg-transparent px-8 py-3.5 font-medium text-white transition-colors hover:bg-white/10"
                style={{ fontFamily: 'var(--font-body)' }}
             >
                Browse Other Courses
             </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto py-12 px-6 md:px-8">
        <div className="space-y-6">
          {curriculum.modules.map((module, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-[var(--navy)]" />
                <h3 className="text-xl font-semibold text-[var(--navy)]" style={{ fontFamily: 'var(--font-heading)' }}>
                  {module.title}
                </h3>
              </div>
              <div className="px-6 py-4">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {module.topics.map((topic, tIndex) => (
                    <li key={tIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700" style={{ fontFamily: 'var(--font-body)' }}>
                        {topic.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
