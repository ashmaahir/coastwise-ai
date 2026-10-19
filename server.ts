
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

// --------------------------------------------------
// AI configuration
// --------------------------------------------------

const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

// These are external reference pages, not live data
// sources queried by this application.
const referenceSources = [
  {
    title: 'BARC Crop Zoning Information System',
    organization: 'Bangladesh Agricultural Research Council (BARC)',
    url: 'https://czis.cropzoning.gov.bd/',
    whatItSupports:
      'External reference for crop zoning and general suitability information. This application does not query its live data.',
    whatItSupportsBn:
      'ফসল জোনিং ও সাধারণ উপযোগিতা যাচাইয়ের বাহ্যিক উৎস। অ্যাপটি এখান থেকে সরাসরি তথ্য সংগ্রহ করে না।',
    notes: 'External reference; not live-verified by this application.',
    isVerified: false,
  },
  {
    title: 'BAMIS Agricultural Advisories',
    organization: 'Bangladesh Department of Agricultural Extension',
    url: 'https://www.bamis.gov.bd/en/advisory/',
    whatItSupports:
      'External reference for agricultural weather advisories. No live advisory is retrieved by this application.',
    whatItSupportsBn:
      'কৃষি আবহাওয়ার পরামর্শ দেখার বাহ্যিক উৎস। অ্যাপটি এখান থেকে সরাসরি পূর্বাভাস সংগ্রহ করে না।',
    notes: 'External reference; check the latest bulletin separately.',
    isVerified: false,
  },
  {
    title: 'Bangladesh: Impact of floods on agriculture and livelihoods',
    organization: 'United Nations / Food and Agriculture Organization',
    url: 'https://bangladesh.un.org/en/273221-bangladesh-diem-data-emergencies-floods-bangladesh-impact-floods-agriculture-and-livelihoods',
    whatItSupports:
      'Historical flood-impact and agricultural livelihood context. It is not a live flood warning or a source for soil salinity thresholds.',
    whatItSupportsBn:
      'বন্যার প্রভাব ও কৃষিজীবিকার ঐতিহাসিক প্রেক্ষাপট। এটি লাইভ বন্যা সতর্কতা বা মাটির লবণাক্ততার সীমার উৎস নয়।',
    notes: 'External reference; this application does not query the report.',
    isVerified: false,
  },
];

// --------------------------------------------------
// Safe fallback response
// --------------------------------------------------

