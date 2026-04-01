import { KSBDetail } from '../types';
import { Lightbulb, FileCheck, Clock, TrendingUp, X } from 'lucide-react';

interface KSBDetailPanelProps {
  ksbCode: string;
  ksbTitle: string;
  detail: KSBDetail;
  onClose: () => void;
}

export function KSBDetailPanel({ ksbCode, ksbTitle, detail, onClose }: KSBDetailPanelProps) {
  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800 border-green-300',
    Intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    Advanced: 'bg-red-100 text-red-800 border-red-300',
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="flex-shrink-0 border-b border-gray-200 p-4 sm:p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="font-mono text-xs sm:text-sm font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded">
                {ksbCode}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{ksbTitle}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
        {/* Project Ideas */}
        <section>
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Project Ideas</h3>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {detail.projectIdeas.map((project) => (
              <div
                key={project.id}
                className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-2 sm:gap-4 mb-2">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 flex-1">{project.title}</h4>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded border flex-shrink-0 whitespace-nowrap ${
                      difficultyColors[project.difficulty]
                    }`}
                  >
                    {project.difficulty}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{project.timeEstimate}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Evidence Suggestions */}
        <section>
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <FileCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Evidence Suggestions</h3>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {detail.evidenceSuggestions.map((evidence) => (
              <div
                key={evidence.id}
                className="border border-gray-200 rounded-lg p-3 sm:p-4 bg-gray-50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900">{evidence.type}</h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">{evidence.description}</p>
                <div className="space-y-1.5">
                  {evidence.examples.map((example, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span className="text-gray-700">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}