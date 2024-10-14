import React, { useState } from 'react';
import './Contact.css';  // Import the CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);  // State to control the form visibility
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });  // State to store form data

  const handleCallButtonClick = () => {
    setShowForm(true);  // Show the form when the button is clicked
  };

  const handleFormClose = () => {
    setShowForm(false);  // Hide the form when the close button is clicked
  };

  // Update form data state when inputs change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send form data to the backend
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Clear the form data and close the form on success
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setShowForm(false);
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('An error occurred while submitting the form.');
    }
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
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
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

export default Contact;
