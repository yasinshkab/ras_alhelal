import React from 'react';
import agreementIcon from './assets/icons/agreement-icon.png';
import analyticsIcon from './assets/icons/analytics-icon.png';
import bankIcon from './assets/icons/bank-icon.png';
import rasLogo from './assets/logos/ras.png';

const OurValuesSection = ({ isArabic }) => {
  const text = {
    en: {
      subtitle: "OUR VALUES",
      title: "The Principles That Define Us",
      features: [
        {
          title: "Integrity & Transparency",
          description: "Full commitment to transparency and professional standards in all our exchange services.",
          icon: agreementIcon
        },
        {
          title: "Regulatory Compliance",
          description: "Complete adherence to local and international financial laws and regulatory frameworks.",
          icon: bankIcon
        },
        {
          title: "Client Protection",
          description: "Ensuring the absolute security of our clients' funds and sensitive personal data.",
          icon: analyticsIcon
        },
        {
          title: "Quality Excellence",
          description: "Delivering exceptional service quality that consistently exceeds market expectations.",
          icon: agreementIcon
        },
        {
          title: "Continuous Innovation",
          description: "Constantly evolving our services and technical capabilities to serve you better.",
          icon: bankIcon
        }
      ]
    },
    ar: {
      subtitle: "قيمنا",
      title: "المبادئ التي تميزنا",
      features: [
        {
          title: "النزاهة والشفافية",
          description: "الالتزام الكامل بالشفافية والمعايير المهنية في جميع خدمات الصرافة لدينا.",
          icon: agreementIcon
        },
        {
          title: "الالتزام بالقوانين واللوائح",
          description: "الالتزام الكامل بالتشريعات والأنظمة المالية المحلية والدولية المعمول بها.",
          icon: bankIcon
        },
        {
          title: "حماية أموال وبيانات العملاء",
          description: "ضمان أعلى مستوى من الأمان لأصول ومعلومات العملاء الحساسة.",
          icon: analyticsIcon
        },
        {
          title: "الجودة في تقديم الخدمات",
          description: "تقديم جودة خدمة استثنائية تفوق توقعات السوق باستمرار.",
          icon: agreementIcon
        },
        {
          title: "التطوير المستمر",
          description: "التحسين المستمر لخدماتنا وقدراتنا التقنية لخدمتكم بشكل أفضل.",
          icon: bankIcon
        }
      ]
    }
  };

  const currentLang = isArabic ? 'ar' : 'en';
  const content = text[currentLang];

  return (
    <section id="values" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Side: Sticky Information */}
          <div className="lg:w-2/5">
            <div className={`lg:sticky lg:top-36 ${isArabic ? 'text-right' : 'text-left'}`}>
              <span className="text-base font-bold text-[#F59E0B] tracking-[0.2em] block mb-3 uppercase">
                {content.subtitle}
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-[#003B49] mb-8 leading-tight">
                {content.title}
              </h2>

              <div className="hidden lg:block relative mt-12 p-10 bg-gray-50 rounded-[40px] border border-gray-100 group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0EA5E9]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <img
                  src={rasLogo}
                  alt="Ras Al-Helal Logo"
                  className="w-full h-auto max-w-[200px] mx-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="mt-8 text-center">
                  <div className="h-1.5 w-16 bg-[#003B49] mx-auto rounded-full"></div>
                  <p className="mt-4 text-sm font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                    {isArabic ? 'رأس الهلال للصرافة' : 'Ras Al-Helal Exchange'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: List of Values */}
          <div className="lg:w-3/5">
            <div className="space-y-6">
              {content.features.map((feature, index) => (
                <div
                  key={index}
                  className={`group bg-white p-8 lg:p-10 rounded-[32px] border border-gray-100 hover:border-[#0EA5E9]/30 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col md:flex-row items-center md:items-start gap-8 ${isArabic ? 'md:flex-row-reverse text-right' : 'text-left'}`}
                >
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gray-50 group-hover:bg-[#003B49] transition-colors duration-500 flex items-center justify-center p-4">
                    <img
                      src={feature.icon}
                      alt=""
                      className="w-full h-full object-contain group-hover:invert group-hover:brightness-0 transition-all duration-500"
                    />
                  </div>

                  <div className="flex-1">
                    <div className={`flex items-center gap-4 mb-3 ${isArabic ? 'flex-row-reverse' : ''}`}>
                      <span className="text-xs font-black text-[#F59E0B] tracking-widest opacity-40">
                        0{index + 1}
                      </span>
                      <h3 className="text-2xl font-black text-[#003B49] leading-tight">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-500 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;