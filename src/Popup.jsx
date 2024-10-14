import React from 'react';
import './Popup.css'; // Import CSS for styling

const ProjectDetailPopup = ({ project, onClose }) => {
  if (!project) return null; // Don't render if no project is selected

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {/* Add more detailed information here */}
      </div>
    </div>
  );
};

export default ProjectDetailPopup;
