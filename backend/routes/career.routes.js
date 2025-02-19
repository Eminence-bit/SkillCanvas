
const express = require('express');
const router = express.Router();
const careerController = require('../controllers/career.controller');
const { authenticateUser } = require('../middleware/auth.middleware');

router.post('/roadmap', authenticateUser, careerController.generateCareerRoadmap);

module.exports = router;