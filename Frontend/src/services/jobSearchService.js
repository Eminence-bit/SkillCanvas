import { fetchData } from './apiService';

export const searchJobs = async (query) => {
  // Replace with your actual job search API endpoint
  const response = await fetchData(`http://localhost:5000/api/v1/jobs/search?query=${encodeURIComponent(query)}`);
  return response.jobs;
};
