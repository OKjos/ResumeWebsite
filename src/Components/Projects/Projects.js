import './Projects.css';
import '../AboutMe/AboutMe.css';
import Razer from '../../assets/Razer-clone-IMG.jpg';
import Rock from '../../assets/rock-paper-scissors-IMG.png';
import Day from '../../assets/Day-countdown-IMG.png';
import ToDo from '../../assets/ToDo-list-IMG.png';

function handleRazerCodeClick() {
  window.open("https://github.com/OKjos/Razer-clone");
}
function handleRockCodeClick() {
  window.open("https://github.com/OKjos/Updated-rock-paper-scissor");
}
function handleDayCodeClick() {
  window.open("https://github.com/OKjos/Day-countdown");
}
function handleToDoCodeClick() {
  window.open("https://github.com/OKjos/todo-list");
}

function handleRazerLiveCode() {
  window.open("https://okjos.github.io/Razer-clone/");
}

function handleRockLiveCode() {
  window.open("https://okjos.github.io/Updated-rock-paper-scissor/");
}

function handleLiveDayCode() {
  window.open("https://okjos.github.io/Day-countdown/");
}

function handleToDoLiveCode() {
  window.open("https://okjos.github.io/todo-list/");
}



function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h1 className='project-header'>My Projects__</h1>
      <div className='project-grid'>
        <div>
          <div className='content'> 
          <img src={Razer} />



          </div>
          <div className='tools'> 
            <div>
              <h1>Razer Clone</h1>
              <h2>A Portfolio clone of Razers website.</h2>
                <button className='Razer-live' onClick={handleRazerLiveCode}>Live Demo</button>
                <button className='Razer-code' onClick={handleRazerCodeClick}>Code</button>
            </div>
          </div>
        </div>
        <div>
          <div className='content'>
          <img src={Rock} />


          </div>
          <div className='tools'>
            <h1>Rock, Paper, Scissor Game</h1>
            <h2>Just a simple rock, paper, scissor game.</h2>
            <button className='Rock-live' onClick={handleRockLiveCode}>Live Demo</button>
            <button className='Rock-code' onClick={handleRockCodeClick}>Code</button>

          </div>
        </div>
        <div>
          <div className='content'>
          <img src={Day} />


          </div>
          <div className='tools'>
            <h1>Day Countdown</h1>
            <h2>Takes inputed time and give the time left till that date.</h2>
            <button className='Day-live' onClick={handleLiveDayCode}>Live Demo</button>
            <button className='Day-code' onClick={handleDayCodeClick}>Code</button>

          </div>
        </div>
        <div>
          <div className='content'>
          <img src={ToDo} />



          </div>
          <div className='tools'>
            <h1>ToDo list</h1>
            <h2>Just a simple todo list app.</h2>
            <button className='ToDo-live' onClick={handleToDoLiveCode}>Live Demo</button>
            <button className='ToDo-code' onClick={handleToDoCodeClick}>Code</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
