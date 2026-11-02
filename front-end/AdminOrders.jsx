import React, { useEffect, useState } from "react";

function AdminOrders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    // Page khulte hi database se data mangwane ka function
    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            // Backend se GET request karke data mangwa rahe hain
            const response = await fetch("http://localhost:5003/api/orders");
            const result = await response.json();

            if (result.success) {
                setOrders(result.data); // Data state me save kar liya
            } else {
                console.error("Failed to fetch orders");
            }
        } catch (error) {
            console.error("❌ Error fetching data:", error);
        } finally {
            setLoading(false); // Loading band kar di
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                📦 All Customer Orders
            </h1>

            {loading ? (
                <p className="text-center text-gray-500 text-lg">Loading orders...</p>
            ) : orders.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">Abhi tak koi order nahi aaya hai.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {orders.map((order) => (
                        <div key={order._id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                            
                            {/* Top Section: Image */}
                            <div className="h-48 bg-gray-100 p-4 flex justify-center items-center">
                                {/* Database me jo selectedImage ka path gaya tha, wahi yahan show hoga */}
                                <img 
                                    src={order.selectedImage} 
                                    alt="Product" 
                                    className="max-h-full object-contain drop-shadow-md rounded"
                                    onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=No+Image" }} 
                                />
                            </div>

                            {/* Bottom Section: Order Details */}
                            <div className="p-5">
                                <h2 className="text-lg font-bold text-gray-900 mb-1">
                                    {order.customerName}
                                </h2>
                                <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                                    📞 {order.phone}
                                </p>

                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Size:</span>
                                        <span className="font-semibold text-gray-800">{order.size}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Quantity:</span>
                                        <span className="font-semibold text-gray-800">{order.quantity}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Total Price:</span>
                                        <span className="font-bold text-green-600">₹{order.price}</span>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 pt-3">
                                    <h3 className="text-xs font-semibold text-gray-400 uppercase mb-1">
                                        Delivery Address
                                    </h3>
                                    <p className="text-sm text-gray-700 leading-snug">
                                        {order.address?.street}, {order.address?.city} <br />
                                        {order.address?.state} - {order.address?.pincode}
                                    </p>
                                </div>
                                
                                <div className="mt-4 text-xs text-gray-400 text-right">
                                    Date: {new Date(order.createdAt).toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AdminOrders;