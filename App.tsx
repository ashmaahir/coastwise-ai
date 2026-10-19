
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopicType, AnalysisResult, DemoScenario } from './types.ts';
import { Header } from './components/Header.tsx';
import { TopicSelector } from './components/TopicSelector.tsx';
import { StudyAreaSelector } from './components/StudyAreaSelector.tsx';
import { QuestionInput } from './components/QuestionInput.tsx';
import { StructuredResult } from './components/StructuredResult.tsx';
import { FarmerSummaryModal } from './components/FarmerSummaryModal.tsx';
import { DemonstrationView } from './components/DemonstrationView.tsx';
import { ValidationView } from './components/ValidationView.tsx';
import {
  AlertCircle,
  Leaf,
  Sparkles,
  Compass,
  Scale,
} from 'lucide-react';

type CropData = {
  name: string;
  cost: string;
  yield: string;
  price: string;
};

export default function App() {
  const [topic, setTopic] = useState<TopicType>('salinity');
  const [studyArea, setStudyArea] = useState<string>('Area not specified');
  const [question, setQuestion] = useState<string>('');
  const [language, setLanguage] = useState<'en' | 'bn'>('bn');

  const [activeTab, setActiveTab] = useState<
    'advisor' | 'crop_compare' | 'demos' | 'sheet' | 'validation'
  >('advisor');

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isFarmerSheetOpen, setIsFarmerSheetOpen] = useState<boolean>(false);

  const [cropA, setCropA] = useState<CropData>({
    name: 'ধান',
    cost: '',
    yield: '',
    price: '',
  });

  const [cropB, setCropB] = useState<CropData>({
    name: 'সরিষা',
    cost: '',
    yield: '',
    price: '',
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic,
          studyArea,
          question,
          language,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const data: AnalysisResult = await response.json();

      setResult({
        ...data,
        topic,
        studyArea,
        question:
          question ||
          (language === 'bn'
            ? 'সাধারণ উপকূলীয় চ্যালেঞ্জ'
            : 'General coastal inquiry'),
        timestamp: new Date().toISOString(),
      });

      setActiveTab('advisor');
    } catch (err: unknown) {
      console.error('Analysis error:', err);
      setError(
        language === 'bn'
          ? 'তথ্য প্রক্রিয়াকরণে সমস্যা হয়েছে। পুনরায় চেষ্টা করুন।'
          : 'Failed to retrieve analysis. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectScenario = (scenario: DemoScenario) => {
    setTopic(scenario.topic);
    setStudyArea(scenario.studyArea);
    setQuestion(
      language === 'bn' && scenario.questionPromptBn
        ? scenario.questionPromptBn
        : scenario.questionPrompt
    );
    setResult(scenario.mockResult);
    setActiveTab('advisor');
  };

  const handleReset = () => {
    setQuestion('');
    setError(null);
  };

  const renderCropCard = (
    crop: CropData,
    setCrop: React.Dispatch<React.SetStateAction<CropData>>,
    title: string
  ) => {
    const cost = Number(crop.cost);
    const yieldAmount = Number(crop.yield);
    const price = Number(crop.price);

    const valid =
      crop.cost.trim() !== '' &&
      crop.yield.trim() !== '' &&
      crop.price.trim() !== '' &&
      Number.isFinite(cost) &&
      Number.isFinite(yieldAmount) &&
      Number.isFinite(price) &&
      cost >= 0 &&
      yieldAmount >= 0 &&
      price >= 0;

    const revenue = valid ? yieldAmount * price : null;
    const balance = revenue === null ? null : revenue - cost;

    const fieldClass =
      'mt-1 w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100';

    const money = (value: number) =>
      '৳' +
      value.toLocaleString('en-BD', {
        maximumFractionDigits: 2,
      });

    return (
      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="text-lg font-bold text-emerald-900">{title}</h3>

        <label className="block text-sm font-medium text-slate-700">
          {language === 'bn' ? 'ফসলের নাম' : 'Crop name'}
          <input
            className={fieldClass}
            value={crop.name}
            onChange={(e) => setCrop({ ...crop, name: e.target.value })}
            placeholder={language === 'bn' ? 'যেমন: আমন ধান' : 'e.g. Aman rice'}
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          {language === 'bn'
            ? 'মোট উৎপাদন খরচ (টাকা)'
            : 'Total production cost (BDT)'}
          <input
            type="number"
            min="0"
            className={fieldClass}
            value={crop.cost}
            onChange={(e) => setCrop({ ...crop, cost: e.target.value })}
            placeholder="0"
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          {language === 'bn' ? 'প্রত্যাশিত ফলন (মণ)' : 'Expected yield (maunds)'}
          <input
            type="number"
            min="0"
            className={fieldClass}
            value={crop.yield}
            onChange={(e) => setCrop({ ...crop, yield: e.target.value })}
            placeholder="0"
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          {language === 'bn'
            ? 'প্রতি মণের সম্ভাব্য বিক্রয়দর (টাকা)'
            : 'Estimated price per maund (BDT)'}
          <input
            type="number"
            min="0"
            className={fieldClass}
            value={crop.price}
            onChange={(e) => setCrop({ ...crop, price: e.target.value })}
            placeholder="0"
          />
        </label>

        <div className="space-y-2 rounded-xl bg-emerald-50 p-3 text-sm">
          <p className="flex justify-between gap-3">
            <span>
              {language === 'bn' ? 'সম্ভাব্য মোট বিক্রয়' : 'Estimated revenue'}
            </span>
            <strong>{revenue === null ? '—' : money(revenue)}</strong>
          </p>

          <p className="flex justify-between gap-3">
            <span>
              {language === 'bn'
                ? 'বিক্রয় থেকে দেওয়া খরচ বাদে'
                : 'Revenue minus entered cost'}
            </span>
            <strong className={balance !== null && balance < 0 ? 'text-red-700' : 'text-emerald-900'}>
              {balance === null ? '—' : money(balance)}
            </strong>
          </p>
        </div>

        <p className="text-xs leading-relaxed text-slate-500">
          {language === 'bn'
            ? 'হিসাব: ফলন × প্রতি মণের দাম = সম্ভাব্য বিক্রয়। এরপর দেওয়া খরচ বাদ দেওয়া হয়েছে।'
            : 'Calculation: yield × price per maund = estimated revenue, minus entered cost.'}
        </p>
      </section>
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-100/80 font-sans text-slate-900">
      <Header
        language={language}
        onToggleLanguage={setLanguage}
        activeTab={activeTab}
        onChangeTab={setActiveTab}
        hasResult={Boolean(result)}
      />

      <main className="mx-auto w-full max-w-5xl flex-1 space-y-6 p-3 sm:p-5 md:p-6">
        {activeTab === 'advisor' && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-900">
                    <Leaf className="h-3.5 w-3.5" />
                    {language === 'bn' ? 'মাঠ সহায়তা টুল' : 'Field Advisory Support'}
                  </div>

                  <h2 className="text-lg font-extrabold tracking-tight sm:text-xl">
                    {language === 'bn'
                      ? 'উপকূলীয় কৃষি প্রমাণ সিদ্ধান্ত সহায়তা'
                      : 'Coastal Climate Evidence Decision Support'}
                  </h2>

                  <p className="max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {language === 'bn'
                      ? 'কৃষি সম্প্রসারণ কর্মীরা তথ্যসূত্র যাচাই করে কৃষককে সহজ বাংলায় বুঝিয়ে বলতে পারবেন।'
                      : 'Agricultural extension workers can review information and explain it to farmers.'}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveTab('demos')}
                  className="flex items-center gap-1.5 rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  {language === 'bn' ? 'নমুনা পরিস্থিতি দেখুন' : 'Explore demo scenarios'}
                </button>
              </div>

              <div className="mt-5 space-y-5 border-t border-slate-100 pt-5">
                <TopicSelector
                  selectedTopic={topic}
                  onSelectTopic={(t) => {
                    setTopic(t);
                    setError(null);
                  }}
                  language={language}
                />

                <StudyAreaSelector
                  selectedArea={studyArea}
                  onSelectArea={(a) => {
                    setStudyArea(a);
                    setError(null);
                  }}
                  language={language}
                />

                <QuestionInput
                  topic={topic}
                  question={question}
                  onChangeQuestion={(q) => {
                    setQuestion(q);
                    setError(null);
                  }}
                  onSubmit={handleSubmit}
                  isLoading={isLoading}
                  onReset={handleReset}
                  language={language}
                />
              </div>
            </div>

            {error && (
              <div className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4 text-xs text-red-900">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <strong className="mb-0.5 block">
                    {language === 'bn' ? 'ত্রুটি' : 'Error'}
                  </strong>
                  {error}
                </div>
              </div>
            )}

            {result && (
              <StructuredResult
                result={result}
                language={language}
                onOpenFarmerSheet={() => setIsFarmerSheetOpen(true)}
                onNavigateToCropCompare={() => setActiveTab('crop_compare')}
              />
            )}

            {!result && !isLoading && (
              <div className="space-y-3 rounded-2xl border border-dashed border-slate-300 bg-white/60 p-8 text-center text-slate-500">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-bold text-slate-800">
                  {language === 'bn'
                    ? 'বিষয় ও প্রশ্ন লিখে প্রমাণভিত্তিক তথ্য দেখুন'
                    : 'Select a topic and submit a question'}
                </h3>
                <p className="mx-auto mt-1 max-w-md text-xs">
                  {language === 'bn'
                    ? 'অথবা নমুনা পরিস্থিতি থেকে একটি উদাহরণ নির্বাচন করুন।'
                    : 'Or select an example from the demo scenarios.'}
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'crop_compare' && (
          <div className="space-y-5">
            <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <Scale className="h-6 w-6 text-emerald-700" />
                <h2 className="text-xl font-extrabold">
                  {language === 'bn' ? 'ফসল ও ব্যয় তুলনা' : 'Crop & Cost Comparison'}
                </h2>
              </div>

              <p className="text-sm leading-relaxed text-slate-600">
                {language === 'bn'
                  ? 'একই জমির আয়তনের জন্য দুইটি ফসলের খরচ, সম্ভাব্য ফলন ও বিক্রয়দর লিখে তুলনা করুন।'
                  : 'Enter costs, estimated yields, and prices for two crops using the same land area.'}
              </p>
            </div>

            <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
              <strong>{language === 'bn' ? 'সতর্কতা:' : 'Important:'}</strong>{' '}
              {language === 'bn'
                ? 'এটি ব্যবহারকারীর দেওয়া তথ্যভিত্তিক সাধারণ ক্যালকুলেটর। এটি বর্তমান বাজারদর, স্থানীয় ফলন, মাটির অবস্থা বা নিশ্চিত লাভ যাচাই করে না। জমির ভাড়া, পারিবারিক শ্রম, পরিবহন, ঋণের সুদ বা অন্য খরচ বাদ থাকলে ফলাফল নিট লাভ নয়।'
                : 'This calculator uses user-entered estimates. It does not verify market prices, local yields, soil conditions, or guaranteed profit. Excluded costs mean the balance is not net profit.'}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {renderCropCard(cropA, setCropA, language === 'bn' ? 'প্রথম ফসল' : 'Crop A')}
              {renderCropCard(cropB, setCropB, language === 'bn' ? 'দ্বিতীয় ফসল' : 'Crop B')}
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
              <strong>{language === 'bn' ? 'তুলনার ব্যাখ্যা' : 'How to interpret'}</strong>
              <p className="mt-2 leading-relaxed">
                {language === 'bn'
                  ? 'দুই ফসলের “বিক্রয় থেকে দেওয়া খরচ বাদে” অঙ্ক তুলনা করুন। যে ফসলের অঙ্ক বেশি, সেটি শুধু আপনার দেওয়া অনুমানের ভিত্তিতে বেশি অবশিষ্ট অর্থ দেখাচ্ছে। চাষের সিদ্ধান্ত নেওয়ার আগে স্থানীয় কৃষি কর্মকর্তা, মাটির লবণাক্ততা, পানি নিষ্কাশন, বীজের প্রাপ্যতা ও বাজারদর যাচাই করুন।'
                  : 'Compare the balances shown for both crops. A higher balance only means a higher result under your inputs. Verify local conditions, drainage, seed availability, and market prices before making a farming decision.'}
              </p>
            </div>
          </div>
        )}

        {activeTab === 'demos' && (
          <DemonstrationView
            language={language}
            onSelectScenario={handleSelectScenario}
          />
        )}

        {activeTab === 'sheet' && (
          <div className="space-y-4">
            {result ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b pb-3">
                  <div>
                    <h2 className="text-base font-bold">
                      {language === 'bn' ? 'সরাসরি কৃষক পরামর্শ পত্র' : 'Farmer Field Advisory Hand-Out'}
                    </h2>
                    <p className="text-xs text-slate-500">
                      {language === 'bn'
                        ? 'কৃষককে পড়ে শোনান বা প্রিন্ট করে দিন'
                        : 'Read aloud or print for the farmer'}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsFarmerSheetOpen(true)}
                    className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white"
                  >
                    {language === 'bn' ? 'পূর্ণ স্ক্রিন / প্রিন্ট' : 'Full screen / Print'}
                  </button>
                </div>

                <div className="mx-auto max-w-2xl space-y-4 rounded-xl border border-emerald-100 bg-emerald-50/30 p-4">
                  <strong className="text-xs text-emerald-950">
                    {language === 'bn' ? 'কৃষককে বুঝিয়ে বলার প্রধান কথা:' : 'Farmer speaking points:'}
                  </strong>

                  <ul className="space-y-2">
                    {(language === 'bn' && result.farmerSpeakingPointsBn?.length
                      ? result.farmerSpeakingPointsBn
                      : result.farmerSpeakingPoints
                    ).map((point, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs leading-relaxed">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-[11px] font-bold text-white">
                          {index + 1}
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-end border-t border-emerald-200/60 pt-3">
                    <button
                      type="button"
                      onClick={() => setIsFarmerSheetOpen(true)}
                      className="text-xs font-bold text-emerald-700 underline"
                    >
                      {language === 'bn' ? 'সম্পূর্ণ ফরম পূরণ করুন →' : 'Complete the form →'}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-8 text-center">
                <div className="text-2xl">📄</div>
                <h3 className="text-sm font-bold">
                  {language === 'bn' ? 'কোনো পরামর্শ পত্র প্রস্তুত নেই' : 'No advisory sheet yet'}
                </h3>
                <p className="mx-auto max-w-sm text-xs text-slate-500">
                  {language === 'bn'
                    ? 'প্রথমে পরামর্শ অনুসন্ধান করুন অথবা একটি নমুনা পরিস্থিতি নির্বাচন করুন।'
                    : 'First generate an advisory or select a demo scenario.'}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveTab('advisor')}
                  className="rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white"
                >
                  {language === 'bn' ? 'পরামর্শ অনুসন্ধানে যান' : 'Go to Advisor'}
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'validation' && <ValidationView language={language} />}
      </main>

      {result && (
        <FarmerSummaryModal
          isOpen={isFarmerSheetOpen}
          onClose={() => setIsFarmerSheetOpen(false)}
          result={result}
          language={language}
        />
      )}

      <footer className="mt-auto border-t border-slate-800 bg-slate-900 px-4 py-4 text-xs text-slate-400">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-bold text-slate-200">
              CoastWise AI — Coastal Agricultural Evidence Decision Support
            </p>
            <p className="mt-1 text-[11px]">
              {language === 'bn'
                ? 'স্থানীয় কৃষি কর্মকর্তার সঙ্গে তথ্য যাচাই করুন।'
                : 'Verify information with local agricultural extension officers.'}
            </p>
          </div>

          <div className="rounded-lg border border-amber-800/60 bg-amber-950/60 px-3 py-1.5 text-[11px] text-amber-400">
            {language === 'bn'
              ? '⚠️ প্রাথমিক গবেষণা প্রোটোটাইপ — মাঠে যাচাইকৃত নয়।'
              : '⚠️ Research prototype — not field-validated.'}
          </div>
        </div>
      </footer>
    </div>
  );
}
