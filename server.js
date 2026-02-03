const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Helper route to serve the main page explicitly (optional, as static middleware handles index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Fallback for 404
app.use((req, res) => {
    res.status(404).send('<h1>404 - Gravity is too strong here (Page Not Found)</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is floating on http://localhost:${PORT}`);
});
