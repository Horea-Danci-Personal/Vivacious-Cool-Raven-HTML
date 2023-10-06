import React from "react";

export const NavBar = () => {
  return (
    <div data-thq="thq-navbar-nav" className="home-desktop-menu">
      <nav className="home-links">
        <a href="#AboutMe" className="home-link">
          About Me
        </a>
        <a href="#Experience" id="TopPage" className="home-link1">
          Experience
        </a>
        <a href="#Education" className="home-link2">
          Education
        </a>
        <a href="#Projects" className="home-link3">
          Projects
        </a>
        <a href="#Contact" className="home-link4">
          Contact
        </a>
        <a href="#HomePage" className="home-link5 button">
          TOP
        </a>
      </nav>
    </div>
  );
};
