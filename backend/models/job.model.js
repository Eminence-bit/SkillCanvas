
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Job title is required'],
    },
    company: {
      type: String,
      required: [true, 'Company name is required'],
    },
    location: {
      type: String,
      default: 'Remote',
    },
    skillsRequired: {
      type: [String],
      default: [],
    },
    url: {
      type: String,
      required: [true, 'Job URL is required'],
    },
    saved: {
      type: Boolean,
      default: false,
    },
    applied: {
      type: Boolean,
      default: false,
    },
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

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;