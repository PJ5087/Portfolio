
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import './ContactSidebar.css';
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const ContactSidebar = () => {
  const [showDetails, setShowDetails] = useState(false);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const sidebar = document.querySelector('.contact-sidebar');
    if (location.pathname === '/about') {
      sidebar.classList.add('move-to-right');
    } else {
      sidebar.classList.remove('move-to-right');
    }
    
  }, [location]);

  // if(location.pathname==='/contact'){
  //   return null
  // }

  return (
    <div className={`contact-sidebar`}>
      <button className="contact-btn" onClick={() => setShowDetails(!showDetails)}>
        <FaPhone />
      </button>
      <div className={`contact-details ${showDetails ? 'show' : ''}`}>
        <p><FaPhone /> +91-6202218816</p>
        <p><FaWhatsapp /> +91-6202218816</p>
        <p><FaEnvelope /> pankaj.aps.5087@gmail.com</p>
      </div>
    </div>
  );
}

export default ContactSidebar;

