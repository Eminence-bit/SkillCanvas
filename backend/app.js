const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const userRoutes = require('./routes/user.routes');
const learningRoutes = require('./routes/learning.routes');
const careerRoutes = require('./routes/career.routes');
const jobRoutes = require('./routes/job.routes');
const techRoutes = require('./routes/tech.routes');
const analyticsRoutes = require('./routes/analytics.routes');


const app = express();

app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

// Routes
app.use('/api/v1/users', userRoutes); 
app.use('/api/v1/learning', learningRoutes); 
app.use('/api/v1/careers', careerRoutes); 
app.use('/api/v1/jobs', jobRoutes); 
app.use('/api/v1/tech-updates', techRoutes);
app.use('/api/v1/analytics', analyticsRoutes); 

// Default route (optional)
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Personalized Study Guide API!',
    documentation: '/api-docs' 
  });
});

app.use((req, res, next) => {
  res.status(404).json({
    error: 'Route not found',
    message: 'The requested endpoint does not exist.'
  });
});

module.exports = app;