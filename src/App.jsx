import { useLocation } from 'react-router-dom';
import About from './About.jsx';
import ProjectCard from './ProjectCard.jsx';
// import Contact from './Contact.jsx';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {children}
      {/* Conditional rendering for About, ProjectCard, and Contact based on route */}
      {location.pathname === '/' && (
        <>
          <div className="about-section">
            <About />
          </div>
          <div id="project-section" className="project-section">
            <ProjectCard />
          </div>
          {/* <div id="contact-section">
            <Contact />
          </div> */}
        </>
      )}
    </>
  );
};

export default Layout;
