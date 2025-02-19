const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    role: {
      type: String,
      required: [true, 'Role is required'],
    },
    company: {
      type: String,
      default: '',
    },
    roadmap: [
      {
        step: {
          type: String,
          required: true,
        },
        resources: {
          type: [String],
          default: [],
        },
        status: {
          type: String,
          enum: ['not_started', 'in_progress', 'completed'],
          default: 'not_started',
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

const CareerRoadmap = mongoose.model('CareerRoadmap', careerSchema);

module.exports = CareerRoadmap;