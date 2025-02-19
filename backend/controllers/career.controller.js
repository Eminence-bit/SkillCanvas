const CareerRoadmap = require('../models/career.model');

exports.generateCareerRoadmap = async (req, res) => {
  try {
    const { role, company } = req.body;

    const roadmap = new CareerRoadmap({
      userId: req.user.id,
      role,
      company,
      roadmap: [
        { step: 'Learn Python', resources: ['course1', 'book1'] },
        { step: 'Master Machine Learning', resources: ['course2', 'tutorial1'] },
      ],
    });

    await roadmap.save();

    res.status(201).json({ message: 'Roadmap generated successfully', roadmap });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};