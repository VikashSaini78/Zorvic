import React, { useState, useEffect } from 'react';
import ShoeCard from './ShoeCard';
import { ShieldCheck, CheckCircle } from 'lucide-react';
import { shoesData, collectionsData } from './mockData';

// baaki ka code waisa hi rahega...

export default function HomeView({ navigateTo }) {
    const nikeShoes = shoesData.filter(s => s.brand === 'Nike').slice(0, 8);
    const [currentSlide, setCurrentSlide] = useState(0);

    const heroBanners = [
        "/Sneaker/Kick Start the Streets.png",
        "/Sneaker/baner 2.png",
        "/Sneaker/baner 1.png"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
        }, 3000); 
        return () => clearInterval(timer);
    }, [heroBanners.length]);

    return (
        <div className="bg-white animate-in fade-in duration-500 ">
            {/* Auto Scrolling Hero Banner */}
            <section className="relative w-full md:h-[70vh] bg-white overflow-hidden cursor-pointer" onClick={() => navigateTo('catalog')}>
                {heroBanners && heroBanners.length > 0 && (
                    <img src={heroBanners[0]} className="w-full h-auto invisible md:hidden" alt="spacer" />
                )}
                {heroBanners.map((banner, index) => (
                    <div 
                        key={index} 
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <img src={banner} alt={`Banner ${index + 1}`} className="w-full h-full object-contain md:object-cover" />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                ))}
            </section>

            {/* Features Bar */}
            <div className="w-full bg-white py-4 border-b border-gray-100 flex justify-center gap-4 sm:gap-16 px-4 overflow-x-auto hide-scroll text-[9px] sm:text-[10px] text-gray-600 font-light uppercase tracking-widest text-center whitespace-nowrap">
                <div className="flex flex-col items-center gap-1.5"><ShieldCheck size={16} strokeWidth={1} /> <span>Premium Quality</span></div>
                <div className="flex flex-col items-center gap-1.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg> <span>All Day Comfort</span></div>
                <div className="flex flex-col items-center gap-1.5"><CheckCircle size={16} strokeWidth={1} /> <span>Durable & Reliable</span></div>
                <div className="flex flex-col items-center gap-1.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg> <span>Easy Returns</span></div>
            </div>

            {/* Collections */}
            <section className="pt-[48px] md:pt-20 pb-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-10">
                    <h2 className="text-3xl font-semibold tracking-tight">Shop by collection</h2>
                </div>
                <div className="flex overflow-x-auto gap-4 pb-4 snap-x hide-scroll">
                    {collectionsData.map((col, idx) => (
                        <div 
                            key={idx} 
                            className="snap-center shrink-0 w-[220px] sm:w-[280px] flex flex-col items-center cursor-pointer group" 
                            onClick={() => navigateTo('catalog', col.brand)}
                        >
                            <div className="w-full aspect-[4/3] flex flex-col items-center justify-center p-4 bg-white">
                                <h3 className="text-xl font-black italic tracking-tighter mb-4 text-black">{col.brand}</h3>
                                <img src={col.image} alt={col.name} className="w-[80%] object-contain group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <p className="mt-4 text-[13px] text-black font-light">{col.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Nike sneakers */}
            <section className="py-16 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="flex justify-between items-end mb-10">
                    <h2 className="text-3xl font-semibold tracking-tight">Nike sneakers</h2>
                    <span onClick={() => navigateTo('catalog', 'Nike')} className="text-[13px] text-black font-light cursor-pointer hover:underline">View all</span>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 sm:gap-x-8">
                    {nikeShoes.map(shoe => <ShoeCard key={shoe.id} shoe={shoe} onClick={() => navigateTo('product', shoe)} />)}
                </div>
            </section>

            <div>
                <img src='/Sneaker/footer banner.png' alt="footer banner"/>
            </div>
        </div>
    );
}