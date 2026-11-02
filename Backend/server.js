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


require('dotenv').config(); // Zaroori: Local mein env load karne ke liye
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const orderRoutes = require('./Router'); 

const app = express();

app.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json()); 
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// --- Step 4: Serverless MongoDB Connection Caching ---
// Agar Vercel par env variable nahi mila toh by default local server try karega (jo Vercel par fail hoga)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/zenvikk'; 

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("=> Using existing database connection");
    return;
  }

  try {
    // FIX 1: serverSelectionTimeoutMS lagana zaroori hai. 
    // Isse agar DB connect nahi hua toh 5 second mein error de dega, app hang nahi hogi.
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
    next(); // Agar connect ho gaya toh agle route par bhejo
  } catch (error) {
    // FIX 2: Yahan 'return' lagana zaroori hai taaki request yahin stop ho jaye
    return res.status(500).json({ 
        success: false, 
        error: "Database connection failed", 
        details: error.message 
    });
  }
});

// Default Route
app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: "Backend is running successfully on Vercel!" });
});

// API routes ko link karna
app.use('/api', orderRoutes);

// Vercel par listen command ignore hoti hai, jo ki sahi hai
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5003;
  app.listen(PORT, () => {
    console.log(`✅ Backend Server Port ${PORT} par chal raha hai...`);
  });
}

module.exports = app;