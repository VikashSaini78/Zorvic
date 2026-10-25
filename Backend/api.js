const express = require("express");
const router = express.Router();
const Order = require("./Router"); // Dhyan rakhein ki ye path sahi ho

// POST: Order save karne ka route
router.post("/orders", async (req, res) => {
  try {
    // 1. Dekhein ki React se kya data aa raha hai
    console.log("React se ye data aaya:", req.body); 

    const { customerName, phone, address, selectedImage, quantity } = req.body;

    if (!customerName || !phone || !address || !selectedImage || !quantity) {
      console.log("Validation fail ho gayi. Kuch data missing hai.");
      return res.status(400).json({ 
        success: false, 
        message: "Customer details, address, image aur quantity required hain." 
      });
    }

    const newOrder = new Order({
      customerName,
      phone,
      address,
      selectedImage,
      quantity
    });

    // 2. Data save karne ki koshish (Yahi par error aa raha tha database connect na hone ki wajah se)
    const savedOrder = await newOrder.save();
    
    console.log("Order Database me successfully save ho gaya!");
    res.status(201).json({ 
      success: true, 
      message: "Order successfully save ho gaya!", 
      data: savedOrder 
    });
  } catch (error) {
    // 3. Exact error terminal me print karega
    console.error("❌ Database Save Error:", error); 
    res.status(500).json({ 
      success: false, 
      message: "Server error", 
      error: error.message 
    });
  }
});

// GET: Orders fetch karne ka route
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    console.error("❌ Orders Fetch Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;