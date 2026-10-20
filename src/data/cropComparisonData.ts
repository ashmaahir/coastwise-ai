import { CropComparisonItem, SourceReference } from '../types.ts';

export const AUTHORITATIVE_EXTERNAL_PORTALS: SourceReference[] = [
  {
    title: 'BARC Crop Zoning Information System (CZIS)',
    organization: 'Bangladesh Agricultural Research Council (BARC)',
    url: 'https://czis.cropzoning.gov.bd/',
    whatItSupports: 'National agro-ecological crop suitability classifications, union-level land zoning maps, and soil physical constraints across coastal upazilas.',
    whatItSupportsBn: 'উপকূলীয় উপজেলাগুলোর ইউনিয়নভিত্তিক ফসল উপযোগিতা শ্রেণিবিভাগ, কৃষি-পরিবেশ অঞ্চল (AEZ) ও জমির সীমাবদ্ধতা মানচিত্র সমর্থন করে।',
    notes: 'External reference portal. Linked for extension officer verification; not queried via live automated API.',
    isVerified: true,
    dataStatus: 'external_reference',
    portalType: 'barc_czis'
  },
  {
    title: 'BARC Crop Suitability and Zoning Portal',
    organization: 'Bangladesh Agricultural Research Council (BARC)',
    url: 'https://apps.barc.gov.bd/cropzoning/',
    whatItSupports: 'Interactive GIS portal for crop suitability matching, soil texture compatibility, and seasonal crop zoning recommendations for coastal districts.',
    whatItSupportsBn: 'মাটির গঠন ও উপকূলীয় জেলাভিত্তিক মৌসুমী ফসল নির্বাচনের উপযোগিতা এবং ইন্টারেক্টিভ জিআইএস (GIS) জোনিং সহায়তা।',
    notes: 'External reference portal. Open web access; no live database sync in this prototype.',
    isVerified: true,
    dataStatus: 'external_reference',
    portalType: 'barc_czis'
  },
  {
    title: 'BAMIS Agricultural Advisories',
    organization: 'Bangladesh Agrometeorological Information System (BAMIS) / DAE',
    url: 'https://www.bamis.gov.bd/en/advisory/',
    whatItSupports: 'Weekly district/upazila agromet advisories, 15-day weather-based operational guidance for rice, oilseeds, and vegetables.',
    whatItSupportsBn: 'জেলা ও উপজেলাভিত্তিক সাপ্তাহিক কৃষি আবহাওয়া বার্তা, বৃষ্টিপাত ও তাপমাত্রা বিবেচনায় ধাপে ধাপে চাষাবাদের সরকারি দিকনির্দেশনা।',
    notes: 'Official DAE agromet bulletins. Extension officers should inspect current bulletins prior to advising field operations.',
    isVerified: true,
    dataStatus: 'external_reference',
    portalType: 'bamis'
  },
  {
    title: 'BAMIS Flood & Water Warning',
    organization: 'Bangladesh Water Development Board (BWDB) & BAMIS',
    url: 'https://www.bamis.gov.bd/en/bwdb/warning/',
    whatItSupports: 'Real-time and forecasted river stage hydrographs, danger level crossings, and tidal surge inundation bulletins.',
    whatItSupportsBn: 'বন্যা পূর্বাভাস ও সতর্কীকরণ কেন্দ্র (BWDB) কর্তৃক উপকূলীয় নদ-নদীর পানির উচ্চতা, বিপদসীমা ও জোয়ারের প্লাবন বার্তা।',
    notes: 'Official hydrology monitoring portal. Must be consulted for live tidal gauge alerts.',
    isVerified: true,
    dataStatus: 'external_reference',
    portalType: 'bamis'
  }
];

