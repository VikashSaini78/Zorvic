const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    phone: { type: String, required: true },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true }
    },
    selectedImage: { type: String, required: true },
    quantity: { type: Number, required: true, default: 1 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);