
const TechUpdate = require('../models/tech.model');

exports.getTechUpdates = async (req, res) => {
  try {
    const techUpdates = await TechUpdate.find({ userId: req.user.id });
    res.status(200).json({ techUpdates });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateTechPreferences = async (req, res) => {
  try {
    const { categories, frequency } = req.body;

    const techUpdate = await TechUpdate.findOneAndUpdate(
      { userId: req.user.id },
      { categories, frequency },
      { new: true }
    );

    res.status(200).json({ message: 'Preferences updated successfully', techUpdate });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};