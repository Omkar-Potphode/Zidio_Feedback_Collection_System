// Base URL for the backend server
const HOST = process.env.BACKEND_SERVER_URL;

// Authentication APIs
const SIGNUP_API = `${HOST}/api/user/register`; // Endpoint to register a new user (send name, email, and password)
const LOGIN_API = `${HOST}/api/user/login`; // Endpoint to login (send email and password)

// Feedback APIs
const ADD_FEEDBACK = `${HOST}/api/feeback/addFeedback`; // Endpoint to add feedback (send companyName, message, and rating in an object, and token in the bearer)
const EDIT_FEEDBACK = `${HOST}/api/feeback/editFeedback`; // Endpoint to edit feedback (send feedbackId, companyName, message, and rating in an object, and token in the bearer)
const GET_FEEDBACK = `${HOST}/api/feeback/deleteFeedback`; // Endpoint to get feedback (send Feedback Id in Params and token in the bearer)
const DELETE_FEEDBACK = `${HOST}/api/feeback/getFeedbacks`; // Endpoint to delete feedback (send Company Name in Params and token in the bearer)
