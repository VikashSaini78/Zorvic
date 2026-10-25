const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { args: ['--no-sandbox', '--disable-setuid-sandbox'] }
});

// Aapka naya WhatsApp number (Bina '+' sign ke)
const phoneNumber = process.env.WHATSAPP_PHONE_NUMBER;

client.on('qr', async (qr) => {
    console.log("QR Code skip kar rahe hain, Pairing Code manga ja raha hai...");
    try {
        if (!phoneNumber) {
            throw new Error("WHATSAPP_PHONE_NUMBER is not configured.");
        }

        // Yeh line QR ki jagah 8-digit ka code mangegi
        const pairingCode = await client.requestPairingCode(phoneNumber);
        
        console.log("\n=======================================================");
        console.log("👇 BINA QR CODE KE CONNECT KARNE KE LIYE 👇");
        console.log("Aapka Pairing Code hai:  " + pairingCode);
        console.log("=======================================================\n");
        console.log("Apne WhatsApp me jayein -> 'Linked Devices' -> 'Link a device' par click karein.");
        console.log("Niche 'Link with phone number instead' par click karein aur ye code dalein.");
    } catch (err) {
        console.log(" Pairing Code error:", err.message);
    }
});

client.on('ready', () => {
    console.log("✅ WhatsApp Bot Successfully Connect Ho Gaya!");
});

client.initialize();

module.exports = client;