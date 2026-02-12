import React from 'react';
import sadadLogo from './assets/payment-methods/sadad-logo.png';
import lypayLogo from './assets/payment-methods/lypay-logo.png';
import getcustomerLogo from './assets/payment-methods/getcustomer-logo.png';

const PaymentMethodsSection = ({ isArabic }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <span className="text-xl font-bold text-[#F59E0B] block mb-2 uppercase">
            {isArabic ? 'شركاء الدفع' : 'Payment Partners'}
          </span>
          <h2 className="text-5xl lg:text-7xl font-black text-[#003B49] leading-tight">
            {isArabic ? 'شركاء الدفع' : 'Payment Partners'}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 lg:gap-32">
          <img src={sadadLogo} alt="Sadad" className="h-20 md:h-28 w-auto object-contain transition-all duration-500 hover:scale-110" />
          <img src={lypayLogo} alt="LyPay" className="h-20 md:h-28 w-auto object-contain transition-all duration-500 hover:scale-110" />
          <img src={getcustomerLogo} alt="GetCustomer" className="h-20 md:h-28 w-auto object-contain transition-all duration-500 hover:scale-110" />
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodsSection;