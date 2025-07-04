import React from "react";
import "./AuthPages.css";

const SignupPage = () => {
  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form className="auth-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Signup</button>
        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
};

export default SignupPage;
