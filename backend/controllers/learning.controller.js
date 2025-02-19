
const LearningPath = require('../models/learning.model');


exports.getLearningPaths = async (req, res) => {
  try {
    const learningPaths = await LearningPath.find({ userId: req.user.id });
    res.status(200).json({ learningPaths });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateLearningProgress = async (req, res) => {
  try {
    const { moduleId, status, score } = req.body;

    const learningPath = await LearningPath.findOneAndUpdate(
      { userId: req.user.id, 'modules.moduleId': moduleId },
      { $set: { 'modules.$.status': status, 'modules.$.score': score } },
      { new: true }
    );

    res.status(200).json({ message: 'Progress updated successfully', learningPath });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};