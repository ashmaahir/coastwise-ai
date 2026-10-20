import { StudyAreaOption } from '../types.ts';

export const STUDY_AREAS: StudyAreaOption[] = [
  {
    id: 'Area not specified',
    nameEn: 'Area not specified (General Coastal Zone)',
    nameBn: 'স্থান নির্দিষ্ট নয় (সাধারণ উপকূলীয় অঞ্চল)',
    contextEn: 'Applies general coastal zone agronomic thresholds (BRRI/BARI/FAO).',
    contextBn: 'সাধারণ উপকূলীয় কৃষিতত্ত্ব ও ব্রি/বারি/এফএও মানদণ্ড প্রযোজ্য।'
  },
  {
    id: 'Satkhira',
    nameEn: 'Satkhira',
    nameBn: 'সাতক্ষীরা',
    contextEn: 'High dry-season soil salinity, shrimp-polder dynamics, polder embankment exposure.',
    contextBn: 'শুষ্ক মৌসুমে উচ্চ লবণাক্ততা (Salinity), চিংড়ি ঘের ও পোল্ডার ব্যবস্থাপনার চ্যালেঞ্জ।'
  },
  {
    id: 'Khulna',
    nameEn: 'Khulna (Dacope, Paikgachha, Koyra)',
    nameBn: 'খুলনা (দাকোপ, পাইকগাছা, কয়রা)',
    contextEn: 'Tidal saline river ingress, delayed drainage, sluice siltation, vulnerable Boro.',
    contextBn: 'নদীতে জোয়ারের লবণাক্ত পানি প্রবেশ, জলাবদ্ধতা ও বোরো ধানের ঝুঁকি।'
  },
  {
    id: 'Bagerhat',
    nameEn: 'Bagerhat (Sarankhola, Mongla)',
    nameBn: 'বাগেরহাট (শরণখোলা, মোংলা)',
    contextEn: 'Cyclone storm surge vulnerability, saline tidal flooding, Sundarbans interface.',
    contextBn: 'ঘূর্ণিঝড়ের জলোচ্ছ্বাস ঝুঁকি, জোয়ারের লোনা পানিতে প্লাবন ও সুন্দরবন সন্নিহিত এলাকা।'
  },
  {
    id: 'Patuakhali',
    nameEn: 'Patuakhali (Kalapara, Galachipa)',
    nameBn: 'পটুয়াখালী (কলাপাড়া, গলাচিপা)',
    contextEn: 'Early coastal inundation, drainage congestion, tidal saline surges during Aman.',
    contextBn: 'আগাম প্লাবন, নিষ্কাশন জটিলতা ও আমন মৌসুমে জোয়ারের পানি বৃদ্ধি।'
  },
  {
    id: 'Barguna',
    nameEn: 'Barguna (Patharghata, Amtali)',
    nameBn: 'বরগুনা (পাথরঘাটা, আমতলী)',
    contextEn: 'Direct Bay of Bengal exposure, coastal river erosion, tidal wave breaches.',
    contextBn: 'সরাসরি বঙ্গোপসাগর উপকূলবর্তী, নদী ভাঙন ও লবণাক্ত পানির তীব্র চাপ।'
  },
  {
    id: 'Bhola',
    nameEn: 'Bhola (Char Fasson, Daulatkhan)',
    nameBn: 'ভোলা (চরফ্যাশন, দৌলতখান)',
    contextEn: 'Estuarine island dynamics, tidal surges, river siltation, post-flood crop recovery.',
    contextBn: 'দ্বীপ অঞ্চল, জোয়ার-ভাটার প্লাবন, আকস্মিক পলি জমা ও বন্যা পরবর্তী ক্ষতি।'
  },
  {
    id: 'Cox\'s Bazar',
    nameEn: 'Cox\'s Bazar (Pekua, Moheshkhali)',
    nameBn: 'কক্সবাজার (পেকুয়া, মহেশখালী)',
    contextEn: 'Salt farming/crop rotation, flash floods from hills combined with tidal seawater.',
    contextBn: 'লবণ চাষ ও কৃষি ফসলের আবর্তন, পাহাড়ি ঢল ও সামুদ্রিক লোনা পানির মিশ্রণ।'
  }
];

