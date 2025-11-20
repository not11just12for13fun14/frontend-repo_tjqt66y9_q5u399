import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#home", label: "الرئيسية" },
    { href: "#about", label: "عن الشركة" },
    { href: "#services", label: "الخدمات" },
    { href: "#values", label: "المزايا والقيم" },
    { href: "#projects", label: "المشاريع" },
    { href: "#contact", label: "تواصل" }
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="backdrop-blur-xl bg-slate-900/70 border-b border-slate-700/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-500 to-amber-600 text-slate-900 font-extrabold shadow ring-1 ring-yellow-400/50">ن</span>
              <div className="leading-tight">
                <div className="text-white font-semibold tracking-tight">النور للطاقة</div>
                <div className="text-xs text-blue-200/80">نفط وغاز – ليبيا</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-blue-100/90 hover:text-white transition-colors text-sm">{item.label}</a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 text-slate-900 font-semibold px-4 py-2 shadow hover:shadow-lg transition-shadow">طلب عرض</a>
            </nav>

            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-700/50 text-blue-100 hover:bg-slate-800" onClick={() => setOpen(!open)} aria-label="فتح القائمة">
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {open && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col gap-2 pt-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="text-blue-100/90 hover:text-white transition-colors text-sm px-2 py-2 rounded-lg hover:bg-slate-800" onClick={() => setOpen(false)}>{item.label}</a>
                ))}
                <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 text-slate-900 font-semibold px-4 py-2 shadow mt-2" onClick={() => setOpen(false)}>طلب عرض</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
