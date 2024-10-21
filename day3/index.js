// server.js
const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config(); // Load .env file

// serve static files (CSS, JS, images)
app.use(express.static('public'));

// serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
