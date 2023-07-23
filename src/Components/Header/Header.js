import React from 'react';
import './Header.css';

function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="background">
      <div className="App">
        <header className="App-header">
          <a className="header-button" onClick={() => scrollToSection('home-page')}>
            Home
          </a>
          <a className="header-button" onClick={() => scrollToSection('about-me')}>
            About
          </a>
          <a className="header-button" onClick={() => scrollToSection('my-skills')}>
            Skills
          </a>
          <a className="header-button" onClick={() => scrollToSection('projects')}>
            Projects
          </a>
          <a className="header-button" onClick={() => scrollToSection('get-in-touch')}>
            Contact
          </a>
        </header>
      </div>
    </section>
  );
}

export default Header;
