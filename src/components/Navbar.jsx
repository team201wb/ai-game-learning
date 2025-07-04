import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">AI Game Learning</h1>
      <div className="nav-links">
        <Link to="/login" className="nav-btn login-btn">Login</Link>
        <Link to="/signup" className="nav-btn signup-btn">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;

