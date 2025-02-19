import React from 'react';

const JobList = ({ jobs }) => {
  if (!jobs.length) return <p>No jobs found.</p>;

  return (
    <ul>
      {jobs.map((job, index) => (
        <li key={index}>
          <h4>{job.title}</h4>
          <p>{job.company}</p>
        </li>
      ))}
    </ul>
  );
};

export default JobList;