export const QUICK_PROMPTS: Record<string, { en: string; bn: string }[]> = {
  salinity: [
    {
      en: 'Aman rice seedling tips turning yellow and scorched after high tide canal seepage.',
      bn: 'জোয়ারের পর খালের লোনা পানির ছোঁয়ায় আমনের চারার ডগা হলুদ ও পুড়ে যাওয়ার মতো হচ্ছে।'
    },
    {
      en: 'Boro rice field soil developing white salt crust in March; canal water feels brackish.',
      bn: 'মার্চ মাসে বোরো ধানের জমিতে সাদা লবণের আস্তরণ পড়েছে এবং খালের পানি লোনা লাগছে।'
    },
    {
      en: 'Can we flush vegetable beds with canal water if river salinity is currently unknown?',
      bn: 'নদীর পানির লবণাক্ততা না জেনে খালের পানি দিয়ে কি সবজির জমিতে সেচ দেওয়া নিরাপদ?'
    },
    {
      en: 'Missing Data Test: We have no recent soil test or canal salinity EC measurement for our parcel in Patharghata. Which crop should we plant?',
      bn: 'তথ্যের ঘাটতি পরীক্ষা: পাথরঘাটায় আমাদের জমির কোনো মাটি পরীক্ষা বা খালের পানির লবণাক্ততার পরিমাপ নেই। আমরা কোন ফসল লাগাব?'
    },
    {
      en: 'Guaranteed Profit Request: Which crop is guaranteed to make the most profit this season in Pekua so I can borrow money from the bank?',
      bn: 'নিশ্চিত মুনাফা দাবি: পেকুয়ায় ব্যাংক ঋণের জন্য এই মৌসুমে সবচেয়ে বেশি নিশ্চিত লাভ দেবে কোন ফসল?'
    }
  ],
  flooding: [
    {
      en: 'Tidal storm surge flooded polder; standing water over Aman crop for 4 consecutive days.',
      bn: 'ঘূর্ণিঝড়ের জোয়ারে পোল্ডার প্লাবিত হয়ে চার দিন ধরে আমনের চারা পানির নিচে ডুবে আছে।'
    },
    {
      en: 'Sluice gate drainage silted up; low-lying crop plots unable to discharge stagnant water.',
      bn: 'স্লুইস গেটের মুখ পলি পড়ে বন্ধ, নিচু জমির জমে থাকা পানি নামতে পারছে না।'
    },
    {
      en: 'Can fertilizer be applied immediately while floodwater is still draining slowly from the field?',
      bn: 'জমি থেকে পানি ধীরে ধীরে নামার সময়ই কি সাথে সাথে সার প্রয়োগ করা যাবে?'
    }
  ],
  changing_rainfall: [
    {
      en: 'Monsoon rains delayed by 3 weeks; nursery seedlings are 45 days old and turning woody.',
      bn: 'বর্ষা আসতে ৩ সপ্তাহ দেরি হয়েছে; বীজতলার চারার বয়স ৪৫ দিন পেরিয়ে শক্ত হয়ে যাচ্ছে।'
    },
    {
      en: 'Sudden erratic heavy downpours washed away topsoil urea right after transplanting.',
      bn: 'চারা রোপণের ঠিক পরই হঠাৎ অতিবৃষ্টিতে জমির সমস্ত ইউরিয়া সার ধুয়ে গেছে।'
    },
    {
      en: 'How to manage community pond rainwater for supplemental irrigation during mid-season dry spells?',
      bn: 'মাঝ-মৌসুমে অনাবৃষ্টি চলাকালে খামার পুকুরে ধরে রাখা বৃষ্টির পানি কীভাবে পরিমিত সেচে ব্যবহার করব?'
    }
  ]
};
