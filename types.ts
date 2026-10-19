
export type TopicType = 'salinity' | 'flooding' | 'changing_rainfall';

export interface StudyAreaOption {
  id: string;
  nameEn: string;
  nameBn: string;
  contextEn: string;
  contextBn: string;
}

export interface AdaptationOption {
  title: string;
  titleBn: string;
  details: string;
  detailsBn: string;
  targetExpert: string;
}

export type DataStatusCategory =
  | 'integrated_rules'
  | 'external_portal_linked'
  | 'station_trial'
  | 'survey_average'
  | 'unverified_estimate'
  | 'missing_data';

export interface SourceReference {
  title: string;
  organization: string;
  url?: string;
  whatItSupports: string;
  whatItSupportsBn?: string;
  notes: string;
  isVerified?: boolean;
  dataStatus?: 'integrated' | 'external_reference' | 'unverified';
  portalType?: 'barc_czis' | 'bamis' | 'brri' | 'fao' | 'other';
}

export interface CostReturnModel {
  isAvailable: boolean;
  bighaUnitEn: string;
  bighaUnitBn: string;
  seedCost: number;
  landPrepCost: number;
  fertilizerCost: number;
  irrigationCost: number;
  laborCost: number;
  totalCost: number;
  expectedYieldMin: number;
  expectedYieldMax: number;
  yieldUnitEn: string;
  yieldUnitBn: string;
  priceMin: number;
  priceMax: number;
  priceUnitEn: string;
  priceUnitBn: string;
  grossReturnMin: number;
  grossReturnMax: number;
  netReturnMin: number;
  netReturnMax: number;
  calculationMethodEn: string;
  calculationMethodBn: string;
  missingOrVolatileVariablesEn: string[];
  missingOrVolatileVariablesBn: string[];
  sensitivityWarningEn: string;
  sensitivityWarningBn: string;
}

export interface CropComparisonItem {
  id: string;
  nameEn: string;
  nameBn: string;
  cropTypeEn: string;
  cropTypeBn: string;
  season: 'boro' | 'aman' | 'rabi';
  seasonNameEn: string;
  seasonNameBn: string;
  suitabilityEn: string;
  suitabilityBn: string;
  growingDurationDays: number | string;
  growingDurationTextEn: string;
  growingDurationTextBn: string;
  salinityToleranceEn: string;
  salinityToleranceBn: string;
  salinityToleranceCategory: 'low' | 'moderate' | 'high';
  floodLimitationEn: string;
  floodLimitationBn: string;
  waterNeedsEn: string;
  waterNeedsBn: string;
  supportingSource: SourceReference;
  keyAssumptionsEn: string;
  keyAssumptionsBn: string;
  costReturn: CostReturnModel;
}

export interface AnalysisResult {
  summary: string;
  summaryBn: string;
  evidenceSupports: string[];
  evidenceSupportsBn: string[];
  uncertainties: string[];
  uncertaintiesBn: string[];
  adaptationOptions: AdaptationOption[];
  additionalInfoNeeded: string[];
  additionalInfoNeededBn: string[];
  sources: SourceReference[];
  farmerSpeakingPoints: string[];
  farmerSpeakingPointsBn: string[];
  isFallback?: boolean;
  modelUsed?: string;
  disclaimer: string;
  topic?: TopicType;
  studyArea?: string;
  question?: string;
  timestamp?: string;
  isDemonstration?: boolean;
  scenarioTitle?: string;
  hasMissingDataScenario?: boolean;
  hasProfitGuardrail?: boolean;
}

export interface DemoScenario {
  id: string;
  title: string;
  titleBn: string;
  topic: TopicType;
  studyArea: string;
  farmerProfile: string;
  farmerProfileBn: string;
  narrativeEn: string;
  narrativeBn: string;
  questionPrompt: string;
  questionPromptBn?: string;
  mockResult: AnalysisResult;
}

export interface ScientificClaimItem {
  claimEn: string;
  claimBn: string;
  sourceTitle: string;
  sourceUrl?: string;
  isVerified: boolean;
  whatSourceSupports: string;
  whatSourceSupportsBn?: string;
  farmAdviceCaution?: string;
  farmAdviceCautionBn?: string;
  evidenceType?:
    | 'station_trial'
    | 'official_advisory'
    | 'livelihood_context'
    | 'operational_boundary'
    | 'unverified';
}

export interface ValidationCase {
  id: string;
  title: string;
  titleBn: string;
  query: string;
  queryBn?: string;
  unsafeClaim: string;
  unsafeClaimBn?: string;
  unsafeRiskReason: string;
  unsafeRiskReasonBn?: string;
  safeGroundedApproach: string;
  safeGroundedApproachBn?: string;
  claims: ScientificClaimItem[];
  verifiedSourceUsed?: string;
}
