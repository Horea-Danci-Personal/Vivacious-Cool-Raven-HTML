import React from "react";
import logoUTCN from "../../images/logo-utcn.png";

export const Education = () => {
  return (
    <div className="container education">
      <h1 id="Education" className="title">
        Education
      </h1>
      <div className="container-in-about">
        <img src={logoUTCN} alt="poza" className="poza-horea" />
        <div style={{ margin: 75 }}>
          <ul>
            <li style={{ fontSize: 30 }}>
              Technical University of Cluj Napoca
            </li>
          </ul>
          <span style={{ fontSize: 25 }}>
            Bachelor's degree in Industrial Engineering and Robotics 2018 - 2022
          </span>
        </div>
      </div>
    </div>
  );
};
