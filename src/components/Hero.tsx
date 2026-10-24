import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToApps = () => {
    document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative px-6 py-20 text-center">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Practice Lab
            <span className="bg-gradient-to-r from-[#6BA7B0] via-[#DCAA89] to-[#D6794D] bg-clip-text text-transparent block">
              Tools for Musicians
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#BFB9B5] max-w-3xl mx-auto leading-relaxed">
            A structured practice toolkit for musicians
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={scrollToApps}
            className="bg-gradient-to-r from-[#B84B1B] to-[#C35627] hover:from-[#A63E12] hover:to-[#B84B1B] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-xl shadow-[#C35627]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCAA89] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c181c] cursor-pointer"
          >
            Explore Tools
          </button>
        </div>

        <div className="animate-bounce">
          <button
            onClick={scrollToApps}
            aria-label="Scroll to tools"
            className="text-gray-400 hover:text-[#DCAA89] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCAA89] rounded-full p-1 cursor-pointer bg-transparent border-0"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#C35627] rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#30525C] rounded-full opacity-20 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;