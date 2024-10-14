import React from 'react';
import './Navbar.css';  // Import the CSS file for styling
import Logo from './Logo';
import { NavLink } from 'react-router-dom';

const Navbar = ({toggleDarkMode}) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Logo />
      </div>
      <div className="navbar-menu">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/contact" onClick={(e) => {
          e.preventDefault();
          document.getElementById("contact-section").scrollIntoView({ behavior: 'smooth' });
        }} className="nav-link">Contact</NavLink>
        <NavLink to="/project" onClick={(e) => {
          e.preventDefault();
          document.getElementById("project-section").scrollIntoView({ behavior: 'smooth' });
        }} className="nav-link">Project</NavLink>
        <NavLink to='/bloglist' className="nav-link">Blog</NavLink>
        {/* <NavLink onClick={toggleDarkMode} className="button">DB</NavLink> */}
                {/* <button onClick={toggleDarkMode} className="button">DB</button> */}

      </div>
    </nav>
  );
};

export default Navbar;
