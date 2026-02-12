import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import rasLogo from './assets/logos/ras.png';

const Header = ({ isArabic, setIsArabic }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = isArabic ? 'ar' : 'en';
  }, [isArabic]);

  const navLinks = {
    en: [
      { href: "#hero-section", text: "Home" },
      { href: "#services", text: "Services" },
      { href: "#rate-calculator", text: "Exchange Rates" },
      { href: "#about", text: "About Us" },
      { href: "#contact", text: "Contact Us" }
    ],
    ar: [
      { href: "#hero-section", text: "الرئيسية" },
      { href: "#services", text: "خدماتنا" },
      { href: "#rate-calculator", text: "أسعار العملات" },
      { href: "#about", text: "من نحن" },
      { href: "#contact", text: "اتصل بنا" }
    ]
  };

  const currentLang = isArabic ? 'ar' : 'en';

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 px-4 sm:px-6 lg:px-8 ${isScrolled ? 'py-2' : 'py-4'}`}
    >
      <div
        className={`mx-auto max-w-7xl bg-white/95 backdrop-blur-md rounded-[100px] border border-white/20 shadow-xl transition-all duration-500 ${isScrolled ? 'h-14' : 'h-16 md:h-20'} transform px-6 md:px-10 flex items-center justify-between`}
      >
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center gap-3">
          <a href="#" className="flex items-center gap-3 group">
            <div className={`flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 ${isScrolled ? 'w-10 h-10 md:w-11 md:h-11' : 'w-16 h-16'}`}>
              <img src={rasLogo} alt="Ras Al-Helal" className="w-full h-full object-contain" />
            </div>
            <span className={`hidden sm:block font-extrabold tracking-tighter text-xl transition-all duration-500 ${isScrolled ? 'text-lg' : 'text-xl'} ${isArabic ? 'font-tajawal' : 'font-sans'}`} style={{ color: 'var(--primary-blue)' }}>
              {isArabic ? 'رأس الهلال' : 'RAS AL-HELAL'}
            </span>
          </a>
        </div>

        {/* Desktop Navigation (Centered) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks[currentLang].map(link => (
            <a
              key={link.text}
              href={link.href}
              className="text-sm md:text-base font-semibold text-gray-700 hover:text-[var(--primary-green)] transition-all duration-300 relative group"
            >
              {link.text}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary-green)] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Actions Section */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setIsArabic(!isArabic)}
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[var(--primary-blue)] px-3 py-2 rounded-full transition-colors"
          >
            <Globe size={18} />
            {isArabic ? 'English' : 'عربي'}
          </button>

          <a
            href="#contact"
            className="bg-[var(--primary-blue)] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-black transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            {isArabic ? 'تواصل معنا' : 'Get in Touch'}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-full hover:bg-gray-100 text-gray-700 transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-24 left-4 right-4 bg-white/98 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-300">
          {navLinks[currentLang].map(link => (
            <a
              key={link.text}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 font-bold text-lg py-3 px-4 rounded-2xl hover:bg-[var(--primary-green)]/10 hover:text-[var(--primary-green)] transition-all"
            >
              {link.text}
            </a>
          ))}
          <div className="h-px bg-gray-100 my-2"></div>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setIsArabic(!isArabic)}
              className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-2xl text-gray-700 font-bold"
            >
              <span className="flex items-center gap-2"><Globe size={20} /> {isArabic ? 'English' : 'عربي'}</span>
            </button>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[var(--primary-blue)] text-white text-center py-4 rounded-2xl font-bold shadow-lg"
            >
              {isArabic ? 'تواصل معنا' : 'Get in Touch'}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;