import { fetchData } from './apiService';

export const searchJobs = async (query) => {
  // Replace with your actual job search API endpoint
  const response = await fetchData(`/api/jobs?query=${encodeURIComponent(query)}`);
  return response.jobs;
};
