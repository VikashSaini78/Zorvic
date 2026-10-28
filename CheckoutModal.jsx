import React, { useState } from 'react';
import { X } from 'lucide-react';
import axios from 'axios';

export default function CheckoutModal({ cart, totalAmount, onClose, onSubmit }) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const fd = new FormData(e.target);
            const formDataObj = Object.fromEntries(fd.entries());

            let shoeSize = "Unknown";
            let shoeQty = 1;
            let shoeImg = "no-image.jpg";

            if (cart && cart.length > 0) {
                shoeSize = cart[0].size || "Unknown";
                shoeQty = cart[0].quantity || 1;
                shoeImg = cart[0].image || "no-image.jpg";
            }

            const orderData = {
                customerName: formDataObj.fname + " " + formDataObj.lname, 
                email: formDataObj.email,         
                phone: formDataObj.phone,
                address: {
                    street: formDataObj.address,
                    landmark: formDataObj.landmark || "Not Provided", 
                    city: formDataObj.city,
                    state: formDataObj.state,
                    pincode: formDataObj.zip,
                    country: formDataObj.country || "India"
                },
                selectedImage: shoeImg, 
                quantity: shoeQty,                
                size: shoeSize,                
                price: totalAmount || 0                               
            };

            const response = await axios.post("http://localhost:5003/api/orders", orderData);
            
            if (response.data.success) {
                if (onSubmit) onSubmit(); 
                else onClose();
            }
        } catch (error) {
            console.error("❌ Order Error:", error);
            alert("Order save nahi hua. Kripya details check karein.");
        } finally {
            setIsSubmitting(false); 
        }
    };

    return (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col md:flex-row overflow-y-auto animate-in slide-in-from-bottom-10 font-sans">
            <button onClick={onClose} className="absolute top-6 right-6 text-black hover:text-gray-500 z-50 bg-white/50 p-2 rounded-full">
                <X size={20} strokeWidth={1.5} />
            </button>
            
            {/* 👇 FORM SECTION: Mobile me order-2 (niche), Desktop me md:order-1 (left me) */}
            <div className="w-full md:w-[55%] p-6 md:p-12 lg:pl-[15%] lg:pr-12 bg-white flex flex-col min-h-screen border-r border-gray-200 order-2 md:order-1">
                <div className="max-w-xl ml-auto w-full">
                    <div className="flex justify-between items-end mb-4 pt-4">
                        <h2 className="text-xl font-medium text-gray-900">Contact</h2>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="relative mb-4">
                            <input type="email" name="email" placeholder="Email address" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-black outline-none transition text-[14px]" />
                        </div>

                        <h2 className="text-xl font-medium text-gray-900 mb-4">Delivery</h2>
                        
                        <div className="relative border border-gray-300 rounded-md bg-white focus-within:border-black transition">
                            <label className="absolute top-1.5 left-3 text-[11px] text-gray-500">Country/Region</label>
                            <select name="country" required defaultValue="India" className="w-full px-3 pt-5 pb-2 bg-transparent outline-none text-[14px] appearance-none cursor-pointer">
                                <option value="India">India</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input type="text" name="fname" placeholder="First name" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-black outline-none text-[14px]" />
                            <input type="text" name="lname" placeholder="Last name" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-black outline-none text-[14px]" />
                        </div>

                        <div className="relative">
                            <input type="text" name="address" placeholder="Flat, House no., Building, Street" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-black outline-none text-[14px]" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input type="text" name="city" placeholder="City" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-black outline-none text-[14px]" />
                            <input type="text" name="state" placeholder="State" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-black outline-none text-[14px]" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input type="text" name="landmark" placeholder="Landmark (optional)" className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-black outline-none text-[14px]" />
                            <input type="text" name="zip" placeholder="PIN code" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-black outline-none text-[14px]" />
                        </div>

                        <div className="relative mt-2 mb-4">
                            <input type="tel" name="phone" placeholder="Mobile Phone Number" required className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md focus:border-black outline-none text-[14px]" />
                        </div>

                        {/* NO PAYMENT METHOD HERE - DIRECT CONFIRM ORDER BUTTON */}
                        <div className="pt-2 pb-12">
                            <button type="submit" disabled={isSubmitting} className={`w-full text-white py-4 rounded-md transition text-[15px] font-medium tracking-wide ${isSubmitting ? 'bg-gray-400' : 'bg-black hover:bg-gray-800 shadow-lg'}`}>
                                {isSubmitting ? 'Processing...' : 'Confirm order'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* 👇 CART/PRODUCT SECTION: Mobile me order-1 (upar), Desktop me md:order-2 (right me) */}
            <div className="w-full md:w-[45%] bg-gray-50 md:bg-white p-6 md:p-12 lg:pr-[15%] lg:pl-10 flex flex-col border-l border-gray-200 order-1 md:order-2">
                <div className="max-w-md mr-auto w-full pt-4">
                    <div className="space-y-4 pb-6">
                        {cart.map((item, index) => (
                            <div key={item.cartId || index} className="flex gap-4 items-center">
                                <div className="h-[64px] w-[64px] bg-white border border-[#d9d9d9] rounded-xl flex-shrink-0 relative flex items-center justify-center p-1.5">
                                    <img src={item.image || "no-image.jpg"} alt={item.name} className="h-full w-full object-contain rounded-lg" />
                                    <span className="absolute -top-2.5 -right-2.5 bg-[#323232] text-white text-[12px] font-medium w-[22px] h-[22px] flex items-center justify-center rounded-full z-10 shadow-sm">
                                        {item.quantity || 1}
                                    </span>
                                </div>
                                <div className="flex-1 pr-2">
                                    <h4 className="text-[14px] text-[#333333] font-medium leading-snug">{item.name}</h4>
                                    <p className="text-[12px] text-[#737373] mt-0.5">Size: {item.size}</p>
                                </div>
                                <div className="text-[14px] text-[#333333] font-medium">₹{(item.price * (item.quantity || 1)).toFixed(2)}</div>
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