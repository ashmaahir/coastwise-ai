import React, { useState, useEffect } from 'react';
import { AnalysisResult } from '../types.ts';
import {
  Printer,
  Volume2,
  VolumeX,
  X,
  User,
  Phone,
  Calendar,
  FileCheck2,
  AlertCircle,
  HelpCircle,
  CheckCircle,
} from 'lucide-react';

interface FarmerSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: AnalysisResult;
  language: 'en' | 'bn';
}

export const FarmerSummaryModal: React.FC<FarmerSummaryModalProps> = ({
  isOpen,
  onClose,
  result,
  language: initialLanguage,
}) => {
  const [viewLang, setViewLang] = useState<'en' | 'bn'>(initialLanguage);
  const [farmerName, setFarmerName] = useState('');
  const [workerName, setWorkerName] = useState('');
  const [saaoPhone, setSaaoPhone] = useState('');
  const [mouza, setMouza] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    setViewLang(initialLanguage);
  }, [initialLanguage]);

  if (!isOpen) return null;

  const isBn = viewLang === 'bn';
  const currentDate = new Date().toLocaleDateString(isBn ? 'bn-BD' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const farmerPoints = isBn
    ? result.farmerSpeakingPointsBn && result.farmerSpeakingPointsBn.length > 0
      ? result.farmerSpeakingPointsBn
      : result.farmerSpeakingPoints
    : result.farmerSpeakingPoints;

  const summary = isBn ? result.summaryBn || result.summary : result.summary;

  const handlePrint = () => {
    window.print();
  };

  const handleToggleSpeak = () => {
    if (!('speechSynthesis' in window)) {
      alert(
        isBn
          ? 'আপনার ব্রাউজারে ভয়েস স্পিচ সাপোর্ট করে না।'
          : 'Speech synthesis not supported in this browser.'
      );
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const textToRead = `${isBn ? 'উপকূলীয় কৃষি পরামর্শ।' : 'Coastal agricultural advice.'} ${summary}. ${farmerPoints.join('. ')}`;

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = isBn ? 'bn-BD' : 'en-US';
    utterance.rate = 0.9;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 print:p-0 print:bg-white print:fixed-none">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 print:border-none print:shadow-none print:max-w-full">
        {/* Modal Top Control Bar (Hidden on print) */}
        <div className="bg-slate-900 text-white p-3.5 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">📄</span>
            <span className="font-bold text-sm">
              {isBn ? 'কৃষক পরামর্শ পত্র (প্রিন্টযোগ্য)' : 'Farmer Field Advisory Sheet'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Switch */}
            <div className="bg-slate-800 p-0.5 rounded-lg border border-slate-700 flex text-xs">
              <button
                type="button"
                onClick={() => setViewLang('en')}
                className={`px-2 py-1 rounded text-xs font-semibold cursor-pointer ${
                  !isBn ? 'bg-emerald-600 text-white' : 'text-slate-400'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setViewLang('bn')}
                className={`px-2 py-1 rounded text-xs font-semibold cursor-pointer ${
                  isBn ? 'bg-emerald-600 text-white' : 'text-slate-400'
                }`}
              >
                বাংলা
              </button>
            </div>

            {/* Audio Button */}
            <button
              type="button"
              onClick={handleToggleSpeak}
              className={`p-1.5 rounded-lg text-xs font-medium flex items-center gap-1 cursor-pointer transition-colors ${
                isSpeaking
                  ? 'bg-amber-500 text-amber-950 font-bold'
                  : 'bg-slate-800 hover:bg-slate-700 text-emerald-400'
              }`}
              title="Read aloud for farmer in field"
            >
              {isSpeaking ? (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span className="text-[11px] hidden sm:inline">
                    {isBn ? 'থামুন' : 'Stop'}
                  </span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4" />
                  <span className="text-[11px] hidden sm:inline">
                    {isBn ? 'পড়ে শোনান' : 'Speak'}
                  </span>
                </>
              )}
            </button>

            {/* Print Button */}
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg shadow-sm cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>{isBn ? 'প্রিন্ট / PDF' : 'Print / PDF'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Content */}
        <div className="p-6 space-y-5 print:p-4 text-slate-900 bg-white">
          {/* Header of Advisory Sheet */}
          <div className="border-b-2 border-emerald-800 pb-3">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-extrabold text-emerald-950">
                  {isBn ? 'কৃষক পরামর্শ পত্র — কোস্টওয়াইজ এআই' : 'Farmer Advisory Sheet — CoastWise AI'}
                </h1>
                <p className="text-xs text-slate-600 mt-0.5">
                  {isBn
                    ? 'উপকূলীয় কৃষি সম্প্রসারণ প্রমাণ সহায়তা (লবণাক্ততা, বন্যা ও বৃষ্টিপাত)'
                    : 'Coastal Agricultural Evidence Support (Salinity, Flooding & Rainfall)'}
                </p>
              </div>
              <div className="text-right">
                <span className="inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300 rounded">
                  {isBn ? 'মাঠ সহায়তা কপি' : 'Field Advisory Copy'}
                </span>
                <p className="text-[11px] text-slate-500 mt-1">{currentDate}</p>
              </div>
            </div>

            {/* Mandatory Non-Binding Prototype Notice */}
            <div className="mt-2.5 p-2 bg-amber-50 border border-amber-300 rounded text-[11px] text-amber-900 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span>
                {isBn
                  ? 'গবেষণা প্রোটোটাইপ: কোনো সিদ্ধান্ত নেওয়ার আগে অবশ্যই স্থানীয় উপসহকারী কৃষি কর্মকর্তা (SAAO)-র সাথে পরামর্শ করুন।'
                  : 'Research Prototype: Consult the local Sub-Assistant Agriculture Officer (SAAO) before applying inputs.'}
              </span>
            </div>
          </div>

          {/* Field Metadata Form (Editable on screen, looks like printed form on paper) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
            <div>
              <label className="text-[10px] text-slate-700 font-bold uppercase block">
                {isBn ? 'কৃষকের নাম' : 'Farmer Name'}
              </label>
              <input
                type="text"
                placeholder={isBn ? 'কৃষকের নাম লিখুন' : 'Enter farmer name'}
                value={farmerName}
                onChange={(e) => setFarmerName(e.target.value)}
                className="w-full bg-transparent border-b border-slate-300 py-1 text-xs text-slate-800 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="text-[10px] text-slate-700 font-bold uppercase block">
                {isBn ? 'মৌজা / পোল্ডার / ইউনিয়ন' : 'Mouza / Polder / Union'}
              </label>
              <input
                type="text"
                placeholder={isBn ? 'গ্রাম বা পোল্ডার নং' : 'Village / Polder'}
                value={mouza}
                onChange={(e) => setMouza(e.target.value)}
                className="w-full bg-transparent border-b border-slate-300 py-1 text-xs text-slate-800 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="text-[10px] text-slate-700 font-bold uppercase block">
                {isBn ? 'সম্প্রসারণ কর্মী' : 'Extension Officer'}
              </label>
              <input
                type="text"
                placeholder={isBn ? 'আপনার নাম' : 'Your name'}
                value={workerName}
                onChange={(e) => setWorkerName(e.target.value)}
                className="w-full bg-transparent border-b border-slate-300 py-1 text-xs text-slate-800 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="text-[10px] text-slate-700 font-bold uppercase block">
                {isBn ? 'উপসহকারী কৃষি কর্মকর্তা (SAAO) নম্বর' : 'SAAO Contact Phone'}
              </label>
              <input
                type="text"
                placeholder="017xxxxxxxx"
                value={saaoPhone}
                onChange={(e) => setSaaoPhone(e.target.value)}
                className="w-full bg-transparent border-b border-slate-300 py-1 text-xs text-slate-800 focus:outline-none focus:border-emerald-600"
              />
            </div>
          </div>

          {/* Concern Question */}
          {result.question && (
            <div className="p-3 bg-emerald-50/40 rounded-xl border border-emerald-100 text-xs">
              <span className="font-bold text-emerald-950 block mb-0.5">
                {isBn ? 'কৃষকের প্রশ্ন / সমস্যা:' : 'Farmer Issue / Observation:'}
              </span>
              <p className="text-slate-800 italic">"{result.question}"</p>
            </div>
          )}

          {/* Simple Language Bullet Points for Farmer */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 border-b pb-1">
              <CheckCircle className="w-4 h-4 text-emerald-700" />
              <span>
                {isBn
                  ? 'কৃষককে বুঝিয়ে বলার প্রধান পরামর্শসমূহ (সহজ ভাষায়):'
                  : 'Key Direct Recommendations for the Farmer:'}
              </span>
            </h2>

            <div className="space-y-2.5">
              {farmerPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg border border-slate-200 bg-white flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-slate-900 font-medium leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Essential Field Measurements Required */}
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-2">
            <h3 className="font-bold text-slate-800 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
              <span>
                {isBn
                  ? 'মাঠ পরিদর্শনের সময় যা পরীক্ষা করতে হবে:'
                  : 'Field Checks Required on Site:'}
              </span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-700">
              {(isBn && result.additionalInfoNeededBn?.length
                ? result.additionalInfoNeededBn
                : result.additionalInfoNeeded
              ).map((item, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-3 h-3 border border-slate-400 rounded-xs shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Signatures Footer for Field Official */}
          <div className="pt-6 border-t border-slate-300 grid grid-cols-2 gap-8 text-xs text-slate-600">
            <div>
              <div className="border-b border-slate-400 h-6 mb-1"></div>
              <p className="font-medium">
                {isBn ? 'কৃষকের স্বাক্ষর / টিপসহি' : "Farmer's Signature / Thumb"}
              </p>
            </div>
            <div className="text-right">
              <div className="border-b border-slate-400 h-6 mb-1"></div>
              <p className="font-medium">
                {isBn
                  ? 'উপসহকারী কৃষি কর্মকর্তা (SAAO) / বিস্তার কর্মীর স্বাক্ষর'
                  : 'Extension Worker / SAAO Signature'}
              </p>
            </div>
          </div>

          <div className="text-center text-[10px] text-slate-500 print:block">
            {isBn
              ? 'কোস্টওয়াইজ এআই — প্রাসঙ্গিকতা যাচাইকৃত তথ্যসূত্র (UN/FAO DIEM Flood Assessment ও BRRI সরকারি প্রোফাইল)। গবেষণার মান কোনো একক জমির নিশ্চয়তা নয়; উপসহকারী কৃষি কর্মকর্তা (SAAO)-র পরামর্শ আবশ্যক।'
              : 'CoastWise AI — Sources checked for relevance (UN/FAO DIEM Floods & BRRI Rice Profiles). Station tolerance figures are not individual farm recommendations; SAAO consultation required.'}
          </div>
        </div>
      </div>
    </div>
  );
};
