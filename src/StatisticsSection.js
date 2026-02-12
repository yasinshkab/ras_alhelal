import React from 'react';

const StatisticsSection = ({ isArabic }) => {
  const text = {
    en: {
      stats: [
        { number: "1000", label: "Daily Transactions" },
        { number: "450", label: "Happy Clients" },
        { number: "25", label: "Years Experience" }
      ]
    },
    ar: {
      stats: [
        { number: "1000", label: "معاملات يومية" },
        { number: "450", label: "عملاء راضون" },
        { number: "25", label: "سنوات الخبرة" }
      ]
    }
  };

  const currentLang = isArabic ? 'ar' : 'en';

  return (
    <section className="relative py-12 -mt-16 z-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-[#003B49] rounded-[40px] shadow-2xl shadow-blue-900/40 p-10 lg:p-16 relative overflow-hidden ring-1 ring-white/10">
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0EA5E9] opacity-20 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
            {text[currentLang].stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center p-4 transition-transform hover:scale-105 duration-500
                  ${index !== 0 ? (isArabic ? 'md:border-r border-white/10' : 'md:border-l border-white/10') : ''}
                  ${index !== 0 ? 'border-t md:border-t-0 border-white/10' : ''}`}
              >
                <div className="text-5xl lg:text-7xl font-black text-white mb-4 tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#0EA5E9]">
                    {stat.number}
                  </span>
                  <span className="text-[#F59E0B] ml-1">+</span>
                </div>
                <div className="text-sm lg:text-base font-black text-[#F59E0B] uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default StatisticsSection;