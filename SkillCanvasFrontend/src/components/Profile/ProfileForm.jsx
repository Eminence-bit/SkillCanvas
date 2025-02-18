import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const ProfileForm = () => {
  const { user, updateUser } = useContext(UserContext);
  const [name, setName] = useState(user?.name || '');
  const [preferences, setPreferences] = useState(user?.preferences || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ ...user, name, preferences });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Preferences:</label>
        <input
          type="text"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          placeholder="e.g. React, AI, Web Development"
        />
      </div>
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfileForm;
