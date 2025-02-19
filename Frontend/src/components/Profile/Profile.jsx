import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import ProfileForm from './ProfileForm';

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <div>
        <p>Name: {user?.name || 'N/A'}</p>
        <p>Email: {user?.email || 'N/A'}</p>
      </div>
      <ProfileForm />
    </div>
  );
};

export default Profile;
