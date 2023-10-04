import React from "react";
import { Introduction } from "../components/Introduction";
import { AboutMe } from "../components/AboutMe";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

import "./home2.css";

export const Home2 = () => {
  return (
    <div className="home2">
      <Introduction />
      <AboutMe />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};
