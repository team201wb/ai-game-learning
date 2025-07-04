
import React from "react";    //Ankit Rawat
import "./FeaturesSection.css";

import funLearningIcon from "../assets/icon-learning.jpg";
import gamifiedModulesIcon from "../assets/icon-gamification.jpg";
import trackProgressIcon from "../assets/icon-progress.jpg";
import rewardsIcon from "../assets/icon-rewards.jpg";
import aiModulesIcon from "../assets/icon-learning.jpg";
import challengesIcon from "../assets/module-game.jpg";
import leaderboardIcon from "../assets/icon-progress.jpg";
import supportIcon from "../assets/default-avatar.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: funLearningIcon,
      title: "Fun Learning",
      description: "Enjoy engaging and playful learning experiences.",
    },
    {
      icon: gamifiedModulesIcon,
      title: "Gamified Modules",
      description: "Interactive challenges that keep you motivated.",
    },
    {
      icon: trackProgressIcon,
      title: "Track Progress",
      description: "Monitor your growth and celebrate milestones.",
    },
    {
      icon: rewardsIcon,
      title: "Earn Rewards",
      description: "Win badges and medals as you achieve goals.",
    },
    {
      icon: aiModulesIcon,
      title: "AI Modules",
      description: "Explore AI concepts through practical activities.",
    },
    {
      icon: challengesIcon,
      title: "Daily Challenges",
      description: "New tasks each day to boost consistency.",
    },
    {
      icon: leaderboardIcon,
      title: "Leaderboard",
      description: "Compete with peers and climb to the top.",
    },
    {
      icon: supportIcon,
      title: "AI Chat Support",
      description: "Get instant help and guidance anytime.",
    },
  ];

  return (
    <section className="features">
      <h2>Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.icon} alt={feature.title} className="feature-icon" />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
