import React from 'react';

function UserProfile({ setIsLoggedIn }) {
  const handleLogout = () => {
    setIsLoggedIn(false); // Set the login status to false when logged out
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p>Welcome to your profile!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserProfile;
