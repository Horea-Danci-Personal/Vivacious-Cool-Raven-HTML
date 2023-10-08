import React from "react";
import pozaHorea from "../../images/poza-about-me.jpeg";

export const AboutMe = () => {
  return (
    <div className="container about-me">
      <h1
        id="AboutMe"
        className="title"
      >
        About me
      </h1>
      <div className="container-in-about">
        <img
          src={pozaHorea}
          alt="poza"
          className="poza-horea"
        />
        <span style={{ margin: 60, fontSize: 23 }}>
          I'm a recent graduate, with a passion for learning and a thirst for
          skill perfection. My winding academic journey, punctuated by various
          jobs and experiences, has equipped me with a diverse range of
          knowledge and skills across different fields and industries. I am
          eager to apply this multifaceted background, adapt to new challenges,
          and continue growing as a professional.
        </span>
      </div>
    </div>
  );
};
