require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const orderRoutes = require('./Router'); // 👈 Sahi file link

const app = express();

app.use(cors());
app.use(express.json()); 

// Database Connection
const MONGO_URI = 'mongodb://127.0.0.1:27017/zenvikk'; 
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Database Successfully Connect Ho Gaya!"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err.message));

// Sahi API Route
app.use('/api', orderRoutes);

const PORT = 5003;
app.listen(PORT, () => {
  console.log(`Server port ${PORT} par chal raha hai...`);
});