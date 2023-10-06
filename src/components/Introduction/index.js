import React from "react";

export const Introduction = () => {
  return (
    <div style={{ height: 700 }} className="container introduction">
      <div className="horea-danci">Danci Horea</div>
      <div className="engineer">ENGINEER</div>
      <div className="engineer2">
        Engineering graduate with experience in Automotive Testing, Web
        Development, Industrial Engineering and much more.
      </div>
      <a
        href={require("../../cv/CV-Danci-Horea.pdf")}
        download="HoreaDanciResume"
        className="home-link-cv button buttonCV"
        style={{ marginTop: 15, padding: 17 }}
      >
        Download Resume
      </a>
    </div>
  );
};
