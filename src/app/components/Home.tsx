import { useNavigate } from 'react-router';
import { apprenticeshipPathways } from '../data/pathways';
import { ArrowRight, Clock, BookOpen, Briefcase } from 'lucide-react';
import compassLogo from '../../assets/compass.png';

export function Home() {
  const navigate = useNavigate();

  const handleSelectPathway = (pathwayId: string) => {
    navigate(`/pathway/${pathwayId}`);
  };

  // Group by sector
  const pathwaysBySector = apprenticeshipPathways.reduce((acc, pathway) => {
    if (!acc[pathway.sector]) {
      acc[pathway.sector] = [];
    }
    acc[pathway.sector].push(pathway);
    return acc;
  }, {} as Record<string, typeof apprenticeshipPathways>);

  const levelColors: Record<number, string> = {
    3: 'bg-green-100 text-green-800 border-green-300',
    4: 'bg-blue-100 text-blue-800 border-blue-300',
    6: 'bg-purple-100 text-purple-800 border-purple-300',
  };

  return (
    <div className="min-h-full bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 p-2 sm:p-3">
              <img src={compassLogo} alt="Compass Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
                KSB Explorer
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                by Compass
              </p>
            </div>
          </div>
          <p className="text-base sm:text-lg text-gray-700 mt-4 max-w-3xl">
            Select your apprenticeship pathway to explore tailored project ideas and evidence
            suggestions for each Knowledge, Skill, and Behavior requirement.
          </p>
        </div>
      </div>

      {/* Pathways Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {Object.entries(pathwaysBySector).map(([sector, pathways]) => (
          <div key={sector} className="mb-8 sm:mb-12">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{sector}</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {pathways.map((pathway) => (
                <button
                  key={pathway.id}
                  onClick={() => handleSelectPathway(pathway.id)}
                  className="text-left bg-white rounded-xl p-4 sm:p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all group"
                >
                  <div className="flex items-start justify-between mb-2 sm:mb-3 gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                        {pathway.title}
                      </h3>
                      <p className="text-xs text-gray-500">Ref: {pathway.reference}</p>
                    </div>
                    <span
                      className={`text-xs font-semibold px-2 sm:px-2.5 py-1 rounded-full border flex-shrink-0 whitespace-nowrap ${
                        levelColors[pathway.level]
                      }`}
                    >
                      Level {pathway.level}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4">
                    {pathway.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{pathway.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-blue-600 group-hover:gap-2.5 transition-all">
                      <span>Explore KSBs</span>
                      <ArrowRight className="w-4 h-4 flex-shrink-0" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What are KSBs?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                <strong>Knowledge, Skills, and Behaviors (KSBs)</strong> are the core competencies you need to demonstrate
                throughout your apprenticeship. Each pathway has specific KSBs that you'll need to evidence.
                This tool helps you understand each requirement and provides practical project ideas and evidence
                suggestions to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}