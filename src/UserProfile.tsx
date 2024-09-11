import './UserProfile.css';

import React from 'react';

interface User {
  name: string;
  email: string;
  bio: string;
  profilePicture: string;
}

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={user.profilePicture} alt="Profile" className="profile-img" />
        <h2>{user.name}</h2>
      </div>
      <div className="profile-details">
        <p>
          <strong>이메일:</strong> {user.email}
        </p>
        <p>
          <strong>경력:</strong> {user.bio}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
