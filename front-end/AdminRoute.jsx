import React from 'react';
import { Navigate } from 'react-router-dom';

export default function AdminRoute({ children }) {
    // Check karein ki localStorage me isAdmin "true" hai ya nahi
    const isAdmin = localStorage.getItem("isAdmin") === "true";

    // Agar admin nahi hai, toh seedha Home page ("/") par bhej do
    if (!isAdmin) {
        alert("Access Denied!.");
        return <Navigate to="/" replace />; 
    }

    // Agar admin hai, toh data wala page dikha do
    return children;
}