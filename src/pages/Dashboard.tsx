import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { Button } from '../components/ui/Button';
import { Plus, Presentation as PresentationIcon, Edit2, Copy, Trash2, Globe, ExternalLink, Activity, ShoppingBag, Lock, Unlock } from 'lucide-react';
import '../styles.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const { plans, createPlan, deletePlan, duplicatePlan, isDeveloperMode, setDeveloperMode } = useStore();

  const handleCreate = () => {
    if (!isDeveloperMode) return;
    const id = createPlan('خطة تسويق جديدة');
    navigate(`/build/${id}`);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <header className="dashboard-header">
          <div className="dashboard-title-group">
            <h1>منصة التخطيط التسويقي - أحذية سهام</h1>
            <p className="dashboard-subtitle">استكشف خطط تسويق وتوزيع الجملة (B2B) لورشة سهام للأحذية النسائية في أسواق الأردن والعراق.</p>
          </div>
          {isDeveloperMode && (
            <Button onClick={handleCreate} size="lg" className="dashboard-create-btn">
              <Plus className="w-5 h-5" />
              إنشاء خطة جديدة
            </Button>
          )}
        </header>

        {plans.length === 0 ? (
          <div className="dashboard-empty-state">
            <div className="dashboard-empty-icon">
              <PresentationIcon className="w-10 h-10" />
            </div>
            <h3 className="dashboard-empty-title">لا توجد خطط حالياً</h3>
            <p className="dashboard-empty-description">الرجاء تفعيل وضع المطور لإعادة تهيئة الخطط أو إنشاء خطة جديدة.</p>
            {isDeveloperMode && (
              <Button onClick={handleCreate} variant="outline">ابدأ الآن</Button>
            )}
          </div>
        ) : (
          <div className="dashboard-grid">
            {plans.map((plan) => {
              const isJordan = plan.id === 'seham-jordan-plan';
              const description = isJordan
                ? 'خطة تسويق جملة وتوريد B2B لورشة أحذية سهام النسائية بسوق الأردن، تركز على محلات التجزئة والبوتيكات وعقد صفقات التوريد الدورية بمرونة عالية.'
                : 'خطة عمل تسويق وتوزيع جملة B2B لأسواق العراق، تركز على كبار الموزعين وأصحاب المستودعات الكبرى في الشورجة وأربيل وتوريد كميات تجارية واسعة.';
              
              return (
                <div key={plan.id} className={`dashboard-plan-card-premium ${isJordan ? 'purity-theme' : 'prevost-theme'}`}>
                  <div className="card-premium-glow"></div>
                  
                  <div className="premium-card-header">
                    <div className="premium-card-badge">
                      {isJordan ? 'سوق الأردن • B2B جملة' : 'سوق العراق • B2B جملة'}
                    </div>
                    <h3 className="premium-card-title">{plan.title}</h3>
                    <p className="premium-card-desc">{description}</p>
                  </div>

                  {/* External & Control Links Panel */}
                  {plan.projectLinks && (
                    <div className="dashboard-links-panel">
                      <h4 className="links-panel-title">روابط التحكم والمراقبة السريعة (B2B):</h4>
                      <div className="links-buttons-grid">
                        <a 
                          href={plan.projectLinks.websiteUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="premium-link-btn website-link"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          <span>{isJordan ? 'كتالوج واتساب الأردن' : 'كتالوج واتساب العراق'}</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-50 shrink-0" />
                        </a>

                        <a 
                          href={plan.projectLinks.controlUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="premium-link-btn control-link"
                        >
                          <Activity className="w-4 h-4" />
                          <span>لوحة إعلانات Meta Ads</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-50 shrink-0" />
                        </a>

                        {plan.projectLinks.productsSheetUrl && (
                          <a 
                            href={plan.projectLinks.productsSheetUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="premium-link-btn sheet-link"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 text-emerald-600"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                            <span>سجل طلبات الجملة والتجربة</span>
                            <ExternalLink className="w-3.5 h-3.5 opacity-50 shrink-0" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="dashboard-card-footer-premium">
                    <div className="footer-primary-actions">
                      <Button 
                        onClick={() => navigate(`/present/${plan.id}`)} 
                        className="premium-present-btn"
                      >
                        <PresentationIcon className="w-5 h-5" />
                        <span>استعراض الخطة التفاعلية</span>
                      </Button>

                      {isDeveloperMode && (
                        <Button 
                          variant="outline" 
                          onClick={() => navigate(`/build/${plan.id}`)} 
                          className="premium-edit-btn-style"
                        >
                          <Edit2 className="w-4 h-4" />
                          <span>تعديل الهيكل</span>
                        </Button>
                      )}
                    </div>

                    {isDeveloperMode && (
                      <div className="footer-secondary-actions">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => duplicatePlan(plan.id)} 
                          title="نسخ"
                          className="action-icon-btn"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => deletePlan(plan.id)} 
                          title="حذف" 
                          className="action-icon-btn delete-btn"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Developer Gateway Footer Controls */}
        <div className="developer-gateway-footer">
          {isDeveloperMode ? (
            <div className="dev-active-banner">
              <span className="dev-active-dot"></span>
              <Unlock className="w-4 h-4 text-emerald-600" />
              <span>وضع المطور والتعديل نشط حالياً</span>
              <Button 
                variant="outline" 
                onClick={() => setDeveloperMode(false)} 
                className="dev-lock-btn"
              >
                إغلاق وضع المطور
              </Button>
            </div>
          ) : (
            <button 
              onClick={() => {
                const passcode = prompt('الرجاء إدخال رمز المطور المعتمد للتحرير والتعديل:');
                if (passcode === 'puritydev2026') {
                  setDeveloperMode(true);
                  alert('تم تفعيل وضع المطور والمبرمج بنجاح! يمكنك الآن تعديل وإضافة الخطط.');
                } else if (passcode !== null) {
                  alert('رمز مرور خاطئ! تعديل هيكل الخطط متاح حصرياً لمطور ومبرمج المنصة.');
                }
              }} 
              className="dev-gate-trigger"
            >
              <Lock className="w-4 h-4" />
              <span>دخول المطورين والمبرمجين (تعديل الهياكل)</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
