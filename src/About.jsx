import React from 'react';
import './About.css';  // Import CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <section className="about-me">
        <h1 className="about">About Me</h1>
        <p>
          Dynamic and ambitious Process Associate with near one year background in data collection and processing. 
          Adept at ensuring data accuracy and completeness while fostering strong client relationships. 
          Skilled in preparing insightful reports and collaborating with team leaders to achieve organizational goals. 
          As an App Engineering Intern, I honed my full-stack development expertise, specializing in ReactJS, .NET, C#, and MongoDB. 
          I designed and implemented scalable web applications, including a comprehensive web-based leave application system. 
          Adept at role-based access control, responsive UI design, and real-time dashboard development. 
          Armed with a Master's in Computer Applications and a B.Sc(IT), I am well-equipped to excel as a Software Developer, 
          bringing proficiency in HTML & CSS, JavaScript, MySQL, and React to drive innovative solutions.
        </p>
      </section>

      <section className="skills-section">
        <div className="skills">
          <h2>Programming Languages</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>C#</li>
            <li>SQL</li>
            <li>C++</li>
          </ul>
        </div>

        <div className="technologies">
          <h2>Technologies</h2>
          <ul>
            <li>ReactJS</li>
            <li>.NET</li>
            <li>MongoDB</li>
            <li>Azure</li>
            <li>Version Control (Git)</li>
            <li>MySQL</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
