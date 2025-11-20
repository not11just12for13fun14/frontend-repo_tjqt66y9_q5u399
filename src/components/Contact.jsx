import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-right mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">تواصل معنا</h2>
          <p className="mt-3 text-blue-100/90">يسعدنا استقبال استفساراتكم وعروض التعاون.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3">
            <form onSubmit={onSubmit} className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="text-right">
                  <label className="block text-sm text-blue-100/80 mb-1">الاسم الكامل</label>
                  <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="w-full rounded-lg bg-slate-900/70 border border-slate-700/60 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="text-right">
                  <label className="block text-sm text-blue-100/80 mb-1">البريد الإلكتروني</label>
                  <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="w-full rounded-lg bg-slate-900/70 border border-slate-700/60 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="sm:col-span-2 text-right">
                  <label className="block text-sm text-blue-100/80 mb-1">رسالتك</label>
                  <textarea required rows="5" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} className="w-full rounded-lg bg-slate-900/70 border border-slate-700/60 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-end">
                <button type="submit" className="inline-flex items-center rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 text-slate-900 font-semibold px-5 py-2.5 shadow hover:shadow-lg transition-shadow">
                  إرسال الرسالة
                </button>
              </div>
              {sent && (
                <p className="mt-3 text-green-300 text-right">تم إرسال رسالتك بنجاح. سنعود إليك في أقرب وقت.</p>
              )}
            </form>
          </div>

          <div className="lg:col-span-2 space-y-4 text-right">
            <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6">
              <div className="flex items-center gap-3 justify-end">
                <span className="text-blue-100">+218 21 123 4567</span>
                <div className="h-10 w-10 rounded-lg bg-blue-500/20 text-blue-200 flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-center gap-3 justify-end mt-3">
                <span className="text-blue-100">info@alnoor-energy.ly</span>
                <div className="h-10 w-10 rounded-lg bg-blue-500/20 text-blue-200 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-center gap-3 justify-end mt-3">
                <span className="text-blue-100">طرابلس، ليبيا</span>
                <div className="h-10 w-10 rounded-lg bg-blue-500/20 text-blue-200 flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-700/50">
              <iframe
                title="موقع الشركة"
                src="https://www.openstreetmap.org/export/embed.html?bbox=13.146%2C32.846%2C13.216%2C32.902&layer=mapnik&marker=32.875%2C13.186"
                className="w-full h-64"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
