// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require('path');

// const orderRoutes = require('./Router'); 

// const app = express();


// app.use(cors({
//     origin: "*", 
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true
// }));

// app.use(express.json()); 
// app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// // --- Step 4: Serverless MongoDB Connection Caching ---
// const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/zenvikk'; 

// let isConnected = false;

// const connectDB = async () => {
//   if (isConnected) return;

//   try {
//     const db = await mongoose.connect(MONGO_URI);
//     isConnected = db.connections[0].readyState === 1;
//     console.log("✅ MongoDB Database Successfully Connect Ho Gaya!");
//   } catch (err) {
//     console.log("❌ MongoDB Connection Error:", err.message);
//     throw err;
//   }
// };

// app.use(async (req, res, next) => {
//   try {
//     await connectDB();
//     next();
//   } catch (error) {
//     res.status(500).json({ error: "Database connection failed", details: error.message });
//   }
// });


// app.get('/', (req, res) => {
//   res.status(200).json({ success: true, message: "Backend is running successfully on Vercel!" });
// });

// // API routes ko link karna
// app.use('/api', orderRoutes);


// if (process.env.NODE_ENV !== 'production') {
//   const PORT = process.env.PORT || 5003;
//   app.listen(PORT, () => {
//     console.log(`✅ Backend Server Port ${PORT} par chal raha hai...`);
//   });
// }

// module.exports = app;



require('dotenv').config(); // Local testing ke liye .env variables load karta hai
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Apne routes import karein
const orderRoutes = require('./Router'); 

const app = express();

// CORS aur JSON parsing middleware
app.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json()); 

// Note: Vercel par uploads folder kaam nahi karega, future mein Cloudinary use karein
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// --- Serverless MongoDB Connection Caching ---
// const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://vikashbanskhoh_db_user:nXKvmy8N3WYq5lfA@cluster0.qjwegfq.mongodb.net//zenvikk';
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://vikashbanskhoh_db_user:nXKvmy8N3WYq5lfA@cluster0.qjwegfq.mongodb.net/Zorvic'; 
let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("=> Using existing database connection");
    return;
  }

  try {
    // serverSelectionTimeoutMS: 5000 lagana zaroori hai taaki app 5s mein fail ho, hang na ho
    const db = await mongoose.connect(MONGO_URI, {
        serverSelectionTimeoutMS: 5000, 
    });
    
    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB Database Successfully Connect Ho Gaya!");
  } catch (err) {
    console.log("❌ MongoDB Connection Error:", err.message);
    throw err;
  }
};

// Har API request se pehle DB connection check karna
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next(); // Agar connect ho gaya toh request aage routes par bhejo
  } catch (error) {
    // Agar DB connect nahi hua toh yahin se error return kar do (timeout se bachne ke liye)
    return res.status(500).json({ 
        success: false, 
        error: "Database connection failed", 
        details: error.message 
    });
  }
});

// Default Health Check Route (Vercel par check karne ke liye)
app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: "Zenvikk Backend is running successfully on Vercel!" });
});

// Aapke API routes
app.use('/api', orderRoutes);

// Local environment ke liye server listen (Vercel isko ignore kar dega)
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5003;
  app.listen(PORT, () => {
    console.log(`✅ Backend Server Port ${PORT} par chal raha hai...`);
  });
}

// Vercel Serverless Function ke liye app export karna zaroori hai
module.exports = app;