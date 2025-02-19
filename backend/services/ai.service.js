const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

exports.generateRoadmapWithAI = async (role, company) => {
  try {
    const prompt = `Generate a step-by-step career roadmap for a ${role} at ${company}. Include required skills, tools, and learning resources.`;

    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 200,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error calling OpenAI API:', error.message);
    throw new Error('Failed to generate roadmap');
  }
};