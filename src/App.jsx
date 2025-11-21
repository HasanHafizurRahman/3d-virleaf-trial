import Hero from "./components/sections/Hero";
import CustomCursor from "./components/ui/CustomCursor";
import Navbar from "./components/ui/Navbar";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import TechStack from "./components/sections/TechStack";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <TechStack />
      <Contact />

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#00DC82] to-[#6C5CE7] bg-clip-text text-transparent">
            Virleaf
          </div>
          <p className="text-white/40 text-sm">
            © 2024 Virleaf. Architecting Digital Reality.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-[#00DC82] transition-colors">Twitter</a>
            <a href="#" className="text-white/60 hover:text-[#00DC82] transition-colors">GitHub</a>
            <a href="#" className="text-white/60 hover:text-[#00DC82] transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Custom gradient background */
        body {
          background: radial-gradient(ellipse at top, #0A0A0A 0%, #050505 100%);
        }
      `}</style>
    </div>
  );
}