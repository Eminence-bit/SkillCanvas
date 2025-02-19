const LearningPath = require('../models/learning.model');
exports.getLearningProgress = async (req, res) => {
  try {
    const learningPaths = await LearningPath.find({ userId: req.user.id });

    const totalModules = learningPaths.reduce((acc, path) => acc + path.modules.length, 0);
    const completedModules = learningPaths.reduce(
      (acc, path) => acc + path.modules.filter((m) => m.status === 'completed').length,
      0
    );

    res.status(200).json({
      totalModules,
      completedModules,
      completionRate: ((completedModules / totalModules) * 100).toFixed(2),
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};