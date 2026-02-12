import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import './AboutSection.css';

const AboutSection = ({ isArabic }) => {
  const content = {
    en: {
      subtitle: "ABOUT RAS AL-HELAL",
      title: "Innovative Strategies for Financial Prosperity",
      description: "We provide comprehensive exchange and financial services with a focus on reliability, transparency, and innovation. Our team is dedicated to modernizing the financial sector in Libya.",
      statsValue: "25+",
      statsLabel: "Years of Experience",
      features: [
        "Global Currency Exchange",
        "Secure Financial Transfers",
        "Real-time Market Rates",
        "Professional Consultancy",
        "Digital Payment Solutions",
        "Full Legal Compliance"
      ],
      cta: "Learn More",
      vision: {
        title: "Our Vision",
        description: "To constitute a pivotal force in evolving the financial landscape of Libya, creating a seamless and secure monetary environment."
      },
      mission: {
        title: "Our Mission",
        description: "To deliver innovative currency services that simplify complex financial needs, fostering economic growth through transparency."
      },
      planTitle: "Our Strategy Makes You Feel Secure in Your Financial Future",
      planDesc: "We implement rigorous compliance standards and advanced technological security to ensure your assets are protected at every step."
    },
    ar: {
      subtitle: "عن راس الهلال",
      title: "استراتيجيات مبتكرة للاهداف المالية",
      description: "نحن نقدم خدمات صرف وعملات شاملة مع التركيز على الموثوقية والشفافية والابتكار. فريقنا مكرس لتحديث القطاع المالي في ليبيا.",
      statsValue: "+25",
      statsLabel: "عاماً من الخبرة",
      features: [
        "صرف العملات العالمية",
        "تحويلات مالية آمنة",
        "أسعار السوق اللحظية",
        "استشارات مهنية",
        "حلول الدفع الرقمي",
        "امتثال قانوني كامل"
      ],
      cta: "اقرأ المزيد",
      vision: {
        title: "رؤيتنا",
        description: "أن نكون قوة محورية في تطوير المشهد المالي في ليبيا، وخلق بيئة نقدية سلسة وآمنة."
      },
      mission: {
        title: "رسالتنا",
        description: "تقديم خدمات عملات مبتكرة تبسط الاحتياجات المالية المعقدة، وتعزز النمو الاقتصادي من خلال الشفافية."
      },
      planTitle: "استراتيجيتنا تجعلك تشعر بالأمان في مستقبلك المالي",
      planDesc: "نحن نطبق معايير امتثال صارمة وأماناً تكنولوجياً متقدماً لضمان حماية أصولك في كل خطوة."
    }
  };

  const t = isArabic ? content.ar : content.en;

  return (
    <section id="about" className="about-section py-16" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left: Images Grid */}
          <div className="about-image-grid grid grid-cols-2 gap-6">
            <div className="tall-image overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
                alt="Financial Business Center"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="small-image overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=600&auto=format&fit=crop"
                  alt="Global Currency"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="stats-card">
                <span>{t.statsValue}</span>
                <p>{t.statsLabel}</p>
              </div>
            </div>
          </div>

          {/* Right: Content Card */}
          <div className="about-content-card p-6 lg:p-10">
            <span className="text-base font-bold text-[#F59E0B] block mb-2 uppercase">
              {isArabic ? 'عن رأس الهلال' : 'About Us'}
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#003B49] mb-6 leading-tight">
              {isArabic ? 'عن رأس الهلال' : 'About Us'}
            </h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              {t.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {t.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-[#0EA5E9]" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="about-cta-btn px-10 py-4 rounded-full font-bold flex items-center gap-2">
              {t.cta}
              <ArrowRight className={`w-5 h-5 ${isArabic ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Bottom Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Vision/Mission Stack */}
          <div className="flex flex-col gap-6">
            <div className="vision-mission-card p-10 flex flex-col items-start">
              <span className="badge-label px-6 py-2 rounded-full text-lg font-bold mb-6">
                {t.vision.title}
              </span>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t.vision.description}
              </p>
            </div>
            <div className="vision-mission-card p-10 flex flex-col items-start">
              <span className="badge-label px-6 py-2 rounded-full text-lg font-bold mb-6">
                {t.mission.title}
              </span>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t.mission.description}
              </p>
            </div>
          </div>

          {/* Right: Large Strategy Card */}
          <div className="strategy-card group">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
              alt="Strategy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="overlay absolute inset-0 flex flex-col items-center justify-center text-center p-10 lg:p-16">
              <h3 className="text-white text-3xl lg:text-5xl font-black mb-6 leading-tight max-w-md">
                {t.planTitle}
              </h3>
              <p className="text-gray-200 text-lg lg:text-xl max-w-lg leading-relaxed">
                {t.planDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default AboutSection;