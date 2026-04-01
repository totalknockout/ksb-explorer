import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { KSBList } from './KSBList';
import { KSBDetailPanel } from './KSBDetailPanel';
import { ksbItems, ksbDetails } from '../data/dataAnalystStandard';
import { apprenticeshipPathways } from '../data/pathways';
import { BookOpen, ArrowLeft } from 'lucide-react';
import compassLogo from '../../assets/compass.png';

export function PathwayExplorer() {
  const { pathwayId } = useParams<{ pathwayId: string }>();
  const navigate = useNavigate();
  const [selectedKSBId, setSelectedKSBId] = useState<string | null>(null);

  const pathway = apprenticeshipPathways.find((p) => p.id === pathwayId);

  // For now, we only have data for data-analyst
  // In the future, you'd load the appropriate KSB data based on pathwayId
  const isDataAvailable = pathwayId === 'data-analyst';

  if (!pathway) {
    return (
      <div className="size-full flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Pathway Not Found</h2>
          <p className="text-gray-600 mb-4">The requested pathway doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (!isDataAvailable) {
    return (
      <div className="size-full flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-md px-6">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon</h2>
          <p className="text-gray-600 mb-6">
            KSB data for <strong>{pathway.title}</strong> is currently being prepared. Check back soon!
          </p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Pathways
          </button>
        </div>
      </div>
    );
  }

  const selectedKSB = selectedKSBId ? ksbItems.find((item) => item.id === selectedKSBId) : null;
  const selectedDetail = selectedKSBId ? ksbDetails[selectedKSBId] : null;

  return (
    <div className="size-full flex flex-col bg-gray-50">
      {/* Header */}
      <header className="flex-shrink-0 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 mb-3 sm:mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all pathways
          </button>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1.5 sm:p-2">
              <img src={compassLogo} alt="Compass Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="text-xl sm:text-3xl font-bold text-gray-900">{pathway.title}</h1>
                <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded whitespace-nowrap">
                  Level {pathway.level}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Reference: {pathway.reference}</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                <span className="hidden sm:inline">Click on any Knowledge, Skill, or Behavior item to view tailored project ideas and evidence suggestions</span>
                <span className="sm:hidden">Tap any KSB item to view details</span>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full max-w-7xl mx-auto flex gap-6 p-4 sm:p-6">
          {/* KSB List - Left Panel (hidden on mobile when detail is shown) */}
          <div className={`flex-1 overflow-y-auto ${selectedKSB ? 'hidden lg:block' : ''}`}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Knowledge, Skills & Behaviors
                </h2>
              </div>
              <KSBList
                items={ksbItems}
                selectedId={selectedKSBId}
                onSelect={setSelectedKSBId}
              />
            </div>
          </div>

          {/* Detail Panel - Right Side (full screen on mobile when shown) */}
          {selectedKSB && selectedDetail && (
            <div className="fixed inset-0 lg:relative lg:inset-auto lg:w-[500px] flex-shrink-0 overflow-hidden z-50 lg:z-auto">
              <div className="h-full bg-white lg:rounded-lg lg:shadow-lg lg:border border-gray-200 overflow-hidden">
                <KSBDetailPanel
                  ksbCode={selectedKSB.code}
                  ksbTitle={selectedKSB.title}
                  detail={selectedDetail}
                  onClose={() => setSelectedKSBId(null)}
                />
              </div>
            </div>
          )}

          {/* Empty State (hidden on mobile, shown on desktop when no selection) */}
          {!selectedKSB && (
            <div className="hidden lg:flex lg:w-[500px] flex-shrink-0 items-center justify-center">
              <div className="text-center px-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a KSB Item</h3>
                <p className="text-sm text-gray-600">
                  Click on any Knowledge, Skill, or Behavior item on the left to view project ideas
                  and evidence suggestions
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}