import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to='/'className="nav-link">Home</Link>
      </div>
      <div className="navbar-right">
       
      </div>
    </nav>
  );
}

export default Navbar;
