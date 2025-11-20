export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
        <img
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2000&auto=format&fit=crop"
          alt="حقل نفطي ليبي"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.7)_60%,rgba(2,6,23,0.95)_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="text-right lg:order-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-blue-100 to-blue-300">
              حلول طاقة موثوقة لليبيا المستقبل
            </h1>
            <p className="mt-6 text-blue-100/90 leading-8">
              نحن شركة ليبية متخصصة في الاستكشاف والإنتاج والنقل والخدمات اللوجستية لقطاع النفط والغاز، مع التزام راسخ بالجودة والسلامة والاستدامة.
            </p>
            <div className="mt-8 flex items-center justify-end gap-3">
              <a href="#services" className="inline-flex items-center rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 text-slate-900 font-semibold px-5 py-3 shadow hover:shadow-lg transition-shadow">
                اكتشف خدماتنا
              </a>
              <a href="#contact" className="inline-flex items-center rounded-lg border border-blue-300/30 text-blue-100 px-5 py-3 hover:bg-slate-800/60">
                تواصل معنا
              </a>
            </div>
          </div>

          <div className="relative lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-blue-400/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581094478373-1ec6a532909f?q=80&w=1400&auto=format&fit=crop"
                alt="منصة حفر وإنتاج"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-slate-900/10 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-slate-950/70 to-transparent">
                <p className="text-sm text-blue-100/90">عملياتنا تمتد من الصحراء إلى الساحل – بأعلى معايير السلامة والكفاءة.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
