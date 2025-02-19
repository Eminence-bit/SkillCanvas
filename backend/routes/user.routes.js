const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { validateRegister, validateLogin } = require('../middleware/validate.middleware');
const { authenticateUser } = require('../middleware/auth.middleware');


router.post('/register', validateRegister, userController.registerUser);


router.post('/login', validateLogin, userController.loginUser);

router.get('/profile', authenticateUser, userController.getUserProfile);


router.put('/profile', authenticateUser, userController.updateUserProfile);

module.exports = router;