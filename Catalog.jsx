import React from 'react';
import ShoeCard from './ShoeCard';
import { shoesData } from './mockData';

// baaki ka code waisa hi rahega...

export default function CatalogView({ navigateTo, activeFilter, setActiveFilter }) {
    const brands = ['All', 'Nike', 'Adidas', 'Jordan', 'Rotro','Boot','Sports','New balance']; 

    const filteredShoes = activeFilter === 'All' 
        ? shoesData 
        : shoesData.filter(shoe => shoe.brand.toLowerCase() === activeFilter.toLowerCase());

    return (
        <div className="py-16 bg-white min-h-screen animate-in fade-in duration-500 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold tracking-tight mb-8">
                {activeFilter === 'All' ? 'All Products' : `${activeFilter} Collection`}
            </h1>
            
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

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 sm:gap-x-8">
                {filteredShoes.length > 0 ? (
                    filteredShoes.map(shoe => <ShoeCard key={shoe.id} shoe={shoe} onClick={() => navigateTo('product', shoe)} />)
                ) : (
                    <div className="col-span-full text-center py-12 text-gray-500 font-light">
                        No products found in this collection yet.
                    </div>
                )}
            </div>
        </div>
    );
}