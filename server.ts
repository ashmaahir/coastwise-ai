import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = Number(process.env.PORT) || 3000;
app.use(express.json({ limit: '1mb' }));

const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) ai = new GoogleGenAI({ apiKey });

// Retry temporary Gemini 503 availability errors twice; other errors are not retried.
async function retryOn503<T>(operation: () => Promise<T>, maxRetries = 2): Promise<T> {
  for (let attempt = 0; ; attempt++) {
    try {
      return await operation();
    } catch (error) {
      const status = (error as { status?: number })?.status;
      if (status !== 503 || attempt >= maxRetries) throw error;
      const delayMs = 1000 * 2 ** attempt;
      console.warn(`Gemini returned 503; retrying in ${delayMs}ms (retry ${attempt + 1}/${maxRetries})`);
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }
}

const referenceSources = [
  {
    title: 'BARC Crop Zoning Information System',
    organization: 'Bangladesh Agricultural Research Council (BARC)',
    url: 'https://czis.cropzoning.gov.bd/',
    whatItSupports: 'External reference for crop zoning and general suitability information. This application does not query its live data.',
    whatItSupportsBn: 'ফসল জোনিং ও সাধারণ উপযোগিতা যাচাইয়ের বাহ্যিক উৎস। অ্যাপটি এখান থেকে সরাসরি তথ্য সংগ্রহ করে না।',
    notes: 'External reference; not live-verified by this application.', isVerified: false,
  },
  {
    title: 'BAMIS Agricultural Advisories',
    organization: 'Bangladesh Department of Agricultural Extension',
    url: 'https://www.bamis.gov.bd/en/advisory/',
    whatItSupports: 'External reference for agricultural weather advisories. No live advisory is retrieved by this application.',
    whatItSupportsBn: 'কৃষি আবহাওয়ার পরামর্শ দেখার বাহ্যিক উৎস। অ্যাপটি এখান থেকে সরাসরি পূর্বাভাস সংগ্রহ করে না।',
    notes: 'External reference; check the latest bulletin separately.', isVerified: false,
  },
  {
    title: 'Bangladesh: Impact of floods on agriculture and livelihoods',
    organization: 'United Nations / Food and Agriculture Organization',
    url: 'https://bangladesh.un.org/en/273221-bangladesh-diem-data-emergencies-floods-bangladesh-impact-floods-agriculture-and-livelihoods',
    whatItSupports: 'Historical flood-impact and agricultural livelihood context. It is not a live flood warning or a source for soil salinity thresholds.',
    whatItSupportsBn: 'বন্যার প্রভাব ও কৃষিজীবিকার ঐতিহাসিক প্রেক্ষাপট। এটি লাইভ বন্যা সতর্কতা বা মাটির লবণাক্ততার সীমার উৎস নয়।',
    notes: 'External reference; this application does not query the report.', isVerified: false,
  },
];

function getFallbackResponse(topic: string, studyArea: string, question: string) {
  let summary = 'This is a preliminary evidence-review response, not a farm-specific recommendation. Local measurements and current official advisories are needed before making a crop-management decision.';
  let summaryBn = 'এটি প্রাথমিক তথ্য পর্যালোচনা, নির্দিষ্ট জমির জন্য সরাসরি কৃষি নির্দেশনা নয়। চাষের সিদ্ধান্তের আগে স্থানীয় পরিমাপ ও বর্তমান সরকারি কৃষি পরামর্শ যাচাই করতে হবে।';
  let evidenceSupports = ['The application has not measured field conditions or retrieved live local agricultural data.', 'General information alone cannot establish crop suitability, expected yield, or financial return for an individual plot.'];
  let evidenceSupportsBn = ['অ্যাপটি জমির অবস্থা মাপেনি এবং স্থানীয় কৃষি তথ্য লাইভ সংগ্রহ করেনি।', 'সাধারণ তথ্য দিয়ে নির্দিষ্ট জমির ফসল উপযোগিতা, ফলন বা আর্থিক আয় নিশ্চিত করা যায় না।'];
  let uncertainties = ['Current field measurements and recent local observations are unavailable.', 'The appropriate intervention depends on local conditions and qualified agricultural assessment.'];
  let uncertaintiesBn = ['বর্তমান মাঠপর্যায়ের পরিমাপ ও সাম্প্রতিক স্থানীয় পর্যবেক্ষণ পাওয়া যায়নি।', 'উপযুক্ত পদক্ষেপ স্থানীয় পরিস্থিতি ও কৃষি বিশেষজ্ঞের মূল্যায়নের ওপর নির্ভরশীল।'];
  let adaptationOptions = [{
    title: 'Verify local conditions before acting', titleBn: 'পদক্ষেপ নেওয়ার আগে স্থানীয় অবস্থা যাচাই করুন',
    details: 'Record the field location, crop and growth stage, recent weather, water access, drainage, and any available soil or water test results. Discuss the findings with a local agricultural extension officer.',
    detailsBn: 'জমির অবস্থান, ফসল ও বৃদ্ধির পর্যায়, সাম্প্রতিক আবহাওয়া, পানির প্রাপ্যতা, নিষ্কাশন এবং মাটি বা পানির পরীক্ষার ফল নথিভুক্ত করে স্থানীয় কৃষি কর্মকর্তার সঙ্গে আলোচনা করুন।',
    targetExpert: 'Local DAE agricultural extension officer / SAAO',
  }];
  let additionalInfoNeeded = ['Specific location and recent field observations.', 'Crop name, variety if known, and current growth stage.', 'Relevant soil, irrigation-water, drainage, or weather observations.'];
  let additionalInfoNeededBn = ['নির্দিষ্ট অবস্থান ও সাম্প্রতিক মাঠ পর্যবেক্ষণ।', 'ফসলের নাম, জানা থাকলে জাত এবং বর্তমান বৃদ্ধির পর্যায়।', 'প্রাসঙ্গিক মাটি, সেচের পানি, নিষ্কাশন বা আবহাওয়ার তথ্য।'];
  const farmerSpeakingPoints = ['This tool has not tested your field or verified current local conditions.', 'Please check local conditions and discuss the options with an agricultural extension officer before spending money on inputs.'];
  const farmerSpeakingPointsBn = ['এই টুল আপনার জমি পরীক্ষা করেনি বা বর্তমান স্থানীয় অবস্থা যাচাই করেনি।', 'বীজ, সার বা অন্য উপকরণ কেনার আগে স্থানীয় অবস্থা যাচাই করে কৃষি কর্মকর্তার সঙ্গে আলোচনা করুন।'];

  if (topic === 'salinity') {
    summary = 'Soil and irrigation-water salinity can affect crop establishment and growth. The severity at a particular field cannot be determined without suitable local measurements.';
    summaryBn = 'মাটি ও সেচের পানির লবণাক্ততা ফসলের বৃদ্ধি ও প্রতিষ্ঠায় প্রভাব ফেলতে পারে। স্থানীয়ভাবে উপযুক্ত পরিমাপ ছাড়া নির্দিষ্ট জমির লবণাক্ততার মাত্রা নির্ধারণ করা যায় না।';
    evidenceSupports = ['Soil and irrigation-water salinity are relevant factors when assessing coastal agricultural conditions.', 'General crop or variety information does not replace measurements from the specific field and water source.'];
    evidenceSupportsBn = ['উপকূলীয় কৃষির অবস্থা মূল্যায়নে মাটি ও সেচের পানির লবণাক্ততা গুরুত্বপূর্ণ বিষয়।', 'ফসল বা জাত সম্পর্কে সাধারণ তথ্য নির্দিষ্ট জমি ও পানির উৎসের পরীক্ষা প্রতিস্থাপন করতে পারে না।'];
    uncertainties = ['Field soil electrical conductivity (EC) is not available.', 'Irrigation-water salinity and seasonal variation have not been measured.', 'Drainage and the field history are unknown.'];
    uncertaintiesBn = ['জমির মাটির বৈদ্যুতিক পরিবাহিতা (EC) পরীক্ষার ফল পাওয়া যায়নি।', 'সেচের পানির লবণাক্ততা ও মৌসুমি পরিবর্তন মাপা হয়নি।', 'জমির নিষ্কাশন ও পূর্ববর্তী পরিস্থিতির তথ্য অজানা।'];
    adaptationOptions = [{
      title: 'Arrange local soil and water assessment', titleBn: 'স্থানীয় মাটি ও পানির অবস্থা পরীক্ষা করুন',
      details: 'Ask a local agricultural extension officer or appropriate testing service how to obtain reliable soil and irrigation-water salinity measurements. Discuss any crop choice only after reviewing the results.',
      detailsBn: 'স্থানীয় কৃষি কর্মকর্তা বা উপযুক্ত পরীক্ষাসেবা থেকে মাটি ও সেচের পানির লবণাক্ততার নির্ভরযোগ্য পরিমাপ নেওয়ার পদ্ধতি জেনে নিন। ফলাফল পর্যালোচনার পর ফসল নির্বাচন নিয়ে আলোচনা করুন.',
      targetExpert: 'Local DAE extension officer / appropriate soil testing service',
    }];
    additionalInfoNeeded = ['Soil EC test result and sampling location.', 'Irrigation-water source and its test result, if available.', 'Drainage conditions, season, crop and growth stage.'];
    additionalInfoNeededBn = ['মাটির EC পরীক্ষার ফল ও নমুনা সংগ্রহের স্থান।', 'সেচের পানির উৎস এবং সম্ভব হলে পানির পরীক্ষার ফল।', 'নিষ্কাশনের অবস্থা, মৌসুম, ফসল ও বৃদ্ধির পর্যায়।'];
  } else if (topic === 'flooding') {
    summary = 'Flooding and prolonged waterlogging can damage crops. The appropriate response depends on water depth, duration, water quality, crop stage, and drainage conditions.';
    summaryBn = 'বন্যা ও দীর্ঘস্থায়ী জলাবদ্ধতায় ফসলের ক্ষতি হতে পারে। উপযুক্ত পদক্ষেপ পানির গভীরতা, স্থায়িত্ব, পানির গুণমান, ফসলের পর্যায় ও নিষ্কাশনের অবস্থার ওপর নির্ভর করে।';
    evidenceSupports = ['Historical flood assessments document agricultural and livelihood impacts from flooding in Bangladesh.', 'Historical reports do not establish the present water depth, local flood risk, or recovery needs of a specific field.'];
