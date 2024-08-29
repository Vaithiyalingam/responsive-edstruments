import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-logo">Responsive Edstruments Assignment</div>
        <div className={`nav-items ${isOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link">
            One
          </Link>
          <Link to="/two" className="nav-link">
            Two
          </Link>
          <Link to="/three" className="nav-link">
            Three
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </nav>
    </header>
  );
};

export default Header;
