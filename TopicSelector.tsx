import React from 'react';
import { TopicType } from '../types.ts';
import { Droplets, Waves, CloudRain } from 'lucide-react';

interface TopicSelectorProps {
  selectedTopic: TopicType;
  onSelectTopic: (topic: TopicType) => void;
  language: 'en' | 'bn';
}

export const TopicSelector: React.FC<TopicSelectorProps> = ({
  selectedTopic,
  onSelectTopic,
  language,
}) => {
  const topics: {
    id: TopicType;
    labelEn: string;
    labelBn: string;
    subEn: string;
    subBn: string;
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
  }[] = [
    {
      id: 'salinity',
      labelEn: 'Salinity',
      labelBn: 'মাটি ও পানির লবণাক্ততা (Salinity)',
      subEn: 'Dry-season crusting, canal brackishness & root damage',
      subBn: 'শুষ্ক মৌসুমে লবণের আস্তরণ, খালের নোনা পানি ও চারার ক্ষতি',
      icon: Droplets,
      accentColor: 'border-amber-400 text-amber-700 bg-amber-50',
    },
    {
      id: 'flooding',
      labelEn: 'Flooding & Stagnation',
      labelBn: 'বন্যা ও জলাবদ্ধতা (Flooding)',
      subEn: 'Tidal surges, sluice siltation & waterlogging',
      subBn: 'জোয়ারের জলোচ্ছ্বাস, স্লুইস গেটে পলি জমা ও দীর্ঘস্থায়ী পানি',
      icon: Waves,
      accentColor: 'border-blue-400 text-blue-700 bg-blue-50',
    },
    {
      id: 'changing_rainfall',
      labelEn: 'Changing Rainfall',
      labelBn: 'বৃষ্টিপাতের অনিয়ম (Changing Rainfall)',
      subEn: 'Delayed monsoon, sudden downpours & dry spells',
      subBn: 'দেরিতে বৃষ্টি, হঠাৎ অতিবৃষ্টি ও রোপণ মৌসুমে অনাবৃষ্টি',
      icon: CloudRain,
      accentColor: 'border-teal-400 text-teal-700 bg-teal-50',
    },
  ];

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">
            1
          </span>
          <span>{language === 'bn' ? 'প্রধান বিষয় নির্বাচন করুন' : 'Select Coastal Topic'}</span>
        </label>
        <span className="text-[11px] text-slate-700">
          {language === 'bn' ? 'যেকোনো একটি নির্বাচন করুন' : 'Choose one challenge'}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {topics.map((t) => {
          const isSelected = selectedTopic === t.id;
          const Icon = t.icon;
          return (
            <button
              type="button"
              key={t.id}
              onClick={() => onSelectTopic(t.id)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'border-emerald-600 bg-emerald-50/90 shadow-sm ring-2 ring-emerald-500/20'
                  : 'border-slate-200 bg-white hover:border-emerald-300 hover:bg-slate-50/60'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                {isSelected && (
                  <span className="text-[10px] bg-emerald-600 text-white font-bold px-1.5 py-0.5 rounded-full">
                    {language === 'bn' ? 'বাছাইকৃত' : 'Selected'}
                  </span>
                )}
              </div>

              <div>
                <h3 className={`text-sm font-bold ${isSelected ? 'text-emerald-950' : 'text-slate-800'}`}>
                  {language === 'bn' ? t.labelBn : t.labelEn}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                  {language === 'bn' ? t.subBn : t.subEn}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
