import React, { useState } from 'react';
import './Contact.css';  // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Phone = () => {
  const [showForm, setShowForm] = useState(false);  // State to control the form visibility

  const handleCallButtonClick = () => {
    setShowForm(true);  // Show the form when the button is clicked
  };

  const handleFormClose = () => {
    setShowForm(false);  // Hide the form when the close button is clicked
  };

  return (
    <div className="contact-page">
      <h1 className="sound">Sound Interesting?</h1>
      <div className="contact-content">
        <button onClick={handleCallButtonClick} className="call-button">
          <FontAwesomeIcon icon={faPhoneAlt} className="call-icon" />
          Call Now
        </button>
      </div>
      <p className="hop">Let's hop on a call</p>

      {/* Popup form */}
      {showForm && (
        <div className="popup-form-overlay">
          <div className="popup-form">
            <h2>Contact Form</h2>
            <form>
              <label>
                Name:
                <input type="text" name="name" placeholder="Your Name" />
              </label>
              <label>
                Email:
                <input type="email" name="email" placeholder="Your Email" />
              </label>
              <label>
                Message:
                <textarea name="message" placeholder="Your Message"></textarea>
              </label>
              <button type="submit">Submit</button>
            </form>
            <button onClick={handleFormClose} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Phone;
