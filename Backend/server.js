require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Apne routes import karein
const orderRoutes = require('./Router'); 

const app = express();

app.use(cors({
  origin: ["https://zorvic-852l.vercel.app", "http://localhost:5173"], 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

app.use(express.json()); 

// Note: Vercel par uploads folder kaam nahi karega, future mein Cloudinary use karein
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Default Health Check Route sabse upar rakha hai
app.get('/', (req, res) => {
    res.status(200).json({ success: true, message: "Zenvikk Backend is running successfully on Vercel!" });
});

// --- Serverless MongoDB Connection Caching ---
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://vikashbanskhoh_db_user:nXKvmy8N3WYq5lfA@cluster0.qjwegfq.mongodb.net/Zorvic'; 

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        console.log("=> Using existing database connection");
        return;
    }

    try {
        await mongoose.connect(MONGO_URI, {
            serverSelectionTimeoutMS: 5000, 
        });
        console.log("✅ MongoDB Database Successfully Connect Ho Gaya!");
    } catch (err) {
        console.log("❌ MongoDB Connection Error:", err.message);
        throw err;
    }
};

// DB connection sirf API routes ke liye chalega
app.use('/api', async (req, res, next) => {
    try {
        await connectDB();
        next(); 
    } catch (error) {
        return res.status(500).json({ 
            success: false, 
            error: "Database connection failed", 
            details: error.message 
        });
    }
}, orderRoutes); 

// Local environment ke liye server listen (Vercel isko ignore kar dega)
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5003;
    app.listen(PORT, async () => {
        await connectDB(); 
        console.log(`✅ Backend Server Port ${PORT} par chal raha hai...`);
    });
}

// Vercel Serverless Function ke liye app export karna zaroori hai
module.exports = app;