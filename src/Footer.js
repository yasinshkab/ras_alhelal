import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import rasLogo from './assets/logos/ras.png';

const Footer = ({ isArabic }) => {
  const currentLang = isArabic ? 'ar' : 'en';

  return (
    <footer className="bg-[#003B49] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">

          {/* Logo & About */}
          <div className="lg:col-span-1">
            <div className="w-24 h-24 rounded-3xl bg-white p-4 mb-8 flex items-center justify-center transform hover:rotate-6 transition-transform shadow-xl shadow-black/20">
              <img src={rasLogo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-2xl font-black mb-4">
              {isArabic ? 'راس الهلال' : 'Ras Al-Helal'}
            </h2>
            <p className="text-blue-100/60 leading-relaxed">
              {isArabic ? 'شريكك الموثوق في ليبيا للخدمات المالية والصرافة بأعلى معايير الأمان.' : 'Your trusted partner in Libya for financial and exchange services with the highest safety standards.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-black tracking-widest text-[#F59E0B] uppercase mb-8">
              {isArabic ? 'روابط هامة' : 'QUICK LINKS'}
            </h3>
            <ul className="space-y-4">
              <li><a href="#about" className="text-blue-100/60 hover:text-[#0EA5E9] transition-colors">{isArabic ? 'من نحن' : 'About Us'}</a></li>
              <li><a href="#services" className="text-blue-100/60 hover:text-[#0EA5E9] transition-colors">{isArabic ? 'خدماتنا' : 'Services'}</a></li>
              <li><a href="#contact" className="text-blue-100/60 hover:text-[#0EA5E9] transition-colors">{isArabic ? 'تواصل معنا' : 'Contact'}</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-black tracking-widest text-[#F59E0B] uppercase mb-8">
              {isArabic ? 'بيانات التواصل' : 'CONTACT DETAILS'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-blue-100/60">
              <div className="flex items-start gap-4 transition-transform hover:translate-x-1">
                <Phone className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" />
                <span dir="ltr">+218 91 123 4567</span>
              </div>
              <div className="flex items-start gap-4 transition-transform hover:translate-x-1">
                <Mail className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" />
                <span className="break-all">info@rasalhelal.com</span>
              </div>
              <div className="flex items-start gap-4 transition-transform hover:translate-x-1 sm:col-span-2">
                <MapPin className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" />
                <span>{isArabic ? 'شارع المأمون، طرابلس، ليبيا' : 'Al Ma\'mun Street, Tripoli, Libya'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0EA5E9] hover:text-white transition-all"><Facebook size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0EA5E9] hover:text-white transition-all"><Twitter size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0EA5E9] hover:text-white transition-all"><Instagram size={20} /></a>
          </div>

          <p className="text-sm font-medium text-blue-100/30">
            © 2026 Ras Al-Helal Exchange. Built for excellence.
          </p>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9] opacity-5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
    </footer>
  );
};

export default Footer;