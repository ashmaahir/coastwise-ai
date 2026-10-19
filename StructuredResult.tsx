
import React, { useEffect, useState } from 'react';
import { AnalysisResult } from '../types.ts';
import {
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  FileSearch,
  ExternalLink,
  MessageSquare,
  Printer,
  BookmarkCheck,
  ShieldCheck,
  Building,
  Scale,
  FileQuestion,
  Ban,
} from 'lucide-react';

interface StructuredResultProps {
  result: AnalysisResult;
  language: 'en' | 'bn';
  onOpenFarmerSheet: () => void;
  onNavigateToCropCompare?: () => void;
}

export const StructuredResult: React.FC<StructuredResultProps> = ({
  result,
  language: initialLanguage,
  onOpenFarmerSheet,
  onNavigateToCropCompare,
}) => {
  const [viewLanguage, setViewLanguage] =
    useState<'en' | 'bn'>(initialLanguage);

  useEffect(() => {
    setViewLanguage(initialLanguage);
  }, [initialLanguage]);

  const isBn = viewLanguage === 'bn';

  const evidenceList = isBn
    ? result.evidenceSupportsBn?.length
      ? result.evidenceSupportsBn
      : result.evidenceSupports
    : result.evidenceSupports;

  const uncertaintiesList = isBn
    ? result.uncertaintiesBn?.length
      ? result.uncertaintiesBn
      : result.uncertainties
    : result.uncertainties;

  const infoNeededList = isBn
    ? result.additionalInfoNeededBn?.length
      ? result.additionalInfoNeededBn
      : result.additionalInfoNeeded
    : result.additionalInfoNeeded;

  const farmerPoints = isBn
    ? result.farmerSpeakingPointsBn?.length
      ? result.farmerSpeakingPointsBn
      : result.farmerSpeakingPoints
    : result.farmerSpeakingPoints;

  const sources = result.sources ?? [];
  const options = result.adaptationOptions ?? [];

  return (
    <div className="space-y-4 pt-2">
      <div
        className={`rounded-xl border p-4 text-xs leading-relaxed ${
          result.isDemonstration
            ? 'border-purple-300 bg-purple-50 text-purple-950'
            : result.isFallback
              ? 'border-amber-300 bg-amber-50 text-amber-950'
              : 'border-blue-200 bg-blue-50 text-blue-950'
        }`}
      >
        <strong className="mb-1 block">
          {result.isDemonstration
            ? isBn
              ? 'নমুনা পরিস্থিতি — বাস্তব মাঠের তথ্য নয়'
              : 'Demonstration scenario — not real field data'
            : result.isFallback
              ? isBn
                ? 'সীমিত মোড: Gemini AI উত্তর তৈরি করেনি'
                : 'Fallback mode: Gemini AI did not generate this answer'
              : isBn
                ? 'AI-তৈরি প্রাথমিক উত্তর'
                : 'AI-generated preliminary response'}
        </strong>

        <p>
          {result.disclaimer ||
            (isBn
              ? 'প্রাথমিক গবেষণা প্রোটোটাইপ। তথ্য মাঠপর্যায়ে যাচাই করা হয়নি।'
              : 'Early research prototype. Information has not been field-validated.')}
        </p>

        {result.modelUsed && (
          <p className="mt-1">
            {isBn ? 'ইঞ্জিন: ' : 'Engine: '}{result.modelUsed}
          </p>
        )}
      </div>

      {result.isDemonstration && (
        <div className="flex items-start gap-2 rounded-xl border-2 border-dashed border-amber-400 bg-amber-50 p-3 text-xs text-amber-950">
          <AlertTriangle className="h-5 w-5 shrink-0" />
          <div>
            <strong>{isBn ? 'শিক্ষামূলক উদাহরণ' : 'Illustrative example'}</strong>
            <p className="mt-1">
              {isBn
                ? 'এটি কোনো জমির সরাসরি পরিমাপ বা লাইভ সেন্সর ডেটা নয়।'
                : 'This does not represent measured field conditions or live sensor data.'}
            </p>
          </div>
        </div>
      )}

      {result.hasMissingDataScenario && (
        <div className="flex items-start gap-2 rounded-xl border border-blue-300 bg-blue-50 p-3 text-xs text-blue-950">
          <FileQuestion className="h-5 w-5 shrink-0" />
          <div>
            <strong>{isBn ? 'স্থানীয় তথ্য অনুপস্থিত' : 'Missing local field data'}</strong>
            <p className="mt-1">
              {isBn
                ? 'জমির নির্দিষ্ট পরিমাপ না থাকলে অ্যাপটি সেগুলো অনুমান করে পূরণ করতে পারে না। স্থানীয় কৃষি কর্মকর্তার সাহায্য নিন।'
                : 'The app cannot replace missing field measurements with guesses. Consult a local agricultural extension officer.'}
            </p>
          </div>
        </div>
      )}

      {result.hasProfitGuardrail && (
        <div className="flex items-start gap-2 rounded-xl border border-amber-300 bg-amber-50 p-3 text-xs text-amber-950">
          <Ban className="h-5 w-5 shrink-0" />
          <div>
            <strong>{isBn ? 'নিশ্চিত লাভের দাবি করা যাবে না' : 'No guaranteed-profit claims'}</strong>
            <p className="mt-1">
              {isBn
                ? 'ফসলের আয় নির্ভর করে প্রকৃত খরচ, ফলন, বাজারদর ও স্থানীয় পরিস্থিতির ওপর।'
                : 'Crop returns depend on actual costs, yield, market prices, and local conditions.'}
            </p>
          </div>
        </div>
      )}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 p-4 text-white">
          <div>
            <h2 className="text-base font-bold">
              {isBn ? 'প্রাথমিক তথ্য পর্যালোচনা' : 'Preliminary Evidence Review'}
            </h2>
            <p className="mt-1 text-xs text-slate-300">
              {result.studyArea && result.studyArea !== 'Area not specified'
                ? `${isBn ? 'এলাকা: ' : 'Area: '}${result.studyArea}`
                : isBn ? 'সাধারণ উপকূলীয় এলাকা' : 'General coastal area'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setViewLanguage('en')}
              className={`rounded-md px-3 py-1.5 text-xs ${
                !isBn ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'
              }`}
            >
              English
            </button>

            <button
              type="button"
              onClick={() => setViewLanguage('bn')}
              className={`rounded-md px-3 py-1.5 text-xs ${
                isBn ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'
              }`}
            >
              সহজ বাংলা
            </button>

            {onNavigateToCropCompare && (
              <button
                type="button"
                onClick={onNavigateToCropCompare}
                className="flex items-center gap-1 rounded-lg border border-slate-600 px-3 py-2 text-xs text-emerald-200"
              >
                <Scale className="h-4 w-4" />
                {isBn ? 'ফসল তুলনা' : 'Compare crops'}
              </button>
            )}

            <button
              type="button"
              onClick={onOpenFarmerSheet}
              className="flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-2 text-xs text-white"
            >
              <Printer className="h-4 w-4" />
              {isBn ? 'কৃষক পরামর্শ পত্র' : 'Farmer sheet'}
            </button>
          </div>
        </div>

        <section className="border-b border-emerald-100 bg-emerald-50/60 p-4">
          <h3 className="mb-2 text-sm font-bold text-emerald-950">
            {isBn ? 'সারসংক্ষেপ' : 'Summary'}
          </h3>
          <p className="text-sm leading-relaxed text-slate-800">
            {(isBn ? result.summaryBn : result.summary) || result.summary || 'No summary available.'}
          </p>
        </section>

        <div className="space-y-4 p-4">
          <section className="space-y-3 rounded-xl border border-emerald-200 bg-emerald-50/40 p-4">
            <h3 className="flex items-center gap-2 text-sm font-bold text-emerald-950">
              <CheckCircle2 className="h-4 w-4" />
              {isBn ? 'সাধারণ তথ্য যা সমর্থন করে' : 'What the available information supports'}
            </h3>
            <ul className="space-y-2">
              {(evidenceList ?? []).map((item, index) => (
                <li key={index} className="flex gap-2 text-xs leading-relaxed">
                  <span>•</span><span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3 rounded-xl border border-amber-200 bg-amber-50/50 p-4">
            <h3 className="flex items-center gap-2 text-sm font-bold text-amber-950">
              <AlertTriangle className="h-4 w-4" />
              {isBn ? 'অনিশ্চয়তা ও সীমাবদ্ধতা' : 'Uncertainties and limitations'}
            </h3>
            <ul className="space-y-2">
              {(uncertaintiesList ?? []).map((item, index) => (
                <li key={index} className="flex gap-2 text-xs leading-relaxed">
                  <span>•</span><span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3 rounded-xl border border-blue-200 bg-blue-50/40 p-4">
            <h3 className="flex items-center gap-2 text-sm font-bold text-blue-950">
              <Lightbulb className="h-4 w-4" />
              {isBn ? 'বিশেষজ্ঞের সঙ্গে আলোচনা করার বিকল্প' : 'Options to discuss with an expert'}
            </h3>
            <div className="grid gap-3 md:grid-cols-2">
              {options.map((option, index) => (
                <article key={index} className="space-y-2 rounded-xl border border-blue-100 bg-white p-3">
                  <h4 className="text-xs font-bold text-blue-950">
                    {isBn ? option.titleBn || option.title : option.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-700">
                    {isBn ? option.detailsBn || option.details : option.details}
                  </p>
                  <p className="border-t pt-2 text-[11px] text-slate-500">
                    {isBn ? 'পরামর্শক: ' : 'Consult: '}{option.targetExpert}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="flex items-center gap-2 text-sm font-bold">
              <FileSearch className="h-4 w-4" />
              {isBn ? 'আর যে তথ্য প্রয়োজন' : 'Additional information needed'}
            </h3>
            <ul className="space-y-2">
              {(infoNeededList ?? []).map((item, index) => (
                <li key={index} className="rounded-lg border bg-white p-3 text-xs leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3 rounded-xl border border-teal-200 bg-teal-50/40 p-4">
            <h3 className="flex items-center gap-2 text-sm font-bold text-teal-950">
              <MessageSquare className="h-4 w-4" />
              {isBn ? 'কৃষককে সহজভাবে বোঝানোর কথা' : 'Simple points to explain to farmers'}
            </h3>
            {(farmerPoints ?? []).map((point, index) => (
              <div key={index} className="flex gap-3 rounded-lg border border-teal-100 bg-white p-3 text-xs leading-relaxed">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-900">
                  {index + 1}
                </span>
                <p>{point}</p>
              </div>
            ))}
          </section>

          <section className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <BookmarkCheck className="h-4 w-4 text-emerald-700" />
              {isBn
                ? `তথ্যসূত্র ও বাহ্যিক রেফারেন্স (${sources.length}টি)`
                : `Sources and external references (${sources.length})`}
            </h3>

            <p className="text-xs leading-relaxed text-slate-600">
              {isBn
                ? 'এগুলো বাহ্যিক রেফারেন্স লিংক। অ্যাপটি এগুলো থেকে লাইভ তথ্য সংগ্রহ করেনি; মূল উৎস খুলে তথ্য যাচাই করুন।'
                : 'These are external reference links. The app has not retrieved live data from them. Open the original source and check the information.'}
            </p>

            {sources.length === 0 && (
              <p className="text-xs text-slate-500">
                {isBn ? 'কোনো রেফারেন্স দেওয়া হয়নি।' : 'No references provided.'}
              </p>
            )}

            {sources.map((source, index) => (
              <article
                key={`${source.url || source.title}-${index}`}
                className="space-y-2 rounded-xl border border-slate-200 bg-white p-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{source.title}</h4>
                    <p className="mt-1 flex items-center gap-1 text-[11px] text-slate-500">
                      <Building className="h-3 w-3" />
                      {source.organization}
                    </p>
                  </div>

                  <span
                    className={`rounded-full border px-2 py-1 text-[10px] font-semibold ${
                      source.isVerified === true
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                        : 'border-amber-200 bg-amber-50 text-amber-900'
                    }`}
                  >
                    {source.isVerified === true
                      ? isBn ? 'মূল উৎসে যাচাই করুন' : 'Check original source'
                      : isBn ? 'লাইভ যাচাই হয়নি' : 'Not live-verified'}
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-slate-700">
                  {isBn ? source.whatItSupportsBn || source.whatItSupports : source.whatItSupports}
                </p>

                {source.notes && (
                  <p className="text-[11px] leading-relaxed text-slate-500">
                    {isBn ? 'নোট: ' : 'Note: '}{source.notes}
                  </p>
                )}

                {source.url && (
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 underline"
                  >
                    {isBn ? 'মূল উৎস খুলুন' : 'Open original source'}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </article>
            ))}
          </section>
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-2 border-t bg-slate-100 px-4 py-3 text-[11px] text-slate-600">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-700" />
            {result.modelUsed
              ? `${isBn ? 'ইঞ্জিন: ' : 'Engine: '}${result.modelUsed}`
              : isBn ? 'প্রাথমিক গবেষণা প্রোটোটাইপ' : 'Research prototype'}
          </span>
          <span>
            {isBn ? 'নিশ্চিত ফলন বা লাভের প্রতিশ্রুতি নয়' : 'No guaranteed yield or profit'}
          </span>
        </footer>
      </div>
    </div>
  );
};
