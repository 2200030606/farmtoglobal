import React from 'react';

import { useNavigate } from 'react-router-dom';
import login from './main_images/login.jpg';
export default function AdminLogin() {
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/adminlogin'); 
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="image-container">
          <img src={login} alt="Login" />
        </div>
        <div className="login-details">
          <h2>Admin</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
