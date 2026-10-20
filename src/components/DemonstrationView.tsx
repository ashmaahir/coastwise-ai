import React from 'react';
import { DEMO_SCENARIOS } from '../data/mockScenarios.ts';
import { DemoScenario } from '../types.ts';
import {
  AlertTriangle,
  ArrowRight,
  MapPin,
  UserCheck,
  Droplets,
  Waves,
  CloudRain,
  ShieldAlert,
  FileQuestion,
  Ban
} from 'lucide-react';

interface DemonstrationViewProps {
  language: 'en' | 'bn';
  onSelectScenario: (scenario: DemoScenario) => void;
}

export const DemonstrationView: React.FC<DemonstrationViewProps> = ({
  language,
  onSelectScenario,
}) => {
  const isBn = language === 'bn';

  const getTopicIcon = (topic: string) => {
    switch (topic) {
      case 'salinity':
        return <Droplets className="w-4 h-4 text-amber-500" />;
      case 'flooding':
        return <Waves className="w-4 h-4 text-blue-400" />;
      default:
        return <CloudRain className="w-4 h-4 text-teal-400" />;
    }
  };

  return (
    <div className="space-y-5">
      {/* Overview Banner */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-300 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-amber-950 flex items-center justify-center shrink-0 font-black text-lg">
            ⚠️
          </div>
          <div>
            <h2 className="text-sm font-black uppercase tracking-wide text-amber-950">
              {isBn
                ? 'নমুনা পরিস্থিতি — পরিমাপকৃত স্থানীয় তথ্য নয় (৫টি পরিস্থিতি)'
                : 'Illustrative Field Scenarios — Not Measured Local Data (5 Scenarios)'}
            </h2>
            <p className="text-xs text-amber-900 mt-0.5 leading-relaxed">
              {isBn
                ? 'মাঠ পর্যায়ের বাস্তবসম্মত প্রশিক্ষণ ও কার্যপদ্ধতি বোঝার সুবিধার্থে নিচের ৫টি পরিস্থিতি তৈরি করা হয়েছে। এর মধ্যে তথ্যের ঘাটতি (Missing Data) এবং লাভজনকতার নিশ্চয়তা দাবির অস্বীকৃতি (Profit Guarantee Refusal) অন্তর্ভুক্ত রয়েছে।'
                : 'Realistic test cases demonstrating grounded evidence handling, including handling missing local field data and strictly refusing algorithmic profit guarantees.'}
            </p>
          </div>
        </div>
      </div>

      {/* Scenarios Grid (5 scenarios) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {DEMO_SCENARIOS.map((sc) => (
          <div
            key={sc.id}
            className={`bg-white rounded-2xl border transition-all overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md ${
              sc.mockResult.hasMissingDataScenario
                ? 'border-blue-300 hover:border-blue-500 ring-1 ring-blue-200/50'
                : sc.mockResult.hasProfitGuardrail
                ? 'border-amber-400 hover:border-amber-600 ring-1 ring-amber-300/50'
                : 'border-slate-200/90 hover:border-emerald-300'
            }`}
          >
            <div>
              {/* Header Badge */}
              <div className="bg-slate-900 text-white p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold">
                  {getTopicIcon(sc.topic)}
                  <span className="capitalize text-slate-200">
                    {isBn
                      ? sc.topic === 'salinity'
                        ? 'লবণাক্ততা (Salinity)'
                        : sc.topic === 'flooding'
                        ? 'বন্যা ও জলাবদ্ধতা (Flooding)'
                        : 'বৃষ্টিপাতের অনিয়ম (Changing Rainfall)'
                      : sc.topic.replace('_', ' ')}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                  <MapPin className="w-3 h-3" />
                  <span>
                    {isBn
                      ? sc.studyArea === 'Satkhira'
                        ? 'সাতক্ষীরা'
                        : sc.studyArea === 'Khulna'
                        ? 'খুলনা'
                        : sc.studyArea === 'Patuakhali'
                        ? 'পটুয়াখালী'
                        : sc.studyArea === 'Barguna'
                        ? 'বরগুনা'
                        : sc.studyArea === "Cox's Bazar"
                        ? 'কক্সবাজার'
                        : sc.studyArea
                      : sc.studyArea}
                  </span>
                </div>
              </div>

              {/* Special Tag for Test Cases */}
              {sc.mockResult.hasMissingDataScenario && (
                <div className="bg-blue-50 border-b border-blue-200 px-3 py-1.5 text-[11px] font-bold text-blue-900 flex items-center gap-1.5">
                  <FileQuestion className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                  <span>{isBn ? 'টেস্ট কেস: মাঠের তথ্যের অনুপস্থিতি (Missing Data)' : 'Benchmark: Missing Local Data Test Case'}</span>
                </div>
              )}

              {sc.mockResult.hasProfitGuardrail && (
                <div className="bg-amber-50 border-b border-amber-200 px-3 py-1.5 text-[11px] font-bold text-amber-950 flex items-center gap-1.5">
                  <Ban className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>{isBn ? 'সুরক্ষা টেস্ট: নিশ্চিত মুনাফা প্রতিরোধ' : 'Guardrail: Profit Guarantee Refusal'}</span>
                </div>
              )}

              {/* Body */}
              <div className="p-4 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {isBn ? sc.titleBn : sc.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="text-[11px] leading-tight">
                    {isBn ? sc.farmerProfileBn : sc.farmerProfile}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {isBn ? sc.narrativeBn : sc.narrativeEn}
                </p>

                {/* Farmer Question */}
                <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-950 font-medium">
                  <span className="text-[10px] uppercase font-bold text-emerald-800 block mb-0.5">
                    {isBn ? 'কৃষকের প্রশ্ন / দাবি:' : 'Field Concern:'}
                  </span>
                  "{isBn && sc.questionPromptBn ? sc.questionPromptBn : sc.questionPrompt}"
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="p-3 bg-slate-50 border-t border-slate-100">
              <button
                type="button"
                onClick={() => onSelectScenario(sc)}
                className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <span>
                  {isBn
                    ? 'নমুনা বিশ্লেষণ লোড করুন'
                    : 'Load Demonstration Analysis'}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
