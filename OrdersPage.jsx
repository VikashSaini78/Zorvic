import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OrdersPage() {
    const [orders, setOrders] = useState([]);

    // Page khulte hi database se saare orders le aao
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get("http://localhost:5003/api/orders");
                setOrders(response.data.data); // Data ko state me save kiya
            } catch (error) {
                console.error("Orders fetch karne me error aayi:", error);
            }
        };
        fetchOrders(); 
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>🛒 Sabhi Customers Ke Orders</h2>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {orders.map((order) => (
                    <div key={order._id} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "10px", width: "300px" }}>
                        <img src={order.selectedImage} alt="Shoe" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                        <h3>👤 {order.customerName}</h3>
                        <p>📞 Phone: {order.phone}</p>
                        <p>👟 Size: {order.size}</p>
                        <p>💰 Price: ₹{order.price}</p>
                        <p>📦 Qty: {order.quantity}</p>
                        <p>📍 Address: {order.address.street}, {order.address.city}, {order.address.pincode}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OrdersPage;