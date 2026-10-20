import React, { useState } from 'react';
import { CROP_COMPARISONS, AUTHORITATIVE_EXTERNAL_PORTALS } from '../data/cropComparisonData.ts';
import { CropComparisonItem } from '../types.ts';
import {
  Sprout,
  Droplets,
  Waves,
  Clock,
  ExternalLink,
  ShieldAlert,
  AlertTriangle,
  Coins,
  ChevronRight,
  Info,
  Scale,
  Calendar,
  Layers,
  CheckCircle2,
  FileText,
  BadgeAlert
} from 'lucide-react';

interface CropComparisonViewProps {
  language: 'en' | 'bn';
}

export const CropComparisonView: React.FC<CropComparisonViewProps> = ({ language }) => {
  const [selectedSeason, setSelectedSeason] = useState<'all' | 'boro' | 'aman' | 'rabi'>('all');
  const [activeCropId, setActiveCropId] = useState<string>(CROP_COMPARISONS[0].id);
  const [viewMode, setViewMode] = useState<'grid' | 'cost_table'>('grid');

  const isBn = language === 'bn';

  const filteredCrops = selectedSeason === 'all'
    ? CROP_COMPARISONS
    : CROP_COMPARISONS.filter(c => c.season === selectedSeason);

  const activeCrop = CROP_COMPARISONS.find(c => c.id === activeCropId) || CROP_COMPARISONS[0];

  return (
    <div className="space-y-6">
      {/* Top Banner: Purpose & Non-Field-Validated Notice */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-200">
              <Scale className="w-3.5 h-3.5 text-emerald-700" />
              <span>{isBn ? 'প্রমাণ-ভিত্তিক ফসল তুলনা' : 'Evidence-Grounded Crop Comparison'}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
              {isBn
                ? 'উপকূলীয় জাত ও ফসলের উপযোগিতা, ঝুঁকি ও ব্যয় পর্যালোচনা'
                : 'Coastal Crop Suitability, Agronomic Constraints & Cost Analysis'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              {isBn
                ? 'লবণাক্ততা (Salinity), জলাবদ্ধতা ও পানির প্রাপ্যতার ওপর ভিত্তি করে সরকারি অনুমোদিত জাতগুলোর বাস্তব সীমাবদ্ধতা তুলনা করুন। গবেষণা কেন্দ্রের সহনশীলতার মান কোনো একক খামারের জন্য ফলনের গ্যারান্টি নয়।'
                : 'Compare verified crop parameters (maturity duration, station salinity tolerance, flood limits, and water needs) alongside transparent input-cost models. Research station figures are not individual farm yield guarantees.'}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl shrink-0 text-xs font-semibold">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isBn ? 'বৈশিষ্ট্য কার্ড' : 'Agronomic Profiles'}
            </button>
            <button
              onClick={() => setViewMode('cost_table')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'cost_table'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isBn ? 'ব্যয় ও আয় মডেল' : 'Cost–Return Explorer'}
            </button>
          </div>
        </div>

        {/* Data Status Distinction Banner (Priority 1) */}
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
          <div className="flex items-center gap-1.5 font-bold text-slate-900">
            <Info className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>
              {isBn
                ? 'তথ্যের স্থিতি ও উৎস ব্যবহারের স্বচ্ছতা (Data Status & Methodology):'
                : 'Data Integration Status & Scope Transparency:'}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] leading-relaxed">
            <div className="p-2 bg-white rounded-lg border border-slate-200">
              <span className="font-bold text-emerald-800 block">
                {isBn ? '✅ অন্তর্নির্মিত নিয়ম ও জাতের তথ্য (Integrated Datasets):' : '✅ Integrated Local Engine & Varietal Data:'}
              </span>
              <p className="text-slate-600 mt-0.5">
                {isBn
                  ? 'ব্রি ধান৯৭, ব্রি ধান৯৯, ব্রি ধান৬৭ ও ব্রি২৩ এর সরকারি জাতের প্রোফাইল এবং কৃষি-পরিবেশগত সহনশীলতার নিয়মাবলি সরাসরি এই টুলে সমন্বিত।'
                  : 'Official release profiles for BRRI varieties (#105, #106) and local agro-ecological rules are directly integrated into CoastWise AI.'}
              </p>
            </div>
            <div className="p-2 bg-white rounded-lg border border-slate-200">
              <span className="font-bold text-blue-800 block">
                {isBn ? '🌐 বহিঃস্থ তথ্যসূত্র পোর্টাল (External Reference Portals):' : '🌐 External Reference Portals (Linked for User Verification):'}
              </span>
              <p className="text-slate-600 mt-0.5">
                {isBn
                  ? 'বার্ক ক্রপ জোনিং (CZIS) ও বামিস (BAMIS) পোর্টালের কার্যকর লিংক বিস্তার কর্মীর সরাসরি পরিদর্শনের জন্য দেওয়া হয়েছে; কোনো গোপন অটোমেটিক এপিআই অনুসন্ধান দাবি করা হয় না।'
                  : 'BARC CZIS and BAMIS portals are linked for official extension reference. They are not queried through automated live backend APIs.'}
              </p>
            </div>
          </div>
        </div>

        {/* Sensitivity & Non-Validation Notice (Priority 4 & 7) */}
        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-bold">
              {isBn
                ? 'আর্থিক ঝুঁকি ও অ-যাচাইকৃত সতর্কতা (No Guaranteed Most-Profitable Crop):'
                : 'Economic Sensitivity Notice (No Guaranteed Most-Profitable Crop):'}
            </span>
            <p className="text-[11px] text-amber-900 leading-relaxed">
              {isBn
                ? 'কোস্টওয়াইজ এআই কোনো ফসলকে নিশ্চিত সর্বাধিক লাভজনক আখ্যা দেয় না। সেচ জ্বালানির স্থানীয় ভাড়া, অসময়ের বৃষ্টিপাত এবং ফসলের ভরা মৌসুমে পাইকারি বাজারদরের ওঠানামার কারণে লাভ-ক্ষতির ব্যাপক পরিবর্তন ঘটে। ঋণ নেওয়ার পূর্বে উপজেলা কৃষি অফিস ও স্থানীয় আড়তে বর্তমান দর যাচাই করুন।'
                : 'CoastWise AI strictly avoids labeling any crop as "guaranteed most profitable". Production margins in coastal hazard zones fluctuate widely with diesel pumping tariffs, unseasonal rainstorms, and harvest market gluts. Always verify local rates before committing capital.'}
            </p>
          </div>
        </div>

        {/* Season Filter Buttons */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100 overflow-x-auto no-scrollbar">
          <span className="text-xs font-bold text-slate-500 whitespace-nowrap">
            {isBn ? 'মৌসুম নির্বাচন:' : 'Filter Season:'}
          </span>
          <button
            onClick={() => setSelectedSeason('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              selectedSeason === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isBn ? 'সকল ফসল (৬টি)' : 'All Supported Crops (6)'}
          </button>
          <button
            onClick={() => setSelectedSeason('boro')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              selectedSeason === 'boro'
                ? 'bg-emerald-700 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isBn ? 'বোরো মৌসুম (ধান)' : 'Boro Season (Rice)'}
          </button>
          <button
            onClick={() => setSelectedSeason('aman')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              selectedSeason === 'aman'
                ? 'bg-teal-700 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isBn ? 'আমন মৌসুম (বন্যা পরবর্তী)' : 'Aman Season (Post-Flood)'}
          </button>
          <button
            onClick={() => setSelectedSeason('rabi')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              selectedSeason === 'rabi'
                ? 'bg-amber-700 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isBn ? 'রবি অনাবৃষ্টি (সরিষা/খেসারী)' : 'Rabi Non-Rice (Mustard/Pulse)'}
          </button>
        </div>
      </div>

      {/* VIEW 1: AGRONOMIC PROFILES GRID */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCrops.map((crop) => (
            <div
              key={crop.id}
              className={`bg-white rounded-2xl border transition-all overflow-hidden flex flex-col justify-between shadow-xs ${
                activeCropId === crop.id
                  ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-md'
                  : 'border-slate-200 hover:border-emerald-300'
              }`}
            >
              <div>
                {/* Header */}
                <div className="p-3.5 bg-slate-900 text-white flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                      {isBn ? crop.seasonNameBn : crop.seasonNameEn}
                    </span>
                    <h3 className="text-sm font-bold text-white mt-0.5 leading-snug">
                      {isBn ? crop.nameBn : crop.nameEn}
                    </h3>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                    {isBn ? crop.cropTypeBn : crop.cropTypeEn}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3.5 text-xs">
                  {/* Duration & Salinity Badges */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 space-y-0.5">
                      <div className="flex items-center gap-1 text-[11px] text-slate-500 font-semibold">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{isBn ? 'জীবনকাল' : 'Duration'}</span>
                      </div>
                      <span className="font-extrabold text-slate-900 block text-xs">
                        {isBn ? crop.growingDurationTextBn : crop.growingDurationTextEn}
                      </span>
                    </div>

                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 space-y-0.5">
                      <div className="flex items-center gap-1 text-[11px] text-slate-500 font-semibold">
                        <Droplets className="w-3 h-3 text-amber-500" />
                        <span>{isBn ? 'লবণ সহনশীলতা' : 'Salinity Tol.'}</span>
                      </div>
                      <span className="font-bold text-amber-950 block text-xs">
                        {crop.salinityToleranceCategory === 'high'
                          ? isBn ? 'উচ্চ (চারা অবস্থা)' : 'High (Seedling)'
                          : crop.salinityToleranceCategory === 'moderate'
                          ? isBn ? 'মাঝারি' : 'Moderate'
                          : isBn ? 'কম-মাঝারি' : 'Low-Moderate'}
                      </span>
                    </div>
                  </div>

                  {/* Suitability */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
                      <Sprout className="w-3 h-3 text-emerald-600" />
                      <span>{isBn ? 'উপযোগিতা ও স্থান:' : 'Suitability & Niche:'}</span>
                    </span>
                    <p className="text-[11px] text-slate-600 leading-relaxed bg-emerald-50/40 p-2 rounded-lg border border-emerald-100">
                      {isBn ? crop.suitabilityBn : crop.suitabilityEn}
                    </p>
                  </div>

                  {/* Salinity details with station notice */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-700">
                        {isBn ? 'লবণাক্ততা বৈশিষ্ট্য:' : 'Salinity Tolerance Details:'}
                      </span>
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 border border-amber-200">
                        {isBn ? 'গবেষণাগার পর্যবেক্ষণ' : 'Station Trial Finding'}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {isBn ? crop.salinityToleranceBn : crop.salinityToleranceEn}
                    </p>
                  </div>

                  {/* Flood limitations */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
                      <Waves className="w-3 h-3 text-blue-600" />
                      <span>{isBn ? 'বন্যা ও জলাবদ্ধতার সীমাবদ্ধতা:' : 'Flood / Inundation Limits:'}</span>
                    </span>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {isBn ? crop.floodLimitationBn : crop.floodLimitationEn}
                    </p>
                  </div>

                  {/* Water needs */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
                      <Droplets className="w-3 h-3 text-teal-600" />
                      <span>{isBn ? 'পানির চাহিদা ও সেচ:' : 'Irrigation Water Needs:'}</span>
                    </span>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {isBn ? crop.waterNeedsBn : crop.waterNeedsEn}
                    </p>
                  </div>

                  {/* Key Assumptions */}
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-[10px] text-slate-500 leading-relaxed">
                    <span className="font-semibold text-slate-700 block mb-0.5">
                      {isBn ? 'মূল অনুমিতি (Key Assumptions):' : 'Key Assumptions:'}
                    </span>
                    {isBn ? crop.keyAssumptionsBn : crop.keyAssumptionsEn}
                  </div>
                </div>
              </div>

              {/* Source Footer */}
              <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-500 block truncate">
                    {isBn ? 'তথ্যসূত্র: ' : 'Source: '}{crop.supportingSource.organization}
                  </span>
                  {crop.supportingSource.url ? (
                    <a
                      href={crop.supportingSource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-800 hover:text-emerald-950 hover:underline flex items-center gap-1 text-[11px] truncate group"
                    >
                      <span className="truncate">{crop.supportingSource.title}</span>
                      <ExternalLink className="w-3 h-3 shrink-0 text-emerald-600" />
                    </a>
                  ) : (
                    <span className="font-semibold text-slate-800 text-[11px] truncate block">
                      {crop.supportingSource.title}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setActiveCropId(crop.id);
                    setViewMode('cost_table');
                  }}
                  className="px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[11px] font-bold shrink-0 transition-colors cursor-pointer flex items-center gap-1 shadow-xs"
                >
                  <Coins className="w-3 h-3" />
                  <span>{isBn ? 'ব্যয় দেখুন' : 'Economics'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW 2: INTERACTIVE COST-RETURN EXPLORER (PRIORITY 4) */}
      {viewMode === 'cost_table' && (
        <div className="space-y-5">
          {/* Active Crop Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {CROP_COMPARISONS.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCropId(c.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeCropId === c.id
                    ? 'bg-emerald-700 text-white shadow-sm ring-2 ring-emerald-700/30'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{isBn ? c.nameBn : c.nameEn}</span>
              </button>
            ))}
          </div>

          {/* Active Crop Cost & Return Detailed Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                  {isBn ? activeCrop.seasonNameBn : activeCrop.seasonNameEn}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {isBn ? activeCrop.nameBn : activeCrop.nameEn} — {isBn ? 'উৎপাদন ব্যয় ও সম্ভাব্য আয় বিশ্লেষণ' : 'Input Cost & Net Margin Model'}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  {isBn ? activeCrop.costReturn.bighaUnitBn : activeCrop.costReturn.bighaUnitEn} ({isBn ? 'কৃষি সম্প্রসারণ অধিদপ্তর ও বিআইডিএস সমীক্ষা মডেল' : 'DAE & BIDS Coastal Farm Budget Model'})
                </p>
              </div>

              <div className="text-right bg-slate-800 p-2 rounded-xl border border-slate-700 shrink-0">
                <span className="text-[10px] text-slate-400 block font-semibold">
                  {isBn ? 'মোট আনুমানিক উৎপাদন ব্যয়' : 'Total Est. Production Cost'}
                </span>
                <span className="text-base font-extrabold text-emerald-400">
                  ৳{activeCrop.costReturn.totalCost.toLocaleString()}
                  <span className="text-xs font-normal text-slate-300"> / {isBn ? 'বিঘা' : 'bigha'}</span>
                </span>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-6">
              {/* Cost Inputs Breakdown Table */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                  <Coins className="w-4 h-4 text-emerald-700" />
                  <span>{isBn ? '১. উৎপাদন উপকরণ ও খরচের বিস্তারিত হিসাব (Input Cost Breakdown):' : '1. Itemized Production Inputs & Expenditures:'}</span>
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                    <span className="text-[11px] text-slate-500 block font-semibold">{isBn ? 'বীজ খরচ' : 'Seed Cost'}</span>
                    <span className="text-sm font-extrabold text-slate-900 mt-1 block">৳{activeCrop.costReturn.seedCost.toLocaleString()}</span>
                    <span className="text-[10px] text-slate-400">{isBn ? 'অনুমোদিত বীজ' : 'Certified Seed'}</span>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                    <span className="text-[11px] text-slate-500 block font-semibold">{isBn ? 'জমি তৈরি / চাষ' : 'Land Prep'}</span>
                    <span className="text-sm font-extrabold text-slate-900 mt-1 block">৳{activeCrop.costReturn.landPrepCost.toLocaleString()}</span>
                    <span className="text-[10px] text-slate-400">{isBn ? 'পাওয়ার টিলার' : 'Tillage'}</span>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                    <span className="text-[11px] text-slate-500 block font-semibold">{isBn ? 'সার খরচ' : 'Fertilizers'}</span>
                    <span className="text-sm font-extrabold text-slate-900 mt-1 block">৳{activeCrop.costReturn.fertilizerCost.toLocaleString()}</span>
                    <span className="text-[10px] text-slate-400">{isBn ? 'সুষম মাত্রা' : 'Balanced Dosing'}</span>
                  </div>

                  <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200 text-center">
                    <span className="text-[11px] text-amber-900 block font-semibold">{isBn ? 'সেচ ও জ্বালানি পাম্প' : 'Irrigation Fuel'}</span>
                    <span className="text-sm font-extrabold text-amber-950 mt-1 block">৳{activeCrop.costReturn.irrigationCost.toLocaleString()}</span>
                    <span className="text-[10px] text-amber-700">{isBn ? 'ডিজেল / বিদ্যুৎ' : 'Diesel / Electric'}</span>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center col-span-2 sm:col-span-1">
                    <span className="text-[11px] text-slate-500 block font-semibold">{isBn ? 'শ্রমিক মজুরি' : 'Field Labor'}</span>
                    <span className="text-sm font-extrabold text-slate-900 mt-1 block">৳{activeCrop.costReturn.laborCost.toLocaleString()}</span>
                    <span className="text-[10px] text-slate-400">{isBn ? 'রোপণ, নিড়ানি, মাড়াই' : 'Planting & Harvest'}</span>
                  </div>
                </div>
              </div>

              {/* Yield, Price & Gross/Net Return Calculation Method */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-emerald-700" />
                  <span>{isBn ? '২. ফলন, বিক্রয়মূল্য ও নিট আয়ের সম্ভাব্য পরিসর:' : '2. Estimated Yield, Farmgate Price & Net Return Ranges:'}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-[11px] text-slate-500 block font-semibold">{isBn ? 'প্রত্যাশিত ফলন পরিসর' : 'Expected Yield Range'}</span>
                    <span className="text-sm font-bold text-slate-900 mt-1 block">
                      {activeCrop.costReturn.expectedYieldMin} – {activeCrop.costReturn.expectedYieldMax} {isBn ? activeCrop.costReturn.yieldUnitBn : activeCrop.costReturn.yieldUnitEn}
                    </span>
                    <span className="text-[10px] text-slate-400">{isBn ? 'অনুকূল ব্যবস্থাপনা সাপেক্ষে' : 'Under standard management'}</span>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-[11px] text-slate-500 block font-semibold">{isBn ? 'মাঠের বিক্রয়মূল্য দর' : 'Farmgate Price Range'}</span>
                    <span className="text-sm font-bold text-slate-900 mt-1 block">
                      ৳{activeCrop.costReturn.priceMin} – ৳{activeCrop.costReturn.priceMax} {isBn ? activeCrop.costReturn.priceUnitBn : activeCrop.costReturn.priceUnitEn}
                    </span>
                    <span className="text-[10px] text-slate-400">{isBn ? 'কাটার ভরা মৌসুমের বাজার' : 'Harvest peak wholesale range'}</span>
                  </div>

                  <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                    <span className="text-[11px] text-emerald-900 block font-bold">{isBn ? 'সম্ভাব্য নিট মুনাফা (Net Margin)' : 'Est. Net Return Range'}</span>
                    <span className="text-sm font-extrabold text-emerald-800 mt-1 block">
                      ৳{activeCrop.costReturn.netReturnMin.toLocaleString()} – ৳{activeCrop.costReturn.netReturnMax.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-emerald-700">
                      {isBn ? 'বিঘা প্রতি (সব খরচ বাদ দিয়ে)' : 'Per bigha (after all input expenses)'}
                    </span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-0.5">{isBn ? 'গণনা পদ্ধতি (Calculation Formula):' : 'Calculation Method:'}</span>
                  <p>{isBn ? activeCrop.costReturn.calculationMethodBn : activeCrop.costReturn.calculationMethodEn}</p>
                </div>
              </div>

              {/* Missing or Volatile Variables (Priority 4) */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs">
                  <BadgeAlert className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>
                    {isBn
                      ? '৩. অনুপস্থিত বা পরিবর্তনশীল উপাদানসমূহ (Missing & Volatile Variables):'
                      : '3. Missing & Highly Volatile Variables (Cannot Be Guaranteed Remotely):'}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600">
                  {isBn
                    ? 'কোনো অ্যালগরিদম দূর থেকে নিশ্চিত মুনাফার হিসাব দিতে পারে না কারণ নিচের উপাদানগুলো এলাকা ও দিনভেদে পরিবর্তিত হয়:'
                    : 'The model explains why exact financial return cannot be deterministically locked for an individual farm:'}
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {(isBn ? activeCrop.costReturn.missingOrVolatileVariablesBn : activeCrop.costReturn.missingOrVolatileVariablesEn).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sensitivity Warning (Priority 4) */}
              <div className="p-3 bg-red-50 rounded-xl border border-red-200 text-xs text-red-950 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-bold">
                    {isBn ? 'আর্থিক ঝুঁকি ও সংবেদনশীলতা সতর্কতা:' : 'Sensitivity & Debt Risk Warning:'}
                  </span>
                  <p className="text-[11px] text-red-900 leading-relaxed font-medium">
                    {isBn ? activeCrop.costReturn.sensitivityWarningBn : activeCrop.costReturn.sensitivityWarningEn}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Authoritative External Reference Portals List (Priority 2) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-700" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
              {isBn
                ? 'অনুমোদিত সরকারি তথ্যসূত্র পোর্টালসমূহ (Authoritative Reference Portals)'
                : 'Authoritative Official Reference Portals'}
            </h3>
          </div>
          <span className="text-[10px] text-slate-500 italic">
            {isBn ? 'সরাসরি সরকারি ওয়েবসাইট পরিদর্শনের জন্য কার্যকর লিংক' : 'Working links for extension officer inspection'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          {AUTHORITATIVE_EXTERNAL_PORTALS.map((portal, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors text-xs space-y-1.5"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-800 hover:text-emerald-950 hover:underline flex items-center gap-1.5 group"
                  >
                    <span>{portal.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  </a>
                  <span className="text-[10px] text-slate-500 block">{portal.organization}</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-900 border border-blue-200 shrink-0">
                  {isBn ? 'বহিঃস্থ পোর্টাল' : 'External Portal'}
                </span>
              </div>

              <p className="text-[11px] text-slate-600 leading-relaxed">
                {isBn ? portal.whatItSupportsBn : portal.whatItSupports}
              </p>

              <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-200">
                <span className="font-semibold text-slate-600">{isBn ? 'নোট: ' : 'Status note: '}</span>
                <span>{portal.notes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
