import React from 'react';

const RoadmapItem = ({ item }) => {
  return (
    <div className="roadmap-item">
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </div>
  );
};

export default RoadmapItem;
