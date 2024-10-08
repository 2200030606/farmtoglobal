import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt  } from 'react-icons/fa'; // Import the icons you need
import kanaka from './main_images/kanaka.JPG';
import srilakshmi from './main_images/srlakshmi.png';
import sarvya from './main_images/team3.png';
import './main_css/about.css';
import logo from './main_images/logo.jpg';

export default function About() {
  return (
    <div className="home-container-3">
      <div className="hero-section-3">
        <div className="card-3">
          <h2 style={{ color: 'black' }}><b>OUR STORY BEGINS</b></h2>
          <p style={{ color: 'black', paddingLeft: '20px' }}>
            We’re on a mission to empower farmers by transforming their raw crops into valuable products and 
            connecting them with global buyers. Faced with challenges in reaching international markets, 
            we created a platform that bridges this gap and promotes sustainable farming.<br /><br />
            Our journey started with a vision to support rural entrepreneurship and innovation.<br /><br />
            Join us in revolutionizing agriculture and making a global impact.
          </p>
        </div>
      </div>

      <div>
        <h3 style={{ paddingTop: "180px", paddingRight: "1260px", fontSize: "35px" }}>THE TEAM:</h3>
      </div>

      <div className="container">
        <div className="card-4">
          <img src={kanaka} alt="Team Member 1" />
          <div className="card-content">
            <h3>Team Member 1</h3>
            <p>Role: Lead Developer</p>
          </div>
        </div>

        <div className="card-4">
          <img src={srilakshmi} alt="Team Member 2" />
          <div className="card-content">
            <h3>Team Member 2</h3>
            <p>Role: Project Manager</p>
          </div>
        </div>

        <div className="card-4">
          <img src={sarvya} alt="Team Member 3" />
          <div className="card-content">
            <h3>Team Member 3</h3>
            <p>Role: UX Designer</p>
          </div>
        </div>
      </div>

      <div className="home-container-3" style={{ backgroundColor: "lightgray", textAlign: "left", paddingLeft: "20px" }}>
        <h3 style={{ fontSize: "35px", marginBottom: "0" }}><b>FOLLOW US ON</b></h3>
        <p style={{ marginTop: "0" }}>@farmtoglobal</p>

        <p style={{ paddingTop: "50px", fontFamily: "cursive" }}>To stay updated with the latest news, promotions, and </p>
        <p style={{ marginTop: "0", fontFamily: "cursive" }}>offerings from farm2global, make sure to follow us on social media accounts.</p>
        <p style={{ marginTop: "0", fontFamily: "cursive" }}>Don’t miss out on any updates!</p>
        <p style={{ marginTop: "0", fontFamily: "cursive" }}>Happy ordering!</p>

        <div style={{paddingRight: "1490px", paddingTop: "20px", display: "flex", justifyContent: "center", gap: "15px" }}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }}>
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }}>
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }}>
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
      <div className='home-container-5'style={{ backgroundColor: "white", textAlign: "left", paddingLeft: "20px" }}>

      </div>
      <div className="home-container-4" style={{ backgroundColor: "black", textAlign: "left", paddingLeft: "20px", display: 'flex', flexDirection: 'column' }}>
      <div className="home-container-4" style={{ backgroundColor: "black", textAlign: "left", paddingLeft: "20px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <div>
    <h3 style={{ color: 'white', fontSize: "30px", display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} /> {/* Logo */}
      POKE NOW
    </h3>

    <ul className="nav4">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/product">Product</a></li>
      <li><a href="/login">Login</a></li>
      <li><a href="/signup">Sign Up</a></li>
    </ul>

    <p style={{ color: "white" }}>@2024 Brand.Inc</p>
  </div>

  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
    <p style={{ color: "white" }}><FaEnvelope /> farmtoglobal@gmail.com</p>
    <p style={{ color: "white" }}><FaPhone /> 9052587776</p>
    <p style={{ color: "white" }}><FaMapMarkerAlt /> 76-64-07, Bhavanipuram, Vijayawada, Andhra Pradesh. 520012.</p>
  </div>
</div>

</div>

    </div>
  );
};
