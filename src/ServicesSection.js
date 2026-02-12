import React from 'react';
import { ArrowRight } from 'lucide-react';
import emergingGif from './assets/animations/emerging-industries.gif';
import calendarGif from './assets/animations/calendar-animation.gif';
import buildingGif from './assets/animations/building-animation.gif';
import aiGraphic from './assets/animations/ai-generated-graphic.png';

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
          media: emergingGif,
          color: "#0EA5E9"
        },
        {
          title: "Global Remittances",
          description: "Schedule and track your international transfers with precision through our secure network.",
          media: calendarGif,
          color: "#F59E0B"
        },
        {
          title: "Corporate Liquidity",
          description: "Bespoke cash management and institutional support for growing businesses in Libya.",
          media: buildingGif,
          color: "#10B981"
        },
        {
          title: "Digital Ecosystem",
          description: "Innovation-driven financial tools designed for the next generation of global connectivity.",
          media: aiGraphic,
          color: "#6366F1"
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
          description: "تداول العملات العالمية في الوقت الفعلي مع فوارق تنافسية وسرعة تنفيذ لا مثيل لها.",
          media: emergingGif,
          color: "#0EA5E9"
        },
        {
          title: "الحوالات العالمية",
          description: "جدولة وتتبع حوالاتك الدولية بدقة من خلال شبكتنا العالمية الآمنة.",
          media: calendarGif,
          color: "#F59E0B"
        },
        {
          title: "السيولة المؤسسية",
          description: "إدارة نقدية مخصصة ودعم مؤسسي للشركات المتنامية في السوق الليبي.",
          media: buildingGif,
          color: "#10B981"
        },
        {
          title: "المنظومة الرقمية",
          description: "أدوات مالية مبتكرة مصممة للجيل القادم من التواصل والترابط العالمي.",
          media: aiGraphic,
          color: "#6366F1"
        }
      ]
    },
  };

  const currentLang = isArabic ? 'ar' : 'en';
  const content = text[currentLang];

  return (
    <section id="services" className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">

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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.services.map((service, index) => {
            return (
              <div
                key={index}
                className="group relative bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Media Container */}
                <div className="relative h-48 overflow-hidden bg-gray-50">
                  <img
                    src={service.media}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Floating badge effect */}
                  <div
                    className={`absolute bottom-4 ${isArabic ? 'right-4' : 'left-4'} w-2 h-8 rounded-full`}
                    style={{ backgroundColor: service.color }}
                  ></div>
                </div>

                {/* Content Area */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#003B49] mb-3 leading-tight group-hover:text-[#0EA5E9] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-8 font-medium text-sm line-clamp-3">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 mt-auto">
                    <span
                      className={`text-sm font-bold tracking-wide transition-colors ${index === 0 ? 'text-[#0EA5E9]' : 'text-gray-400 group-hover:text-[#0EA5E9]'}`}
                    >
                      {content.cta}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-all duration-300 ${isArabic ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} ${index === 0 ? 'text-[#0EA5E9]' : 'text-gray-400 group-hover:text-[#0EA5E9]'}`}
                    />
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