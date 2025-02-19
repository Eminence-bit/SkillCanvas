// auth.config.js

const dotenv = require('dotenv');

dotenv.config();

// Authentication configuration
const authConfig = {
  jwtSecret: process.env.JWT_SECRET || 'default_jwt_secret', // Fallback for testing
  tokenExpiration: process.env.TOKEN_EXPIRATION || '1d', // Default: 1 day
};

module.exports = authConfig;