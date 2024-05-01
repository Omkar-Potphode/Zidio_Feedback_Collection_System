// Import required modules and controllers
const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");

// Create a new router instance
const router = express.Router();

// Define routes and corresponding controller methods
router.route("/register").post(registerUser); // POST request to register a new user
router.post("/login", authUser); // POST request to authenticate a user

// Export the router for use in other parts of the application
module.exports = router;
