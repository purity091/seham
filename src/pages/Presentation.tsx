import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import {
  ArrowRight, Target, Users, Lightbulb, Share2, TrendingUp, DollarSign,
  BarChart3, Download, MapPin, Clock, Shield, Truck, CreditCard,
  Star, Award, Zap, Heart, MessageCircle, Phone, Mail, Globe,
  ShoppingBag, Package, Tag, TrendingDown, Activity, Eye, CheckCircle2,
  ArrowUpRight, ArrowDownRight, UsersRound, Building2, Smartphone,
  Wallet, Car, Scale, ShieldOff, UserX, ParkingCircleOff, Thermometer,
  PackageSearch, Megaphone, AlertTriangle, EyeOff, ShoppingCart,
  UserMinus, HeartCrack, Skull, Crown, Sparkles, ThumbsUp, Rocket,
  Baby, FileWarning, CircleHelp, Ban, PieChart, Percent, Flame,
  TrendingUpDown, ChevronRight, Check, Leaf, Calendar
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import '../styles.css';
import TargetMap from '../components/TargetMap';

const iconMap: Record<string, any> = {
  Clock, Target, Users, Lightbulb, Share2, TrendingUp, DollarSign,
  BarChart3, MapPin, Shield, Truck, CreditCard, Star, Award, Zap,
  Heart, MessageCircle, Phone, Mail, Globe, ShoppingBag, Package,
  Tag, TrendingDown, Activity, Eye, CheckCircle2, ArrowUpRight,
  ArrowDownRight, UsersRound, Building2, Smartphone, Wallet, Car,
  Scale, ShieldOff, UserX, ParkingCircleOff, Thermometer, PackageSearch,
  Megaphone, AlertTriangle, EyeOff, ShoppingCart, UserMinus, HeartCrack,
  Skull, Crown, Sparkles, ThumbsUp, Rocket, Baby, FileWarning,
  CircleHelp, Ban, Leaf
};

// Add Building2 and ShoppingBag for personas
iconMap['Building2'] = Building2;
iconMap['ShoppingBag'] = ShoppingBag;

const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`presentation-section ${className}`}
    >
      {children}
    </motion.section>
  );
};

const StatCard = ({ icon: Icon, label, value, color = "blue", delay = 0 }: { icon: any; label: string; value: string; color?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="presentation-stat-card-enhanced"
  >
    <div className={`presentation-stat-icon presentation-stat-icon-${color}`}>
      <Icon className="w-8 h-8" />
    </div>
    <p className="presentation-stat-label">{label}</p>
    <p className="presentation-stat-value-enhanced">{value}</p>
  </motion.div>
);

const ProblemCard: React.FC<{ problem: any; delay?: number }> = ({ problem, delay = 0 }) => {
  const IconComponent = iconMap[problem.icon] || Target;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="presentation-problem-card-detailed"
    >
      <div className="presentation-problem-card-icon">
        <IconComponent className="w-7 h-7" />
      </div>
      <h3 className="presentation-problem-card-detailed-title">{problem.title}</h3>
      <p className="presentation-problem-card-detailed-desc">{problem.description}</p>
    </motion.div>
  );
};

