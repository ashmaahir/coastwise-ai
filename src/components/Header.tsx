import React from 'react';
import { Compass, Globe, ShieldAlert, Sparkles, Scale, BookOpen } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'bn';
  onToggleLanguage: (lang: 'en' | 'bn') => void;
  activeTab: 'advisor' | 'crop_compare' | 'demos' | 'sheet' | 'validation';
  onChangeTab: (tab: 'advisor' | 'crop_compare' | 'demos' | 'sheet' | 'validation') => void;
  hasResult: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onToggleLanguage,
  activeTab,
  onChangeTab,
  hasResult,
}) => {
  return (
    <header className="bg-emerald-950 text-white border-b border-emerald-800/80 sticky top-0 z-30 shadow-md">
      {/* Top Prototype Warning Bar (Priority 7) */}
      <div className="bg-amber-500 text-amber-950 px-3 py-1.5 text-xs font-medium flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-1.5 max-w-full">
          <ShieldAlert className="w-3.5 h-3.5 shrink-0 text-amber-900" />
          <span>
            {language === 'bn'
              ? 'প্রাথমিক গবেষণা প্রোটোটাইপ — মাঠ পর্যায়ে এখনো যাচাইকৃত নয়। এটি কোনো দাপ্তরিক সতর্কতা বা উপদেষ্টা সেবা নয়।'
              : 'Early research prototype — not yet field-validated. Not an official advisory or emergency warning service.'}
          </span>
        </div>
        <span className="text-[10px] uppercase font-bold tracking-wider bg-amber-600/30 px-1.5 py-0.5 rounded border border-amber-800/30 shrink-0">
          {language === 'bn' ? 'গবেষণা সংস্করণ ১.০' : 'Research v1.0'}
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          {/* Logo & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-inner shrink-0 border border-emerald-400/30">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  CoastWise <span className="text-emerald-400">AI</span>
                </h1>
                <span className="text-[11px] bg-emerald-900/90 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-700/60 hidden sm:inline-block">
                  {language === 'bn' ? 'উপকূলীয় বাংলাদেশ' : 'Coastal Bangladesh'}
                </span>
              </div>
              <p className="text-xs text-emerald-200/80 hidden xs:block">
                {language === 'bn'
                  ? 'কৃষি সম্প্রসারণ কর্মীদের জন্য লবণাক্ততা (Salinity), বন্যা ও বৃষ্টিপাত প্রমাণ সহায়িকা'
                  : 'Evidence support on salinity, flooding & rainfall for agricultural extension workers'}
              </p>
            </div>
          </div>

          {/* Right Action: Language Switcher */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onToggleLanguage(language === 'en' ? 'bn' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-900 hover:bg-emerald-800 text-emerald-100 border border-emerald-700/70 transition-colors cursor-pointer shadow-sm"
              title="Toggle language between English and Bangla"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language === 'en' ? 'বাংলা সংস্করণ' : 'English Mode'}</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs (Priority 3 & 8) */}
        <nav className="flex items-center gap-1 mt-3 pt-2 border-t border-emerald-900/60 overflow-x-auto no-scrollbar text-xs">
          <button
            onClick={() => onChangeTab('advisor')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'advisor'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-emerald-200/80 hover:text-white hover:bg-emerald-900/50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'পরামর্শ অনুসন্ধান' : 'Advisor Tool'}</span>
          </button>

          <button
            onClick={() => onChangeTab('crop_compare')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'crop_compare'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-emerald-200/80 hover:text-white hover:bg-emerald-900/50'
            }`}
          >
            <Scale className="w-3.5 h-3.5 text-emerald-300" />
            <span>{language === 'bn' ? 'ফসল ও ব্যয় তুলনা' : 'Crop & Cost Comparison'}</span>
          </button>

          <button
            onClick={() => onChangeTab('demos')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'demos'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-emerald-200/80 hover:text-white hover:bg-emerald-900/50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>{language === 'bn' ? 'নমুনা পরিস্থিতি (৫টি)' : 'Sample Scenarios (5)'}</span>
          </button>

          <button
            onClick={() => onChangeTab('sheet')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'sheet'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-emerald-200/80 hover:text-white hover:bg-emerald-900/50'
            }`}
          >
            <span>📄</span>
            <span>{language === 'bn' ? 'কৃষক পরামর্শ পত্র' : 'Farmer Advisory Sheet'}</span>
            {hasResult && (
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
            )}
          </button>

          <button
            onClick={() => onChangeTab('validation')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'validation'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-emerald-200/80 hover:text-white hover:bg-emerald-900/50'
            }`}
          >
            <span>🛡️</span>
            <span>{language === 'bn' ? 'যাচাই ও সুরক্ষা' : 'Evidence & Validation'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
