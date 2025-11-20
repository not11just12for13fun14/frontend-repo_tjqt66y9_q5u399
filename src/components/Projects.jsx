const projects = [
  {
    title: "حقل الواحة – زيادة الإنتاج",
    desc: "برنامج تحسين الاستخلاص، رفع الكفاءة بنسبة 18% خلال عام واحد.",
    image: "https://images.unsplash.com/photo-1430799777074-03e187a812f4?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM2Nzk2ODh8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
  },
  {
    title: "خط أنابيب الساحل",
    desc: "تنفيذ وتمديد 160 كم مع أنظمة مراقبة ذكية للتسرب والضغط.",
    image: "https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "مركز لوجستي في الهلال النفطي",
    desc: "منصة إمداد متكاملة تدعم 24/7 العمليات البحرية والبرية.",
    image: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-right mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">مشاريع وإنجازات</h2>
          <p className="mt-3 text-blue-100/90">نماذج من أعمالنا التي تعكس خبرتنا التشغيلية والهندسية.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-800/30">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
              </div>
              <div className="p-5 text-right">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-blue-100/90 leading-7">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
