import React from "react";
import node from "../../images/nodered.png";
import imb from "../../images/IBM_Cloud_logo.png";
import tia from "../../images/tia.png";

import azure from "../../images/azure.png";
import csss from "../../images/css.png";
import html5 from "../../images/html.png";

export const Projects = () => {
  return (
    <div className="container projects">
      <h1>Projects</h1>
      <div>
        <h2>Bachelor's degree: "Demonstrator for domotics"</h2>
        <div className="bachelors">
          <div className="container-imagini1">
            <img src={node} alt="poza" className="imagini" />
            <img src={imb} alt="poza" className="imagini" />
            <img src={tia} alt="poza" className="imagini tia" />
          </div>

          <span style={{ width: 400 }}>
            This project consisted of a web application used to mimic the remote
            monitoring and controlling of an industrial process. The main
            technologies used were NodeRED, IBM Cloud, TIA. The web application
            used a cloud based instance of NodeRED to send data to a Siemens
            microcontroller, which was wired to different specific hardware bits
            that were used to simulate the industrial process.
          </span>
        </div>
      </div>
      <div>
        <h2>
          Presentation website: This website, that you are currently browsing
        </h2>
        <div className="bachelors">
          <span style={{ width: 400 }}>
            This project was done to give an edge when it comes to applying for
            a possible career opportunity over the conventional resume, and
            ultimately to give a better first impression. This website was
            created using HTML and CSS elements, and hosted with the help of
            Microsoft Azure services.
          </span>
          <div className="container-imagini1">
            <img src={azure} alt="poza" className="imagini" />
            <img src={csss} alt="poza" className="imagini" />
            <img src={html5} alt="poza" className="imagini tia" />
          </div>
        </div>
      </div>
    </div>
  );
};
