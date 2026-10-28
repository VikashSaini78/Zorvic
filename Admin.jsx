
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get("http://localhost:5003/api/orders");
                if (response.data.success) {
                    setOrders(response.data.data.reverse());
                }
            } catch (error) {
                console.error("Data laane me error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isAdmin");
        navigate("/"); 
    };

    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        const options = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-IN', options);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-xl font-medium text-gray-500 animate-pulse">Loading Table...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10 font-sans">
            <div className="max-w-[1600px] mx-auto">
                
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Order Detailed Table</h1>
                        <p className="text-sm text-gray-500 mt-1">Har field ke liye alag column (Bina text kate)</p>
                    </div>
                    <button 
                        onClick={handleLogout} 
                        className="bg-white border border-gray-200 text-red-600 px-6 py-2.5 rounded-lg font-medium hover:bg-red-50 transition-colors shadow-sm"
                    >
                        Logout
                    </button>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        {/* Table ki minimum width aur badha di taaki 11 columns fit aa sakein */}
                        <table className="w-full text-left border-collapse min-w-[1400px]">
                            <thead>
                                <tr className="bg-gray-100 border-b border-gray-200 text-[12px] uppercase tracking-wider text-gray-600 font-bold whitespace-nowrap">
                                    <th className="px-5 py-4">Order Date</th>
                                    <th className="px-5 py-4">Product Photo</th>
                                    <th className="px-5 py-4">Name</th>
                                    <th className="px-5 py-4">Address</th>
                                    <th className="px-5 py-4">Landmark</th>
                                    <th className="px-5 py-4">City</th>
                                    <th className="px-5 py-4">State</th>
                                    <th className="px-5 py-4">Pincode</th>
                                    <th className="px-5 py-4 text-center">Shoe Size</th>
                                    <th className="px-5 py-4 text-center">Quantity</th>
                                    <th className="px-5 py-4 text-right">Product Price</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {orders.length === 0 ? (
                                    <tr>
                                        <td colSpan="11" className="text-center py-12 text-gray-400">
                                            Data nahi mila.
                                        </td>
                                    </tr>
                                ) : (
                                    orders.map((order, index) => (
                                        <tr key={index} className="hover:bg-gray-50 transition-colors text-[13px] text-gray-800">
                                            
                                            {/* 1. Order Date */}
                                            <td className="px-5 py-4 whitespace-nowrap text-gray-500">
                                                {formatDate(order.createdAt)}
                                            </td>

                                            {/* 2. Product Photo */}
                                            <td className="px-5 py-4">
                                                <div className="w-14 h-14 bg-white border border-gray-200 rounded-lg p-1 flex items-center justify-center">
                                                    {order.selectedImage ? (
                                                        <img src={order.selectedImage} alt="Product" className="w-full h-full object-contain mix-blend-multiply" />
                                                    ) : (
                                                        <span className="text-[10px] text-gray-400">N/A</span>
                                                    )}
                                                </div>
                                            </td>

                                            {/* 3. Name */}
                                            <td className="px-5 py-4 font-semibold whitespace-normal break-words min-w-[120px]">
                                                {order.customerName}
                                            </td>

                                            {/* 4. Address (Ab katega nahi, agli line me aayega) */}
                                            <td className="px-5 py-4 whitespace-normal break-words min-w-[200px]">
                                                {order.address?.street || 'N/A'}
                                            </td>

                                            {/* 5. Landmark (Naya Column) */}
                                            <td className="px-5 py-4 whitespace-normal break-words min-w-[150px]">
                                                {order.address?.landmark || 'N/A'}
                                            </td>

                                            {/* 6. City */}
                                            <td className="px-5 py-4 whitespace-nowrap">
                                                {order.address?.city || 'N/A'}
                                            </td>

                                            {/* 7. State */}
                                            <td className="px-5 py-4 whitespace-nowrap">
                                                {order.address?.state || 'N/A'}
                                            </td>

                                            {/* 8. Pincode */}
                                            <td className="px-5 py-4 font-medium whitespace-nowrap">
                                                {order.address?.pincode || 'N/A'}
                                            </td>

                                            {/* 9. Shoe Size */}
                                            <td className="px-5 py-4 text-center font-bold">
                                                {order.size || '-'}
                                            </td>

                                            {/* 10. Product Quantity */}
                                            <td className="px-5 py-4 text-center font-bold text-blue-600">
                                                {order.quantity || 1}
                                            </td>

                                            {/* 11. Product Price */}
                                            <td className="px-5 py-4 text-right font-bold text-green-600 whitespace-nowrap text-[15px]">
                                                ₹{order.price ? order.price.toFixed(2) : "0.00"}
                                            </td>

                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

