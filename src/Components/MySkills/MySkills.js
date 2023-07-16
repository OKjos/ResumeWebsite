import React from 'react';
import './MySkills.css';
import Skills from '../../assets/skills.svg';

function MySkills() {
  return (
    <div className="skills-container" id="my-skills">
      <h1 className="skills-header">My Skills__</h1>
      <div className="skills-text-container">
        <img className="skills-img" src={Skills} alt="Skills" />
        <h1 className="skills-text">Since technologies are always evolving, I'm very 
        happy to go out and learn the new or changed technologies and to try them out 
        in building something with the new process.</h1>
        <h1 className="skills-text">If a project that I'm working on needs a different process then what I know 
        I'm always happy to have an excuse to go out and learn the new process. With working 
        in team or solo I always try to understand everyones view on the problem and if I'm
        alone I like to ask someone about my problem or their opinions on how it looks.</h1>
        <div className='ul-skills'>
          <h1 className="skills-text">Here are just a few of the Technologies/Tools I've worked with so far: </h1>
          <ul>
            <li><span style={{ color: 'green' }}>&#x25B6;</span> JavaScript</li>
            <li><span style={{ color: 'green' }}>&#x25B6;</span> React.js</li>
            <li><span style={{ color: 'green' }}>&#x25B6;</span> Node.js</li>
            <li><span style={{ color: 'green' }}>&#x25B6;</span> CSS</li>
            <li><span style={{ color: 'green' }}>&#x25B6;</span> HTML</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
