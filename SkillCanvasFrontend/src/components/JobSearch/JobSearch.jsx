import React, { useState } from 'react';
import JobList from './JobList';
import { searchJobs } from '../../services/jobSearchService';

const JobSearch = () => {
  const [query, setQuery] = useState('');
  const [jobs, setJobs] = useState([]);

  const handleSearch = async () => {
    const results = await searchJobs(query);
    setJobs(results);
  };

  return (
    <div>
      <h2>Job Search</h2>
      <input
        type="text"
        placeholder="Search jobs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <JobList jobs={jobs} />
    </div>
  );
};

export default JobSearch;