export const CROP_COMPARISONS: CropComparisonItem[] = [
  {
    id: 'brri-dhan-97',
    nameEn: 'BRRI dhan97 (Salt-Tolerant Boro)',
    nameBn: 'ব্রি ধান৯৭ (লবণসহনশীল বোরো ধান)',
    cropTypeEn: 'Irrigated Boro Rice',
    cropTypeBn: 'সেচনির্ভর বোরো ধান',
    season: 'boro',
    seasonNameEn: 'Boro (Winter / Dry Season)',
    seasonNameBn: 'বোরো (রবি / শুষ্ক মৌসুম)',
    suitabilityEn: 'High in moderate salinity pockets across coastal polders (e.g. Satkhira, Khulna, Barguna) where sweet canal or pond water is available during early vegetative stage.',
    suitabilityBn: 'উপকূলীয় পোল্ডারের মাঝারি লবণাক্ত এলাকায় উপযোগী (সাতক্ষীরা, খুলনা, বরগুনা), যেখানে চারা রোপণের সময় মিষ্টি খালের পানি বা পুকুরের পানির ব্যবস্থা আছে।',
    growingDurationDays: 152,
    growingDurationTextEn: '152 days (Official Station Maturity)',
    growingDurationTextBn: '১৫২ দিন (গবেষণাগার জীবনকাল)',
    salinityToleranceEn: 'Station seedling tolerance documented up to 8–10 dS/m under controlled trials. Highly sensitive to salinity at flowering/reproductive stage.',
    salinityToleranceBn: 'নিয়ন্ত্রিত গবেষণায় চারা অবস্থায় ৮-১০ ডিএস/মি পর্যন্ত সহনশীল। তবে ফুল আসার প্রজনন পর্যায়ে লবণাক্ততায় অত্যন্ত সংবেদনশীল।',
    salinityToleranceCategory: 'high',
    floodLimitationEn: 'Zero submergence tolerance. Stagnant cold irrigation water >10 cm or unseasonal winter flooding rots seedlings.',
    floodLimitationBn: 'জলাবদ্ধতা বা নিমজ্জন সহনশীলতা নেই। শীতকালে ১০ সেমি-র বেশি জমে থাকা পানি বা আকস্মিক বৃষ্টিতে চারা পচে যায়।',
    waterNeedsEn: 'High irrigation requirement (1,000–1,200 mm total). Requires 10–14 rounds of freshwater irrigation; canal EC must be tested before every pump cycle.',
    waterNeedsBn: 'উচ্চ সেচ চাহিদা (মোট ১,০০০–১,২০০ মিমি)। ১০-১৪ বার মিষ্টি পানির সেচ প্রয়োজন; পাম্প চালানোর আগে খালের পানির লবণাক্ততা (EC) মাপা আবশ্যক।',
    supportingSource: {
      title: 'BRRI dhan97 Official Rice Profile (#105)',
      organization: 'Bangladesh Rice Research Institute (BRRI)',
      url: 'https://riceprofile.brri.gov.bd/varieties/105',
      whatItSupports: 'Official release agronomic traits: 152-day maturity and station seedling tolerance (8–10 dS/m).',
      whatItSupportsBn: 'সরকারিভাবে অনুমোদিত জাতের বৈশিষ্ট্য, ১৫২ দিনের জীবনকাল ও গবেষণা কেন্দ্রের চারা সহনশীলতা।',
      notes: 'Station trial figures are research averages, NOT a farm-specific yield guarantee.',
      isVerified: true,
      dataStatus: 'integrated'
    },
    keyAssumptionsEn: 'Station experimental averages; requires timely seedling transplanting by late January. Freshwater pond/canal storage must be accessible during March–April flowering.',
    keyAssumptionsBn: 'গবেষণা কেন্দ্রের পরীক্ষামূলক গড়; জানুয়ারির শেষ সপ্তাহের মধ্যে চারা রোপণ বাধ্যতামূলক। মার্চ-এপ্রিলে ফুল ফোটার সময় মিষ্টি পানির সেচ নিশ্চিত থাকতে হবে।',
    costReturn: {
      isAvailable: true,
      bighaUnitEn: 'Per 1 Bigha (33 Decimals)',
      bighaUnitBn: 'প্রতি ১ বিঘা (৩৩ শতক)',
      seedCost: 400,
      landPrepCost: 1500,
      fertilizerCost: 2800,
      irrigationCost: 3500,
      laborCost: 6500,
      totalCost: 14700,
      expectedYieldMin: 18,
      expectedYieldMax: 22,
      yieldUnitEn: 'Maunds / Bigha (approx 4.5–5.5 t/ha)',
      yieldUnitBn: 'মণ / বিঘা (প্রায় ৪.৫–৫.৫ টন/হেক্টর)',
      priceMin: 950,
      priceMax: 1150,
      priceUnitEn: 'BDT / Maund (Post-Harvest Farmgate)',
      priceUnitBn: 'টাকা / মণ (মাঠের বিক্রয়মূল্য)',
      grossReturnMin: 17100, // 18 * 950
      grossReturnMax: 25300, // 22 * 1150
      netReturnMin: 2400,    // 17100 - 14700
      netReturnMax: 10600,   // 25300 - 14700
      calculationMethodEn: 'Total Cost = Seed + Tillage + Balanced Fertilizer (Urea, TSP, MoP, Gypsum, Zinc) + Canal Pumping Fuel + Transplanting/Harvest Labor. Net Return = (Yield × Farmgate Price) − Total Cost.',
      calculationMethodBn: 'মোট ব্যয় = বীজ + জমি তৈরি + সুষম সার (ইউরিয়া, টিএসপি, এমওপি, জিপসাম, দস্তা) + সেচ জ্বালানি + রোপণ/কাটা শ্রমিক। নিট লাভ = (ফলন × বিক্রয়মূল্য) − মোট ব্যয়।',
      missingOrVolatileVariablesEn: [
        'Local canal water rental and pump diesel tariffs (fluctuate widely across polders).',
        'Daily post-harvest market wholesale prices during peak harvesting weeks.',
        'Risk of flowering-stage salinity spike if canal lock gates leak tidal seawater.'
      ],
      missingOrVolatileVariablesBn: [
        'স্থানীয় পাম্প ভাড়া ও ডিজেলের মূল্য (পোল্ডারভেদে ভিন্ন হয়)।',
        'বোরো কাটার ভরা মৌসুমে পাইকারি ধানের বাজারদরের তীব্র ওঠানামা।',
        'মার্চ-এপ্রিলে স্লুইস গেট দিয়ে লোনা পানি ঢুকে সেচ বন্ধ হওয়ার আর্থিক ঝুঁকি।'
      ],
      sensitivityWarningEn: 'HIGH FINANCIAL RISK: High pumping fuel expenses (~24% of cost) and flowering salinity vulnerability mean net returns can turn negative if salinity spikes.',
      sensitivityWarningBn: 'উচ্চ আর্থিক ঝুঁকি: সেচের পেছনে মোট ব্যয়ের প্রায় এক-চতুর্থাংশ খরচ হয়। ফুল আসার সময় লোনা পানির কারণে ফলন বিপর্যয় হলে লোকসানের ঝুঁকি থাকে।'
    }
  },
  {
    id: 'brri-dhan-99',
    nameEn: 'BRRI dhan99 (Salt-Tolerant Boro)',
    nameBn: 'ব্রি ধান৯৯ (লবণসহনশীল বোরো ধান)',
    cropTypeEn: 'Irrigated Boro Rice',
    cropTypeBn: 'সেচনির্ভর বোরো ধান',
    season: 'boro',
    seasonNameEn: 'Boro (Winter / Dry Season)',
    seasonNameBn: 'বোরো (রবি / শুষ্ক মৌসুম)',
    suitabilityEn: 'Documented for coastal saline areas with medium land elevation where farmers can manage water depth and protect from late saline tidal influx.',
    suitabilityBn: 'উপকূলীয় মাঝারি উঁচু জমিতে উপযোগী যেখানে পানির গভীরতা নিয়ন্ত্রণ করা সম্ভব এবং শেষ সময়ে লোনা পানি প্রবেশ ঠেকানো যায়।',
    growingDurationDays: 155,
    growingDurationTextEn: '155 days (Official Station Maturity)',
    growingDurationTextBn: '১৫৫ দিন (গবেষণাগার জীবনকাল)',
    salinityToleranceEn: 'Vegetative salt tolerance demonstrated in station trials. Station figures are not an individual farm guarantee; soil testing is required.',
    salinityToleranceBn: 'গবেষণাগারের পরীক্ষায় বৃদ্ধি পর্যায়ে লবণসহনশীল। তবে কোনো নির্দিষ্ট খামারের নিশ্চয়তা নয়; মাটি ও পানি পরীক্ষা বাধ্যতামূলক।',
    salinityToleranceCategory: 'high',
    floodLimitationEn: 'Low flood submergence tolerance; requires well-drained low-bunded paddies.',
    floodLimitationBn: 'বন্যা বা নিমজ্জন সহনশীলতা কম; পানি নিষ্কাশনের সুবিধাযুক্ত জমি প্রয়োজন।',
    waterNeedsEn: 'Standard Boro irrigation requirement (~1,000–1,200 mm). Freshwater required especially during panicle initiation.',
    waterNeedsBn: 'স্বাভাবিক বোরো সেচ চাহিদা (~১,০০০–১,২০০ মিমি)। শিষ বের হওয়ার সময় মিষ্টি পানি অপরিহার্য।',
    supportingSource: {
      title: 'BRRI dhan99 Official Rice Profile (#106)',
      organization: 'Bangladesh Rice Research Institute (BRRI)',
      url: 'https://riceprofile.brri.gov.bd/varieties/106',
      whatItSupports: 'Official varietal release entry: 155-day maturity and experimental vegetative salinity tolerance.',
      whatItSupportsBn: 'সরকারি জাতের প্রোফাইল: ১৫৫ দিনের জীবনকাল ও নিয়ন্ত্রিত গবেষণায় বৃদ্ধি পর্যায়ের লবণসহনশীলতা।',
      notes: 'Station trials; requires local extension officer (SAAO) verification.',
      isVerified: true,
      dataStatus: 'integrated'
    },
    keyAssumptionsEn: 'Station trials; 155-day maturity requires starting nursery beds in December to complete harvest before intense May pre-monsoon cyclonic storms.',
    keyAssumptionsBn: '১৫৫ দিনের জীবনকালের কারণে ডিসেম্বরেই বীজতলা ফেলতে হয়, যাতে মে মাসের কালবৈশাখী ও আগাম জোয়ারের আগেই ধান ঘরে তোলা যায়।',
    costReturn: {
      isAvailable: true,
      bighaUnitEn: 'Per 1 Bigha (33 Decimals)',
      bighaUnitBn: 'প্রতি ১ বিঘা (৩৩ শতক)',
      seedCost: 400,
      landPrepCost: 1500,
      fertilizerCost: 2800,
      irrigationCost: 3600,
      laborCost: 6500,
      totalCost: 14800,
      expectedYieldMin: 18,
      expectedYieldMax: 21,
      yieldUnitEn: 'Maunds / Bigha (approx 4.5–5.2 t/ha)',
      yieldUnitBn: 'মণ / বিঘা (প্রায় ৪.৫–৫.২ টন/হেক্টর)',
      priceMin: 950,
      priceMax: 1150,
      priceUnitEn: 'BDT / Maund',
      priceUnitBn: 'টাকা / মণ',
      grossReturnMin: 17100,
      grossReturnMax: 24150,
      netReturnMin: 2300,
      netReturnMax: 9350,
      calculationMethodEn: 'Total Cost = Certified Seed + Plowing + Standard Fertilizer Dose + Pumping Irrigation + Field Labor. Net Return = Gross Revenue − Production Cost.',
      calculationMethodBn: 'মোট ব্যয় = অনুমোদিত বীজ + চাষ + সুষম সার + সেচ খরচ + মাঠের শ্রমিক। নিট লাভ = মোট আয় − মোট উৎপাদন খরচ।',
      missingOrVolatileVariablesEn: [
        'Local electricity/diesel availability and tariff rates during peak dry spell in March.',
        'Pest outbreaks (brown planthopper risk under high nitrogen fertilizer use).'
      ],
      missingOrVolatileVariablesBn: [
        'মার্চ মাসের তীব্র খরায় সেচের বিদ্যুৎ বা ডিজেলের প্রাপ্যতা ও স্থানীয় খরচ।',
        'অতিরিক্ত ইউরিয়া ব্যবহারে বাদামি ঘাসফড়িং (কারেন্ট পোকা) আক্রমণের ঝুঁকি।'
      ],
      sensitivityWarningEn: 'Returns are sensitive to harvest-time market price drops and canal salinity spikes.',
      sensitivityWarningBn: 'কাটার সময় বাজারে ধানের দাম পড়ে গেলে বা খালের পানি লোনা হয়ে গেলে লাভ কমে যাওয়ার ঝুঁকি থাকে।'
    }
  },
  {
    id: 'brri-dhan-67',
    nameEn: 'BRRI dhan67 (Early-Maturing Salt-Tolerant Boro)',
    nameBn: 'ব্রি ধান৬৭ (আগাম পক্ব লবণসহনশীল বোরো)',
    cropTypeEn: 'Short-Duration Boro Rice',
    cropTypeBn: 'স্বল্পমেয়াদী বোরো ধান',
    season: 'boro',
    seasonNameEn: 'Boro (Winter / Dry Season)',
    seasonNameBn: 'বোরো (রবি / শুষ্ক মৌসুম)',
    suitabilityEn: 'Well suited for coastal zones where canal water turns highly saline by mid-April; 140–145 day duration enables harvest 10 days earlier than dhan97.',
    suitabilityBn: 'উপকূলীয় যেসব এলাকায় এপ্রিলের মাঝামাঝি খালের পানি খুব লোনা হয়ে যায় সেখানে উপযোগী; ১৪০-১৪৫ দিনের জীবনকালের কারণে ব্রি ধান৯৭ এর চেয়ে ১০ দিন আগে কাটা যায়।',
    growingDurationDays: 142,
    growingDurationTextEn: '140–145 days (Shorter duration helps escape peak salinity)',
    growingDurationTextBn: '১৪০–১৪৫ দিন (স্বল্প জীবনকালে শেষ মৌসুমের লবণাক্ততা এড়ানো যায়)',
    salinityToleranceEn: 'Station seedling tolerance up to 8 dS/m (controlled station trials). Moderate tolerance during grain filling.',
    salinityToleranceBn: 'গবেষণাগার চারা অবস্থায় ৮ ডিএস/মি পর্যন্ত সহনশীল। শিষ পুষ্ট হওয়ার সময় মাঝারি সহনশীল।',
    salinityToleranceCategory: 'moderate',
    floodLimitationEn: 'Low flood submergence tolerance.',
    floodLimitationBn: 'জলাবদ্ধতা বা বন্যা সহনশীলতা কম।',
    waterNeedsEn: 'Moderate-High. Saves 1–2 irrigation rounds compared to 155-day varieties, conserving pond freshwater.',
    waterNeedsBn: 'মাঝারি-উচ্চ সেচ। দীর্ঘমেয়াদী জাতের চেয়ে ১-২টি সেচ কম লাগে, ফলে সংরক্ষিত মিষ্টি পানি বাঁচে।',
    supportingSource: {
      title: 'BARC Crop Suitability and Zoning Portal',
      organization: 'Bangladesh Agricultural Research Council (BARC)',
      url: 'https://apps.barc.gov.bd/cropzoning/',
      whatItSupports: 'Agro-ecological suitability mapping and crop duration recommendation for saline upazilas.',
      whatItSupportsBn: 'লবণাক্ত উপজেলার জন্য কৃষি-পরিবেশগত উপযোগিতা ও স্বল্পমেয়াদী ফসল বিন্যাস মানচিত্র।',
      notes: 'Consult local Upazila Agriculture Office for certified seed availability.',
      isVerified: true,
      dataStatus: 'external_reference',
      portalType: 'barc_czis'
    },
    keyAssumptionsEn: 'Early maturity reduces exposure to late dry season salinity, but requires timely transplanting by January 15.',
    keyAssumptionsBn: 'আগাম পক্বতা শেষ মৌসুমের তীব্র লবণ এড়াতে সাহায্য করে; তবে ১৫ জানুয়ারির মধ্যে চারা রোপণ করতে হবে।',
    costReturn: {
      isAvailable: true,
      bighaUnitEn: 'Per 1 Bigha (33 Decimals)',
      bighaUnitBn: 'প্রতি ১ বিঘা (৩৩ শতক)',
      seedCost: 400,
      landPrepCost: 1500,
      fertilizerCost: 2700,
      irrigationCost: 3000, // Saves 1-2 waterings
      laborCost: 6300,
      totalCost: 13900,
      expectedYieldMin: 17,
      expectedYieldMax: 21,
      yieldUnitEn: 'Maunds / Bigha (approx 4.2–5.2 t/ha)',
      yieldUnitBn: 'মণ / বিঘা (প্রায় ৪.২–৫.২ টন/হেক্টর)',
      priceMin: 950,
      priceMax: 1150,
      priceUnitEn: 'BDT / Maund',
      priceUnitBn: 'টাকা / মণ',
      grossReturnMin: 16150,
      grossReturnMax: 24150,
      netReturnMin: 2250,
      netReturnMax: 10250,
      calculationMethodEn: 'Total Cost reflects reduced pumping rounds (saves ~BDT 500 in diesel/electricity). Net Return = Gross Revenue − Production Cost.',
      calculationMethodBn: 'স্বল্প জীবনকালের কারণে সেচ খরচ কিছুটা কম। নিট লাভ = বিক্রয় আয় − মোট ব্যয়।',
      missingOrVolatileVariablesEn: [
        'Local availability of certified breeder/foundation seed at BADC dealers.',
        'Grain shattering sensitivity if harvest is delayed during sudden dry winds.'
      ],
      missingOrVolatileVariablesBn: [
        'স্থানীয় বিএডিসি ডিলারের কাছে মানসম্মত বীজের সহজলভ্যতা।',
        'দেরিতে কাটলে গরম বাতাসে শিষ থেকে ধান ঝরে পড়ার প্রবণতা।'
      ],
      sensitivityWarningEn: 'Earlier harvest provides risk reduction against late canal salinity, but net returns remain dependent on prevailing market prices.',
      sensitivityWarningBn: 'দেরির লবণাক্ততা এড়ানোর ক্ষেত্রে এটি নিরাপদ, তবে মোট লাভ নির্ভর করে তৎকালীন ধান বিক্রির দরের ওপর।'
    }
  },
  {
    id: 'br-23-late-aman',
    nameEn: 'BR23 (Disari / Late Transplanted Aman)',
    nameBn: 'ব্রি২৩ (দিশারী / নাবী রোপা আমন)',
    cropTypeEn: 'Rainfed Photoperiod-Sensitive Aman Rice',
    cropTypeBn: 'বৃষ্টি-নির্ভর আলোকসংবেদনশীল নাবী আমন ধান',
    season: 'aman',
    seasonNameEn: 'Aman (Monsoon / Post-Flood Season)',
    seasonNameBn: 'আমন (বর্ষা / বন্যা পরবর্তী মৌসুম)',
    suitabilityEn: 'High in low-lying coastal polders (e.g. Patuakhali, Bhola, Khulna) where tidal waterlogging or silted sluice gates delay transplanting until late August or early September.',
    suitabilityBn: 'নিচু পোল্ডার এলাকায় অত্যন্ত উপযোগী (পটুয়াখালী, ভোলা, খুলনা), যেখানে স্লুইস গেটের পলি বা জলাবদ্ধতার কারণে আগস্টের শেষ বা সেপ্টেম্বরের শুরু পর্যন্ত রোপণ বিলম্বিত হয়।',
    growingDurationDays: 150,
    growingDurationTextEn: 'Photoperiod sensitive (Flowers when daylength shortens in Nov)',
    growingDurationTextBn: 'আলোকসংবেদনশীল (দেরিতে রোপণ করলেও নভেম্বরে দিন ছোট হলে ফুল আসে)',
    salinityToleranceEn: 'Low to moderate. Monsoon rainwater naturally leaches topsoil salinity, making post-flood coastal soil suitable.',
    salinityToleranceBn: 'মাঝারি সহনশীল। বর্ষার প্রচুর বৃষ্টিতে মাটির উপরিভাগের লবণ ধুয়ে যাওয়ায় এ সময় লবণাক্ততার চাপ কম থাকে।',
    salinityToleranceCategory: 'moderate',
    floodLimitationEn: 'Can tolerate standing water up to 25–30 cm if older, robust seedlings (35–45 days) are used. Cannot survive complete submerged turbid water beyond 7 days.',
    floodLimitationBn: 'বয়স্ক ও শক্ত চারা (৩৫-৪৫ দিন) ব্যবহার করলে ২৫-৩০ সেমি জমে থাকা পানি সহ্য করতে পারে। তবে ঘোলা পানির নিচে সম্পূর্ণ ৭ দিনের বেশি ডুবে থাকলে টিকে না।',
    waterNeedsEn: 'Zero to Low Pumping. Rainfed monsoon crop; no diesel pumping expenses under regular monsoon rainfall.',
    waterNeedsBn: 'সেচ খরচ নেই বললেই চলে। সম্পূর্ণ বৃষ্টির পানিতে চাষ; স্বাভাবিক বর্ষায় কোনো ডিজেল পাম্পের খরচ লাগে না।',
    supportingSource: {
      title: 'BAMIS Agricultural Advisories & DAE Guidelines',
      organization: 'Department of Agricultural Extension (DAE)',
      url: 'https://www.bamis.gov.bd/en/advisory/',
      whatItSupports: 'Recommended agronomic practice for post-flood delayed Aman transplanting with photoperiod-sensitive cultivars.',
      whatItSupportsBn: 'বন্যা পরবর্তী নাবী আমন রোপণ ও আলোকসংবেদনশীল জাত নির্বাচনের সরকারি সম্প্রসারণ সুপারিশ।',
      notes: 'Extension reference; confirms older seedling management practices.',
      isVerified: true,
      dataStatus: 'external_reference',
      portalType: 'bamis'
    },
    keyAssumptionsEn: 'Requires floodwaters to drop below seedling leaf crowns by early September; assumes farmer uses 35–45 day older seedlings planted slightly denser (3–4 per hill).',
    keyAssumptionsBn: 'সেপ্টেম্বরের শুরুর মধ্যে চারার মাথার ওপর থেকে পানি নেমে যাওয়া আবশ্যক; প্রতি গোছায় ৩-৪টি করে কিছুটা বয়স্ক চারা ঘন করে লাগাতে হয়।',
    costReturn: {
      isAvailable: true,
      bighaUnitEn: 'Per 1 Bigha (33 Decimals)',
      bighaUnitBn: 'প্রতি ১ বিঘা (৩৩ শতক)',
      seedCost: 350,
      landPrepCost: 1200,
      fertilizerCost: 2000,
      irrigationCost: 0, // Rainfed under regular monsoon
      laborCost: 5000,
      totalCost: 8550,
      expectedYieldMin: 12,
      expectedYieldMax: 15,
      yieldUnitEn: 'Maunds / Bigha (approx 3.0–3.8 t/ha)',
      yieldUnitBn: 'মণ / বিঘা (প্রায় ৩.০–৩.৮ টন/হেক্টর)',
      priceMin: 1000,
      priceMax: 1200,
      priceUnitEn: 'BDT / Maund',
      priceUnitBn: 'টাকা / মণ',
      grossReturnMin: 12000, // 12 * 1000
      grossReturnMax: 18000, // 15 * 1200
      netReturnMin: 3450,    // 12000 - 8550
      netReturnMax: 9450,    // 18000 - 8550
      calculationMethodEn: 'Total Cost = Seed + Minimal Tillage + Light Fertilizer + Zero Pumping (Rainfed) + Labor. Net Return = (Yield × Aman Price) − Total Cost.',
      calculationMethodBn: 'মোট ব্যয় = বীজ + হালকা চাষ + সীমিত সার + শূন্য সেচ (বৃষ্টি-নির্ভর) + শ্রমিক। নিট লাভ = (ফলন × বিক্রয়মূল্য) − মোট ব্যয়।',
      missingOrVolatileVariablesEn: [
        'Risk of prolonged sluice gate blockage delaying recession past mid-September.',
        'Late tidal surge flooding during heading/flowering stage in November.'
      ],
      missingOrVolatileVariablesBn: [
        'স্লুইস গেট পলি বন্ধ থাকার কারণে পানি নামতে মধ্য-সেপ্টেম্বর পার হয়ে যাওয়ার ঝুঁকি।',
        'নভেম্বর মাসে ফুল আসার সময় হঠাৎ ঘূর্ণিঝড়ের জলোচ্ছ্বাস প্রবেশ।'
      ],
      sensitivityWarningEn: 'LOWER PRODUCTION COST: Produces lower yield than Boro, but zero irrigation fuel requirement drastically reduces smallholder capital debt risk.',
      sensitivityWarningBn: 'স্বল্প উৎপাদন খরচ: বোরো ধানের চেয়ে ফলন কম হলেও সেচ জ্বালানির খরচ না থাকায় ঋণের বোঝা অনেক কম হয়।'
    }
  },
  {
    id: 'bari-sarisha-14',
    nameEn: 'BARI Sarisha-14 (Short-Duration Mustard)',
    nameBn: 'বারি সরিষা-১৪ (স্বল্পমেয়াদী সরিষা)',
    cropTypeEn: 'Rabi Cash Oilseed Crop',
    cropTypeBn: 'রবি মৌসুমের তেলজাতীয় অর্থকরী ফসল',
    season: 'rabi',
    seasonNameEn: 'Rabi (Winter Non-Rice)',
    seasonNameBn: 'রবি (শীতকালীন অনাবৃষ্টি মৌসুম)',
    suitabilityEn: 'Medium-high well-drained coastal land after early Aman harvest (e.g. Jessore, Khulna, Bhola). Captures residual soil moisture before March salt crusting.',
    suitabilityBn: 'উপকূলের মাঝারি উঁচু ও পানি নিষ্কাশন সুবিধাযুক্ত জমিতে আমন কাটার পর উপযোগী। মার্চ মাসে লবণ ওঠার আগেই মাটির আর্দ্রতা কাজে লাগিয়ে ফসল তোলা যায়।',
    growingDurationDays: 78,
    growingDurationTextEn: '75–80 days (Very rapid field turnaround)',
    growingDurationTextBn: '৭৫–৮০ দিন (খুব দ্রুত ঘরে তোলা যায়)',
    salinityToleranceEn: 'Low to moderate (<4 dS/m during early germination). Station trials confirm sensitivity if soil salinity surges.',
    salinityToleranceBn: 'কম থেকে মাঝারি (অঙ্কুরোদগমের সময় ৪ ডিএস/মি-র নিচে)। লবণাক্ততা বাড়লে ফুল ঝরে যায়।',
    salinityToleranceCategory: 'low',
    floodLimitationEn: 'ZERO WATERLOGGING TOLERANCE. Stagnant standing water >24 hours causes total root rot and crop death.',
    floodLimitationBn: 'জলাবদ্ধতা একেবারেই সহ্য করতে পারে না। জমিতে ২৪ ঘণ্টার বেশি পানি জমে থাকলে শিকড় পচে গাছ সম্পূর্ণ মারা যায়।',
    waterNeedsEn: 'Very Low. 1–2 light irrigations or grown entirely on residual moisture from the preceding Aman harvest.',
    waterNeedsBn: 'খুবই কম। মাত্র ১-২টি হালকা সেচ লাগে, কিংবা আমন কাটার পর মাটির রসেও ফসল হয়ে যায়।',
    supportingSource: {
      title: 'BARC Crop Suitability and Zoning Portal',
      organization: 'Bangladesh Agricultural Research Council (BARC)',
      url: 'https://apps.barc.gov.bd/cropzoning/',
      whatItSupports: 'Crop zoning and soil drainage suitability for short-duration oilseeds in coastal zones.',
      whatItSupportsBn: 'উপকূলীয় অঞ্চলে স্বল্পমেয়াদী তেল ফসলের জন্য মাটির নিষ্কাশন উপযোগিতা ও জোনিং মানচিত্র।',
      notes: 'Station research parameters from BARI Oilseed Research Division.',
      isVerified: true,
      dataStatus: 'external_reference',
      portalType: 'barc_czis'
    },
    keyAssumptionsEn: 'Requires well-drained raised beds or light tillage; must be sown between mid-November and early December. High sensitivity to unseasonal winter rain.',
    keyAssumptionsBn: 'উঁচু ও দ্রুত পানি নেমে যায় এমন জমি প্রয়োজন; ১৫ নভেম্বর থেকে ৫ ডিসেম্বরের মধ্যে বুনতে হবে। শীতকালে অসময়ের বৃষ্টিতে মারাত্মক ঝুঁকি থাকে।',
    costReturn: {
      isAvailable: true,
      bighaUnitEn: 'Per 1 Bigha (33 Decimals)',
      bighaUnitBn: 'প্রতি ১ বিঘা (৩৩ শতক)',
      seedCost: 250,
      landPrepCost: 1000,
      fertilizerCost: 1800,
      irrigationCost: 800, // 1 light flush
      laborCost: 3200,
      totalCost: 7050,
      expectedYieldMin: 4.5,
      expectedYieldMax: 6.0,
      yieldUnitEn: 'Maunds / Bigha (approx 1.2–1.6 t/ha)',
      yieldUnitBn: 'মণ / বিঘা (প্রায় ১.২–১.৬ টন/হেক্টর)',
      priceMin: 2800,
      priceMax: 3500,
      priceUnitEn: 'BDT / Maund (High Cash Crop Farmgate)',
      priceUnitBn: 'টাকা / মণ (তেলবীজের উচ্চ বাজারদর)',
      grossReturnMin: 12600, // 4.5 * 2800
      grossReturnMax: 21000, // 6.0 * 3500
      netReturnMin: 5550,    // 12600 - 7050
      netReturnMax: 13950,   // 21000 - 7050
      calculationMethodEn: 'Total Cost = Certified Seed (1 kg) + Minimal Tillage + Fertilizer (Urea, TSP, MoP, Boron, Sulfur) + 1 Light Flush + Harvesting Labor. Net Return = (Yield × Mustard Price) − Total Cost.',
      calculationMethodBn: 'মোট ব্যয় = ১ কেজি বীজ + হালকা চাষ + সার (ইউরিয়া, টিএসপি, এমওপি, বোরন, জিপসাম) + ১টি হালকা সেচ + তোলা/মাড়াই শ্রমিক। নিট লাভ = (ফলন × বাজারমূল্য) − মোট ব্যয়।',
      missingOrVolatileVariablesEn: [
        'Unseasonal cyclonic rains (e.g. Cyclone Jawad type rainfall) can destroy 100% of standing crop.',
        'Aphid pest pressure during flowering stage requiring pesticide intervention.',
        'Volatile local wholesale oilseed market prices.'
      ],
      missingOrVolatileVariablesBn: [
        'শীতকালীন হঠাৎ অতিবৃষ্টি বা অসময়ের জলোচ্ছ্বাসে ১০০% ফসল ধ্বংস হওয়ার মারাত্মক ঝুঁকি।',
        'ফুল আসার সময় জাবপোকা (Aphid) দমনে বালাইনাশক ব্যবহারের অতিরিক্ত খরচ।',
        'স্থানীয় বাজারে সরিষার পাইকারি মূল্যের তীব্র ওঠানামা।'
      ],
      sensitivityWarningEn: 'HIGH REWARD BUT ZERO FLOOD TOLERANCE: Highly profitable under dry sunny winters, but NEVER guaranteed most profitable because a single downpour completely destroys the crop.',
      sensitivityWarningBn: 'উচ্চ লাভের সম্ভাবনা কিন্তু অতিবৃষ্টির ঝুঁকি: রোদোজ্জ্বল শীতে ভালো লাভ হলেও কখনোই নিশ্চিত মুনাফার নিশ্চয়তা দেওয়া যায় না; এক পশলা ভারী বৃষ্টিতেই পুরো ফসল নষ্ট হতে পারে।'
    }
  },
  {
    id: 'bari-khesari-3',
    nameEn: 'BARI Khesari-3 (Grasspea - Zero-Tillage Relay Pulse)',
    nameBn: 'বারি খেসারী-৩ (রিলে ডাল ফসল - বিনা চাষে আবাদ)',
    cropTypeEn: 'Relay Legume / Pulse Crop',
    cropTypeBn: 'আমন পরবর্তী রিলে ডাল ফসল',
    season: 'rabi',
    seasonNameEn: 'Rabi Relay (Winter Non-Rice)',
    seasonNameBn: 'রবি রিলে (বিনা চাষে আবাদ)',
    suitabilityEn: 'Extremely popular in coastal low-to-medium land across Barisal, Patuakhali, and Bhola. Broadcast directly into standing Aman paddy mud 15–20 days before harvest.',
    suitabilityBn: 'বরিশাল, পটুয়াখালী ও ভোলার নিচু ও মাঝারি জমিতে বহুল প্রচলিত। আমন ধান কাটার ১৫-২০ দিন আগে দাঁড়ানো ধানের কাদাময় জমিতে সরাসরি বীজ ছিটিয়ে দেওয়া হয়।',
    growingDurationDays: 115,
    growingDurationTextEn: '110–120 days (Relay with standing Aman)',
    growingDurationTextBn: '১১০–১২০ দিন (আমনের জমিতে রিলে ফসল)',
    salinityToleranceEn: 'Moderate tolerance to residual soil salinity. Fixes biological atmospheric nitrogen, improving soil health.',
    salinityToleranceBn: 'মাঝারি লবণাক্ততা সহনশীল। বাতাসে থাকা নাইট্রোজেন মাটিতে ধরে রেখে মাটির স্বাস্থ্য ভালো করে।',
    salinityToleranceCategory: 'moderate',
    floodLimitationEn: 'Requires muddy moist soil at sowing, but dies if submerged in stagnant deep water after germination.',
    floodLimitationBn: 'বীজ ছিটানোর সময় জমিতে নরম কাদা থাকা জরুরি; তবে চারা গজানোর পর বেশি পানি জমলে মারা যায়।',
    waterNeedsEn: 'Zero Irrigation. Utilizes residual soil moisture and morning winter dew exclusively.',
    waterNeedsBn: 'কোনো সেচ লাগে না। সম্পূর্ণভাবে মাটির অবশিষ্ট রস এবং শীতের কুয়াশা ও শিশিরের ওপর নির্ভর করে বাড়ে।',
    supportingSource: {
      title: 'BARC Crop Zoning Information System (CZIS)',
      organization: 'Bangladesh Agricultural Research Council (BARC)',
      url: 'https://czis.cropzoning.gov.bd/',
      whatItSupports: 'Documentation of relay cropping systems, cropping intensity enhancement, and coastal soil moisture budgeting.',
      whatItSupportsBn: 'উপকূলীয় অঞ্চলে আমন পরবর্তী রিলে ফসলের উপযোগিতা ও মাটির আর্দ্রতা ব্যবহারের সরকারি তথ্যভাণ্ডার।',
      notes: 'BARI Pulses Research Division certified variety data.',
      isVerified: true,
      dataStatus: 'external_reference',
      portalType: 'barc_czis'
    },
    keyAssumptionsEn: 'Zero plowing cost; farmer broadcasts seed directly into standing crop. Assumes field stays moist during seedling emergence and open cattle grazing is controlled.',
    keyAssumptionsBn: 'চাষের খরচ শূন্য; দাঁড়ানো আমনে বীজ ছিটানো হয়। চারা গজানোর সময় জমিতে পর্যাপ্ত রস থাকতে হবে এবং উন্মুক্ত গবাদিপশুর মুখ থেকে রক্ষা করতে হবে।',
    costReturn: {
      isAvailable: true,
      bighaUnitEn: 'Per 1 Bigha (33 Decimals)',
      bighaUnitBn: 'প্রতি ১ বিঘা (৩৩ শতক)',
      seedCost: 600, // 7 kg certified seed @ BDT 85/kg
      landPrepCost: 0,   // Zero tillage
      fertilizerCost: 500, // Minimal or zero
      irrigationCost: 0, // Zero irrigation
      laborCost: 2500, // Harvesting and threshing
      totalCost: 3600,
      expectedYieldMin: 4.0,
      expectedYieldMax: 6.0,
      yieldUnitEn: 'Maunds / Bigha (approx 1.0–1.5 t/ha)',
      yieldUnitBn: 'মণ / বিঘা (প্রায় ১.০–১.৫ টন/হেক্টর)',
      priceMin: 2200,
      priceMax: 2600,
      priceUnitEn: 'BDT / Maund',
      priceUnitBn: 'টাকা / মণ',
      grossReturnMin: 8800,  // 4.0 * 2200
      grossReturnMax: 15600, // 6.0 * 2600
      netReturnMin: 5200,    // 8800 - 3600
      netReturnMax: 12000,   // 15600 - 3600
      calculationMethodEn: 'Total Cost = Seed (7 kg) + Zero Tillage + Minimal Fertilizer + Zero Pumping + Harvesting Labor. Net Return = (Yield × Market Price) − Total Cost.',
      calculationMethodBn: 'মোট ব্যয় = ৭ কেজি বীজ + শূন্য চাষ + সামান্য সার + শূন্য সেচ + কাটা ও মাড়াই শ্রমিক। নিট লাভ = (ফলন × বাজারমূল্য) − মোট ব্যয়।',
      missingOrVolatileVariablesEn: [
        'Uncontrolled cattle grazing in community open polders during dry winter months.',
        'Pod borer insect damage if unmonitored during pod maturation.',
        'Soil moisture deficit if topsoil dries out too rapidly after Aman harvest.'
      ],
      missingOrVolatileVariablesBn: [
        'শীতকালে ফসলহীন মাঠে অবাধে গরু-মহিষ চড়ানোর কারণে ফসল নষ্টের ঝুঁকি।',
        'শুটি পাকার সময় শুঁয়োপোকা বা ফল ছিদ্রকারী পোকার আক্রমণ।',
        'আমন কাটার পর মাঠ খুব দ্রুত শুকিয়ে খটখটে হয়ে গেলে গাছ শুকিয়ে যাওয়ার ঝুঁকি।'
      ],
      sensitivityWarningEn: 'LOWEST CAPITAL RISK: Extremely low cash outlay (BDT ~3,600/bigha); ideal for debt-averse farmers, but depends heavily on timely sowing and field moisture.',
      sensitivityWarningBn: 'সর্বনিম্ন পুঁজির ঝুঁকি: বিঘায় মাত্র প্রায় ৩,৬০০ টাকা খরচ হওয়ায় ক্ষুদ্র কৃষকের জন্য নিরাপদ; তবে সঠিক সময়ে কাদার মধ্যে বীজ ছিটানো এবং আর্দ্রতা থাকার ওপর ফলন নির্ভরশীল।'
    }
  }
];
