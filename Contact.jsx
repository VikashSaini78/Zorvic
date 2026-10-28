import React from 'react';

export default function ContactView() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 bg-white">
            <div className="text-center mb-10">
                <h1 className="text-2xl md:text-3xl font-bold text-black tracking-wide">Contact Information</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
                <div className="p-6 bg-[#f9f9f9] border border-gray-100 rounded-xl hover:border-black transition duration-300">
                    <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">Trade Name</p>
                    <p className="text-[15px] md:text-[16px] text-black font-semibold">Zenvikk</p>
                </div>
                <div className="p-6 bg-[#f9f9f9] border border-gray-100 rounded-xl hover:border-black transition duration-300">
                    <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">Email Support</p>
                    <a href="mailto:vs592928@gmail.com" className="text-[15px] md:text-[16px] text-black font-semibold hover:underline">vs592928@gmail.com</a>
                </div>
                <div className="p-6 bg-[#f9f9f9] border border-gray-100 rounded-xl hover:border-black transition duration-300">
                    <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">Phone Number</p>
                    <a href="tel:+918875768157" className="text-[15px] md:text-[16px] text-black font-semibold hover:underline">+91 8875768157</a>
                </div>
                <div className="p-6 bg-[#f9f9f9] border border-gray-100 rounded-xl hover:border-black transition duration-300">
                    <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">Physical Address</p>
                    <p className="text-[15px] md:text-[16px] text-black font-semibold leading-relaxed">Banskhoh, Bassi, Jaipur, Rajasthan</p>
                </div>
            </div>
        </div>
    );
}