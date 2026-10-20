import React, { useState } from 'react';
import {
  VALIDATION_CASES,
  VALIDATION_CHECKLIST,
  SOURCES_CHECKED_FOR_RELEVANCE,
} from '../data/validationData.ts';
import {
  ShieldAlert,
  ShieldCheck,
  CheckSquare,
  Square,
  ExternalLink,
  BookOpen,
  AlertOctagon,
  Scale,
  Sparkles,
  AlertTriangle,
  Info,
} from 'lucide-react';

interface ValidationViewProps {
  language: 'en' | 'bn';
}

export const ValidationView: React.FC<ValidationViewProps> = ({ language }) => {
  const isBn = language === 'bn';
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'check-1': true,
    'check-2': true,
    'check-3': true,
    'check-4': true,
    'check-5': true,
  });

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const totalChecks = VALIDATION_CHECKLIST.length;
  const passedChecks = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Top Protocol Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white p-5 rounded-2xl border border-emerald-800/80 shadow-sm space-y-3">
        <div className="flex items-center gap-2">
          <span className="p-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg">
            <Scale className="w-5 h-5" />
          </span>
          <h2 className="text-base font-bold text-white">
            {isBn
              ? 'নিরাপত্তা, প্রমাণ ও যাচাইকরণ হাব'
              : 'Safety, Evidence & Scientific Validation Hub'}
          </h2>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
          {isBn
            ? 'কোস্টওয়াইজ এআই তৈরি করা হয়েছে বিভ্রান্তিকর বা কাল্পনিক তথ্য রোধ করার জন্য। কৃষকের জীবন ও জীবিকার ক্ষেত্রে সাধারণ এআই-এর ভুল তথ্য মারাত্মক ক্ষতি ডেকে আনতে পারে। নিচের মানদণ্ড ও টেস্ট কেসগুলো এই অ্যাপের প্রমাণ-ভিত্তিক নিরাপত্তা নীতি ব্যাখ্যা করে।'
            : 'CoastWise AI is engineered with strict guardrails to prevent AI hallucinations, fabricated measurements, and dangerous crop guarantees. In resource-poor coastal agriculture, bad advice causes catastrophic crop loss. Below are the verification benchmarks and checklist.'}
        </p>

        {/* Prototype Warning Pill */}
        <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 px-3 py-1.5 rounded-lg text-xs text-amber-200">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            {isBn
              ? 'ঘোষণা: এটি প্রাথমিক গবেষণা প্রোটোটাইপ। এটি কোনো সরকারি সতর্কতা বা আদেশ নয়।'
              : 'Status: Early Research Prototype — Not yet field-validated. Not an official warning service.'}
          </span>
        </div>
      </div>

      {/* Section 1: Interactive Extension Worker Safety Checklist */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>
                {isBn
                  ? 'সম্প্রসারণ কর্মীদের জন্য ৫-দফা প্রমাণ যাচাইকরণ চেকলিস্ট'
                  : 'Extension Worker 5-Point Safety & Evidence Checklist'}
              </span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {isBn
                ? 'কৃষকের সাথে যেকোনো পরামর্শ শেয়ার করার আগে এই শর্তগুলো যাচাই করুন'
                : 'Verify every advisory against these criteria before advising farmers'}
            </p>
          </div>

          {/* Internal Checklist Status (No 100% safety score displayed as real-world validation) */}
          <div className="flex items-center gap-2 bg-slate-100 border border-slate-300 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700">
            <span className="font-bold text-slate-900">
              {isBn ? 'অভ্যন্তরীণ চেকলিস্ট স্থিতি:' : 'Internal Checklist Status:'}
            </span>
            <span className="text-emerald-800 font-bold">
              {passedChecks}/{totalChecks} {isBn ? 'মানদণ্ড চিহ্নিত' : 'criteria reviewed'}
            </span>
            <span className="text-[10px] text-slate-500 hidden sm:inline">
              ({isBn ? 'অভ্যন্তরীণ পর্যালোচনা — মাঠের বাস্তব মূল্যায়ন নয়' : 'internal review — not real-world field validation'})
            </span>
          </div>
        </div>

        <div className="space-y-2.5">
          {VALIDATION_CHECKLIST.map((item) => {
            const isChecked = Boolean(checkedItems[item.id]);
            return (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                  isChecked
                    ? 'border-emerald-200 bg-emerald-50/50 text-slate-900'
                    : 'border-slate-200 bg-slate-50/40 text-slate-500'
                }`}
              >
                <button
                  type="button"
                  className="mt-0.5 text-emerald-600 cursor-pointer shrink-0"
                  aria-label={isChecked ? 'Mark unreviewed' : 'Mark reviewed'}
                >
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                <div className="text-xs">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <span>{isBn ? item.labelBn : item.labelEn}</span>
                    {isChecked && (
                      <span className="text-[10px] bg-slate-200 text-slate-800 px-1.5 py-0.2 rounded font-semibold">
                        {isBn ? 'চিহ্নিত' : 'Reviewed'}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    {isBn ? item.descBn : item.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear internal status disclaimer */}
        <div className="flex items-start gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-slate-600">
          <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <span>
            {isBn
              ? 'সতর্কবার্তা: এটি সম্প্রসারণ কর্মীদের জন্য তথ্য ও প্রমাণ যাচাইয়ের একটি অভ্যন্তরীণ চেকলিস্ট স্থিতি। এটি কোনোভাবেই মাঠ পর্যায়ের বাস্তব যাচাইকরণ (real-world validation) বা সুরক্ষার নিশ্চিত সনদ নয়।'
              : 'Protocol Notice: This checklist reflects internal protocol review status for agricultural extension workers. It is NOT evidence of real-world field validation or guaranteed safety certification.'}
          </span>
        </div>
      </div>

      {/* Section 2: Real-World Test Benchmark Cases (Unsafe vs Safe Comparison with Claim Sources) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4 shadow-sm">
        <div>
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <AlertOctagon className="w-4 h-4 text-amber-600" />
            <span>
              {isBn
                ? 'বাস্তব পরীক্ষার প্রশ্ন: অনিরাপদ এআই বনাম কোস্টওয়াইজ এআই (উৎস ও প্রমাণভিত্তিক পর্যালোচনা)'
                : 'Benchmark Test Cases: Unsafe AI Hallucination vs CoastWise Standard (Claim-by-Claim)'}
            </span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {isBn
              ? 'লবণাক্ততার মাত্রা, ফুল আসার পর্যায়ের পরাগায়ন, সেচ ও ইউরিয়া প্রয়োগসহ প্রতিটি বৈজ্ঞানিক দাবির পাশে সরাসরি প্রাসঙ্গিক তথ্যসূত্রের লিঙ্ক সংযুক্ত করা হয়েছে। কোনো অপ্রমাণিত দাবির ক্ষেত্রে "উৎস প্রয়োজন — এখনও যাচাই করা হয়নি" নির্দেশ করা হয়েছে।'
              : 'Every scientific claim across all four cases—including salinity thresholds, flowering-stage sterility, irrigation, and urea application—has a direct, relevant source link beside it. Unverified claims or numerical thresholds are explicitly labeled "Source needed — not yet verified".'}
          </p>
        </div>

        <div className="space-y-5">
          {VALIDATION_CASES.map((val) => (
            <div
              key={val.id}
              className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs"
            >
              {/* Query Header */}
              <div className="bg-slate-100 p-3.5 border-b border-slate-200 text-xs">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">
                  {isBn ? 'টেস্ট প্রশ্ন / পরিস্থিতি:' : 'Test Query / Farming Scenario:'}
                </span>
                <span className="font-semibold text-slate-900 text-sm mt-0.5 block">
                  {isBn && val.queryBn ? val.queryBn : val.query}
                </span>
              </div>

              {/* Grid: Unsafe vs Safe */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-xs">
                {/* Unsafe AI Column */}
                <div className="p-4 bg-red-50/40 space-y-2">
                  <div className="flex items-center gap-1.5 text-red-700 font-bold">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span>{isBn ? '❌ অনিরাপদ সাধারণ এআই দাবি' : '❌ Unsafe AI Hallucination'}</span>
                  </div>
                  <p className="text-red-900 bg-white/80 p-2.5 rounded-lg border border-red-200 font-medium leading-relaxed">
                    {isBn && val.unsafeClaimBn
                      ? val.unsafeClaimBn.replace(/^[^:]*:\s*/, '')
                      : val.unsafeClaim.split(':').slice(1).join(':')}
                  </p>
                  <div className="text-[11px] text-red-800">
                    <span className="font-bold">
                      {isBn ? 'বিপদ ও ক্ষতির কারণ: ' : 'Hazard / Failure Mode: '}
                    </span>
                    <span>{isBn && val.unsafeRiskReasonBn ? val.unsafeRiskReasonBn : val.unsafeRiskReason}</span>
                  </div>
                </div>

                {/* Safe CoastWise AI Column */}
                <div className="p-4 bg-emerald-50/40 space-y-3">
                  <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span>{isBn ? '✅ কোস্টওয়াইজ এআই প্রমাণভিত্তিক মানদণ্ড' : '✅ CoastWise AI Grounded Standard'}</span>
                  </div>
                  <p className="text-emerald-950 bg-white/90 p-2.5 rounded-lg border border-emerald-200 font-medium leading-relaxed">
                    {isBn && val.safeGroundedApproachBn ? val.safeGroundedApproachBn : val.safeGroundedApproach}
                  </p>
                </div>
              </div>

              {/* Claim-by-Claim Verified Source Links Section */}
              <div className="p-4 bg-slate-50/80 border-t border-slate-200 space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 uppercase tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>
                    {isBn
                      ? 'প্রতিটি বৈজ্ঞানিক দাবি ও সরাসরি তথ্যসূত্র লিঙ্ক:'
                      : 'Scientific Claims & Direct Relevant Source Links:'}
                  </span>
                </div>

                <div className="space-y-2">
                  {val.claims.map((clm, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-3 bg-white rounded-lg border border-slate-200 text-xs space-y-1.5"
                    >
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <p className="font-medium text-slate-800 flex-1 min-w-[220px]">
                          {isBn ? clm.claimBn : clm.claimEn}
                        </p>

                        <div className="shrink-0">
                          {clm.sourceUrl ? (
                            <a
                              href={clm.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-bold text-[11px] transition-colors"
                            >
                              <span>{clm.sourceTitle}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className="inline-block px-2.5 py-1 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                              {clm.isVerified
                                ? clm.sourceTitle
                                : isBn
                                ? 'উৎস প্রয়োজন — এখনও যাচাই করা হয়নি'
                                : 'Source needed — not yet verified'}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="text-[11px] text-slate-600 pl-2 border-l-2 border-emerald-400">
                        <span className="font-semibold text-slate-700">
                          {isBn ? 'উৎসটি যা সমর্থন করে: ' : 'Evidence scope: '}
                        </span>
                        <span>
                          {isBn && clm.whatSourceSupportsBn
                            ? clm.whatSourceSupportsBn
                            : clm.whatSourceSupports}
                        </span>
                      </div>

                      {(clm.farmAdviceCaution || clm.farmAdviceCautionBn) && (
                        <div className="p-2 bg-amber-50 rounded border border-amber-200 text-[11px] text-amber-900 flex items-start gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                          <span>
                            {isBn && clm.farmAdviceCautionBn
                              ? clm.farmAdviceCautionBn
                              : clm.farmAdviceCaution}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Sources checked for relevance */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4 shadow-sm">
        <div>
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-700" />
            <span>
              {isBn
                ? 'প্রাসঙ্গিকতা যাচাইকৃত তথ্যসূত্র (সরাসরি কার্যকর লিঙ্কসহ)'
                : 'Sources checked for relevance (With Working Links)'}
            </span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {isBn
              ? 'কোস্টওয়াইজ এআই কোনো মনগড়া তথ্যসূত্র তৈরি করে না। এখানে তালিকাভুক্ত প্রতিটি তথ্যসূত্র প্রাসঙ্গিকতার জন্য যাচাই করা হয়েছে এবং এর পরিধি স্পষ্ট করা হলো।'
              : 'CoastWise AI strictly prohibits inventing citations or URLs. Below are the verified official sources and what each actually supports:'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {SOURCES_CHECKED_FOR_RELEVANCE.map((ref, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors flex flex-col justify-between text-xs space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  {ref.url ? (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-800 hover:text-emerald-950 hover:underline leading-snug flex items-center gap-1.5 group"
                    >
                      <span className="group-hover:underline">{ref.title}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    </a>
                  ) : (
                    <h4 className="font-bold text-slate-900 leading-snug">
                      {ref.title}
                    </h4>
                  )}

                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                      ref.dataStatus === 'integrated'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : ref.dataStatus === 'external_reference'
                        ? 'bg-blue-100 text-blue-800 border border-blue-300'
                        : 'bg-amber-100 text-amber-900 border border-amber-300'
                    }`}
                  >
                    {ref.dataStatus === 'integrated'
                      ? (isBn ? 'সমন্বিত জাতের তথ্য' : 'Integrated Dataset')
                      : ref.dataStatus === 'external_reference'
                      ? (isBn ? 'বহিঃস্থ তথ্য পোর্টাল' : 'External Portal Linked')
                      : (isBn ? 'উৎস প্রয়োজন' : 'Source Needed')}
                  </span>
                </div>

                <div className="text-[11px] text-slate-500 font-medium">
                  {ref.organization} • {ref.notes}
                </div>

                {/* Explicit Explanation of What this Source Actually Supports */}
                <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-[11px]">
                  <span className="font-bold text-emerald-950 block mb-0.5">
                    {isBn ? '📌 এই উৎসটি যা সমর্থন করে:' : '📌 What this source actually supports:'}
                  </span>
                  <p className="text-slate-800 leading-relaxed">
                    {isBn && ref.whatItSupportsBn ? ref.whatItSupportsBn : ref.whatItSupports}
                  </p>
                </div>
              </div>

              {ref.url && (
                <div className="pt-2 border-t border-slate-200/80">
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-900 break-all underline flex items-center gap-1"
                  >
                    <span className="truncate">{ref.url}</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Farm Recommendation Guardrail Banner */}
        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block">
              {isBn
                ? 'অননুমোদিত ফলনের প্রতিশ্রুতি বা খামার-নির্দিষ্ট সুপারিশ নিষিদ্ধ:'
                : 'Prohibition on Farm-Specific Yield Guarantees & Unverified Thresholds:'}
            </span>
            <p className="text-[11px] text-amber-900 mt-0.5 leading-relaxed">
              {isBn
                ? 'ব্রি (BRRI) ধান৯৭ ও ধান৯৯ জাতসমূহের লবণসহনশীলতার পরিমাপ গবেষণা কেন্দ্রের ফলাফল; এটি কোনো একক কৃষকের জমিতে ফলনের নিশ্চয়তা নয়। প্রতিটি জমির মাটির অবস্থা, সেচের পানির লবণাক্ততা এবং স্থানীয় উপসহকারী কৃষি কর্মকর্তা (SAAO)-র পরামর্শ অবশ্যই যাচাই করতে হবে। এছাড়া জাতিসংঘের এফএও (FAO) বন্যার রিপোর্টকে মাটির লবণাক্ততা বা সার ব্যবহারের প্রমাণ হিসেবে উদ্ধৃত করা সম্পূর্ণ নিষিদ্ধ।'
                : 'BRRI dhan97 and dhan99 rice variety salinity tolerance figures represent research station experimental findings and must NOT be presented as a recommendation or yield guarantee for an individual farm. Local soil/water salinity and advice from the agricultural extension officer must be verified. Furthermore, the FAO flood assessment must NEVER be cited as support for soil salinity measurements or fertilizer management.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
