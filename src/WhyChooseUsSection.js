import React from 'react';
import { Zap, ShieldCheck, BadgeCheck } from 'lucide-react';

const WhyChooseUsSection = ({ isArabic }) => {
  const text = {
    en: {
      subtitle: "WHY CHOOSE US",
      title: "Built on Trust & Excellence",
      features: [
        {
          title: "Speed & Efficiency",
          description: "Instant transaction processing and rapid service delivery for all your exchange needs.",
          icon: Zap
        },
        {
          title: "Maximum Security",
          description: "Top-tier security protocols ensure your funds and data are protected at all times.",
          icon: ShieldCheck
        },
        {
          title: "Guaranteed Satisfaction",
          description: "Committed to providing the best rates and customer service experience in the market.",
          icon: BadgeCheck
        }
      ]
    },
    ar: {
      subtitle: "لماذا تختارنا",
      title: "نبني الثقة والتميز",
      features: [
        {
          title: "السرعة والكفاءة",
          description: "معالجة فورية للمعاملات وتقديم خدمات سريعة لتلبية جميع احتياجاتك المالية.",
          icon: Zap
        },
        {
          title: "أقصى درجات الأمان",
          description: "بروتوكولات أمان عالية المستوى تضمن حماية أموالك وبياناتك في جميع الأوقات.",
          icon: ShieldCheck
        },
        {
          title: "ضمان الرضا",
          description: "نلتزم بتقديم أفضل الأسعار وتجربة خدمة عملاء متميزة في السوق.",
          icon: BadgeCheck
        }
      ]
    }
  };

  const currentLang = isArabic ? 'ar' : 'en';

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* Header with bespoke feel */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-xl font-bold text-[#F59E0B] block mb-2 uppercase">
              {text[currentLang].subtitle}
            </span>
            <h2 className="text-5xl lg:text-7xl font-black text-[#003B49] leading-tight">
              {text[currentLang].subtitle}
            </h2>
          </div>
          <div className="hidden md:block">
            <div className="h-1 w-32 bg-[#F59E0B] rounded-full"></div>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {text[currentLang].features.map((feature, index) => {
            const Icon = feature.icon;
            // Add custom styling for each card to break uniformity
            const cardStyles = [
              "md:translate-y-8",
              "md:bg-[#003B49] md:text-white md:shadow-[#003B49]/20",
              ""
            ];

            return (
              <div
                key={index}
                className={`group relative bg-white rounded-[40px] p-10 shadow-2xl shadow-gray-200/50 border border-gray-100 transition-all duration-500 hover:-translate-y-2 ${cardStyles[index]}`}
              >
                {/* Number Indicator */}
                <div className="absolute top-8 right-8 text-4xl font-black opacity-[0.05] select-none text-[#003B49]">
                  0{index + 1}
                </div>

                <div className="mb-8">
                  <div className={`w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-500 ${index === 1 ? 'bg-white/10 text-[#F59E0B]' : 'bg-[#003B49]/5 text-[#003B49] group-hover:bg-[#0EA5E9] group-hover:text-white'}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                </div>

                <h3 className={`text-2xl font-black mb-4 ${index === 1 ? 'text-white' : 'text-[#003B49]'}`}>
                  {feature.title}
                </h3>

                <p className={`text-lg leading-relaxed ${index === 1 ? 'text-blue-100/70' : 'text-gray-500'}`}>
                  {feature.description}
                </p>

                <div className={`mt-8 h-1 w-12 rounded-full transition-all duration-500 ${index === 1 ? 'bg-[#F59E0B]' : 'bg-gray-100 group-hover:w-24 group-hover:bg-[#0EA5E9]'}`}></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background visual flair */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0EA5E9]/5 rounded-full blur-[100px]"></div>
    </section>
  );
};

export default WhyChooseUsSection;
