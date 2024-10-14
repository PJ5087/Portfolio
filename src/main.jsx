import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import About from './About.jsx';
import ProjectCard from './ProjectCard.jsx';
// import ContactSidebar from './ContactSidebar.jsx';
// import { Blog } from './Blog.jsx';
import Loading from './Loading.jsx';  // Import the Loading component
// import Blog from './Blog.jsx';
import './Darkmode.css'
import BlogList from './BlogList.jsx';
import App from './App.jsx'

const Main = () => {
  const [loading, setLoading] = useState(true);  // State for loading
  const [darkmode, setDarkMode] = useState(false)

  useEffect(() => {
    // Simulate a loading delay of 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    // Cleanup the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);  // Toggle dark mode
  };


  // const location = useLocation()

  return (
    <StrictMode>
      <Router>
        <div className={darkmode?'dark-mode':'light-mode'}>
        {loading ? (
          <Loading />  // Show the loading screen if still loading
        ) : (
          <>
            <Navbar toggleDarkMode={toggleDarkMode}/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/bloglist' element={<BlogList/>} />
            </Routes>

            {/* These components will display on all pages, outside of Routes */}

            {/* <div className='about-section'>
              <About />
            </div>
            <div id='project-section' className='project-section'>
            <ProjectCard />
            </div>
            
            <div id="contact-section">
              <Contact /> 
            </div> */}
            <App />
            <Footer />
            {/* <ContactSidebar /> */}
          </>
        )}
        </div>
      </Router>
    </StrictMode>
  );
};

// Render your app
createRoot(document.getElementById('root')).render(<Main />);
