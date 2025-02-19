
const express = require('express');
const router = express.Router();
const learningController = require('../controllers/learning.controller');
const { authenticateUser } = require('../middleware/auth.middleware');
const { validateLearningProgress } = require('../middleware/validate.middleware');
router.get('/paths', authenticateUser, learningController.getLearningPaths);


router.put('/progress', authenticateUser, validateLearningProgress, learningController.updateLearningProgress);

module.exports = router;