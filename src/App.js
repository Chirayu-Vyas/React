import './App.css';
import React, {useState, useEffect} from 'react'
import First from "./components/First";
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Github from './components/Github';

function App() {
  return (
    <div className='APP'>
    
    <Navbar/>
    <First />
    <About/>
    <Skills/>
    <Github/>
    {/* <Techstack/> */}
    <Contact/>

      {/* <Parallax pages={10} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={1.5} factor={1.9} style={{backgroundImage : `url(${image})`, backgroundSize: 'cover',}}/>
        <ParallaxLayer offset={0} speed={3} factor={2.5} style={{backgroundImage : `url(${bigmt})`, backgroundSize: 'cover',}}/>
       
        <ParallaxLayer offset={0} speed={5}>
          <div id="text">
          <h1>Welcome to my Portfolio</h1>
          <p>Learning New Skills</p>
          <p>Everyday</p>
          </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.5} factor={3} style={{backgroundImage : `url(${rockymt})`, backgroundSize: 'cover',}}/>
          <ParallaxLayer offset={1} speed={1.5} factor={4} style={{backgroundImage : `url(${yt})`, backgroundSize: 'cover',}}/> 

    </Parallax> */}
    {/* <div class="landing">
      <a class="logo">Portfolio</a>
   
    <nav>
      <ul>
        <li>
          <a class="go" href="#">Home</a>
          <a class="go" href="#">Skills</a>
          <a class="go" href="#">About</a>
          <a class="go" href="#">Projects</a>
          <a class="go" href="#">Contact</a>
        </li>
      </ul>
    </nav>
    </div> */}
      {/* Add other pages/components here */}
      {/* <div className="main">
        <h1>We are Infinity </h1>
        <h2>hi</h2>
      </div>
      <div className='buttons'>
        <button>Contact</button>  
        <button>Reviews</button>
      </div> */}
      
      </div>
  );
}

export default App;
