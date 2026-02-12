import React, { useEffect, useState, useCallback } from 'react';
import { ArrowUp, ArrowDown, DollarSign, Euro, PoundSterling } from 'lucide-react';

const CurrencyTicker = ({ isArabic }) => {
    const [usdRate, setUsdRate] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch USD Rate (Reusing logic from UsdRateDisplay)
    const fetchUsdRate = useCallback(async () => {
        try {
            const cached = localStorage.getItem('usd-rate-cache');
            if (cached) {
                const parsed = JSON.parse(cached);
                const cacheAge = Date.now() - parsed.timestamp;
                if (cacheAge < 30 * 60 * 1000) {
                    setUsdRate(parsed.data);
                    setLoading(false);
                    return;
                }
            }

            const response = await fetch('https://cbl-proxy.alharethalalem.workers.dev/');
            if (response.ok) {
                const apiData = await response.json();
                if (apiData.status === 'success' && apiData.data?.length > 0) {
                    const usdData = apiData.data[0];
                    const buy = parseFloat(usdData.buy.replace(/\.$/, '')) || 0;
                    const sell = parseFloat(usdData.sell.replace(/\.$/, '')) || 0;
                    const avg = parseFloat(usdData.avg.replace(/\.$/, '')) || 0;

                    if (buy > 0) {
                        const newData = { buy, sell, average: avg, updated_at: usdData.date };
                        setUsdRate(newData);
                        localStorage.setItem('usd-rate-cache', JSON.stringify({ data: newData, timestamp: Date.now() }));
                    }
                }
            }
        } catch (err) {
            console.error("Failed to fetch rates", err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUsdRate();
    }, [fetchUsdRate]);

    // Derived Rates (Mocking EUR/GBP based on USD for demo, or hardcoded realistic offsets if API unavailable)
    // Assuming EUR ~ USD * 1.05, GBP ~ USD * 1.2
    const rates = [
        {
            code: 'USD/LYD',
            icon: DollarSign,
            rate: usdRate ? usdRate.average.toFixed(4) : '---',
            change: '+0.05%' // Mock change
        },
        {
            code: 'EUR/LYD',
            icon: Euro,
            rate: usdRate ? (usdRate.average * 1.08).toFixed(4) : '---',
            change: '-0.02%'
        },
        {
            code: 'GBP/LYD',
            icon: PoundSterling,
            rate: usdRate ? (usdRate.average * 1.25).toFixed(4) : '---',
            change: '+0.10%'
        }
    ];

    return (
        <div className="w-full bg-white/5 backdrop-blur-xl border-t border-white/10 py-6 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Desktop: Grid/Flex with subtle motion */}
                <div className="flex flex-nowrap md:justify-center items-center gap-6 animate-scroll-horizontal md:animate-none overflow-x-auto no-scrollbar">
                    {rates.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-white/10 px-8 py-3 rounded-2xl backdrop-blur-md border border-white/10 min-w-[240px] hover:bg-white/20 transition-all cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-[#F59E0B]/20 rounded-xl group-hover:scale-110 transition-transform">
                                    <item.icon size={20} className="text-[#F59E0B]" />
                                </div>
                                <span className="font-bold text-base tracking-widest text-white/80">{item.code}</span>
                            </div>
                            <div className="h-8 w-px bg-white/10 mx-2"></div>
                            <span className="font-mono text-xl font-black text-white drop-shadow-sm">
                                {item.rate}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                @keyframes scroll-horizontal {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll-horizontal {
                    display: flex;
                    width: max-content;
                }
                @media (max-width: 768px) {
                    .animate-scroll-horizontal {
                        animation: scroll-horizontal 20s linear infinite;
                    }
                }
            `}</style>
        </div>
    );
};

export default CurrencyTicker;
