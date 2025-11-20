import { ShieldCheck, Award, Handshake, ScanLine } from "lucide-react";

const values = [
  { icon: Award, title: "الجودة", desc: "تطبيق أنظمة إدارة متوافقة مع ISO وAPI لضمان الأداء الفائق." },
  { icon: ShieldCheck, title: "السلامة", desc: "ثقافة وقاية شاملة، تدريب مستمر، ومراقبة للمخاطر في كل خطوة." },
  { icon: Handshake, title: "الالتزام", desc: "تنفيذ في المواعيد، موثوقية تشغيلية، واحترام تعهداتنا." },
  { icon: ScanLine, title: "الشفافية", desc: "حَوْكَمة واضحة وتواصل مهني مع الشركاء والجهات التنظيمية." },
];

export default function Values() {
  return (
    <section id="values" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-right mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">مزايا وقيم العمل</h2>
          <p className="mt-3 text-blue-100/90">نضع السلامة والجودة في صميم عملياتنا، ونلتزم بالشفافية والمسؤولية.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl p-6 border border-slate-700/50 bg-slate-800/30">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 text-white flex items-center justify-center shadow ring-1 ring-blue-300/40 ml-auto">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white text-right">{title}</h3>
              <p className="mt-2 text-blue-100/90 text-right leading-7">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
