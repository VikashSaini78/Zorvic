import React, { useState } from 'react';
import { Menu, Search, User, ShoppingBag } from 'lucide-react';


export default function Header({ 
    navigateTo, currentPage, cartCount, 
    setIsSearchOpen, setIsProfileOpen, setIsCartOpen 
}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNav = (page) => {
        navigateTo(page);
        setMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    
                    {/* Hamburger (Mobile) */}
                    <div className="flex-1 flex md:hidden items-center justify-start">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 -ml-2 text-black">
                            <Menu size={22} strokeWidth={1} />
                        </button>
                    </div>

                    {/* Logo (Left) */}
                    <div className="flex-1 md:flex-none flex items-center justify-center md:justify-start cursor-pointer" onClick={() => navigateTo('home')}>
                        <div className="flex flex-col items-center">
                            <img 
                                src="/Sneaker/Gemini_logo-removebg-preview.png" 
                                alt="Logo" 
                                className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-all" 
                            />
                        </div>
                    </div>

                    {/* Desktop Nav (Center) */}
                    <div className="hidden md:flex flex-1 items-center justify-center">
                        <nav className="flex space-x-8 items-center">
                            <button onClick={() => navigateTo('home')} className={`text-[13px] font-light transition ${currentPage === 'home' ? 'text-black' : 'text-gray-500 hover:text-black'}`}>Home</button>
                            <button onClick={() => navigateTo('catalog')} className={`text-[13px] font-light transition ${currentPage === 'catalog' ? 'text-black' : 'text-gray-500 hover:text-black'}`}>Catalog</button>
                            <button onClick={() => navigateTo('contact')} className={`text-[13px] font-light transition ${currentPage === 'contact' ? 'text-black' : 'text-gray-500 hover:text-black'}`}>Contact</button>
                            <button onClick={() => navigateTo('about')} className={`text-[13px] font-light transition ${currentPage === 'about' ? 'text-black' : 'text-gray-500 hover:text-black'}`}>About us</button>
                        </nav>
                    </div>

                    {/* Right Icons */}
                    <div className="flex-1 flex items-center justify-end gap-3 sm:gap-4">
                        <button onClick={() => setIsSearchOpen(true)} className="p-2 text-black transition hover:opacity-50">
                            <Search size={20} strokeWidth={1} />
                        </button>
                        <button onClick={() => setIsProfileOpen(true)} className="p-2 text-black transition hover:opacity-50">
                            <User size={20} strokeWidth={1} />
                        </button>
                        <button onClick={() => setIsCartOpen(true)} className="relative p-2 text-black transition hover:opacity-50">
                            <ShoppingBag size={20} strokeWidth={1} />
                            {cartCount > 0 && (
                                <span className="absolute top-1 right-0 inline-flex items-center justify-center w-4 h-4 text-[9px] font-medium text-white bg-black rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4 absolute w-full left-0 shadow-lg">
                    <button onClick={() => handleNav('home')} className="block w-full text-left font-light text-black py-2 text-sm">Home</button>
                    <button onClick={() => handleNav('catalog')} className="block w-full text-left font-light text-black py-2 text-sm">Catalog</button>
                    <button onClick={() => handleNav('about')} className="block w-full text-left font-light text-black py-2 text-sm">About Us</button>
                    <button onClick={() => handleNav('contact')} className="block w-full text-left font-light text-black py-2 text-sm">Contact</button>
                </div>
            )}
        </header>
    );
}