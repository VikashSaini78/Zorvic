import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, X, CheckCircle, Menu, Search, User, ArrowLeft, ShieldCheck, Truck } from 'lucide-react';
 // Nike Highligh./Main.jsx
 
const shoesData = [
    { 
        id: 101, brand: "Nike", name: "Nike dragon of The year", price: 1999.00, 
        image: "../Sneaker/sn-1-1.webp", 
        gallery: [
            "../Sneaker/sn-1-5.jpg",
            "../Sneaker/sn-1-1.webp",
             "../Sneaker/sn-1-3.webp",
              "../Sneaker/sn-1-4.webp",
               "../Sneaker/sn-1-2.webp",
          
        ],
        badge: "New" 
    },
    { 
        id: 104, brand: "Nike", name: "Stranger Things Dunk Low SP 'Phantom Night Navy'", price: 1999.00, 
        image: "../Sneaker/sn-2-3.webp", 
        gallery: [
            "../Sneaker/sn-2-1.jpg",
             "../Sneaker/sn-2-3.webp",
              "../Sneaker/sn-2-2.webp",
               "../Sneaker/sn-2-4.webp",
                "../Sneaker/sn-2-5.webp",
                 "../Sneaker/sn-2-6.webp",
           
        ],
        badge: "Bestseller" 
    },
    { 
        id: 109, brand: "Nike", name: "Nike SB Dunk Low Pro Why So Sad?", price: 1999.00, 
        image:    "../Sneaker/sn-3-1.webp", 
        gallery: [
             "../Sneaker/sn-3-1.webp",
                "../Sneaker/sn-3-2.webp",
        ],
        badge: "" 
    },
    { 
        id: 110, brand: "Nike", name: "Nike SB x Hayley Wilson Dunk Low Pro Court Purple", price: 1999.00, 
        image: "../Sneaker/sn-4-1.webp", 
        gallery: [
             "../Sneaker/sn-4-2.webp",
              "../Sneaker/sn-4-1.webp",
               "../Sneaker/sn-4-3.webp",
                "../Sneaker/sn-4-4.webp",
                 "../Sneaker/sn-4-5.webp",
        ],
        badge: "" 
    },
    { 
        id: 111, brand: "Nike", name: "Nike Dunk Low Retro", price: 1999.00, 
        image: "../Sneaker/sn-5-1.jpg", 
        gallery: [
             "../Sneaker/sn-5-1.jpg",
              "../Sneaker/sn-5-2.webp",
               "../Sneaker/sn-5-3.webp",
                "../Sneaker/sn-5-4.webp",
                 "../Sneaker/sn-5-5.webp",

        ],
        badge: "Premium" 
    },
    { 
        id: 112, brand: "Nike", name: "Nike Dunk Low Retro White Black Panda", price: 1999.00, 
        image: "../Sneaker/sn-6-1.jpg", 
        gallery: [
         "../Sneaker/sn-6-1.jpg",    
              "../Sneaker/sn-6-2.webp",
               "../Sneaker/sn-6-3.webp",
        ],
        badge: "" 
    },
    { 
        id: 113, brand: "Nike", name: "Nike SB Dunk Low Jarritos", price: 1999.00, 
        image: "../Sneaker/sn-7-1.jpg", 
         gallery: [
           "../Sneaker/sn-7-1.jpg",    
              "../Sneaker/sn-7-2.webp",
               "../Sneaker/sn-7-3.webp",
                "../Sneaker/sn-7-4.webp",    
              "../Sneaker/sn-7-5.webp",
               "../Sneaker/sn-7-6.webp",
        ],
        badge: "" 
    },
    { 
        id: 114, brand: "Nike", name: "Nike SB Dunk Low AE86 Initial D Fujiwara Tofu Shop", price: 1999.00, 
        image: "../Sneaker/sn-8-2.webp", 
        gallery: [
             "../Sneaker/sn-8-2.webp",
               "../Sneaker/sn-8-1.webp",
               "../Sneaker/sn-8-3.webp", 
        ],
        badge: "" 
    },
    // Other Brands Adidas
    { 
        id: 102, brand: "Adidas", name: "Adidas Samba white", price: 1999.00, 
        image: "../Sneaker/snc/Ad 1-1.webp", 
        gallery: [
            "../Sneaker/snc/Ad 1-1.webp",
            "../Sneaker/snc/Ad 1-2.webp",
            "../Sneaker/snc/Ad 1-3.webp",
            "../Sneaker/snc/Ad 1-4.webp",
        ],
        badge: "" 
    },
    // 
     { 
        id: 102, brand: "Adidas", name: "Adidas Samba black", price: 1999.00, 
        image: "../Sneaker/snc/Ad 2-1.webp", 
        gallery: [
            "../Sneaker/snc/Ad 2-1.webp",
            "../Sneaker/snc/Ad 2-2.webp",
            "../Sneaker/snc/Ad 2-3.webp",
        ],
        badge: "" 
    },

     { 
        id: 102, brand: "Adidas", name: "adidas Superstar Black", price: 1999.00, 
        image: "../Sneaker/snc/Ad 3-1.webp", 
        gallery: [
            "../Sneaker/snc/Ad 3-1.webp",
            "../Sneaker/snc/Ad 3-2.webp",
            "../Sneaker/snc/Ad 3-3.webp",
            "../Sneaker/snc/Ad 3-4.webp",
        ],
        badge: "" 
    },

     { 
        id: 102, brand: "Adidas", name: "adidas Superstar green", price: 1999.00, 
        image: "../Sneaker/snc/Ad 4-1.webp", 
        gallery: [
            "../Sneaker/snc/Ad 4-1.webp",
            "../Sneaker/snc/Ad 4-2.webp",
            "../Sneaker/snc/Ad 4-3.webp",
             "../Sneaker/snc/Ad 4-4.webp",
            "../Sneaker/snc/Ad 4-5.webp",
             "../Sneaker/snc/Ad 4-6.webp",
        ],
        badge: "" 
    },

     { 
        id: 102, brand: "Adidas", name: "Adidas Samba", price: 1999.00, 
        image: "../Sneaker/snc/Ad 5-1.webp", 
        gallery: [
            "../Sneaker/snc/Ad 5-1.webp",
            "../Sneaker/snc/Ad 5-2.webp",
            "../Sneaker/snc/Ad 5-3.webp",
             "../Sneaker/snc/Ad 5-4.webp",
            "../Sneaker/snc/Ad 5-5.webp",
        ],
        badge: "" 
    },

     { 
        id: 102, brand: "Adidas", name: "Adidas Samba green", price: 1999.00, 
        image: "../Sneaker/snc/Ad 6-1.webp", 
        gallery: [
            "../Sneaker/snc/Ad 6-1.webp",
            "../Sneaker/snc/Ad 6-2.webp",
            "../Sneaker/snc/Ad 6-3.webp",
            "../Sneaker/snc/Ad 6-4.webp",
        ],
        badge: "" 
    },

     { 
        id: 102, brand: "Adidas", name: "Adidas Superstar grey", price: 1999.00, 
        image: "../Sneaker/snc/Ad 7-1.webp", 
        gallery: [
            "../Sneaker/snc/Ad 7-1.webp",
            "../Sneaker/snc/Ad 7-2.webp",
            "../Sneaker/snc/Ad 7-3.webp",
            "../Sneaker/snc/Ad 7-4.webp",
            "../Sneaker/snc/Ad 7-5.webp",
        ],
        badge: "" 
    },

     { 
        id: 102, brand: "Adidas", name: "Adidas Samba", price: 1999.00, 
        image: "../Sneaker/snc/Ad 8-1.webp", 
        gallery: [
            "../Sneaker/snc/Ad 8-1.webp",
            "../Sneaker/snc/Ad 8-2.webp",
            "../Sneaker/snc/Ad 8-3.webp",
            "../Sneaker/snc/Ad 8-4.webp",
            "../Sneaker/snc/Ad 8-5.webp",
             "../Sneaker/snc/Ad 8-6.webp",
        ],
        badge: "" 
    },

    // Adidas 
    { 
        id: 102, brand: "Adidas", name: "Adizero EVO SL Shoes", price: 1999.00, 
        image: "../Sneaker/Adizero/Adizero 1-1.webp", 
        gallery: [
           "../Sneaker/Adizero/Adizero 1-1.webp",
           "../Sneaker/Adizero/Adizero 1-2.webp",
          "../Sneaker/Adizero/Adizero 1-3.webp",
           "../Sneaker/Adizero/Adizero 1-4.webp",
        ],
        badge: "" 
    },

     { 
        id: 102, brand: "Adidas", name: "Adizero EVO SL Shoes", price: 1999.00, 
        image: "../Sneaker/Adizero/Adizero 2-1.webp",
        gallery: [
                "../Sneaker/Adizero/Adizero 2-1.webp",
           "../Sneaker/Adizero/Adizero 2-2.webp",
          "../Sneaker/Adizero/Adizero 2-3.webp",
           "../Sneaker/Adizero/Adizero 2-4.webp",
        ],
        badge: "" 
    },

     { 
        id: 102, brand: "Adidas", name: "Adizero EVO SL Shoes", price: 1999.00, 
        image: "../Sneaker/Adizero/Adizero 3-1.webp",
        gallery: [
            "../Sneaker/Adizero/Adizero 3-1.webp",
           "../Sneaker/Adizero/Adizero 3-2.webp",
          "../Sneaker/Adizero/Adizero 3-3.webp",
        //    "../Sneaker/Adizero/Adizero 3-4.webp",
        ],
        badge: "" 
    },

     { 
        id: 102, brand: "Adidas", name: "Adizero EVO SL Shoes blue", price: 1999.00, 
        image: "../Sneaker/Adizero/Adizero 4-1.webp", 
        gallery: [
        "../Sneaker/Adizero/Adizero 4-1.webp",
        //  "../Sneaker/Adizero/Adizero 4-2.webp",
           "../Sneaker/Adizero/Adizero 4-3.webp",
        //   "../Sneaker/Adizero/Adizero 4-4.webp",
        //    "../Sneaker/Adizero/Adizero 4-5.webp",
        ],
        badge: "" 
    },
    // 
    { 
        id: 103, brand: "Jordan", name: "Air Jordan 1 Mid black", price: 1999.00, 
        image: "../Sneaker/Adizero/Jordan 1-1.webp", 
        gallery: [
         "../Sneaker/Adizero/Jordan 1-1.webp", 
         "../Sneaker/Adizero/Jordan 1-2.webp", 
         "../Sneaker/Adizero/Jordan 1-3.webp", 
         "../Sneaker/Adizero/Jordan 1-4.webp", 
         "../Sneaker/Adizero/Jordan 1-5.webp", 

        ],
        badge: "" 
    }
];