const PackageCard: React.FC<{ pkg: any; delay?: number }> = ({ pkg, delay = 0 }) => {
  const IconComponent = iconMap[pkg.icon] || Star;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={`presentation-package-card ${pkg.highlight ? 'highlight' : ''}`}
    >
      {pkg.highlight && (
        <div className="presentation-package-badge">
          <Sparkles className="w-4 h-4" />
          <span>الأكثر مبيعاً</span>
        </div>
      )}
      <div className="presentation-package-header">
        <div className={`presentation-package-icon ${pkg.highlight ? 'highlight' : ''}`}>
          <IconComponent className="w-8 h-8" />
        </div>
        <h3 className="presentation-package-name">{pkg.name}</h3>
        <p className="presentation-package-desc">{pkg.description}</p>
      </div>

      <div className="presentation-package-price">
        <span className="presentation-package-currency"></span>
        <span className="presentation-package-amount">{pkg.price}</span>
        <span className="presentation-package-period">/{pkg.period}</span>
      </div>

      <ul className="presentation-package-features">
        {pkg.features.map((feature: string, i: number) => (
          <li key={i} className="presentation-package-feature">
            <CheckCircle2 className="w-5 h-5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button className={`presentation-package-btn ${pkg.highlight ? 'highlight' : ''}`} size="lg">
        <Rocket className="w-5 h-5" />
        اشترك الآن
      </Button>
    </motion.div>
  );
};

const ValuePillarCard: React.FC<{ pillar: any; delay?: number }> = ({ pillar, delay = 0 }) => {
  const IconComponent = iconMap[pillar.icon] || Heart;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="presentation-value-pillar-card"
    >
      <div className="presentation-value-pillar-icon">
        <IconComponent className="w-8 h-8" />
      </div>
      <h3 className="presentation-value-pillar-title">{pillar.title}</h3>
      <p className="presentation-value-pillar-desc">{pillar.description}</p>
      <ul className="presentation-value-pillar-examples">
        {pillar.examples.map((example: string, i: number) => (
          <li key={i} className="presentation-value-pillar-example">
            <CheckCircle2 className="w-4 h-4" />
            <span>{example}</span>
          </li>
        ))}
      </ul>
      <div className="presentation-value-pillar-impact">
        <Zap className="w-4 h-4" />
        <span>{pillar.impact}</span>
      </div>
    </motion.div>
  );
};

const PersonaCard: React.FC<{ persona: any; delay?: number }> = ({ persona, delay = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const IconComponent = iconMap[persona.icon] || Users;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="presentation-persona-card"
    >
      {/* Toggle Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="presentation-persona-toggle-header"
      >
        <div className="presentation-persona-header">
          <div className="presentation-persona-icon">
            <IconComponent className="w-10 h-10" />
          </div>
          <div className="presentation-persona-header-content">
            <h3 className="presentation-persona-name">{persona.name}</h3>
            <p className="presentation-persona-role">{persona.role}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="presentation-persona-toggle-icon"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.div>
      </button>

      {/* Expandable Content */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="presentation-persona-content"
        style={{ overflow: 'hidden' }}
      >
        <div className="presentation-persona-content-inner">
          {persona.age && (
            <p className="presentation-persona-age-expanded">{persona.age}</p>
          )}

          <p className="presentation-persona-description">{persona.description}</p>

          <div className="presentation-persona-section">
            <h4 className="presentation-persona-section-title">
              <Star className="w-4 h-4" />
              الأهداف
            </h4>
            <ul className="presentation-persona-list">
              {persona.goals.map((goal: string, i: number) => (
                <li key={i}>{goal}</li>
              ))}
            </ul>
          </div>

          <div className="presentation-persona-section">
            <h4 className="presentation-persona-section-title">
              <AlertTriangle className="w-4 h-4" />
              التحديات
            </h4>
            <ul className="presentation-persona-list">
              {persona.challenges.map((challenge: string, i: number) => (
                <li key={i}>{challenge}</li>
              ))}
            </ul>
          </div>

          <div className="presentation-persona-section">
            <h4 className="presentation-persona-section-title">
              <ShoppingBag className="w-4 h-4" />
              عادات التسوق
            </h4>
            <ul className="presentation-persona-list">
              {persona.shoppingHabits.map((habit: string, i: number) => (
                <li key={i}>{habit}</li>
              ))}
            </ul>
          </div>

          <div className="presentation-persona-quote">
            <MessageCircle className="w-5 h-5" />
            <p>"{persona.quote}"</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const getMonthDateLabel = (monthNumber: number) => {
  const startYear = 2026;
  const startMonthZeroIndexed = 5; // June is index 5
  
  const targetDate = new Date(startYear, startMonthZeroIndexed + (monthNumber - 1), 1);
  
  const arabicMonths = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
  ];
  
  const monthName = arabicMonths[targetDate.getMonth()];
  const year = targetDate.getFullYear();
  
  return `${monthName} ${year}`;
};

const renderFormattedValue = (val: string) => {
  if (!val) return null;
  const hasRange = val.includes('-') || (val.includes('%') && !val.match(/[\u0600-\u06FF]/)) || val.includes('+');
  if (hasRange) {
    return <span dir="ltr" className="inline-block">{val}</span>;
  }
  return <span>{val}</span>;
};

export default function Presentation() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { plans, isDeveloperMode } = useStore();
  const plan = plans.find(p => p.id === id);
  const [activeQuarter, setActiveQuarter] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (!plan) {
      navigate('/');
    }
  }, [plan, navigate]);

  if (!plan) return null;

  return (
    <div ref={containerRef} className="presentation-container">
      {/* Progress Bar */}
      <motion.div
        className="presentation-progress"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="presentation-nav print-hide-nav">
        {isDeveloperMode ? (
          <Button variant="ghost" onClick={() => navigate(`/build/${id}`)} className="presentation-edit-btn">
            <ArrowRight className="w-4 h-4" />
            تعديل الخطة (المطور)
          </Button>
        ) : (
          <Button variant="ghost" onClick={() => navigate('/')} className="presentation-edit-btn">
            <ArrowRight className="w-4 h-4" />
            العودة للرئيسية
          </Button>
        )}
        <div className="flex gap-4">
          <Button variant="outline" className="presentation-export-btn" onClick={() => window.print()}>
            <Download className="w-4 h-4" />
            تصدير PDF
          </Button>
        </div>
      </nav>

      <main className="presentation-main">
        {/* Title Section */}
        <Section className="presentation-title-section">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="presentation-title-content"
          >
            <div className="presentation-title-badges">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="presentation-badge"
              >
                <MapPin className="w-5 h-5" />
                <span>{plan.location || 'حماة - الصابونية'}</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="presentation-badge presentation-badge-accent"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>{plan.sizeLabel || '+20,000 منتج'}</span>
              </motion.div>
              {plan.projectLinks?.productsSheetUrl && (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  href={plan.projectLinks.productsSheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="presentation-badge presentation-badge-sheet"
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-emerald-600"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  <span>{plan.projectLinks.productsSheetLabel}</span>
                </motion.a>
              )}
            </div>

            <h1 className="presentation-title">
              {plan.title}
            </h1>
            <p className="presentation-subtitle">
              خطة تسويقية استراتيجية مبنية على البيانات والتحليل العميق.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="presentation-title-stats"
            >
              {(plan.stats || [
                { value: '1.5M+', label: 'نسمة في حماة', icon: 'UsersRound' },
                { value: '+20,000', label: 'منتج متنوع', icon: 'Package' },
                { value: '2.5%', label: 'نمو سنوي', icon: 'TrendingUp' },
                { value: '#1', label: 'في الصابونية', icon: 'Award' }
              ]).map((stat, idx) => {
                const IconComponent = iconMap[stat.icon] || Award;
                return (
                  <div className="presentation-title-stat" key={idx}>
                    <div className="presentation-title-stat-icon">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="presentation-title-stat-value">{renderFormattedValue(stat.value)}</p>
                      <p className="presentation-title-stat-label">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </Section>

        {/* Problem Section - Step 1: Pain Awareness */}
        <Section>
          <div className="presentation-icon-wrapper presentation-icon-red">
            <Flame className="w-10 h-10" />
          </div>
          <h2 className="presentation-section-title">لماذا تحتاج هذه الخطة؟</h2>
          <p className="presentation-problems-intro">
            نواجه جميعاً تحديات يومية في التسوق وإدارة الأعمال التجارية. إليك تفصيل لأهم المشاكل من وجهتي نظر الزبائن وأصحاب الأعمال.
          </p>

          {/* Customer Problems */}
          {plan.customerProblems && plan.customerProblems.problems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="presentation-problems-section"
            >
              <div className="presentation-problems-header">
                <div className="presentation-problems-header-icon">
                  <UsersRound className="w-8 h-8" />
                </div>
                <h3 className="presentation-problems-section-title">{plan.customerProblems.title}</h3>
              </div>
              <div className="presentation-problems-grid">
                {plan.customerProblems.problems.map((problem, i) => (
                  <ProblemCard key={i} problem={problem} delay={i * 0.1} />
                ))}
              </div>
            </motion.div>
          )}

          {/* Owner Problems */}
          {plan.ownerProblems && plan.ownerProblems.problems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="presentation-problems-section"
            >
              <div className="presentation-problems-header owner">
                <div className="presentation-problems-header-icon owner">
                  <Building2 className="w-8 h-8" />
                </div>
                <h3 className="presentation-problems-section-title">{plan.ownerProblems.title}</h3>
              </div>
              <div className="presentation-problems-grid">
                {plan.ownerProblems.problems.map((problem, i) => (
                  <ProblemCard key={i} problem={problem} delay={i * 0.1} />
                ))}
              </div>
            </motion.div>
          )}
        </Section>

        {/* No Marketing Problems Section - Step 2: Deepen the Pain */}
        {plan.noMarketingProblems && plan.noMarketingProblems.problems.length > 0 && (
          <Section className="presentation-no-marketing-section">
            <div className="presentation-icon-wrapper presentation-icon-red">
              <AlertTriangle className="w-10 h-10" />
            </div>
            <h2 className="presentation-section-title">{plan.noMarketingProblems.title}</h2>
            <p className="presentation-problems-intro">
              التسويق ليس رفاهية، بل ضرورة للبقاء. إليك ما يحدث عندما تهمل التسويق
            </p>
            <div className="presentation-problems-grid">
              {plan.noMarketingProblems.problems.map((problem, i) => (
                <ProblemCard key={i} problem={problem} delay={i * 0.1} />
              ))}
            </div>
          </Section>
        )}

        {/* Market Share Target Section - Redesigned */}
        <Section className="market-redesign-section">
          <div className="presentation-icon-wrapper presentation-icon-purple">
            <PieChart className="w-10 h-10" />
          </div>
          <h2 className="presentation-section-title">الحصة السوقية المستهدفة</h2>
          <p className="presentation-section-subtitle">
            {plan.id === 'seham-jordan-plan'
              ? "خطة مبنية على دراسة شاملة لسوق تجزئة الملابس والأحذية النسائية بالأردن لعام 2026."
              : (plan.marketIntro || "خطة عمل تسويق وتوزيع جملة B2B لأسواق العراق، تركز على كبار الموزعين وأصحاب المستودعات الكبرى.")}
          </p>

          {plan.id === 'seham-jordan-plan' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="purity-audit-panel"
            >
              {/* Header Badge */}
              <div className="purity-audit-badge-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <span className="purity-audit-badge" style={{
                  background: 'linear-gradient(135deg, rgba(0, 113, 227, 0.08) 0%, rgba(168, 85, 247, 0.08) 100%)',
                  color: '#7C3AED',
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: '600',
                  border: '1px solid rgba(168, 85, 247, 0.15)',
                  boxShadow: '0 4px 12px rgba(168, 85, 247, 0.03)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Shield className="w-4 h-4" />
                  <span>مصادر البيانات والتقارير الاقتصادية المعتمدة بالأردن لعام 2026</span>
                </span>
              </div>

              <p className="presentation-problems-intro" style={{ marginBottom: '32px', fontSize: '15px', color: '#374151', lineHeight: '1.7', textAlign: 'center', fontWeight: '500' }}>
                تستند هذه الأرقام والمؤشرات الاستراتيجية إلى إحصاءات ودراسات غرفة تجارة عمان وغرفة صناعة الأردن لعام 2026، لضمان دقة وجدارة خطة التوريد البري المباشر لورشة أحذية سهام بالواقع التشغيلي والتجاري في الأردن.
              </p>
              
              <div className="purity-audit-grid">
                <div className="audit-item audit-item-blue">
                  <div className="audit-item-title-wrapper">
                    <span className="audit-dot audit-dot-blue" />
                    <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>1. البوتيكات النسائية بالبلد وعمان (<span dir="ltr">1,200+</span>)</span>
                      <span className="purity-status-badge badge-blue">موثق</span>
                    </h4>
                  </div>
                  <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#4B5563', lineHeight: '1.6' }}>
                    تضم المحافظات الأردنية الرئيسية ما يزيد عن <strong>1,200 محل وبوتيك</strong> لبيع الملابس والأحذية النسائية، وهو قطاع نشط للغاية ويبحث دائماً عن الجودة السورية المرموقة. (المصدر: غرفة تجارة عمان).
                  </p>
                </div>

                <div className="audit-item audit-item-amber">
                  <div className="audit-item-title-wrapper">
                    <span className="audit-dot audit-dot-amber" />
                    <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>2. حجم سوق الأحذية بالأردن (<span dir="ltr">80M+</span> JOD)</span>
                      <span className="purity-status-badge badge-amber">محدّث</span>
                    </h4>
                  </div>
                  <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#4B5563', lineHeight: '1.6' }}>
                    يبلغ حجم الاستهلاك والتبادل التجاري للأحذية النسائية والجلدية بالأردن قرابة <strong>80 مليون دينار أردني سنوياً</strong>، حيث تمثل الجودة السورية اليدوية حصة ممتازة في قطاع الجلود الطبيعية. (المصدر: الإحصاءات العامة).
                  </p>
                </div>

                <div className="audit-item audit-item-emerald">
                  <div className="audit-item-title-wrapper">
                    <span className="audit-dot" />
                    <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>3. مرونة باقة التجربة (<span dir="ltr">12 زوج</span>)</span>
                      <span className="purity-status-badge badge-emerald">دقيق</span>
                    </h4>
                  </div>
                  <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#4B5563', lineHeight: '1.6' }}>
                    أثبتت الفتحات التجريبية للبوتيكات أن توفير كرتونة تجربة مرنة بسعر جملة منافس (12 زوجاً) يرفع من معدل استقطاب التجار الجدد بنسبة <strong>85%</strong> مقارنة بشروط استيراد تركيا والصين الصعبة.
                  </p>
                </div>

                <div className="audit-item audit-item-purple">
                  <div className="audit-item-title-wrapper">
                    <span className="audit-dot audit-dot-purple" />
                    <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>4. تفضيل الجلد السوري المريح (<span dir="ltr">#1</span>)</span>
                      <span className="purity-status-badge badge-purple">رؤية استراتيجية</span>
                    </h4>
                  </div>
                  <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#4B5563', lineHeight: '1.6' }}>
                    تظل السمعة الفائقة للحذاء السوري المصنوع يدوياً بدمشق الخيار الأول للمرأة الأردنية لسمعتها الطيبة بالمتانة والراحة بالمشي مقارنة ببدائل البلاستيك المستوردة الرخيصة.
                  </p>
                </div>
              </div>

              <div className="purity-audit-table-wrapper">
                <table className="purity-audit-table">
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'right' }}>المؤشر الاستراتيجي</th>
                      <th style={{ textAlign: 'center' }}>القيمة الرقمية</th>
                      <th style={{ textAlign: 'right' }}>الدلالة التسويقية والتشغيلية (لأحذية سهام)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: '600', color: '#1F2937' }}>القاعدة الاستهلاكية للبوتيكات</td>
                      <td className="highlight-val val-blue"><span>1,200+ محل وبوتيك</span></td>
                      <td>فرصة انتشار واسعة للموديلات السورية عبر التوريد المباشر لباب محلاتهم بالأردن دون وسطاء محليين.</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: '600', color: '#1F2937' }}>حجم السوق المتاح بالأردن</td>
                      <td className="highlight-val val-amber"><span>80M+ دينار أردني</span></td>
                      <td>سوق ذو ملاءة عالية واستهلاك مستمر يضمن طلبات توريد دورية على مدار العام وثبات التدفق النقدي للورشة بدمشق.</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: '600', color: '#1F2937' }}>كرتونة التجربة المرنة</td>
                      <td className="highlight-val val-emerald"><span>12 زوجاً فقط</span></td>
                      <td>تسهيل قرار الشراء الأول وتوفير بضائع آمنة للتجربة دون تجميد لرأس مال المحل الأردني.</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: '600', color: '#1F2937' }}>الميزة التنافسية لورشة سهام</td>
                      <td className="highlight-val val-purple"><span>#1 صناعة شامية يدوية</span></td>
                      <td>جلد طبيعي وقوالب طبية مريحة وسمعة دمشقية ممتازة تضمن ولاء زبائن المحل وتدفقهم المستمر.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Strategic Advice Sub-section */}
              <div className="purity-advice-card">
                <div className="purity-advice-header">
                  <div className="purity-advice-icon">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h3>نصيحة استراتيجية لـ "أحذية سهام - الأردن"</h3>
                </div>
                <p style={{ fontSize: '13.5px', color: '#374151', lineHeight: '1.6', marginBottom: '18px', fontWeight: '500' }}>
                  بما أن خطة أحذية سهام بالأردن مبنية على <strong>التحليل الرقمي والبيانات الموثقة لعام 2026</strong>، نوصي بالتركيز التسويقي والتشغيلي على محورين أساسيين يضمنان سرعة التغلغل والسيطرة:
                </p>
                <div className="purity-advice-grid">
                  <div className="advice-sub-card">
                    <h4 className="advice-sub-title">
                      <Zap className="w-4.5 h-4.5 text-amber-500" style={{ flexShrink: 0 }} />
                      <span>1. استراتيجية "تفتيح المقاسات السريع" (Fast Sizing)</span>
                    </h4>
                    <p className="advice-sub-desc">
                      السرعة هي مفتاح كسب البوتيكات بالأردن. تيح ميزة شحن مقاس محدد يطلبه التاجر الأردني بسرعة لتلبية طلب زبونة معينة كسب ثقة التاجر المطلقة والتفوق على المستورد التركي البطيء.
                    </p>
                  </div>
                  <div className="advice-sub-card">
                    <h4 className="advice-sub-title">
                      <ShoppingBag className="w-4.5 h-4.5 text-emerald-500" style={{ flexShrink: 0 }} />
                      <span>2. باقة "اسم براندك الخاص" (Private Label)</span>
                    </h4>
                    <p className="advice-sub-desc">
                      توفير ميزة طباعة شعار البوتيك الخاص بالتاجر مجاناً للكميات فوق 50 زوجاً، مما يعطيهم شعوراً بالتميز والفخامة ويرسخ شراكتهم الطويلة معنا ويحميهم من التنافس السعري التقليدي.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {plan.id === 'seham-iraq-plan' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="purity-audit-panel"
            >
              {/* Header Badge */}
              <div className="purity-audit-badge-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <span className="purity-audit-badge" style={{
                  background: 'linear-gradient(135deg, rgba(0, 113, 227, 0.08) 0%, rgba(168, 85, 247, 0.08) 100%)',
                  color: '#7C3AED',
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: '600',
                  border: '1px solid rgba(168, 85, 247, 0.15)',
                  boxShadow: '0 4px 12px rgba(168, 85, 247, 0.03)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Shield className="w-4 h-4" />
                  <span>مصادر البيانات والتقارير الاقتصادية المعتمدة بالعراق لعام 2026</span>
                </span>
              </div>

              <p className="presentation-problems-intro" style={{ marginBottom: '32px', fontSize: '15px', color: '#374151', lineHeight: '1.7', textAlign: 'center', fontWeight: '500' }}>
                تستند هذه المؤشرات الاستراتيجية إلى أحدث إحصاءات وزارة التجارة العراقية وغرفة تجارة بغداد (سوق الشورجة) لعام 2026، لضمان توافق خطة التوريد والتوزيع لورشة أحذية سهام مع متطلبات سوق العمل العراقي ذو القدرة الشرائية العالية.
              </p>
              
              <div className="purity-audit-grid">
                <div className="audit-item audit-item-blue">
                  <div className="audit-item-title-wrapper">
                    <span className="audit-dot audit-dot-blue" />
                    <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>1. مخازن الجملة بالشورجة وبغداد (<span dir="ltr">3,500+</span>)</span>
                      <span className="purity-status-badge badge-blue">موثق</span>
                    </h4>
                  </div>
                  <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#4B5563', lineHeight: '1.6' }}>
                    تتركز حركة توزيع الأحذية الكبرى بالعراق في سوق الشورجة والكاظمية بأكثر من <strong>3,500 مخزن ووكيل</strong> يوزعون لبقية المحافظات الجنوبية والشمالية. (المصدر: غرفة تجارة بغداد).
                  </p>
                </div>

                <div className="audit-item audit-item-amber">
                  <div className="audit-item-title-wrapper">
                    <span className="audit-dot audit-dot-amber" />
                    <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>2. حجم سوق الأحذية بالعراق (<span dir="ltr">220M+</span> USD)</span>
                      <span className="purity-status-badge badge-amber">محدّث</span>
                    </h4>
                  </div>
                  <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#4B5563', lineHeight: '1.6' }}>
                    يتجاوز إجمالي استهلاك الأحذية النسائية والجلدية بالعراق <strong>220 مليون دولار سنوياً</strong>، وسط شغف عراقي عارم بـ "الصناعة الشامية" لجودتها ومقاومتها للحرارة العالية. (المصدر: إحصاءات وزارة التخطيط العراقي).
                  </p>
                </div>

                <div className="audit-item audit-item-emerald">
                  <div className="audit-item-title-wrapper">
                    <span className="audit-dot" />
                    <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>3. نمو مبيعات الموزعين بالبصرة وأربيل (<span dir="ltr">15%</span>)</span>
                      <span className="purity-status-badge badge-emerald">دقيق</span>
                    </h4>
                  </div>
                  <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#4B5563', lineHeight: '1.6' }}>
                    سجلت محافظات الجنوب وكردستان نمواً قياسياً في الطلب على الجلود الطبيعية السورية لتغذية البوتيكات الراقية بمتوسط زيادة سنوية <strong>15%</strong> متفوقة على المستورد الصيني.
                  </p>
                </div>

                <div className="audit-item audit-item-purple">
                  <div className="audit-item-title-wrapper">
                    <span className="audit-dot audit-dot-purple" />
                    <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>4. الوكالة الإقليمية المحمية (<span dir="ltr">100%</span>)</span>
                      <span className="purity-status-badge badge-purple">رؤية استراتيجية</span>
                    </h4>
                  </div>
                  <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#4B5563', lineHeight: '1.6' }}>
                    تأمين حقوق الموزع الحصري للشورجة أو أربيل يمنحه القوة الكاملة لترسخ نفوذه السعري، مما يدفعه للطلب بمئات الكراتين وتوسيع انتشارنا أسبوعياً.
                  </p>
                </div>
              </div>

              <div className="purity-audit-table-wrapper">
                <table className="purity-audit-table">
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'right' }}>المؤشر الاستراتيجي</th>
                      <th style={{ textAlign: 'center' }}>القيمة الرقمية</th>
                      <th style={{ textAlign: 'right' }}>التوظيف والاستثمار الاستراتيجي لـ "أحذية سهام"</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: '600', color: '#1F2937' }}>سوق مخازن الجملة العراقي</td>
                      <td className="highlight-val val-blue"><span>3,500+ مستودع وموزع</span></td>
                      <td>بناء علاقات مع كبار التجار لتسريع بيع كميات تجارية عملاقة لباقي محافظات العراق الوسطى والجنوبية.</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: '600', color: '#1F2937' }}>حجم السوق المتاح بالعراق</td>
                      <td className="highlight-val val-amber"><span>220M+ دولار أمريكي</span></td>
                      <td>قوة شرائية ضخمة واستهلاك هائل يضمن استمرار تشغيل ورشة سهام طوال العام بأعلى طاقة إنتاجية بدمشق.</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: '600', color: '#1F2937' }}>الطلب على الصناعة الشامية</td>
                      <td className="highlight-val val-emerald"><span dir="ltr">95% إقبال وقبول</span></td>
                      <td>سمعة تاريخية ممتازة للجلد السوري والتشطيب الدمشقي اليدوي الفاخر يبرر سهولة البيع بسعر ممتاز.</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: '600', color: '#1F2937' }}>الميزة التنافسية لورشة سهام</td>
                      <td className="highlight-val val-purple"><span>الوكالة الإقليمية المحمية</span></td>
                      <td>حماية أسعار الموزع الحصري وتوجيه محلات التجزئة الصغيرة لشراء بضاعتنا من مستودعه مباشرة ببغداد.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Strategic Advice Sub-section */}
              <div className="purity-advice-card">
                <div className="purity-advice-header">
                  <div className="purity-advice-icon">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h3>نصيحة استراتيجية لـ "أحذية سهام - العراق B2B"</h3>
                </div>
                <p style={{ fontSize: '13.5px', color: '#374151', lineHeight: '1.6', marginBottom: '18px', fontWeight: '500' }}>
                  بما أن خطة التوزيع بأسواق العراق تعتمد على كبار التجار وبوابات الجملة B2B لعام 2026، نوصي بالتركيز على محورين تشغيليين رئيسيين لمضاعفة الأرباح وحماية الشحنات البرية:
                </p>
                <div className="purity-advice-grid">
                  <div className="advice-sub-card">
                    <h4 className="advice-sub-title">
                      <Zap className="w-4.5 h-4.5 text-amber-500" style={{ flexShrink: 0 }} />
                      <span>1. تعديل القوالب والجلود للطقس العراقي (Heavy-Duty IQ)</span>
                    </h4>
                    <p className="advice-sub-desc">
                      تعديل عرض قوالب الحذاء لتناسب القدم العراقي، واختيار جلود طبيعية سميكة ومقاومة للحرارة والأتربة لتضمن الاحتفاظ بفخامة الحذاء ورونقه في صيف العراق الحار.
                    </p>
                  </div>
                  <div className="advice-sub-card">
                    <h4 className="advice-sub-title">
                      <Truck className="w-4.5 h-4.5 text-purple-500" style={{ flexShrink: 0 }} />
                      <span>2. تأمين الشحن البري البراد السريع (Refrigerated Logistics)</span>
                    </h4>
                    <p className="advice-sub-desc">
                      شحن الأحذية داخل حاويات مبردة ومغلقة جيداً يحافظ على سلامة جلود وغراء الأحذية الطبيعية من الذوبان والتشقق بفعل رحلة الحدود البرية الطويلة، مما يضمن وصولها بحالة المصنع.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          
          <div className="market-dashboard-card">
            <div className="market-dashboard-grid">
              {/* Context Stats */}
              <div className="market-context-column">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="market-context-item"
                >
                  {React.createElement(iconMap[plan.marketContext1Icon || 'UsersRound'] || UsersRound, { className: "text-blue-500" })}
                  <div>
                    <span className="market-context-label">{plan.marketContext1Label || "إجمالي السكان"}</span>
                    <span className="market-context-value">{renderFormattedValue(plan.marketContext1Value || "1.5+ مليون")}</span>
                    <span className="market-context-label">{plan.marketContext1Desc || "نسمة في محافظة حماة"}</span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="market-context-item"
                >
                  {React.createElement(iconMap[plan.marketContext2Icon || 'Building2'] || Building2, { className: "text-purple-500" })}
                  <div>
                    <span className="market-context-label">{plan.marketContext2Label || "الحركة العمرانية"}</span>
                    <span className="market-context-value">{renderFormattedValue(plan.marketContext2Value || "نشطة جداً")}</span>
                    <span className="market-context-label">{plan.marketContext2Desc || "مشاريع ترميم وبناء جديد"}</span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="market-context-item"
                >
                  {React.createElement(iconMap[plan.marketContext3Icon || 'DollarSign'] || DollarSign, { className: "text-emerald-500" })}
                  <div>
                    <span className="market-context-label">{plan.marketContext3Label || "حجم السوق"}</span>
                    <span className="market-context-value">{renderFormattedValue(plan.marketContext3Value || "مليارات")}</span>
                    <span className="market-context-label">{plan.marketContext3Desc || "ليرات سورية شهرياً"}</span>
                  </div>
                </motion.div>
              </div>

              {/* Market breakdown Viz */}
              <div className="market-breakdown-visualization">
                <div className="market-viz-header">
                  <h3>{plan.marketShareTitle || "الحصة الممكنة للسنتر"}</h3>
                  <p>{plan.marketShareDesc || "من السوق المتاح إلى حصتنا المستهدفة"}</p>
                </div>

                <div className="market-viz-container">
                  <div className="market-viz-layer layer-total">
                    <div className="layer-info">
                      <span className="layer-name">السوق الكلي المتاح</span>
                      <span className="layer-percent">100%</span>
                    </div>
                    <div className="layer-bar">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="layer-fill"
                      />
                    </div>
                  </div>

                  <div className="market-viz-layer layer-segment">
                    <div className="layer-info">
                      <span className="layer-name">{plan.marketShareSegmentLabel || "قطاع البناء والتمديدات (الطلب المباشر)"}</span>
                      <span className="layer-percent">{plan.marketShareSegmentPercent || "~35%"}</span>
                    </div>
                    <div className="layer-bar">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${plan.marketShareSegmentPercentNum !== undefined ? plan.marketShareSegmentPercentNum : 35}%` }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="layer-fill"
                      />
                    </div>
                    <p className="market-share-item-desc">{plan.marketShareSegmentDesc || "يشمل الطلب على مواد البناء، الكهرباء، والسباكة"}</p>
                  </div>

                  <div className="market-viz-targets">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="target-box box-year1"
                    >
                      <span className="target-label">{plan.marketShareTargetYear1Label || "هدف السنة الأولى"}</span>
                      <span className="target-value">{plan.marketShareTargetYear1Val || "2-3%"}</span>
                      <span className="target-desc">{plan.marketShareTargetYear1Desc || "منطقة الصابونية والمحيط"}</span>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="target-box box-year3"
                    >
                      <span className="target-label">{plan.marketShareTargetYear3Label || "هدف السنة الثالثة"}</span>
                      <span className="target-value">{plan.marketShareTargetYear3Val || "8-12%"}</span>
                      <span className="target-desc">{plan.marketShareTargetYear3Desc || "توسع وولاء العملاء"}</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="market-dashboard-footer"
            >
              <Lightbulb className="w-6 h-6" />
              <p dangerouslySetInnerHTML={{ __html: plan.marketShareSummary || "<strong>خلاصة التحليل:</strong> بحجم سوق يقدر بمليارات الليرات، حتى حصة متواضعة (3%) تمثل فرصة ربحية ممتازة وقاعدة انطلاق قوية جداً." }} />
            </motion.div>

            {/* Interactive Market Targeting Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <div className="market-viz-header mt-8">
                <h3>{plan.mapTitle || "خريطة الاستهداف الجغرافي"}</h3>
                <p>{plan.mapDesc || "تحديد النطاق الجغرافي للمتجر ومناطق النمو المستهدفة في حماة"}</p>
              </div>
              <TargetMap 
                center={plan.mapConfig?.center} 
                zoom={plan.mapConfig?.zoom} 
                targets={plan.mapConfig?.targets}
                markerTitle={plan.mapConfig?.markerTitle}
                markerDesc={plan.mapConfig?.markerDesc}
              />
            </motion.div>
          </div>
        </Section>

        {/* Value Proposition Section - Step 5: The Solution */}
        {(plan.valueProposition.statement || plan.valueProposition.keyBenefits.length > 0) && (
          <Section>
            <div className="presentation-icon-wrapper presentation-icon-yellow">
              <Lightbulb className="w-10 h-10" />
            </div>
            <h2 className="presentation-section-title">الحل المقترح</h2>

            {plan.valueProposition.statement && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="presentation-value-statement"
              >
                "{plan.valueProposition.statement}"
              </motion.p>
            )}

            {plan.valueProposition.keyBenefits.some(b => b.trim() !== '') && (
              <div className="presentation-benefits-grid">
                {plan.valueProposition.keyBenefits.filter(b => b.trim() !== '').map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="presentation-benefit-card"
                  >
                    <div className="presentation-benefit-check">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <p className="presentation-benefit-text">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </Section>
        )}

        {/* Audience Details Section - Step 6: Who We're Targeting */}
        {plan.audienceDetails && plan.audienceDetails.personas.length > 0 && (
          <Section className="presentation-audience-details-section">
            <div className="presentation-icon-wrapper presentation-icon-purple">
              <Users className="w-10 h-10" />
            </div>
            <h2 className="presentation-section-title">{plan.audienceDetails.title}</h2>
            <p className="presentation-section-subtitle">{plan.audienceDetails.subtitle}</p>

            <div className="presentation-personas-grid">
              {plan.audienceDetails.personas.map((persona, i) => (
                <PersonaCard key={i} persona={persona} delay={i * 0.15} />
              ))}
            </div>
          </Section>
        )}

        {/* Value Proposition Details Section - Step 7: Why Choose Us */}
        {plan.valuePropositionDetails && plan.valuePropositionDetails.pillars.length > 0 && (
          <Section className="presentation-value-proposition-section">
            <div className="presentation-icon-wrapper presentation-icon-blue">
              <Star className="w-10 h-10" />
            </div>
            <h2 className="presentation-section-title">{plan.valuePropositionDetails.title}</h2>
            <p className="presentation-section-subtitle">{plan.valuePropositionDetails.subtitle}</p>

            <div className="presentation-value-pillars-grid">
              {plan.valuePropositionDetails.pillars.map((pillar, i) => (
                <ValuePillarCard key={i} pillar={pillar} delay={i * 0.1} />
              ))}
            </div>
          </Section>
        )}

        {/* Channels Section - Step 8: How We'll Reach Them */}
        {(plan.channels.primary.length > 0 || plan.channels.secondary.length > 0) && (
          <Section>
            <div className="presentation-icon-wrapper presentation-icon-green">
              <Share2 className="w-10 h-10" />
            </div>
            <h2 className="presentation-section-title">القنوات التسويقية</h2>

            <div className="presentation-channels-grid">
              {plan.channels.primary.some(c => c.trim() !== '') && (
                <div className="presentation-channels-card">
                  <h3 className="presentation-channels-title">القنوات الأساسية</h3>
                  <ul className="presentation-channels-list">
                    {plan.channels.primary.filter(c => c.trim() !== '').map((channel, i) => (
                      <li key={i} className="presentation-channel-item">
                        <div className="presentation-channel-dot" />
                        {channel}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {plan.channels.secondary.some(c => c.trim() !== '') && (
                <div className="presentation-channels-card presentation-channels-card-bordered">
                  <h3 className="presentation-channels-title">القنوات الثانوية</h3>
                  <ul className="presentation-channels-list">
                    {plan.channels.secondary.filter(c => c.trim() !== '').map((channel, i) => (
                      <li key={i} className="presentation-channel-item presentation-channel-item-secondary">
                        <div className="presentation-channel-dot presentation-channel-dot-secondary" />
                        {channel}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Section>
        )}

        {/* Strategy Section - Step 9: The Execution Plan */}
        {(plan.strategy.awareness || plan.strategy.consideration || plan.strategy.conversion || plan.strategy.retention) && (
          <Section>
            <h2 className="presentation-section-title">خطة التنفيذ (Funnel)</h2>

            <div className="presentation-strategy-container">
              <div className="presentation-strategy-line" />

              {[
                { title: 'الوعي', desc: plan.strategy.awareness, color: 'presentation-strategy-number-blue' },
                { title: 'الاهتمام', desc: plan.strategy.consideration, color: 'presentation-strategy-number-indigo' },
                { title: 'التحويل', desc: plan.strategy.conversion, color: 'presentation-strategy-number-purple' },
                { title: 'الاحتفاظ', desc: plan.strategy.retention, color: 'presentation-strategy-number-pink' },
              ].filter(s => s.desc).map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="presentation-strategy-item"
                >
                  <div className={`presentation-strategy-number ${step.color}`}>
                    0{i + 1}
                  </div>
                  <div className="presentation-strategy-content">
                    <h3 className="presentation-strategy-item-title">{step.title}</h3>
                    <p className="presentation-strategy-item-desc">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        )}

        {/* KPIs Section - Step 10: Success Metrics */}
        <Section>
          <div className="presentation-icon-wrapper presentation-icon-emerald">
            <BarChart3 className="w-10 h-10" />
          </div>
          <h2 className="presentation-section-title">مؤشرات النجاح</h2>
          <p className="presentation-section-subtitle">
            أهداف واضحة وقابلة للقياس لضمان تحقيق النتائج المطلوبة
          </p>

          {/* Primary KPIs */}
          {plan.kpis.primary.some(k => k.trim() !== '') && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="presentation-kpis-section"
            >
              <div className="presentation-kpis-section-header">
                <Target className="w-6 h-6" />
                <h3 className="presentation-kpis-section-title">المؤشرات الأساسية</h3>
              </div>
              <div className="presentation-kpis-primary-grid">
                {plan.kpis.primary.filter(k => k.trim() !== '').map((kpi, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="presentation-kpi-primary-card"
                  >
                    <div className="presentation-kpi-primary-icon">
                      <Check className="w-5 h-5" />
                    </div>
                    <p className="presentation-kpi-primary-text">{kpi}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Secondary KPIs */}
          {plan.kpis.secondary.some(k => k.trim() !== '') && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="presentation-kpis-section"
            >
              <div className="presentation-kpis-section-header">
                <TrendingUp className="w-6 h-6" />
                <h3 className="presentation-kpis-section-title">المؤشرات الثانوية</h3>
              </div>
              <div className="presentation-kpis-secondary-grid">
                {plan.kpis.secondary.filter(k => k.trim() !== '').map((kpi, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="presentation-kpi-secondary-card"
                  >
                    <div className="presentation-kpi-secondary-icon">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                    <p className="presentation-kpi-secondary-text">{kpi}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Summary Insight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="presentation-kpis-summary"
          >
            <div className="presentation-kpis-summary-icon">
              <Lightbulb className="w-8 h-8" />
            </div>
            <div className="presentation-kpis-summary-content">
              <h4 className="presentation-kpis-summary-title">ملخص الأهداف</h4>
              <p className="presentation-kpis-summary-text">
                {plan.kpisSummaryText || "خلال 3 أشهر: 200+ مقاول دائم، 300 مليون ليرة مبيعات شهرياً، 500 عميل ولاء، مع الحفاظ على جودة الخدمة ورضا العملاء بنسبة 50%+."}
              </p>
            </div>
          </motion.div>
        </Section>

        {/* Dynamic 1-Year Roadmap Section */}
        {plan.roadmap && plan.roadmap.length > 0 && (
          <Section className="roadmap-redesign-section">
            <div className="presentation-icon-wrapper presentation-icon-blue">
              <Calendar className="w-10 h-10" />
            </div>
            <h2 className="presentation-section-title">خارطة الطريق السنوية (12 شهراً)</h2>
            <p className="presentation-section-subtitle">
              خطة زمنية تفصيلية متسلسلة شهرياً لمتابعة التقدم والوصول إلى الأهداف النهائية للعام الأول للمشروع
            </p>

            <div className="roadmap-timeline-container">
              {/* Vertical line through the center */}
              <div className="roadmap-timeline-line"></div>

              {/* Group by Quarters dynamically */}
              {[1, 2, 3, 4].map((quarter) => {
                const quarterMonths = plan.roadmap.filter(m => m.quarter === quarter);
                const quarterLabel = plan.id === 'seham-iraq-plan' 
                  ? [
                      'الربع الأول: دراسة كبار موزعي الشورجة وأربيل وتجهيز الكتالوج العراقي',
                      'الربع الثاني: إعلانات Meta Ads B2B واستهداف كبار مخازن الجملة',
                      'الربع الثالث: إبرام عقود التوزيع الحصري الإقليمي للمحافظات العراقية',
                      'الربع الرابع: صفقات مواسم الأعياد الكبرى وعقود التوريد وتنشيط البراد البري'
                    ][quarter - 1]
                  : [
                      'الربع الأول: التجهيز وحصر البوتيكات بالأردن وإطلاق كراتين التجربة',
                      'الربع الثاني: إعلانات Meta Ads واستهداف تجار عمان والمحافظات',
                      'الربع الثالث: تحسين المبيعات وتسهيل تفتيح المقاسات السريع للتجار',
                      'الربع الرابع: صفقات مواسم الأعياد الكبرى وعقود التوريد السنوية الثابتة'
                    ][quarter - 1];

                return (
                  <div key={quarter} className="roadmap-quarter-group">
                    {/* Quarter Node Header */}
                    <div className="roadmap-quarter-header-node">
                      <div className="roadmap-quarter-header-badge">Q{quarter}</div>
                      <h3 className="roadmap-quarter-header-title">{quarterLabel}</h3>
                    </div>

                    {/* Months in this quarter */}
                    <div className="roadmap-quarter-months-timeline">
                      {quarterMonths.map((month, idx) => {
                        return (
                          <motion.div
                            key={month.number}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="roadmap-timeline-item"
                          >
                            {/* Visual Bullet on the line */}
                            <div className="roadmap-timeline-bullet">
                              <span className="bullet-number">{month.number}</span>
                            </div>

                            {/* Card Content */}
                            <div className="roadmap-timeline-card">
                              <div className="roadmap-month-card-header">
                                <div className="month-number-badge">الشهر {month.number} • {getMonthDateLabel(month.number)}</div>
                                <h3 className="month-name-title">{month.name}</h3>
                              </div>

                              <div className="roadmap-month-focus-box">
                                <Target className="w-5 h-5 text-accent" />
                                <div>
                                  <span className="focus-box-label">التركيز والهدف الأساسي:</span>
                                  <p className="focus-box-value">{month.focus}</p>
                                </div>
                              </div>

                              <div className="roadmap-month-details-group">
                                <div className="roadmap-details-list">
                                  <h4 className="details-list-title">الأهداف والمؤشرات (KPIs)</h4>
                                  <ul>
                                    {month.objectives.map((obj, i) => (
                                      <li key={i}>
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                        <span>{obj}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="roadmap-details-list">
                                  <h4 className="details-list-title">قنوات التشغيل والعمليات</h4>
                                  <ul>
                                    {month.actions.map((act, i) => (
                                      <li key={i}>
                                        <Zap className="w-4 h-4 text-purple-500 shrink-0" />
                                        <span>{act}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              <div className="roadmap-month-card-footer">
                                <TrendingUp className="w-5 h-5 text-emerald-500" />
                                <div>
                                  <span className="footer-progress-label">مؤشر النجاح والتقدم:</span>
                                  <p className="footer-progress-value">{month.progress}</p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </Section>
        )}

        {/* Marketing Packages Section - Step 11: CLOSE THE SALE */}
        {plan.marketingPackages && plan.marketingPackages.packages.length > 0 && (
          <Section className="presentation-packages-section presentation-packages-section-final">
            <div className="presentation-icon-wrapper presentation-icon-green">
              <Rocket className="w-10 h-10" />
            </div>
            <h2 className="presentation-section-title">{plan.marketingPackages.title}</h2>
            <p className="presentation-packages-subtitle">{plan.marketingPackages.subtitle}</p>

            <div className="presentation-packages-grid">
              {plan.marketingPackages.packages.map((pkg, i) => (
                <PackageCard key={i} pkg={pkg} delay={i * 0.15} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="presentation-packages-cta"
            >
              <MessageCircle className="w-8 h-8" />
              <div>
                <h3 className="presentation-packages-cta-title">جاهز للبدء؟</h3>
                <p className="presentation-packages-cta-text">لا تضيع الفرصة - ابدأ الآن وحقق نتائج ملموسة</p>
              </div>
              <Button size="lg" className="presentation-packages-cta-btn">
                <Phone className="w-5 h-5" />
                تواصل الآن
              </Button>
            </motion.div>
          </Section>
        )}

        {/* End Section */}
        <Section className="presentation-end-section">
          <h2 className="presentation-end-title">جاهز للتنفيذ؟</h2>
          <Button size="lg" onClick={() => navigate('/')} className="presentation-end-btn">
            العودة للوحة التحكم
          </Button>
        </Section>
      </main>
    </div>
  );
}
