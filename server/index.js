// Import required modules and files
const express = require('express');
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

// Initialize Express app
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Define the port to listen on
const port = process.env.PORT || 80;

// Mount user routes under /api/user path
app.use("/api/user", userRoutes);

// Error handling middleware
app.use(notFound); // Handle 404 errors
app.use(errorHandler); // Handle other errors

// Start the server
app.listen(
    port,
    console.log(`Server running on PORT ${port}...`)
);
