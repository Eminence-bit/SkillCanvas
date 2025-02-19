
const dotenv = require('dotenv');

dotenv.config();

const validateEnv = () => {
  const requiredVars = [
    'PORT',
    'DATABASE_URL',
    'JWT_SECRET',
    'OPENAI_API_KEY',
    'NEWSAPI_KEY',
    'EMAIL_USER',
    'EMAIL_PASSWORD',
  ];

  const missingVars = requiredVars.filter((key) => !process.env[key]);

  if (missingVars.length > 0) {
    console.error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
    process.exit(1); 
  }

  console.log('Environment variables loaded successfully.');
};

module.exports = validateEnv;