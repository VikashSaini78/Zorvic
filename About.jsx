import React from 'react';

export default function AboutView() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 font-sans text-[#333333] bg-white">
            <h1 className="text-3xl md:text-5xl font-bold text-center text-black mb-10 tracking-wide">
                About Zenvikk
            </h1>
            <div className="space-y-8 text-[15px] md:text-[17px] leading-relaxed">
                <div>
                    <h2 className="text-xl font-semibold text-black mb-3">Welcome to Zenvikk – Where Style Meets Comfort.</h2>
                    <p>Based in the vibrant heart of Jaipur, <span className="font-semibold text-black">Zenvikk</span> was created with a single vision...</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-black mb-3">Our Mission</h2>
                    <p>We are passionate about bringing you high-quality, trendy footwear without the heavy price tag...</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-black mb-4">Why Choose Zenvikk?</h2>
                    <ul className="space-y-3 pl-1 md:pl-4">
                        <li className="flex items-start"><span className="mr-3 text-black">✓</span><p><strong className="text-black font-medium">Trendsetting Designs:</strong> Stay ahead of the curve with our modern and versatile sneaker collections.</p></li>
                        <li className="flex items-start"><span className="mr-3 text-black">✓</span><p><strong className="text-black font-medium">All-Day Comfort:</strong> Engineered for the perfect fit...</p></li>
                        <li className="flex items-start"><span className="mr-3 text-black">✓</span><p><strong className="text-black font-medium">Unbeatable Value:</strong> We believe top-tier quality should be accessible...</p></li>
                    </ul>
                </div>
                <div className="pt-6 border-t border-gray-200 text-center">
                    <p className="font-medium text-[16px] md:text-[18px] text-black italic">
                        "Step up your shoe game—explore our collection today and find the perfect pair that matches your vibe!"
                    </p>
                </div>
            </div>
        </div>
    );
}