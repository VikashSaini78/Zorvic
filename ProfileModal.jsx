import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// axios ki abhi zaroorat nahi hai agar hum direct code me password daal rahe hain
import { useNavigate } from 'react-router-dom';

export default function ProfileModal({ onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleAdminLogin = async (e) => {
        e.preventDefault();
        
        // 👇 YAHAN APNA EMAIL AUR PASSWORD SET KAREIN 👇
        const adminEmail = "vikashbanskhoh@gmail.com";
        const adminPassword = "jaitpuriya@0033";

        // Check kar rahe hain ki user ne yahi email/password dala hai ya nahi
        if (email === adminEmail && password === adminPassword) {
           toast.success("Admin Login Successful!", {
                position: "top-center",
                autoClose: 2000, // 2 second me band hoga
            });
            localStorage.setItem("isAdmin", "true"); // Browser me nishani save ki
            onClose(); // Modal band kiya
            navigate("/admin"); // Admin page par bhej diya
        } else {
           toast.error("Galat Email or Password!", {
                position: "top-center",
                autoClose: 3000,
            });
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex justify-end bg-black/40 backdrop-blur-sm animate-in fade-in">
            <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right">
                <div className="flex justify-end p-6">
                    <button onClick={onClose} className="p-2 text-black hover:opacity-50">
                        <X size={20} strokeWidth={1} />
                    </button>
                </div>
                <div className="flex-1 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-normal text-black mb-8 text-center">Admin Login</h2>
                    
                    <form onSubmit={handleAdminLogin} className="space-y-4">
                        <input 
                            type="email" 
                            placeholder="Admin Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none" 
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none" 
                        />
                        <button type="submit" className="w-full bg-black text-white py-3 rounded-md mt-2">
                            Login as Admin
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}