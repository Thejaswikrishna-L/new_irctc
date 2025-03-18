import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to IRCTC</h1>
      <p>Book your train tickets easily and track your train in real-time.</p>
      <Link to="/booking" className="btn">Book a Ticket</Link>
      <Link to="/track-train" className="btn secondary">Track Your Train</Link>
    </div>
  );
};

export default Home;
