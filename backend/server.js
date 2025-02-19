// server.js

const http = require('http');
const app = require('./app'); // Import the Express app from app.js
const dotenv = require('dotenv');
const connectDB = require('./config/db.config');
const { validate } = require('./models/user.model');
const validateEnv = require('./config/env.config');

// Load environment variables from .env file
dotenv.config();

// Define the port (use PORT from .env or default to 5000)
const PORT = process.env.PORT || 5000;

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Start the server and listen on the specified port
server.listen(PORT, () => {
  validateEnv
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});

// Handle unhandled promise rejections (optional but recommended)
process.on('unhandledRejection', (error) => {
  console.error('Unhandled Rejection:', error);
  server.close(() => {
    process.exit(1); // Exit the process with a failure code
  });
});