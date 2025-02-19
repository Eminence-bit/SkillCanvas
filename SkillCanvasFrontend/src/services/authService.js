import { fetchData } from './apiService';

export const login = async (email, password) => {
  const response = await fetchData('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return response.token;
};

export const register = async (userData) => {
  const response = await fetchData('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  return response.token;
};
