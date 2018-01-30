import React from "react";
import styles from "./About.module.css";
import CSSModules from "react-css-modules";

import profileImage from "../../assets/images/profile.jpg";

const About = () => (
  <div className="container">
    <h2 className="center-align blue-text darken-1-text header-title no-select">About me</h2>
    <img
      className="z-depth-5 no-select"
      styleName="profile-image"
      src={profileImage}
      alt="Profile pic"
    />
    <p>
      Hi, I'm Joseph! I'm a <strong>full-stack developer</strong> proficient in HTML5, CSS3,
      JavaScript, and specializing in the MERN stack. I have a degree in Computer Science as well as
      a certification in full-stack web development. I'm experienced in building out all parts of a
      modern web application including front-end, back-end, and database components.
    </p>
    <div className="divider" />
    <h2 className="center-align blue-text darken-1-text header-title no-select">Skills</h2>
    <div className="row">
      <div className="col s12 m6">
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>SQL</li>
        </ul>
      </div>
      <div className="col s12 m6">
        <ul>
          <li>MongoDB</li>
          <li>Firebase</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    </div>
  </div>
);

export default CSSModules(About, styles);
