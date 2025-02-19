
const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analytics.controller');
const { authenticateUser } = require('../middleware/auth.middleware');


router.get('/progress', authenticateUser, analyticsController.getLearningProgress);

module.exports = router;