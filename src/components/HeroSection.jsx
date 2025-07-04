import React from "react";      // Ankit Rawat
import "./HeroSection.css";
import heroBanner from "../assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h2>Welcome to AI Game Learning</h2>
        <p>Fun, gamified learning experience with rewards & progress tracking.</p>
      </div>
      <img src={heroBanner} alt="Hero Banner" className="hero-image" />
    </div>
  );
};

export default HeroSection;


