const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "mzIgiShQ#NaVoDNRk4VB0ah0ANybQafAKEngs4zKZgxuXq3LfyIc",
MONGODB: process.env.MONGODB || "mongodb+srv://m-saad001:<password>@saad01.268bdgk.mongodb.net/",
};