const collectionsData = [
    { name: "Nike sneakers", brand: "NIKE", image: "../Sneaker/nike air force.jpg" },
    { name: "Nike Air Jordan", brand: "JORDAN", image: "../Sneaker/Jordan 1-1.jpg" },
    { name: "Yeezy Series", brand: "ADIDAS", image: "../Sneaker/Ad 1-1.jpg" },
    // { name: "Skate Classics", brand: "VANS", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=500&auto=format&fit=crop" },
   { name: "Yeezy Series", brand: "ADIDAS", image: "../Sneaker/Adizero 4-1.jpg" },

];

const shoeSizes = ["6", "7", "8", "9", "10"];

export default function App() {
    const [currentPage, setCurrentPage] = useState('home'); 
    const [activeFilter, setActiveFilter] = useState('All'); // New state for filtering
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [selectedShoe, setSelectedShoe] = useState(null);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [toastMsg, setToastMsg] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

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

    // const handlePlaceOrder = async (formData) => {
    //     showToast("Processing Order...");
        
    //     const payload = {
    //         _subject: "New Order - Zenvik",
    //         Name: formData.fname + " " + formData.lname,
    //         Email: formData.email,
    //         Phone: formData.phone,
    //         Delivery_Address: `${formData.address}, ${formData.landmark ? 'Landmark: ' + formData.landmark + ', ' : ''}PIN: ${formData.zip} (Country: ${formData.country})`,
    //         Items: cart.map(item => `${item.name} (Size: ${item.size}) x ${item.quantity}`).join(" | "),
    //         Total: "Rs. " + cartTotal.toFixed(2),
    //         _captcha: "false"
    //     };

    //     try {
    //         await fetch("https://formsubmit.co/ajax/vs592928@gmail.com", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json", "Accept": "application/json" },
    //             body: JSON.stringify(payload)
    //         });
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }

    //     setIsCheckoutOpen(false);
    //     setIsSuccessOpen(true);
    //     setCart([]); 
    // };

    // Updated navigateTo function to handle collection filtering
   
   
   const handlePlaceOrder = async (formData) => {
        showToast("Processing Order...");

        // Backend ke format ke anusaar data structure
        const payload = {
            customerName: `${formData.fname} ${formData.lname}`.trim(),
            phone: formData.phone,
            address: {
                street: `${formData.address}${formData.landmark ? ', Landmark: ' + formData.landmark : ''}`,
                city: formData.city || "Not Provided",
                state: formData.state || "Not Provided",
                pincode: formData.zip
            },
            // Pehle selected item ki image aur quantity
            selectedImage: cart[0]?.image || "",
            quantity: cart.reduce((sum, item) => sum + item.quantity, 0)
        };

        try {
            const response = await fetch("http://localhost:5003/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (result.success) {
                setIsCheckoutOpen(false);
                setIsSuccessOpen(true);
                setCart([]);
            } else {
                showToast(result.message || "Order place nahi ho paya!");
            }
        } catch (error) {
            console.error("Order error:", error);
            showToast("Server se connect nahi ho paya. Make sure backend is running on port 5003.");
        }
    };
   
   
    const navigateTo = (page, data = null) => {
        if (page === 'product') {
            setSelectedShoe(data);
        } else if (page === 'catalog') {
            setActiveFilter(data || 'All'); 
        }
        setCurrentPage(page);
        setMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="font-sans bg-white text-black min-h-screen flex flex-col selection:bg-black selection:text-white">
            
            <style dangerouslySetInnerHTML={{__html: `
                .hide-scroll::-webkit-scrollbar { display: none; }
                .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />

            {/* Top Announcement */}
            <div className="bg-[#f7f7f7] text-black text-center text-[10px] sm:text-[11px] py-2 px-4 uppercase tracking-widest font-light">
                FREE SHIPPING ON ALL ORDERS
            </div>

            {/* Navbar */}
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
                                <span className="text-2xl sm:text-3xl font-serif italic tracking-tighter leading-none">Zv</span>
                                <span className="text-[10px] tracking-[0.3em] font-light mt-1">ZENVIK</span>
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

                        {/* Right Icons (Search, Profile, Cart) */}
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

                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4 absolute w-full left-0 shadow-lg">
                        <button onClick={() => navigateTo('home')} className="block w-full text-left font-light text-black py-2 text-sm">Home</button>
                        <button onClick={() => navigateTo('catalog')} className="block w-full text-left font-light text-black py-2 text-sm">Catalog</button>
                        <button onClick={() => navigateTo('about')} className="block w-full text-left font-light text-black py-2 text-sm">About Us</button>
                        <button onClick={() => navigateTo('contact')} className="block w-full text-left font-light text-black py-2 text-sm">Contact</button>
                        <button onClick={() => navigateTo('contact')} className="block w-full text-left font-light text-black py-2 text-sm">FAQ</button>
                    </div>
                )}
            </header>

            <main className="flex-1">
                {currentPage === 'home' && <HomeView navigateTo={navigateTo} />}
                
                {/* Updated CatalogView with Filter Props */}
                {currentPage === 'catalog' && (
                    <CatalogView 
                        navigateTo={navigateTo} 
                        activeFilter={activeFilter} 
                        setActiveFilter={setActiveFilter} 
                    />
                )}
                
                {currentPage === 'about' && <AboutView />}
                {currentPage === 'contact' && <ContactView />}
                {currentPage === 'product' && selectedShoe && (
                    <ProductDetailView 
                        shoe={selectedShoe} 
                        onBack={() => navigateTo('home')}
                        onAddToCart={(size, qty) => { addToCart(selectedShoe, size, qty); setIsCartOpen(true); }}
                        onBuyNow={(size, qty) => { addToCart(selectedShoe, size, qty); setIsCheckoutOpen(true); }}
                    />
                )}
            </main>

            <footer className="bg-white border-t border-gray-100 py-8 mt-auto">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-xl font-serif italic tracking-tighter">Zv</span>
                    <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] mt-2 mb-6">ZENVIK</p>
                    <p className="text-gray-400 text-[11px] mb-6 font-light max-w-sm mx-auto">Classic. Premium. Timeless. Built for comfort, made to stand out.</p>
                    <div className="flex justify-center gap-6 text-[12px] font-light text-gray-500">
                        <span className="cursor-pointer hover:text-black">Privacy Policy</span>
                        <span className="cursor-pointer hover:text-black">Terms of Service</span>
                        <span className="cursor-pointer hover:text-black">Refund Policy</span>
                    </div>
                    <p className="text-gray-300 mt-8 text-[10px] font-light">&copy; 2026 ZENVIK.</p>
                </div>
            </footer>

            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-40 hover:scale-105 transition-transform flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </a>

            {/* Overlays */}
            {isCartOpen && <CartDrawer cart={cart} onClose={() => setIsCartOpen(false)} updateQuantity={updateQuantity} onCheckout={() => { setIsCartOpen(false); setIsCheckoutOpen(true); }} totalAmount={cartTotal} />}
            {isCheckoutOpen && <NormalCheckoutModal cart={cart} totalAmount={cartTotal} onClose={() => setIsCheckoutOpen(false)} onSubmit={handlePlaceOrder} />}
            {isSuccessOpen && <SuccessModal onClose={() => { setIsSuccessOpen(false); navigateTo('home'); }} />}
            {isSearchOpen && <SearchOverlay onClose={() => setIsSearchOpen(false)} onSelect={(shoe) => { setIsSearchOpen(false); navigateTo('product', shoe); }} />}
            {isProfileOpen && <ProfileModal onClose={() => setIsProfileOpen(false)} />}

            {/* Toast */}
            <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-[11px] px-6 py-3 shadow-xl transition-all duration-300 z-[90] flex items-center gap-3 ${toastMsg ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
                <CheckCircle size={14} strokeWidth={1.5} /> <span>{toastMsg}</span>
            </div>
        </div>
    );
}

function HomeView({ navigateTo }) {
    const nikeShoes = shoesData.filter(s => s.brand === 'Nike').slice(0, 8);
    const [currentSlide, setCurrentSlide] = useState(0);

    const heroBanners = [
        "../Sneaker/Kick Start the Streets.png",
        "../Sneaker/baner 2.png",
         "../Sneaker/baner 1.png"
         
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
        }, 3000); 
        return () => clearInterval(timer);
    }, [heroBanners.length]);

    return (
        <div className="bg-white animate-in fade-in duration-500 ">
            {/* Auto Scrolling Hero Banner */}
            <section className="relative w-full h-[50vh] md:h-[70vh] bg-[#f4f4f4] overflow-hidden cursor-pointer" onClick={() => navigateTo('catalog')}>
                {heroBanners.map((banner, index) => (
                    <div 
                        key={index} 
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <img src={banner} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                ))}
            </section>

            {/* Features Bar */}
            <div className="w-full bg-white py-4 border-b border-gray-100 flex justify-center gap-4 sm:gap-16 px-4 overflow-x-auto hide-scroll text-[9px] sm:text-[10px] text-gray-600 font-light uppercase tracking-widest text-center whitespace-nowrap">
                <div className="flex flex-col items-center gap-1.5"><ShieldCheck size={16} strokeWidth={1} /> <span>Premium Quality</span></div>
                <div className="flex flex-col items-center gap-1.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg> <span>All Day Comfort</span></div>
                <div className="flex flex-col items-center gap-1.5"><CheckCircle size={16} strokeWidth={1} /> <span>Durable & Reliable</span></div>
                <div className="flex flex-col items-center gap-1.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg> <span>Easy Returns</span></div>
            </div>

            <section className="pt-20 pb-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-10">
                    <h2 className="text-3xl font-semibold tracking-tight">Shop by collection</h2>
                </div>
                
                <div className="flex overflow-x-auto gap-4 pb-4 snap-x hide-scroll">
                    {collectionsData.map((col, idx) => (
                        <div 
                            key={idx} 
                            className="snap-center shrink-0 w-[220px] sm:w-[280px] flex flex-col items-center cursor-pointer group" 
                            // Updated onClick to pass the brand name for filtering
                            onClick={() => navigateTo('catalog', col.brand)}
                        >
                            <div className="w-full aspect-[4/3] flex flex-col items-center justify-center p-4 bg-white">
                                <h3 className="text-xl font-black italic tracking-tighter mb-4 text-black">{col.brand}</h3>
                                <img src={col.image} alt={col.name} className="w-[80%] object-contain group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <p className="mt-4 text-[13px] text-black font-light">{col.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="flex justify-between items-end mb-10">
                    <h2 className="text-3xl font-semibold tracking-tight">Nike sneakers</h2>
                    <span onClick={() => navigateTo('catalog', 'Nike')} className="text-[13px] text-black font-light cursor-pointer hover:underline">View all</span>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 sm:gap-x-8">
                    {nikeShoes.map(shoe => <ShoeCard key={shoe.id} shoe={shoe} onClick={() => navigateTo('product', shoe)} />)}
                </div>
            </section>
        </div>
    );
}

// Updated CatalogView with filtering logic
function CatalogView({ navigateTo, activeFilter, setActiveFilter }) {
    const brands = ['All', 'Nike', 'Adidas', 'Jordan', 'Vans'];

    const filteredShoes = activeFilter === 'All' 
        ? shoesData 
        : shoesData.filter(shoe => shoe.brand.toLowerCase() === activeFilter.toLowerCase());

    return (
        <div className="py-16 bg-white min-h-screen animate-in fade-in duration-500 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold tracking-tight mb-8">
                {activeFilter === 'All' ? 'All Products' : `${activeFilter} Collection`}
            </h1>
            
            {/* Filter Buttons */}
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

function ShoeCard({ shoe, onClick }) {
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

function ProductDetailView({ shoe, onBack, onAddToCart, onBuyNow }) {
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
                    
                    {/* Left Side - Main Image & Scrollable Thumbnails */}
                    <div className="w-full lg:w-[50%] flex flex-col gap-4">
                        {/* Big Active Image */}
                        <div className="bg-[#f7f7f7] aspect-[4/3] sm:aspect-square lg:aspect-[4/3] relative flex items-center justify-center p-8 rounded-md">
                            <img src={activeImage} alt={shoe.name} className="w-full h-full object-contain mix-blend-multiply" />
                        </div>
                        
                        {/* Scrollable Gallery Thumbnails */}
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

                        {/* Quantity Selector */}
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

 {/* Contact Section */}

// function NormalCheckoutModal({ onClose, onSubmit, cart, totalAmount }) {
//     const [isSubmitting, setIsSubmitting] = useState(false);
    
//     // Shopify ki tarah tax calculate karna (dikhane ke liye)
//     const taxAmount = (totalAmount * 0.1525).toFixed(2);
    
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);
//         const fd = new FormData(e.target);
//         await onSubmit(Object.fromEntries(fd.entries()));
//         setIsSubmitting(false); 
//     };

//     return (
//         <div className="fixed inset-0 bg-white z-[60] flex flex-col md:flex-row overflow-y-auto animate-in slide-in-from-bottom-10 font-sans">
//             <button onClick={onClose} className="absolute top-6 right-6 text-black hover:text-gray-500 z-50 bg-white/50 p-2 rounded-full"><X size={20} strokeWidth={1.5} /></button>
            
//             {/* Left Side: Form Section (Shopify Style) */}
//             <div className="w-full md:w-[55%] p-6 md:p-12 lg:pl-[15%] lg:pr-12 bg-white flex flex-col min-h-screen border-r border-gray-200">
//                 <div className="max-w-xl ml-auto w-full">
                    
                   
//                     <div className="flex justify-between items-end mb-4 pt-4">
//                         <h2 className="text-xl font-medium text-gray-900">Contact</h2>
//                         {/* <a href="#" className="text-[13px] text-blue-600 hover:underline">S</a> */}
//                     </div>
                    
//                     <div className="space-y-3 mb-8">
//                         <div className="relative">
//                             <input type="email" name="email" placeholder="Email or mobile phone number" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition text-[14px] placeholder-gray-500" />
//                             <div className="absolute right-3 top-3.5 text-gray-400">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
//                             </div>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <input type="checkbox" id="news" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
//                             <label htmlFor="news" className="text-[14px] text-gray-700">Email me with news and offers</label>
//                         </div>
//                     </div>

//                     {/* Delivery Section */}
//                     <h2 className="text-xl font-medium text-gray-900 mb-4">Delivery</h2>
//                     <form onSubmit={handleSubmit} className="space-y-3">
                        
//                         {/* Country Dropdown */}
//                         <div className="relative border border-gray-300 rounded-md bg-white focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 transition">
//                             <label className="absolute top-1.5 left-3 text-[11px] text-gray-500">Country/Region</label>
//                             <select name="country" required defaultValue="" className="w-full px-3 pt-5 pb-2 bg-transparent outline-none text-[14px] appearance-none cursor-pointer">
//                                 <option value="" disabled>Select your country</option>
//                                 <option value="India">India</option>
//                                 <option value="United States">United States</option>
//                                 <option value="United Kingdom">United Kingdom</option>
//                                 <option value="Canada">Canada</option>
//                                 <option value="Australia">Australia</option>
//                             </select>
//                             <div className="absolute right-3 top-4 pointer-events-none text-gray-500">
//                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
//                             </div>
//                         </div>

//                         {/* Name */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                             <input type="text" name="fname" placeholder="First name" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition text-[14px] placeholder-gray-500" />
//                             <input type="text" name="lname" placeholder="Last name" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition text-[14px] placeholder-gray-500" />
//                         </div>

//                         {/* Address */}
//                         <div className="relative">
//                             <input type="text" name="address" placeholder="Address" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition text-[14px] placeholder-gray-500 pr-10" />
//                             <Search className="absolute right-3 top-3.5 text-gray-500" size={16} strokeWidth={2} />
//                         </div>

//                         {/* Landmark & PIN */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                             <input type="text" name="landmark" placeholder="Landmark (e.g. near hospital)" className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition text-[14px] placeholder-gray-500" />
//                             <input type="text" name="zip" placeholder="PIN code" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition text-[14px] placeholder-gray-500" />
//                         </div>

//                         {/* Phone */}
//                         <div className="relative mt-2 mb-4">
//                             <input type="tel" name="phone" placeholder="Phone" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition text-[14px] placeholder-gray-500" />
//                             <div className="absolute right-3 top-3.5 text-gray-400">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
//                             </div>
//                         </div>

//                         <div className="flex items-center gap-2 mb-8 mt-4">
//                             <input type="checkbox" id="saveinfo" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
//                             <label htmlFor="saveinfo" className="text-[14px] text-gray-700">Save this information for next time</label>
//                         </div>

//                         <div className="pt-2 pb-12">
//                             <button type="submit" disabled={isSubmitting} className={`w-full text-white py-4 rounded-md transition text-[15px] font-medium tracking-wide ${isSubmitting ? 'bg-gray-400' : 'bg-black hover:bg-gray-800 shadow-lg'}`}>
//                                 {isSubmitting ? 'Processing...' : 'Confirm order'}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//             {/* Right Side: Order Summary (Shopify Style) */}
//             <div className="w-full md:w-[45%] bg-white p-6 md:p-12 lg:pr-[15%] lg:pl-10 flex flex-col border-l border-gray-200">
//                 <div className="max-w-md mr-auto w-full pt-4">
                    
//                     {/* Cart Items List */}
//                     <div className="space-y-4 pb-6">
//                         {cart.map(item => (
//                             <div key={item.cartId} className="flex gap-4 items-center">
//                                 {/* Product Image with exact border, background and badge */}
//                                 <div className="h-[64px] w-[64px] bg-white border border-[#d9d9d9] rounded-xl flex-shrink-0 relative flex items-center justify-center p-1.5">
//                                     <img src={item.image} alt={item.name} className="h-full w-full object-contain rounded-lg" />
                                    
//                                     {/* Black Quantity Badge exactly like screenshot */}
//                                     <span className="absolute -top-2.5 -right-2.5 bg-[#323232] text-white text-[12px] font-medium w-[22px] h-[22px] flex items-center justify-center rounded-full z-10 shadow-sm">
//                                         {item.quantity}
//                                     </span>
//                                 </div>
//                                 <div className="flex-1 pr-2">
//                                     <h4 className="text-[14px] text-[#333333] font-medium leading-snug">{item.name}</h4>
//                                     <p className="text-[12px] text-[#737373] mt-0.5">{item.size}</p>
//                                 </div>
//                                 <div className="text-[14px] text-[#333333] font-medium">₹{(item.price * item.quantity).toFixed(2)}</div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Price Calculation Details */}
//                     <div className="pt-6 space-y-3">
//                         <div className="flex justify-between text-[14px] text-[#333333]">
//                             <span>Subtotal</span>
//                             <span className="font-medium">₹{totalAmount.toFixed(2)}</span>
//                         </div>
//                         <div className="flex justify-between text-[14px] text-[#333333]">
//                             <span className="flex items-center gap-1.5">
//                                 Shipping 
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#737373]"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
//                             </span>
//                             <span className="text-[#737373] text-[13px]">Enter shipping address</span>
//                         </div>
                        
//                         <div className="flex justify-between items-center mt-6 pt-4 border-t border-[#d9d9d9]">
//                             <div className="flex flex-col">
//                                 <span className="font-semibold text-black text-[17px]">Total</span>
//                                 <span className="text-[12px] text-[#737373] mt-0.5">Including ₹{taxAmount} in taxes</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <span className="text-[12px] text-[#737373]">INR</span>
//                                 <span className="font-semibold text-black text-xl tracking-tight">₹{totalAmount.toFixed(2)}</span>
//                             </div>
//                         </div>
//                     </div>
                    
//                 </div>
//             </div>
//         </div>
//     );
// }
// About As

function NormalCheckoutModal({ onClose, onSubmit, cart, totalAmount }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const taxAmount = (totalAmount * 0.1525).toFixed(2);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const fd = new FormData(e.target);
        await onSubmit(Object.fromEntries(fd.entries()));
        setIsSubmitting(false); 
        console.log(FormData)
    };

    return (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col md:flex-row overflow-y-auto animate-in slide-in-from-bottom-10 font-sans">
            <button onClick={onClose} className="absolute top-6 right-6 text-black hover:text-gray-500 z-50 bg-white/50 p-2 rounded-full">
                <X size={20} strokeWidth={1.5} />
            </button>
            
            {/* Left Side: Form Section */}
            <div className="w-full md:w-[55%] p-6 md:p-12 lg:pl-[15%] lg:pr-12 bg-white flex flex-col min-h-screen border-r border-gray-200">
                <div className="max-w-xl ml-auto w-full">
                    <div className="flex justify-between items-end mb-4 pt-4">
                        <h2 className="text-xl font-medium text-gray-900">Contact</h2>
                    </div>
                    
                    {/* Delivery Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="relative mb-4">
                            <input type="email" name="email" placeholder="Email address" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition text-[14px] placeholder-gray-500" />
                        </div>

                        <h2 className="text-xl font-medium text-gray-900 mb-4">Delivery</h2>
                        
                        <div className="relative border border-gray-300 rounded-md bg-white focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 transition">
                            <label className="absolute top-1.5 left-3 text-[11px] text-gray-500">Country/Region</label>
                            <select name="country" required defaultValue="India" className="w-full px-3 pt-5 pb-2 bg-transparent outline-none text-[14px] appearance-none cursor-pointer">
                                <option value="India">India</option>
                            </select>
                        </div>

                        {/* First and Last Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input type="text" name="fname" placeholder="First name" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-blue-600 outline-none text-[14px]" />
                            <input type="text" name="lname" placeholder="Last name" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-blue-600 outline-none text-[14px]" />
                        </div>

                        {/* Street Address */}
                        <div className="relative">
                            <input type="text" name="address" placeholder="Flat, House no., Building, Street" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-blue-600 outline-none text-[14px]" />
                        </div>

                        {/* City and State */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input type="text" name="city" placeholder="City" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-blue-600 outline-none text-[14px]" />
                            <input type="text" name="state" placeholder="State" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-blue-600 outline-none text-[14px]" />
                        </div>

                        {/* Landmark & PIN */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input type="text" name="landmark" placeholder="Landmark (optional)" className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-blue-600 outline-none text-[14px]" />
                            <input type="text" name="zip" placeholder="PIN code" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-blue-600 outline-none text-[14px]" />
                        </div>

                        {/* Phone */}
                        <div className="relative mt-2 mb-4">
                            <input type="tel" name="phone" placeholder="Mobile Phone Number" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-blue-600 outline-none text-[14px]" />
                        </div>

                        <div className="pt-2 pb-12">
                            <button type="submit" disabled={isSubmitting} className={`w-full text-white py-4 rounded-md transition text-[15px] font-medium tracking-wide ${isSubmitting ? 'bg-gray-400' : 'bg-black hover:bg-gray-800 shadow-lg'}`}>
                                {isSubmitting ? 'Processing...' : 'Confirm order'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right Side: Order Summary */}
            <div className="w-full md:w-[45%] bg-white p-6 md:p-12 lg:pr-[15%] lg:pl-10 flex flex-col border-l border-gray-200">
                <div className="max-w-md mr-auto w-full pt-4">
                    <div className="space-y-4 pb-6">
                        {cart.map(item => (
                            <div key={item.cartId} className="flex gap-4 items-center">
                                <div className="h-[64px] w-[64px] bg-white border border-[#d9d9d9] rounded-xl flex-shrink-0 relative flex items-center justify-center p-1.5">
                                    <img src={item.image} alt={item.name} className="h-full w-full object-contain rounded-lg" />
                                    <span className="absolute -top-2.5 -right-2.5 bg-[#323232] text-white text-[12px] font-medium w-[22px] h-[22px] flex items-center justify-center rounded-full z-10 shadow-sm">
                                        {item.quantity}
                                    </span>
                                </div>
                                <div className="flex-1 pr-2">
                                    <h4 className="text-[14px] text-[#333333] font-medium leading-snug">{item.name}</h4>
                                    <p className="text-[12px] text-[#737373] mt-0.5">Size: {item.size}</p>
                                </div>
                                <div className="text-[14px] text-[#333333] font-medium">₹{(item.price * item.quantity).toFixed(2)}</div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-6 space-y-3">
                        <div className="flex justify-between text-[14px] text-[#333333]">
                            <span>Subtotal</span>
                            <span className="font-medium">₹{totalAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center mt-6 pt-4 border-t border-[#d9d9d9]">
                            <div className="flex flex-col">
                                <span className="font-semibold text-black text-[17px]">Total</span>
                                <span className="text-[12px] text-[#737373] mt-0.5">Including ₹{taxAmount} in taxes</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[12px] text-[#737373]">INR</span>
                                <span className="font-semibold text-black text-xl tracking-tight">₹{totalAmount.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}




function AboutView() {
    return (
        <div className="py-20 bg-white min-h-screen animate-in fade-in duration-500">
            <div className="max-w-[800px] mx-auto px-4 text-center">
                <h1 className="text-3xl font-semibold mb-8">About Zenvik</h1>
                <img src="https://images.unsplash.com/photo-1552346154-21d32810baa3?q=80&w=1200&auto=format&fit=crop" alt="About Us" className="w-full h-[400px] object-cover mb-10 rounded-md" />
                <p className="text-gray-600 text-[14px] leading-relaxed mb-6 font-light">Founded with a passion for streetwear and authentic footwear, our goal is to bring the rarest drops and the most comfortable classics straight to your doorstep.</p>
                <p className="text-gray-600 text-[14px] leading-relaxed font-light">Every pair in our catalog is guaranteed 100% authentic. Step into greatness with us.</p>
            </div>
        </div>
    );
}

function ContactView() {
    return (
        <div className="py-20 bg-white min-h-screen animate-in fade-in duration-500">
            <div className="max-w-[600px] mx-auto px-4">
                <h1 className="text-3xl font-semibold mb-8 text-center">Contact Us</h1>
                <form onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); e.target.reset(); }} className="space-y-4">
                    <div><input type="text" placeholder="Name" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:border-black outline-none text-[13px] font-light" /></div>
                    <div><input type="email" placeholder="Email" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:border-black outline-none text-[13px] font-light" /></div>
                    <div><textarea rows="5" placeholder="Message" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:border-black outline-none text-[13px] font-light resize-none"></textarea></div>
                    <button type="submit" className="bg-black text-white px-8 py-3 rounded-md text-[13px] w-full mt-2">Send Message</button>
                </form>
            </div>
        </div>
    );
}

function CartDrawer({ cart, onClose, updateQuantity, onCheckout, totalAmount }) {
    return (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-in fade-in">
            <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-lg font-medium text-black">Cart</h2>
                    <button onClick={onClose} className="p-2 text-black hover:opacity-50"><X size={20} strokeWidth={1} /></button>
                </div>
                <div className="flex-1 overflow-y-auto p-6 space-y-6 hide-scroll">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-gray-400">
                            <p className="font-light text-[13px]">Your cart is currently empty.</p>
                            <button onClick={onClose} className="mt-4 text-black underline text-[13px]">Continue shopping</button>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div key={item.cartId} className="flex gap-4">
                                <div className="h-20 w-20 bg-[#f7f7f7] rounded-md flex items-center justify-center p-1"><img src={item.image} alt={item.name} className="h-full w-full object-contain" /></div>
                                <div className="flex flex-1 flex-col justify-between py-1">
                                    <div>
                                        <h4 className="text-[13px] text-black leading-snug">{item.name}</h4>
                                        <div className="flex justify-between mt-1"><span className="text-[11px] text-gray-500">Size: {item.size}</span><span className="text-[13px] text-black">Rs. {(item.price * item.quantity).toFixed(2)}</span></div>
                                    </div>
                                    <div className="flex items-center mt-2 border border-gray-300 rounded-md w-min">
                                        <button onClick={() => updateQuantity(item.cartId, -1)} className="px-3 py-1 text-black text-[14px]">-</button>
                                        <span className="px-2 py-1 text-[12px] min-w-[20px] text-center">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.cartId, 1)} className="px-3 py-1 text-black text-[14px]">+</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                {cart.length > 0 && (
                    <div className="border-t border-gray-100 p-6 bg-white">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-black text-[14px]">Subtotal</span>
                            <span className="text-lg text-black">Rs. {totalAmount.toFixed(2)}</span>
                        </div>
                        <p className="text-[11px] text-gray-500 mb-4 font-light">Taxes and shipping calculated at checkout</p>
                        <button onClick={onCheckout} className="w-full bg-black text-white py-4 rounded-md text-[13px]">Check out</button>
                    </div>
                )}
            </div>
        </div>
    );
}

function SearchOverlay({ onClose, onSelect }) {
    const [query, setQuery] = useState("");
    const inputRef = useRef(null);
    useEffect(() => { inputRef.current?.focus(); }, []);
    const results = query.trim() === "" ? [] : shoesData.filter(shoe => shoe.name.toLowerCase().includes(query.toLowerCase()) || shoe.brand.toLowerCase().includes(query.toLowerCase()));

    return (
        <div className="fixed inset-0 bg-white z-[100] animate-in fade-in duration-200 flex flex-col">
            <div className="flex justify-end p-6"><button onClick={onClose} className="p-2 text-black"><X size={28} strokeWidth={1} /></button></div>
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

function ProfileModal({ onClose }) {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className="fixed inset-0 z-[100] flex justify-end bg-black/40 backdrop-blur-sm animate-in fade-in">
            <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right">
                <div className="flex justify-end p-6"><button onClick={onClose} className="p-2 text-black"><X size={20} strokeWidth={1} /></button></div>
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-2xl font-normal text-black mb-8 text-center">{isLogin ? 'Login' : 'Create account'}</h2>
                    <form onSubmit={(e) => { e.preventDefault(); alert("Success!"); onClose(); }} className="space-y-4">
                        {!isLogin && <div><input type="text" placeholder="Name" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:border-black outline-none text-[13px] font-light" /></div>}
                        <div><input type="email" placeholder="Email" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:border-black outline-none text-[13px] font-light" /></div>
                        <div><input type="password" placeholder="Password" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:border-black outline-none text-[13px] font-light" /></div>
                        <button type="submit" className="w-full bg-black text-white py-3 rounded-md text-[13px] mt-2">{isLogin ? 'Sign In' : 'Create'}</button>
                    </form>
                    <button onClick={() => setIsLogin(!isLogin)} className="mt-6 text-[12px] text-gray-500 hover:text-black underline text-center w-full">{isLogin ? "Create account" : "Login"}</button>
                </div>
            </div>
        </div>
    );
}

function SuccessModal({ onClose }) {
    return (
        <div className="fixed inset-0 bg-white z-[80] flex items-center justify-center p-4 animate-in fade-in">
            <div className="text-center max-w-sm">
                <CheckCircle className="text-black mx-auto mb-6" size={48} strokeWidth={1} />
                <h2 className="text-2xl font-normal text-black mb-2">Order placed</h2>
                <p className="text-gray-500 mb-8 text-[14px] font-light">Thank you for shopping with Zenvik.</p>
                <button onClick={onClose} className="bg-black text-white px-8 py-3 rounded-md text-[13px]">Continue Shopping</button>
            </div>
        </div>
    );
}

