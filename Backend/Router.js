const express = require("express");
const router = express.Router();
const Order = require("./models"); // Database schema import kiya

router.post("/orders", async (req, res) => {
  try {
    // 1. Frontend se data receive karein (let use kiya taaki baad me value change kar sakein)
    let { customerName, phone, email, address, selectedImage, quantity, size, price } = req.body;

    // 🚀 MASTER FIX: Agar email undefined aata hai, toh database ko error mat do, use default value de do
    if (!email || email === "undefined") {
      email = "Not Provided";
    }

    // 2. Ab validation check karein (Isme se maine 'email' ki strict checking hata di hai)
    if (!customerName || !phone || !address || !selectedImage || !size || price === undefined) {
      console.log("❌ Validation fail: Name, Phone, Address, Image, Size ya Price me se kuch missing hai.");
      return res.status(400).json({ 
        success: false, 
        message: "Kuch zaroori data missing hai." 
      }); 
    }

    // 3. Database me data bhejna (Ab email kabhi undefined hokar error nahi dega)
    const newOrder = new Order({
      customerName, 
      phone, 
      email,           // Yahan ab ya toh original email jayega ya "Not Provided" jayega
      address, 
      selectedImage, 
      quantity, 
      size, 
      price
    });

    // 4. Database me save!
    const savedOrder = await newOrder.save();
    console.log("✅ Order Database me successfully save ho gaya!");
    
    res.status(201).json({ success: true, data: savedOrder });

  } catch (error) {
    console.error("❌ Database Save Error:", error); 
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET: Saare orders dekhne ke liye (Admin ke liye)
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    console.error("❌ Orders Fetch Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});




// dtabase se front data


// backend/server.js ya routes file me
router.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Database me user ko dhundhna
        const user = await User.findOne({ email: email, password: password });

        if (user) {
            // Agar user mil gaya toh success bhejenge
            res.status(200).json({ success: true, message: "Login successful", data: user });
        } else {
            // Agar nahi mila toh error
            res.status(401).json({ success: false, message: "Email ya password galat hai" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
});



module.exports = router;