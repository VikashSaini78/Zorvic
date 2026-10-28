import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

// 👉 Dhyan dein: Yahan '../' ki jagah './' hoga kyunki sab ek hi folder me hain
import HomeView from '../Home';
import CatalogView from '../Catalog';
import AboutView from '../About';
import ContactView from '../Contact';
import ProductDetailView from '../ProductDetail';

import Header from '../Header';
import Footer from '../Footer';
import CartDrawer from '../CartDrawer';
import CheckoutModal from '../CheckoutModal';
import SuccessModal from '../SuccessModal';
import SearchOverlay from '../SearchOverlay';
import ProfileModal from '../ProfileModal';

import AdminRoute from '../AdminRoute';
import Admin from '../Admin'; 

function AppContent() {
    const navigate = useNavigate();
    
    // States
    const [activeFilter, setActiveFilter] = useState('All'); 
    const [cart, setCart] = useState([]);
    const [selectedShoe, setSelectedShoe] = useState(null);
    
    // Modal States
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [toastMsg, setToastMsg] = useState("");

    const showToast = (msg) => {
        setToastMsg(msg);
        setTimeout(() => setToastMsg(""), 3500);
    };

    const addToCart = (shoe, size, qty = 1) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === shoe.id && item.size === size);
            if (existing) {
                return prev.map(item => item.id === shoe.id && item.size === size ? { ...item, quantity: item.quantity + qty } : item);
            }
            return [...prev, { ...shoe, size, quantity: qty, cartId: Date.now() }];
        });
        showToast(`Added to bag!`);
    };

    const updateQuantity = (cartId, delta) => {
        setCart(prev => prev.map(item => {
            if (item.cartId === cartId) {
                const newQty = item.quantity + delta;
                return newQty > 0 ? { ...item, quantity: newQty } : null;
            }
            return item;
        }).filter(Boolean));
    };

    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    const handlePlaceOrderSubmit = () => {
        setIsCheckoutOpen(false);
        setIsSuccessOpen(true);
        setCart([]);
    };

    const navigateTo = (page, data = null) => {
        if (page === 'product') {
            setSelectedShoe(data);
            navigate('/product');
        } else if (page === 'catalog') {
            setActiveFilter(data || 'All'); 
            navigate('/catalog');
        } else if (page === 'home') {
            navigate('/');
        } else {
            navigate(`/${page}`);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="font-sans bg-white text-black min-h-screen flex flex-col selection:bg-black selection:text-white">
            
            {/* Top Announcement */}
            <div className="bg-[#f7f7f7] text-black text-center text-[10px] sm:text-[11px] py-2 px-4 uppercase tracking-widest font-light">
                FREE SHIPPING ON ALL ORDERS
            </div>

            {/* Navbar */}
            <Header 
                navigateTo={navigateTo}
                cartCount={cartCount}
                setIsSearchOpen={setIsSearchOpen}
                setIsProfileOpen={setIsProfileOpen}
                setIsCartOpen={setIsCartOpen}
            />

            {/* Routes */}
            <main className="flex-1">
                {/* 👉 Dhyan dein: Saare routes is <Routes> tag ke ANDAR hone chahiye */}
                <Routes>
                    <Route path="/" element={<HomeView navigateTo={navigateTo} />} />
                    <Route path="/catalog" element={<CatalogView navigateTo={navigateTo} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />} />
                    <Route path="/about" element={<AboutView />} />
                    <Route path="/contact" element={<ContactView />} />
                    
                    {/* Admin Route ko bhi Routes ke andar daal diya gaya hai */}
                    <Route path="/admin" element={
                        <AdminRoute>
                            <Admin />
                        </AdminRoute>
                    } />

                    <Route path="/product" element={
                        selectedShoe ? (
                            <ProductDetailView 
                                shoe={selectedShoe} 
                                onBack={() => navigateTo('home')}
                                onAddToCart={(size, qty) => { addToCart(selectedShoe, size, qty); setIsCartOpen(true); }}
                                onBuyNow={(size, qty) => { addToCart(selectedShoe, size, qty); setIsCheckoutOpen(true); }}
                            />
                        ) : (
                            <div className="py-20 text-center text-red-500">Product not selected. Go to Home.</div>
                        )
                    } />
                </Routes>
            </main>

            {/* Footer */}
            <Footer />

            {/* Modals & Overlays */}
            {isCartOpen && <CartDrawer cart={cart} onClose={() => setIsCartOpen(false)} updateQuantity={updateQuantity} onCheckout={() => { setIsCartOpen(false); setIsCheckoutOpen(true); }} totalAmount={cartTotal} />}
            {isCheckoutOpen && <CheckoutModal cart={cart} totalAmount={cartTotal} onClose={() => setIsCheckoutOpen(false)} onSubmit={handlePlaceOrderSubmit} />}
            {isSuccessOpen && <SuccessModal onClose={() => { setIsSuccessOpen(false); navigateTo('home'); }} />}
            {isSearchOpen && <SearchOverlay onClose={() => setIsSearchOpen(false)} onSelect={(shoe) => { setIsSearchOpen(false); navigateTo('product', shoe); }} />}
            {isProfileOpen && <ProfileModal onClose={() => setIsProfileOpen(false)} />}

            {/* Toast Notification */}
            <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-[11px] px-6 py-3 shadow-xl transition-all duration-300 z-[90] flex items-center gap-3 ${toastMsg ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
                <CheckCircle size={14} strokeWidth={1.5} /> <span>{toastMsg}</span>
            </div>
        </div>
    );
}

// App Component (BrowserRouter Provider)
export default function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}