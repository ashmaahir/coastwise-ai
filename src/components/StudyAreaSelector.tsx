import React from 'react';
import { STUDY_AREAS } from '../data/coastalData.ts';
import { MapPin, Info } from 'lucide-react';

interface StudyAreaSelectorProps {
  selectedArea: string;
  onSelectArea: (area: string) => void;
  language: 'en' | 'bn';
}

export const StudyAreaSelector: React.FC<StudyAreaSelectorProps> = ({
  selectedArea,
  onSelectArea,
  language,
}) => {
  const currentAreaObj =
    STUDY_AREAS.find((a) => a.id === selectedArea) || STUDY_AREAS[0];

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">
            2
          </span>
          <span>
            {language === 'bn' ? 'উপকূলীয় এলাকা নির্বাচন' : 'Coastal Study Area'}
          </span>
        </label>
        <span className="text-[11px] text-slate-700">
          {language === 'bn'
            ? 'নির্দিষ্ট এলাকা না থাকলে "স্থান নির্দিষ্ট নয়" রাখুন'
            : 'Defaults to general coastal zone'}
        </span>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-emerald-700">
          <MapPin className="w-4 h-4" />
        </div>
        <select
          value={selectedArea}
          onChange={(e) => onSelectArea(e.target.value)}
          className="w-full pl-9 pr-8 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all cursor-pointer shadow-xs"
        >
          {STUDY_AREAS.map((area) => (
            <option key={area.id} value={area.id}>
              {language === 'bn' ? area.nameBn : area.nameEn}
            </option>
          ))}
        </select>
      </div>

      {/* Area Context Hint */}
      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
        <Info className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
        <div>
          <span className="font-semibold text-slate-700">
            {language === 'bn' ? 'এলাকার প্রেক্ষাপট: ' : 'Local Context: '}
          </span>
          <span>
            {language === 'bn' ? currentAreaObj.contextBn : currentAreaObj.contextEn}
          </span>
        </div>
      </div>
    </div>
  );
};
