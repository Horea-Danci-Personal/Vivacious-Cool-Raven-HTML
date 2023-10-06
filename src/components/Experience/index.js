import React from "react";

export const Experience = () => {
  return (
    <div className="container experience">
      <h1 id="Experience" className="title">
        Experience
      </h1>
      <div className="container-experience-parent">
        <div className="container-experience">
          <h2 style={{ marginBottom: 10 }}>Test Engineer</h2>
          <div>
            During my internship at Bosch in the Parking Systems department, I
            learned crucial technologies such as CANoe, CANape, Jira, and IBM
            Doors. Additionally, I gained hands-on experience in customer
            projects and developed strong teamwork skills.
          </div>
        </div>
        <div className="container-experience">
          <h2 style={{ marginBottom: 10 }}>Website Manager</h2>
          <div>
            During my tenure as a website manager at Bervas, my responsibilities
            revolved around bringing ideas for enhancing the website's design
            and functionality. Additionally, I consistently updated the website
            with new product data, ensuring that customers had access to the
            latest offerings.
          </div>
        </div>
        <div className="container-experience">
          <h2 style={{ marginBottom: 10 }}>Media Specialist</h2>
          <div>
            At KingPing Performance Sighetu Marmatiei, my role consisted of
            responsibilities such as content creation, client relations,
            marketing and communication. This was an important learning
            experience, offering practical insights into marketing and enhancing
            my ability to engage with clients while producing captivating visual
            content
          </div>
        </div>
      </div>
    </div>
  );
};
