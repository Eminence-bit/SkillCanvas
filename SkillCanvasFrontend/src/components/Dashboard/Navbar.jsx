import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
    
      <ul>
        <li>
          <Link to="/dashboard">Home</Link>
        </li>
        <li>
          <Link to="/dashboard/profile">Profile</Link>
        </li>
        <li>
          <Link to="/dashboard/roadmap">Roadmap</Link>
        </li>
        <li>
          <Link to="/dashboard/job-search">Job Search</Link>
        </li>
        <li>
          <Link to="/dashboard/tech-updates">Tech Updates</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
