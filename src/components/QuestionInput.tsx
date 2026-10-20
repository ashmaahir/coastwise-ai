
import React from 'react';
import type { TopicType } from '../types.ts';
import { QUICK_PROMPTS } from '../data/coastalData.ts';
import { Send, Sparkles, RotateCcw } from 'lucide-react';

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
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <label
          htmlFor="farmer-question"
          className="text-sm font-semibold text-slate-700"
        >
          {language === 'bn'
            ? 'কৃষকের প্রশ্ন বা সমস্যা বর্ণনা করুন'
            : 'Farmer Question or Crop Concern'}
        </label>

        <span className="text-xs text-slate-500">
          {question.length}/500 {language === 'bn' ? 'অক্ষর' : 'chars'}
        </span>
      </div>

      <div className="relative">
        <textarea
          id="farmer-question"
          rows={4}
          maxLength={500}
          value={question}
          onChange={(e) => onChangeQuestion(e.target.value)}
          placeholder={
            language === 'bn'
              ? 'যেমন: অমাবস্যার জোয়ারের পর খালের নোনা পানিতে বীজতলার চারা হলুদ হয়ে যাচ্ছে, এখন সেচ দেওয়া কি ঠিক হবে?'
              : 'e.g. Canal water feels brackish after a tidal surge; Aman nursery seedlings are yellowing. Should the farmer continue pumping or stop?'
          }
          className="w-full resize-none rounded-xl border border-slate-300 bg-white p-3 text-sm text-slate-800 shadow-sm transition-all placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
        />
      </div>

      {promptList.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>
              {language === 'bn' ? 'নমুনা প্রশ্ন' : 'Quick Prompts'}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {promptList.map((prompt, index) => (
              <button
                key={`${index}-${prompt}`}
                type="button"
                onClick={() => onChangeQuestion(prompt)}
                disabled={isLoading}
                className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-left text-xs text-emerald-800 transition-colors hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-end gap-2">
        <button
          type="button"
          onClick={onReset}
          disabled={isLoading}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <RotateCcw className="h-4 w-4" />
          {language === 'bn' ? 'রিসেট' : 'Reset'}
        </button>

        <button
          type="button"
          onClick={onSubmit}
          disabled={isLoading || !question.trim()}
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? (
            <span>
              {language === 'bn' ? 'বিশ্লেষণ হচ্ছে...' : 'Analyzing...'}
            </span>
          ) : (
            <>
              <Send className="h-4 w-4" />
              {language === 'bn' ? 'বিশ্লেষণ করুন' : 'Analyze Question'}
            </>
          )}
        </button>
      </div>
    </section>
  );
};
