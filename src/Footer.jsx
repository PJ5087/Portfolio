import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="footer-icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/pankaj-kumar-yadav-046097234/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
        <a href="https://www.instagram.com/i_kumarpankaj" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="footer-icon" />
        </a>
      </div>
      <div className="footer-address">
        <p>Gopal Reddy Nagar, Hafeeezpet, Hyderabad, 50049</p>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Pankaj.me. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
