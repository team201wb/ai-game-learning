import React from "react";
import "./DashboardPage.css";
import defaultAvatar from "../assets/default-avatar.jpg"; 
import badgeGold from "../assets/badge-gold.jpg";
import badgeSilver from "../assets/badge-silver.jpg";

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h2>Welcome back, Ankit! 🎉</h2>
      <img src={defaultAvatar} alt="User Avatar" className="dashboard-avatar" />

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Modules Completed</h3>
          <p>8 / 10</p>
          <div className="progress-bar"><div className="progress" style={{ width: "80%" }}></div></div>
        </div>
        <div className="stat-card">
          <h3>Tasks Completed</h3>
          <p>25</p>
        </div>
        <div className="stat-card">
          <h3>Rewards Earned</h3>
          <div className="badges">
            <img src={badgeGold} alt="Gold Badge" />
            <img src={badgeSilver} alt="Silver Badge" />
          </div>
        </div>
      </div>

      <div className="dashboard-actions">
        <button className="action-btn">Start New Module</button>
        <button className="action-btn">View Leaderboard</button>
        <button className="action-btn">Claim Rewards</button>
      </div>
    </div>
  );
};

export default DashboardPage;