function getFallbackResponse(
  topic: string,
  studyArea: string,
  question: string,
) {
  const isBn = true;

  let summary =
    'This is a preliminary evidence-review response, not a farm-specific recommendation. Local measurements and current official advisories are needed before making a crop-management decision.';

  let summaryBn =
    'এটি প্রাথমিক তথ্য পর্যালোচনা, নির্দিষ্ট জমির জন্য সরাসরি কৃষি নির্দেশনা নয়। চাষের সিদ্ধান্তের আগে স্থানীয় পরিমাপ ও বর্তমান সরকারি কৃষি পরামর্শ যাচাই করতে হবে।';

  let evidenceSupports = [
    'The application has not measured field conditions or retrieved live local agricultural data.',
    'General information alone cannot establish crop suitability, expected yield, or financial return for an individual plot.',
  ];

  let evidenceSupportsBn = [
    'অ্যাপটি জমির অবস্থা মাপেনি এবং স্থানীয় কৃষি তথ্য লাইভ সংগ্রহ করেনি।',
    'সাধারণ তথ্য দিয়ে নির্দিষ্ট জমির ফসল উপযোগিতা, ফলন বা আর্থিক আয় নিশ্চিত করা যায় না।',
  ];

  let uncertainties = [
    'Current field measurements and recent local observations are unavailable.',
    'The appropriate intervention depends on local conditions and qualified agricultural assessment.',
  ];

  let uncertaintiesBn = [
    'বর্তমান মাঠপর্যায়ের পরিমাপ ও সাম্প্রতিক স্থানীয় পর্যবেক্ষণ পাওয়া যায়নি।',
    'উপযুক্ত পদক্ষেপ স্থানীয় পরিস্থিতি ও কৃষি বিশেষজ্ঞের মূল্যায়নের ওপর নির্ভরশীল।',
  ];

  let adaptationOptions = [
    {
      title: 'Verify local conditions before acting',
      titleBn: 'পদক্ষেপ নেওয়ার আগে স্থানীয় অবস্থা যাচাই করুন',
      details:
        'Record the field location, crop and growth stage, recent weather, water access, drainage, and any available soil or water test results. Discuss the findings with a local agricultural extension officer.',
      detailsBn:
        'জমির অবস্থান, ফসল ও বৃদ্ধির পর্যায়, সাম্প্রতিক আবহাওয়া, পানির প্রাপ্যতা, নিষ্কাশন এবং মাটি বা পানির পরীক্ষার ফল নথিভুক্ত করে স্থানীয় কৃষি কর্মকর্তার সঙ্গে আলোচনা করুন।',
      targetExpert: 'Local DAE agricultural extension officer / SAAO',
    },
  ];

  let additionalInfoNeeded = [
    'Specific location and recent field observations.',
    'Crop name, variety if known, and current growth stage.',
    'Relevant soil, irrigation-water, drainage, or weather observations.',
  ];

  let additionalInfoNeededBn = [
    'নির্দিষ্ট অবস্থান ও সাম্প্রতিক মাঠ পর্যবেক্ষণ।',
    'ফসলের নাম, জানা থাকলে জাত এবং বর্তমান বৃদ্ধির পর্যায়।',
    'প্রাসঙ্গিক মাটি, সেচের পানি, নিষ্কাশন বা আবহাওয়ার তথ্য।',
  ];

  let farmerSpeakingPoints = [
    'This tool has not tested your field or verified current local conditions.',
    'Please check local conditions and discuss the options with an agricultural extension officer before spending money on inputs.',
  ];

  let farmerSpeakingPointsBn = [
    'এই টুল আপনার জমি পরীক্ষা করেনি বা বর্তমান স্থানীয় অবস্থা যাচাই করেনি।',
    'বীজ, সার বা অন্য উপকরণ কেনার আগে স্থানীয় অবস্থা যাচাই করে কৃষি কর্মকর্তার সঙ্গে আলোচনা করুন।',
  ];

  if (topic === 'salinity') {
    summary =
      'Soil and irrigation-water salinity can affect crop establishment and growth. The severity at a particular field cannot be determined without suitable local measurements.';
    summaryBn =
      'মাটি ও সেচের পানির লবণাক্ততা ফসলের বৃদ্ধি ও প্রতিষ্ঠায় প্রভাব ফেলতে পারে। স্থানীয়ভাবে উপযুক্ত পরিমাপ ছাড়া নির্দিষ্ট জমির লবণাক্ততার মাত্রা নির্ধারণ করা যায় না।';

    evidenceSupports = [
      'Soil and irrigation-water salinity are relevant factors when assessing coastal agricultural conditions.',
      'General crop or variety information does not replace measurements from the specific field and water source.',
    ];

    evidenceSupportsBn = [
      'উপকূলীয় কৃষির অবস্থা মূল্যায়নে মাটি ও সেচের পানির লবণাক্ততা গুরুত্বপূর্ণ বিষয়।',
      'ফসল বা জাত সম্পর্কে সাধারণ তথ্য নির্দিষ্ট জমি ও পানির উৎসের পরীক্ষা প্রতিস্থাপন করতে পারে না।',
    ];

    uncertainties = [
      'Field soil electrical conductivity (EC) is not available.',
      'Irrigation-water salinity and seasonal variation have not been measured.',
      'Drainage and the field history are unknown.',
    ];

    uncertaintiesBn = [
      'জমির মাটির বৈদ্যুতিক পরিবাহিতা (EC) পরীক্ষার ফল পাওয়া যায়নি।',
      'সেচের পানির লবণাক্ততা ও মৌসুমি পরিবর্তন মাপা হয়নি।',
      'জমির নিষ্কাশন ও পূর্ববর্তী পরিস্থিতির তথ্য অজানা।',
    ];

    adaptationOptions = [
      {
        title: 'Arrange local soil and water assessment',
        titleBn: 'স্থানীয় মাটি ও পানির অবস্থা পরীক্ষা করুন',
        details:
          'Ask a local agricultural extension officer or appropriate testing service how to obtain reliable soil and irrigation-water salinity measurements. Discuss any crop choice only after reviewing the results.',
        detailsBn:
          'স্থানীয় কৃষি কর্মকর্তা বা উপযুক্ত পরীক্ষাসেবা থেকে মাটি ও সেচের পানির লবণাক্ততার নির্ভরযোগ্য পরিমাপ নেওয়ার পদ্ধতি জেনে নিন। ফলাফল পর্যালোচনার পর ফসল নির্বাচন নিয়ে আলোচনা করুন।',
        targetExpert: 'Local DAE extension officer / appropriate soil testing service',
      },
    ];

    additionalInfoNeeded = [
      'Soil EC test result and sampling location.',
      'Irrigation-water source and its test result, if available.',
      'Drainage conditions, season, crop and growth stage.',
    ];

    additionalInfoNeededBn = [
      'মাটির EC পরীক্ষার ফল ও নমুনা সংগ্রহের স্থান।',
      'সেচের পানির উৎস এবং সম্ভব হলে পানির পরীক্ষার ফল।',
      'নিষ্কাশনের অবস্থা, মৌসুম, ফসল ও বৃদ্ধির পর্যায়।',
    ];
  } else if (topic === 'flooding') {
    summary =
      'Flooding and prolonged waterlogging can damage crops. The appropriate response depends on water depth, duration, water quality, crop stage, and drainage conditions.';
    summaryBn =
      'বন্যা ও দীর্ঘস্থায়ী জলাবদ্ধতায় ফসলের ক্ষতি হতে পারে। উপযুক্ত পদক্ষেপ পানির গভীরতা, স্থায়িত্ব, পানির গুণমান, ফসলের পর্যায় ও নিষ্কাশনের অবস্থার ওপর নির্ভর করে।';

    evidenceSupports = [
      'Historical flood assessments document agricultural and livelihood impacts from flooding in Bangladesh.',
      'Historical reports do not establish the present water depth, local flood risk, or recovery needs of a specific field.',
    ];

    evidenceSupportsBn = [
      'বাংলাদেশে বন্যার কারণে কৃষি ও জীবিকার ক্ষয়ক্ষতি ঐতিহাসিক মূল্যায়নে নথিভুক্ত হয়েছে।',
      'ঐতিহাসিক প্রতিবেদন নির্দিষ্ট জমির বর্তমান পানির গভীরতা, বন্যার ঝুঁকি বা পুনরুদ্ধারের প্রয়োজন নির্ধারণ করে না।',
    ];

    uncertainties = [
      'Current water depth, duration, and water quality are unknown.',
      'The crop and its growth stage have not been specified sufficiently for field-specific guidance.',
      'Local drainage and official warnings have not been checked live.',
    ];

    uncertaintiesBn = [
      'বর্তমান পানির গভীরতা, স্থায়িত্ব ও পানির গুণমান জানা নেই।',
      'নির্দিষ্ট জমির পরামর্শ দেওয়ার জন্য ফসল ও বৃদ্ধির পর্যায়ের যথেষ্ট তথ্য নেই।',
      'স্থানীয় নিষ্কাশন ও সরকারি সতর্কতা লাইভ যাচাই করা হয়নি।',
    ];

    adaptationOptions = [
      {
        title: 'Assess flood conditions and seek local advice',
        titleBn: 'বন্যার অবস্থা মূল্যায়ন করে স্থানীয় পরামর্শ নিন',
        details:
          'Record water depth and duration, crop stage, and visible damage if safe. Consult the local agricultural extension office before applying fertilizer or taking costly recovery measures.',
        detailsBn:
          'নিরাপদ হলে পানির গভীরতা ও স্থায়িত্ব, ফসলের পর্যায় এবং দৃশ্যমান ক্ষতি নথিভুক্ত করুন। সার প্রয়োগ বা ব্যয়বহুল পুনরুদ্ধার ব্যবস্থা নেওয়ার আগে স্থানীয় কৃষি অফিসের পরামর্শ নিন।',
        targetExpert: 'Local DAE extension officer',
      },
    ];
  } else if (
    topic === 'changing_rainfall' ||
    /rain|rainfall|drought|খরা|বৃষ্টি|অনাবৃষ্টি/i.test(question)
  ) {
    summary =
      'Changing rainfall can affect sowing, transplanting, soil moisture, and farm operations. This application has no live, location-specific weather forecast.';
    summaryBn =
      'বৃষ্টিপাতের পরিবর্তন বপন, চারা রোপণ, মাটির আর্দ্রতা ও কৃষিকাজে প্রভাব ফেলতে পারে। এই অ্যাপে নির্দিষ্ট এলাকার লাইভ আবহাওয়ার পূর্বাভাস নেই।';

    evidenceSupports = [
      'Rainfall timing and soil moisture are relevant to crop management.',
      'A local forecast and field conditions are needed before making weather-sensitive farming decisions.',
    ];

    evidenceSupportsBn = [
      'ফসল ব্যবস্থাপনায় বৃষ্টির সময় ও মাটির আর্দ্রতা গুরুত্বপূর্ণ।',
      'আবহাওয়ার ওপর নির্ভরশীল কৃষিকাজের আগে স্থানীয় পূর্বাভাস ও মাঠের অবস্থা যাচাই করা প্রয়োজন।',
    ];
  }

  const areaText =
    studyArea && studyArea !== 'Area not specified'
      ? studyArea
      : 'স্থান নির্দিষ্ট করা হয়নি';

  return {
    summary,
    summaryBn,
    evidenceSupports,
    evidenceSupportsBn,
    uncertainties,
    uncertaintiesBn,
    adaptationOptions,
    additionalInfoNeeded,
    additionalInfoNeededBn,
    sources: referenceSources,
    farmerSpeakingPoints,
    farmerSpeakingPointsBn,
    isFallback: true,
    modelUsed: 'safe-local-fallback',
    disclaimer:
      'Early research prototype — not field-validated. Not an official advisory or emergency warning service.',
    dataStatus: {
      studyArea: areaText,
      questionProvided: Boolean(question.trim()),
      liveWeatherConnected: false,
      liveMarketPricesConnected: false,
      liveSoilMeasurementsConnected: false,
      sourcesLiveChecked: false,
    },
  };
}

