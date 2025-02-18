import React, { useState } from 'react';
import { generateCompanyRoadmap } from '../../services/roadmapService';
import RoadmapItem from './RoadmapItem';

const CompanyRoadmap = () => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [roadmap, setRoadmap] = useState(null);

  const handleGenerate = async () => {
    const generatedRoadmap = await generateCompanyRoadmap(company, position);
    setRoadmap(generatedRoadmap);
  };

  return (
    <div>
      <h3>Company-Specific Roadmap</h3>
      <div>
        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          placeholder="Job Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
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

export default CompanyRoadmap;
