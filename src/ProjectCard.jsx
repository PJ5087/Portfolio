import React, { useState } from 'react';
import './ProjectCard.css';  // Import the CSS for styling
import Popup from './Popup'; // Import the popup component

const projects = [
    {
        id:1,
        title: "My Projects"
    },
  {
    id: 2,
    title: 'Library Management System',
    description: 'A system to manage books, members, and branches using SQL.'
  },
  {
    id: 3,
    title: 'Leave Management System',
    description: 'A web application for employees to apply for leaves with role-based access.'
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    description: 'My personal portfolio showcasing my work, built with React and React Router DOM.'
  },
  // Add more projects as needed
];

const ProjectCard = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {projects.map((project) => (
          <div className="card" key={project.id} onClick={() => handleCardClick(project)}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      {selectedProject && (
        <Popup
          project={selectedProject}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default ProjectCard;
