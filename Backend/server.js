// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require('path');
// const orderRoutes = require('./Router'); 

// const app = express();

// // CORS sabhi websites ke liye allow kar diya (Frontend connection ke liye)
// app.use(cors({
//     origin: "*", 
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true
// }));

// app.use(express.json()); 
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // MongoDB Database se connection
// const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/zenvikk'; 

// mongoose.connect(MONGO_URI)
//   .then(() => console.log("✅ MongoDB Database Successfully Connect Ho Gaya!"))
//   .catch((err) => console.log("❌ MongoDB Connection Error:", err.message));

// // API routes ko link karna
// app.use('/api', orderRoutes);

// // Server start karna
// const PORT = process.env.PORT || 5003;
// app.listen(PORT, () => {
//   console.log(`✅ Backend Server Port ${PORT} par chal raha hai...`);
// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
// Router फाइल अगर रूट में है तो '../Router' लिखें
const orderRoutes = require('./Router'); 

const app = express();

// CORS सेटअप
app.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json()); 
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// --- Step 4: Serverless MongoDB Connection Caching ---
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/zenvikk'; 

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(MONGO_URI);
    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB Database Successfully Connect Ho Gaya!");
  } catch (err) {
    console.log("❌ MongoDB Connection Error:", err.message);
    throw err;
  }
};

// हर API रिक्वेस्ट से पहले DB कनेक्शन चेक करने के लिए Middleware
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    res.status(500).json({ error: "Database connection failed", details: error.message });
  }
});

// टेस्ट रूट (चेक करने के लिए कि Vercel पर बैकएंड चल रहा है या नहीं)
app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: "Backend is running successfully on Vercel!" });
});

// API routes ko link karna
app.use('/api', orderRoutes);

// --- Local Development vs Vercel Handling ---
// Local machine पर यह app.listen चलाएगा, और Vercel पर सीधे app एक्सपोर्ट करेगा
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5003;
  app.listen(PORT, () => {
    console.log(`✅ Backend Server Port ${PORT} par chal raha hai...`);
  });
}

// Vercel Serverless Function ke liye export
module.exports = app;
