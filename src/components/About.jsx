export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-right">
          <div className="md:col-span-3 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">عن الشركة</h2>
            <p className="mt-3 text-blue-100/90 max-w-3xl ml-auto leading-8">
              النور للطاقة شركة ليبية رائدة في مجال النفط والغاز، تقدم حلولاً متكاملة تغطي سلسلة القيمة كاملة من الاستكشاف والإنتاج إلى النقل والخدمات اللوجستية، وفق أعلى المعايير المحلية والدولية.
            </p>
          </div>

          <div className="rounded-2xl p-6 border border-slate-700/50 bg-slate-800/30">
            <h3 className="text-xl font-semibold text-white mb-2">رؤيتنا</h3>
            <p className="text-blue-100/90">أن نكون الشريك الموثوق لقطاع الطاقة في ليبيا، ونموذجاً في الاستدامة والكفاءة التقنية.</p>
          </div>

          <div className="rounded-2xl p-6 border border-slate-700/50 bg-slate-800/30">
            <h3 className="text-xl font-semibold text-white mb-2">رسالتنا</h3>
            <p className="text-blue-100/90">تطوير وإدارة الموارد الهيدروكربونية بفعالية ومسؤولية، مع تعزيز القيمة الوطنية والاقتصاد المحلي.</p>
          </div>

          <div className="rounded-2xl p-6 border border-slate-700/50 bg-slate-800/30">
            <h3 className="text-xl font-semibold text-white mb-2">نبذة مختصرة</h3>
            <p className="text-blue-100/90">فريقنا يجمع خبرات محلية ودولية في الجيولوجيا، الهندسة، السلامة، وسلاسل الإمداد، مدعومين بنظم رقمية متقدمة.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
