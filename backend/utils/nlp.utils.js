const natural = require('natural'); 
const tokenizer = new natural.WordTokenizer();
const TfIdf = natural.TfIdf;

exports.extractKeywords = (text) => {
  const tokens = tokenizer.tokenize(text);
  const wordCount = {};
  tokens.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  return Object.keys(wordCount).map((word) => ({
    word,
    count: wordCount[word],
  }));
};

exports.calculateSimilarity = (text1, text2) => {
  const tfidf = new TfIdf();
  tfidf.addDocument(text1);
  tfidf.addDocument(text2);

  const similarity = tfidf.tfidfs(text1, (i, measure) => measure);
  return similarity[1]; 
};