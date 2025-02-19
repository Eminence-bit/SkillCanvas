
const Job = require('../models/job.model');


exports.searchJobs = async (req, res) => {
  try {
    const { location, industry } = req.query;

    const jobs = await Job.find({
      location: { $regex: location, $options: 'i' },
      skillsRequired: { $in: req.user.skills },
    });

    res.status(200).json({ jobs });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


exports.saveJob = async (req, res) => {
  try {
    const { jobId } = req.body;

    const job = await Job.findByIdAndUpdate(jobId, { saved: true }, { new: true });

    res.status(200).json({ message: 'Job saved successfully', job });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};