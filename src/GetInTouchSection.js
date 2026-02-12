import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const GetInTouchSection = ({ isArabic }) => {
  const currentLang = isArabic ? 'ar' : 'en';

  const text = {
    en: {
      title: "Get In Touch",
      description: "We'd love to hear from you! Whether you have questions, need support, or want to learn more about our services, our team is here to help.",
      addressTitle: "Our Address",
      address: "Al Ma'mun Street, Tripoli, Libya",
      contactTitle: "Our Contact Info",
      phone: "+218 91 123 4567",
      email: "info@rasalhelal.com",
      getDirections: "Get Directions"
    },
    ar: {
      title: "تواصل معنا",
      description: "يسعدنا دائماً الاستماع إليكم! سواء كانت لديكم استفسارات، أو تحتاجون إلى دعم، أو ترغبون في معرفة المزيد عن خدماتنا، فريقنا هنا للمساعدة.",
      addressTitle: "عنواننا",
      address: "شارع المأمون، طرابلس، ليبيا",
      contactTitle: "معلومات التواصل",
      phone: "+218 91 123 4567",
      email: "info@rasalhelal.com",
      getDirections: "احصل على الاتجاهات"
    }
  };

  const mapUrl = "https://www.google.com/maps?q=Al+Ma'mun+Street,+Tripoli,+Libya&output=embed";
  const directionsUrl = "https://maps.app.goo.gl/cKd1oByZK6hYF5aV6";

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Content Row */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between mb-16 gap-12">
            {/* Left/Start: Heading and Description */}
            <div className={`lg:w-1/2 ${isArabic ? 'text-right' : 'text-left'}`}>
              <span className="text-xl font-bold text-[#F59E0B] block mb-2 uppercase">
                {text[currentLang].title}
              </span>
              <h2 className="text-5xl lg:text-7xl font-black text-[#003B49] mb-8 leading-tight">
                {text[currentLang].title}
              </h2>
              <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
                {text[currentLang].description}
              </p>
            </div>

            {/* Right/End: Info Blocks */}
            <div className={`lg:w-1/2 flex flex-col sm:flex-row gap-12 lg:justify-end ${isArabic ? 'text-right' : 'text-left'}`}>
              {/* Address Block */}
              <div className="flex flex-col gap-4">
                <div className={`w-12 h-12 rounded-2xl bg-[#0EA5E9]/10 flex items-center justify-center ${isArabic ? 'mr-0' : 'ml-0'}`}>
                  <MapPin className="w-6 h-6 text-[#0EA5E9]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#003B49] mb-3">
                    {text[currentLang].addressTitle}
                  </h3>
                  <p className="text-gray-500 leading-relaxed max-w-[200px]">
                    {text[currentLang].address}
                  </p>
                </div>
              </div>

              {/* Contact Info Block */}
              <div className="flex flex-col gap-4">
                <div className={`w-12 h-12 rounded-2xl bg-[#0EA5E9]/10 flex items-center justify-center ${isArabic ? 'mr-0' : 'ml-0'}`}>
                  <Phone className="w-6 h-6 text-[#0EA5E9]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#003B49] mb-3">
                    {text[currentLang].contactTitle}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-gray-500 font-medium" dir="ltr">{text[currentLang].phone}</p>
                    <p className="text-gray-500 font-medium">{text[currentLang].email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Map Implementation */}
        <div className="relative group">
          <div className="h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 relative">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Map"
              className="grayscale-[0.2] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0"
            ></iframe>

            {/* Floating Get Directions Button */}
            <div className={`absolute bottom-10 ${isArabic ? 'right-10' : 'left-10'}`}>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-5 bg-[#003B49] text-white rounded-2xl font-black shadow-xl hover:bg-[#F59E0B] transition-all transform hover:-translate-y-1 group/btn"
              >
                <span>{text[currentLang].getDirections}</span>
                <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Decorative accents around map */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F59E0B]/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#0EA5E9]/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;


