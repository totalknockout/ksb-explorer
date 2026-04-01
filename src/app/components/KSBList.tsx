import { KSBItem, KSBType } from '../types';
import { ChevronRight } from 'lucide-react';

interface KSBListProps {
  items: KSBItem[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function KSBList({ items, selectedId, onSelect }: KSBListProps) {
  const typeLabels: Record<KSBType, string> = {
    knowledge: 'Knowledge',
    skill: 'Skills',
    behavior: 'Behaviors',
  };

  const typeColors: Record<KSBType, string> = {
    knowledge: 'border-blue-500 bg-blue-50',
    skill: 'border-green-500 bg-green-50',
    behavior: 'border-purple-500 bg-purple-50',
  };

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {} as Record<KSBType, KSBItem[]>);

  return (
    <div className="space-y-4 sm:space-y-6">
      {(Object.entries(groupedItems) as [KSBType, KSBItem[]][]).map(([type, typeItems]) => (
        <div key={type} className="space-y-2">
          <h3 className="font-semibold text-gray-700 uppercase text-xs sm:text-sm tracking-wide">
            {typeLabels[type]}
          </h3>
          <div className="space-y-2">
            {typeItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={`w-full text-left p-3 sm:p-4 border-l-4 rounded-r transition-all hover:shadow-md ${
                  typeColors[item.type]
                } ${
                  selectedId === item.id
                    ? 'shadow-lg ring-2 ring-offset-2 ring-blue-400'
                    : 'hover:translate-x-1'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-mono text-xs font-semibold text-gray-600 bg-white px-2 py-0.5 rounded">
                        {item.code}
                      </span>
                      <h4 className="font-semibold text-sm sm:text-base text-gray-900">{item.title}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0 mt-1" />
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}