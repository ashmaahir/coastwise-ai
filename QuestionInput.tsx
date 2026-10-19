import React from 'react';
import { TopicType } from '../types.ts';
import { QUICK_PROMPTS } from '../data/coastalData.ts';
import { HelpCircle, Send, Sparkles, RotateCcw } from 'lucide-react';

interface QuestionInputProps {
  topic: TopicType;
  question: string;
  onChangeQuestion: (q: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  onReset: () => void;
  language: 'en' | 'bn';
}

export const QuestionInput: React.FC<QuestionInputProps> = ({
  topic,
  question,
  onChangeQuestion,
  onSubmit,
  isLoading,
  onReset,
  language,
}) => {
  const promptList = QUICK_PROMPTS[topic] || [];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">
            3
          </span>
          <span>
            {language === 'bn'
              ? 'কৃষকের প্রশ্ন বা সমস্যা বর্ণনা করুন'
              : 'Farmer Question or Crop Concern'}
          </span>
        </label>
        <span className="text-[11px] text-slate-700">
          {question.length}/500 {language === 'bn' ? 'অক্ষর' : 'chars'}
        </span>
      </div>

      <div className="relative">
        <textarea
          rows={3}
          maxLength={500}
          value={question}
          onChange={(e) => onChangeQuestion(e.target.value)}
          placeholder={
            language === 'bn'
              ? 'যেমন: অমাবস্যার জোয়ারের পর খালের নোনা পানিতে বীজতলার চারা হলুদ হয়ে যাচ্ছে, এখন সেচ দেওয়া কি ঠিক হবে?'
              : 'e.g. Canal water feels brackish after tidal surge; Aman nursery seedlings are yellowing. Should farmer continue pumping or stop?'
          }
          className="w-full p-3 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all text-slate-800 placeholder:text-slate-400 resize-none shadow-xs"
        />
      </div>

      {/* Quick Prompt Chips */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
          <Sparkles className="w-3 h-3 text-amber-500" />
          <span>
            {language === 'bn'
              ? 'মাঠের সাধারণ কিছু প্রশ্ন (ক্লিক করে যুক্ত করুন):'
              : 'Common Field Scenarios (Tap to fill):'}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {promptList.map((p, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => onChangeQuestion(language === 'bn' ? p.bn : p.en)}
              className="text-xs text-left px-2.5 py-1.5 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-900 hover:border-emerald-300 border border-slate-200 text-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              {language === 'bn' ? p.bn : p.en}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex items-center justify-between gap-3">
        {question && (
          <button
            type="button"
            onClick={onReset}
            disabled={isLoading}
            className="flex items-center gap-1 px-3 py-2 text-xs font-semibold text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'মুছে ফেলুন' : 'Clear'}</span>
          </button>
        )}

        <button
          type="button"
          onClick={onSubmit}
          disabled={isLoading}
          className={`ml-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer ${
            isLoading
              ? 'bg-emerald-400 text-white cursor-not-allowed opacity-80'
              : 'bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white shadow-emerald-700/20'
          }`}
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>
                {language === 'bn' ? 'প্রমাণ বিশ্লেষণ হচ্ছে...' : 'Analyzing Evidence...'}
              </span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>
                {language === 'bn' ? 'প্রমাণ ভিত্তিক তথ্য দেখুন' : 'Generate Evidence Advice'}
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
