
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

exports.fetchTechUpdates = async (categories) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: categories.join(' OR '),
        apiKey: process.env.NEWSAPI_KEY,
        sortBy: 'publishedAt',
        language: 'en',
      },
    });

    return response.data.articles.map((article) => ({
      title: article.title,
      description: article.description,
      url: article.url,
      publishedAt: article.publishedAt,
    }));
  } catch (error) {
    console.error('Error fetching tech updates:', error.message);
    throw new Error('Failed to fetch tech updates');
  }
};