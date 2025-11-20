import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Values from "./components/Values";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Values />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-slate-700/40 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-right">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-0 sm:justify-between">
            <p className="text-blue-200/80">© {new Date().getFullYear()} النور للطاقة – جميع الحقوق محفوظة</p>
            <div className="text-xs text-blue-300/60">هوية بصرية: أسود • ذهبي • أزرق داكن</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
