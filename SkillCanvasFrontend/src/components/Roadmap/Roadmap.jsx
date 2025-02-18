import React from 'react';
import CompanyRoadmap from './CompanyRoadmap';
import CareerTransitionRoadmap from './CareerTransitionRoadmap';

const Roadmap = () => {
  const [mode, setMode] = React.useState('company'); // 'company' or 'transition'

  return (
    <div className="roadmap-container">
      <h2>Create Learning Roadmap</h2>
      <div>
        <button onClick={() => setMode('company')}>Company-Specific</button>
        <button onClick={() => setMode('transition')}>Career Transition</button>
      </div>
      {mode === 'company' ? <CompanyRoadmap /> : <CareerTransitionRoadmap />}
    </div>
  );
};

export default Roadmap;
