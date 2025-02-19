const axios = require('axios');
const cheerio = require('cheerio');

exports.scrapeTechArticles = async (url) => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const articles = [];
    $('.post').each((index, element) => {
      const title = $(element).find('.title').text().trim();
      const link = $(element).find('a').attr('href');
      const description = $(element).find('.description').text().trim();

      articles.push({ title, link, description });
    });

    return articles;
  } catch (error) {
    console.error('Error scraping website:', error.message);
    throw new Error('Failed to scrape tech articles');
  }
};