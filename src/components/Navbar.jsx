import React, { useState } from 'react';
import './Navbar.css';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container">
      <div className={`icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="mailto:chirayuvyas117@gmail.com" target='blank'><li>Email</li></a></li>
          <li><a href="https://www.linkedin.com/in/chirayu-vyas-6a493a224/" target='blank'><li>LinkedIn</li></a></li>
          <li><a href="https://github.com/Chirayu-Vyas" target='blank'><li>Github</li></a></li>
          <li><a href="https://www.instagram.com/chirayuvys" target='blank'><li>Instagram</li></a></li>
          <li><a href="../Resume/21BCE1230-Resume.docx" download="21BCE1230-Resume.docx"><li>Download Resume</li></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
