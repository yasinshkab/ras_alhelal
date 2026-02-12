import React from 'react';
import { ArrowRight, BarChart3 } from 'lucide-react';
import heroImage from './assets/hero/photo-build.jpg';
import rasLogo from './assets/logos/ras.png';

const HeroSectionV2 = ({ isArabic }) => {
  const text = {
    en: {
      title: "Ras Al-Helal for Exchange and Financial Services",
      subtitle: "Your Trusted Partner in Exchange Services",
      ctaCBL: "Central Bank Rates"
    },
    ar: {
      title: "رأس هـلال للصرافة والخـدمات المـالية",
      subtitle: "شريكك الموثوق في خدمات الصرافة",
      ctaCBL: "أسعار مصرف ليبيا المركزي"
    }
  };

  const currentLang = isArabic ? 'ar' : 'en';

  return (
    <section id="hero-section" className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden text-white">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Primary Dark/Brand Overlay */}
        <div className="absolute inset-0 bg-[#003B49]/45 mix-blend-multiply"></div>
        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#003B49]/50 via-transparent to-[#003B49]/70"></div>
        {/* Mesh/Noise subtle pattern */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-grow flex flex-col justify-center">
        <div className="flex flex-col items-center max-w-5xl mx-auto">

          {/* Main Content Area */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight text-white drop-shadow-xl">
              {text[currentLang].title.split(' ').map((word, i) => (
                <span key={i} className={word === 'Exchange' || word === 'للصرافة' ? 'text-[#F59E0B]' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto leading-relaxed mb-16 drop-shadow-md">
              {text[currentLang].subtitle}
            </p>

            {/* CTA Group */}
            <div className="flex justify-center mt-4">
              <a
                href="https://cbl.gov.ly/en/currency-exchange-rates/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto px-10 py-4 bg-white text-[#003B49] font-bold rounded-xl overflow-hidden transition-all hover:scale-[1.05] active:scale-[0.98] shadow-xl flex items-center justify-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-[#003B49]/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative text-lg md:text-xl">
                  {text[currentLang].ctaCBL}
                </span>
                <ArrowRight className={`relative w-5 h-5 transition-transform group-hover:translate-x-1 ${isArabic ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSectionV2;