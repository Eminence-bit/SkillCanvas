import React, { useState } from 'react';
import { generateCareerTransitionRoadmap } from '../../services/roadmapService';
import RoadmapItem from './RoadmapItem';

const CareerTransitionRoadmap = () => {
  const [currentSkills, setCurrentSkills] = useState('');
  const [targetCareer, setTargetCareer] = useState('');
  const [roadmap, setRoadmap] = useState(null);

  const handleGenerate = async () => {
    const generatedRoadmap = await generateCareerTransitionRoadmap(
      currentSkills,
      targetCareer
    );
    setRoadmap(generatedRoadmap);
  };

  return (
    <div>
      <h3>Career Transition Roadmap</h3>
      <div>
        <input
          type="text"
          placeholder="Current Skills"
          value={currentSkills}
          onChange={(e) => setCurrentSkills(e.target.value)}
        />
        <input
          type="text"
          placeholder="Target Career"
          value={targetCareer}
          onChange={(e) => setTargetCareer(e.target.value)}
        />
        <button onClick={handleGenerate}>Generate Roadmap</button>
      </div>
      {roadmap &&
        roadmap.map((item, index) => (
          <RoadmapItem key={index} item={item} />
        ))}
    </div>
  );
};

export default CareerTransitionRoadmap;
