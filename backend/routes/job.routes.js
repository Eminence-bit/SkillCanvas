
const express = require('express');
const router = express.Router();
const jobController = require('../controllers/job.controller');
const { authenticateUser } = require('../middleware/auth.middleware');


router.get('/search', authenticateUser, jobController.searchJobs);


router.post('/save', authenticateUser, jobController.saveJob);

module.exports = router;