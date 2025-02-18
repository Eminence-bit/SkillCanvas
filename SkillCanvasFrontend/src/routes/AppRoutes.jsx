import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import Dashboard from '../components/Dashboard/Dashboard';
import Profile from '../components/Profile/Profile';
import Roadmap from '../components/Roadmap/Roadmap';
import JobSearch from '../components/JobSearch/JobSearch';
import ProgressTracker from '../components/ProgressTracker/ProgressTracker';
import TechUpdates from '../components/TechUpdates/TechUpdates';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard/*"
          element={
            // <ProtectedRoute>
              <Dashboard />
            // </ProtectedRoute>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="job-search" element={<JobSearch />} />
          <Route path="progress-tracker" element={<ProgressTracker />} />
          <Route path="tech-updates" element={<TechUpdates />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
