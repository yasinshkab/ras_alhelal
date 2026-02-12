import React from 'react';
import complianceImage from './assets/general/compliance-badge.png';

const ComplianceSection = ({ isArabic }) => {
  const text = {
    en: {
      title: "Committed to Legal Excellence",
      description: "We operate within the legal frameworks of Libya, ensuring all our services maintain the highest standards of compliance and professional integrity.",
      caution: "We are committed to working within the legal frameworks in force in the State of Libya, and we ensure that all our services are of an informational and advisory nature, based on professionalism and accuracy."
    },
    ar: {
      title: "ملتزمون بالتميز القانوني",
      description: "نعمل ضمن الأطر القانونية في ليبيا، مما يضمن أن جميع خدماتنا تحافظ على أعلى معايير الامتثال والنزاهة المهنية.",
      caution: "نلتزم بالعمل ضمن الأطر القانونية المعمول بها في دولة ليبيا، ونحرص على أن تكون جميع خدماتنا ذات طابع تعريفي واستشاري، قائمة على المهنية والدقة."
    }
  };

  const currentLang = isArabic ? 'ar' : 'en';

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#003B49] shadow-xl ring-1 ring-white/10 isolate">
          {/* Decorative background elements to break the generic feel */}
          <div className="absolute -top-24 -right-24 -z-10 h-64 w-64 rounded-full bg-[#0EA5E9] opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 -z-10 h-64 w-64 rounded-full bg-[#F59E0B] opacity-10 blur-3xl"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between p-8 sm:p-12 lg:p-16 gap-10">
            {/* Content Side */}
            <div className="w-full lg:w-2/3 flex flex-col gap-6">
              <div>
                <span className="text-xl font-bold text-[#F59E0B] block mb-2 uppercase">
                  {isArabic ? 'الامتثال القانوني' : 'Legal Compliance'}
                </span>
                <div className="h-1 w-12 bg-[#F59E0B] rounded-full mb-6"></div>
              </div>

              <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                {isArabic ? 'الامتثال القانوني' : 'Legal Compliance'}
              </h2>

              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl">
                {text[currentLang].description}
              </p>

              {/* Disclaimer / Caution Note - Adds "official" depth */}
              <div className="mt-4 pt-6 border-t border-white/10">
                <p className="text-xs sm:text-sm text-gray-400 leading-normal">
                  {text[currentLang].caution}
                </p>
              </div>
            </div>

            {/* Image Side */}
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end relative">
              <div className="relative z-10 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg">
                <img
                  src={complianceImage}
                  alt="Compliance Badge"
                  className="w-40 h-auto sm:w-48 lg:w-56 object-contain drop-shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;