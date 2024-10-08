import React from 'react';
import { useNavigate } from 'react-router-dom';
import './main_css/login.css'; 
import login from './main_images/login.jpg';

function Login() {
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/clientlogin'); 
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="image-container">
          <img src={login} alt="Login" />
        </div>
        <div className="login-details">
          <h2>Welcome Back Client</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit" className="login-button" onClick={() => window.location.href='/clienthome'}>
  Login
</button>

          </form>
          <p className="register-link">
            Don’t have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
