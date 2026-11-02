import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function ShoeCard({ shoe, onClick }) {
    const images = shoe.gallery && shoe.gallery.length > 0 ? shoe.gallery : [shoe.image];

    return (
        <div className="group flex flex-col relative bg-white">
            <div className="relative w-full aspect-square flex overflow-x-auto snap-x snap-mandatory hide-scroll cursor-pointer" onClick={onClick}>
                {images.map((img, idx) => (
                    <div key={idx} className="w-full h-full flex-shrink-0 snap-center p-2 flex items-center justify-center bg-white">
                        <img src={img} alt={`${shoe.name} view ${idx + 1}`} className="w-full h-full object-contain" />
                    </div>
                ))}
            </div>

            <div className="absolute bottom-24 right-4 bg-white/90 p-2 rounded-full opacity-0 md:group-hover:opacity-100 transition-all shadow-sm border border-gray-100 cursor-pointer hover:bg-black hover:text-white" onClick={(e) => { e.stopPropagation(); onClick(); }}>
                <ShoppingBag size={14} strokeWidth={1.5} />
            </div>

            {images.length > 1 && (
                <div className="flex justify-center gap-1 mt-2 mb-1">
                    {images.map((_, idx) => (
                        <div key={idx} className="w-1 h-1 rounded-full bg-gray-300" />
                    ))}
                </div>
            )}

            <div className="pt-2 text-left cursor-pointer" onClick={onClick}>
                <h3 className="text-[13px] font-normal text-black leading-snug">{shoe.name}</h3>
                <p className="text-[13px] font-normal text-black mt-1">Rs. {shoe.price.toFixed(2)}</p>
            </div>
        </div>
    );
}