import React, { useState } from 'react';
import ShoeCard from './ShoeCard';
import { shoesData } from './mockData';

const SingleColIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
    </svg>
);

const DoubleColIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="6" height="6" rx="1" ry="1"></rect>
        <rect x="14" y="4" width="6" height="6" rx="1" ry="1"></rect>
        <rect x="14" y="14" width="6" height="6" rx="1" ry="1"></rect>
        <rect x="4" y="14" width="6" height="6" rx="1" ry="1"></rect>
    </svg>
);

export default function CatalogView({ navigateTo, activeFilter, setActiveFilter }) {
    const brands = ['All', 'Nike', 'brooks', 'Adidas', 'Jordan', 'Rotro', 'Boot', 'Sports', 'New balance']; 

    const filteredShoes = activeFilter === 'All' 
        ? shoesData 
        : shoesData.filter(shoe => shoe.brand.toLowerCase() === activeFilter.toLowerCase());

    const [gridCols, setGridCols] = useState(2); 

    return (
        <div className="py-16 bg-white min-h-screen animate-in fade-in duration-500 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-semibold tracking-tight">
                    {activeFilter === 'All' ? 'All Products' : `${activeFilter} Collection`}
                </h1>
                
                {/* Mobile Toggle Icons (Hidden on Desktop/Tablet) */}
                <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-md border border-gray-100 md:hidden">
                    <button 
                        onClick={() => setGridCols(1)}
                        className={`p-1.5 rounded ${gridCols === 1 ? 'bg-white shadow-sm text-black' : 'text-gray-400 hover:text-black'}`}
                    >
                        <SingleColIcon />
                    </button>
                    <button 
                        onClick={() => setGridCols(2)}
                        className={`p-1.5 rounded ${gridCols === 2 ? 'bg-white shadow-sm text-black' : 'text-gray-400 hover:text-black'}`}
                    >
                        <DoubleColIcon />
                    </button>
                </div>
            </div>
            
            <div className="flex gap-4 mb-12 overflow-x-auto hide-scroll pb-2">
                {brands.map(brand => (
                    <button 
                        key={brand}
                        onClick={() => setActiveFilter(brand)}
                        className={`px-6 py-2 rounded-full border text-[13px] transition-colors whitespace-nowrap ${
                            activeFilter.toLowerCase() === brand.toLowerCase() 
                            ? 'bg-black text-white border-black' 
                            : 'bg-white text-black border-gray-200 hover:border-black'
                        }`}
                    >
                        {brand}
                    </button>
                ))}
            </div>

            {/* Dynamic Grid applied based on gridCols state for mobile, overrides to 3 or 4 on larger screens */}
            <div className={`grid gap-x-4 gap-y-12 sm:gap-x-8 ${gridCols === 1 ? 'grid-cols-1' : 'grid-cols-2'} md:grid-cols-3 lg:grid-cols-4`}>
                {filteredShoes.length > 0 ? (
                    filteredShoes.map(shoe => (
                        <div key={shoe.id} className={gridCols === 1 ? 'max-w-md mx-auto w-full md:max-w-none' : ''}>
                            <ShoeCard shoe={shoe} onClick={() => navigateTo('product', shoe)} />
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 text-gray-500 font-light">
                        No products found in this collection yet.
                    </div>
                )}
            </div>
        </div>
    );
}