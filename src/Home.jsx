import React from 'react';
import './Home.css';  // Import the CSS file for styling
import bg from './pky2.jpg'

const Home = () => {
  return (
    <div className="page-layout">
        
      <div className="left-section">
      <h2 className='tag'>Software Developer</h2>
        <p>
          Hi, I'm Pankaj. I'm a passionate software developer with experience in web development and a love for learning new technologies. I specialize in front-end development and enjoy creating user-friendly interfaces and applications. Feel free to explore my projects and get in touch!
        </p>
      </div>
      <div>
        <a href='/src/Pankaj_Kr_Yadav(SDE1).pdf' download>
        <button className='btn'>Download CV</button>
        </a>
      </div>
      <div className="right-section">
        <img src={bg} alt="My Photo" className="photo" />
      </div>
    </div>
  );
};

export default Home;
