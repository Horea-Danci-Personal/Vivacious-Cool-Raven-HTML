import React from "react";
import { Introduction } from "../components/Introduction";
import { AboutMe } from "../components/AboutMe";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { NavBar } from "../components/NavBar";

import "./home2.css";
import "./home.css";

export const Home2 = () => {
  return (
    <div className="home2" id="HomePage">
      <NavBar />
      <Introduction />
      <AboutMe />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};
