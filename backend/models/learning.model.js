
const mongoose = require('mongoose');

const learningSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Learning path title is required'],
    },
    description: {
      type: String,
      default: '',
    },
    modules: [
      {
        moduleId: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        status: {
          type: String,
          enum: ['not_started', 'in_progress', 'completed'],
          default: 'not_started',
        },
        score: {
          type: Number,
          default: 0,
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

const LearningPath = mongoose.model('LearningPath', learningSchema);

module.exports = LearningPath;