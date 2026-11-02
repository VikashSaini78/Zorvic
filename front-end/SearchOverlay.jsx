import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { shoesData } from './mockData';

// baaki ka code waisa hi rahega...

export default function SearchOverlay({ onClose, onSelect }) {
    const [query, setQuery] = useState("");
    const inputRef = useRef(null);
    useEffect(() => { inputRef.current?.focus(); }, []);
    
    const results = query.trim() === "" ? [] : shoesData.filter(shoe => 
        shoe.name.toLowerCase().includes(query.toLowerCase()) || 
        shoe.brand.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="fixed inset-0 bg-white z-[100] animate-in fade-in duration-200 flex flex-col">
            <div className="flex justify-end p-6">
                <button onClick={onClose} className="p-2 text-black"><X size={28} strokeWidth={1} /></button>
            </div>
            <div className="max-w-[800px] mx-auto w-full px-6 flex flex-col items-center">
                <div className="flex items-center w-full border-b border-black pb-2 mb-10">
                    <Search size={20} className="text-black mr-4" strokeWidth={1} />
                    <input ref={inputRef} type="text" placeholder="Search..." className="flex-1 text-2xl font-light text-black outline-none placeholder-gray-400 bg-transparent" value={query} onChange={(e) => setQuery(e.target.value)} />
                </div>
                <div className="w-full overflow-y-auto max-h-[60vh] hide-scroll">
                    {query && results.length === 0 && <p className="text-gray-500 text-[13px] text-center">No results found for "{query}"</p>}
                    <div className="space-y-4">
                        {results.map(shoe => (
                            <div key={shoe.id} onClick={() => onSelect(shoe)} className="flex items-center gap-4 cursor-pointer group p-2 hover:bg-gray-50 rounded-md">
                                <img src={shoe.image} alt={shoe.name} className="w-16 h-16 object-contain bg-[#f7f7f7] rounded-md p-1" />
                                <div><h4 className="text-[13px] text-black">{shoe.name}</h4><p className="text-[12px] text-gray-500 mt-1">Rs. {shoe.price.toFixed(2)}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}