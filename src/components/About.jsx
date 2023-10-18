




import React from 'react';

import './About.css';
import profileImage from '../Videos/avatar.svg'; 

const About = () => {
  return (
      <div className="about-container">
        <div className="about-content">
          <img src={profileImage} alt="Profile" />
          <div className="about-content-text">
            <h2>LET ME INTRODUCE MYSELF</h2>
            <p>
            I'm an enthusiastic full stack developer who values clean code and has a strong sense of design. I find joy in crafting attractive and functional web interfaces.    
            </p>
            <p>
            My expertise lies in HTML, CSS, JavaScript, and popular front-end frameworks such as React and Vue.js. I'm constantly eager to expand my knowledge and stay current with the ever-evolving landscape of web development technologies.
            </p>
            <p>Additionally, I am proficient in foundational languages like C++, JavaScript, and Go, and I possess a profound interest in delving into the realms of data science and machine learning. Moreover, I have experience in effectively utilizing AI tools, enhancing my capabilities in various domains.
</p>
            
          </div>
        </div>
      </div>
  );
};

export default About;
