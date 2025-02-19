const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
exports.generateAuthToken = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
    name: user.name,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRATION || '1d', 
  });
};

exports.verifyAuthToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
};