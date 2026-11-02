const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    phone: { type: String, required: true },
    
    // 👇 Yahan se maine 'required' hata diya hai aur Default value laga di hai
    email: { type: String, default: "Not Provided" }, 
    
    address: {
      street: { type: String, default: "Not Provided" },
      landmark: { type: String, default: "Not Provided" },
      city: { type: String, default: "Not Provided" },
      state: { type: String, default: "Not Provided" },
      pincode: { type: String, default: "000000" },
      
      // 🚀 YAHAN THI PROBLEM! Maine required hata diya aur default 'India' kar diya
      country: { type: String, default: "India" } 
    },
    
    selectedImage: { type: String, required: true },
    quantity: { type: Number, required: true, default: 1 },
    size: { type: String, default: "8" },  // Size ka bhi required hata diya
    price: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);