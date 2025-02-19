import React from 'react';
import MilestoneChart from './MilestoneChart';

const ProgressTracker = () => {
  // Dummy progress data for illustration
  const progressData = [
    { milestone: 'Step 1', completed: true },
    { milestone: 'Step 2', completed: false },
    { milestone: 'Step 3', completed: false }
  ];

  return (
    <div>
      <h2>Progress Tracker</h2>
      <MilestoneChart data={progressData} />
    </div>
  );
};

export default ProgressTracker;
