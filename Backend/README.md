# Backend

## Setup

Install dependencies with `npm install`, then copy `.env.example` to `.env`. Set `WHATSAPP_PHONE_NUMBER` to the account being linked (country code and number, without `+`) and `WHATSAPP_RECIPIENT` to the account that should receive order notifications, in the format `countrycodephonenumber@c.us`.

The service requires MongoDB at `mongodb://127.0.0.1:27017/zenvikk`. Start the API with `node server.js`; it listens on port `5003`. On first startup, link the WhatsApp account using the pairing code shown in the terminal.

Do not commit `.env` or the generated WhatsApp authentication files.
