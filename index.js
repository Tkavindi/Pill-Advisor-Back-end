const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Import routes
const searchRoutes = require('./Routes/searchRoute');
const medicineRoutes = require('./Routes/medicineRoute');

// Middleware
app.use(cors());
app.use(express.json());

// Use routes
app.use('/api', searchRoutes);  // Search routes
app.use('/api', medicineRoutes);  // Medicine routes

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
