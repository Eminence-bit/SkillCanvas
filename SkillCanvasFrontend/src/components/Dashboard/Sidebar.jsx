import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar">
        <ul>
          <li>
            <Link to="/dashboard" className="sidehead">
              SkillCanva
            </Link>
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
          <li>
            <Link to="/dashboard/progress-tracker">Progress Tracker</Link>
          </li>
          <li>
            <Link to="/dashboard/roadmap">Create Roadmap</Link>
          </li>
          <li>
            <Link to="/dashboard/job-search">Job Search</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">Profile</Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
