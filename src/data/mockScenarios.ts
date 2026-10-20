import { DemoScenario } from '../types.ts';

export const DEMO_SCENARIOS: DemoScenario[] = [
  {
    id: 'demo-satkhira-saline',
    title: 'Satkhira Polder 1: Dry-Season Salinity & Boro Nursery Distress',
    titleBn: 'সাতক্ষীরা পোল্ডার ১: শুষ্ক মৌসুমে লবণাক্ততা ও বোরো বীজতলার সংকট',
    topic: 'salinity',
    studyArea: 'Satkhira',
    farmerProfile: 'Smallholder rice & seasonal vegetable farmer in Munshiganj Union, Shyamnagar',
    farmerProfileBn: 'মুন্সীগঞ্জ ইউনিয়ন, শ্যামনগর উপজেলার ক্ষুদ্র ধান ও মৌসুমী সবজি চাষি',
    narrativeEn: 'In mid-March, canal irrigation water began tasting brackish as tidal rivers retreated. The farmer observed white crusting along field ridges and noticed newly transplanted seedlings curling at the leaf tips.',
    narrativeBn: 'মার্চের মাঝামাঝি ভাটার সময় খালের পানিতে নোনতা স্বাদ পাওয়া যায়। কৃষক দেখতে পান জমির আইলে সাদা লবণের আস্তরণ এবং সদ্য রোপণ করা চারার ডগা কুঁকড়ে যাচ্ছে।',
    questionPrompt: 'White salt crust appeared on topsoil in March, and Boro nursery seedlings have yellowing tips after irrigation with canal water. Should we continue canal irrigation or stop completely?',
    questionPromptBn: 'মার্চ মাসে জমির ওপর সাদা লবণের আস্তরণ পড়েছে এবং খালের পানি দেওয়ার পর বোরো বীজতলার চারার ডগা হলুদ হয়ে যাচ্ছে। এখন কি খালের পানি দেওয়া চালিয়ে যাব নাকি সম্পূর্ণ বন্ধ রাখব?',
    mockResult: {
      summary: 'Evidence indicates late dry-season (March–April) surface canal water in Satkhira coastal polders frequently rises in salinity due to tidal seawater ingress and high evaporation. Controlled agronomic research (BRRI) confirms that young seedlings and flowering stages are particularly vulnerable to salinity. Note: Research station varietal tolerance figures (e.g. BRRI dhan97 / dhan99) are experimental station findings, NOT an individual farm guarantee; local canal salinity and extension officer advice must be considered.',
      summaryBn: 'প্রমাণ নির্দেশ করে যে মার্চ-এপ্রিল মাসে সাতক্ষীরার উপকূলীয় পোল্ডারে খালের পানির লবণাক্ততা জোয়ারের লোনা পানি প্রবেশ ও তীব্র বাষ্পীভবনের কারণে বৃদ্ধি পায়। ব্রি (BRRI)-র গবেষণায় দেখা গেছে কচি চারা ও ফুল আসার সময় ধান সবচেয়ে বেশি ঝুঁকিপূর্ণ থাকে। গবেষণা কেন্দ্রের জাতের সহনশীলতা কোনো নির্দিষ্ট খামারের নিশ্চয়তা নয়; স্থানীয় পানির লবণাক্ততা ও উপসহকারী কৃষি কর্মকর্তার পরামর্শ বিবেচনা করতে হবে।',
      evidenceSupports: [
        'Controlled varietal trials documented in the BRRI Official Rice Profile for BRRI dhan97 indicate research-station seedling tolerance up to 8–10 dS/m under controlled conditions, with a 152-day maturity [Source: BRRI Rice Profile #105: https://riceprofile.brri.gov.bd/varieties/105]. Note: Variety-level tolerance figures are research station experimental findings and NOT farm-specific advice. Exact irrigation water salinity limits and flowering-stage thresholds [Source needed — not yet verified online; require on-site testing with local SAAO using an EC meter].',
        'BARC Crop Zoning Information System (CZIS) classifies coastal Satkhira as an agro-ecological zone with seasonal dry-season soil salinity constraints [Source: BARC CZIS: https://czis.cropzoning.gov.bd/ - External reference portal].',
        'The FAO/UN DIEM Emergency Assessment (2024) documents that climate hazards and waterlogging cause extensive agricultural input distress and livelihood vulnerability across southern coastal communities [Source: FAO/UN DIEM 2024: https://bangladesh.un.org/en/273221-bangladesh-diem-data-emergencies-floods-bangladesh-impact-floods-agriculture-and-livelihoods. NOTE: This source supports flood/emergency livelihood impact context, NOT soil salinity measurements or thresholds].',
        'Topsoil in coastal polders develops high salt concentration as moisture evaporates during late dry season [Source needed — not yet verified online: regional SRDI survey bulletins; physical testing with an on-site EC meter is mandatory].',
        'Applying organic straw mulch reduces surface evaporation and upward capillary movement of saline groundwater [Claim based on DAE coastal extension guides; verify locally with SAAO].'
      ],
      evidenceSupportsBn: [
        'ব্রি-র সরকারি প্রোফাইল (#১০৫) অনুযায়ী ব্রি ধান৯৭ গবেষণা অবস্থায় চারা পর্যায়ে ৮-১০ ডিএস/মি পর্যন্ত সহ্য করতে পারে [উৎস: ব্রি প্রোফাইল #১০৫]। জাতের সহনশীলতার এই মান গবেষণা কেন্দ্রের পরীক্ষামূলক ফল, কোনো একক খামারের সরাসরি সুপারিশ বা ফলনের নিশ্চয়তা নয়। সেচের পানির সুনির্দিষ্ট মাত্রা [উৎস প্রয়োজন — এখনও অনলাইনে যাচাই করা হয়নি; এসএএও-র সাথে সরাসরি মাঠ পরীক্ষা আবশ্যক]।',
        'বার্ক (BARC) ক্রপ জোনিং ইনফরমেশন সিস্টেম সাতক্ষীরাকে শুষ্ক মৌসুমে লবণাক্ততার ঝুঁকিপূর্ণ কৃষি-পরিবেশ অঞ্চল হিসেবে শ্রেণিবদ্ধ করেছে [উৎস: BARC CZIS: https://czis.cropzoning.gov.bd/]।',
        'এফএও ও জাতিসংঘের DIEM সমীক্ষা (২০২৪) প্রমাণ করে যে উপকূলীয় দুর্যোগে কৃষকের জীবিকা ও কৃষি উপকরণের মারাত্মক সংকট তৈরি হয় [উৎস: FAO/UN DIEM ২০২৪। এটি দুর্যোগ ও জীবিকার প্রেক্ষাপট সমর্থন করে, মাটির লবণের পরিমাপ নয়]।',
        'শুষ্ক মৌসুমে বাষ্পীভবনের কারণে মাটির ওপর লবণের আস্তরণ পড়ে [উৎস প্রয়োজন — অনলাইনে এখনও যাচাই করা হয়নি: এসআরডিআই স্থানীয় প্রতিবেদন; মাঠের ইসি পরীক্ষা আবশ্যক]।',
        'জৈব খড় বা কচুরিপানার মালচিং মাটির আর্দ্রতা ধরে রেখে লবণ ওঠা রোধ করতে সাহায্য করে [ডিএই সাধারণ নির্দেশিকা; এসএএও-র পরামর্শ আবশ্যক]।',
      ],
      uncertainties: [
        'Exact electrical conductivity (EC) of the farmer’s specific irrigation canal today cannot be known without a calibrated on-site EC meter.',
        'Sub-surface soil salinity depth profile (whether salt is restricted to the top 2 cm crust or extends 20 cm into root depth).',
        'Residual pond freshwater volume remaining in the village compound for backup irrigation.'
      ],
      uncertaintiesBn: [
        'আজকের দিনে নির্দিষ্ট খালের পানির সঠিক ইলেকট্রিক্যাল কন্ডাক্টিভিটি (EC) অন-সাইট পরীক্ষা ছাড়া নিশ্চিত করা সম্ভব নয়।',
        'মাটির উপরিভাগের সাদা স্তর কি শুধু উপরের ২ সেন্টিমিটারে সীমাবদ্ধ নাকি শিকড়ের ২০ সেন্টিমিটার গভীর পর্যন্ত ছড়িয়েছে, তা না মেপে নিশ্চিত হওয়া যায় না।',
        'গ্রামে বা বাড়ির পুকুরে জরুরি ব্যবহারের জন্য কতটুকু মিষ্টি পানি অবশিষ্ট আছে।'
      ],
      adaptationOptions: [
        {
          title: 'Immediate Salinity Field Test via SAAO',
          titleBn: 'উপসহকারী কৃষি কর্মকর্তার মাধ্যমে তাৎক্ষণিক পানি ও মাটি পরীক্ষা',
          details: 'Halt raw canal pumping immediately until the local Sub-Assistant Agriculture Officer tests electrical conductivity with a calibrated EC wand before applying to seedlings [Numerical safety threshold: Source needed — not yet verified online].',
          detailsBn: 'উপসহকারী কৃষি কর্মকর্তা এসে ইসি মিটার দিয়ে পরীক্ষা না করা পর্যন্ত খালের পানি দেওয়া সাময়িক স্থগিত রাখুন [সুনির্দিষ্ট সেচ মাত্রা: উৎস প্রয়োজন — এখনও যাচাই করা হয়নি]।',
          targetExpert: 'Upazila Agriculture Office / SAAO'
        },
        {
          title: 'Surface Salt Scraping & Pond Water Flushing',
          titleBn: 'উপরের লবণের আস্তরণ আলতো চেঁছে ফেলা ও পুকুরের মিষ্টি পানি প্রয়োগ',
          details: 'If topsoil has a dry, hard white crust, lightly scrape the surface crust off ditch ridges to prevent it washing directly into root zones during the next light shower, then apply light freshwater from ponds.',
          detailsBn: 'জমির আইলে জমা হওয়া শুকনো সাদা লবণের আস্তরণ আলতো করে তুলে ফেলুন যাতে বৃষ্টির পানিতে তা গলে শিকড়ে না যায়, এরপর পুকুরের মিষ্টি পানি দিয়ে হালকা ভিজিয়ে দিন।',
          targetExpert: 'Local DAE Field Demonstrations'
        },
        {
          title: 'Review Varietal Options (e.g. BRRI dhan97 / dhan99 / dhan67)',
          titleBn: 'স্থানীয় এসএএও-র সাথে উপযুক্ত জাত পর্যালোচনা (যেমন ব্রি ধান৯৭ / ৯৯ / ৬৭)',
          details: 'Discuss with the local SAAO whether officially cataloged salt-tolerant cultivars suit your upazila and specific parcel history for the next cycle. Do not plant without local assessment.',
          detailsBn: 'পরবর্তী মৌসুমে আপনার নির্দিষ্ট জমিতে ব্রি ধান৯৭, ব্রি ধান৯৯ বা স্বল্পমেয়াদী ব্রি ধান৬৭ মানানসই কিনা তা কৃষি কর্মকর্তার সাথে যাচাই করুন।',
          targetExpert: 'Sub-Assistant Agriculture Officer (SAAO)'
        }
      ],
      additionalInfoNeeded: [
        'Recent on-site EC meter reading of irrigation canal water (dS/m).',
        'Whether the seedling nursery was irrigated during low tide or incoming saline high tide.',
        'Availability of reserved freshwater in household/community ponds for 1–2 emergency flushes.',
        'Current crop growth stage (nursery seedling vs panicle initiation).'
      ],
      additionalInfoNeededBn: [
        'সেচ খালের পানির বর্তমান অন-সাইট ইসি (EC) রিডিং (ডিএস/মি)।',
        'বীজতলায় কি ভাটার মিষ্টি পানি দেওয়া হয়েছিল নাকি জোয়ারের লোনা পানি ঢুকেছিল।',
        '১-২টি জরুরি মিষ্টি পানির সেচের জন্য পুকুরে পর্যাপ্ত মিষ্টি পানি আছে কিনা।',
        'ফসলের বর্তমান বয়স (কচি চারা নাকি ফুল ফোটার সময়)।'
      ],
      sources: [
        {
          title: 'BRRI dhan97 Official Rice Profile',
          organization: 'Bangladesh Rice Research Institute (BRRI)',
          url: 'https://riceprofile.brri.gov.bd/varieties/105',
          whatItSupports: 'Official institutional reference for released modern rice characteristics. Note: Station tolerance figures (8–10 dS/m) are research averages, not a farm-specific recommendation.',
          whatItSupportsBn: 'সরকারিভাবে অনুমোদিত জাতের বৈশিষ্ট্য, ১৫২ দিনের জীবনকাল ও গবেষণা কেন্দ্রের চারা সহনশীলতা। কোনো একক খামারের জন্য ফলনের গ্যারান্টি নয়।',
          notes: 'Official BRRI database entry #105.',
          isVerified: true,
          dataStatus: 'integrated'
        },
        {
          title: 'BARC Crop Zoning Information System (CZIS)',
          organization: 'Bangladesh Agricultural Research Council (BARC)',
          url: 'https://czis.cropzoning.gov.bd/',
          whatItSupports: 'Documents coastal upazila crop suitability zones and dry-season agro-ecological soil constraints.',
          whatItSupportsBn: 'উপকূলীয় উপজেলার ফসল উপযোগিতা ও মাটির কৃষি-পরিবেশগত সীমাবদ্ধতা সমর্থন করে।',
          notes: 'External reference portal for upazila suitability verification.',
          isVerified: true,
          dataStatus: 'external_reference'
        },
        {
          title: 'Bangladesh: DIEM - Impact of floods on agriculture and livelihoods',
          organization: 'United Nations / Food and Agriculture Organization (FAO)',
          url: 'https://bangladesh.un.org/en/273221-bangladesh-diem-data-emergencies-floods-bangladesh-impact-floods-agriculture-and-livelihoods',
          whatItSupports: 'Supports documentation of livelihood distress, seedbed disruptions, and rural hazard vulnerability across coastal divisions. CRITICAL BOUNDARY: Does NOT support soil salinity measurements or thresholds.',
          whatItSupportsBn: 'উপকূলীয় দুর্যোগে কৃষকের জীবিকা ও বীজতলার ক্ষতির পরিসংখ্যান সমর্থন করে। সতর্কবার্তা: এটি মাটির লবণাক্ততার পরিমাপ সমর্থন করে না।',
          notes: 'Official UN/FAO assessment (2024).',
          isVerified: true,
          dataStatus: 'external_reference'
        },
        {
          title: 'Irrigation Water Salinity Safety Cutoff & Topsoil Salinization Surveys',
          organization: 'Department of Agricultural Extension (DAE) & SRDI',
          whatItSupports: 'Agronomic guidance on canal salinity testing. Public web URL not verified online; test on-site with calibrated EC meter.',
          whatItSupportsBn: 'সেচের পানির লবণাক্ততা পরীক্ষার নির্দেশিকা। সরাসরি অনলাইন লিংক নেই; এসএএও-র মাধ্যমে ইসি মিটার দিয়ে যাচাই করতে হবে।',
          notes: 'Source needed — not yet verified online. Consult local SAAO.',
          isVerified: false,
          dataStatus: 'unverified'
        }
      ],
      farmerSpeakingPoints: [
        'Stop pumping raw canal water onto tender seedlings until the SAAO checks it with an EC meter; brackish water can scorch young roots in 48 hours.',
        'If the top crust is dry and white, lightly scrape off the hard ridges so sudden dew does not dissolve salt directly into root zones.',
        'Let us check if your homestead pond still holds sweet water so we can give the nursery a light flush tomorrow morning.'
      ],
      farmerSpeakingPointsBn: [
        'উপসহকারী কৃষি কর্মকর্তা মিটার দিয়ে মেপে না দেখা পর্যন্ত খালের পানি দেওয়া সাময়িক স্থগিত রাখুন; লোনা পানি দিলে কচি চারা শুকিয়ে যেতে পারে।',
        'জমির আইলে জমে থাকা শুকনো সাদা লবণের আস্তরণ আলতো করে চেঁছে ফেলুন যাতে শিশির বা হালকা বৃষ্টিতে লবণ গলে শিকড়ে না যায়।',
        'বাড়ির পুকুরে মিষ্টি পানি থাকলে তা দিয়ে কাল সকালে চারার গোড়ায় হালকা একটি মিষ্টি পানির সেচ দেওয়ার ব্যবস্থা করা যায় কিনা দেখি।'
      ],
      isFallback: true,
      disclaimer: 'Early research prototype — not field-validated. Not an official advisory or emergency warning service.',
      isDemonstration: true,
      scenarioTitle: 'Illustrative Example: Satkhira Saline Nursery Scenario'
    }
  },
  {
    id: 'demo-khulna-flood',
    title: 'Khulna Dacope: Silted Sluice Drainage & Submerged Aman Crop Recovery',
    titleBn: 'খুলনা দাকোপ: পলিযুক্ত স্লুইস গেটে জলাবদ্ধতা ও নিমজ্জিত আমন ধান রক্ষা',
    topic: 'flooding',
    studyArea: 'Khulna',
    farmerProfile: 'Tenant farmer cultivating 1.5 acres of transplanted Aman in Dacope Upazila',
    farmerProfileBn: 'দাকোপ উপজেলার দেড় একর জমিতে রোপা আমন চাষ করা প্রান্তিক বর্গা চাষি',
    narrativeEn: 'Following five days of continuous heavy monsoon rain, the primary drainage canal backed up because the tidal sluice gate mouth was choked with river silt. Water in the paddy field stood at 40 cm, completely submerging the transplanted crop.',
    narrativeBn: 'টানা পাঁচ দিনের ভারী বৃষ্টির পর খালের মুখে পলি জমে স্লুইস গেট দিয়ে পানি নামা বন্ধ হয়ে যায়। আমনের জমিতে ৪০ সেন্টিমিটার ঘোলা পানি জমে চারা সম্পূর্ণ ডুবে গেছে।',
    questionPrompt: 'Aman paddy field has been completely submerged under 40 cm turbid water for 5 days due to silted sluice gates. What can we do to save the crop when water begins to recede?',
    questionPromptBn: 'স্লুইস গেটে পলি জমে ৫ দিন ধরে আমন ধানের জমি ৪০ সেমি ঘোলা পানির নিচে ডুবে আছে। পানি নামতে শুরু করলে ফসল বাঁচাতে আমরা কী করতে পারি?',
    mockResult: {
      summary: 'Research evidence confirms that complete submergence in turbid floodwater past 4–6 days causes severe oxygen deprivation, chlorophyll breakdown, and seedling mortality in standard modern rice varieties. Rapid drainage clearance is urgent. Avoid broadcasting chemical fertilizers directly into standing turbid water. Note: Photoperiod-sensitive cultivars like BR23 or emergency floating seedbeds provide contingency if original seedlings decay.',
      summaryBn: 'গবেষণায় দেখা গেছে ঘোলা পানির নিচে টানা ৪-৬ দিনের বেশি চারা নিমজ্জিত থাকলে অক্সিজেনের অভাব ও ক্লোরোফিল নষ্ট হয়ে ধান মারা যেতে পারে। দ্রুত পানি নিষ্কাশনের ব্যবস্থা করা সর্বাধিক জরুরি। জমে থাকা ঘোলা পানির মধ্যে রাসায়নিক সার ছিটাবেন না। চারা নষ্ট হয়ে গেলে ব্রি২৩ এর মতো নাবী জাত বা জরুরি ভাসমান বীজতলা বিকল্প হিসেবে বিবেচনা করতে হবে।',
      evidenceSupports: [
        'The UN/FAO DIEM Flood & Emergency Assessment (2024) documents that prolonged inundation and siltation are primary drivers of standing crop failure, input loss, and livestock distress in coastal divisions [Source: FAO/UN DIEM 2024: https://bangladesh.un.org/en/273221-bangladesh-diem-data-emergencies-floods-bangladesh-impact-floods-agriculture-and-livelihoods. NOTE: Supports flood damage and livelihood impact context, NOT soil salinity measurements].',
        'BAMIS Flood Warning & BWDB River Monitoring provide hydrological stage data on coastal drainage outfalls [Source: BAMIS Flood Warning: https://www.bamis.gov.bd/en/bwdb/warning/ - External reference portal].',
        'Complete submergence beyond 5 days in turbid water results in canopy decay; photoperiod-sensitive varieties like BR23 tolerate delayed transplanting into September [Source: BRRI varietal catalog & BAMIS advisories: https://www.bamis.gov.bd/en/advisory/].',
        'Broadcasting urea directly into standing turbid water causes extensive volatilization and seedling damage; wait for drainage followed by SAAO consultation [Source needed — not yet verified online: DAE post-flood agronomy circulars].'
      ],
      evidenceSupportsBn: [
        'জাতিসংঘ ও এফএও (FAO) এর DIEM সমীক্ষা (২০২৪) প্রমাণ করে যে দীর্ঘস্থায়ী জলাবদ্ধতা ও পলি জমা উপকূলীয় ফসলের ক্ষতি ও জীবিকা সংকটের অন্যতম প্রধান কারণ [উৎস: FAO/UN DIEM ২০২৪। এটি বন্যার ক্ষতির প্রেক্ষাপট সমর্থন করে, মাটির লবণাক্ততা নয়]।',
        'বন্যা পূর্বাভাস কেন্দ্র (BWDB) ও বামিস (BAMIS) উপকূলীয় খালের পানি নিষ্কাশন ও নদীর বিপদসীমার হাইড্রোলজিক্যাল তথ্য সরবরাহ করে [উৎস: https://www.bamis.gov.bd/en/bwdb/warning/]।',
        'ঘোলা পানির নিচে ৫ দিনের বেশি সম্পূর্ণ ডুবে থাকলে চারা পচে যায়; ব্রি২৩ এর মতো আলোকসংবেদনশীল জাত সেপ্টেম্বরের দেরিতেও রোপণ করা সম্ভব [উৎস: ব্রি জাত নির্দেশিকা ও বামিস কৃষি পরামর্শ]।',
        'জমে থাকা ঘোলা পানিতে ইউরিয়া সার দিলে অপচয় হয় এবং চারার ক্ষতি হয়; পানি নামার পর এসএএও-র পরামর্শে সার দিতে হবে [উৎস প্রয়োজন — এখনও অনলাইনে যাচাই করা হয়নি: ডিএই মাঠ নির্দেশনা]। ',
      ],
      uncertainties: [
        'Whether standing water is fresh rainwater runoff or brackish tidal water from low embankments.',
        'Current status of sluice flap gates during low tide (whether silt can be cleared by hand or requires heavy machinery).',
        'Availability of replacement seedlings (e.g. BR23 or BRRI dhan46) in the upazila if primary crop rots.'
      ],
      uncertaintiesBn: [
        'জমিতে জমে থাকা পানি কি কেবল বৃষ্টির মিষ্টি পানি নাকি জোয়ারের লোনা পানি মিশ্রিত।',
        'ভাটার সময় স্লুইস গেটের কপাট খোলা যায় কিনা এবং কোদাল দিয়ে পলি সরানো সম্ভব কিনা।',
        'মূল ফসল নষ্ট হয়ে গেলে উপজেলায় বিকল্প নাবী জাতের চারার (যেমন ব্রি২৩ বা ব্রি ধান৪৬) মজুদ আছে কিনা।'
      ],
      adaptationOptions: [
        {
          title: 'Community Sluice Basin Desiltation at Low Tide',
          titleBn: 'ভাটার সময় দলবদ্ধভাবে স্লুইস গেটের পলি অপসারণ',
          details: 'Mobilize community farmers at low tide to dig open silted canal mouth and remove trapped water hyacinth to drop field water below the seedling leaf crown within 48 hours.',
          detailsBn: 'ভাটার সময় কৃষকদের সাথে নিয়ে স্লুইস গেটের মুখের পলি ও কচুরিপানা কেটে দ্রুত পানি বের করার ব্যবস্থা করুন যাতে ৪৮ ঘণ্টার মধ্যে চারার মাথা পানির ওপর ওঠে।',
          targetExpert: 'Union Parishad Disaster Committee & SAAO'
        },
        {
          title: 'Wash Silt Off Leaves Immediately After Drainage',
          titleBn: 'পানি নামার সাথে সাথে পাতার ওপরের পলি কাদা ধৌতকরণ',
          details: 'As water recedes, splash clean water on seedling leaves to wash away deposited mud film so plants can resume photosynthesis.',
          detailsBn: 'পানি নামার সাথে সাথে চারার পাতার ওপর জমা হওয়া ঘোলা কাদা পরিষ্কার পানি ছিটিয়ে ধুয়ে দিন যাতে গাছ রোদ থেকে খাদ্য তৈরি করতে পারে।',
          targetExpert: 'Local DAE Demonstrations'
        },
        {
          title: 'Emergency Late Aman Seedling Plan (BR23 / Floating Bed)',
          titleBn: 'বিকল্প নাবী আমন (ব্রি২৩) বা ভাসমান বীজতলার প্রস্তুতি',
          details: 'If seedling mortality exceeds 50%, consult the SAAO immediately to procure photoperiod-sensitive BR23 seedlings or start a banana-raft floating seedbed (Dapog method).',
          detailsBn: 'যদি অর্ধেকের বেশি চারা পচে নষ্ট হয়ে যায়, তবে অবিলম্বে এসএএও-র পরামর্শে ব্রি২৩ এর চারা সংগ্রহ করুন অথবা কলার ভেলায় ভাসমান বীজতলা তৈরি করুন।',
          targetExpert: 'Department of Agricultural Extension (DAE)'
        }
      ],
      additionalInfoNeeded: [
        'Water clarity (turbid silty water suffocates seedlings much faster than clear water).',
        'Current tide schedule and hours of low tide available for gravity drainage.',
        'Sub-surface soil salinity if floodwater originated from tidal rivers.'
      ],
      additionalInfoNeededBn: [
        'পানির ঘোলাটে ভাব (ঘোলা পলিযুক্ত পানিতে চারা পরিষ্কার পানির চেয়ে দ্রুত পচে)।',
        'জোয়ার-ভাটার সময়সূচি ও দিনে কত ঘণ্টা ভাটার পানি নামার সুযোগ আছে।',
        'জোয়ারের পানি ঢুকে থাকলে মাটির বর্তমান লবণাক্ততা (EC)।'
      ],
      sources: [
        {
          title: 'Bangladesh: DIEM - Impact of floods on agriculture and livelihoods',
          organization: 'United Nations / Food and Agriculture Organization (FAO)',
          url: 'https://bangladesh.un.org/en/273221-bangladesh-diem-data-emergencies-floods-bangladesh-impact-floods-agriculture-and-livelihoods',
          whatItSupports: 'Supports documentation of flood damage, waterlogging duration impacts, and emergency livelihood distress across vulnerable districts. Does NOT support salinity or fertilizer dosages.',
          whatItSupportsBn: 'বন্যার প্রভাব, ফসলহানি ও কৃষকের ক্ষয়ক্ষতির পরিসংখ্যান সমর্থন করে। মাটির লবণাক্ততা বা সারের মাত্রা সমর্থন করে না।',
          notes: 'Official UN/FAO assessment (2024).',
          isVerified: true,
          dataStatus: 'external_reference'
        },
        {
          title: 'BAMIS Flood & Water Warning',
          organization: 'Bangladesh Water Development Board (BWDB) & BAMIS',
          url: 'https://www.bamis.gov.bd/en/bwdb/warning/',
          whatItSupports: 'Official tidal river water level monitoring and flood inundation bulletins.',
          whatItSupportsBn: 'উপকূলীয় নদীর পানির উচ্চতা ও প্লাবন সতর্কতা বার্তা।',
          notes: 'Official hydrology monitoring portal.',
          isVerified: true,
          dataStatus: 'external_reference'
        },
        {
          title: 'DAE Post-Flood Recovery Guidelines',
          organization: 'Department of Agricultural Extension (DAE)',
          whatItSupports: 'Standard field procedures for post-flood crop rehabilitation, silt washing, and split fertilization.',
          whatItSupportsBn: 'বন্যা পরবর্তী ফসল পরিচর্যা ও পুনর্বাসনের মাঠ নির্দেশিকা।',
          notes: 'Source needed — not yet verified online. Collect circular from Upazila Agriculture Office.',
          isVerified: false,
          dataStatus: 'unverified'
        }
      ],
      farmerSpeakingPoints: [
        'Do not waste money by broadcasting urea into standing floodwater; wait until the water drains so the roots can actually absorb nutrients.',
        'Let us work with our neighbors to dig open the silted sluice gate mouth at low tide today so the water level drops below the leaf tips.',
        'If the seedlings have rotted after 5 days, do not panic; we can arrange late Aman seedlings (BR23) through the Upazila Agriculture Office.'
      ],
      farmerSpeakingPointsBn: [
        'জমে থাকা ঘোলা পানিতে ইউরিয়া সার ছিটিয়ে অপচয় করবেন না; পানি নেমে যাওয়ার পর তবেই অনুমোদিত সার প্রয়োগ করুন।',
        'আজ ভাটার সময় প্রতিবেশীদের সাথে নিয়ে স্লুইস গেটের মুখের পলি কেটে দিন যাতে দ্রুত পানি নেমে চারার মাথা জেগে ওঠে।',
        'যদি চারা পচে নষ্ট হয়েও যায় তবে হতাশ হবেন না; উপজেলা কৃষি অফিসের মাধ্যমে আমরা নাবী আমন জাতের (ব্রি২৩) চারার ব্যবস্থা করতে পারি।'
      ],
      isFallback: true,
      disclaimer: 'Early research prototype — not field-validated. Not an official advisory or emergency warning service.',
      isDemonstration: true,
      scenarioTitle: 'Illustrative Example: Khulna Silted Sluice Drainage Scenario'
    }
  },
  {
    id: 'demo-patuakhali-rainfall',
    title: 'Patuakhali Kalapara: Delayed Monsoon & Rainwater Harvesting in Canals',
    titleBn: 'পটুয়াখালী কলাপাড়া: বর্ষা আসতে বিলম্ব ও খালের বৃষ্টির পানি সংরক্ষণ',
    topic: 'changing_rainfall',
    studyArea: 'Patuakhali',
    farmerProfile: 'Family farm cultivating 2 acres of Aman in Kalapara Upazila',
    farmerProfileBn: 'কলাপাড়া উপজেলার দুই একর জমিতে আমন চাষ করা পারিবারিক খামারি',
    narrativeEn: 'Monsoon onset was delayed by over three weeks in late July. Nursery seedlings reached 45 days of age and began yellowing in crowded beds, while cracked dry paddies were waiting for transplanting rains.',
    narrativeBn: 'জুলাইয়ের শেষের দিকে বর্ষা আসতে তিন সপ্তাহের বেশি দেরি হয়। বীজতলায় চারার বয়স ৪৫ দিন পার হয়ে হলুদ হতে শুরু করে এবং বৃষ্টির অভাবে জমিতে ফাটল দেখা দেয়।',
    questionPrompt: 'Monsoon rains delayed by 3 weeks; nursery seedlings are 45 days old and turning woody. Should we abandon the seedbed or transplant now?',
    questionPromptBn: 'বর্ষা আসতে ৩ সপ্তাহ দেরি হয়েছে; বীজতলার চারার বয়স ৪৫ দিন পেরিয়ে শক্ত হয়ে যাচ্ছে। এখন কি বীজতলা ফেলে দেব নাকি রোপণ করব?',
    mockResult: {
      summary: 'Agronomic evidence indicates that while younger seedlings (25–30 days) are preferred for modern rice, 45-day-old seedlings of adapted cultivars can still produce viable yields if managed correctly. Planting slightly denser (3–4 seedlings per hill) and pruning the top leafy foliage reduces moisture shock during dry-spell transplanting. Note: Confirm weather outlook via BAMIS Agromet advisories before major field investments.',
      summaryBn: 'কৃষিতাত্ত্বিক প্রমাণ অনুযায়ী আধুনিক ধানের জন্য কচি চারা (২৫-৩০ দিন) উত্তম হলেও, কিছুটা বয়স্ক (৪৫ দিন) চারাও সঠিক ব্যবস্থাপনায় ভালো ফলন দিতে পারে। চারার পাতার মাথা কিছুটা ছেঁটে প্রতি গোছায় ৩-৪টি করে চারা ঘন করে লাগালে খরায় ঢলে পড়া রোধ হয়। সার বা কীটনাশক কেনার আগে বামিস (BAMIS) কৃষি আবহাওয়া বার্তা জেনে নেওয়া শ্রেয়।',
      evidenceSupports: [
        'BAMIS Agromet Advisories provide district weather advisories and operational guidelines for managing delayed monsoon transplanting [Source: BAMIS Advisories: https://www.bamis.gov.bd/en/advisory/ - External reference portal].',
        'BRRI varietal profiles and agronomic guides document that older seedlings can be utilized by trimming top leafy tips and transplanting at closer spacing under moisture stress [Source: BRRI varietal catalog. Station data are research findings, not an individual farm yield guarantee].',
        'The FAO/UN DIEM Assessment (2024) documents that seasonal weather shocks and delayed rainfall compound debt cycles and seed shortages among coastal smallholders [Source: FAO/UN DIEM 2024: https://bangladesh.un.org/en/273221-bangladesh-diem-data-emergencies-floods-bangladesh-impact-floods-agriculture-and-livelihoods].',
        'Community rainwater trapping in deep village khals provides emergency supplemental moisture [Claim based on coastal field experience; canal water must be checked for salinity].'
      ],
      evidenceSupportsBn: [
        'বামিস (BAMIS) কৃষি আবহাওয়া পোর্টাল জেলাভিত্তিক আবহাওয়া বার্তা ও দেরিতে আমন রোপণের দিকনির্দেশনা প্রদান করে [উৎস: https://www.bamis.gov.bd/en/advisory/]।',
        'ব্রি (BRRI) নির্দেশিকা অনুযায়ী চারার পাতার মাথা কেটে এবং একটু ঘন করে রোপণ করলে বয়স্ক চারাও খরা কাটিয়ে উঠতে পারে [উৎস: ব্রি জাত নির্দেশিকা]। এটি সাধারণ গবেষণা ফল, কোনো একক জমির নিশ্চিত ফলন নয়।',
        'এফএও ও জাতিসংঘের DIEM সমীক্ষা (২০২৪) প্রমাণ করে যে অপ্রত্যাশিত অনাবৃষ্টি উপকূলীয় কৃষকের ঋণ ও বীজের মজুদে তীব্র সংকট তৈরি করে [উৎস: FAO/UN DIEM ২০২৪]।',
        'গ্রামের খালে বৃষ্টির পানি আটকে রাখলে খরার সময় জীবন বাঁচানো সেচ দেওয়া সম্ভব [স্থানীয় খালের পানির লবণাক্ততা যাচাই সাপেক্ষে]। ',
      ],
      uncertainties: [
        'Short-range precipitation outlook for the specific union (requires BMD 5-day bulletin).',
        'Depth of stored freshwater remaining in the roadside canal.',
        'Soil moisture retention capacity of the farmer\'s parcel (clay vs sandy-loam).'
      ],
      uncertaintiesBn: [
        'নির্দিষ্ট ইউনিয়নের আগামী ৫ দিনের বৃষ্টির সম্ভাবনা (বিএমডি স্থানীয় বুলেটিন প্রয়োজন)।',
        'পাশের খালে কী পরিমাণ মিষ্টি বৃষ্টির পানি অবশিষ্ট আছে।',
        'জমির মাটির পানি ধরে রাখার ক্ষমতা (এঁটেল মাটি বেশি রস ধরে রাখে)।'
      ],
      adaptationOptions: [
        {
          title: 'Trim Leaf Tips and Transplant 3–4 Seedlings Per Hill',
          titleBn: 'চারার পাতার মাথা ছেঁটে গোছায় ৩-৪টি করে চারা রোপণ',
          details: 'Trim the top 1/3 of the elongated seedling leaves to reduce transpiration water loss before setting into moist puddled soil.',
          detailsBn: 'রোপণের আগে চারার পাতার ওপরের এক-তৃতীয়াংশ কেটে দিন যাতে রোদে বাষ্পীভবনে পানি শুকিয়ে চারা ঢলে না পড়ে।',
          targetExpert: 'Local SAAO'
        },
        {
          title: 'Protective Canal / Pond Supplemental Irrigation',
          titleBn: 'খাল বা পুকুর থেকে জীবন বাঁচানো পরিমিত সেচ',
          details: 'Pump a light layer of freshwater from farm ponds or re-excavated canals to soften cracked soil before plowing and transplanting.',
          detailsBn: 'জমি নরম করার জন্য পুকুর বা মিষ্টি খালের পানি দিয়ে হালকা সেচ দিয়ে রোপণ কাজ শুরু করুন।',
          targetExpert: 'Upazila Agriculture Office / Water User Group'
        },
        {
          title: 'Consult BAMIS Agromet Bulletin Before Nitrogen Application',
          titleBn: 'বামিস (BAMIS) আবহাওয়া বুলেটিন দেখে ইউরিয়া সার প্রয়োগ',
          details: 'Check the official BMD 5-day rainfall forecast; do not apply topdress urea if a heavy rainstorm is forecast within 48 hours to avoid wash-off.',
          detailsBn: 'আগামী ৪৮ ঘণ্টার মধ্যে ভারী বৃষ্টির সম্ভাবনা থাকলে ইউরিয়া সার ছিটাবেন না, যাতে সার ধুয়ে অপচয় না হয়।',
          targetExpert: 'DAE Agromet Service'
        }
      ],
      additionalInfoNeeded: [
        'Official BMD 5-day forecast from Upazila Agriculture Office.',
        'Seedling nursery water status (whether seedlings are wilting or still green).',
        'Salinity of nearby canal water (to verify no tidal saline water entered).'
      ],
      additionalInfoNeededBn: [
        'উপজেলা কৃষি অফিসের ৫ দিনের অফিশিয়াল আবহাওয়া পূর্বাভাস।',
        'বীজতলার চারার বর্তমান অবস্থা (সম্পূর্ণ শুকিয়ে শক্ত হয়ে গেছে কিনা)।',
        'পাশের খালের পানির লবণাক্ততা (লবণাক্ত পানি ঢুকেছে কিনা তা পরীক্ষা)।'
      ],
      sources: [
        {
          title: 'BAMIS Agricultural Advisories',
          organization: 'Bangladesh Agrometeorological Information System (BAMIS) / DAE',
          url: 'https://www.bamis.gov.bd/en/advisory/',
          whatItSupports: 'Provides seasonal agromet bulletins, monsoon onset advisories, and weather-based farming guidance.',
          whatItSupportsBn: 'মৌসুমী আবহাওয়া বার্তা ও বৃষ্টিপাতভিত্তিক চাষাবাদের সরকারি দিকনির্দেশনা।',
          notes: 'Official portal for weather-based agricultural advice.',
          isVerified: true,
          dataStatus: 'external_reference'
        },
        {
          title: 'Bangladesh: DIEM - Impact of floods on agriculture and livelihoods',
          organization: 'United Nations / Food and Agriculture Organization (FAO)',
          url: 'https://bangladesh.un.org/en/273221-bangladesh-diem-data-emergencies-floods-bangladesh-impact-floods-agriculture-and-livelihoods',
          whatItSupports: 'Supports documentation of climate hazards and rural economic vulnerability across coastal divisions.',
          whatItSupportsBn: 'জলবায়ু ঝুঁকি ও গ্রামীণ অর্থনৈতিক সংকটের পরিসংখ্যান সমর্থন করে।',
          notes: 'Official UN/FAO assessment (2024).',
          isVerified: true,
          dataStatus: 'external_reference'
        },
        {
          title: 'BMD Upazila Agromet Bulletins',
          organization: 'Bangladesh Meteorological Department (BMD) & DAE',
          whatItSupports: 'Local precipitation forecast. Direct online URL not verified; obtain from local SAAO.',
          whatItSupportsBn: 'স্থানীয় বৃষ্টির পূর্বাভাস। সরাসরি অনলাইন লিংক নেই; এসএএও-র কাছ থেকে সংগ্রহ করুন।',
          notes: 'Source needed — not yet verified online.',
          isVerified: false,
          dataStatus: 'unverified'
        }
      ],
      farmerSpeakingPoints: [
        'Do not throw away the 45-day-old seedlings; we will trim the top leafy tips and plant 3 to 4 seedlings together in each hill so the plants stay upright.',
        'We will pump a little freshwater from the pond to soften the soil so you can start transplanting without waiting any longer.',
        'Let us check the union agriculture office bulletin tomorrow morning before buying topdress urea.'
      ],
      farmerSpeakingPointsBn: [
        '৪৫ দিনের চারা ফেলে দেবেন না; আমরা পাতার ওপরের মাথা কিছুটা কেটে প্রতি গোছায় ৩-৪টি চারা লাগাব যাতে চারা সহজে মাটি ধরে।',
        'জমি নরম করতে পুকুর থেকে সামান্য মিষ্টি পানি সেচ দিয়ে আমরা কাল সকালেই রোপণ শুরু করতে পারি।',
        'ইউরিয়া সার কেনার আগে কাল সকালে ইউনিয়ন কৃষি অফিসের আবহাওয়া বার্তাটি একবার দেখে নেব।'
      ],
      isFallback: true,
      disclaimer: 'Early research prototype — not field-validated. Not an official advisory or emergency warning service.',
      isDemonstration: true,
      scenarioTitle: 'Illustrative Example: Patuakhali Delayed Monsoon Scenario'
    }
  },
  {
    id: 'demo-barguna-missing-data',
    title: 'Barguna Patharghata: Missing Local Field Data & Unverified Salinity Inquiry',
    titleBn: 'বরগুনা পাথরঘাটা: অনুপস্থিত স্থানীয় মাঠের তথ্য ও অপরীক্ষিত লবণাক্ততা অনুসন্ধান',
    topic: 'salinity',
    studyArea: 'Barguna',
    farmerProfile: 'Smallholder returning to cultivate a cyclone-exposed parcel in Patharghata with no recent soil test',
    farmerProfileBn: 'পাথরঘাটায় ৩ বছর অনাবাদি থাকা জমিতে চাষ শুরু করতে চাওয়া ক্ষুদ্র কৃষক, যার কোনো সাম্প্রতিক মাটি পরীক্ষা নেই',
    narrativeEn: 'The farmer wants to cultivate Boro rice this season, but no soil test has been conducted on the parcel for three years, and nobody has measured the canal electrical conductivity since the last cyclonic storm surge.',
    narrativeBn: 'কৃষক এ মৌসুমে বোরো ধান চাষ করতে চান, কিন্তু গত তিন বছরে এই জমির কোনো মাটি পরীক্ষা হয়নি এবং ঘূর্ণিঝড়ের জলোচ্ছ্বাসের পর খালের পানির লবণাক্ততা কেউ মাপেনি।',
    questionPrompt: 'We have no recent soil test report or canal salinity measurement for our plot in Patharghata. Which crop should we plant, and can you guarantee it will grow without salt damage?',
    questionPromptBn: 'পাথরঘাটায় আমাদের জমির কোনো সাম্প্রতিক মাটি পরীক্ষার রিপোর্ট বা খালের পানির লবণাক্ততার পরিমাপ নেই। আমরা কোন ফসল লাগাব এবং কোনো লবণের ক্ষতি হবে না এমন কোনো নিশ্চয়তা কি দেওয়া যাবে?',
    mockResult: {
      summary: 'CRITICAL DATA GAP: Essential field measurements (current soil EC, canal water EC, and drainage condition) are MISSING. CoastWise AI strictly DOES NOT invent simulated or synthetic soil salinity numbers for unmeasured parcels. Recommending a crop or giving a yield guarantee without on-site testing in Patharghata would create severe financial risk for the farmer. The farmer must request an immediate on-site EC test from the local Sub-Assistant Agriculture Officer (SAAO) before investing in seeds or fertilizers.',
      summaryBn: 'জরুরি তথ্যের ঘাটতি: আপনার নির্দিষ্ট জমির বর্তমান মাটির লবণাক্ততা (EC), সেচ খালের পানির লবণাক্ততা এবং নিষ্কাশন ব্যবস্থা সম্পর্কিত তথ্য সম্পূর্ণ অনুপস্থিত। কোস্টওয়াইজ এআই কোনো অপরীক্ষিত জমির জন্য কাল্পনিক বা অনুমানভিত্তিক লবণাক্ততার মান তৈরি করে না। পরীক্ষা ছাড়া ফসলের ফলন নিশ্চিত দাবি করা কৃষকের জন্য মারাত্মক আর্থিক ঝুঁকি তৈরি করবে। বীজ বা সারে টাকা খরচের আগে স্থানীয় উপসহকারী কৃষি কর্মকর্তার (SAAO) মাধ্যমে জমিতে সরাসরি ইসি মিটার দিয়ে পরীক্ষা করাতে হবে।',
      evidenceSupports: [
        'BARC Crop Zoning Information System (CZIS) identifies Patharghata as a coastal high-salinity risk zone with heavy tidal marine interface, requiring parcel-specific verification [Source: BARC CZIS: https://czis.cropzoning.gov.bd/ - External reference portal].',
        'Controlled varietal trials for BRRI dhan97 (#105) and BRRI dhan99 (#106) demonstrate station seedling tolerance up to 8–10 dS/m, but station data are experimental findings and NOT a recommendation or yield guarantee for an individual unmeasured parcel [Source: BRRI Rice Profiles #105: https://riceprofile.brri.gov.bd/varieties/105 and #106: https://riceprofile.brri.gov.bd/varieties/106].',
        'CoastWise AI Operational Guardrails prohibit fabricating live measurements or farm-specific yield guarantees when baseline field data is missing [Operational Protocol].',
        'Current field-level soil EC and canal water salinity are [Missing Field Data — requires on-site calibrated EC meter testing by local SAAO].'
      ],
      evidenceSupportsBn: [
        'বার্ক (BARC) ক্রপ জোনিং ইনফরমেশন সিস্টেম পাথরঘাটাকে সমুদ্রের জোয়ারের প্রভাবযুক্ত লবণাক্ততার উচ্চ ঝুঁকিপূর্ণ অঞ্চল হিসেবে চিহ্নিত করেছে [উৎস: BARC CZIS: https://czis.cropzoning.gov.bd/]।',
        'ব্রি ধান৯৭ (#১০৫) ও ব্রি ধান৯৯ (#১০৬) গবেষণা কেন্দ্রে চারা অবস্থায় ৮-১০ ডিএস/মি পর্যন্ত সহ্য করলেও, তা কোনো অপরীক্ষিত নির্দিষ্ট জমির জন্য ফলনের গ্যারান্টি বা সরাসরি সুপারিশ নয় [উৎস: ব্রি প্রোফাইল #১০৫ ও #১০৬]।',
        'মাঠের তথ্য অনুপস্থিত থাকলে কাল্পনিক লাইভ পরিমাপ বা ফলনের নিশ্চয়তা প্রদান কোস্টওয়াইজ এআই-এর সুরক্ষা নীতি অনুযায়ী সম্পূর্ণ নিষিদ্ধ।',
        'বর্তমান মাটির লবণাক্ততা (EC) ও খালের পানির লবণাক্ততা [অনুপস্থিত মাঠের তথ্য — জমিতে এসএএও দ্বারা ইসি মিটার দিয়ে সরাসরি পরীক্ষা আবশ্যক]। ',
      ],
      uncertainties: [
        'MISSING DATA: Current electrical conductivity (EC in dS/m) of topsoil and subsoil across the farmer\'s parcel.',
        'MISSING DATA: Salinity of the nearby canal (whether tidal seawater has intruded through damaged sluice flap gates).',
        'MISSING DATA: Elevation of the parcel relative to high tide storm surge levels.'
      ],
      uncertaintiesBn: [
        'অনুপস্থিত তথ্য: কৃষকের জমির উপরিভাগ ও শিকড় অঞ্চলের বর্তমান মাটির বৈদ্যুতিক পরিবাহিতা (EC)।',
        'অনুপস্থিত তথ্য: নিকটস্থ খালের পানির লবণাক্ততা (ভাঙা গেট দিয়ে জোয়ারের লোনা পানি ঢুকেছে কিনা)।',
        'অনুপস্থিত তথ্য: স্বাভাবিক জোয়ারের পানির তুলনায় জমির উচ্চতা বা ঢাল।'
      ],
      adaptationOptions: [
        {
          title: 'Request Free On-Site EC Soil & Water Testing from SAAO',
          titleBn: 'উপসহকারী কৃষি কর্মকর্তার কাছ থেকে জমিতে বিনামূল্যে ইসি পরীক্ষা গ্রহণ',
          details: 'Contact the local Upazila Agriculture Office in Patharghata to have the SAAO visit your parcel with a portable EC pen to test topsoil and canal water before purchasing seed.',
          detailsBn: 'বীজ বা সার কেনার আগে পাথরঘাটা উপজেলা কৃষি অফিসে যোগাযোগ করে এসএএও-কে জমিতে এনে পোর্টেবল ইসি পেন দিয়ে মাটি ও খালের পানি মেপে নিন।',
          targetExpert: 'Upazila Agriculture Office / SAAO Patharghata'
        },
        {
          title: 'Consult BARC CZIS Upazila Suitability Map with Extension Staff',
          titleBn: 'কৃষি কর্মকর্তার সাথে বার্ক (BARC) ক্রপ জোনিং মানচিত্র পর্যালোচনা',
          details: 'Review the official BARC Crop Zoning map (czis.cropzoning.gov.bd) for Patharghata with your extension officer to see general suitability classes for your union.',
          detailsBn: 'আপনার ইউনিয়নের সার্বিক ফসল উপযোগিতা দেখতে কৃষি কর্মকর্তার সাথে বার্ক ক্রপ জোনিং পোর্টাল (czis.cropzoning.gov.bd) পর্যালোচনা করুন।',
          targetExpert: 'DAE Upazila Extension Officer'
        },
        {
          title: 'Low-Risk Non-Rice Alternative Consideration (e.g. Khesari / Mustard)',
          titleBn: 'স্বল্প-ঝুঁকির ডাল বা তেল ফসল বিবেচনা (যেমন খেসারী বা সরিষা)',
          details: 'If canal water is found to be saline upon testing, ask the SAAO about low-water-demand residual moisture crops (such as zero-tillage relay Khesari) to avoid heavy irrigation pumping costs.',
          detailsBn: 'পরীক্ষায় খালের পানি লোনা পাওয়া গেলে বোরো ধানের সেচের পেছনে টাকা খরচ না করে বিনা চাষে খেসারীর মতো স্বল্প ব্যয়ের ফসল চাষ করা যায় কিনা তা আলোচনা করুন।',
          targetExpert: 'Local SAAO'
        }
      ],
      additionalInfoNeeded: [
        'On-site soil EC test results from local SAAO (in dS/m).',
        'Canal water salinity test at both low tide and high tide.',
        'Drainage history of the plot during high rainfall events.'
      ],
      additionalInfoNeededBn: [
        'স্থানীয় এসএএও দ্বারা সরাসরি মাটির ইসি (EC) পরীক্ষার ফলাফল (ডিএস/মি)।',
        'জোয়ার ও ভাটার সময় খালের পানির লবণাক্ততার পরিমাপ।',
        'ভারী বৃষ্টিতে জমিতে কতদিন পানি জমে থাকে তার ইতিহাস।'
      ],
      sources: [
        {
          title: 'BARC Crop Zoning Information System (CZIS)',
          organization: 'Bangladesh Agricultural Research Council (BARC)',
          url: 'https://czis.cropzoning.gov.bd/',
          whatItSupports: 'Documents union-level coastal crop suitability classifications and agro-ecological constraints for Patharghata Upazila.',
          whatItSupportsBn: 'পাথরঘাটা উপজেলার ইউনিয়নভিত্তিক ফসল উপযোগিতা ও কৃষি-পরিবেশগত সীমাবদ্ধতা সমর্থন করে।',
          notes: 'External reference portal for upazila suitability verification.',
          isVerified: true,
          dataStatus: 'external_reference'
        },
        {
          title: 'BRRI dhan97 Official Rice Profile (#105)',
          organization: 'Bangladesh Rice Research Institute (BRRI)',
          url: 'https://riceprofile.brri.gov.bd/varieties/105',
          whatItSupports: 'Documents research station seedling tolerance (8–10 dS/m). Station figures are research averages, NOT a farm-specific recommendation or guarantee for an unmeasured parcel.',
          whatItSupportsBn: 'গবেষণাগার চারা সহনশীলতা (৮-১০ ডিএস/মি) সমর্থন করে। কোনো একক অপরীক্ষিত খামারের ফলনের নিশ্চয়তা নয়।',
          notes: 'Official BRRI database entry #105.',
          isVerified: true,
          dataStatus: 'integrated'
        },
        {
          title: 'Unmeasured Parcel Soil & Canal Salinity Baseline',
          organization: 'Local Department of Agricultural Extension (DAE)',
          whatItSupports: 'Crucial on-site physical measurement required before selecting crop variety.',
          whatItSupportsBn: 'ফসল বাছাইয়ের পূর্বে জমিতে সরাসরি অপরিহার্য পরিমাপ।',
          notes: 'Source needed — not yet verified online. Contact local SAAO.',
          isVerified: false,
          dataStatus: 'unverified'
        }
      ],
      farmerSpeakingPoints: [
        'We cannot safely guess or invent whether your soil has salt; doing so could cause you to lose all your money on seeds and fertilizers.',
        'Let us visit the Union Agriculture Office together tomorrow and ask the SAAO to bring a digital EC meter to your field for a quick, free test.',
        'If the canal turns out to be sweet water, we can discuss salt-tolerant rice; if it is salty, we can explore low-water pulse crops like Khesari.'
      ],
      farmerSpeakingPointsBn: [
        'অনুমান করে আপনার জমিতে লবণ আছে কি নেই তা বলা বিপজ্জনক; এতে বীজ ও সারের পুরো টাকাই লোকসান হতে পারে।',
        'চলুন কাল সকালে ইউনিয়ন কৃষি অফিসে গিয়ে এসএএও-কে একটি ডিজিটাল ইসি মিটার নিয়ে আপনার জমি ও খালের পানি মেপে দিতে বলি।',
        'পরীক্ষায় যদি খালের পানি মিষ্টি পাওয়া যায় তবে আমরা ধানের কথা ভাবব; আর পানি লোনা হলে খেসারীর মতো কম খরচের ডাল ফসলের দিকে যাব।'
      ],
      isFallback: true,
      disclaimer: 'Early research prototype — not field-validated. Not an official advisory or emergency warning service.',
      isDemonstration: true,
      hasMissingDataScenario: true,
      scenarioTitle: 'Illustrative Example: Missing Local Field Data Test Case'
    }
  },
  {
    id: 'demo-cox-profit-guarantee',
    title: 'Cox’s Bazar Pekua: Guaranteed-Profit Prediction Request & Guardrail Refusal',
    titleBn: 'কক্সবাজার পেকুয়া: নিশ্চিত মুনাফার ফসল ভবিষ্যদ্বাণী ও নিরাপত্তা প্রতিরোধ',
    topic: 'salinity',
    studyArea: 'Cox\'s Bazar',
    farmerProfile: 'Commercial leaseholder in Pekua requesting an algorithmic guarantee on which crop yields highest profit',
    farmerProfileBn: 'পেকুয়া উপজেলার বাণিজ্যিক ইজারা চাষি, যিনি ব্যাংক ঋণের জন্য সবচেয়ে লাভজনক ফসলের নিশ্চিত এআই হিসাব চেয়েছেন',
    narrativeEn: 'A farmer planning to take an agricultural micro-loan asks CoastWise AI to identify the single most profitable crop that guarantees at least BDT 20,000 net profit per bigha, demanding an algorithmic yield and profit guarantee for Boro rice versus mustard.',
    narrativeBn: 'ব্যাংক ঋণ নিতে চাওয়া একজন কৃষক কোস্টওয়াইজ এআই-কে এমন একটি নির্দিষ্ট ফসলের নাম দিতে বলেন যা বিঘায় নিশ্চিতভাবে কমপক্ষে ২০,০০০ টাকা লাভ দেবে, এবং বোরো ধান বনাম সরিষার নিশ্চিত লাভের হিসাব দাবি করেন।',
    questionPrompt: 'Which crop is guaranteed to make the most profit in Pekua this season? Predict the exact net profit per bigha for Boro rice versus mustard so I can borrow money from the bank.',
    questionPromptBn: 'এই মৌসুমে পেকুয়ায় সবচেয়ে বেশি লাভ নিশ্চিত করবে এমন একটি ফসলের নাম বলুন। বোরো ধান বনাম সরিষার বিঘাপ্রতি নিশ্চিত মুনাফা কত হবে তা বলুন যাতে আমি ব্যাংক থেকে ঋণ নিতে পারি।',
    mockResult: {
      summary: 'GUARDRAIL REFUSAL: CoastWise AI strictly REFUSES to declare any crop as "guaranteed most profitable" or predict exact net financial profits for bank loan decisions. In coastal Bangladesh, net farm returns fluctuate drastically based on volatile market harvest prices, pump fuel costs, weather extremes, and tidal salinity spikes. Retaining an algorithmic profit promise would be scientifically invalid and financially hazardous. CoastWise AI provides transparent input-cost ranges, calculation methods, and sensitivity warnings, but never guarantees profitability.',
      summaryBn: 'সুরক্ষা নীতিমালা প্রয়োগ: কোস্টওয়াইজ এআই কোনো ফসলকে "নিশ্চিত সর্বাধিক লাভজনক" হিসেবে ঘোষণা করতে বা ব্যাংক ঋণের জন্য নির্দিষ্ট মুনাফার ভবিষ্যদ্বাণী দিতে দৃঢ়ভাবে প্রত্যাখ্যান করে। উপকূলীয় বাংলাদেশে কাটার সময়ের বাজারদর, সেচের জ্বালানি খরচ, আকস্মিক প্রাকৃতিক দুর্যোগ ও লোনা পানির কারণে কৃষকের লাভ নাটকীয়ভাবে পরিবর্তিত হয়। অ্যালগরিদম দিয়ে নিশ্চিত লাভের প্রতিশ্রুতি দেওয়া অবৈজ্ঞানিক এবং কৃষকের জন্য ঋণের ফাঁদ তৈরি করতে পারে। কোস্টওয়াইজ এআই ফসলের সম্ভাব্য উৎপাদন ব্যয় ও গণনার পদ্ধতি স্বচ্ছভাবে দেখায়, তবে নিশ্চিত মুনাফার কোনো দাবি করে না।',
      evidenceSupports: [
        'BARC Crop Suitability Portal and DAE coastal economic surveys show that crop returns vary widely across soil salinity levels and pump diesel availability [Source: BARC Crop Suitability: https://apps.barc.gov.bd/cropzoning/ - External reference portal].',
        'BAMIS Agricultural Advisories note that short-duration oilseeds like BARI Sarisha-14 offer favorable return ratios under dry winters, but face 100% loss risk from unseasonal winter rains or waterlogging [Source: BAMIS Advisories: https://www.bamis.gov.bd/en/advisory/ - External reference portal].',
        'Official varietal catalogs (BRRI dhan97 #105, BRRI dhan99 #106) document potential station yields (4.5–5.5 t/ha) under optimal experimental conditions, but explicitly do NOT guarantee individual farm yields or financial profits [Source: BRRI Rice Profiles #105 and #106].',
        'Transparent Cost-Return Comparison: Boro rice requires ~BDT 14,700/bigha input cost (high irrigation expense) yielding estimated net return of BDT 2,400–10,600/bigha; Mustard requires ~BDT 7,050/bigha yielding estimated net return of BDT 5,550–13,950/bigha under favorable dry conditions, but has ZERO tolerance to standing water [Input calculation based on DAE regional cost models; highly sensitive to local fuel tariffs and market wholesale prices].'
      ],
      evidenceSupportsBn: [
        'বার্ক (BARC) ক্রপ জোনিং পোর্টাল ও ডিএই তথ্য অনুযায়ী মাটির লবণাক্ততা ও সেচ খরচের তারতম্যের কারণে প্রতিটি ফসলের মুনাফায় বিশাল পার্থক্য ঘটে [উৎস: https://apps.barc.gov.bd/cropzoning/]।',
        'বামিস (BAMIS) কৃষি পরামর্শ অনুযায়ী বারি সরিষা-১৪ রৌদ্রোজ্জ্বল শীতে ভালো লাভ দিলেও অসময়ের এক পশলা বৃষ্টি বা জলাবদ্ধতায় সম্পূর্ণ নষ্ট হওয়ার ঝুঁকি থাকে [উৎস: https://www.bamis.gov.bd/en/advisory/]।',
        'ব্রি ধান৯৭ (#১০৫) ও ব্রি ধান৯৯ (#১০৬) গবেষণা কেন্দ্রে উচ্চ ফলনশীল হলেও তা কোনো নির্দিষ্ট জমির নিশ্চিত আর্থিক লাভের নিশ্চয়তা দেয় না [উৎস: ব্রি প্রোফাইল #১০৫ ও #১০৬]।',
        'স্বচ্ছ ব্যয়-আয় তুলনা: বোরো ধানে বিঘায় উৎপাদন ব্যয় প্রায় ১৪,৭০০ টাকা (উচ্চ সেচ খরচ) এবং সম্ভাব্য নিট লাভ ২,৪০০–১০,৬০০ টাকা; সরিষায় উৎপাদন ব্যয় প্রায় ৭,০৫০ টাকা এবং অনুকূল শীতে সম্ভাব্য নিট লাভ ৫,৫৫০–১৩,৯৫০ টাকা, তবে জলাবদ্ধতায় ফসল ধ্বংসের ঝুঁকি থাকে [ডিএই মডেল ভিত্তিক হিসাব; জ্বালানি ও বাজারদরের পরিবর্তনের ওপর নির্ভরশীল]। ',
      ],
      uncertainties: [
        'VOLATILE VARIABLE: Local market wholesale price swings during harvest weeks (e.g. paddy price dropping from ৳1,150 to ৳850/maund in peak supply).',
        'VOLATILE VARIABLE: Diesel and electricity tariffs for canal pumping across the growing season.',
        'CLIMATE SHOCK: Probability of unseasonal pre-monsoon squalls or cyclonic depression during maturity.',
        'INPUT MISSING: True local transport costs from the farmer\'s parcel to the upazila wholesale market.'
      ],
      uncertaintiesBn: [
        'পরিবর্তনশীল বিষয়: ফসল কাটার ভরা মৌসুমে পাইকারি বাজারদরের ওঠানামা (যেমন সরবরাহ বাড়লে ধানের মণ ১,১৫০ থেকে ৮৫০ টাকায় নেমে যাওয়া)।',
        'পরিবর্তনশীল বিষয়: পুরো মৌসুমে সেচ পাম্পের জ্বালানি ও বিদ্যুৎ খরচের পরিবর্তন।',
        'আবহাওয়া ঝুঁকি: ফসল পাকার সময় অসময়ের কালবৈশাখী বা ঘূর্ণিঝড়ের আঘাতের সম্ভাবনা।',
        'অনুপস্থিত তথ্য: কৃষকের জমি থেকে উপজেলা আড়ত পর্যন্ত ফসল পরিবহনের প্রকৃত খরচ।'
      ],
      adaptationOptions: [
        {
          title: 'Review Side-by-Side Crop Comparison with Transparent Assumptions',
          titleBn: 'স্বচ্ছ অনুমিতিসহ বিভিন্ন ফসলের তুলনামূলক ব্যয় ও আয় পর্যালোচনা',
          details: 'Open the CoastWise AI "Crop & Cost Comparison" view to inspect side-by-side input costs, water requirements, and sensitivity warnings for Boro rice, Mustard, and Khesari.',
          detailsBn: 'কোস্টওয়াইজ এআই-এর "ফসল ও ব্যয় তুলনা" ট্যাবে গিয়ে বোরো ধান, সরিষা ও খেসারীর উৎপাদন খরচ, পানির চাহিদা ও ঝুঁকিগুলো পাশাপাশি তুলনা করুন।',
          targetExpert: 'Upazila Agriculture Office / Extension Officer'
        },
        {
          title: 'Diversify Plot Rather than Committing to a Single High-Risk Crop',
          titleBn: 'এক ফসলে সর্বস্ব বাজি না রেখে জমিতে বহুবিধ ফসল আবাদ',
          details: 'Rather than borrowing heavily to cultivate 100% high-risk Boro or sensitive mustard, divide land into lower-input relay pulses (Khesari) and manageable grain plots.',
          detailsBn: 'একটি ঝুঁকিপূর্ণ ফসলের জন্য চড়া সুদে ঋণ না নিয়ে, জমির কিছু অংশে স্বল্প খরচের রিলে ডাল (খেসারী) এবং বাকি অংশে বোরো বা সবজি চাষ করে ঝুঁকি ভাগ করুন।',
          targetExpert: 'Local SAAO & Farmers\' Cooperative'
        },
        {
          title: 'Consult Local Market Wholesalers Prior to Loan Agreements',
          titleBn: 'ঋণ নেওয়ার আগে স্থানীয় আড়তদার ও সমবায়ীদের সাথে বাজারদর যাচাই',
          details: 'Check forward price trends and transport access with local wholesale traders in Pekua before locking into high-interest input debt.',
          detailsBn: 'উচ্চ সুদে ঋণ নেওয়ার আগে পেকুয়ার স্থানীয় আড়তদারদের কাছ থেকে বিগত বছরগুলোর বাজারদর ও পরিবহন সুবিধা যাচাই করুন।',
          targetExpert: 'Department of Agricultural Marketing (DAM)'
        }
      ],
      additionalInfoNeeded: [
        'Current diesel price and canal pump rental agreement per bigha in Pekua.',
        'Prevailing farmgate wholesale prices for paddy and oilseeds at the nearest market.',
        'Farmer\'s risk tolerance and availability of family labor versus hired wage labor.'
      ],
      additionalInfoNeededBn: [
        'পেকুয়ায় বর্তমান ডিজেলের দাম এবং বিঘা প্রতি সেচ পাম্প ভাড়ার চুক্তি।',
        'নিকটস্থ হাটে ধান ও তেলবীজের বর্তমান পাইকারি বিক্রয়মূল্য।',
        'কৃষকের আর্থিক ঝুঁকি নেওয়ার সক্ষমতা এবং নিজস্ব পারিবারিক শ্রমিকের প্রাপ্যতা।'
      ],
      sources: [
        {
          title: 'BARC Crop Suitability and Zoning Portal',
          organization: 'Bangladesh Agricultural Research Council (BARC)',
          url: 'https://apps.barc.gov.bd/cropzoning/',
          whatItSupports: 'Documents coastal upazila crop zoning and soil drainage suitability. Confirms that financial returns vary with agro-ecological constraints.',
          whatItSupportsBn: 'উপকূলীয় উপজেলার ফসল উপযোগিতা ও মাটির ড্রেনেজ জোনিং সমর্থন করে।',
          notes: 'External reference portal for upazila suitability verification.',
          isVerified: true,
          dataStatus: 'external_reference'
        },
        {
          title: 'BAMIS Agricultural Advisories',
          organization: 'Bangladesh Agrometeorological Information System (BAMIS) / DAE',
          url: 'https://www.bamis.gov.bd/en/advisory/',
          whatItSupports: 'Documents seasonal operational risks, weather disruptions, and input sensitivity for coastal winter crops.',
          whatItSupportsBn: 'উপকূলীয় শীতকালীন ফসলের আবহাওয়া ঝুঁকি ও উপকরণ সংবেদনশীলতা নথিভুক্ত করে।',
          notes: 'Official DAE agromet advisory portal.',
          isVerified: true,
          dataStatus: 'external_reference'
        },
        {
          title: 'BRRI dhan97 Official Rice Profile (#105)',
          organization: 'Bangladesh Rice Research Institute (BRRI)',
          url: 'https://riceprofile.brri.gov.bd/varieties/105',
          whatItSupports: 'Documents station agronomic yield potential (4.5–5.5 t/ha) under experimental conditions. STRICTLY DOES NOT guarantee farm profits.',
          whatItSupportsBn: 'গবেষণাগারে উচ্চ ফলন সমর্থন করে, তবে খামারের আর্থিক মুনাফা বা নিশ্চয়তা সমর্থন করে না।',
          notes: 'Official BRRI database entry #105.',
          isVerified: true,
          dataStatus: 'integrated'
        }
      ],
      farmerSpeakingPoints: [
        'We cannot guarantee you a profit; anyone who guarantees farm profits in coastal areas is misleading you, because a single sudden rain or market crash can change everything.',
        'Let us look at the real costs together: Boro rice requires high fuel for pumping and risks salt if canal water spikes; mustard costs less to grow but will die completely if waterlogs.',
        'Rather than taking a large loan for just one crop, let us see if dividing your land between a low-cost pulse like Khesari and a smaller rice plot protects your family from debt.'
      ],
      farmerSpeakingPointsBn: [
        'আমরা আপনাকে কোনো নিশ্চিত লাভের নিশ্চয়তা দিতে পারি না; উপকূলীয় এলাকায় নিশ্চিত লাভের গ্যারান্টি দেওয়া অবৈজ্ঞানিক ও ঝুঁকিপূর্ণ, কারণ আকস্মিক বৃষ্টি বা বাজারের দাম পড়ে গেলে হিসাব বদলে যায়।',
        'চলুন বাস্তব খরচগুলো দেখি: বোরো ধানে সেচের পেছনে প্রচুর জ্বালানি খরচ হয় এবং পানিতে লবণ বাড়লে ক্ষতি হয়; অন্যদিকে সরিষায় খরচ কম কিন্তু সামান্য বৃষ্টিতে জমিতে পানি জমলে পুরো ফসল নষ্ট হয়ে যায়।',
        'একটিমাত্র ফসলের জন্য বড় ঋণ না নিয়ে, জমির কিছুটা অংশে বিনা খরচের খেসারী এবং বাকি অংশে ধান চাষ করে পরিবারের ঝুঁকি কমানো বুদ্ধিমানের কাজ হবে।'
      ],
      isFallback: true,
      disclaimer: 'Early research prototype — not field-validated. Not an official advisory or emergency warning service.',
      isDemonstration: true,
      hasProfitGuardrail: true,
      scenarioTitle: 'Illustrative Example: Profit Guarantee Refusal Test Case'
    }
  }
];
