const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');

const donationRoutes = require('./routes/donationRoutes');
const requestRoutes = require('./routes/requestRoutes');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Allows parsing JSON data
app.use(cors()); // Enables CORS for frontend communication

app.use('/api/auth', authRoutes);

app.use('/api/donations', donationRoutes);
app.use('/api/requests', requestRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
