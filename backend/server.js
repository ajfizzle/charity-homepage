require("dotenv").config(); // Load environment variables

console.log("MongoDB URI:", process.env.MONGODB_URI); // Debugging line to verify the URI
console.log("Port:", process.env.PORT); // Debugging line to verify the port

const express = require("express");
const connectDB = require("./config/db");
const donationRoutes = require("./routes/donationRoutes");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/donations", donationRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
