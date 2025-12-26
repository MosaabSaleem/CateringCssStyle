import "./Styles/Catering.css";
import Navbar from "./Components/Navbar.jsx";
import MenuItem from "./Components/menuItem.jsx";

import heroImage from "./assets/heroFoodImage.jpg";
import halalLogo from "./assets/halalLogo.png";
import aifsLogo from "./assets/AIFSLogo.png";

export default function Catering() {
  return (
    <div className="home-container">
      <div className="hero-container">
      <Navbar />
      
        <div className="image-container">
          <div className="hero-title-container">
            <h1 className="hero-title">
              <span className="hero-title-accent">Feast From The Middle East</span>
            </h1>
          </div>
          <img src={heroImage} alt="dishes example" className="hero-image"/>
        </div>
        <div className="hero-certifications-container">
          <div className="hero-certifications">
            <img src={halalLogo} alt="halal logo"></img>
            <img src={aifsLogo} alt="AIFS logo"></img>
          </div>
        </div>
      </div>

      <div className="menu-section">
        <div className="menu-top-section">
          <h2 className="menu-title">Our Menu</h2>
          <p className="menu-description">At C-ATE-ERING, we pride ourselves in quality and authenticity. Every dish is made with love and care, same as our grandmas overseas! Choose from one of our packages and enjoy flavours from back home </p>
        </div>
        <div className="menu-bottom-section">
          <div className="menu-items">
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
        </div>
      </div>

      <div className="reviews-gallery-section">
        <div className="reviews-section">

        </div>
        <div className="gallery-section">
          
        </div>
      </div>

      <div className="contact-section">

      </div>
    </div>
  );
}