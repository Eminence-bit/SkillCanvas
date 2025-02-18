import React, { createContext, useState } from 'react';
import { login as loginService, register as registerService } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const login = async (email, password) => {
    const token = await loginService(email, password);
    setToken(token);
  };

  const register = async (userData) => {
    const token = await registerService(userData);
    setToken(token);
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
