const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

exports.fetchJobs = async (location, industry) => {
  try {
    const response = await axios.get('https://api.adzuna.com/v1/api/jobs/gb/search/1', {
      params: {
        app_id: process.env.ADZUNA_APP_ID,
        app_key: process.env.ADZUNA_APP_KEY,
        location: location || 'Remote',
        category: industry || 'IT',
      },
    });

    return response.data.results.map((job) => ({
      title: job.title,
      company: job.company.display_name,
      location: job.location.display_name,
      skillsRequired: job.skills_required || [],
      url: job.redirect_url,
    }));
  } catch (error) {
    console.error('Error fetching jobs:', error.message);
    throw new Error('Failed to fetch jobs');
  }
};