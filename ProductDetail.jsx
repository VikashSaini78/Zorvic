import React, { useState, useEffect } from 'react';
import { ArrowLeft, Truck, ShieldCheck } from 'lucide-react';
import { shoeSizes } from './mockData';

// baaki ka code waisa hi rahega...

export default function ProductDetailView({ shoe, onBack, onAddToCart, onBuyNow }) {
    const [selectedSize, setSelectedSize] = useState("8");
    const [activeImage, setActiveImage] = useState(shoe.image);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
        setActiveImage(shoe.gallery?.[0] || shoe.image);
        setQuantity(1);
    }, [shoe]);

    const images = shoe.gallery && shoe.gallery.length > 0 ? shoe.gallery : [shoe.image];

    return (
        <div className="bg-white min-h-screen animate-in fade-in duration-300 pb-24">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                
                <button onClick={onBack} className="flex items-center gap-2 text-[11px] text-gray-500 hover:text-black transition mb-8">
                    <ArrowLeft size={14} strokeWidth={1} /> Back
                </button>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
                    
                    <div className="w-full lg:w-[50%] flex flex-col gap-4">
                        <div className="bg-[#f7f7f7] aspect-[4/3] sm:aspect-square lg:aspect-[4/3] relative flex items-center justify-center p-8 rounded-md">
                            <img src={activeImage} alt={shoe.name} className="w-full h-full object-contain mix-blend-multiply" />
                        </div>
                        
                        <div className="flex overflow-x-auto gap-4 pb-4 snap-x hide-scroll">
                            {images.map((img, idx) => (
                                <div 
                                    key={idx} 
                                    onClick={() => setActiveImage(img)}
                                    className={`snap-center shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-[#f7f7f7] cursor-pointer rounded-md transition-all p-2 flex items-center justify-center border-2 ${activeImage === img ? 'border-black' : 'border-transparent hover:border-gray-300'}`}
                                >
                                    <img src={img} alt={`${shoe.name} angle ${idx + 1}`} className="w-full h-full object-contain mix-blend-multiply" />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-[45%] flex flex-col py-4 lg:sticky lg:top-24">
                        <h1 className="text-2xl sm:text-3xl font-normal text-black mb-3">{shoe.name}</h1>
                        <p className="text-lg font-normal text-black mb-8">Rs. {shoe.price.toFixed(2)}</p>
                        
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-[12px] text-black">Size</h4>
                            </div>
                            <div className="grid grid-cols-5 gap-2">
                                {shoeSizes.map(size => (
                                    <button key={size} onClick={() => setSelectedSize(size)} className={`border py-3 text-sm transition ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-200 text-black hover:border-black'}`}>
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-[12px] text-black mb-4">Quantity</h4>
                            <div className="flex items-center border border-gray-300 w-min rounded-md">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 text-black hover:bg-gray-100 transition">-</button>
                                <span className="px-4 py-3 text-[13px] min-w-[50px] text-center font-medium border-x border-gray-300">{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 text-black hover:bg-gray-100 transition">+</button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <button onClick={() => onAddToCart(selectedSize, quantity)} className="w-full bg-white border border-black text-black hover:bg-black hover:text-white py-4 transition text-[13px] tracking-wide">
                                Add to cart
                            </button>
                            <button onClick={() => onBuyNow(selectedSize, quantity)} className="w-full bg-black text-white hover:bg-gray-800 py-4 transition text-[13px] tracking-wide">
                                Buy it now
                            </button>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <p className="text-[13px] text-gray-600 leading-relaxed font-light">
                                Built for the streets. The {shoe.name} brings premium materials and iconic design straight to your rotation.
                            </p>
                            <ul className="text-[12px] text-gray-500 space-y-3 mt-6 font-light">
                                <li className="flex items-center gap-3"><Truck size={14} strokeWidth={1}/> Free shipping pan-India</li>
                                <li className="flex items-center gap-3"><ShieldCheck size={14} strokeWidth={1}/> 100% Authentic Guarantee</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


