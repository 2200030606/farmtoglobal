import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
import Login from './Login';
import SignUp from './SignUp';
import FarmerLogin from './FarmerLogin';
import NotFound from './NotFound'; 
import './main_css/navbar.css'; 
import logo from './main_images/logo.jpg';
import FarmerSignup from './FarmerSignup';
import AdminLogin from './AdminLogin';
import ClientHome from './ClientHome';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const handleLoginSelection = (path) => {
    toggleLoginModal(); 
    setLoading(true); 
    navigate(path); 
  };

 
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 1000); 
      return () => clearTimeout(timer); 
    }
  }, [loading]);

  return (
    <div>
      <nav className="navbar-1">
        <Link to="/" className="logo-1">
          <img src={logo} alt="Logo" />
        </Link>

        <button className="hamburger-1" onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'}
        </button>

        <ul className={menuOpen ? "show-1" : ""}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/product" onClick={toggleMenu}>Product</Link></li>
          <li><button className="login-btn" onClick={toggleLoginModal}>Login</button></li>
        </ul>
      </nav>

      
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleLoginModal}>&times;</span>
            <h3>Select Login Type</h3>
            <button onClick={() => handleLoginSelection('/clientlogin')}>Client Login</button>
            <button onClick={() => handleLoginSelection('/farmerlogin')}>Farmer Login</button>
            <button onClick={() => handleLoginSelection('/adminlogin')}>Admin Login</button>
          </div>
        </div>
      )}

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading...</p> 
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/clientlogin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/farmerlogin" element={<FarmerLogin />} />
        <Route path="/farmersignup" element={<FarmerSignup/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/clienthome" element={<ClientHome/>}/>
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
}
