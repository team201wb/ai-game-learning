import React from "react";    // Ankit Rawat
import "./RewardsSection.css";
import goldBadge from "../assets/badge-gold.jpg";
import silverBadge from "../assets/badge-silver.jpg";
import bronzeBadge from "../assets/badge-bronze.jpg";

const RewardsSection = () => {
  return (
    <section className="rewards-section">
      <h2>Earn Rewards</h2>
      <div className="rewards-cards">
        <div className="reward-card">
          <img src={goldBadge} alt="Gold" />
          <p>Gold</p>
        </div>
        <div className="reward-card">
          <img src={silverBadge} alt="Silver" />
          <p>Silver</p>
        </div>
        <div className="reward-card">
          <img src={bronzeBadge} alt="Bronze" />
          <p>Bronze</p>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
