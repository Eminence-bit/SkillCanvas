import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './contexts/AuthContext';
import { UserProvider } from './contexts/UserContext';

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
