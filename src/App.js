import './Components/Header/Header.css';
import './App.css';
import './Mobile.css';
import React, { useRef } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./particlesConfig";
import AboutMe from './Components/AboutMe/AboutMe';
import './Components/AboutMe/AboutMe.css';
import Header from "./Components/Header/Header";
import MySkills from "./Components/MySkills/MySkills";
import './Components/MySkills/MySkills.css';
import Projects from "./Components/Projects/Projects.js";
import './Components/Projects/Projects.css';
import GetinTouch from "./Components/GetinTouch/GetinTouch.js";
import './Components/GetinTouch/GetinTouch.css';


function handleResumeButtonClick() {
  window.location.href = "https://okjos.github.io/ResumeWeb/";
}




function App() {
  const particlesInit = (engine) => {
    loadFull(engine);
  };




  return (
    <div className="App">
      <Particles init={particlesInit} options={particlesOptions} />
      <Header />

      <div className="text-container" id="home-page">
        <h2 className='home-h2'>Hello,</h2>
        <h1 className='home-h1'>I'm Joshua White</h1>
        <h1 className='home-h1-2'>I build websites.</h1>
        <button className='resume-button' onClick={handleResumeButtonClick}>Resume</button>
      </div>

      <AboutMe  />
      <MySkills  />
      <Projects  />
      <GetinTouch  />
    </div>
  );
}

export default App;
