

// const { Client, LocalAuth } = require('whatsapp-web.js');
// const qrcode = require('qrcode-terminal'); // Terminal me QR code dikhane ke liye

// const whatsappClient = new Client({
//     // LocalAuth session save rakhega, taaki baar-baar QR scan na karna pade
//     authStrategy: new LocalAuth(), 
//     puppeteer: {
//         headless: true, 
//         args: ['--no-sandbox', '--disable-setuid-sandbox'],
//         protocolTimeout: 300000 // 5 minute ka timeout (Error bachane ke liye)
//     }
// });

// // 1. Jab QR Code aayega, toh ye terminal me print karega
// whatsappClient.on('qr', (qr) => {
//     console.log('\n👇 Niche diye gaye QR Code ko apne WhatsApp se scan karein👇\n');
//     qrcode.generate(qr, { small: true });
// });

// // 2. Jab WhatsApp connect ho jayega
// whatsappClient.on('ready', () => {
//     console.log('\n✅ WhatsApp Bot Ready Hai! Successfully connect ho gaya.\n');
// });

// // 3. Agar kabhi WhatsApp disconnect ho jaye
// whatsappClient.on('disconnected', (reason) => {
//     console.log('❌ WhatsApp Disconnect ho gaya:', reason);
// });

// // Bot ko start karne ki command
// whatsappClient.initialize();

// module.exports = whatsappClient;