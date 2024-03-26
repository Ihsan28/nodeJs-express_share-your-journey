const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const config = require('./config');

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
mongoose.connect('mongodb://localhost:27017/shareyourjourney');

// db.once('open', () => {
//     console.log('Connected to MongoDB database');
// });

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
