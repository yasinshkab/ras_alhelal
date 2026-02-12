import React from 'react';
import { ArrowRight } from 'lucide-react';
import exchangeImg from './assets/services/currency-exchange.png';
import remittancesImg from './assets/services/global-remittances.jpg';
import digitalImg from './assets/services/digital-ecosystem.png';

const ServicesSection = ({ isArabic }) => {
  const text = {
    en: {
      subtitle: "EXPERT SOLUTIONS",
      title: "Our Specialized Services",
      description: "We leverage cutting-edge technology and deep market expertise to provide secure, efficient financial solutions.",
      cta: "Read more",
      services: [
        {
          title: "Currency Exchange",
          description: "Real-time global currency trading with competitive spreads and unparalleled execution speed.",
          media: exchangeImg,
          color: "#0EA5E9"
        },
        {
          title: "Global Remittances",
          description: "Schedule and track your international transfers with precision through our secure network.",
          media: remittancesImg,
          color: "#0EA5E9"
        },
        {
          title: "Digital Ecosystem",
          description: "Innovation-driven financial tools designed for the next generation of global connectivity.",
          media: digitalImg,
          color: "#0EA5E9"
        }
      ]
    },
    ar: {
      subtitle: "حلول الخبراء",
      title: "خدماتنا المتخصصة",
      description: "نحن نستخدم أحدث التقنيات وخبراتنا العميقة في السوق لتقديم حلول مالية آمنة وفعالة.",
      cta: "اقرأ المزيد",
      services: [
        {
          title: "صرف العملات",
          description: "تداول العملات العالمية في الوقت الفعلي مع فوارق تنافسية وسرعة تنفيذ لا ميل لها.",
          media: exchangeImg,
          color: "#0EA5E9"
        },
        {
          title: "الحوالات العالمية",
          description: "جدولة وتتبع حوالاتك الدولية بدقة من خلال شبكتنا العالمية الآمنة.",
          media: remittancesImg,
          color: "#0EA5E9"
        },
        {
          title: "المنظومة الرقمية",
          description: "أدوات مالية مبتكرة مصممة للجيل القادم من التواصل والترابط العالمي.",
          media: digitalImg,
          color: "#0EA5E9"
        }
      ]
    },
  };

  const currentLang = isArabic ? 'ar' : 'en';
  const content = text[currentLang];

  return (
    <section id="services" className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Subtle Background Accents */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0EA5E9]/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 px-4">
          <span className="text-sm font-bold text-[#F59E0B] tracking-[0.2em] block mb-3 uppercase">
            {content.subtitle}
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#003B49] mb-6 leading-tight">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium opacity-80">
            {content.description}
          </p>
        </div>

        {/* Services Grid - 3 columns for one line layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {content.services.map((service, index) => {
            return (
              <div
                key={index}
                className="group relative bg-white rounded-[40px] overflow-hidden shadow-2xl shadow-gray-200/50 transition-all duration-700 transform hover:-translate-y-3"
              >
                {/* Seamless Media Area */}
                <div className="relative h-80 w-full overflow-hidden bg-white flex items-center justify-center p-10">
                  <img
                    src={service.media}
                    alt={service.title}
                    className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                  />

                  {/* Subtle Accent Light */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000"
                    style={{ backgroundColor: service.color }}
                  ></div>
                </div>

                {/* Content Area - Minimalist & Large */}
                <div className="px-12 pb-14 text-center">
                  <div
                    className="w-16 h-1 bg-gray-100 mx-auto mb-8 rounded-full transition-all duration-500 group-hover:w-24"
                    style={{ backgroundColor: `${service.color}40` }}
                  ></div>

                  <h3 className="text-3xl font-black text-[#003B49] mb-5 leading-tight tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-10 text-lg font-medium">
                    {service.description}
                  </p>

                  <div className="flex justify-center">
                    <button
                      className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white transition-all duration-500 shadow-lg hover:shadow-xl transform hover:scale-105"
                      style={{ backgroundColor: service.color }}
                    >
                      {content.cta}
                      <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isArabic ? 'rotate-180 group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;