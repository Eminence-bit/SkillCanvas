import { fetchData } from './apiService';

export const generateCompanyRoadmap = async (company, position) => {
  // Replace with your backend endpoint or OpenAI integration
  const response = await fetchData('/api/roadmap/company', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ company, position })
  });
  return response.roadmap;
};

export const generateCareerTransitionRoadmap = async (currentSkills, targetCareer) => {
  // Replace with your backend endpoint or OpenAI integration
  const response = await fetchData('/api/roadmap/career-transition', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ currentSkills, targetCareer })
  });
  return response.roadmap;
};
