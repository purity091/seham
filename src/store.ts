import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  features: string[];
  targetAudience: string;
  stockLevel: string;
}

export interface ProblemItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProblemSection {
  title: string;
  problems: ProblemItem[];
}

export interface MarketingPackage {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight: boolean;
  icon: string;
}

export interface MarketingPackagesSection {
  title: string;
  subtitle: string;
  packages: MarketingPackage[];
}

export interface MarketDetail {
  label: string;
  value: string;
  description: string;
}

export interface MarketTrend {
  name: string;
  description: string;
  growth: string;
  icon: string;
}

export interface Competitor {
  name: string;
  strength: string;
  weakness: string;
}

export interface MarketSize {
  title: string;
  icon: string;
  mainStat: string;
  mainStatLabel: string;
  details: MarketDetail[];
  insights: string[];
}

export interface MarketTrendsSection {
  title: string;
  icon: string;
  trends: MarketTrend[];
}

export interface CompetitorsAnalysis {
  title: string;
  icon: string;
  directCompetitors: Competitor[];
  ourAdvantage: string[];
}

export interface SWOTAnalysis {
  title: string;
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export interface MarketAnalysisSection {
  title: string;
  subtitle: string;
  marketSize: MarketSize;
  trends: MarketTrendsSection;
  competitors: CompetitorsAnalysis;
  swot: SWOTAnalysis;
}

export interface PersonaGoal {
  name: string;
  role: string;
  age: string;
  icon: string;
  description: string;
  goals: string[];
  challenges: string[];
  shoppingHabits: string[];
  quote: string;
}

export interface AudienceDetailsSection {
  title: string;
  subtitle: string;
  personas: PersonaGoal[];
}

export interface ValuePillar {
  title: string;
  icon: string;
  description: string;
  examples: string[];
  impact: string;
}

export interface ValuePropositionDetails {
  title: string;
  subtitle: string;
  pillars: ValuePillar[];
}

export interface MarketingTactic {
  name: string;
  description: string;
  channels?: string[];
  frequency?: string;
  duration?: string;
  expectedReach?: string;
  examples?: string[];
  expectedSales?: string;
  expectedUsage?: string;
  expectedMembers?: string;
  redemption?: string;
  minPurchase?: string;
  prizes?: string[];
  discount?: string;
  validity?: string;
  expectedRedemption?: string;
  expectedSatisfaction?: string;
  optIn?: string;
  expectedOpenRate?: string;
  occasions?: string[];
}

export interface FunnelStage {
  stage: string;
  goal: string;
  budget: string;
  tactics: MarketingTactic[];
  kpis: string;
}

export interface StrategyDetails {
  title: string;
  subtitle: string;
  funnel: FunnelStage[];
}

export interface BudgetItem {
  name: string;
  amount: string;
  details: string;
}

export interface BudgetCategory {
  category: string;
  percentage: number;
  amount: string;
  items: BudgetItem[];
}

export interface BudgetROI {
  expectedRevenue: string;
  marketingSpend: string;
  roi: string;
  paybackPeriod: string;
}

export interface BudgetDetails {
  title: string;
  subtitle: string;
  monthlyBudget: string;
  breakdown: BudgetCategory[];
  roi: BudgetROI;
}

export interface KPIDetail {
  name: string;
  target: string;
  tracking: string;
  frequency: string;
  action: string;
}

export interface KPIsDetails {
  title: string;
  subtitle: string;
  salesKpis: KPIDetail[];
  customerKpis: KPIDetail[];
  marketingKpis: KPIDetail[];
}

export interface ChannelDetail {
  name: string;
  budget: string;
  reach: string;
  frequency: string;
  examples: string[];
  kpis: string;
}

export interface OfflineChannelDetail {
  name: string;
  budget: string;
  locations?: string[];
  distribution?: string[];
  reach: string;
  kpis: string;
  stations?: string[];
}

export interface ChannelsDetails {
  title: string;
  subtitle: string;
  onlineChannels: ChannelDetail[];
  offlineChannels: OfflineChannelDetail[];
}

export interface RoadmapMonth {
  number: number;
  name: string;
  quarter: number;
  focus: string;
  objectives: string[];
  actions: string[];
  progress: string;
}

export interface MarketingPlan {
  id: string;
  title: string;
  problem: { description: string; impact: string };
  customerProblems?: ProblemSection;
  ownerProblems?: ProblemSection;
  noMarketingProblems?: ProblemSection;
  marketingPackages?: MarketingPackagesSection;
  marketAnalysis?: MarketAnalysisSection;
  audienceDetails?: AudienceDetailsSection;
  valuePropositionDetails?: ValuePropositionDetails;
  channelsDetails?: ChannelsDetails;
  strategyDetails?: StrategyDetails;
  budgetDetails?: BudgetDetails;
  kpisDetails?: KPIsDetails;
  market: { size: string; trends: string; competitors: string };
  audience: { personaName: string; age: string; interests: string; painPoints: string; buyingBehavior: string };
  valueProposition: { statement: string; keyBenefits: string[] };
  channels: { primary: string[]; secondary: string[] };
  strategy: { awareness: string; consideration: string; conversion: string; retention: string };
  budget: { total: string; allocation: string };
  kpis: { primary: string[]; secondary: string[] };
  products?: Product[];
  roadmap?: RoadmapMonth[];

