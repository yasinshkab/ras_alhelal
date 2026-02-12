import React from 'react';
import { Target, Compass, ArrowRight } from 'lucide-react';

const VisionMissionSection = ({ isArabic }) => {
  const text = {
    en: {
      vision: {
        heading: "OUR VISION",
        title: "Leading Digital Financial Solutions",
        description: "To constitute a pivotal force in evolving the financial landscape of Libya, creating a seamless and secure monetary environment for global connectivity.",
        cta: "Read Vision"
      },
      mission: {
        heading: "OUR MISSION",
        title: "Empowering Financial Growth",
        description: "To deliver innovative currency services that simplify complex financial needs, fostering economic growth through transparency and technological excellence.",
        cta: "Read Mission"
      }
    },
    ar: {
      vision: {
        heading: "رؤيتنا",
        title: "ريادة الحلول المالية الرقمية",
        description: "أن نكون القوة المحورية في تطوير المشهد المالي في ليبيا، وخلق بيئة نقدية سلسة وآمنة للتواصل العالمي.",
        cta: "اقرأ الرؤية"
      },
      mission: {
        heading: "رسالتنا",
        title: "تمكين النمو المالي",
        description: "تقديم خدمات عملات مبتكرة تبسط الاحتياجات المالية المعقدة، وتعزز النمو الاقتصادي من خلال الشفافية والتميز التكنولوجي.",
        cta: "اقرأ الرسالة"
      }
    }
  };

  const currentLang = isArabic ? 'ar' : 'en';

  return (
    <section id="vision" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background branding */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] select-none">
        <div className="absolute top-10 -left-20 text-[20rem] font-black text-[#003B49]">RAS</div>
        <div className="absolute bottom-10 -right-20 text-[20rem] font-black text-[#0EA5E9]">ALHELAL</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Vision Card - Light & Airy */}
          <div className="group relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-gray-50 to-white rounded-[40px] shadow-2xl shadow-gray-200/50 -z-10 transition-transform duration-500 group-hover:scale-[1.02]"></div>

            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-[#0EA5E9]/10 flex items-center justify-center text-[#0EA5E9] transform group-hover:rotate-6 transition-transform">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xl font-bold text-[#F59E0B] block mb-2 uppercase">
                    {text[currentLang].vision.heading}
                  </span>
                  <div className="h-1 w-12 bg-[#0EA5E9] rounded-full mb-4"></div>
                </div>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-[#003B49] mb-6 leading-tight">
                {text[currentLang].vision.heading}
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                {text[currentLang].vision.description}
              </p>

              <div className="inline-flex items-center gap-2 group/btn cursor-pointer">
                <span className="text-[#003B49] font-bold text-lg border-b-2 border-[#0EA5E9]/30 group-hover/btn:border-[#0EA5E9] transition-all pb-1">
                  {text[currentLang].vision.cta}
                </span>
                <ArrowRight className={`w-5 h-5 text-[#0EA5E9] transition-transform group-hover/btn:translate-x-2 ${isArabic ? 'rotate-180 group-hover/btn:-translate-x-2' : ''}`} />
              </div>
            </div>
          </div>

          {/* Mission Card - Bold & Dark */}
          <div className="group relative">
            <div className="absolute -inset-4 bg-[#003B49] rounded-[40px] shadow-2xl shadow-blue-900/40 -z-10 transition-transform duration-500 group-hover:scale-[1.02]"></div>

            {/* Visual Flair */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="p-8 lg:p-12 relative overflow-hidden">
              {/* Large watermark icon */}
              <Compass className="absolute -bottom-10 -right-10 w-64 h-64 text-white/[0.03] rotate-12" />

              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-[#F59E0B] transform group-hover:-rotate-6 transition-transform">
                  <Compass className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xl font-bold text-[#F59E0B] block mb-2 uppercase">
                    {text[currentLang].mission.heading}
                  </span>
                  <div className="h-1 w-12 bg-[#F59E0B] rounded-full mb-4"></div>
                </div>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                {text[currentLang].mission.heading}
              </h2>

              <p className="text-xl text-blue-100/80 leading-relaxed mb-10">
                {text[currentLang].mission.description}
              </p>

              <div className="inline-flex items-center gap-2 group/btn cursor-pointer">
                <span className="text-white font-bold text-lg border-b-2 border-[#F59E0B]/30 group-hover/btn:border-[#F59E0B] transition-all pb-1">
                  {text[currentLang].mission.cta}
                </span>
                <ArrowRight className={`w-5 h-5 text-[#F59E0B] transition-transform group-hover/btn:translate-x-2 ${isArabic ? 'rotate-180 group-hover/btn:-translate-x-2' : ''}`} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;