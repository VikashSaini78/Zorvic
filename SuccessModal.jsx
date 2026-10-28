import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function SuccessModal({ onClose }) {
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