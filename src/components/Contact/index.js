import React from "react";

export const Contact = () => {
  return (
    <div className="container contact">
      <h1
        id="Contact"
        className="title"
      >
        Contact
      </h1>
      <ul style={{ marginLeft: 20 }}>
        <li style={{ marginBottom: 10 }}>
          <a href="tel:+40 754 261 270">Phone number: +40 754 261 270</a>
        </li>
        <li style={{ marginBottom: 10 }}>
          <a href="mailto:horeadanci@yahoo.com">
            Send an email to: horeadanci@yahoo.com
          </a>
        </li>
        <li style={{ marginBottom: 10 }}>
          <a href="https://www.linkedin.com/in/danci-horea-488527239/">
            https://www.linkedin.com/in/danci-horea-488527239/
          </a>
        </li>
      </ul>
    </div>
  );
};
