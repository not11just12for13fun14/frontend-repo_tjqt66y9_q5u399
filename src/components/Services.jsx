import { Compass, Factory, Truck, Package } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "الاستكشاف",
    desc: "دراسات جيولوجية وزلزالية متقدمة لتحديد المكامن بدقة وفعالية.",
  },
  {
    icon: Factory,
    title: "الإنتاج",
    desc: "تشغيل الآبار والمنشآت بإنتاجية عالية مع مراقبة فورية للأداء.",
  },
  {
    icon: Truck,
    title: "النقل",
    desc: "شبكات نقل وتخزين آمنة وفق المعايير الدولية لحماية الموارد.",
  },
  {
    icon: Package,
    title: "الخدمات اللوجستية",
    desc: "دعم كامل للعمليات الميدانية: توريد، مناوبة، مناولة، وصيانة.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-right mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">خدماتنا</h2>
          <p className="mt-3 text-blue-100/90">حلول متكاملة تغطي دورة حياة النفط والغاز من الاكتشاف حتى التسليم.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl p-6 border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-600 text-slate-900 flex items-center justify-center shadow ring-1 ring-yellow-400/40 ml-auto">
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
