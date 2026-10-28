import React, { useEffect, useState } from 'react';

export default function Footer() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPosition = window.scrollY;
            const progress = totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0;
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const radius = 22;
    const circumference = 2 * Math.PI * radius;
    const strokeOffset = circumference - (scrollProgress / 100) * circumference;

    return (
        <footer className="bg-[#111111] pt-16 pb-8 px-6 md:px-12 text-white font-sans relative mt-auto">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                    <div>
                        <h3 className="font-bold text-sm uppercase tracking-wide mb-6">Customer Service</h3>
                        <div className="space-y-3 text-[14px]">
                            <p>Phone: +91 8875768157</p>
                            <p>E-mail: vs592928@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-sm uppercase tracking-wide mb-6">Company</h3>
                        <div className="space-y-3 text-[14px]">
                            <p>Zenvikk</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-sm uppercase tracking-wide mb-6">Our Address</h3>
                        <div className="space-y-4 text-[14px]">
                            <p className="leading-relaxed">Banskhoh, Bassi, Jaipur, Rajasthan</p>
                            <div className="pt-6">
                                <form className="relative border-b border-gray-400 pb-2">
                                    <input 
                                        type="email" 
                                        placeholder="Your email address" 
                                        required
                                        className="bg-transparent outline-none w-full pr-20 text-[14px] placeholder-gray-400 text-white"
                                    />
                                    <button type="submit" className="absolute right-0 bottom-2 font-bold text-[14px] hover:text-gray-300 transition">
                                        Subscribe
                                    </button>
                                </form>
                                <p className="text-[12px] text-gray-400 mt-2">*Don't worry we don't spam</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 md:mt-24 flex flex-wrap gap-6 md:gap-10 text-[13px] md:text-[14px] font-bold text-white">
                    <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                    <a href="/refund-policy" className="hover:underline">Refund Policy</a>
                    <a href="/shipping-policy" className="hover:underline">Shipping Policy</a>
                    <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
                </div>
            </div>

            {/* Floating Action Buttons */}
            <div className="fixed bottom-6 right-6 flex flex-col gap-5 z-50 items-center">
                <a 
                    href="https://wa.me/918875768157" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition duration-300"
                    aria-label="Chat on WhatsApp"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                </a>

                <div 
                    onClick={scrollToTop}
                    className={`relative w-14 h-14 cursor-pointer transition-opacity duration-500 ease-in-out ${scrollProgress > 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 50 50">
                        <circle cx="25" cy="25" r={radius} fill="#111111" stroke="#333333" strokeWidth="3" />
                        <circle 
                            cx="25" cy="25" r={radius} fill="none" stroke="#ffffff" 
                            strokeWidth="3" strokeLinecap="round" strokeDasharray={circumference}
                            strokeDashoffset={strokeOffset} className="transition-all duration-300 ease-out"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-white pb-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m18 15-6-6-6 6"/>
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    );
}