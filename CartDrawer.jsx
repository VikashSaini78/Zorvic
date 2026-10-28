import React from 'react';
import { X } from 'lucide-react';

export default function CartDrawer({ cart, onClose, updateQuantity, onCheckout, totalAmount }) {
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
                                <div className="h-20 w-20 bg-[#f7f7f7] rounded-md flex items-center justify-center p-1">
                                    <img src={item.image} alt={item.name} className="h-full w-full object-contain" />
                                </div>
                                <div className="flex flex-1 flex-col justify-between py-1">
                                    <div>
                                        <h4 className="text-[13px] text-black leading-snug">{item.name}</h4>
                                        <div className="flex justify-between mt-1">
                                            <span className="text-[11px] text-gray-500">Size: {item.size}</span>
                                            <span className="text-[13px] text-black">Rs. {(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
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