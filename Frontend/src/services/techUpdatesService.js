import { fetchData } from './apiService';

export const getTechUpdates = async () => {
  // Replace with your actual tech updates API endpoint
  const response = await fetchData('/api/tech-updates');
  return response.updates;
};