  // Custom Dynamic Fields
  location?: string;
  sizeLabel?: string;
  mapTitle?: string;
  mapDesc?: string;
  kpisSummaryText?: string;
  stats?: { value: string; label: string; icon: string }[];
  marketIntro?: string;
  marketContext1Label?: string;
  marketContext1Value?: string;
  marketContext1Desc?: string;
  marketContext1Icon?: string;
  marketContext2Label?: string;
  marketContext2Value?: string;
  marketContext2Desc?: string;
  marketContext2Icon?: string;
  marketContext3Label?: string;
  marketContext3Value?: string;
  marketContext3Desc?: string;
  marketContext3Icon?: string;
  marketShareTitle?: string;
  marketShareDesc?: string;
  marketShareSegmentLabel?: string;
  marketShareSegmentPercent?: string;
  marketShareSegmentPercentNum?: number;
  marketShareSegmentDesc?: string;
  marketShareTargetYear1Label?: string;
  marketShareTargetYear1Val?: string;
  marketShareTargetYear1Desc?: string;
  marketShareTargetYear3Label?: string;
  marketShareTargetYear3Val?: string;
  marketShareTargetYear3Desc?: string;
  marketShareSummary?: string;
  mapConfig?: {
    center: [number, number];
    zoom: number;
    markerTitle: string;
    markerDesc: string;
    targets: { name: string; coords: [number, number]; radius: number; color: string }[];
  };
  projectLinks?: {
    websiteUrl: string;
    websiteLabel: string;
    controlUrl: string;
    controlLabel: string;
    controlIcon?: string;
    productsSheetUrl?: string;
    productsSheetLabel?: string;
  };
}

export const defaultPlan: Omit<MarketingPlan, 'id' | 'title'> = {
  problem: { description: '', impact: '' },
  customerProblems: { title: '', problems: [] },
  ownerProblems: { title: '', problems: [] },
  noMarketingProblems: { title: '', problems: [] },
  marketingPackages: { title: '', subtitle: '', packages: [] },
  marketAnalysis: {
    title: '',
    subtitle: '',
    marketSize: { title: '', icon: '', mainStat: '', mainStatLabel: '', details: [], insights: [] },
    trends: { title: '', icon: '', trends: [] },
    competitors: { title: '', icon: '', directCompetitors: [], ourAdvantage: [] },
    swot: { title: '', strengths: [], weaknesses: [], opportunities: [], threats: [] }
  },
  audienceDetails: {
    title: '',
    subtitle: '',
    personas: []
  },
  valuePropositionDetails: {
    title: '',
    subtitle: '',
    pillars: []
  },
  channelsDetails: {
    title: '',
    subtitle: '',
    onlineChannels: [],
    offlineChannels: []
  },
  strategyDetails: {
    title: '',
    subtitle: '',
    funnel: []
  },
  budgetDetails: {
    title: '',
    subtitle: '',
    monthlyBudget: '',
    breakdown: [],
    roi: { expectedRevenue: '', marketingSpend: '', roi: '', paybackPeriod: '' }
  },
  kpisDetails: {
    title: '',
    subtitle: '',
    salesKpis: [],
    customerKpis: [],
    marketingKpis: []
  },
  market: { size: '', trends: '', competitors: '' },
  audience: { personaName: '', age: '', interests: '', painPoints: '', buyingBehavior: '' },
  valueProposition: { statement: '', keyBenefits: [''] },
  channels: { primary: [''], secondary: [''] },
  strategy: { awareness: '', consideration: '', conversion: '', retention: '' },
  budget: { total: '', allocation: '' },
  kpis: { primary: [''], secondary: [''] },
  products: [],
  roadmap: [],
};

// 1. SEHAM SHOES - JORDAN PLAN
const sehamJordanPlan: MarketingPlan = {
  id: 'seham-jordan-plan',
  title: 'خطة أحذية سهام - سوق الأردن B2B',
  projectLinks: {
    websiteUrl: 'https://wa.me/962790000000',
    websiteLabel: 'كتالوج أحذية سهام بالجملة في الأردن (واتساب بزنس)',
    controlUrl: 'https://business.facebook.com/',
    controlLabel: 'لوحة التحكم بإعلانات B2B الموجهة (Meta Business Suite)',
    controlIcon: 'Megaphone',
    productsSheetUrl: 'https://docs.google.com/spreadsheets/d/1tSehamJordanB2BOrders/edit?usp=sharing',
    productsSheetLabel: 'سجل تتبع طلبات الجملة وتجربة كراتين التجار بالأردن'
  },
  location: 'سوق الأردن (عمان، الزرقاء، إربد، العقبة)',
  sizeLabel: 'توريد وتصنيع أحذية نسائية جملة',
  mapTitle: 'خريطة انتشار وتوزيع أحذية سهام بالأردن',
  mapDesc: 'مراكز تجمع تجار الجملة وبوتيكات التجزئة المستهدفة في المحافظات الأردنية الرئيسية',
  kpisSummaryText: 'الوصول إلى 100 تاجر وبوتيك في الأردن خلال 90 يوماً، وتوريد 50 كرتونة تجربة في الشهر الأول، وبناء عقود توريد مستمرة مع 15 محلاً رئيسياً.',
  stats: [
    { value: '1,200+', label: 'بوتيك ومحل تجزئة بالأردن', icon: 'Building2' },
    { value: '12 زوج', label: 'الحد الأدنى لطلب التفتيح والبدء', icon: 'Package' },
    { value: '3-5 أيام', label: 'مدة التوصيل والتخليص الجمركي', icon: 'Truck' },
    { value: 'B2B Only', label: 'تسويق جملة مغلق (لا بيع مفرق)', icon: 'ShieldCheck' }
  ],
  marketIntro: 'يتميز السوق الأردني بنمو مطرد في قطاع تجزئة الملابس والأحذية النسائية، مع تفضيل قوي ومثبت للأحذية السورية المصنوعة يدوياً لما تشتهر به من جودة الجلود الطبيعية ودقة المتانة والمظهر الأنيق مقارنة بالمنتجات الصينية الرخيصة وغير المعمرة.',
  marketContext1Label: 'إجمالي البوتيكات النسائية',
  marketContext1Value: '1,200+ محل',
  marketContext1Desc: 'البوتيكات ومحلات التجزئة المنتشرة في عمان والمحافظات الرئيسية المهتمة بتشكيلات الأحذية المميزة.',
  marketContext1Icon: 'Building2',
  marketContext2Label: 'حجم سوق الأحذية بالأردن',
  marketContext2Value: '80M+ JOD',
  marketContext2Desc: 'حجم الاستهلاك السنوي للأحذية النسائية والجلدية في السوق الأردني تجزئة وجملة.',
  marketContext2Icon: 'DollarSign',
  marketContext3Label: 'تفضيل الأحذية السورية',
  marketContext3Value: '92%',
  marketContext3Desc: 'نسبة رضا وقبول المستهلك الأردني لجودة ومتانة الأحذية النسائية سورية الصنع.',
  marketContext3Icon: 'TrendingUp',
  marketShareTitle: 'الحصة السوقية المستهدفة لورشة سهام',
  marketShareDesc: 'من إجمالي المبيعات الجملة المستهدفة إلى المحلات النشطة',
  marketShareSegmentLabel: 'قطاع المحلات التجارية وبوتيكات التجزئة في عمان الغربية والشرقية والمحافظات',
  marketShareSegmentPercent: '~35%',
  marketShareSegmentPercentNum: 35,
  marketShareSegmentDesc: 'يشمل محلات الأحذية المتخصصة، بوتيكات الملابس التي تضيف الأحذية كإكسسوار، وصفحات الإنستغرام الكبرى بالأردن.',
  marketShareTargetYear1Label: 'هدف السنة الأولى',
  marketShareTargetYear1Val: '3-5%',
  marketShareTargetYear1Desc: 'كسب ثقة وتوريد مستمر لـ 60-80 بوتيكاً ومحل تجزئة بالأردن، وبيع 6,000+ زوج أحذية.',
  marketShareTargetYear3Label: 'هدف السنة الثالثة',
  marketShareTargetYear3Val: '15-18%',
  marketShareTargetYear3Desc: 'تأسيس شبكة توريد ثابتة لـ 200+ محل وتوقيع اتفاقيات حصرية مع 3 كبار تجار الجملة في أسواق عمان الوسطى.',
  marketShareSummary: 'خلاصة التحليل: تتيح السمعة الممتازة للأحذية السورية وقرب المسافة اللوجستية للأردن تحقيق هوامش ربح ممتازة لشركائنا من التجار الجدد، مع تفوق واضح على المنتجات المستوردة من شرق آسيا بفضل سرعة توريد المقاسات المطلوبة.',
  mapConfig: {
    center: [31.95, 35.91], // Center on Amman
    zoom: 8,
    markerTitle: 'المستودع اللوجستي ونقطة الاستقبال بالأردن (عمان - القويسمة)',
    markerDesc: 'نقطة استقبال الشحنات البرية من دمشق، وتفتيح وتوزيع الطلبيات والكراتين لبقية المحافظات الأردنية.',
    targets: [
      {
        name: "إقليم الوسط (عمان، الزرقاء، السلط) - التركيز الأساسي للبوتيكات ومحلات التجزئة",
        coords: [31.95, 35.91],
        radius: 35000,
        color: "#0071E3"
      },
      {
        name: "إقليم الشمال (إربد، جرش) - كثافة عالية لمحلات التجزئة وتفضيل المنتجات السورية",
        coords: [32.55, 35.85],
        radius: 20000,
        color: "#A855F7"
      },
      {
        name: "إقليم الجنوب (العقبة، الكرك) - أسواق سياحية واعدة ومحلات بحاجة لتنويع الموديلات",
        coords: [29.53, 35.00],
        radius: 15000,
        color: "#10B981"
      }
    ]
  },
  problem: {
    description: 'يواجه أصحاب محلات الأحذية وبوتيكات التجزئة في الأردن تحديات جمة في تأمين بضائع أحذية نسائية ذات جودة متقنة وبتصميم عصري يواكب الموضة وبأسعار تضمن لهم هوامش ربح مجزية. الاستيراد الفردي من الصين وتركيا يتطلب دفع مبالغ تشغيلية ضخمة مقدماً وقبول كميات هائلة ومخاطر تأخر الشحن والتخليص، في حين يفتقر السوق المحلي للمرونة والتصاميم الراقية المتجددة.',
    impact: 'تراجع أرباح البوتيكات بسبب المنتجات الصينية الرديئة سريعة التلف، تجميد رأس المال في مخزون ضخم غير مباع بسبب شروط كميات الاستيراد الصعبة، وتأخر تلبية طلبات الزبائن وتفتيح المقاسات الموسمية.'
  },
  customerProblems: {
    title: 'المشاكل التي يواجهها التجار والبوتيكات في الأردن',
    problems: [
      {
        icon: 'Package',
        title: 'شروط الكميات الضخمة للاستيراد (MOQ)',
        description: 'المصانع التركية والصينية تفرض على التاجر الأردني شراء كميات ضخمة وموديلات موحدة لتفعيل الشحن، مما يجمد رأس المال ويعرض المحلات لخطر تكدس الموديلات القديمة.'
      },
      {
        icon: 'Clock',
        title: 'بطء وتأخر خدمات الشحن اللوجستي',
        description: 'يستغرق الاستيراد من الصين أو تركيا ما بين 20 إلى 40 يوماً، مما يفوت على أصحاب البوتيكات مواسم الأعياد الحيوية وتغير صيحات الموضة السريعة.'
      },
      {
        icon: 'DollarSign',
        title: 'تقلص وتراجع هوامش الربح بسبب التكلفة المرتفعة',
        description: 'ارتفاع تكاليف الشحن الدولي والرسوم الجمركية للموانئ البعيدة يقلص هامش ربح المحل، مما يدفعهم لرفع الأسعار على الزبائن وتراجع حجم مبيعاتهم.'
      },
      {
        icon: 'ShieldOff',
        title: 'ضعف واهتراء جودة التصنيع وتلف المواد',
        description: 'انتشار الأحذية الصينية المصنوعة من جلود صناعية رديئة تتلف سريعاً وتسبب روائح أو عدم راحة في المشي، مما يسبب سيل تقييمات سلبية وشكاوى وتراجع ولاء الزبائن للمحل.'
      }
    ]
  },
  ownerProblems: {
    title: 'التحديات الاستراتيجية لورشة سهام في سوق الأردن',
    problems: [
      {
        icon: 'Lock',
        title: 'مخاطر البيع المباشر للأفراد (تشتت الهوية)',
        description: 'التوريد للجملة يتطلب حماية صارمة لهوية الورشة وعدم البيع المباشر للمستهلك النهائي مفرق بالأردن، حتى يشعر أصحاب البوتيكات بالأمان التام في التعامل معنا وحماية أسعارهم.'
      },
      {
        icon: 'Shuffle',
        title: 'عقبة التخليص الجمركي والنقل البري السريع',
        description: 'ضمان تدفق البضائع أسبوعياً يتطلب بناء قنوات شحن بري وتخليص جمركي موثوقة وسريعة عبر الحدود السورية الأردنية لتصل البضائع خلال 48 ساعة فقط.'
      },
      {
        icon: 'Users',
        title: 'كسب ثقة التجار الجدد والتغلب على الخوف من الدفع',
        description: 'التجار الجدد يتخوفون من تحويل الأموال لورشة خارج البلاد دون معاينة البضائع والتأكد من مطابقة الصور للواقع التشغيلي وصناعة الحذاء الفعلي.'
      }
    ]
  },
  noMarketingProblems: {
    title: 'مخاطر الاعتماد على العلاقات الشخصية دون تسويق رقمي B2B',
    problems: [
      {
        icon: 'TrendingDown',
        title: 'البقاء تحت رحمة عدد قليل من كبار التجار',
        description: 'بدون قنوات تسويق واستقطاب نشطة للبوتيكات، تظل الورشة محصورة مع 2 أو 3 تجار جملة يتحكمون في الأسعار ويفرضون شروط سداد مؤجلة ومجحفة بالورشة السورية.'
      },
      {
        icon: 'EyeOff',
        title: 'غياب الوعي بموديلاتنا وتصاميمنا الحصرية الجديدة',
        description: 'البوتيكات الأردنية تبحث يومياً في واتساب وإنستغرام عن موردين جدد. عدم وجود كتالوج رقمي محدث وإعلانات استهداف ذكية يجعلنا غير مرئيين لهم تماماً.'
      },
      {
        icon: 'CalendarOff',
        title: 'موسمية تشغيل غير مستقرة للورشة بدمشق',
        description: 'الاعتماد على الطلبات التقليدية يسبب فترات ركود طويلة بين المواسم. التسويق الرقمي المستمر يضمن تدفق طلبيات مصانع المحلات طوال العام وبشكل مستدام.'
      }
    ]
  },
  valueProposition: {
    statement: 'نحن لا نبيع حذاء مفرق لزبون نهائي؛ نحن شريك التوريد الأكثر موثوقية وأماناً لأصحاب البوتيكات ومحلات الأحذية بالأردن، نوفر لهم أحذية نسائية جلدية سورية يدوية فائقة الجودة، بمرونة كميات لا مثيل لها (تبدأ من كرتونة تجربة 12 زوجاً) وسرعة شحن تصل لـ 3 أيام.',
    keyBenefits: [
      'جلد طبيعي ممتاز وصناعة يدوية سورية فاخرة تضمن ولاء زبائن المحل وتدفقهم.',
      'مرونة غير مسبوقة: يمكنك البدء بـ "كرتونة تجربة" (12 زوجاً فقط) لتجربة الجودة في سوقك.',
      'كتالوج رقمي تفاعلي متكامل محدث أسبوعياً عبر واتساب بزنس يسهل الاختيار والحجز.',
      'شحن وتخليص جمركي بري سريع وآمن ومباشر لباب محلك في عمان وإربد والزرقاء خلال 3 أيام.',
      'إمكانية تصنيع موديلات حصرية وشعار خاص بالمحل (Private Label) للكميات فوق 50 زوجاً.',
      'حماية الأسعار التنافسية: نلتزم التزاماً صارماً بعدم البيع مفرق نهائياً لحماية أرباح شركائنا.'
    ]
  },
  audienceDetails: {
    title: 'شرائح التجار والعملاء المستهدفين بالأردن (B2B)',
    subtitle: 'تحليل الشرائح التشغيلية الأكثر جدارة بالاستهداف لبناء شراكات توريد مستدامة',
    personas: [
      {
        name: 'أبو أحمد - محلات الأحذية بأسواق البلد وإربد',
        role: 'مالك سلسلة محلات أحذية نسائية تقليدية',
        age: '45-55 سنة',
        icon: 'Building2',
        description: 'يمتلك محل أو محلين للأحذية في أسواق وسط البلد بعمان أو إربد، يعتمد على الحركة الروتينية للزبائن ويبحث دائماً عن تشكيلة بأسعار جملة ممتازة وموديلات تناسب الذوق العام.',
        goals: [
          'الحصول على بضائع ذات جودة جلد طبيعي يعتمد عليها الزبون الأردني لسنوات.',
          'تحقيق هامش ربح لا يقل عن 40% لتغطية إيجار المحلات وأجور العمال.',
          'التعامل مع مصنع مباشر يلتزم بجدول المقاسات والألوان المطلوبة دون أخطاء.'
        ],
        challenges: [
          'تكدس المنتجات الصينية البلاستيكية سريعة التلف وكثرة مرتجعات الزبائن الغاضبين.',
          'الاحتكار والتحكم السعري من كبار مستوردي الجملة المحليين بالأردن.',
          'تأخر وصول الموديلات الشتوية والصيفية من المصانع الخارجية.'
        ],
        shoppingHabits: [
          'يفضل معاينة العينات الفعلية للحذاء ولمس جودة الجلد بنفسه.',
          'يتواصل بكثافة عبر الواتساب ويحب السرعة والوضوح في كشوف الحسابات.',
          'يبدأ بطلبيات صغيرة (2 كرتونة) ثم يتوسع عند التأكد من سرعة البيع وسحب الزبائن.'
        ],
        quote: 'زبوني الأردني بيفهم بالجلد الطبيعي وبيعرف الحذاء المصنوع بحرفية سورية. إذا الجودة ممتازة، بشتري طوال السنة.'
      },
      {
        name: 'سارة - مالكة بوتيك ملابس وصفحة إنستغرام شهيرة',
        role: 'رائدة أعمال رقمية ومصممة أزياء',
        age: '26-38 سنة',
        icon: 'Sparkles',
        description: 'تمتلك بوتيكاً أنيقاً في عمان الغربية (تلاع العلي أو الصويفية) بالإضافة لصفحة إنستغرام تفاعلية لبيع الملابس النسائية الراقية، وتريد إضافة كولكشن أحذية نسائية حصرية لتكملة المظهر الأنيق لبوتيكها.',
        goals: [
          'توفير موديلات أحذية نسائية كعب وتصاميم ناعمة حصرية تواكب صيحات الموضة العالمية والإنفلونسرز.',
          'الحصول على ميزة تصنيع الأحذية باسم البوتيك الخاص بها (Private Label) لزيادة القيمة السوقية لبراندها.',
          'مرونة التوريد بكميات مرنة جداً لتجنب تكدس بضائع ومقاسات صعبة البيع.'
        ],
        challenges: [
          'عدم توفر الجودة الفخمة محلياً وتكرار الموديلات المعروضة في الأسواق التقليدية.',
          'الخوف من جفاف المخزون فجأة وعدم القدرة على تفتيح مقاس محدد طلبته زبونة مهمة.',
          'صعوبة السفر لتركيا والصين لتأمين طلبيات بميزانية متوسطة.'
        ],
        shoppingHabits: [
          'تتصفح الكتالوجات الرقمية والإنستغرام بعناية للبحث عن الجمال البصري والتصاميم العصرية.',
          'تقدّر التغليف الفاخر وخدمة العملاء السريعة والراقية عبر الواتساب.',
          'تهتم بالصورة الاحترافية والفيديوهات الواضحة للمنتج لتسويقها لجمهور صفحتها.'
        ],
        quote: 'بدي تشكيلة أحذية نسائية فخمة وناعمة وبتجنن زبوناتي بالإنستغرام، وما بحب أشتري كميات كبيرة قبل ما أجرب ذوقهم.'
      }
    ]
  },
  valuePropositionDetails: {
    title: 'ركائز القيمة والتميز لورشة أحذية سهام بالأردن',
    subtitle: 'كيف نضمن ريادتنا ونحقق طفرة في مبيعات شركائنا من التجار والبوتيكات',
    pillars: [
      {
        title: 'الحرفية الجلدية السورية الفاخرة',
        icon: 'Award',
        description: 'نعتمد على جلود طبيعية ممتازة وقوالب طبية مريحة تم تصنيعها بأيدي أمهر الإسكافيين السوريين بدمشق، مما يمنح الحذاء متانة فائقة ومظهراً فخماً يعشقه الزبون من اللمسة الأولى.',
        examples: ['جلود طبيعية مدبوغة بعناية ومقاومة للتشقق والتقشير', 'خياطة يدوية مزدوجة معززة بمتانة عالية للاستخدام اليومي المستمر', 'نعل طبي داخلي مرن يوفر الراحة الكاملة طوال ساعات العمل والمشي'],
        impact: 'القضاء على مرتجعات الزبائن وبناء تقييمات إيجابية فائقة تعزز سمعة محل التاجر.'
      },
      {
        title: 'المرونة اللوجستية الفائقة (كرتونة التجربة)',
        icon: 'PackageOpen',
        description: 'كسرنا احتكار الكميات الكبيرة. نتيح للتاجر الجديد طلب "كرتونة تجربة" واحدة (12 زوجاً) مشكلة المقاسات والألوان لمعاينة الجودة والتشطيب وسرعة سحبها بالملابس والبوتيك دون مخاطر رأس مال.',
        examples: ['تفتيح مقاسات مرن: تشكيلة مقاسات من 36 إلى 41 تناسب الطلب العام للأردنيات', 'تنوع ألوان مرن في الكرتونة الواحدة لتناسب ملابس الموسم', 'تسهيل الشحن السريع بالتعاون مع كبار مكاتب النقل البري المضمونة'],
        impact: 'تمكين أصحاب الصفحات والبوتيكات الصغيرة من بدء تجارة الأحذية بميزانية تبدأ من 150 دينار فقط.'
      },
      {
        title: 'الشحن البري السريع والآمن لباب المحل',
        icon: 'Truck',
        description: 'شبكة لوجستية برية متكاملة تربط ورشتنا بدمشق بالمستودع الوسيط بعمان، لضمان تخليص جمركي آمن وسريع ووصول الشحنات أسبوعياً بدون تعقيدات أو رسوم مخفية.',
        examples: ['تنسيق كامل للأوراق والشهادات الجمركية لضمان سلامة الشحنة من المصادرات', 'توصيل بري مباشر لباب محل التاجر في عمان وإربد والزرقاء خلال 72 ساعة من خروجها', 'نظام تتبع فوري لحركة الشحنة والتأكيد للتاجر بموعد الاستلام الدقيق'],
        impact: 'الحفاظ على تدفق البضائع باستمرار وتجنب انقطاع المقاسات المطلوبة في ذروة المواسم.'
      }
    ]
  },
  channelsDetails: {
    title: 'القنوات التسويقية B2B لاستقطاب تجار الأردن',
    subtitle: 'قنوات رقمية وميدانية متكاملة لجمع بيانات التجار والتواصل المباشر معهم وبناء الثقة',
    onlineChannels: [
      {
        name: 'إعلانات استهداف التجار وأصحاب البوتيكات عبر Meta Ads',
        budget: '200 دينار أردني شهرياً',
        reach: '50,000+ تاجر وصاحب صفحة بالأردن',
        frequency: 'حملة إعلانية مستمرة طوال أيام الأسبوع',
        examples: ['إعلانات فيديو جذابة تستعرض جودة الجلد الطبيعي ومراحل خياطة الحذاء بالورشة بدمشق', 'إعلان بتركيز قوي على عبارة: (لتجار ومحلات الأحذية بالأردن.. كولكشن أحذية نسائية سورية فاخرة جملة لباب محلك مع كرتونة تجربة مرنة)', 'حملات تجميع بيانات العملاء المهتمين (Lead Generation) لجمع أرقام هواتف التجار عبر الواتساب'],
        kpis: 'تكلفة جهة الاتصال المهتمة (CPL) أقل من 1.5 دينار وتجميع 120 تاجر مهتم شهرياً.'
      },
      {
        name: 'التواصل المباشر والتسويق المؤتمت عبر WhatsApp Business',
        budget: '50 دينار شهرياً (أدوات المتابعة والرد الآلي)',
        reach: 'متابعة يومية لقاعدة التجار والرد الفوري خلال دقيقة',
        frequency: 'تحديث الكتالوج أسبوعياً وإرسال رسائل الكولكشن الجديد للمشتركين',
        examples: ['كتالوج رقمي احترافي بصور عالية الدقة وتفاصيل المقاسات والأسعار للجملة بالأردن', 'محادثات تفاعلية ذكية توضح للتاجر شروط الشحن والحد الأدنى للطلب ونماذج كرتونة التجربة بنقرة واحدة', 'رسائل تذكير لطيفة ومجدولة للتجار المسجلين فور توفر موديلات جديدة لموسم الأعياد والطقس'],
        kpis: 'معدل فتح رسائل الواتساب يتخطى 95% ومعدل تحويل الاستفسار لطلب كرتونة تجربة 15%.'
      }
    ],
    offlineChannels: [
      {
        name: 'التواصل الهاتفي والميداني المباشر (Direct Outreach)',
        budget: 'بدون تكلفة إضافية (جهد فريق المبيعات)',
        reach: 'استهداف 100 بوتيك ومحل أحذية شهرياً بالاتصال والزيارة',
        kpis: 'تحويل 10% من المحلات المستهدفة ميدانياً إلى زبائن دائمين يطلبون شهرياً.',
        locations: ['عمان (البلد، تلاع العلي، جبل الحسين، الصويفية)', 'إربد (شارع جامعة اليرموك، وسط البلد بأسواق إربد)', 'الزرقاء (شارع 36 الشهير بمحلات الملابس والأحذية النسائية)']
      }
    ]
  },
  strategyDetails: {
    title: 'استراتيجية قمع المبيعات B2B لشركة أحذية سهام بالأردن',
    subtitle: 'مراحل تحويل أصحاب المحلات والبوتيكات من المعرفة الأولى إلى عقود توريد مستدامة',
    funnel: [
      {
        stage: '1. مرحلة الوعي وجذب انتباه التجار (Awareness)',
        goal: 'إثارة اهتمام أصحاب البوتيكات بجودة وتصاميم الأحذية السورية والبدائل المرنة التي نقدمها.',
        budget: '120 دينار شهرياً (إعلانات Meta الممولة)',
        tactics: [
          {
            name: 'إطلاق حملات فيديو احترافية تظهر الحرفية السورية',
            description: 'نشر مقاطع فيديو عالية الجودة تستعرض دقة تفصيل الحذاء في دمشق، جودة الجلود الطبيعية، ومتانة الخياطة مع إبراز شعار "أحذية سهام - جودة دمشقية بالأردن".',
            examples: ['فيديو تفتيش واختبار جودة الجلد الطبيعي ومقاومته للتشقق بالماء والضغط', 'فيديو يعرض الكتالوج الرقمي الأنيق وسهولة الطلب والتصفح عبر شاشة الواتساب']
          },
          {
            name: 'استهداف اهتمامات تجار الجملة والبوتيكات بالأردن بدقة',
            description: 'إعداد حملات إعلانية ممولة تستهدف المشرفين على صفحات بيع الملابس بالأردن، وأصحاب البوتيكات النسائية، والمهتمين بالاستيراد والجملة.',
            examples: ['حملة إعلان تجمع عبارات مميزة مثل: "صاحب محل أحذية بالأردن؟ بتدور على جودة سورية بجلد طبيعي وأسعار جملة منافسة؟ تواصل معنا للكتالوج وعرض كرتونة التجربة"']
          }
        ],
        kpis: 'الوصول لـ 40,000 مشاهدة للفيديو وتجميع بيانات 100 تاجر مهتم حقيقي بالأردن.'
      },
      {
        stage: '2. مرحلة الدراسة والتقييم وبناء الثقة (Consideration)',
        goal: 'تبديد مخاوف التجار الجدد وتسهيل اتخاذ قرار طلب الشحنة الأولى.',
        budget: '30 دينار شهرياً',
        tactics: [
          {
            name: 'إرسال نماذج وعينات وتوثيق مصور للطلبيات السابقة',
            description: 'مشاركة صور وفيديوهات حقيقية لشحنات التجار السابقين بالأردن، وصور كرتونة التجربة أثناء تعبئتها وشحنها لزبائن عمان وإربد.',
            examples: ['تزويد التاجر بشهادات تقييم وآراء تجار أردنيين يتعاملون معنا ويثنون على الأمان والجودة', 'مكالمات فيديو مباشرة من داخل الورشة بدمشق لإظهار خطوط الإنتاج والجدية في العمل']
          },
          {
            name: 'تقديم عرض "كرتونة التجربة" المرنة والمضمونة',
            description: 'شرح فكرة كرتونة التجربة (12 زوجاً فقط) لتجريب السوق دون شروط الكميات الضخمة وبسعر منافس يمنح التاجر هامش ربح ممتاز.',
            examples: ['توفير تشكيلة مقاسات مدروسة وألوان منوعة يسهل بيعها بالبوتيك فوراً']
          }
        ],
        kpis: 'تأكيد تواصل 60% من المهتمين عبر الواتساب ومناقشة تفاصيل الأسعار والموديلات.'
      },
      {
        stage: '3. مرحلة إتمام صفقات الجملة وتجربة المنتج (Conversion)',
        goal: 'تحويل المهتمين إلى مشترين فعليين وشحن كراتين التجربة لمحلاتهم بالأردن.',
        budget: 'بدون تكلفة إضافية (مبيعات مباشرة)',
        tactics: [
          {
            name: 'تسهيل خيارات الدفع والطلب بأبسط الطرق بالأردن',
            description: 'توفير خيارات دفع مرنة وسهلة للتجار بالأردن عبر قنوات وحسابات مضمونة ووكلاء ثقة، وتأكيد الطلب بمجرد تعبئة بيانات المحل والكرتونة المطلوبة.',
            examples: ['توفير كشوف حسابات واضحة وفاتورة رسمية تحدد سعر الصرف بالدينار الأردني والليرة السورية لتجنب الفروقات']
          },
          {
            name: 'شحن بري سريع ومضمون ووصول لباب المحل خلال 3-5 أيام',
            description: 'التنسيق الفوري مع أفضل شركات الشحن البري التي تضمن الشحن بدون مصادرات والتوصيل لباب التاجر بعمان أو إربد أو الزرقاء.',
            examples: ['متابعة يومية مع السائق وتحديث التاجر بموقع الشحنة وتنسيق موعد الاستلام الدقيق']
          }
        ],
        kpis: 'بيع وتوصيل 30 كرتونة تجربة وجملة ناجحة شهرياً للتجار والبوتيكات الجدد.'
      },
      {
        stage: '4. مرحلة الولاء وعقود التوريد المستمر (Retention)',
        goal: 'تحويل مشتري كرتونة التجربة لعملاء دائمين يطلبون أسبوعياً ويوقعون عقود توريد موسمية.',
        budget: '50 دينار شهرياً (خصومات وعروض ولاء)',
        tactics: [
          {
            name: 'إطلاق برنامج "تفتيح المقاسات السريع للتجار الدائمين"',
            description: 'تخصيص أولوية شحن وتصنيع مقاسات محددة للتجار المستمرين دون الحاجة لانتظار كرتونة كاملة في حال سحب مقاس معين بالبوتيك.',
            examples: ['تنبيه التجار أسبوعياً قبل إطلاق أي موديل جديد لمنحهم أولوية الحجز والاختيار الحصري لأسواقهم']
          },
          {
            name: 'تقديم خصومات كميات وعروض ولاء حصرية للطلبات الكبرى',
            description: 'منح خصومات تصاعدية جذابة وتسهيل شروط الدفع والتعامل الآجل للتجار الذين تثبت جديتهم وتتجاوز طلبياتهم 5 كراتين شهرياً.',
            examples: ['إمكانية وسم الأحذية بشعار محل التاجر (Private Label) مجاناً كباقة تشجيعية واستمرار الثقة']
          }
        ],
        kpis: 'نسبة إعادة طلب الجملة تتخطى 65%، وتثبيت 15+ عقد توريد دوري ثابت بالأردن.'
      }
    ]
  },
  budgetDetails: {
    title: 'الميزانية التسويقية والتشغيلية المخصصة لسوق الأردن',
    subtitle: 'توزيع التمويل التسويقي بدقة لتحقيق أعلى عائد على الاستثمار الإعلاني والجمركي (ROAS)',
    monthlyBudget: '300 دينار أردني شهرياً',
    breakdown: [
      {
        category: 'إعلانات الاستقطاب B2B عبر Meta Ads',
        percentage: 60,
        amount: '180 دينار أردني',
        items: [
          { name: 'حملات إعلانات تجميع بيانات أصحاب البوتيكات', amount: '120 دينار أردني', details: 'توليد أرقام هواتف وبوتيكات مهتمة بالجملة بالأردن' },
          { name: 'حملات إعادة استهداف التجار المهتمين بالفيديو والكتالوج', amount: '60 دينار أردني', details: 'عرض موديلات أحذية سهام الجديدة والكرتونة التجريبية' }
        ]
      },
      {
        category: 'أدوات التواصل والمبيعات الرقمية (واتساب)',
        percentage: 15,
        amount: '45 دينار أردني',
        items: [
          { name: 'اشتراك منصة إدارة محادثات واتساب وبزنس وبوت الحجز', amount: '30 دينار أردني', details: 'أتمتة الردود الفورية وتوفير الكتالوج التفاعلي للتجار' },
          { name: 'تصوير احترافي فوتوغرافي وفيديو للمنتجات والموديلات', amount: '15 دينار أردني', details: 'إعداد الصور بجودة خلفية بيضاء وزوايا واضحة مناسبة للبوتيكات' }
        ]
      },
      {
        category: 'دعم الشحن البري وتأمين العينات لتنشيط المبيعات',
        percentage: 25,
        amount: '75 دينار أردني',
        items: [
          { name: 'ميزانية شحن عينات مجانية للتجار الكبار لمعاينة الجودة', amount: '45 دينار أردني', details: 'توفير فردة حذاء كنموذج معاينة لجلود ومستوى خياطة سهام' },
          { name: 'مطبوعات ووسوم شعارات الورشة وتغليف كرتوني مميز', amount: '30 دينار أردني', details: 'تصميم علب كرتون فاخرة ترفع من قيمة الحذاء لدى الزبون الأردني' }
        ]
      }
    ],
    roi: {
      expectedRevenue: '4,500 دينار أردني شهرياً مبيعات جملة',
      marketingSpend: '300 دينار أردني شهرياً',
      roi: '15x عائد مبيعات جملة ممتاز',
      paybackPeriod: 'من الشهر الأول (بمجرد بيع أول 3 كراتين جملة كبرى)'
    }
  },
  kpisDetails: {
    title: 'مؤشرات الأداء الرئيسية والتشغيلية بالأردن (KPIs)',
    subtitle: 'الأهداف الرقمية المطلوب قياسها أسبوعياً وشهرياً لضمان نجاح التوريد وبناء الشراكات',
    salesKpis: [
      { name: 'عدد الكراتين التجريبية والجملة المباعة شهرياً بالأردن', target: '35 كرتونة شهرياً', tracking: 'سجل مبيعات متجر أحذية سهام وجدول الشحنات البرية', frequency: 'أسبوعي', action: 'تكثيف مكالمات المتابعة مع البوتيكات التي استلمت الكتالوج' },
      { name: 'عدد عقود التوريد المستمر النشطة والموقعة مع محلات التجزئة', target: '15+ عقد توريد دوري', tracking: 'سجل العملاء الدائمين وبرنامج تفتيح المقاسات للتجار', frequency: 'شهري', action: 'تقديم باقة Private Label مجانية لتشجيعهم على الالتزام السنوي' },
      { name: 'متوسط قيمة فاتورة طلب الجملة الواحدة للتاجر بالأردن', target: '250 دينار أردني', tracking: 'كشوف الحسابات وفواتير مبيعات الجملة بالدينار', frequency: 'أسبوعي', action: 'عرض موديلات أحذية نسائية ناعمة وكعب عالية الجودة لزيادة سلة الطلب' }
    ],
    customerKpis: [
      { name: 'نسبة رضا التجار عن جودة جلود وتشطيب أحذية سهام', target: '96% رضا تام وتقييم ممتاز', tracking: 'استبيانات جودة دورية مرسلة للتجار بعد وصول الشحنة', frequency: 'شهري', action: 'تعديل خط الإنتاج بالورشة فوراً في حال ورود أي ملاحظة فنية على نعل أو قالب' },
      { name: 'نسبة سحب وبقاء بضائع أحذية سهام في البوتيكات قبل إعادة الطلب', target: 'أقل من 30 يوماً لبيع الكرتونة', tracking: 'تقارير دورية ودية ومكالمات واتساب مع التاجر لمعرفة حركة المقاسات', frequency: 'نصف شهري', action: 'تزويد البوتيك بصور وفيديوهات تسويقية جاهزة لصفحتهم لتسريع السحب الرقمي' }
    ],
    marketingKpis: [
      { name: 'عدد التجار وأصحاب البوتيكات المنضمين لقناة واتساب بزنس', target: '100+ تاجر مهتم شهرياً', tracking: 'إحصائيات حملات جمع بيانات التجار وأرقام واتساب', frequency: 'أسبوعي', action: 'تحسين إعلانات الاستهداف B2B بموديلات أكثر لفتاً للإنتباه وعرض كرتونة التجربة' },
      { name: 'تكلفة جهة الاتصال المهتمة بالجملة من إعلانات Meta Ads', target: 'أقل من 1.5 دينار CPL', tracking: 'لوحة تحكم مدير إعلانات Meta Ads بالأردن', frequency: 'يومي', action: 'استبعاد الكلمات والمناطق غير الفعالة وتركيز الميزانية على عمان والمحافظات النشطة' }
    ]
  },
  products: [
    {
      id: 'seham-jor-prod-1',
      name: 'عرض كرتونة تجربة أحذية نسائية - تجار الأردن',
      category: 'باقات التجربة الفورية لشركاء سهام الجدد',
      price: '180 دينار أردني (سعر جملة خاص بالباقة الأولى)',
      description: 'باقة مصممة خصيصاً للبوتيكات بالأردن لمعاينة الجودة واللمس وجلود أحذيتنا وسرعة سحبها بسوقهم دون مخاطر تشغيلية ضخمة.',
      features: ['تحتوي على 12 زوج أحذية نسائية ممتازة مشكلة الموديلات', 'تشكيلة مقاسات نسائية أردنية مدروسة (2x37, 3x38, 3x39, 3x40, 1x41)', 'ألوان أساسية منوعة تناسب ملابس الموسم (أسود، بني، كافيه، بيج)', 'شحن وتوصيل بري شامل لباب محلك في عمان خلال 3 أيام'],
      targetAudience: 'بوتيكات الملابس النسائية، أصحاب صفحات الإنستغرام وتجار التجزئة الجدد بالأردن',
      stockLevel: 'متوفر للشحن البري الفوري أسبوعياً'
    },
    {
      id: 'seham-jor-prod-2',
      name: 'كرتونة محلات أحذية نسائية جلدية - تشكيلة مقاسات كاملة',
      category: 'طلبيات الجملة القياسية للمحلات الكبرى',
      price: '340 دينار أردني (شامل الشحن الجمركي السريع)',
      description: 'الطلبية الأساسية لتزويد محلات الأحذية المتخصصة بتشكيلة كاملة من مقاسات موديل محدد لتلبية طلبات الزبائن وتفتيح الموسم بمتانة فائقة.',
      features: ['تحتوي على 24 زوج أحذية من موديل واحد بجلود طبيعية وخياطة يدوية سورية', 'تشكيلة مقاسات كاملة ومضاعفة (4x36, 6x37, 6x38, 5x39, 2x40, 1x41)', 'علب تعبئة كرتونية أنيقة ترفع من فخامة المنتج داخل الرفوف والمعارض', 'إمكانية توقيع اتفاقيات توريد أسبوعية ثابتة لضمان استقرار البضائع بالمحل'],
      targetAudience: 'محلات الأحذية المتخصصة بالبلد والأسواق والمحافظات الرئيسية بالأردن',
      stockLevel: 'يتم تحضيرها وشحنها خلال 5 أيام عمل'
    },
    {
      id: 'seham-jor-prod-3',
      name: 'طلب تصنيع خاص باسم البوتيك وشعارك الخاص (Private Label)',
      category: 'باقات الشراكة الحصرية والتصنيع الحصري',
      price: 'حسب الموديل والكمية (تبدأ من 50 زوجاً)',
      description: 'نوفر لبوتيكات الملابس الراقية ميزة تصنيع الأحذية باسم البراند الخاص بهم مجاناً، لزيادة القيمة السوقية لبوتيكهم والتميز بموديلات حصرية لا تباع بالأسواق التقليدية.',
      features: ['طباعة اسم وشعار البوتيك الخاص بك بالليزر أو الضغط الذهبي الفاخر على نعل الحذاء الداخلي', 'إمكانية تعديل ألوان الجلد ونوع الكعب والاكسسوارات حسب رغبة البوتيك الخاص بك وتصاميمك', 'حماية حصرية للموديل: نلتزم بعدم بيع الموديل المخصص لك لأي محل آخر في منطقتك الجغرافية بالأردن', 'مراجعة عينات تصويرية وفيديو قبل البدء بخط الإنتاج والتعبئة'],
      targetAudience: 'بوتيكات الملابس الراقية وسلاسل المحلات الكبرى الباحثة عن التفرد والتميز التجاري بالأردن',
      stockLevel: 'يتطلب حجز وتصنيع مسبق بـ 10 أيام عمل بالورشة بدمشق'
    }
  ],
  roadmap: [
    {
      number: 1,
      name: 'دراسة وتحديد المحلات وتأسيس كتالوج الواتساب بالأردن',
      quarter: 1,
      focus: 'أبحاث البوتيكات، حصر تجار المحافظات وتجهيز صور وموديلات سهام بجودة احترافية B2B',
      objectives: [
        'تأسيس كتالوج واتساب بزنس شامل بصور عالية الدقة وتفاصيل الأسعار والمقاسات بالدينار الأردني والليرة السورية',
        'حصر 150 عنوان ورقم هاتف لبوتيكات ملابس نسائية ومحلات أحذية في عمان وإربد والزرقاء للاستهداف المباشر',
        'الاتفاق مع مكتب شحن بري مضمون وسريع يضمن التخليص والتوصيل لباب التاجر بعمان خلال 3 أيام'
      ],
      actions: [
        'التقاط صور احترافية لجميع موديلات أحذية سهام من زوايا متعددة وخلفيات بيضاء أنيقة للبوتيكات',
        'تفعيل خط واتساب بزنس أردني وسوري مخصص للورشة بدمشق وربطه بأدوات الرد السريع التفاعلية للطلب',
        'إرسال عينات فردية لـ 5 من كبار محلات الأحذية بالأردن لمعاينة الجودة واللمس وبناء الثقة المبدئية'
      ],
      progress: 'جاهزية كاملة للقنوات الرقمية وسجل التجار وتوثيق آليات الشحن البري بالأردن'
    },
    {
      number: 2,
      name: 'إطلاق الإعلانات الممولة B2B واستهداف أول 100 تاجر',
      quarter: 1,
      focus: 'حملات استقطاب التجار عبر فيسبوك وإنستغرام والاتصال الميداني بالبوتيكات بعمان',
      objectives: [
        'إطلاق حملات إعلانية ممولة تستهدف أصحاب صفحات البوتيكات النسائية ومحلات الأحذية بالأردن',
        'استقبال أول 80 استفسار تجاري حقيقي عبر واتساب بزنس ومناقشة تفاصيل كرتونة التجربة',
        'بيع وشحن أول 15 كرتونة تجريبية لمحلات التجزئة بعمان وإربد والزرقاء ومعاينة سحبها'
      ],
      actions: [
        'إعداد ونشر إعلانات فيديو تظهر حرفية تفصيل الحذاء بدمشق ومقاومة جلود أحذية سهام للتلف والتقشير',
        'زيارات ميدانية وهاتفية مباشرة للبوتيكات الكبرى في جبل الحسين وتلاع العلي لتقديم الكتالوج والتسهيلات',
        'تقديم خصم ترحيبي 15% على أول كرتونة تجربة يتم طلبها وشحنها لباب المحل بالأردن'
      ],
      progress: 'نجاح تزويد 15 محل بضائع أولى، وتسجيل آراء وتغذية راجعة ممتازة من زبائنهم بالأردن'
    },
    {
      number: 3,
      name: 'تحسين سحب البضائع بالبوتيكات وتفتيح مقاسات التجار',
      quarter: 1,
      focus: 'دعم المبيعات الرقمية للتجار وتسهيل سرعة تفتيح المقاسات المطلوبة أسبوعياً أردنياً',
      objectives: [
        'تسجيل 10 تجار دائمين يطلبون كراتين بصفة دورية أسبوعياً لتلبية حركة السحب بمحلاتهم',
        'تسهيل شحن أزواج أحذية مفردة وسريعة كدعم للتجار لتلبية مقاس محدد طلبته زبونة مهمة بمحلهم',
        'الحفاظ على معدل تسليم طلبيات برية خلال 4 أيام كحد أقصى لباب المحل بالأردن'
      ],
      actions: [
        'تزويد التجار بصور وفيديوهات تسويقية جاهزة ومنسقة لنشرها بصفحاتهم لتسريع بيع الأحذية لزبائنهم بالأردن',
        'تطبيق نظام المتابعة الهاتفية الأسبوعية لمعرفة المقاسات الأكثر سحباً بالبوتيكات وتجهيزها مسبقاً بالورشة بدمشق',
        'ربط حساب الدفع للتجار بقنوات سداد مرنة وسهلة بالأردن لتسهيل المعاملات المالية المتبادلة'
      ],
      progress: 'ارتفاع الإيرادات والتدفق النقدي بنسبة 45% واستقرار حركة الشحنات البرية أسبوعياً بالأردن'
    },
    {
      number: 4,
      name: 'موسم الأعياد الكبرى وعقود التوريد الموسمية الثابتة',
      quarter: 2,
      focus: 'استغلال ذروة مبيعات أعياد الفطر والأضحى وتوقيع عقود توريد موسمية كبرى بالأردن',
      objectives: [
        'توقيع 15 عقد توريد موسمي ثابت ومجدول مسبقاً للمحلات الكبرى لضمان إنتاج وتأمين بضائعهم قبل العيد',
        'الوصول لمعدل تشغيل بالورشة بدمشق يضمن إنتاج وشحن 120 كرتونة أحذية نسائية شهرياً للأردن',
        'تجاوز أرباح مبيعات الجملة المستهدفة بالأردن بنسبة 20% بفضل حركة الأعياد والمواسم الحيوية'
      ],
      actions: [
        'إطلاق باقة "تجهيز البوتيكات للأعياد والمناسبات" بموديلات كعب وأحذية ناعمة حصرية براقة وراقية جداً',
        'بدء حملات إعلانات استقطاب التجار للأعياد قبل 30 يوماً من العيد لضمان تصنيع وشحن البضائع بوقت مبكر',
        'تقديم عينات حذاء وتغليف هدايا مميز مجاناً للبوتيكات الدائمة كشكر وتعزيز ثقة للعام الجديد'
      ],
      progress: 'امتلاء جدول تشغيل ورشة سهام بدمشق بالكامل وعلامة تجارية موثوقة جداً لدى 40+ محل بالأردن'
    },
    {
      number: 5,
      name: 'تثبيت عقود الصيف وتوسيع التغطية في المحافظات الثانوية',
      quarter: 2,
      focus: 'تحويل نجاح عمان وإربد إلى انتشار أقوى في السلط ومادبا والعقبة مع متابعة التجار الحاليين',
      objectives: [
        'إضافة 20 متجر جديد من المحافظات الثانوية إلى شبكة العملاء النشطين',
        'رفع نسبة إعادة الطلب من العملاء الحاليين إلى 60% خلال الشهر',
        'تقليل زمن تجهيز الشحنة المتكررة إلى يومي عمل داخل الورشة'
      ],
      actions: [
        'إطلاق عرض صيفي مخصص للبوتيكات التي تعيد الطلب مرتين خلال 30 يوماً',
        'إعداد قائمة استهداف جديدة لمحلات النساء الراقية في السلط ومادبا والعقبة والتواصل المباشر معها',
        'تجهيز تقرير أسبوعي بالموديلات والمقاسات الأسرع سحباً لضبط الإنتاج قبل طلب التاجر'
      ],
      progress: 'توسيع الانتشار خارج المدن الرئيسية مع ارتفاع واضح في الطلبات المتكررة واستقرار التخطيط التشغيلي'
    },
    {
      number: 6,
      name: 'بناء ولاء التجار وإطلاق برنامج الشريك الذهبي',
      quarter: 2,
      focus: 'ترسيخ العلاقة مع أفضل العملاء وتحويلهم إلى شركاء يعتمدون على سهام كمورد أول',
      objectives: [
        'تسجيل 12 تاجر ضمن برنامج الشريك الذهبي بحد أدنى طلب شهري ثابت',
        'رفع متوسط قيمة الطلبية الواحدة بنسبة 20%',
        'تجميع شهادات وتجارب نجاح موثقة من 10 محلات لرفع الثقة السوقية'
      ],
      actions: [
        'إطلاق برنامج مزايا للتجار المنتظمين يشمل خصومات تراكمية وأولوية بالموديلات الجديدة',
        'تصوير شهادات قصيرة من أصحاب المحلات الراضين واستخدامها في الكتالوج ورسائل الواتساب',
        'تخصيص متابعة أسبوعية فردية لأكبر العملاء لمناقشة السحب وخطط إعادة التوريد'
      ],
      progress: 'انتقال العلاقة من بيع موسمي إلى عقود ولاء وتكرار أعلى للطلبات مع تحسن الثقة التجارية'
    },
    {
      number: 7,
      name: 'التحضير لموسم العودة والحفلات وتطوير تشكيلة الخريف',
      quarter: 3,
      focus: 'بناء تشكيلة مناسبة للفترة الانتقالية مع اختبار موديلات جديدة تخدم البوتيكات الراقية',
      objectives: [
        'إطلاق 6 موديلات خريفية جديدة بناءً على ملاحظات السوق الأردني',
        'تأمين طلبات مسبقة من 15 متجر قبل بدء الإنتاج الكامل',
        'تحقيق معدل تصفية 70% من الموديلات الجديدة خلال أول 45 يوماً'
      ],
      actions: [
        'جمع ملاحظات التجار حول الألوان والكعوب والمقاسات المطلوبة للموسم القادم',
        'إرسال صور أولية وعينات محدودة للموديلات الجديدة إلى كبار العملاء لأخذ الموافقة المسبقة',
        'إعداد حملة كتالوج خريف بعنوان يبرز الأناقة السورية والتوفر السريع للأردن'
      ],
      progress: 'بدء دورة تطوير منتج مبنية على السوق الفعلي بدل التخمين ورفع جاهزية الخريف مبكراً'
    },
    {
      number: 8,
      name: 'تفعيل البيع بالموديلات الحصرية وتوسيع private label',
      quarter: 3,
      focus: 'رفع هامش الربح عبر التصنيع الخاص لبعض البوتيكات وتقديم مجموعات حصرية غير مكررة',
      objectives: [
        'توقيع 5 اتفاقيات تصنيع خاص باسم البوتيكات',
        'رفع هامش الربح الصافي في المبيعات الخاصة بنسبة 25% عن الطلبات العادية',
        'حجز إنتاج شهر كامل لموديلات خاصة بعملاء انتقائيين'
      ],
      actions: [
        'عرض باقة private label بشكل مباشر على البوتيكات الأعلى مبيعاً والأكثر التزاماً',
        'إعداد نماذج تغليف ووسم داخلي تحمل اسم العميل وشعاره لإقناع الشركاء بالقيمة الإضافية',
        'منح حماية جغرافية محدودة للموديلات الخاصة لضمان عدم تكرارها لدى منافس قريب'
      ],
      progress: 'تحول جزء من الإيراد إلى عقود أعلى ربحية وأقل حساسية للمنافسة السعرية'
    },
    {
      number: 9,
      name: 'ضبط العمليات والمخزون قبل ذروة نهاية العام',
      quarter: 3,
      focus: 'رفع الانضباط التشغيلي قبل ضغط الربع الأخير وتحسين توقعات الطلب ومخاطر الشحن',
      objectives: [
        'إعداد توقع طلب ربع سنوي مبني على العملاء النشطين والمواسم السابقة',
        'تقليل الطلبات المستعجلة غير المخطط لها بنسبة 30%',
        'تثبيت موردين وشركاء شحن بديلين لتفادي أي تأخير مفاجئ'
      ],
      actions: [
        'تجميع بيانات السحب من جميع العملاء وتقسيمهم إلى شرائح حسب الانتظام وحجم الطلب',
        'إعداد جدول إنتاج أسبوعي مرن مع هامش احتياطي للمقاسات الأسرع دوراناً',
        'التفاوض مع شاحنين بريين بديلين وإنشاء مسار طوارئ للشحنات المهمة'
      ],
      progress: 'ارتفاع وضوح التخطيط وخفض مفاجآت التشغيل بما يسمح بدخول الربع الأخير بجاهزية أقوى'
    },
    {
      number: 10,
      name: 'إطلاق حملات الشتاء وتكثيف الطلبيات المسبقة لنهاية السنة',
      quarter: 4,
      focus: 'تجهيز التجار لموسم الشتاء والمناسبات الختامية بعروض مبكرة وطلبات مجدولة',
      objectives: [
        'تحصيل 25 طلبية مسبقة لموديلات الشتاء والمناسبات',
        'رفع عدد العملاء النشطين شهرياً إلى 70 متجر',
        'تجاوز متوسط الإيراد الشهري المستهدف للعام بنسبة 15%'
      ],
      actions: [
        'إطلاق كتالوج شتوي مع باقات مجمعة للتجار تجمع بين الأحذية اليومية والموديلات المناسبة للمناسبات',
        'التواصل الهاتفي المباشر مع أفضل العملاء لإغلاق الطلبات قبل بداية ضغط الموسم',
        'تشغيل حملات إعادة استهداف على التجار الذين تفاعلوا سابقاً ولم يغلقوا صفقة'
      ],
      progress: 'بداية قوية للربع الرابع مع طلبات مؤكدة مسبقاً ووضوح أعلى في الإيرادات القادمة'
    },
    {
      number: 11,
      name: 'تعظيم مبيعات المناسبات ورفع معدل تكرار الطلب',
      quarter: 4,
      focus: 'الاستفادة القصوى من ذروة الشراء عبر خدمات أسرع وحوافز قوية للعملاء المنتظمين',
      objectives: [
        'رفع معدل تكرار الطلب لدى العملاء الحاليين إلى طلبتين شهرياً لدى الشريحة الأعلى نشاطاً',
        'بيع كامل الموديلات الموسمية الأعلى طلباً قبل نهاية الشهر',
        'الوصول إلى 3 شراكات توزيع شبه حصرية داخل مناطق ذات أداء مرتفع'
      ],
      actions: [
        'تقديم حوافز كمية للتجار الذين يرفعون طلباتهم أو يؤكدون إعادة التوريد خلال نفس الشهر',
        'تخصيص مسار خدمة سريع للعملاء المهمين يشمل أولوية تجهيز وشحن',
        'مراجعة أداء كل عميل رئيسي وعرض شروط توسع أو حماية منطقة عند استحقاقها'
      ],
      progress: 'تعظيم العائد من قاعدة العملاء الحالية مع تحسن الولاء وقوة أكبر في إدارة المناطق'
    },
    {
      number: 12,
      name: 'مراجعة السنة وتخطيط توسع العام التالي',
      quarter: 4,
      focus: 'إغلاق العام على أرقام واضحة وتحويل النتائج إلى خطة توسع تشغيلية وتجارية للعام القادم',
      objectives: [
        'إجراء تقييم كامل للأرباح والعملاء والموديلات والقنوات الأكثر فعالية',
        'تحديد 3 محافظات أو شرائح تستحق توسعاً أكبر في السنة التالية',
        'تجديد أو توسيع العقود السنوية مع أفضل 20 عميل'
      ],
      actions: [
        'إعداد تقرير سنوي يلخص المبيعات وتكرار الطلب ونسب السحب حسب المدينة والموديل',
        'عقد اجتماعات تقييم مع كبار التجار لجمع ملاحظاتهم وبناء خطة الموسم القادم',
        'إطلاق عروض تجديد مبكر للعقود السنوية مع مزايا حصرية لمن يثبت التزامه قبل نهاية الشهر'
      ],
      progress: 'إغلاق السنة بقاعدة عملاء أكثر رسوخاً وخطة توسع مبنية على بيانات تشغيلية وتجارية حقيقية'
    }
  ],

  // Required base fields (market, audience, channels, strategy, budget, kpis)
  market: {
    size: '80+ مليون دينار أردني سنوياً لسوق الأحذية النسائية والجلدية',
    trends: 'تفضيل متزايد للجودة السورية اليدوية، نمو قطاع البوتيكات النسائية بالأردن',
    competitors: 'مستوردون تركيون وصينيون يفتقرون للسرعة والجودة الجلدية المميزة'
  },
  audience: {
    personaName: 'أبو محمد - صاحب بوتيك نسائي بعمان',
    age: '30-55 سنة',
    interests: 'الأحذية الجلدية عالية الجودة، الموديلات العصرية، الشراء بالجملة بأسعار تنافسية',
    painPoints: 'صعوبة الحصول على مقاسات محددة بسرعة، جودة متذبذبة من الموردين الحاليين',
    buyingBehavior: 'يطلب كراتين تجربة أولاً، يوزع مخاطر الشراء، يبحث عن علاقة مستمرة مع المورد'
  },
  channels: {
    primary: ['واتساب بزنس B2B', 'زيارات ميدانية مباشرة للبوتيكات', 'إعلانات Meta Ads موجهة للتجار'],
    secondary: ['توصيات بين التجار', 'كتالوجات جملة موسمية', 'مجموعات واتساب التجار']
  },
  strategy: {
    awareness: 'إعلانات Meta Ads موجهة لأصحاب البوتيكات بالأردن مع محتوى يبرز جودة الجلد السوري',
    consideration: 'عروض كرتونة التجربة المجانية الشحن وزيارات ميدانية مع عينات حذاء',
    conversion: 'شروط دفع مرنة وضمان استبدال المقاسات غير المناسبة لكسب ثقة التاجر الجديد',
    retention: 'برنامج ولاء بخصومات تراكمية وأولوية تفتيح الموديلات الجديدة للتجار المنتظمين'
  },
  budget: {
    total: '2,500 دولار شهرياً',
    allocation: '40% إعلانات Meta، 30% لوجستيات وشحن، 20% عينات وكتالوجات، 10% إدارة'
  },
  kpis: {
    primary: ['عدد البوتيكات الموردة شهرياً', 'إجمالي الكراتين المشحونة', 'قيمة الطلبات الشهرية بالدولار'],
    secondary: ['معدل تكرار الطلبات', 'عدد عقود التوريد السنوية الثابتة', 'تقييم رضا التجار']
  }
};

// 2. SEHAM SHOES - IRAQ PLAN
const sehamIraqPlan: MarketingPlan = {
  id: 'seham-iraq-plan',
  title: 'خطة أحذية سهام - سوق العراق B2B',
  projectLinks: {
    websiteUrl: 'https://wa.me/964780000000',
    websiteLabel: 'كتالوج أحذية سهام بالجملة في العراق (واتساب بزنس)',
    controlUrl: 'https://business.facebook.com/',
    controlLabel: 'لوحة التحكم بإعلانات B2B وتجار العراق (Meta Business Suite)',
    controlIcon: 'Megaphone',
    productsSheetUrl: 'https://docs.google.com/spreadsheets/d/1tSehamIraqB2BOrders/edit?usp=sharing',
    productsSheetLabel: 'سجل صفقات الموزعين وتوريد مخازن الشورجة وأربيل بالعراق'
  },
  location: 'سوق العراق (بغداد، البصرة، أربيل، الموصل، النجف)',
  sizeLabel: 'توزيع وتوريد أحذية نسائية كميات كبرى B2B',
  mapTitle: 'خريطة مراكز التوزيع ومخازن أحذية سهام بالعراق',
  mapDesc: 'تحديد كبار موزعي المحافظات ومستودعات الجملة المستهدفة بأسواق الشورجة ومناطق العراق الرئيسية',
  kpisSummaryText: 'الوصول إلى 150 تاجر وموزع ومخزن بالعراق خلال 90 يوماً، وتأمين 3 عقود توزيع حصرية للمحافظات الكبرى، وتوريد 1,500+ زوج أحذية شهرياً.',
  stats: [
    { value: '3,500+', label: 'مخزن ومحل جملة بالعراق', icon: 'Building2' },
    { value: '50-100 زوج', label: 'الحد الأدنى لطلبيات الموزعين', icon: 'Package' },
    { value: '4-6 أيام', label: 'مدة الشحن البري وتخليص بغداد', icon: 'Truck' },
    { value: 'B2B Only', label: 'توريد كبار الموزعين والوكلاء', icon: 'ShieldCheck' }
  ],
  marketIntro: 'يعتبر سوق الأحذية العراقي من أضخم الأسواق العربية استهلاكاً وقوة شرائية، مع تفضيل تاريخي وراسخ للأحذية الجلدية سورية الصنع الشهيرة بـ "الصناعة الشامية" لجودتها ومتانتها الفائقة ومناسبتها التامة للطقس والذوق العراقي العام.',
  marketContext1Label: 'مخازن الجملة بالشورجة وبغداد',
  marketContext1Value: '3,500+ مخزن',
  marketContext1Desc: 'مستودعات وتجار الجملة بأسواق الشورجة والكاظمية وبغداد وبقية المحافظات الكبرى الباحثة عن مورد سوري مباشر.',
  marketContext1Icon: 'Building2',
  marketContext2Label: 'حجم سوق الأحذية بالعراق',
  marketContext2Value: '220M+ USD',
  marketContext2Desc: 'حجم الاستهلاك والواردات السنوية للأحذية النسائية والجلدية في السوق العراقي المتنامي.',
  marketContext2Icon: 'DollarSign',
  marketContext3Label: 'طلب الصناعة الشامية بالعراق',
  marketContext3Value: '95%',
  marketContext3Desc: 'نسبة الإقبال والطلب الكثيف على الأحذية الجلدية المصنوعة بدمشق مقارنة بالمستورد الصيني والتركي.',
  marketContext3Icon: 'TrendingUp',
  marketShareTitle: 'الحصة السوقية المستهدفة لسهام بالعراق',
  marketShareDesc: 'من سوق مبيعات جملة الأحذية النسائية الشامية إلى حصة ورشتنا المستهدفة',
  marketShareSegmentLabel: 'قطاع كبار تجار الجملة وأصحاب المخازن والموزعين الحصريين للمحافظات العراقية',
  marketShareSegmentPercent: '~40%',
  marketShareSegmentPercentNum: 40,
  marketShareSegmentDesc: 'يشمل مستودعات الشورجة، كبار موزعي أربيل، محلات الجملة بالبصرة والموصل، وصفحات البيع الرقمية الكبرى بالعراق.',
  marketShareTargetYear1Label: 'هدف السنة الأولى',
  marketShareTargetYear1Val: '4-6%',
  marketShareTargetYear1Desc: 'التعاقد مع 4 كبار موزعين للمحافظات وتوريد 15,000+ زوج أحذية لأسواق بغداد والبصرة.',
  marketShareTargetYear3Label: 'هدف السنة الثالثة',
  marketShareTargetYear3Val: '18-22%',
  marketShareTargetYear3Desc: 'التوسع كعلامة شامية رائدة لإنتاج الأحذية النسائية وتوقيع عقود توريد كبرى لـ 20 من أصحاب المستودعات الكبرى بالشورجة.',
  marketShareSummary: 'خلاصة التحليل: تتيح القوة الشرائية العالية بالعراق والطلب الضخم على الأحذية الشامية تحقيق أرقام مبيعات خيالية للورشة السورية في حال بناء شبكة لوجستية برية ممتازة وعقود توزيع حصرية للمدن الكبرى.',
  mapConfig: {
    center: [33.31, 44.36], // Center on Baghdad
    zoom: 6,
    markerTitle: 'المستودع الرئيسي ومركز الشحن والتوزيع بالعراق (بغداد - الشورجة)',
    markerDesc: 'نقطة استقبال الشحنات البرية القادمة من دمشق عبر الحدود، وتفتيح الكراتين وإعادة توزيعها للمحافظات العراقية الجنوبية والشمالية.',
    targets: [
      {
        name: "بغداد وإقليم الوسط - الثقل الاستهلاكي الأكبر وكبار أصحاب المخازن بالشورجة",
        coords: [33.31, 44.36],
        radius: 80000,
        color: "#0071E3"
      },
      {
        name: "إقليم الجنوب (البصرة، النجف، كربلاء) - طلب كثيف على الأحذية الجلدية والموديلات التقليدية",
        coords: [30.50, 47.81],
        radius: 60000,
        color: "#A855F7"
      },
      {
        name: "إقليم الشمال (أربيل، السليمانية، الموصل) - حركة تجارية ممتازة وبوتيكات راقية تطلب الحداثة والجودة",
        coords: [36.19, 44.01],
        radius: 50000,
        color: "#10B981"
      }
    ]
  },
  problem: {
    description: 'يواجه أصحاب مستودعات الجملة والموزعون في العراق تحديات كبيرة في الحصول على إمدادات مستقرة وموثوقة من الأحذية النسائية الجلدية الفاخرة التي تحمل البصمة الشامية الشهيرة. البضائع الصينية والتركية تغرق السوق لكنها تفتقر للمتانة وتتأثر بحرارة الجو وتتلف بسرعة، بينما يعوق عدم استقرار قنوات الشحن البري والجمارك وصول البضائع السورية بانتظام، مع صعوبة التنسيق الفني مع الورش بدمشق.',
    impact: 'تذبذب مخزون الموزعين بالعراق وفقدان مواسم البيع الحيوية بسبب تأخر الشحن البري، تراجع الأرباح وكثرة مرتجعات المحلات الفرعية، والوقوع تحت رحمة موردين غير ملتزمين بمطابقة الصور والتشطيب المتفق عليه.'
  },
  customerProblems: {
    title: 'المشاكل التي يعاني منها الموزعون وأصحاب المخازن بالعراق',
    problems: [
      {
        icon: 'Truck',
        title: 'صعوبة وتأخر الشحن البري عبر الحدود',
        description: 'تأخر الشحنات البرية في المنافذ الحدودية السورية العراقية بسبب تعقيدات التخليص وأوراق الفحص، مما يؤدي لتفويت بداية المواسم وضياع فرص مبيعات كبرى.'
      },
      {
        icon: 'ShieldOff',
        title: 'عدم تطابق البضائع الواصلة مع العينات المتفق عليها',
        description: 'يشتكي الموزع العراقي من استلام شحنات تجارية كبرى بتشطيب رديء وألوان وقوالب مختلفة عن الصور والعينات الأولى التي عاينها، مما يعرضه لمشاكل مع زبائنه من أصحاب المحلات.'
      },
      {
        icon: 'Coins',
        title: 'تقلب أسعار الصرف وصعوبة تحويل الأموال',
        description: 'تغير أسعار الدينار العراقي والليرة والدولار يسبب أعباء إضافية وصعوبة تصفية الحسابات المالية مع الورش بدمشق بشكل مستقر وآمن.'
      },
      {
        icon: 'Ban',
        title: 'غياب الموديلات الحصرية المناسبة للذوق العراقي العام',
        description: 'المصانع الخارجية تفرض تصاميم غربية أو موحدة لا تتماشى مع رغبة المرأة العراقية التي تفضل التصاميم الواسعة والمريحة والألوان البراقة الراقية والجلود المتينة المقاومة للأتربة.'
      }
    ]
  },
  ownerProblems: {
    title: 'تحديات ورشة سهام في السوق العراقي B2B',
    problems: [
      {
        icon: 'Lock',
        title: 'منع وضبط التصدير للمفرق نهائياً بالعراق',
        description: 'إرضاء كبار الموزعين بالشورجة والكاظمية يتطلب التزاماً صارماً ومطلقاً بعدم بيع أي زوج حذاء مفرق أو التعامل المباشر مع محلات التجزئة الصغيرة خارج نطاق الموزع، لضمان حماية حصتهم وأسعارهم.'
      },
      {
        icon: 'Shuffle',
        title: 'تأمين شبكة مكاتب شحن بري متخصصة بالعراق',
        description: 'تأسيس وبناء علاقات استراتيجية مع مكاتب شحن بري براد معتمد يمتلك خطوطاً ذهبية وسريعة لتخليص البضائع من دمشق إلى مستودع بغداد وأربيل بأمان تام وخلال 5 أيام.'
      },
      {
        icon: 'TrendingDown',
        title: 'ضخامة كميات الطلب وتأمين الطاقة الإنتاجية بدمشق',
        description: 'تجار العراق يطلبون كميات ضخمة جداً (بمئات الكراتين). التحدي الأكبر هو رفع الطاقة الإنتاجية للورشة بدمشق وتدفق المواد الخام والجلود الفاخرة لتلبية الطلب العراقي الهائل.'
      }
    ]
  },
  noMarketingProblems: {
    title: 'مخاطر غياب التسويق الرقمي B2B واستهداف تجار العراق',
    problems: [
      {
        icon: 'EyeOff',
        title: 'عدم معرفة كبار موزعي البصرة وأربيل بوجودنا',
        description: 'الاعتماد على أسواق بغداد التقليدية يفوت علينا فرصاً تجارية عملاقة مع كبار الموزعين في أربيل والبصرة والموصل الذين يبحثون يومياً عن مصانع سورية مباشرة لتلبية الطلب بمناطقهم.'
      },
      {
        icon: 'TrendingDown',
        title: 'التحكم السعري والمنافسة الشرسة في الشورجة',
        description: 'عدم بناء براند ووعي باسم "أحذية سهام" يجعلنا مصنعاً مجهولاً يسهل استبداله بمصنع آخر أرخص سعراً. التسويق B2B يرسخ علامة سهام كعلامة ممتازة ذات جودة يطلبها التاجر بالاسم.'
      },
      {
        icon: 'Clock',
        title: 'ركود خطوط الإنتاج والاعتماد على الطلبات غير المنظمة',
        description: 'بدون إعلانات استقطاب الموزعين وحملات جمع البيانات، يظل إنتاج الورشة متذبذباً وموسمياً، مما يصعّب الاحتفاظ بأمهر الحرفيين وصناع الأحذية بدمشق.'
      }
    ]
  },
  valueProposition: {
    statement: 'نحن لا نبيع بالتجزئة للأفراد؛ نحن الشريك الاستراتيجي ومصنع التوريد المباشر لأصحاب مستودعات الجملة وكبار الموزعين في العراق، نلتزم بتصنيع وتوريد أحذية نسائية جلدية شامية فاخرة بجودة تشطيب فائقة تتوافق مع الذوق العراقي، مع شحن بري سريع وآمن لباب مخزنك بالشورجة وأربيل وتسهيلات سداد مريحة.',
    keyBenefits: [
      'صناعة جلدية شامية أصلية يدوية ممتازة تضمن تفوق المحل والولاية التامة في السوق العراقي.',
      'مرونة وتنوع: إمكانية البدء بـ "كرتونة تجربة عراقية" لمعاينة التشطيب ومطابقة الصور قبل الطلب الكبير.',
      'توفير باقة الوكيل الحصري للمدينة: نمنحك حقوق التوزيع الكاملة لمدينتك لحماية أرباحك وحصتك السوقية.',
      'شحن بري سريع ومباشر ومضمون التخليص الجمركي لباب مستودعك بالشورجة أو أربيل خلال 5-6 أيام.',
      'تصنيع وتعديل الموديلات وتوسيع قوالب الأحذية لتتناسب تماماً مع راحة القدم العراقي والطقس الصيفي.',
      'شعار خاص وبطاقة براند (Private Label) مطبوعة مجاناً لكافة الطلبيات التجارية الكبرى.'
    ]
  },
  audienceDetails: {
    title: 'شرائح كبار الموزعين والتجار المستهدفين بالعراق (B2B)',
    subtitle: 'تحليل الفئات التجارية الأكبر قدرة وملاءة لبناء شراكات توزيع حصرية وحجوم مبيعات ضخمة',
    personas: [
      {
        name: 'الحاج كاظم - كبار موزعي الشورجة والكاظمية بغداد',
        role: 'صاحب مستودع جملة أحذية نسائية ضخم بالشورجة',
        age: '50-65 سنة',
        icon: 'Building2',
        description: 'يدير مستودعاً رئيسياً لتوزيع الأحذية في أسواق الشورجة ببغداد، يوزع لمئات المحلات في المحافظات الوسطى والجنوبية، ويتمتع بملاءة مالية ممتازة ويبحث عن مصنع سوري ثقة يلتزم بالكميات والجودة.',
        goals: [
          'الحصول على مورد سوري مباشر يقطع عنه عمولات الوسطاء والتجار المتنقلين بدمشق.',
          'تأمين كميات ضخمة (50-100 كرتونة شهرياً) من موديلات مميزة يطلبها السوق العراقي بكثافة.',
          'الالتزام الصارم بمواعيد تسليم الشحنات البرية لعدم قطع المحلات المتعاقدة معه.'
        ],
        challenges: [
          'تأخر التخليص الجمركي للشحنات وتلف علب التعبئة بسبب سوء التكديس والتعبئة بالسيارات البرية.',
          'كثرة الموردين غير الملتزمين بجودة النعل والجلود وتغير مواصفات الأحذية أسبوعياً.',
          'الخوف من قيام المصنع ببيع منتجاته لمحلات تجزئة فرعية في بغداد مما يضعه بموقف محرج.'
        ],
        shoppingHabits: [
          'يعتمد على المعاملات والعهود المباشرة والزيارات والسمعة الطيبة بين التجار.',
          'يفضل الدفع النقدي أو التحويل عبر شبكات وكلاء ثقة ومكاتب مضمونة ببغداد.',
          'يرسل ابنه أو وكيله لمعاينة خطوط الإنتاج والورشة بدمشق فور توقيع صفقات التوريد الكبرى.'
        ],
        quote: 'الصناعة الشامية والجلد السوري الهم هيبة وثقة بالعراق. إذا بتلتزم معي بالجودة والأمان بفرش بضاعتك من بغداد للبصرة.'
      },
      {
        name: 'كوران - موزع رئيسي وبوتيكات أربيل وإقليم كردستان',
        role: 'رائد أعمال وموزع أحذية فاخرة بالمنطقة الشمالية',
        age: '32-45 سنة',
        icon: 'Sparkles',
        description: 'يمتلك شبكة علاقات ومخازن توزيع بأربيل، يستهدف البوتيكات النسائية الراقية ومحلات المجمعات التجارية في كردستان العراق، ويبحث عن موديلات أحذية نسائية عصرية وناعمة تواكب الموضة والذوق التركي والأوروبي الفاخر.',
        goals: [
          'الحصول على توكيل حصري لبراند "أحذية سهام" في إقليم كردستان العراق للتميز والسيطرة على السوق.',
          'تخصيص الموديلات وتسميتها باسم شركته وتفصيل علب تغليف كرتونية بالغة الفخامة والأناقة.',
          'سرعة الاستجابة وشحن البضائع برياً مباشرة لمستودعات أربيل لتوفير تكاليف النقل الطويلة.'
        ],
        challenges: [
          'المنافسة الشديدة من المنتجات التركية رخيصة التشطيب البلاستيكي وسريعة التلف.',
          'صعوبة العثور على مورد سوري يتقن اللمسة الناعمة والعصرية المطلوبة لبوتيكات أربيل الفخمة.',
          'شروط الكميات المبالغ بها التي تفرضها المصانع التركية الكبرى لبدء الشراكة.'
        ],
        shoppingHabits: [
          'يتصفح الكتالوجات الرقمية بعناية فائقة ويهتم بدقة الألوان وتفاصيل التصوير والتشطيب.',
          'يحب التعامل المنظم والمراسلات الموثقة أسبوعياً وعقود التوزيع المحمية قانونياً.',
          'يبحث دائماً عن الجودة الطبيعية الفخمة التي تبرر أسعاره المرتفعة بالبوتيكات.'
        ],
        quote: 'زبونات أربيل يطلبن الفخامة والراحة وتصاميم مميزة. الصناعة السورية اليدوية بجلودها الممتازة هي الكرت الرابح لبوتيكاتنا.'
      }
    ]
  },
  valuePropositionDetails: {
    title: 'ركائز التميز وعقود الشراكة لسهام في سوق العراق B2B',
    subtitle: 'آليات العمل الاستراتيجية التي نتبناها لتسريع توزيع بضائعنا وحماية شركائنا بالعراق',
    pillars: [
      {
        title: 'تخصيص الموديلات لتناسب الذوق العراقي',
        icon: 'Sparkles',
        description: 'نحن لا نفرض موديلاتنا؛ بل نستمع للموزع العراقي ونقوم بتطوير وتعديل قوالب وتصاميم الأحذية بالورشة بدمشق لتناسب تماماً عرض القدم العراقي، مع اختيار جلود طبيعية متينة تقاوم رطوبة وحرارة الصيف الحارقة بالعراق.',
        examples: ['استخدام قوالب مريحة وواسعة نسبياً توفر الراحة الكاملة للقدم العراقي', 'توفير موديلات ألوان مميزة راقية وبراقة يكثر عليها الطلب بالمناسبات العراقية', 'نعل طبي داخلي مرن ومدعم بمقاومة عالية لامتصاص الصدمات والأتربة'],
        impact: 'تقديم أحذية نسائية مثالية للواقع التشغيلي العراقي وسحب سريع وخيالي من رفوف المحلات.'
      },
      {
        title: 'عقود التوزيع الحصري الإقليمي للمحافظات',
        icon: 'ShieldCheck',
        description: 'نمنح شركائنا الملتزمين من كبار الموزعين حق التوزيع والوكالة الحصرية لبراند "أحذية سهام" في مدينتهم أو محافظتهم، مع حظر كامل لبيع بضائعنا لأي تاجر آخر بنفس النطاق الجغرافي لحماية استثماراتهم وحجم مبيعاتهم.',
        examples: ['منح وكالة حصرية لبغداد والشورجة للتاجر الملتزم بطلبيات دورية كبرى', 'حق التوزيع الحصري لإقليم كردستان وأربيل لشركائنا الشماليين لترسيخ نفوذهم السعري', 'تحويل كافة اتصالات واستفسارات المحلات الصغيرة الواردة إلينا من مدينتك إليك مباشرة كوكيل معتمد'],
        impact: 'بناء شراكة أمان حقيقية تدفع الموزع للتسويق والترويج لعلامة سهام بكل قوة ونشاط.'
      },
      {
        title: 'قنوات شحن بري مضمونة التخليص لباب المستودع',
        icon: 'Truck',
        description: 'تعاقدات حصرية مع أفضل خطوط الشحن والنقل البري التي تمتلك خبرة واسعة وسريعة في المنافذ الحدودية العراقية، لتوفير تخليص جمركي آمن وسريع وضمان وصول الكراتين بحالتها الممتازة لباب مستودعك ببغداد أو أربيل خلال 6 أيام.',
        examples: ['تعبئة الشحنات بصناديق خشبية أو كراتين مقواة مزدوجة لمنع سحق علب الأحذية أثناء النقل البري الطويل', 'تنسيق كامل لشهادات الفحص والأوراق الجمركية لتفادي أي مصادرات أو تأخير حدودي مبالغ به', 'تحمل كامل لمخاطر النقل والشحن والتعويض الفوري في حال حدوث أي تلفيات أو فقدان'],
        impact: 'تأمين تدفق ثابت وموثوق للمخزون والتغلب على فوضى ومخاطر انقطاع البضائع الموسمية.'
      }
    ]
  },
  channelsDetails: {
    title: 'القنوات التسويقية B2B لاستقطاب تجار وموزعي العراق',
    subtitle: 'استراتيجيات رقمية وميدانية متكاملة لفتح قنوات اتصال مباشرة مع مستودعات الشورجة والمحافظات الكبرى',
    onlineChannels: [
      {
        name: 'حملات إعلانات استقطاب الموزعين وتجار الجملة عبر Meta Ads للعراق',
        budget: '350 دولار شهرياً',
        reach: '120,000+ تاجر وموزع وأصحاب مخازن ومحلات بالعراق',
        frequency: 'حملات إعلانية متواصلة تركز على المدن الحيوية (بغداد، البصرة، أربيل، النجف)',
        examples: ['إعلان فيديو يستعرض القوة والمتانة وحجم خطوط إنتاج ورشة أحذية سهام بدمشق', 'إعلان بتركيز قوي على عبارة: (لكبار تجار الأحذية وموزعي المحافظات بالعراق.. براند أحذية سهام الشامية الفاخرة جملة مباشرة من المصنع لباب مستودعك ببغداد وأربيل مع باقة الوكيل الحصري)', 'نماذج تجميع بيانات سريعة لجمع أرقام واتساب أصحاب مخازن الجملة والتواصل الفوري معهم'],
        kpis: 'تكلفة جهة الاتصال المهتمة بالجملة (CPL) أقل من 1.2 دولار وتجميع 180 تاجر مهتم شهرياً.'
      },
      {
        name: 'التواصل والكتالوج الرقمي الاحترافي عبر WhatsApp Business',
        budget: '60 دولار شهرياً (أدوات أتمتة الرسائل والتسويق الرقمي)',
        reach: 'الرد الفوري وتقديم الكتالوج المخصص لطلبيات الموزعين بالعراق',
        frequency: 'تحديث الكتالوج بموديلات "الذوق العراقي" أسبوعياً وإرسال نشرة للمشتركين',
        examples: ['كتالوج PDF تفاعلي بصور عالية الدقة وتفاصيل كميات كراتين الجملة والأسعار بالدولار والدينار العراقي', 'محادثات تفاعلية آلية ذكية توضح للموزعين خيارات وكالة المدينة الحصرية، شروط الشحن ونموذج كرتونة التجربة بنقرة واحدة', 'إرسال رسائل تحديث ومقاطع فيديو تظهر مراحل الشحن والتعبئة البرية لبغداد لبناء الثقة المطلقة'],
        kpis: 'معدل فتح رسائل الواتساب يتخطى 96% ومعدل تحويل الاستفسار لطلب كرتونة تجربة أو صفقة جملة 18%.'
      }
    ],
    offlineChannels: [
      {
        name: 'التنسيق والزيارات الميدانية المباشرة (Direct Commercial Visits)',
        budget: '150 دولار شهرياً (بدلات تنقل وتوزيع عينات)',
        reach: 'بناء صلات تجارية مع 80 صاحب مستودع جملة شهرياً بالأسواق الكبرى',
        kpis: 'توقيع عقد وكالة حصرية واحد شهرياً في المحافظات الكبرى وتأمين 5 زبائن مستودعات دائمين.',
        locations: ['بغداد (أسواق الشورجة الشهيرة بالجملة، سوق الكاظمية للأحذية والجلود)', 'أربيل (سوق القيصرية التراثي، محلات الجملة بالمناطق التجارية الحديثة)', 'البصرة (أسواق الجملة بوسط المدينة ومستودعات التوزيع الرئيسية)']
      }
    ]
  },
  strategyDetails: {
    title: 'استراتيجية قمع المبيعات B2B وتأمين الموزعين بالعراق',
    subtitle: 'مراحل تحويل مستودعات الجملة وكبار الوكلاء بالعراق إلى شركاء توزيع حصريين للورشة السورية',
    funnel: [
      {
        stage: '1. جذب واستهداف كبار موزعي العراق (Awareness)',
        goal: 'إبراز ريادة الصناعة الشامية لورشة سهام وجاهزيتها لتلبية طلبيات الجملة الضخمة بمرونة لوجستية.',
        budget: '180 دولار شهرياً (إعلانات Meta الممولة)',
        tactics: [
          {
            name: 'إطلاق حملات فيديو تعزز "هيبة الصناعة الشامية اليدوية"',
            description: 'نشر مقاطع فيديو عالية الجودة تسلط الضوء على فخامة الجلد الطبيعي، الحياكة اليدوية الدقيقة، والتشطيب الممتاز بالورشة بدمشق مع شعار "أحذية سهام - الصناعة الشامية العريقة ببغداد".',
            examples: ['فيديو تفتيش الشحنات البرية وتعبئتها بصناديق خشبية مقواة لضمان سلامتها لبغداد', 'فيديو تصفح الكتالوج التفاعلي وسهولة الطلب والتصفح عبر شاشة الواتساب العراقي']
          },
          {
            name: 'استهداف جغرافي مكثف للمحافظات والأسواق التجارية الكبرى بالعراق',
            description: 'إعداد حملات إعلانية ممولة تستهدف المشرفين على صفحات ومجموعات تجار الجملة، ومستودعات الأحذية بالشورجة، وتجار الملابس بالمحافظات العراقية الكبرى.',
            examples: ['حملة إعلان تجمع عبارات مثل: "تاجر أحذية جملة بالعراق؟ بتدور على مورد سوري مباشر يلتزم بالجودة ويشحن لباب مخزنك بالشورجة وأربيل؟ تواصل معنا لعرض الوكالة الحصرية"']
          }
        ],
        kpis: 'الوصول لـ 70,000 مشاهدة للفيديو وتجميع بيانات 150 تاجر وموزع مهتم بالعراق.'
      },
      {
        stage: '2. بناء الثقة وتبديد مخاوف الشحن والجمارك (Consideration)',
        goal: 'طمأنة الموزعين الجدد على جودة أحذيتنا ومطابقة البضائع وضمان وصولها بأمان وسرعة.',
        budget: '50 دولار شهرياً',
        tactics: [
          {
            name: 'مشاركة توثيق حي ومصور للشحنات والطلبيات السابقة',
            description: 'تزويد الموزعين الجدد بصور وفيديوهات حقيقية لشحنات التجار السابقين بالعراق، وصور الصناديق الخشبية المقواة أثناء شحنها لبغداد وأربيل.',
            examples: ['توفير شهادات تقييم وتوصيات تجار وموزعين عراقيين يتعاملون معنا ويثنون على أمان التوريد والجودة الفائقة', 'مكالمات فيديو مباشرة من داخل الورشة بدمشق لإظهار خطوط الإنتاج والجدية والالتزام بالكميات']
          },
          {
            name: 'توفير "كرتونة التجربة العراقية" المرنة والمشكلة',
            description: 'تقديم باقة كرتونة تجربة (24 زوجاً) مشكلة المقاسات والألوان بسعر جملة خاص جداً ليتأكد الموزع من مطابقتها للصور وجودة الجلد الشامي وسرعة بيعها.',
            examples: ['تشكيلة مقاسات عراقية مريحة وواسعة تناسب تماماً رغبة محلات التجزئة الفرعية المتعاملة مع الموزع']
          }
        ],
        kpis: 'تأكيد تواصل 65% من المهتمين عبر الواتساب ومناقشة تفاصيل كشوف الأسعار والوكالة الحصرية.'
      },
      {
        stage: '3. إتمام الصفقات وتنشيط خط الشحن البري لبغداد (Conversion)',
        goal: 'توقيع صفقات التوريد الكبرى وشحن الكراتين لمستودعات الجملة والموزعين بالعراق.',
        budget: 'بدون تكلفة إضافية (مبيعات تجارية)',
        tactics: [
          {
            name: 'تسهيل خيارات الدفع والطلب بأبسط الطرق بالعراق',
            description: 'توفير قنوات سداد وحسابات دفع مضمونة وسهلة للموزعين بالعراق عبر وكلاء ماليين موثوقين ببغداد وأربيل لتجنب تعقيدات الحوالات الدولية والحد الأقصى.',
            examples: ['توفير فواتير تجارية واضحة تحدد السعر بالدولار والدينار العراقي لتفادي أي فروقات صرف أو غموض مالي']
          },
          {
            name: 'شحن بري سريع ومضمون ووصول لباب المستودع خلال 5-6 أيام',
            description: 'التنسيق الفوري مع أفضل مكاتب الشحن البري التي تضمن الشحن بدون مصادرات والتوصيل لباب التاجر ببغداد أو أربيل.',
            examples: ['متابعة يومية مع السائق وتحديث الموزع بموقع الشحنة وتنسيق موعد الاستلام الدقيق']
          }
        ],
        kpis: 'بيع وتوصيل 60 كرتونة تجربة وجملة كبرى ناجحة شهرياً للموزعين وأصحاب المخازن بالعراق.'
      },
      {
        stage: '4. ترسيخ الشراكة وبرنامج الوكيل الحصري للمدينة (Retention)',
        goal: 'تحويل الموزعين لشركاء استراتيجيين دائمين يطلبون أسبوعياً ويحتكرون علامة سهام بمدنهم.',
        budget: '120 دولار شهرياً (خصومات وباقات دعم الموزعين)',
        tactics: [
          {
            name: 'إطلاق برنامج "الوكالة الإقليمية المحمية وتوجيه المبيعات"',
            description: 'توجيه وتحويل كافة طلبات واستفسارات محلات التجزئة الصغيرة الواردة إلينا من العراق إلى الموزع الحصري المعتمد لمدينته مباشرة لتسريع مبيعاته.',
            examples: ['أولوية تصنيع وشحن مقاسات وموديلات محددة للموزعين المستمرين دون الحاجة لانتظار كرتونة كاملة في حال سحب مقاس معين بمستودعهم']
          },
          {
            name: 'تقديم خصومات كميات وعروض تصاعدية جذابة للطلبات الكبرى',
            description: 'منح خصومات تصاعدية جذابة وتسهيل شروط الدفع والتعامل الآجل للتجار الذين تثبت جديتهم وتتجاوز طلبياتهم 10 كراتين شهرياً.',
            examples: ['إمكانية طباعة شعار الموزع (Private Label) وتفصيل علب تغليف خاصة مجاناً كباقة تشجيعية واستمرار الثقة']
          }
        ],
        kpis: 'نسبة إعادة طلب الجملة تتخطى 75%، وتثبيت 5 عقود توزيع حصرية للمحافظات العراقية الكبرى.'
      }
    ]
  },
  budgetDetails: {
    title: 'الميزانية التسويقية والتشغيلية المخصصة لسوق العراق',
    subtitle: 'تخصيص التمويل التسويقي بدقة للوصول لكبار مستودعات الجملة وتحقيق أعلى عائد مبيعات (ROAS)',
    monthlyBudget: '560 دولار أمريكي شهرياً',
    breakdown: [
      {
        category: 'إعلانات الاستقطاب B2B وتجار العراق عبر Meta Ads',
        percentage: 63,
        amount: '350 دولار أمريكي',
        items: [
          { name: 'حملات إعلانات تجميع بيانات كبار الموزعين والوكلاء بالعراق', amount: '220 دولار أمريكي', details: 'توليد أرقام هواتف ومستودعات مهتمة بالجملة بالشورجة والمحافظات' },
          { name: 'حملات إعادة استهداف التجار المهتمين بالفيديو والكتالوج العراقي', amount: '130 دولار أمريكي', details: 'عرض موديلات أحذية سهام الشامية الجديدة والوكالة الحصرية' }
        ]
      },
      {
        category: 'أدوات التواصل والمبيعات الرقمية والتصوير الفاخر',
        percentage: 16,
        amount: '90 دولار أمريكي',
        items: [
          { name: 'اشتراك منصة إدارة محادثات واتساب وبزنس وبوت الحجز', amount: '50 دولار أمريكي', details: 'أتمتة الردود الفورية وتوفير الكتالوج التفاعلي للتجار' },
          { name: 'تصوير فوتوغرافي وفيديو للمنتجات والموديلات من زوايا متعددة', amount: '40 دولار أمريكي', details: 'إعداد الصور بجودة احترافية مناسبة لذوق محلات أربيل الفخمة' }
        ]
      },
      {
        category: 'دعم الشحن وتعبئة الصناديق الخشبية وتأمين العينات',
        percentage: 21,
        amount: '120 دولار أمريكي',
        items: [
          { name: 'ميزانية شحن عينات ومطبوعات وشعارات الورشة وتغليف مميز', amount: '70 دولار أمريكي', details: 'تصميم علب كرتون متينة تتحمل ظروف النقل البري الطويل' },
          { name: 'بناء وتدعيم صناديق خشبية مقواة للشحن البري لبغداد', amount: '50 دولار أمريكي', details: 'تأمين الصناديق المقواة لحماية علب الأحذية من السحق الجمركي' }
        ]
      }
    ],
    roi: {
      expectedRevenue: '12,000 دولار أمريكي شهرياً مبيعات جملة كبرى',
      marketingSpend: '560 دولار أمريكي شهرياً',
      roi: '21x عائد مبيعات جملة ضخم وممتاز جداً',
      paybackPeriod: 'من الشهر الأول (بمجرد بيع أول شحنة جملة كبرى لمستودع بغداد)'
    }
  },
  kpisDetails: {
    title: 'مؤشرات الأداء الرئيسية والتشغيلية بالعراق (KPIs)',
    subtitle: 'الأهداف الرقمية المطلوب قياسها دورياً لضمان نجاح التوريد وبناء الشراكات الكبرى',
    salesKpis: [
      { name: 'عدد الكراتين والجملة الكبرى المباعة شهرياً بالعراق', target: '90 كرتونة شهرياً', tracking: 'سجل مبيعات متجر أحذية سهام وجدول الشحنات البرية للعراق', frequency: 'أسبوعي', action: 'تكثيف مكالمات المتابعة مع الموزعين الذين استلمت مستودعاتهم الكتالوج' },
      { name: 'عدد عقود التوزيع الحصري النشطة والموقعة مع كبار الوكلاء للمحافظات', target: '3+ عقود توزيع حصرية', tracking: 'سجل الموزعين الحصريين وبرنامج حماية النطاق الجغرافي للعراق', frequency: 'شهري', action: 'تقديم باقة Private Label وخصومات تصاعدية جذابة لتشجيعهم على الالتزام السنوي' },
      { name: 'متوسط قيمة فاتورة طلب الجملة الواحدة للتاجر بالعراق', target: '1,500 دولار أمريكي', tracking: 'كشوف الحسابات وفواتير مبيعات الجملة بالدولار والدينار العراقي', frequency: 'أسبوعي', action: 'عرض موديلات أحذية نسائية ناعمة وكعب عالية الجودة لزيادة سلة الطلب' }
    ],
    customerKpis: [
      { name: 'نسبة رضا التجار عن جودة جلود وتشطيب أحذية سهام الشامية', target: '97% رضا تام وتقييم ممتاز', tracking: 'استبيانات جودة دورية مرسلة للموزعين بعد وصول الشحنة لمستودعاتهم', frequency: 'شهري', action: 'تعديل خط الإنتاج بالورشة فوراً في حال ورود أي ملاحظة فنية على نعل أو قالب' },
      { name: 'نسبة سحب وبقاء بضائع أحذية سهام في مستودعات الموزعين قبل إعادة الطلب', target: 'أقل من 25 يوماً لبيع الشحنة', tracking: 'تقارير دورية ودية ومكالمات واتساب مع الموزع لمعرفة حركة المقاسات بالمحلات الفرعية', frequency: 'نصف شهري', action: 'تزويد الموزع بصور وفيديوهات تسويقية جاهزة لصفحتهم لتسريع السحب الرقمي' }
    ],
    marketingKpis: [
      { name: 'عدد التجار وأصحاب المستودعات المنضمين لقناة واتساب بزنس العراقي', target: '150+ تاجر مهتم شهرياً', tracking: 'إحصائيات حملات جمع بيانات التجار وأرقام واتساب عراقي', frequency: 'أسبوعي', action: 'تحسين إعلانات الاستهداف B2B بموديلات أكثر لفتاً للإنتباه وعرض الوكالة الحصرية' },
      { name: 'تكلفة جهة الاتصال المهتمة بالجملة من إعلانات Meta Ads للعراق', target: 'أقل من 1.2 دولار CPL', tracking: 'لوحة تحكم مدير إعلانات Meta Ads بالعراق', frequency: 'يومي', action: 'استبعاد الكلمات والمناطق غير الفعالة وتركيز الميزانية على بغداد والمحافظات النشطة' }
    ]
  },
  products: [
    {
      id: 'seham-irq-prod-1',
      name: 'عرض كرتونة تجربة أحذية نسائية - سوق العراق',
      category: 'باقات التجربة الفورية لشركاء سهام الجدد بالعراق',
      price: '280 دولار أمريكي (سعر جملة خاص بالباقة الأولى)',
      description: 'باقة مصممة خصيصاً للموزعين وأصحاب المخازن بالعراق لمعاينة الجودة واللمس وجلود أحذيتنا وسرعة سحبها بسوقهم دون مخاطر تشغيلية ضخمة.',
      features: ['تحتوي على 24 زوج أحذية نسائية ممتازة مشكلة الموديلات', 'تشكيلة مقاسات نسائية عراقية مريحة (4x37, 6x38, 6x39, 5x40, 3x41)', 'ألوان أساسية منوعة تناسب ملابس الموسم (أسود، بني، كافيه، بيج)', 'شحن وتوصيل بري شامل لباب مستودعك ببغداد خلال 5 أيام شامل التخليص الجمركي'],
      targetAudience: 'أصحاب مخازن الشورجة، الموزعون وتجار الجملة الجدد بالمحافظات العراقية الكبرى',
      stockLevel: 'متوفر للشحن البري الفوري أسبوعياً'
    },
    {
      id: 'seham-irq-prod-2',
      name: 'طلب جملة مخازن وموزعين - تشكيلة كراتين كاملة ومكثفة',
      category: 'طلبيات الجملة القياسية للمستودعات الكبرى',
      price: '580 دولار أمريكي (شامل الشحن الجمركي السريع والبراد المعتمد)',
      description: 'الطلبية الأساسية لتزويد مستودعات الجملة المتخصصة بتشكيلة كاملة من مقاسات موديل محدد لتلائم حركة السحب والتوزيع بمحلات المحافظات.',
      features: ['تحتوي على 48 زوج أحذية من موديل واحد بجلود طبيعية وخياطة يدوية شامية عريقة', 'تشكيلة مقاسات كاملة ومضاعفة (8x36, 12x37, 12x38, 10x39, 4x40, 2x41)', 'تعبئة بصناديق خشبية مقواة تمنع سحق كراتين الأحذية أثناء الرحلة البرية الطويلة لبغداد', 'أولوية شحن وتصنيع بالورشة لضمان سرعة التسليم وثبات التدفق للمستودع'],
      targetAudience: 'مستودعات الجملة الكبرى بالشورجة، الكاظمية، أربيل والنجف',
      stockLevel: 'يتم تحضيرها وشحنها خلال 7 أيام عمل'
    },
    {
      id: 'seham-irq-prod-3',
      name: 'باقة توريد موزع رسمي معتمد للمحافظة (عقد حماية جغرافي)',
      category: 'باقات الوكالة الحصرية والشراكة الاستراتيجية للعراق',
      price: 'حسب الموديل والكمية (تبدأ من 120 زوجاً شهرياً)',
      description: 'نمنح شركائنا الملتزمين حقوق التوزيع والوكالة الحصرية لبراند "أحذية سهام" في مدينتهم أو محافظتهم، مع حظر كامل لبيع بضائعنا لأي تاجر آخر بنفس النطاق الجغرافي لحماية أرباحهم وحجم مبيعاتهم.',
      features: ['توقيع عقد وكالة حصرية موثق يمنحك حقوق التوزيع الكاملة لعلامة سهام بمحافظتك بالعراق', 'حظر كامل وبيع بضائعنا لأي تاجر آخر بنفس النطاق الجغرافي لحماية أسعارك وحجم مبيعاتك', 'تحويل كافة استفسارات المحلات والطلبات الصغيرة الواردة إلينا من منطقتك الجغرافية إليك مباشرة كوكيل معتمد', 'وسم وشعار خاص ومجاني بالليزر أو الضغط الذهبي الفخم باسم براندك الخاص على كولكشن الأحذية بالكامل'],
      targetAudience: 'كبار الموزعين والوكلاء الباحثين عن التميز والسيطرة والوكالة الحصرية بمدنهم بالعراق',
      stockLevel: 'يتطلب حجز وتصنيع مسبق بـ 12 يوم عمل بالورشة بدمشق'
    }
  ],
  roadmap: [
    {
      number: 1,
      name: 'دراسة وتحديد موزعي الشورجة وتأسيس كتالوج الواتساب العراقي',
      quarter: 1,
      focus: 'أبحاث كبار تجار المحافظات وتجهيز صور وموديلات سهام بجودة احترافية تناسب الذوق العراقي',
      objectives: [
        'تأسيس كتالوج واتساب بزنس شامل بصور عالية الدقة وتفاصيل الأسعار والمقاسات بالدولار والليرة والدينار العراقي',
        'حصر 200 عنوان ورقم هاتف لكبار موزعي الأحذية بأسواق الشورجة والنجف وأربيل للاستهداف المباشر',
        'الاتفاق مع مكتب شحن بري مضمون وسريع يضمن التخليص الجمركي والتوصيل لباب مستودع بغداد خلال 5 أيام'
      ],
      actions: [
        'التقاط صور ومقاطع فيديو عالية الدقة تظهر جودة جلود أحذية سهام ومقاومتها للأتربة والطقس الحار',
        'تفعيل خط واتساب بزنس عراقي مخصص للورشة بدمشق وربطه بأدوات الرد السريع للتجار والموزعين',
        'إرسال عينات فردية لـ 8 من كبار موزعي الشورجة وأربيل لمعاينة الجودة واللمس وبناء الثقة المبدئية'
      ],
      progress: 'جاهزية كاملة للقنوات الرقمية وسجل الموزعين وتوثيق آليات الشحن البري المضمون للعراق'
    },
    {
      number: 2,
      name: 'إطلاق الإعلانات الممولة B2B واستهداف كبار موزعي العراق',
      quarter: 1,
      focus: 'حملات استقطاب الموزعين وتجار الجملة الكبرى عبر فيسبوك وإنستغرام والزيارات الهاتيفة ببغداد',
      objectives: [
        'إطلاق حملات إعلانية ممولة تستهدف أصحاب مستودعات الأحذية وكبار الموزعين بالمحافظات العراقية الكبرى',
        'استقبال أول 120 استفسار تجاري حقيقي عبر واتساب بزنس ومناقشة تفاصيل الوكالة الحصرية',
        'بيع وشحن أول 25 كرتونة تجريبية وجملة كبرى لمحلات وموزعي بغداد وأربيل ومعاينة سحبها'
      ],
      actions: [
        'إعداد ونشر إعلانات فيديو تظهر حرفية تفصيل الحذاء بدمشق ومقاومة جلود أحذية سهام الشامية للتلف والحرارة',
        'مكالمات هاتفية وتواصل مباشر مع كبار مستودعات الشورجة لتقديم الكتالوج والتسهيلات وباقة الموزع الرسمي',
        'تقديم عينات حذاء وتغليف هدايا مميز مجاناً لأول 10 موزعين يتم تأكيد عقودهم كشكر وتعزيز ثقة'
      ],
      progress: 'نجاح تزويد 25 موزع بضائع أولى، وتسجيل آراء وتغذية راجعة ممتازة من محلاتهم الفرعية بالعراق'
    },
    {
      number: 3,
      name: 'ترسيخ الشراكة وتفتيح مقاسات الموزعين وتعميق الانتشار',
      quarter: 1,
      focus: 'دعم المبيعات الرقمية للوكلاء وتسهيل سرعة تفتيح المقاسات المطلوبة أسبوعياً عراقياً',
      objectives: [
        'تأمين 3 عقود توزيع حصرية نشطة في المحافظات الكبرى (بغداد، البصرة، أربيل) لضمان توريد ثابت',
        'تسهيل شحن أزواج أحذية مفردة وسريعة كدعم للموزعين لتلبية مقاس محدد طلبته محلاتهم الفرعية',
        'الحفاظ على معدل تسليم طلبيات برية خلال 5 أيام كحد أقصى لباب مستودع بغداد وأربيل'
      ],
      actions: [
        'تزويد الموزعين الحصريين بصور وفيديوهات تسويقية احترافية ومواد جاهزة لنشرها لصفحات محلاتهم الفرعية لتسريع السحب',
        'تطبيق نظام المتابعة الهاتفية الأسبوعية لمعرفة المقاسات الأكثر سحباً بالمستودعات وتجهيزها مسبقاً بالورشة بدمشق',
        'ربط حساب الدفع للموزعين بقنوات سداد مرنة وسهلة بالعراق لتسهيل المعاملات المالية المتبادلة دون عقبات'
      ],
      progress: 'ارتفاع الإيرادات وتدفق مبيعات الجملة بنسبة 55% واستقرار حركة الشحنات البرية أسبوعياً للعراق'
    },
    {
      number: 4,
      name: 'مواسم الأعياد الكبرى وعقود التوزيع وتوريد المستودعات الكبرى',
      quarter: 2,
      focus: 'استغلال ذروة مبيعات أعياد الفطر والأضحى وتوقيع عقود توريد موسمية كبرى لمستودعات العراق',
      objectives: [
        'توقيع 10 عقود توريد موسمية كبرى ثابتة ومجدولة مسبقاً مع أصحاب مستودعات الشورجة لتأمين بضائعهم قبل العيد بـ 45 يوماً',
        'الوصول لمعدل تشغيل بالورشة بدمشق يضمن إنتاج وشحن 250 كرتونة أحذية نسائية شهرياً للعراق',
        'تجاوز أرباح مبيعات الجملة المستهدفة بالعراق بنسبة 25% بفضل القوة الشرائية العالية في الأعياد والمواسم'
      ],
      actions: [
        'إطلاق باقة "كولكشن العيد العراقي" بموديلات كعب وأحذية ناعمة شامية فاخرة جداً ذات بريق جذاب وتصاميم مبهرة',
        'بدء حملات إعلانات استقطاب الموزعين والتنسيق البري قبل 40 يوماً من العيد لضمان تصنيع وشحن البضائع بوقت مبكر',
        'تقديم عينات حذاء وتغليف هدايا مميز مجاناً للبوتيكات والموزعين الدائمين كشكر وتعزيز ثقة للعام الجديد'
      ],
      progress: 'امتلاء جدول تشغيل ورشة سهام بدمشق بالكامل وتأسيس شبكة مبيعات جملة عملاقة وصناعة شامية راسخة جداً بالعراق'
    },
    {
      number: 5,
      name: 'التوسع في المحافظات عالية السحب وتثبيت الوكلاء الإقليميين',
      quarter: 2,
      focus: 'تحويل النجاح الأولي في بغداد وأربيل إلى عقود أقوى في البصرة والنجف والموصل',
      objectives: [
        'إضافة وكيلين أو موزعين رئيسيين جدد في محافظات استراتيجية',
        'رفع نسبة إعادة الطلب من المستودعات الحالية إلى 65%',
        'تثبيت جدول شحن نصف شهري منتظم للعملاء الأعلى نشاطاً'
      ],
      actions: [
        'إعادة ترتيب قائمة الأولويات حسب المحافظات الأعلى استجابة والأسرع في السحب',
        'تقديم عرض خاص للموزعين الذين يلتزمون بحد أدنى شهري ثابت من الكراتين',
        'إطلاق متابعة تشغيلية أسبوعية مع الوكلاء لقياس السحب وإعادة الطلب قبل نفاد المخزون'
      ],
      progress: 'تحسن ثبات الطلب الإقليمي وبداية انتقال العلامة من مورد تجريبي إلى شريك جملة دائم'
    },
    {
      number: 6,
      name: 'برنامج كبار الموزعين وبناء سلطة العلامة في السوق العراقي',
      quarter: 2,
      focus: 'تعزيز الثقة والهيبة التجارية عبر قصص نجاح ومزايا حقيقية للموزعين الأقوى',
      objectives: [
        'ضم 10 موزعين إلى برنامج كبار الموزعين بعقود أو التزامات شهرية واضحة',
        'رفع متوسط قيمة الصفقة الواحدة بنسبة 25%',
        'توثيق 8 شهادات نجاح من موزعين ومحلات فرعية تستخدم أحذية سهام بانتظام'
      ],
      actions: [
        'إطلاق برنامج امتياز يمنح كبار الموزعين أولوية بالموديلات الجديدة ودعم مواد البيع',
        'إنتاج مواد تسويقية توثق جودة التصنيع والسحب الفعلي في الأسواق العراقية',
        'تنفيذ اتصالات مراجعة شهرية مع أهم الحسابات لإغلاق الصفقات الكبيرة مبكراً'
      ],
      progress: 'تزايد الثقة السوقية وارتفاع قيمة الطلبات بفضل تمركز أفضل لدى كبار الموزعين'
    },
    {
      number: 7,
      name: 'تطوير تشكيلة الخريف والشتاء وفق الذوق العراقي',
      quarter: 3,
      focus: 'اختبار موديلات وألوان أكثر ملاءمة لأسواق المحافظات مع اعتماد ملاحظات الوكلاء',
      objectives: [
        'إطلاق 8 موديلات موسمية موجهة للسوق العراقي',
        'الحصول على طلبات مسبقة من 12 موزع قبل الإنتاج الكامل',
        'رفع نسبة تصفية الموديلات الجديدة إلى 75% خلال أول شهرين'
      ],
      actions: [
        'جمع ملاحظات الوكلاء حول الموديلات الأسرع حركة والألوان الأنسب في كل محافظة',
        'عرض عينات محدودة للموزعين الرئيسيين لأخذ موافقات مبكرة قبل توسيع الإنتاج',
        'إصدار كتالوج موسمي جديد يركز على الربحية العالية والتوريد المنتظم للعراق'
      ],
      progress: 'بدء دورة تطوير منتج مرتبطة بملاحظات السوق الفعلية وتحسين مواءمة التشكيلة للموسم القادم'
    },
    {
      number: 8,
      name: 'توسيع عقود الوكالة الحصرية والـ private label',
      quarter: 3,
      focus: 'رفع الحواجز أمام المنافسين عبر عقود حصرية أعمق وتصنيع خاص لبعض الشركاء الكبار',
      objectives: [
        'توقيع 4 عقود وكالة حصرية أو شبه حصرية إضافية',
        'إدخال 3 حسابات كبيرة في مسار private label باسم الموزع أو البراند المحلي',
        'زيادة هامش الربح في العقود الخاصة بنسبة 20%'
      ],
      actions: [
        'تقديم عروض حماية محافظة أو منطقة للموزعين ذوي الأداء العالي',
        'إعداد نماذج وسم وتغليف تحمل اسم الموزع لتقوية ارتباطه بالمنتج داخل سوقه',
        'التفاوض على عقود أطول أجلاً مقابل امتيازات سعرية وخدمة لوجستية أفضل'
      ],
      progress: 'بناء تمركز أقوى يصعب تقليده وارتفاع الإيرادات النوعية من الصفقات الخاصة والحصرية'
    },
    {
      number: 9,
      name: 'تحصين التشغيل واللوجستيات قبل ضغط نهاية العام',
      quarter: 3,
      focus: 'تقليل مخاطر التأخير وتثبيت الطاقة الإنتاجية والشحنية قبل دخول ذروة الربع الأخير',
      objectives: [
        'إعداد توقعات طلب لكل محافظة ووكيل رئيسي حتى نهاية العام',
        'خفض الطلبيات المستعجلة غير المخطط لها بنسبة 35%',
        'تأمين بدائل شحن وتخليص واضحة للشحنات الحرجة'
      ],
      actions: [
        'تحليل بيانات الطلب السابقة وتقسيم الوكلاء حسب حجم السحب والالتزام',
        'إنشاء جدول إنتاج احتياطي للمقاسات والموديلات الأسرع دوراناً بالعراق',
        'اعتماد شريك لوجستي بديل ومسار طوارئ لأي تأخير حدودي أو جمركي'
      ],
      progress: 'دخول الربع الأخير بمرونة تشغيلية أعلى وقدرة أفضل على حماية الشحنات والهوامش'
    },
    {
      number: 10,
      name: 'إطلاق حملات الشتاء والطلب المسبق للمخازن الكبرى',
      quarter: 4,
      focus: 'تجهيز كبار المستودعات والموزعين لموسم نهاية السنة بطلبيات مبكرة ومضمونة',
      objectives: [
        'تأمين 30 طلبية مسبقة من المستودعات والموزعين الكبار',
        'رفع عدد العملاء النشطين إلى 85 جهة بين موزع ومستودع',
        'تجاوز الإيراد الشهري المستهدف للعام بنسبة 18%'
      ],
      actions: [
        'إطلاق كتالوج شتوي خاص بالعراق يبرز الموديلات الأعلى ربحية والأسرع سحباً',
        'تشغيل حملات إعادة استهداف للموزعين الذين استفسروا سابقاً ولم يغلقوا العقود',
        'تنفيذ جولات اتصال مكثفة لإغلاق طلبات الموسم قبل ضغط الشحن'
      ],
      progress: 'بداية قوية للربع الرابع مع وضوح أكبر في الطلبات المؤكدة وجدولة الإنتاج والشحن'
    },
    {
      number: 11,
      name: 'تعظيم سحب الشبكة الحالية ورفع قيمة العقود',
      quarter: 4,
      focus: 'استخراج أكبر قيمة ممكنة من الوكلاء الحاليين عبر دعمهم وتحفيزهم على إعادة الطلب السريع',
      objectives: [
        'رفع معدل تكرار الطلب لدى كبار الموزعين إلى مرتين شهرياً للشريحة الأعلى نشاطاً',
        'بيع غالبية الموديلات الموسمية قبل نهاية الشهر',
        'تحويل 3 حسابات كبيرة إلى اتفاقيات سنوية شبه ثابتة'
      ],
      actions: [
        'منح حوافز كمية وشروط دفع أفضل للحسابات التي ترفع التزامها الشهري',
        'تخصيص مسار خدمة سريع للموزعين الكبار يشمل أولوية تجهيز وتحديثات شحن مباشرة',
        'مراجعة أداء كل وكيل رئيسي وعرض توسيع منطقة أو مزايا حصرية عند تحقق المستهدف'
      ],
      progress: 'ارتفاع الاعتماد على الشبكة الحالية وتحسن الاحتفاظ بالعقود الكبرى قبل إغلاق السنة'
    },
    {
      number: 12,
      name: 'إقفال السنة وبناء خطة توسع العراق للسنة التالية',
      quarter: 4,
      focus: 'تحويل نتائج العام الأول إلى خارطة توسع دقيقة تشمل المحافظات والقنوات والمنتجات الأعلى جدوى',
      objectives: [
        'إجراء تقييم سنوي شامل للمبيعات والهوامش والوكلاء ومسارات الشحن',
        'تحديد المحافظات والقطاعات التي تستحق استثماراً أكبر في العام القادم',
        'تجديد أو توسيع العقود مع أفضل 15 موزع ومستودع'
      ],
      actions: [
        'إعداد تقرير سنوي بالأداء حسب المحافظة والوكيل والموديل وقيمة الطلبات',
        'عقد جلسات تقييم مع كبار الشركاء لجمع الملاحظات وتثبيت التوقعات للسنة التالية',
        'إطلاق عروض تجديد مبكر للعقود الحصرية والطلبات السنوية قبل نهاية الشهر'
      ],
      progress: 'إغلاق السنة بشبكة توزيع أوضح وأكثر رسوخاً وخطة توسع عراقية مبنية على بيانات فعلية'
    }
  ],

  // Required base fields (market, audience, channels, strategy, budget, kpis)
  market: {
    size: '220+ مليون دولار أمريكي سنوياً لسوق الأحذية النسائية والجلدية في العراق',
    trends: 'طلب متصاعد على الصناعة الشامية، نمو 15% سنوياً في البصرة وأربيل، ثقة عالية بالجلد السوري',
    competitors: 'موزعون صينيون وتركيون منخفضو الجودة، وموردون غير منتظمين من سوريا بدون نظام'
  },
  audience: {
    personaName: 'أبو علي - صاحب مستودع جملة في سوق الشورجة ببغداد',
    age: '35-60 سنة',
    interests: 'الأحذية الجلدية الشامية، الموديلات النسائية الفاخرة، شراء بالكراتين الكبيرة للتوزيع',
    painPoints: 'انقطاع التوريد وعدم الانتظام، صعوبة التخليص الجمركي، جودة متفاوتة من الموردين',
    buyingBehavior: 'يشتري بكميات كبيرة موسمياً، يبحث عن وكالة حصرية إقليمية، يوزع لمحلات صغيرة'
  },
  channels: {
    primary: ['واتساب بزنس B2B للموزعين', 'زيارات ميدانية مباشرة لسوق الشورجة وأربيل', 'إعلانات Meta Ads للتجار العراقيين'],
    secondary: ['مجموعات واتساب تجار الجملة', 'توصيات بين الموزعين', 'كتالوجات موسمية مع عينات']
  },
  strategy: {
    awareness: 'إعلانات Meta Ads مستهدفة لأصحاب المستودعات والموزعين الكبار في بغداد وأربيل والبصرة',
    consideration: 'عروض الوكالة الإقليمية المحمية وزيارات ميدانية لسوق الشورجة مع عينات جلد وموديلات حصرية',
    conversion: 'شروط توريد مرنة وضمانات جودة وثائقية وعقود حماية السعر للموزع الحصري',
    retention: 'أولوية الموديلات الجديدة للموزعين المنتظمين وخصومات تراكمية على الكميات الكبرى الموسمية'
  },
  budget: {
    total: '4,000 دولار شهرياً',
    allocation: '35% إعلانات Meta، 35% لوجستيات وشحن براد، 20% عينات وكتالوجات، 10% إدارة'
  },
  kpis: {
    primary: ['عدد الموزعين والمستودعات الموردة', 'إجمالي الكراتين المشحونة شهرياً', 'قيمة الطلبات الشهرية بالدولار'],
    secondary: ['عدد عقود الوكالة الإقليمية المبرمة', 'معدل تكرار الطلبات الكبيرة', 'تقييم رضا الموزعين']
  }
};

interface StoreState {
  plans: MarketingPlan[];
  currentPlanId: string | null;
  setCurrentPlanId: (id: string | null) => void;
  createPlan: (title: string) => string;
  updatePlan: (id: string, updates: Partial<MarketingPlan>) => void;
  deletePlan: (id: string) => void;
  duplicatePlan: (id: string) => string;
  isDeveloperMode: boolean;
  setDeveloperMode: (enabled: boolean) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      plans: [sehamJordanPlan, sehamIraqPlan],
      currentPlanId: null,
      isDeveloperMode: false,
      setCurrentPlanId: (id) => set({ currentPlanId: id }),
      setDeveloperMode: (enabled) => set({ isDeveloperMode: enabled }),
      createPlan: (title) => {
        const id = crypto.randomUUID();
        const newPlan: MarketingPlan = { id, title, ...defaultPlan };
        set((state) => ({ plans: [...state.plans, newPlan], currentPlanId: id }));
        return id;
      },
      updatePlan: (id, updates) => {
        set((state) => ({
          plans: state.plans.map((plan) => (plan.id === id ? { ...plan, ...updates } : plan)),
        }));
      },
      deletePlan: (id) => {
        set((state) => ({
          plans: state.plans.filter((plan) => plan.id !== id),
          currentPlanId: state.currentPlanId === id ? null : state.currentPlanId,
        }));
      },
      duplicatePlan: (id) => {
        const state = get();
        const planToDuplicate = state.plans.find((p) => p.id === id);
        if (!planToDuplicate) return '';

        const newId = crypto.randomUUID();
        const newPlan = { ...planToDuplicate, id: newId, title: `${planToDuplicate.title} (نسخة)` };
        set((state) => ({ plans: [...state.plans, newPlan] }));
        return newId;
      },
    }),
    {
      name: 'marketing-plans-storage',
      version: 11, // Incremented store version to invalidate old local storage cache and load the full-year Seham plans
    }
  )
);
