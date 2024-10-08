import React from 'react';
import './main_css/home.css';
import img1 from './main_images/farmer.jpg';
import img2 from './main_images/farmer2.jpg';
import img3 from './main_images/farmer3.jpg';
import img4 from './main_images/farm.jpg';

function Home() {
  return (
    <div className="home-container-2">
      <div className="hero-section-2">
        <div className="card-2">
          <h2 style={{ color: 'black' }}>EMPOWERING FARMERS</h2>
          <h2 style={{ color: 'black', paddingLeft: '20px' }}>CONNECTING GLOBALLY</h2>
          <button className="order-now-button-2">ORDER NOW</button>
        </div>
      </div>
      <h3 style={{ alignItems: "center",fontSize:"25px" }}>FARM2GLOBAL</h3>
      <div className="image-section-2">
        <div className="zigzag-container-2">
          <div className="zigzag-item-2 left">
            <div className="text-2">In an era where sustainability and global connectivity are paramount, empowering rural entrepreneurs through technology has become crucial. Our platform is designed to bridge the gap between local farmers and international markets, providing a unique opportunity to transform raw agricultural produce into valuable products.</div>
            <img src={img1} alt="A farmer working in the field" />
          </div>
          <div className="zigzag-item-2 right">
            <img src={img2} alt="Farmers harvesting crops" />
            <div className="text-2"><b>Our Mission:</b> To support farmers in producing and marketing value-added agricultural products such as processed foods and handmade goods, thereby enhancing their income and promoting rural entrepreneurship. By leveraging technology, we aim to connect farmers with global buyers, ensuring that their products reach markets far beyond local boundaries.</div>
          </div>
          <div className="zigzag-item-2 left">
            <div className="text-2"><b>What We Offer:</b> Our web application offers a comprehensive suite of features that allow farmers to list their products, manage orders, and track their performance. Buyers can explore a diverse range of high-quality agricultural products, place orders, and support sustainable farming practices.</div>
            <img src={img3} alt="A farmer with livestock" />
          </div>
          <div className="zigzag-item-2 right">
            <img src={img4} alt="Produce displayed at a market" />
            <div className="text-2"><b>The Impact:</b> By utilizing our platform, farmers gain access to broader markets, innovative tools for product development, and a network of global buyers. This not only helps in reducing farm waste but also fosters economic growth in rural areas, promoting sustainable practices and creating new business opportunities.</div>
          </div>
        </div>
      </div>
      <h3>Join us in revolutionizing agriculture and empowering rural communities through global connectivity and value-added products.</h3>
    </div>
  );
}

export default Home;
