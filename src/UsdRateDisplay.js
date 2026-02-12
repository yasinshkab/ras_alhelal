import React, { useEffect, useState, useCallback } from 'react';
import centralBank from './assets/logos/central-bank-libya.png';
import { RefreshCw, AlertCircle, TrendingUp, TrendingDown, Building2 } from 'lucide-react';

const UsdRateDisplay = ({ isArabic }) => {
  const [data, setData] = useState(() => {
    const cached = localStorage.getItem('usd-rate-cache');
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        const cacheAge = Date.now() - parsed.timestamp;
        if (cacheAge < 30 * 60 * 1000) return parsed.data;
      } catch (e) {
        localStorage.removeItem('usd-rate-cache');
      }
    }
    return null;
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const text = {
    en: {
      currentRate: "Official Exchange Rate",
      fromCBL: "Central Bank of Libya Data",
      buyingRate: "Buy",
      sellingRate: "Sell",
      lastUpdated: "Last Updated",
      loading: "Updating rates...",
      unavailable: "Service Unavailable",
      errorMessage: "Could not fetch rates",
      note: "Rates are for reference only."
    },
    ar: {
      currentRate: "سعر الصرف الرسمي",
      fromCBL: "بيانات مصرف ليبيا المركزي",
      buyingRate: "شراء",
      sellingRate: "بيع",
      lastUpdated: "آخر تحديث",
      loading: "جاري التحديث...",
      unavailable: "الخدمة غير متاحة",
      errorMessage: "تعذر تحديث الأسعار",
      note: "الأسعار للاسترشاد فقط."
    }
  };

  const fetchUsdRate = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch('https://cbl-proxy.alharethalalem.workers.dev/', {
        signal: controller.signal,
        headers: { 'Accept': 'application/json', 'Cache-Control': 'no-cache' }
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const apiData = await response.json();
        if (apiData.status === 'success' && apiData.data?.length > 0) {
          const usdData = apiData.data[0];
          const buyRate = parseFloat(usdData.buy.replace(/\.$/, '')) || 0;
          const sellRate = parseFloat(usdData.sell.replace(/\.$/, '')) || 0;
          const avgRate = parseFloat(usdData.avg.replace(/\.$/, '')) || 0;

          if (buyRate > 0 && sellRate > 0) {
            const newData = {
              buy: buyRate,
              sell: sellRate,
              average: avgRate || (buyRate + sellRate) / 2,
              updated_at: usdData.date,
              source: "Central Bank of Libya"
            };
            setData(newData);
            localStorage.setItem('usd-rate-cache', JSON.stringify({
              data: newData,
              timestamp: Date.now()
            }));
            setLoading(false);
            return;
          }
        }
      }
      throw new Error('Invalid API response');
    } catch (err) {
      console.error('Error fetching rates:', err);
      setError(true);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsdRate();
    const interval = setInterval(fetchUsdRate, 3600000);
    return () => clearInterval(interval);
  }, []);

  const currentLang = isArabic ? 'ar' : 'en';

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden w-full max-w-sm mx-auto transform transition-all hover:scale-[1.01] relative z-20">

      {/* Header */}
      <div className="bg-[var(--primary-blue)] p-5 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3"></div>

        <div className="relative z-10">
          <h3 className="text-white font-bold text-lg lg:text-xl mb-1 flex items-center justify-center gap-2">
            <Building2 className="w-5 h-5 text-[var(--secondary-accent)]" />
            {text[currentLang].currentRate}
          </h3>
          <p className="text-blue-100 text-xs font-medium tracking-wide opacity-80">
            {text[currentLang].fromCBL}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6">

        {/* CBL Logo */}
        <div className="flex justify-center -mt-2 mb-2">
          <div className="p-2 bg-white rounded-full shadow-sm border border-gray-100">
            <img src={centralBank} alt="CBL" className="w-12 h-12 object-contain" />
          </div>
        </div>

        {loading ? (
          <div className="text-center py-8 space-y-3">
            <RefreshCw className="w-8 h-8 text-[var(--primary-green)] animate-spin mx-auto" />
            <p className="text-sm text-gray-500 font-medium">{text[currentLang].loading}</p>
          </div>
        ) : error ? (
          <div className="text-center py-8 space-y-3 bg-red-50 rounded-xl">
            <AlertCircle className="w-8 h-8 text-red-500 mx-auto" />
            <p className="text-sm text-red-600 font-medium">{text[currentLang].errorMessage}</p>
            <button onClick={fetchUsdRate} className="text-xs text-red-500 underline hover:text-red-700">Retry</button>
          </div>
        ) : data ? (
          <>
            {/* Main Center Rate */}
            <div className="text-center space-y-1">
              <span className="text-3xl lg:text-4xl font-extrabold text-[var(--primary-blue)] tracking-tight">
                {data.average.toFixed(4)}
              </span>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">USD / LYD</p>
            </div>

            {/* Grid Rates */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100 hover:border-[var(--primary-green)] transition-colors group">
                <p className="text-xs text-gray-500 mb-1 group-hover:text-[var(--primary-green)] transition-colors">{text[currentLang].buyingRate}</p>
                <p className="text-xl font-bold text-gray-800">{data.buy.toFixed(4)}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100 hover:border-[var(--secondary-accent)] transition-colors group">
                <p className="text-xs text-gray-500 mb-1 group-hover:text-[var(--secondary-accent)] transition-colors">{text[currentLang].sellingRate}</p>
                <p className="text-xl font-bold text-gray-800">{data.sell.toFixed(4)}</p>
              </div>
            </div>

            {/* Footer Info */}
            <div className="pt-4 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-400 mb-1">
                {text[currentLang].lastUpdated}: {new Date(data.updated_at).toLocaleDateString(currentLang === 'ar' ? 'ar-LY' : 'en-US')}
              </p>
              <p className="text-[10px] text-gray-300">
                {text[currentLang].note}
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-8 text-gray-400">
            {text[currentLang].unavailable}
          </div>
        )}
      </div>
    </div>
  );
};

export default UsdRateDisplay;