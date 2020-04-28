const express = require('express');
const router = express.Router();

// @route Get api/profile
// @desc  Test route
// @access Public
router.get('/', (req, res) => res.send('Welcome to the profile route'));

module.exports = router;
