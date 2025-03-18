import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">IRCTC</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/booking">Book Ticket</Link></li>
          <li><Link to="/train-list">Train List</Link></li>
          <li><Link to="/track-train">Track Train</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
