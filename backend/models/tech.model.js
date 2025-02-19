
const mongoose = require('mongoose');

const techSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    categories: {
      type: [String],
      default: [],
    },
    frequency: {
      type: String,
      enum: ['daily', 'weekly', 'monthly'],
      default: 'daily',
    },
    viewedArticles: [
      {
        articleId: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        viewedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const TechUpdate = mongoose.model('TechUpdate', techSchema);

module.exports = TechUpdate;