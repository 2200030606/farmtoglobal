import React, { useState } from 'react';
import './main_css/signup.css'; 
import signup from './main_images/login.jpg'; 
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

function Signup() {
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (password !== confirmPassword) {
      setShowPopup(true); 
    } else {
      setShowPopup(false); 
      console.log("Form submitted");
      
    }
  };

  return (
    <div className="signup-container" style={{paddingBottom:"450px"}}>
      <div className="signup-card">
        <div className="image-container">
          <img src={signup} alt="Signup" />
        </div>
        <div className="signup-details">
          <h2>Create Client Account</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />

            <label htmlFor="password">Password:</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <label htmlFor="confirm-password">Confirm Password:</label>
            <div className="password-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                name="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span className="toggle-password" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button type="submit">Sign Up</button>
          </form>
          <div className="login-link">
            Already have an account? <a href="/clientlogin">Login here</a>
          </div>
        </div>
      </div>

      {/* Pop-up Modal */}
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h3>Passwords do not match!</h3>
            <button onClick={() => setShowPopup(false)} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
