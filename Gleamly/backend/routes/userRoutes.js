// backend/routes/userRoutes.js

const express = require('express'); // Import express
const router = express.Router();    // Create a router instance

// User registration route
router.post('/register', (req, res) => {
  res.json({ message: 'User registered successfully' });
});

// User login route
router.post('/login', (req, res) => {
  res.json({ message: 'User logged in successfully' });
});

// Get user profile route
router.get('/profile', (req, res) => {
  res.json({ message: 'User profile data' });
});

module.exports = router;  // Export the router