// --------------------------------------------------
// Gemini response schema
// --------------------------------------------------

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    summary: { type: Type.STRING },
    summaryBn: { type: Type.STRING },
    evidenceSupports: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    evidenceSupportsBn: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    uncertainties: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    uncertaintiesBn: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    adaptationOptions: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          titleBn: { type: Type.STRING },
          details: { type: Type.STRING },
          detailsBn: { type: Type.STRING },
          targetExpert: { type: Type.STRING },
        },
        required: [
          'title',
          'titleBn',
          'details',
          'detailsBn',
          'targetExpert',
        ],
      },
    },
    additionalInfoNeeded: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    additionalInfoNeededBn: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    farmerSpeakingPoints: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    farmerSpeakingPointsBn: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
  },
  required: [
    'summary',
    'summaryBn',
    'evidenceSupports',
    'evidenceSupportsBn',
    'uncertainties',
    'uncertaintiesBn',
    'adaptationOptions',
    'additionalInfoNeeded',
    'additionalInfoNeededBn',
    'farmerSpeakingPoints',
    'farmerSpeakingPointsBn',
  ],
};

// --------------------------------------------------
// API endpoint
// --------------------------------------------------

app.post('/api/analyze', async (req, res) => {
  const body = req.body ?? {};

  const topic =
    typeof body.topic === 'string' ? body.topic : '';

  const studyArea =
    typeof body.studyArea === 'string'
      ? body.studyArea
      : 'Area not specified';

  const question =
    typeof body.question === 'string' ? body.question : '';

  const language =
    body.language === 'en' ? 'en' : 'bn';

  const allowedTopics = [
    'salinity',
    'flooding',
    'changing_rainfall',
  ];

  if (!allowedTopics.includes(topic)) {
    return res.status(400).json({
      error: 'Please select a supported topic.',
    });
  }

  if (studyArea.length > 300 || question.length > 3000) {
    return res.status(400).json({
      error: 'The study area or question is too long.',
    });
  }

  const fallback = getFallbackResponse(
    topic,
    studyArea,
    question,
  );

  // No API key: return a conservative fallback.
  if (!ai) {
    return res.json({
      ...fallback,
      language,
    });
  }

  try {
    const systemInstruction = `
You are CoastWise AI, an early research prototype for
agricultural evidence review in coastal Bangladesh.

SAFETY AND EVIDENCE RULES:
- You are not a farmer's official adviser or an emergency warning service.
- Do not claim to have measured soil, water, rainfall, or market prices.
- This application has no live weather, market-price, soil-EC,
  water-EC, or crop-zoning API integration.
- Do not invent citations, publications, research findings, numerical
  thresholds, yields, costs, or probabilities.
- Do not promise profits or identify a guaranteed most-profitable crop.
- Do not give precise fertilizer doses, pesticide instructions,
  or field-specific crop prescriptions without adequate evidence.
- Distinguish general information from missing local measurements.
- Treat AI-generated claims as unverified until checked against
  the relevant original source.
- Recommend consulting a qualified local agricultural extension
  officer when field-specific decisions are needed.
- Provide clear, simple Bangla and English.
- Do not claim that any source was opened, checked, or queried live.
- Never imply that a reference portal's data has been integrated
  into this application.
- If information is missing, state the gap instead of guessing.
- Do not make up a source to support a claim.
- Do not include any source list in your response; the server adds
  fixed external reference links separately.
`;

    const userPrompt = `
TOPIC: ${topic}
STUDY AREA: ${studyArea}
LANGUAGE PREFERENCE: ${language}
USER QUESTION: ${question || 'General coastal agriculture question'}

Return a structured response with:
1. A cautious summary in English and easy Bangla.
2. What general evidence supports, without inventing specific findings.
3. What remains unknown for this particular location.
4. One or two cautious options to discuss with a local agricultural expert.
5. Additional local information needed.
6. Short speaking points in English and easy Bangla.

Avoid specific agronomic prescriptions unless directly supported.
Do not guarantee crop suitability, yield, recovery, or financial returns.
Do not claim that current official advisories or field measurements
have been checked.
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: userPrompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema,
        temperature: 0.2,
      },
    });

    const output = response.text;

    if (!output) {
      throw new Error('Empty AI response');
    }

    const parsed = JSON.parse(output);

    // The model cannot supply its own source-verification status.
    // Only fixed external reference links are returned.
    return res.json({
      ...parsed,
      sources: referenceSources,
      isFallback: false,
      modelUsed: 'gemini-3.8-flash',
      language,
      disclaimer:
        'AI-generated preliminary research response. Claims and external references have not been independently verified by this application. Not field-validated; not an official advisory or emergency warning service.',
      dataStatus: {
        liveWeatherConnected: false,
        liveMarketPricesConnected: false,
        liveSoilMeasurementsConnected: false,
        sourcesLiveChecked: false,
      },
    });
  } catch (error) {
    console.error('AI generation failed; using fallback:', error);

    return res.json({
      ...fallback,
      isFallback: true,
      modelUsed: 'safe-local-fallback',
      language,
    });
  }
});

// --------------------------------------------------
// Health check
// --------------------------------------------------

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    hasGeminiKey: Boolean(apiKey),
    liveWeatherConnected: false,
    liveMarketPricesConnected: false,
    liveSoilMeasurementsConnected: false,
    sourcesLiveChecked: false,
    timestamp: new Date().toISOString(),
  });
});

// --------------------------------------------------
// Frontend / Vite
// --------------------------------------------------

async function startServer() {
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    const { createServer: createViteServer } = await import('vite');

    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });

    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));

    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(
      `CoastWise AI server running on http://0.0.0.0:${PORT}`,
    );
  });
}

startServer().catch((error) => {
  console.error('Failed to start CoastWise AI:', error);
  process.exit(1);
});
