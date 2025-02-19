import React, { useEffect, useState } from 'react';
import { getTechUpdates } from '../../services/techUpdatesService';

const TechUpdates = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    async function fetchUpdates() {
      const data = await getTechUpdates();
      setUpdates(data);
    }
    fetchUpdates();
  }, []);

  return (
    <div>
      <h2>Tech Updates</h2>
      <ul>
        {updates.map((update, index) => (
          <li key={index}>
            <a href={update.url} target="_blank" rel="noopener noreferrer">
              {update.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechUpdates;
