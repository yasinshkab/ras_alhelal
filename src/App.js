import React, { useState, useEffect } from 'react';
import AlNakhlaHeader from './AlNakhlaHeader';
import HeroSectionV2 from './HeroSectionV2';
import CurrencyTicker from './CurrencyTicker';
import WhyChooseUsSection from './WhyChooseUsSection';
import AboutSection from './AboutSection';
import StatisticsSection from './StatisticsSection';
import ServicesSection from './ServicesSection';
import OurValuesSection from './OurValuesSection';
import PaymentMethodsSection from './PaymentMethodsSection';
import ComplianceSection from './ComplianceSection';
import GetInTouchSection from './GetInTouchSection';
import BranchLocatorSection from './BranchLocatorSection';
import Footer from './Footer';
import './App.css';

function App() {
  const [isArabic, setIsArabic] = useState(true);

  useEffect(() => {
    document.documentElement.lang = isArabic ? 'ar' : 'en';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.body.style.direction = isArabic ? 'rtl' : 'ltr';
    document.body.style.textAlign = isArabic ? 'right' : 'left';
  }, [isArabic]);

  return (
    <div className="App">
      <AlNakhlaHeader isArabic={isArabic} setIsArabic={setIsArabic} />
      <HeroSectionV2 isArabic={isArabic} />
      <ServicesSection isArabic={isArabic} />
      <StatisticsSection isArabic={isArabic} />
      <WhyChooseUsSection isArabic={isArabic} />
      <AboutSection isArabic={isArabic} />
      <OurValuesSection isArabic={isArabic} />
      <PaymentMethodsSection isArabic={isArabic} />
      {/* <ComplianceSection isArabic={isArabic} /> */}
      <GetInTouchSection isArabic={isArabic} />
      {/* <BranchLocatorSection isArabic={isArabic} /> */}
      <Footer isArabic={isArabic} />
    </div>
  );
}

export default App;