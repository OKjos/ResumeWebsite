import React from 'react';
import AboutSvg from '../../assets/AboutSvg.svg';


function handleResumeButtonClick() {
  window.location.href = "https://okjos.github.io/ResumeWeb/";
}


function AboutMe() {
  return (
    <div className="about-me-container" id="about-me">
      <div className="about-me-content">
          <div className="about-me-header-container">
            <h1 className='about-me-header'>About Myself__</h1>
          </div>
          <div className='about-me-text'>
            <h2 className='about-me-description'>Hello, I'm Joshua White and I am a Front-End Developer. My passion for 
            coding the Front End of websites is as great as my passion for everything else 
            I do in life. I love being able to think and express my ideas.</h2>
            <h2>
              I have been coding for around 1 year now. I've worked on many projects by
              myself and with close friends of mine.
            </h2>
            <div className="about-button-container">
              <button className='about-contact-button'>Contact Me</button>
              <button className='about-resume-button' onClick={handleResumeButtonClick}>Resume</button>
            </div>
          </div>
        <div className='about-img-container'>
          <img className='about-img' src={AboutSvg} alt="About Me" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
