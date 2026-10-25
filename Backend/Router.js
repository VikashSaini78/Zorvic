const express = require("express");
const router = express.Router();
const fs = require("fs"); 
const path = require("path"); 

const Order = require("./models"); 
const whatsappClient = require("./whatsappBot"); 
const { MessageMedia } = require('whatsapp-web.js'); // 👈 Asli photo bhejne ka tool

// POST: Naya Order save aur WhatsApp par bhejne ka route
router.post("/orders", async (req, res) => {
  try {
    const { customerName, phone, address, selectedImage, quantity } = req.body;

    if (!customerName || !phone || !address || !selectedImage || !quantity) {
      return res.status(400).json({ success: false, message: "Pura data nahi aaya hai." });
    }

    const newOrder = new Order({
      customerName,
      phone,
      address,
      selectedImage,
      quantity
    });

    // 1. Pehle Database me Save karo
    const savedOrder = await newOrder.save();
    console.log("✅ Order Database me successfully save ho gaya!");

    // 2. Ab WhatsApp par Message bhejo
    try {
        const myWhatsAppNumber = process.env.WHATSAPP_RECIPIENT;
        if (!myWhatsAppNumber) {
          throw new Error("WHATSAPP_RECIPIENT is not configured.");
        }
        
        const msgText = `🎉 *Zenvikk Naya Order Aaya Hai!* 🎉\n\n👤 *Customer:* ${customerName}\n📞 *Phone:* ${phone}\n📦 *Quantity:* ${quantity}\n📍 *Address:* ${address.street}, ${address.city}, ${address.state} - ${address.pincode}`;
        
        // React se '../Sneaker/sn-1-5.jpg' aayega, humein sirf naam 'sn-1-5.jpg' chahiye
        const imageName = selectedImage.split('/').pop(); 
        
        // Backend folder ke hisaab se Sneaker folder dhoondhna
        const backendFolder = __dirname; 
        const path1 = path.join(backendFolder, "../frontend/src/Sneaker", imageName);
        const path2 = path.join(backendFolder, "../frontend/public/Sneaker", imageName);
        const path3 = path.join(backendFolder, "../frontend/Sneaker", imageName);
        const path4 = path.join(backendFolder, "../Sneaker", imageName);

        let finalImagePath = "";

        // Check karna ki photo kahan rakhi hai
        if (fs.existsSync(path1)) finalImagePath = path1;
        else if (fs.existsSync(path2)) finalImagePath = path2;
        else if (fs.existsSync(path3)) finalImagePath = path3;
        else if (fs.existsSync(path4)) finalImagePath = path4;

        if (finalImagePath !== "") {
            // Photo mil gayi -> Asli Photo bhejo
            const media = MessageMedia.fromFilePath(finalImagePath);
            await whatsappClient.sendMessage(myWhatsAppNumber, media, { caption: msgText });
            console.log("✅ WhatsApp par Asli Photo bhej di gayi!");
        } else {
            // Photo nahi mili -> Sirf Text bhejo
            console.log("❌ Photo folder me nahi mili, sirf text bhej rahe hain.");
            await whatsappClient.sendMessage(myWhatsAppNumber, msgText + `\n\n🖼️ *Image Name:* ${selectedImage}`);
        }

    } catch (waError) {
        console.log("❌ WhatsApp msg fail hua:", waError.message);
    }
    
    res.status(201).json({ success: true, message: "Order save & WhatsApp sent!", data: savedOrder });
  } catch (error) {
    console.error("❌ Database Save Error:", error); 
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
});

// GET: Saare Orders nikalne ka route
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;