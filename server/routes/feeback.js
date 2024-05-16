// Import required modules and controllers
const express = require("express");
const {
  addFeedback,
  editFeedback,
  deleteFeedback,
  getFeedbacks,
} = require("../controllers/feebackController");

// Create a new router instances
const router = express.Router();

//Add Middlware
const {Protect} = require('../middleware/authMiddleware')

// Define routes and corresponding controller methods
router.route("/addFeedback").post(Protect,addFeedback); // POST request to Add a Feedback
router.route("/editFeedback").put(Protect,editFeedback); // Edit request to Edit a Feedback
router.route("/deleteFeedback/:feedbackId").delete(Protect,deleteFeedback); // Delete request to delete a feeback
router.route("/getFeedbacks/:companyName").get(Protect,getFeedbacks); // Get request to get all Feedbacks

// Export the router for use in other parts of the application
module.exports = router;
